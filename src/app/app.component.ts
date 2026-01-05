import { Component, OnInit, NgZone, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // RWEB 0047 : Polling HTTP inutile et coûteux
    setInterval(() => {
      // On spamme l'API des tags toutes les secondes
      this.http.get('https://api.realworld.io/api/tags').subscribe({
        next: () => console.log('Requête HTTP inutile envoyée...'),
        error: (err) => console.error('Erreur polling', err)
      });
    }, 1000);
  }
}
