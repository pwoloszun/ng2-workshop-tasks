import { Component } from '@angular/core';

interface MenuItem {
  value: string;
  text: string;
}

@Component({
  selector: 'wt-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  mainMenuLinks: MenuItem[] = [
    {value: '', text: 'Home'},

    {value: 'real-estates', text: 'Real Estates'},
    {value: 'users', text: 'App Users'},
    {value: 'detail', text: 'Detail Page'},
    {value: 'about', text: 'About'},
  ];
}
