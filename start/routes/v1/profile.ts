import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('profile', 'ProfilesController.show').middleware('auth:api') // Menampilkan profil
  Route.put('profile', 'ProfilesController.update').middleware('auth:api') // Memperbarui profil
  Route.post('profile', 'ProfilesController.store').middleware('auth:api') // Membuat profil baru
  Route.delete('profile/:id', 'ProfilesController.destroy').middleware('auth:api') // Menghapus profil
  Route.post('profile/avatar', 'ProfilesController.uploadAvatar').middleware('auth:api') // Upload avatar
  Route.put('profile/avatar', 'ProfilesController.updateAvatar').middleware('auth:api') // Update avatar
}).prefix('v1')
