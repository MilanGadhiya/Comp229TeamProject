import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListSurveyComponent } from './components/list-survey/list-survey.component';
import { SurveyService } from './shared/survey.service';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:'', component:ListSurveyComponent},
  {path:'createUpdateComponent', component:CreateUpdateComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateUpdateComponent,
    ListSurveyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
