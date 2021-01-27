import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTwoGetCommentsComponent } from './assignment-two-get-comments.component';

describe('AssignmentTwoGetCommentsComponent', () => {
  let component: AssignmentTwoGetCommentsComponent;
  let fixture: ComponentFixture<AssignmentTwoGetCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentTwoGetCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentTwoGetCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
