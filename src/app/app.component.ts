import { Component } from '@angular/core';
import {leftMenuItems} from '../config/left-menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  leftmenuVisible = true;
  menuItems = leftMenuItems;

  // Toggle visibilty
  toggleMenu(){
    this.leftmenuVisible = !this.leftmenuVisible;
  }
}
