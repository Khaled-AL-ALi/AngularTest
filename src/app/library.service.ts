import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LibraryService {

  constructor(private http: HttpClient) { }

  getBookDetails(): Observable<any> {
    return this.http.get("http://localhost:5000/Files",)
  }

}
