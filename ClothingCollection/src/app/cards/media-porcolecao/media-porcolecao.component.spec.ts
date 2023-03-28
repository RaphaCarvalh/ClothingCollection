import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPOrcolecaoComponent } from './media-porcolecao.component';

describe('MediaPOrcolecaoComponent', () => {
  let component: MediaPOrcolecaoComponent;
  let fixture: ComponentFixture<MediaPOrcolecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPOrcolecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPOrcolecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
