import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Badge from 'App/Models/Badge'

export default class BadgeSeeder extends BaseSeeder {
  public async run() {
    await Badge.createMany([
      {
        userId: 1,
        badgeName: 'Gold Badge',
        awardedAt: '2023-10-01 10:00:00',
      },
      {
        userId: 2,
        badgeName: 'Silver Badge',
        awardedAt: '2023-10-02 11:00:00',
      },
      {
        userId: 3,
        badgeName: 'Bronze Badge',
        awardedAt: '2023-10-03 12:00:00',
      },
    ])
  }
}
