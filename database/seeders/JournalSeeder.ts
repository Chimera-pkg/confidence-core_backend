import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Journal from 'App/Models/Journal'

export default class JournalSeeder extends BaseSeeder {
  public async run() {
    await Journal.createMany([
      {
        userId: 1,
        title: 'Admin Journal 1',
        content: 'This is the first journal entry by admin.',
      },
      {
        userId: 2,
        title: 'User1 Journal 1',
        content: 'This is the first journal entry by user1.',
      },
      {
        userId: 3,
        title: 'User2 Journal 1',
        content: 'This is the first journal entry by user2.',
      },
      {
        userId: 1,
        title: 'Admin Journal 2',
        content: 'This is the second journal entry by admin.',
      },
    ])
  }
}
