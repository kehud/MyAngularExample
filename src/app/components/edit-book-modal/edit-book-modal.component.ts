import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookModel } from 'src/app/models/book-model';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.css']
})
export class EditBookModalComponent implements OnInit {

  @Input() _editBookModal: any;
  bookRecord: any;
  

  constructor(private spinner: NgxSpinnerService, public activeModal: NgbActiveModal, public apiService: ApiService,public router: Router) {
   }

  ngOnInit(): void {

    this.bookRecord = {
      ID : this._editBookModal.ID,
      Name : this._editBookModal.Name,
      Category: this._editBookModal.Category,
      Price: this._editBookModal.Price
    };

  }


  async updateBook(updatedBookRecord: BookModel){
    const success = await this.apiService.UpdateBook(updatedBookRecord);
    if (success) {
      this.activeModal.close(true);
     return;
    }else{
       //err note 
    }
  }
  
  save(updatedBookRecord: BookModel){
    this.spinner.show();
    this.updateBook(updatedBookRecord);
    this.spinner.hide();
      //note
      this.router.navigateByUrl('/contact-list');

  }
}
