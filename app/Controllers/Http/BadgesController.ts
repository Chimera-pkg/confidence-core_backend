import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Badge from 'App/Models/Badge'

export default class BadgeController {
  public async index({ auth }: HttpContextContract) {
    return await Badge.query().where('user_id', auth.user!.id)
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const { badgeName } = request.only(['badgeName'])
    const badge = await Badge.create({ userId: auth.user!.id, badgeName })
    return response.created(badge)
  }
}
