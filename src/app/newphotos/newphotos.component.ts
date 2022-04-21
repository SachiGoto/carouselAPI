import { Component, OnInit } from '@angular/core';
import { HttpreqsService } from '../services/httpreqs.service';

@Component({
  selector: 'newphotos',
  templateUrl: './newphotos.component.html',
  styleUrls: ['./newphotos.component.scss']
})
export class NewphotosComponent implements OnInit {

  newphotos:any;

  constructor(private newhttp:HttpreqsService) { }

  ngOnInit(): void {

    this.newhttp.getPhotosFromServer().subscribe((newphotos)=>{
        this.newphotos = newphotos;
    })
  }

}
