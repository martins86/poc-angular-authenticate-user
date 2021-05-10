import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

const materialModule = [MatCardModule, MatTableModule];

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
