import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdineAggiuntoComponent } from './ordine-aggiunto/ordine-aggiunto.component';
import { OrdineNonAggiuntoComponent } from './ordine-non-aggiunto/ordine-non-aggiunto.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegisterComponent } from './register/register.component';
import { RistorantiComponent } from './ristoranti/ristoranti.component';
import { TuttiGliOrdiniComponent } from './tutti-gli-ordini/tutti-gli-ordini.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'ristoranti', component: RistorantiComponent },
  { path: 'prodotti/:nome', component: ProdottiComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'ordineAggiunto', component: OrdineAggiuntoComponent },
  { path: 'ordineNonAggiunto', component: OrdineNonAggiuntoComponent },
  { path: 'tuttiGliOrdini', component: TuttiGliOrdiniComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
