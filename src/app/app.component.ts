import { Component, OnInit, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // RWEB 0047 & RWEB 0053 : Polling inutile et blocage JS
    setInterval(() => {
      console.log('Polling inutile pour consommer de la batterie...');
      const heavyCalculation = new Array(10000).fill(0).map(() => Math.random());
    }, 500); // Toutes les 500ms
  }
}
