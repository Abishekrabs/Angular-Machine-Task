import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewModule } from 'src/Modules/view/view.module';


const routes: Routes = [{
  path: 'view',
  loadChildren: () => import('src/Modules/view/view.module').then(m => m.ViewModule)
},
{
  path: '',
  redirectTo: 'view',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
