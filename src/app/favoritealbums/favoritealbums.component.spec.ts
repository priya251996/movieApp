import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritealbumsComponent } from './favoritealbums.component';

describe('FavoritealbumsComponent', () => {
  let component: FavoritealbumsComponent;
  let fixture: ComponentFixture<FavoritealbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritealbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritealbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
