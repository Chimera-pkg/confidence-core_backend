import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Leaderboard from 'App/Models/Leaderboard'

export default class LeaderboardsController {
  public async index({}: HttpContextContract) {
    const leaderboards = await Leaderboard.query().preload('user')
    // Urutkan manual berdasarkan totalScore
    const sorted = leaderboards
      .map((l) => ({
        ...l.toJSON(),
        totalScore: (l.journalCount || 0) * 2 + (l.streakCount || 0) * 3 + (l.xp || 0),
      }))
      .sort((a, b) => b.totalScore - a.totalScore)
      .map((l, i) => ({ ...l, rank: i + 1 }))
    return sorted
  }
}
