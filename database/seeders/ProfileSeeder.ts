import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'

export default class ProfileSeeder extends BaseSeeder {
  public async run() {
    await Profile.createMany([
      {
        userId: 1,
        avatarUrl: 'https://example.com/avatar1.png',
        level: 16,
        xp: 40,
        streakCount: 14,
        journalCount: 14,
      },
      {
        userId: 2,
        avatarUrl: 'https://example.com/avatar2.png',
        level: 10,
        xp: 20,
        streakCount: 7,
        journalCount: 10,
      },
    ])
  }
}
