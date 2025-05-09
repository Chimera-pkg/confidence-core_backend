import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import UnprocessableEntityException from 'App/Exceptions/UnprocessableEntityException'
import User, { UserRole } from 'App/Models/User'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import EmailNotRegisteredException from 'App/Exceptions/EmailNotRegisteredException'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const username = request.input('username')
    const password = request.input('password')
    const user = await User.findBy('username', username)

    if (!user) {
      throw new EmailNotRegisteredException()
    }

    if (!user.password) {
      throw new AuthenticationException('cannot login using password', 'E_UNAUTHORIZED_ACCESS')
    }

    const token = await auth.use('api').attempt(username, password, {
      expiresIn: '7 days',
    })

    return {
      token,
      user: token.user,
    }
  }

  public async registerAdmin({ request }: HttpContextContract) {
    const email = request.input('email')
    const username = request.input('username')
    const password = request.input('password')

    const appKey = Env.get('APP_KEY')
    const requestAppKey = request.header('x-api-key')

    if (appKey !== requestAppKey) {
      throw new UnprocessableEntityException('Unauthorized access')
    }

    let user = await User.findBy('email', email)

    if (user) {
      throw new UnprocessableEntityException('Email already exist')
    }

    user = await User.findBy('username', username)

    if (user) {
      throw new UnprocessableEntityException('Username already exist')
    }

    const newUser = new User()
    newUser.username = username
    newUser.password = password
    newUser.role = UserRole.admin

    await newUser.save()

    return {
      message: `Admin created successfully`,
    }
  }

  public async registerUser({ request }: HttpContextContract) {
    const data = request.only(['username', 'password', 'age', 'grade'])

    const existingUser = await User.query().where('username', data.username).first()

    if (existingUser) {
      throw new Error('Username already exists')
    }

    const newUser = new User()
    newUser.username = data.username
    newUser.password = data.password
    newUser.age = data.age
    newUser.grade = data.grade
    newUser.role = UserRole.user

    await newUser.save()

    return {
      message: 'User registered successfully',
      user: newUser,
    }
  }
}
