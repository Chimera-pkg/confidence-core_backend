import { Exception } from '@adonisjs/core/build/standalone'

export default class EmailNotRegisteredException extends Exception {
  constructor(message = 'Email is not registered') {
    super(message, 400, 'E_EMAIL_NOT_REGISTERED')
  }
}
