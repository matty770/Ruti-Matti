import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfParentsComponent } from './list-of-parents.component';

describe('ListOfParentsComponent', () => {
  let component: ListOfParentsComponent;
  let fixture: ComponentFixture<ListOfParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
