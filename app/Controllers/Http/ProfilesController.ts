import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import Application from '@ioc:Adonis/Core/Application'
import * as fs from 'fs'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'
import Drive from '@ioc:Adonis/Core/Drive'

export default class ProfilesController {
  // Menampilkan profil pengguna yang sedang login berdasarkan username
  public async show({ auth }: HttpContextContract) {
    let profile = await Profile.query()
      .whereHas('user', (query) => {
        query.where('username', auth.user!.username)
      })
      .preload('xpMeter')
      .preload('schedule')
      .preload('user')
      .first()

    // Jika profil tidak ditemukan, buat profil baru
    if (!profile) {
      profile = await Profile.create({
        userId: auth.user!.id,
        avatarUrl: null,
      })
    }

    return {
      avatarUrl: profile.avatarUrl,
      level: profile.xpMeter?.level || 1,
      xp: profile.xpMeter?.xp || 0,
      streakCount: profile.schedule?.streakCount || 0,
      journalCount: profile.schedule?.days
        ? Object.values(profile.schedule.days).filter(Boolean).length
        : 0,
      grade: profile.user?.grade || 'N/A',
      age: profile.user?.age || 'N/A',
      username: profile.user?.username || 'N/A',
    }
  }

  // Change username
  public async changeUsername({ auth, request }: HttpContextContract) {
    const username = request.input('username')
    const user = await User.findOrFail(auth.user!.id)
    user.username = username
    await user.save()
    return { message: 'Username updated', username }
  }

  // Change password
  public async changePassword({ auth, request }: HttpContextContract) {
    const password = request.input('password')
    const user = await User.findOrFail(auth.user!.id)
    user.password = password // Jangan hash manual di sini!
    await user.save()
    return { message: 'Password updated' }
  }

  public async updateAvatar({ auth, request }: HttpContextContract) {
    const avatar = request.file('avatar_url', {
      extnames: ['jpg', 'png', 'jpeg', 'PNG'], // Allowed extensions
      size: '2mb', // Max file size
    })

    if (!avatar) {
      return { message: 'Please upload a valid avatar file' }
    }

    // Define subfolder for avatar uploads
    const subfolder = 'avatars'

    // Move file to disk
    await avatar.moveToDisk(subfolder)

    // Generate file URL
    const serverBaseUrl = 'http://103.196.155.157:3335' // Replace with your server URL
    const path = await Drive.getUrl(`${subfolder}/${avatar.fileName}`)
    const url = serverBaseUrl + path

    // Update profile with new avatar URL
    const profile = await Profile.findByOrFail('user_id', auth.user!.id)
    profile.avatarUrl = url
    await profile.save()

    return { message: 'Avatar updated successfully', avatarUrl: profile.avatarUrl }
  }

  // Membuat profil baru (untuk admin atau testing)
  public async store({ request }: HttpContextContract) {
    const data = request.only(['userId', 'avatarUrl'])
    const profile = await Profile.create(data)
    return profile
  }

  // Menghapus profil pengguna
  public async destroy({ params }: HttpContextContract) {
    const profile = await Profile.findOrFail(params.id)
    await profile.delete()
    return { message: 'Profile deleted successfully' }
  }

  // Memperbarui profil pengguna yang sedang login
  public async update({ auth, request }: HttpContextContract) {
    const profile = await Profile.query()
      .whereHas('user', (query) => {
        query.where('username', auth.user!.username) // Cari berdasarkan username
      })
      .firstOrFail()

    const data = request.only(['avatarUrl'])
    profile.merge(data)
    await profile.save()
    return profile
  }
}
