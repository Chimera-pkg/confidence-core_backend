import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'

export default class ProfilesController {
  public async show({ auth }: HttpContextContract) {
    const profile = await Profile.query().where('user_id', auth.user!.id).firstOrFail()
    return profile
  }

  public async update({ auth, request }: HttpContextContract) {
    const profile = await Profile.query().where('user_id', auth.user!.id).firstOrFail()
    const data = request.only(['avatarUrl', 'level', 'xp', 'streakCount', 'journalCount'])
    profile.merge(data)
    await profile.save()
    return profile
  }
}
