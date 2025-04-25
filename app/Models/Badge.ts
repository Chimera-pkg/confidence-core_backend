import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Badge extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public userId: number
  @column() public badgeName: string
  @column.dateTime({ autoCreate: true }) public awardedAt: string

  @belongsTo(() => User) public user: BelongsTo<typeof User>
}
