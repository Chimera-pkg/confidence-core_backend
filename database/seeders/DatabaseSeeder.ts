import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserSeeder from './User'
import XpMeterSeeder from './XpMeterSeeder'
import JournalSeeder from './JournalSeeder'
import BadgeSeeder from './BadgesSeeder'
import ScheduleSeeder from './SchedulesSeeder'

export default class DatabaseSeeder extends BaseSeeder {
  private async call(seeders: any[]) {
    for (const seeder of seeders) {
      const instance = new seeder()
      await instance.run()
    }
  }

  public async run() {
    // Jalankan seeder dalam urutan yang benar
    await this.call([
      UserSeeder, // Seeder untuk tabel users harus dijalankan terlebih dahulu
      XpMeterSeeder, // Seeder untuk tabel xp_meters
      JournalSeeder, // Seeder untuk tabel journals
      BadgeSeeder, // Seeder untuk tabel badges
      ScheduleSeeder, // Seeder untuk tabel schedules
    ])
  }
}
