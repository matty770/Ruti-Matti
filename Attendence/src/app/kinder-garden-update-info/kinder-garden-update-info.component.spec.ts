import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderGardenUpdateInfoComponent } from './kinder-garden-update-info.component';

describe('KinderGardenUpdateInfoComponent', () => {
  let component: KinderGardenUpdateInfoComponent;
  let fixture: ComponentFixture<KinderGardenUpdateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinderGardenUpdateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinderGardenUpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
