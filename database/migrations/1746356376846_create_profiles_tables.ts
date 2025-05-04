import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('avatar_url').nullable()
      table.integer('level').defaultTo(1)
      table.integer('xp').defaultTo(0)
      table.integer('streak_count').defaultTo(0)
      table.integer('journal_count').defaultTo(0)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
