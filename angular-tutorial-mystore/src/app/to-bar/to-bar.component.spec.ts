import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBarComponent } from './to-bar.component';

describe('ToBarComponent', () => {
  let component: ToBarComponent;
  let fixture: ComponentFixture<ToBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
