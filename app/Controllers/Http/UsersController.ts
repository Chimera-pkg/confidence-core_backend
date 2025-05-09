import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User, { UserRole } from 'App/Models/User'
import CreateUserValidator from 'App/Validators/User/CreateUserValidator'
import UnprocessableEntityException from 'App/Exceptions/UnprocessableEntityException'
import NotFoundException from 'App/Exceptions/NotFoundException'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async show({ params }: HttpContextContract) {
    return await User.findOrFail(params.id)
  }

  public async store({ request }: HttpContextContract) {
    await request.validate(CreateUserValidator)
    const data = request.only(['username', 'password', 'age', 'grade', 'role'])

    const existingUser = await User.query().where('username', data.username).first()

    if (existingUser) {
      throw new UnprocessableEntityException('User already exists')
    }

    const user = new User()
    user.username = data.username
    user.password = data.password
    user.age = data.age
    user.grade = data.grade
    user.role = data.role

    await user.save()

    return {
      message: 'User created successfully',
      user,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    await request.validate(UpdateUserValidator)

    const data = request.only(['username', 'password', 'age', 'grade', 'role'])

    const user = await User.find(params.id)

    if (!user) {
      throw new NotFoundException('User is not found')
    }

    if (user.username !== data.username) {
      const existingUser = await User.query().where('username', data.username).first()

      if (existingUser) {
        throw new UnprocessableEntityException('Username already exists')
      }
    }

    user.username = data.username
    user.age = data.age
    user.grade = data.grade
    user.role = data.role

    if (data.password) {
      user.password = data.password
    }

    await user.save()

    return {
      message: 'User updated successfully',
      user,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.find(params.id)

    if (!user) {
      throw new NotFoundException('User is not found')
    }

    await user.delete()

    return {
      message: 'User deleted successfully',
    }
  }
}
