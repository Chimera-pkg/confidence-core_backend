import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Badge from 'App/Models/Badge'

export default class BadgeSeeder extends BaseSeeder {
  public async run() {
    await Badge.createMany([
      {
        userId: 1, // Pastikan user_id ini ada di tabel users
        badgeName: 'Gold Badge',
      },
      {
        userId: 2, // Pastikan user_id ini ada di tabel users
        badgeName: 'Silver Badge',
      },
      {
        userId: 3, // Pastikan user_id ini ada di tabel users
        badgeName: 'Bronze Badge',
      },
    ])
  }
}
