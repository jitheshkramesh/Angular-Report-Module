import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthListComponent } from './pre-auth-list.component';

describe('PreAuthListComponent', () => {
  let component: PreAuthListComponent;
  let fixture: ComponentFixture<PreAuthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAuthListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
