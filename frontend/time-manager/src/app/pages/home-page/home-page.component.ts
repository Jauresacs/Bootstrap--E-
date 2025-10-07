import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePage {
  imageSource = 'imgs/chaton.png';

  onImageClick() {
    this.imageSource = 'imgs/oiia-cat.gif';

    setTimeout(() => {
      this.imageSource = 'imgs/chaton.png';
    }, 2500);
  }
}
