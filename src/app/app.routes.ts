import { Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { BodyComponent } from './views/pages/iletisim2/body/body.component';

export const routes: Routes = [
  { path: '', component: AnasayfaComponent },
  { path: 'iletisim', component: BodyComponent },
];
