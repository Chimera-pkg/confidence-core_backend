import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Schedule from 'App/Models/Schedule'

export default class ScheduleSeeder extends BaseSeeder {
  public async run() {
    await Schedule.createMany([
      {
        userId: 1,
        days: JSON.stringify({ mon: true, tue: false, wed: true, thu: false, fri: true }),
      },
      {
        userId: 2,
        days: JSON.stringify({ mon: false, tue: true, wed: false, thu: true, fri: false }),
      },
      {
        userId: 3,
        days: JSON.stringify({ mon: true, tue: true, wed: true, thu: true, fri: true }),
      },
    ])
  }
}
