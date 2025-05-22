import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schedule from 'App/Models/Schedule'
import { DateTime } from 'luxon'

export default class SchedulesController {
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

    let schedule = await Schedule.findBy('user_id', auth.user!.id)
    if (!schedule) {
      // Jika belum ada schedule, buat dengan default days
      schedule = await Schedule.create({
        userId: auth.user!.id,
        days: JSON.stringify(defaultDays),
        streakCount: 0,
        journalCount: 0,
      })
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

  // Update streak and activate the day in the schedule
  public async updateStreakOnJournal({ auth }: HttpContextContract) {
    const userId = auth.user!.id
    const today = DateTime.local().toFormat('cccc') // Full day name (e.g., 'Thursday')

    let schedule = await Schedule.findBy('user_id', userId)
    if (!schedule) {
      const defaultDays = [
        { day: 'Mon', active: false },
        { day: 'Tue', active: false },
        { day: 'Wed', active: false },
        { day: 'Thurs', active: false },
        { day: 'Friday', active: false },
        { day: 'Saturday', active: false },
        { day: 'Sunday', active: false },
      ]
      schedule = await Schedule.create({
        userId,
        days: JSON.stringify(defaultDays),
        streakCount: 1,
        journalCount: 1,
        lastJournalDate: DateTime.local(),
      })
    } else {
      const daysArr = schedule.days ? JSON.parse(schedule.days) : []

      // Normalize day names for consistency
      const normalizedToday = today.slice(0, 3) // Get first 3 letters (e.g., 'Thu')
      const todayEntry = daysArr.find((day: any) => day.day.startsWith(normalizedToday))

      if (todayEntry && !todayEntry.active) {
        todayEntry.active = true
        schedule.streakCount = (schedule.streakCount || 0) + 1
      }

      schedule.journalCount = (schedule.journalCount || 0) + 1
      schedule.lastJournalDate = DateTime.local()
      schedule.days = JSON.stringify(daysArr)
      await schedule.save()
    }

    return {
      streak: schedule.streakCount,
      journalCount: schedule.journalCount,
      lastJournalDate: schedule.lastJournalDate,
    }
  }
}
