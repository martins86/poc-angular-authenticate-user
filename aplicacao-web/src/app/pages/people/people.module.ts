import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const materialModule = [MatListModule, MatDividerModule, MatIconModule];

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';


@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ...materialModule
  ]
})
export class PeopleModule { }
