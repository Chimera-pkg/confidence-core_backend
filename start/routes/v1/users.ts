import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly() // Pastikan controller memiliki semua metode CRUD
}).prefix('v1')
