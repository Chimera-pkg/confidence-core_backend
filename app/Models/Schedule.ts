import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public userId: number
  @column() public days: any
  @column() public streakCount: number // Jumlah streak login
  @column.dateTime() public lastLoginDate: DateTime // Tanggal login terakhir

  @belongsTo(() => User) public user: BelongsTo<typeof User>
}
