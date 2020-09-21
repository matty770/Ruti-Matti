import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryTeacherComponent } from './secretary-teacher.component';
import{phonePipe} from

describe('SecretaryTeacherComponent', () => {
  let component: SecretaryTeacherComponent;
  let fixture: ComponentFixture<SecretaryTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
