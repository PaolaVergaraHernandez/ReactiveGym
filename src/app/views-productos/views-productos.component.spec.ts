import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsProductosComponent } from './views-productos.component';

describe('ViewsProductosComponent', () => {
  let component: ViewsProductosComponent;
  let fixture: ComponentFixture<ViewsProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
