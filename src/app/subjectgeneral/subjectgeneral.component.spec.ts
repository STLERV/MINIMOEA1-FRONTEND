import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectgeneralComponent } from './subjectgeneral.component';

describe('SubjectgeneralComponent', () => {
  let component: SubjectgeneralComponent;
  let fixture: ComponentFixture<SubjectgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
