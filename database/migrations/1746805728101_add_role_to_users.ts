import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddRoleToUsers extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('role', ['admin', 'user']).notNullable().defaultTo('user') // Tambahkan kolom role
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('role') // Hapus kolom role jika rollback
    })
  }
}
