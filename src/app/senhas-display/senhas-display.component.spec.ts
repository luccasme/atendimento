import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhasDisplayComponent } from './senhas-display.component';

describe('SenhasDisplayComponent', () => {
  let component: SenhasDisplayComponent;
  let fixture: ComponentFixture<SenhasDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenhasDisplayComponent]
    });
    fixture = TestBed.createComponent(SenhasDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
