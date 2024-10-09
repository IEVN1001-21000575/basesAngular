import { ComponentFixture, TestBed } from '@angular/core/testing';

import { zodiacoComponent } from './zodiaco.component';

describe('ZodiacoComponent', () => {
  let component: zodiacoComponent;
  let fixture: ComponentFixture<zodiacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [zodiacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(zodiacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
