import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import XpMeter from 'App/Models/XpMeter'

export default class XpMeterSeeder extends BaseSeeder {
  public async run() {
    await XpMeter.createMany([
      {
        userId: 1,
        xp: 100,
        level: 2,
      },
      {
        userId: 2,
        xp: 50,
        level: 1,
      },
      {
        userId: 3,
        xp: 200,
        level: 3,
      },
    ])
  }
}
