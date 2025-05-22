import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schedule from 'App/Models/Schedule'
import { DateTime } from 'luxon'

export default class SchedulesController {
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
    const defaultDays = [
      { day: 'Mon', active: false },
      { day: 'Tue', active: false },
      { day: 'Wed', active: false },
      { day: 'Thu', active: false },
      { day: 'Fri', active: false },
      { day: 'Sat', active: false },
      { day: 'Sun', active: false },
    ]
    const schedule = await Schedule.findBy('user_id', auth.user!.id)
    if (!schedule) {
      // Jika belum ada, return semua hari dengan active: false
      return {
        days: defaultDays,
        streakCount: 0,
        journalCount: 0,
        lastJournalDate: null,
      }
    }
    // Parse days dari string ke array
    let daysArr: any[] = []
    try {
      daysArr = schedule.days ? JSON.parse(schedule.days) : defaultDays
    } catch {
      daysArr = defaultDays
    }
    return {
      ...schedule.toJSON(),
      days: daysArr,
    }
  }

  public async updateStreakOnJournal({ auth }: HttpContextContract) {
    const userId = auth.user!.id
    let schedule = await Schedule.findBy('user_id', userId)
    if (!schedule) {
      schedule = await Schedule.create({
        userId,
        days: JSON.stringify([]),
        streakCount: 1,
        journalCount: 1,
        lastJournalDate: DateTime.local(),
      })
    } else {
      schedule.journalCount = (schedule.journalCount || 0) + 1
      schedule.streakCount = (schedule.streakCount || 0) + 1
      schedule.lastJournalDate = DateTime.local()
      await schedule.save()
    }
    return {
      streak: schedule.streakCount,
      journalCount: schedule.journalCount,
      lastJournalDate: schedule.lastJournalDate,
    }
  }
}
