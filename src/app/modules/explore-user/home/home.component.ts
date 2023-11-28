import { Component } from '@angular/core';
import { attribute } from 'src/app/shared/utils/data-header';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  attributes = attribute;
}
