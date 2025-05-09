import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'

export default class ProfilesController {
  public async show({ auth }: HttpContextContract) {
    const profile = await Profile.query()
      .where('user_id', auth.user!.id)
      .preload('xpMeter') // Load XP and Level from XpMeter
      .preload('schedule') // Load Streak Count from Schedule
      .firstOrFail()

    return {
      avatarUrl: profile.avatarUrl,
      level: profile.xpMeter?.level || 1,
      xp: profile.xpMeter?.xp || 0,
      streakCount: profile.schedule?.streakCount || 0,
      journalCount: profile.schedule?.days
        ? Object.values(profile.schedule.days).filter(Boolean).length
        : 0,
    }
  }

  public async update({ auth, request }: HttpContextContract) {
    const profile = await Profile.query().where('user_id', auth.user!.id).firstOrFail()
    const data = request.only(['avatarUrl'])
    profile.merge(data)
    await profile.save()
    return profile
  }
}
