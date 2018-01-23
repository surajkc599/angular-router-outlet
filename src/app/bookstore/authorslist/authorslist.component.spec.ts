import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorslistComponent } from './authorslist.component';

describe('AuthorslistComponent', () => {
  let component: AuthorslistComponent;
  let fixture: ComponentFixture<AuthorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
