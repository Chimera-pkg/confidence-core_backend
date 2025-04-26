import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NavigationLogs extends BaseSchema {
  protected tableName = 'navigation_logs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary() // Change from uuid to increments
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE') // Change to integer
      table.string('url').notNullable()
      table.timestamp('visited_at').defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
