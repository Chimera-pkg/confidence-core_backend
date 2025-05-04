import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'hehe@mail.com',
        username: 'hehe',
        password: 'hehe',
      },
      {
        email: 'user1@mail.com',
        username: 'user1',
        password: 'password1',
      },
      {
        email: 'user2@mail.com',
        username: 'user2',
        password: 'password2',
      },
      {
        email: 'user3@mail.com',
        username: 'user3',
        password: 'password3',
      },
      {
        email: 'user4@mail.com',
        username: 'user4',
        password: 'password4',
      },
      {
        email: 'admin@mail.com',
        username: 'admin',
        password: 'admin',
      },
    ])
  }
}
