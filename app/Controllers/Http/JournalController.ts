import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Journal from 'App/Models/Journal'

export default class JournalController {
  public async index({ auth }: HttpContextContract) {
    return await Journal.query().where('user_id', auth.user!.id)
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const data = request.only(['title', 'content', 'entry_date'])
    const journal = await Journal.create({ ...data, userId: auth.user!.id })
    return response.created(journal)
  }

  public async show({ auth, params, response }: HttpContextContract) {
    const journal = await Journal.find(params.id)
    if (journal?.userId !== auth.user!.id) return response.unauthorized()
    return journal
  }

  public async update({ auth, params, request, response }: HttpContextContract) {
    const journal = await Journal.find(params.id)
    if (!journal || journal.userId !== auth.user!.id) return response.unauthorized()
    journal.merge(request.only(['title', 'content', 'entry_date']))
    await journal.save()
    return journal
  }

  public async destroy({ auth, params, response }: HttpContextContract) {
    const journal = await Journal.find(params.id)
    if (!journal || journal.userId !== auth.user!.id) return response.unauthorized()
    await journal.delete()
    return response.noContent()
  }
}
