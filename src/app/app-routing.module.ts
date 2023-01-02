import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillInTheBlankTextComponent } from './Form/component/fill-in-the-blank-text/fill-in-the-blank-text.component';
import { HomeComponent } from './Form/component/home/home.component';
import { MultipleChoiceMultipleResponseComponent } from './Form/component/multiple-choice-multiple-response/multiple-choice-multiple-response.component';
import { MultipleChoiceStandardComponent } from './Form/component/multiple-choice-standard/multiple-choice-standard.component';
import { PreviewFormComponent } from './Form/component/preview-form/preview-form.component';
import { ResponseScreenComponent } from './Form/component/response-screen/response-screen.component';
import { TableComponent } from './Form/component/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'multipleChoiceStandard',
    component: MultipleChoiceStandardComponent,
  },
  {
    path: 'multipleChoiceMultipleResponse',
    component: MultipleChoiceMultipleResponseComponent,
  },
  {
    path: 'fillInTheBlanksText',
    component: FillInTheBlankTextComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'previewForm',
    component: PreviewFormComponent,
  },
  {
    path: 'response-screen',
    component: ResponseScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
