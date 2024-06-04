import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterComponent } from './filter/filter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { Painter } from './directives/painter.directive';
import { ListenDirective } from './directives/listen.directive';
import { BindDirective } from './directives/bind.directive';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { InfoComponent } from './info/info.component';
import { RoutingModule } from './routing.module';
import { PercentagePipe } from './custompipes/percentage.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FilterComponent,
    CatalogComponent,
    Painter,
    ListenDirective,
    BindDirective,
    AllproductsComponent,
    InfoComponent,
    PercentagePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
