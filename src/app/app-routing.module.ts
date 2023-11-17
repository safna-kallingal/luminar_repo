import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathercomponentComponent } from './weathercomponent/weathercomponent.component';

const routes: Routes = [
  {path:'weather',component:WeathercomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
