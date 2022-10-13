import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = false;
  menu = [
    {
      name: 'Main',
      icon: 'web',
      style: '',
      route: '/main',
    },
    {
      name: 'Swimmers',
      icon: 'waves',
      style: '',
      route: '/swimmers',
    },
    {
      name: 'Records',
      icon: 'access_alarm',
      style: '',
      route: '/',
    },
    {
      name: 'Schedule',
      icon: 'schedule',
      style: '',
      route: '/',
    },
    {
      name: 'Results',
      icon: 'note',
      style: '',
      route: '/',
    },
    {
      name: 'Contact',
      icon: 'contact_phone',
      style: '',
      route: '/contact',
    },
  ]
}
