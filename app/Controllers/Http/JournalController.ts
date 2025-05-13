import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Journal from 'App/Models/Journal'
import XpMeter from 'App/Models/XpMeter'
import SchedulesController from './SchedulesController'

export default class JournalController {
  public async index({ auth }: HttpContextContract) {
    return await Journal.query().where('user_id', auth.user!.id)
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const data = request.only(['title', 'content', 'feeling', 'reasonFeeling'])
    const userId = auth.user!.id

    // Create a new journal
    const journal = await Journal.create({ ...data, userId })

    // Update streak in the schedule
    const scheduleController = new SchedulesController()
    const streakResponse = await scheduleController.updateStreakOnJournal({
      auth,
      request,
      response,
    } as HttpContextContract)

    // Add XP to XpMeter
    let xpMeter = await XpMeter.findBy('user_id', userId)
    if (!xpMeter) {
      xpMeter = await XpMeter.create({ userId, xp: 0, level: 1 })
    }

    xpMeter.xp += 20
    let isLevelUp = false

    // Check for level-up
    if (xpMeter.xp >= 100) {
      xpMeter.level += 1
      xpMeter.xp = 0 // Reset XP after level-up
      isLevelUp = true
    }

    await xpMeter.save()

    return response.created({
      message: 'Journal created successfully',
      journal,
      streak: streakResponse.streak,
      badges: streakResponse.badges,
      gamification: {
        xp: xpMeter.xp,
        level: xpMeter.level,
        isLevelUp,
      },
    })
  }

  public async show({ auth, params, response }: HttpContextContract) {
    const journal = await Journal.find(params.id)
    if (journal?.userId !== auth.user!.id) return response.unauthorized()
    return journal
  }

  public async update({ auth, params, request, response }: HttpContextContract) {
    const journal = await Journal.find(params.id)
    if (!journal || journal.userId !== auth.user!.id) return response.unauthorized()
    journal.merge(request.only(['title', 'content', 'feeling', 'reasonFeeling']))
    await journal.save()
    return journal
  }

  public async destroy({ auth, params, response }: HttpContextContract) {
    const journal = await Journal.find(params.id)
    if (!journal || journal.userId !== auth.user!.id) return response.unauthorized()
    await journal.delete()
    return response.noContent()
  }
}
