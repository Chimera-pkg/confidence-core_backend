import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'

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
