import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personUrl = 'http://localhost:8080/person';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl);
  }

}
