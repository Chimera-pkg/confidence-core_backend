import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Leaderboard from 'App/Models/Leaderboard'

export default class LeaderboardSeeder extends BaseSeeder {
  public async run() {
    await Leaderboard.createMany([
      { userId: 1, rank: 1, journalCount: 50, streakCount: 48 },
      { userId: 2, rank: 2, journalCount: 45, streakCount: 44 },
      { userId: 3, rank: 3, journalCount: 40, streakCount: 40 },
    ])
  }
}
