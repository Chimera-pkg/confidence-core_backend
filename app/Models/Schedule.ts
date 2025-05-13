import { BaseModel, column, beforeSave, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public userId: number
  @column() public days: any
  @column() public streakCount: number
  @column.dateTime() public lastLoginDate: DateTime
  @column.date() public lastJournalDate: DateTime | null
  @column() public badges: string[]

  @belongsTo(() => User) public user: BelongsTo<typeof User>

  public static streakMilestones = [3, 7, 14, 21, 30]

  @beforeSave()
  public static initializeBadges(schedule: Schedule) {
    if (!schedule.badges) {
      schedule.badges = [] // Inisialisasi badges sebagai array kosong
    }
  }

  public isMilestone(): boolean {
    return Schedule.streakMilestones.includes(this.streakCount)
  }

  public resetStreak(): void {
    this.streakCount = 0
  }

  public addBadge(): void {
    if (this.isMilestone()) {
      const badge = `${this.streakCount}-day streak`
      if (!this.badges.includes(badge)) {
        this.badges.push(badge)
      }
    }
  }
}
