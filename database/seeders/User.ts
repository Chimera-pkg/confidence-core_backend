import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'hehe@mail.com',
        username: 'hehe',
        password: 'hehe',
        isVerified: true,
      },
      {
        email: 'user1@mail.com',
        username: 'user1',
        password: 'password1',
        isVerified: true,
      },
      {
        email: 'user2@mail.com',
        username: 'user2',
        password: 'password2',
        isVerified: false,
      },
      {
        email: 'user3@mail.com',
        username: 'user3',
        password: 'password3',
        isVerified: true,
      },
      {
        email: 'user4@mail.com',
        username: 'user4',
        password: 'password4',
        isVerified: false,
      },
    ])
  }
}
