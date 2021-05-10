import { Component, OnInit } from '@angular/core';

import { DataPerson } from './shared/models/data-person.model';
import { PersonService } from './shared/services/person.service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  providers: [PersonService],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {

  people$: Observable<DataPerson[]>;

  constructor(private router: Router, private servicePerson: PersonService) {
    this.people$ = this.servicePerson.getPeople();
  }
}
