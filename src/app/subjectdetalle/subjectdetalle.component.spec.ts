import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectdetalleComponent } from './subjectdetalle.component';

describe('SubjectdetalleComponent', () => {
  let component: SubjectdetalleComponent;
  let fixture: ComponentFixture<SubjectdetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectdetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
