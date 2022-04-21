import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import{Cats} from './cat.interface';
import{HttpreqsService} from '../services/httpreqs.service'

//Services - for separation of concerns - Services would be responsible for talking to the server and receiving data.

// Why separation of concerns? 1. testing in isolation. 2 Each member has only one responsibility.



export interface Images{

  albumId:number;
  id:number;
  title:"string";
  url:"string";


}



@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})



export class ImagesComponent implements OnInit {





  constructor(private http:HttpreqsService) { }

    // Cat API-----------------------------------------
  // url = "https://api.thecatapi.com/v1/breeds";
  // cats:any= [];

  //  Image API----------------------------------------------
  // url="https://jsonplaceholder.typicode.com/album/1/photos";
  images:Images[]=[];


  ngOnInit(): void {

    this.http.getPhotosFromServer().subscribe((imgages)=>{
      this.images = imgages;

    })
    // Cat API--------------------------------------------------
    // this.myhttp.get<Cats[]>(this.url).subscribe(response =>{
    //   this.cats = response;
    // });

    // image API--------------------------------------------------
    // this.myhttp.get<Images[]>(this.url).subscribe(response =>{
    //   this.images = response;



    // });




    // this.myhttp.get<Images[]>(this.url).subscribe(response =>{
    //   this.images = response;
    // });
  }

}
