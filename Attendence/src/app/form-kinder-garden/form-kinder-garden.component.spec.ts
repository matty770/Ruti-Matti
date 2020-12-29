import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKinderGardenComponent } from './form-kinder-garden.component';

describe('FormKinderGardenComponent', () => {
  let component: FormKinderGardenComponent;
  let fixture: ComponentFixture<FormKinderGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKinderGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKinderGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
