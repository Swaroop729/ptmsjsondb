import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGraphComponent } from './work-graph.component';

describe('WorkGraphComponent', () => {
  let component: WorkGraphComponent;
  let fixture: ComponentFixture<WorkGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
