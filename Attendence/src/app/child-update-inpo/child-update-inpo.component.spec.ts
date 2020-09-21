import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUpdateInpoComponent } from './child-update-inpo.component';

describe('ChildUpdateInpoComponent', () => {
  let component: ChildUpdateInpoComponent;
  let fixture: ComponentFixture<ChildUpdateInpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildUpdateInpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildUpdateInpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
