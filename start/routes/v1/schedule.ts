import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('schedule', 'SchedulesController.show').middleware('auth:api') // Menampilkan schedule
  Route.post('schedule', 'SchedulesController.store').middleware('auth:api') // Membuat schedule baru
  Route.delete('schedule', 'SchedulesController.delete').middleware('auth:api') // Menghapus schedule
  Route.post('schedule/daily-login', 'SchedulesController.dailyLogin').middleware('auth:api') // Login harian
}).prefix('v1')
