import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LeaderboardsController {
  public async index({}: HttpContextContract) {
    // Ambil semua user dari tabel users
    const users = await Database.from('users').select('id', 'username', 'grade', 'age')

    // Ambil data schedule, xp_meter, dan journal berdasarkan user_id
    const schedules = await Database.from('schedules').select(
      'user_id',
      'streak_count',
      'journal_count'
    )
    const xpMeters = await Database.from('xp_meters').select('user_id', 'xp')
    const journals = await Database.from('journals')
      .count('* as journalCount')
      .select('user_id')
      .groupBy('user_id')

    // Gabungkan data berdasarkan user_id
    const leaderboard = users.map((user) => {
      const schedule = schedules.find((s) => s.user_id === user.id) || {
        streak_count: 0,
        journal_count: 0,
      }
      const xpMeter = xpMeters.find((x) => x.user_id === user.id) || { xp: 0 }
      const journal = journals.find((j) => j.user_id === user.id) || { journalCount: 0 }

      const streakCount = schedule.streak_count
      const journalCount = schedule.journal_count + journal.journalCount
      const xp = xpMeter.xp

      const totalScore = journalCount * 2 + streakCount * 3 + xp

      return {
        id: user.id,
        username: user.username,
        grade: user.grade,
        age: user.age,
        streakCount,
        journalCount,
        xp,
        totalScore,
      }
    })

    // Urutkan berdasarkan totalScore dan tambahkan peringkat
    const sortedLeaderboard = leaderboard
      .sort((a, b) => b.totalScore - a.totalScore)
      .map((user, index) => ({
        ...user,
        rank: index + 1,
      }))

    return sortedLeaderboard
  }
}
