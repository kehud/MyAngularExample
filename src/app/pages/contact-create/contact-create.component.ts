import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BookModel } from 'src/app/models/book-model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  bookRecord: BookModel = {Name : '', Category: '', Price: 0.0};

  constructor(private spinner: NgxSpinnerService, public apiService: ApiService, public router: Router) { }

  ngOnInit(): void {}


  //create
  async create(){
    const success = await this.apiService.CreateBook(this.bookRecord);
    if (success) {
      return;
    }else{
      //err note 
    }
  }
  
  
  createBook(){
    this.spinner.show();
    this.create();
    this.spinner.hide();
    //note
    this.router.navigateByUrl('/contact-list');
  }
}
