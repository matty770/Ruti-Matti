import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenForKinderGardenComponent } from './children-for-kinder-garden.component';

describe('ChildrenForKinderGardenComponent', () => {
  let component: ChildrenForKinderGardenComponent;
  let fixture: ComponentFixture<ChildrenForKinderGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenForKinderGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenForKinderGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
