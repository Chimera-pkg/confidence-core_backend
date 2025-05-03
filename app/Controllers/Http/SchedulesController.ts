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
  public async dailyLogin({ auth }: HttpContextContract) {
    const userId = auth.user!.id
    let schedule = await Schedule.findBy('user_id', userId)

    if (!schedule) {
      // Jika schedule belum ada, buat baru
      schedule = await Schedule.create({
        userId,
        streakCount: 1,
        lastLoginDate: DateTime.now(),
      })
      return { message: 'First login recorded', streak: schedule.streakCount }
    }

    const now = DateTime.now()
    const lastLogin = schedule.lastLoginDate

    if (lastLogin && now.diff(lastLogin, 'days').days < 1) {
      // Jika sudah login hari ini
      return { message: 'Already logged in today', streak: schedule.streakCount }
    }

    if (lastLogin && now.diff(lastLogin, 'days').days === 1) {
      // Jika login berturut-turut
      schedule.streakCount += 1
    } else {
      // Jika login tidak berturut-turut, reset streak
      schedule.streakCount = 1
    }

    schedule.lastLoginDate = now
    await schedule.save()

    // Berikan notifikasi jika mencapai milestone
    if ([3, 7, 30].includes(schedule.streakCount)) {
      return {
        message: `Congratulations! You've reached a ${schedule.streakCount}-day streak!`,
        streak: schedule.streakCount,
      }
    }

    return { message: 'Login recorded', streak: schedule.streakCount }
  }
}
