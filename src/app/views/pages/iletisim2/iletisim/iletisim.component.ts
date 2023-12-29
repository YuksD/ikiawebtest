import { Component } from '@angular/core';
import { NavBarComponent } from '../../../layout/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  templateUrl: './iletisim.component.html',
  styleUrl: './iletisim.component.css',
  imports: [NavBarComponent, FooterComponent, BodyComponent],
})
export class IletisimComponent {}
