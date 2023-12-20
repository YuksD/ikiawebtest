import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemLis: any[] = [];
  activeIndex: number = 0;
  slideInterval: any;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  ngOnInit() {
    this.itemLis.push(
      { Id: 1, Url: '/assets/oduyohdlogo.png' },
      { Id: 2, Url: '/assets/netolojihdlogo.png' },
      { Id: 3, Url: '/assets/ikia_logo_koyu.png' },
      { Id: 4, Url: '/assets/big_tree_transparent.png' }
    );

    this.startAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.itemLis.length;
    }, 4000);
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
