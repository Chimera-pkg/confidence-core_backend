import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schedule from 'App/Models/Schedule'

export default class SchedulesController {
  updateStreakOnJournal(arg0: HttpContextContract) {
    throw new Error('Method not implemented.')
  }
  // POST: Set hari
  public async setDays({ auth, request }: HttpContextContract) {
    const days = request.input('days') // array of hari
    let schedule = await Schedule.findBy('user_id', auth.user!.id)
    if (!schedule) {
      schedule = await Schedule.create({
        userId: auth.user!.id,
        days: JSON.stringify(days),
        streakCount: 0,
        journalCount: 0,
      })
    } else {
      schedule.days = JSON.stringify(days)
      await schedule.save()
    }
    return { days }
  }

  // GET: Streak
  public async streak({ auth }: HttpContextContract) {
    const schedule = await Schedule.findBy('user_id', auth.user!.id)
    return { streak: schedule?.streakCount || 0 }
  }

  // GET: Total Journal
  public async totalJournal({ auth }: HttpContextContract) {
    const schedule = await Schedule.findBy('user_id', auth.user!.id)
    return { journalCount: schedule?.journalCount || 0 }
  }

  // GET: Show schedule (for JournalController)
  public async show({ auth }: HttpContextContract) {
    const schedule = await Schedule.findBy('user_id', auth.user!.id)
    if (!schedule) return null
    // Parse days ke array of object
    let days = []
    try {
      days = JSON.parse(schedule.days)
    } catch {
      days = []
    }
    return {
      ...schedule.toJSON(),
      days,
    }
  }
}
