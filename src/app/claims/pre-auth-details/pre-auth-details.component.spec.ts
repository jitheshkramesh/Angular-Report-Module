import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthDetailsComponent } from './pre-auth-details.component';

describe('PreAuthDetailsComponent', () => {
  let component: PreAuthDetailsComponent;
  let fixture: ComponentFixture<PreAuthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAuthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
