import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdineNonAggiuntoComponent } from './ordine-non-aggiunto.component';

describe('OrdineNonAggiuntoComponent', () => {
  let component: OrdineNonAggiuntoComponent;
  let fixture: ComponentFixture<OrdineNonAggiuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdineNonAggiuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdineNonAggiuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
