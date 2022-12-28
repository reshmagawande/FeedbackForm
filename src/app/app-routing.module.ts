import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Form/component/home/home.component';
import { MultipleChoiceStandardComponent } from './Form/component/multiple-choice-standard/multiple-choice-standard.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
