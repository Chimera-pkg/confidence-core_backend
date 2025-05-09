import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UpdateUsersTable extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('email') // Hapus kolom email
      // table.string('username').notNullable().unique() // Tambahkan kolom username
      // table.string('password').notNullable() // Tambahkan kolom password
      table.integer('age').notNullable() // Tambahkan kolom age
      table.string('grade').notNullable() // Tambahkan kolom grade
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('email').notNullable().unique() // Tambahkan kembali kolom email
      table.dropColumn('username') // Hapus kolom username
      table.dropColumn('password') // Hapus kolom password
      table.dropColumn('age') // Hapus kolom age
      table.dropColumn('grade') // Hapus kolom grade
    })
  }
}
