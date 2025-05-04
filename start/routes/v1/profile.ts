import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('profile', 'ProfilesController.show').middleware('auth:api')
  Route.put('profile', 'ProfilesController.update').middleware('auth:api')
}).prefix('v1')
