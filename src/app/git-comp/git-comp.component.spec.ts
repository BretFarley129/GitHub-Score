import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCompComponent } from './git-comp.component';

describe('GitCompComponent', () => {
  let component: GitCompComponent;
  let fixture: ComponentFixture<GitCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
