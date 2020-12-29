import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfChildrenComponent } from './list-of-children.component';

describe('ListOfChildrenComponent', () => {
  let component: ListOfChildrenComponent;
  let fixture: ComponentFixture<ListOfChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
