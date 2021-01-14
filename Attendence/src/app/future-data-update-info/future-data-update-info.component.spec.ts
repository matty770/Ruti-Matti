import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureDataUpdateInfoComponent } from './future-data-update-info.component';

describe('FutureDataUpdateInfoComponent', () => {
  let component: FutureDataUpdateInfoComponent;
  let fixture: ComponentFixture<FutureDataUpdateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureDataUpdateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureDataUpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
