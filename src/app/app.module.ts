import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {EventComponent} from './event/event.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'event', component: EventComponent},
  { path: 'login', component: LoginComponent},
  { path: "**", redirectTo: "login" },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EventComponent,
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
