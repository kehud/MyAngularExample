import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BookModel } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    //headers
    private headers: object = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    };


    //get book
    GetBooks(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(`${environment.api}/GetBooks`,
        {
          headers: {
            ...this.headers
          }
        })
        .toPromise()
        .then((data: any) => {
          return resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
      });
    }

    //create book
    CreateBook(bookRecord: BookModel): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.post(`${environment.api}/PostBook`,
        bookRecord,
        {
          headers: {
            ...this.headers
          },
        })
        .toPromise()
        .then((data: any) => {
          return resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
      });
    }

    //update book
    UpdateBook(bookRecord: BookModel): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.put(`${environment.api}/PutBook`,
        bookRecord,
        {
          headers: {
            ...this.headers
          },
        })
        .toPromise()
        .then((data: any) => {
          return resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
      });
    }


    //delete book
    DeleteBook(id: number): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(`${environment.api}/DeleteBook/` + id,
        {
          headers: {
            ...this.headers
          }
        })
        .toPromise()
        .then((data: any) => {
          return resolve(data);
        })
        .catch(error => {
          return reject(error);
        });
      });
    }
}
