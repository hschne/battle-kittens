import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/kittens', pathMatch: 'full'},
  {path: 'kittens', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
