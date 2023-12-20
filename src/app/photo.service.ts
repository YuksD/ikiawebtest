import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImages() {
    // Burada verileri çekme veya işleme kodunu ekleyin, örnek olarak sabit bir dizi döndürüyoruz:
    return [
      { id: 1, url: 'assets/ikialogo.png' },
      { id: 2, url: 'assets/ikialogo.png' },
      // ... Daha fazla resim ekleyin
    ];
  }
}
