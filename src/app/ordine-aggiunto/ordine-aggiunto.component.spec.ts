import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdineAggiuntoComponent } from './ordine-aggiunto.component';

describe('OrdineAggiuntoComponent', () => {
  let component: OrdineAggiuntoComponent;
  let fixture: ComponentFixture<OrdineAggiuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdineAggiuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdineAggiuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
