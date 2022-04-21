import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Images} from '../images/images.component'

// everything that has @ is a decorator

@Injectable({
  providedIn: 'root'
})
export class HttpreqsService {
  url="https://jsonplaceholder.typicode.com/album/1/photos";
  constructor(private http:HttpClient) { }

   getPhotosFromServer(){
    return this.http.get<Images[]>(this.url);
    // It returns observable. Why observable? because it is a subscription model.
    // We don't get objects.
  }


}
