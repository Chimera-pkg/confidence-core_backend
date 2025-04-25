import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class XpMeter extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public userId: number
  @column() public xp: number
  @column() public level: number

  @belongsTo(() => User) public user: BelongsTo<typeof User>
}
