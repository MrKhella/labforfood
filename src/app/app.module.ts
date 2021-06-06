import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RistorantiComponent } from './ristoranti/ristoranti.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { RistorantiService } from './services/ristoranti.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottiService } from './services/prodotti.service';
import { ProfiloComponent } from './profilo/profilo.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { OrdineAggiuntoComponent } from './ordine-aggiunto/ordine-aggiunto.component';
import { OrdineNonAggiuntoComponent } from './ordine-non-aggiunto/ordine-non-aggiunto.component';
import { ValidateService } from './services/validate.service';
import { TuttiGliOrdiniComponent } from './tutti-gli-ordini/tutti-gli-ordini.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,

    RistorantiComponent,
    MainComponent,
    RegisterComponent,
    ProdottiComponent,
    ProfiloComponent,
    OrdineAggiuntoComponent,
    OrdineNonAggiuntoComponent,
    TuttiGliOrdiniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IvyCarouselModule,
  ],
  providers: [RistorantiService, ProdottiService, ValidateService],
  bootstrap: [MainComponent],
})
export class AppModule {}
