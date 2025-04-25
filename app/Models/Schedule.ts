import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public userId: number
  @column() public days: any

  @belongsTo(() => User) public user: BelongsTo<typeof User>
}
