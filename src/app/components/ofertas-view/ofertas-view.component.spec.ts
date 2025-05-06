import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasViewComponent } from './ofertas-view.component';

describe('OfertasViewComponent', () => {
  let component: OfertasViewComponent;
  let fixture: ComponentFixture<OfertasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertasViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
