import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceDetailComponent } from './assistance-detail.component';

describe('AssistanceDetailComponent', () => {
  let component: AssistanceDetailComponent;
  let fixture: ComponentFixture<AssistanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistanceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
