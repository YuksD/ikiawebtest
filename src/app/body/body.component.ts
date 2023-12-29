import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [GalleriaModule, FormsModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
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
      {
        Id: 1,
        Url: '/assets/tree_yeni.png',
        text: '98 YILI AŞKIN TECRÜBEMİZLE KALİTELİ HİZMET VERMEYE DEVAM EDİYORUZ',
      },
      {
        Id: 2,
        Url: '/assets/erp_yeni.png',
        text: 'ERP ÇÖZÜMLERİ İLE İŞİNİZE VERİM KATIN',
      },
      {
        Id: 3,
        Url: '/assets/hedef.png',
        text: 'KALİTELİ - HIZLI - ÇÖZÜM ODAKLI',
      }
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
