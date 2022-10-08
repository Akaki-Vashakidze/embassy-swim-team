import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';

const materialComponents = [
MatButtonModule,
MatSidenavModule,
MatToolbarModule,
MatIconModule,
MatListModule
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
  materialComponents
  ]
})
export class MaterialModule { }