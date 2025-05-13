import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schedule from 'App/Models/Schedule'
import { DateTime } from 'luxon'

export default class ScheduleController {
  // Menampilkan schedule pengguna yang sedang login
  public async show({ auth }: HttpContextContract) {
    const userId = auth.user!.id
    const schedule = await Schedule.findBy('user_id', userId)

    if (!schedule) {
      return { message: 'No schedule found for this user' }
    }

    return schedule
  }

  // Membuat schedule baru
  public async store({ auth, request }: HttpContextContract) {
    const userId = auth.user!.id
    const data = request.only(['days', 'streakCount', 'lastLoginDate'])

    const schedule = await Schedule.create({
      userId,
      days: data.days,
      streakCount: data.streakCount || 0,
      lastLoginDate: data.lastLoginDate || DateTime.now(),
    })

    return { message: 'Schedule created successfully', schedule }
  }

  // Menghapus schedule pengguna
  public async delete({ auth, response }: HttpContextContract) {
    const userId = auth.user!.id
    const schedule = await Schedule.findBy('user_id', userId)

    if (!schedule) {
      return response.notFound({ message: 'No schedule found for this user' })
    }

    await schedule.delete()
    return { message: 'Schedule deleted successfully' }
  }

  // Login harian dengan menghitung streak
  public async updateStreakOnJournal({ auth }: HttpContextContract) {
    const userId = auth.user!.id
    let schedule = await Schedule.findBy('user_id', userId)

    if (!schedule) {
      // Jika schedule belum ada, buat entri baru
      schedule = await Schedule.create({
        userId,
        streakCount: 1,
        lastJournalDate: DateTime.now().toISODate(),
        badges: JSON.stringify([]), // Pastikan badges diinisialisasi sebagai array kosong
      })
      return { message: 'First journal recorded', streak: schedule.streakCount }
    }

    const now = DateTime.now()
    const lastJournalDate = DateTime.fromISO(schedule.lastJournalDate || '')

    if (lastJournalDate && now.diff(lastJournalDate, 'days').days === 1) {
      schedule.streakCount += 1
    } else if (lastJournalDate && now.diff(lastJournalDate, 'days').days > 1) {
      schedule.resetStreak()
    }

    schedule.lastJournalDate = now.toISODate()
    schedule.addBadge()
    await schedule.save()

    return {
      message: schedule.isMilestone()
        ? `Congratulations! You've reached a ${schedule.streakCount}-day streak!`
        : 'Journal recorded successfully',
      streak: schedule.streakCount,
      badges: schedule.badges,
    }
  }
}
