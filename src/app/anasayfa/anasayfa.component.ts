import { Component } from '@angular/core';
import { NavBarComponent } from '../views/layout/nav-bar/nav-bar.component';
import { HomeComponent } from '../views/pages/home/home.component';
import { FooterComponent } from '../views/layout/footer/footer.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css',
  imports: [NavBarComponent, HomeComponent, BodyComponent, FooterComponent],
})
export class AnasayfaComponent {}
