import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Schedule from 'App/Models/Schedule'
import { DateTime } from 'luxon'

export default class ScheduleSeeder extends BaseSeeder {
  public async run() {
    await Schedule.createMany([
      {
        userId: 1,
        days: JSON.stringify({ mon: true, tue: true, wed: true }),
        streakCount: 3,
        lastLoginDate: DateTime.now().minus({ days: 1 }),
        lastJournalDate: DateTime.now().minus({ days: 1 }),
        badges: [], // Inisialisasi badges sebagai array kosong
      },
      {
        userId: 2,
        days: JSON.stringify({ mon: true, tue: true, wed: true, thu: true }),
        streakCount: 7,
        lastLoginDate: DateTime.now().minus({ days: 1 }),
        lastJournalDate: DateTime.now().minus({ days: 1 }),
        badges: [], // Inisialisasi badges sebagai array kosong
      },
    ])
  }
}
