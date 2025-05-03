import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('xp', 'XpMetersController.show').middleware('auth:api')
  Route.post('xp', 'XpMetersController.store').middleware('auth:api')
  Route.put('xp/:id', 'XpMetersController.update').middleware('auth:api') // Perbarui rute ini
  Route.delete('xp', 'XpMetersController.delete').middleware('auth:api')
}).prefix('v1')
