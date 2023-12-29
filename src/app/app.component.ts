import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './views/layout/nav-bar/nav-bar.component';
import { HomeComponent } from './views/pages/home/home.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { IletisimComponent } from './views/pages/iletisim2/iletisim/iletisim.component';
import { BodyComponent } from './body/body.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { BaseComponent } from './views/layout/base/base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    IletisimComponent,
    BodyComponent,
    AnasayfaComponent,
    BaseComponent,
  ],
})
export class AppComponent {
  title = 'navbar';
}
