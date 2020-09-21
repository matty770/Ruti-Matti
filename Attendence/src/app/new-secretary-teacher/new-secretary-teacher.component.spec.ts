import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSecretaryTeacherComponent } from './new-secretary-teacher.component';

describe('NewSecretaryTeacherComponent', () => {
  let component: NewSecretaryTeacherComponent;
  let fixture: ComponentFixture<NewSecretaryTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSecretaryTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSecretaryTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
