import { AuthService } from './services/authservice';
import { MaskDirective } from './components/directives/mask.directive';
import { FramePageComponent } from './pages/account/master/frame.page';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { DataService } from './services/data.service';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MaskDirective,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupComponent,
    FramePageComponent,
    PetsPageComponent,
    CartPageComponent,
    ProductsPageComponent,
    ProductCardComponent,
    LoadingComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
