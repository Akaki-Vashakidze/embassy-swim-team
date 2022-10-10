import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { swimmersInfo } from '../swimmers-info.model';

@Component({
  selector: 'app-swimmers',
  templateUrl: './swimmers.component.html',
  styleUrls: ['./swimmers.component.scss']
})
export class SwimmersComponent implements OnInit {
  swimmers:any;
  constructor(private SharedService:SharedService) { }
  filteredSwimmers : any;
 
  ngOnInit(): void {
    this.swimmers = this.SharedService.swimmers;
    this.filteredSwimmers = this.SharedService.swimmers;
  }

  getSwimmerName = (event:any) => {
    this.filteredSwimmers = this.swimmers.filter((item:any) => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }

}
