import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewitemComponent } from './pages/newitem/newitem.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tasklist',
    pathMatch: 'full'
  },
  {
    path: 'tasklist',
    loadChildren: () => import('./pages/tasklist/tasklist.module').then( m => m.TasklistPageModule)
  },

  /*{path:'new item',component:NewitemComponent}, */ //ruta agregada

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
