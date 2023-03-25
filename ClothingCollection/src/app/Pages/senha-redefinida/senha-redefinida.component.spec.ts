import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaRedefinidaComponent } from './senha-redefinida.component';

describe('SenhaRedefinidaComponent', () => {
  let component: SenhaRedefinidaComponent;
  let fixture: ComponentFixture<SenhaRedefinidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhaRedefinidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenhaRedefinidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
