import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookModel } from 'src/app/models/book-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-book-modal',
  templateUrl: './detail-book-modal.component.html',
  styleUrls: ['./detail-book-modal.component.css']
})
export class DetailBookModalComponent implements OnInit {
  
  @Input() _detailBookModal: any;
  bookRecord: any;

  constructor(public activeModal: NgbActiveModal, public apiService: ApiService,public router: Router) { }

  ngOnInit(): void {
    this.bookRecord = {
      ID : this._detailBookModal.ID,
      Name : this._detailBookModal.Name,
      Category: this._detailBookModal.Category,
      Price: this._detailBookModal.Price
    };
  }

}
