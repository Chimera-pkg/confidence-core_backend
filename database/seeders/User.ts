import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User, { UserRole } from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'admin2',
        password: 'admin123',
        age: 30,
        grade: 'A',
        role: UserRole.admin,
      },
      {
        username: 'student',
        password: 'student',
        age: 25,
        grade: 'B',
        role: UserRole.user,
      },
      {
        username: 'teacher',
        password: 'teacher',
        age: 22,
        grade: 'C',
        role: UserRole.user,
      },
    ])
  }
}
