import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBookModalComponent } from './detail-book-modal.component';

describe('DetailBookModalComponent', () => {
  let component: DetailBookModalComponent;
  let fixture: ComponentFixture<DetailBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBookModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
