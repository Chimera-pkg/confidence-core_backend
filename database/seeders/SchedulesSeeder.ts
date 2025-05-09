import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Schedule from 'App/Models/Schedule'
import { DateTime } from 'luxon'

export default class ScheduleSeeder extends BaseSeeder {
  public async run() {
    await Schedule.createMany([
      {
        userId: 1,
        days: JSON.stringify({ mon: true, tue: false, wed: true, thu: false, fri: true }),
        streakCount: 3,
        lastLoginDate: DateTime.now().minus({ days: 1 }),
        lastJournalDate: DateTime.now().minus({ days: 1 }).toISODate(),
      },
      {
        userId: 2,
        days: JSON.stringify({ mon: false, tue: true, wed: false, thu: true, fri: false }),
        streakCount: 7,
        lastLoginDate: DateTime.now().minus({ days: 1 }),
        lastJournalDate: DateTime.now().minus({ days: 1 }).toISODate(),
      },
      {
        userId: 3,
        days: JSON.stringify({ mon: true, tue: true, wed: true, thu: true, fri: true }),
        streakCount: 30,
        lastLoginDate: DateTime.now().minus({ days: 1 }),
        lastJournalDate: DateTime.now().minus({ days: 1 }).toISODate(),
      },
    ])
  }
}
