import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfKinderGardenComponent } from './list-of-kinder-garden.component';

describe('ListOfKinderGardenComponent', () => {
  let component: ListOfKinderGardenComponent;
  let fixture: ComponentFixture<ListOfKinderGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfKinderGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfKinderGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
