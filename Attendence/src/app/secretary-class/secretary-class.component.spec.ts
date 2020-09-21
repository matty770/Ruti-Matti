import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryClassComponent } from './secretary-class.component';

describe('SecretaryClassComponent', () => {
  let component: SecretaryClassComponent;
  let fixture: ComponentFixture<SecretaryClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
