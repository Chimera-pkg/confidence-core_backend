import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Schedule from 'App/Models/Schedule'

export default class ScheduleSeeder extends BaseSeeder {
  public async run() {
    await Schedule.createMany([
      {
        userId: 1,
        days: JSON.stringify([
          { day: 'Mon', active: true },
          { day: 'Tue', active: true },
          { day: 'Wed', active: true },
          { day: 'Thu', active: true },
          { day: 'Fri', active: true },
          { day: 'Sat', active: false },
          { day: 'Sun', active: false },
        ]),
        streakCount: 3,
        journalCount: 5,
        lastJournalDate: new Date(),
      },
      // ...user lain
    ])
  }
}
