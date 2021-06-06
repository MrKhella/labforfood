import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuttiGliOrdiniComponent } from './tutti-gli-ordini.component';

describe('TuttiGliOrdiniComponent', () => {
  let component: TuttiGliOrdiniComponent;
  let fixture: ComponentFixture<TuttiGliOrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuttiGliOrdiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuttiGliOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
