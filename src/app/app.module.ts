import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Form/component/home/home.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MultipleChoiceStandardComponent } from './Form/component/multiple-choice-standard/multiple-choice-standard.component';
import { MultipleChoiceMultipleResponseComponent } from './Form/component/multiple-choice-multiple-response/multiple-choice-multiple-response.component';
import { FillInTheBlankTextComponent } from './Form/component/fill-in-the-blank-text/fill-in-the-blank-text.component';
import { TableComponent } from './Form/component/table/table.component';
import { FillInTheBlankDropdownComponent } from './Form/component/fill-in-the-blank-dropdown/fill-in-the-blank-dropdown.component';
import { TopNavbarComponent } from './Form/component/top-navbar/top-navbar.component';
import { PreviewFormComponent } from './Form/component/preview-form/preview-form.component';
import { ResponseScreenComponent } from './Form/component/response-screen/response-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultipleChoiceStandardComponent,
    MultipleChoiceMultipleResponseComponent,
    FillInTheBlankTextComponent,
    TableComponent,
    FillInTheBlankDropdownComponent,
    TopNavbarComponent,
    PreviewFormComponent,
    ResponseScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
