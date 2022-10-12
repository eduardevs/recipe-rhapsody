import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService {

  constructor(private http: HttpClient) { }

  configUrl = '/api';

  getValues() {
    return this.http.get<Number[]>(`${this.configUrl}/values/all`);
  }

  addValue(value: Number | null) {
    if (value === null) return;

    return this.http.post(`${this.configUrl}/values`, { value })
    .pipe(
      catchError(err => { return this.handleError(err) })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
