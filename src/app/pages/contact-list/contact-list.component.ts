import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import{ EditBookModalComponent } from '../../components/edit-book-modal/edit-book-modal.component';
import { DetailBookModalComponent } from 'src/app/components/detail-book-modal/detail-book-modal.component';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit, OnChanges {

  bookRecords: any;
  selectedBook: any;

  constructor(private spinner: NgxSpinnerService, public apiService: ApiService, public modalService: NgbModal) { }


  //lifecycle
  ngOnInit(): void {  
    this.spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
    this.load();
    this.spinner.hide();
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
  }


  //load
  async load(){
    let _booksRecords: any;
    _booksRecords = await this.apiService.GetBooks();
    this.bookRecords = _booksRecords;
  }

  //delete
  async delete(id: number){
    let _booksRecords: any;
    _booksRecords = await this.apiService.DeleteBook(id);
    this.bookRecords = _booksRecords;
  }


  //actions btn
  public selectBook(bookRecord){
    const modalRef = this.modalService.open(DetailBookModalComponent);
    modalRef.componentInstance._detailBookModal = bookRecord;
    modalRef.result.then(
      (result) => {
        this.spinner.show();
        this.load();
        this.spinner.hide();
      },() => { });
  }

  public editBook(bookRecord){
    const modalRef = this.modalService.open(EditBookModalComponent);
    modalRef.componentInstance._editBookModal = bookRecord;
    modalRef.result.then(
      (result) => {
        this.spinner.show();
        this.load();
        this.spinner.hide();
      },() => { });
  }

  public deleteBook(bookRecord){
    
    //note

    this.spinner.show();
    this.delete(bookRecord.ID);
    this.spinner.hide();
    
    //note
  }
}
