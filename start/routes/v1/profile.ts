import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('profile', 'ProfilesController.show').middleware('auth:api') // Menampilkan profil
  Route.put('profile', 'ProfilesController.update').middleware('auth:api') // Memperbarui profil
  Route.post('profile', 'ProfilesController.store').middleware('auth:api') // Membuat profil baru
  Route.delete('profile/:id', 'ProfilesController.destroy').middleware('auth:api') // Menghapus profil
  Route.put('profile/avatar', 'ProfilesController.updateAvatar').middleware('auth:api') // Update avatar
  Route.post('profile/change-username', 'ProfilesController.changeUsername').middleware('auth:api')
  Route.post('profile/change-password', 'ProfilesController.changePassword').middleware('auth:api')
}).prefix('v1')
