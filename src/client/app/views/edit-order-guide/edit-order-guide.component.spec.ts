import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderGuideComponent } from './edit-order-guide.component';

describe('EditOrderGuideComponent', () => {
  let component: EditOrderGuideComponent;
  let fixture: ComponentFixture<EditOrderGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrderGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
