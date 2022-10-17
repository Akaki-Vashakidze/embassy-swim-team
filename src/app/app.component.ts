import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponentsComponent } from './login-components/login-components.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public dialog:MatDialog,private sharedService:SharedService){}
  signedIn:boolean = false;
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

  dialogRef:any;

  ngOnInit(): void {
      this.sharedService.loggedInUser.subscribe(item => {
        this.signedIn = item;
        if(item) {
          this.dialogRef.close();
        }
      })
  }

  openDialog(){
  this.dialogRef = this.dialog.open(LoginComponentsComponent);
  }

  logOut = () => {
    this.sharedService.userOut();
  }

}
