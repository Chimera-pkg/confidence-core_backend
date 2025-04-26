import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('xp', 'XpMetersController.show').middleware('auth:api')
  Route.put('xp', 'XpMetersController.update').middleware('auth:api')
}).prefix('v1')
