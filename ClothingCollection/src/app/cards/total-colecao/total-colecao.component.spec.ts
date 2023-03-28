import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalColecaoComponent } from './total-colecao.component';

describe('TotalColecaoComponent', () => {
  let component: TotalColecaoComponent;
  let fixture: ComponentFixture<TotalColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalColecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
