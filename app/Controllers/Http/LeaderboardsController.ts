import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Leaderboard from 'App/Models/Leaderboard'

export default class LeaderboardsController {
  public async index({}: HttpContextContract) {
    return await Leaderboard.query().preload('user').orderBy('rank', 'asc')
  }
}
