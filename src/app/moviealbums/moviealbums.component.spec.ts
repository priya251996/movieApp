import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviealbumsComponent } from './moviealbums.component';

describe('MoviealbumsComponent', () => {
  let component: MoviealbumsComponent;
  let fixture: ComponentFixture<MoviealbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviealbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviealbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
