import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isunchnge).toBe(true);
    component.enableBuying();
    expect(component.isunchnge).toBe(false);

  });

  it('verifing title of the component', () => {
    const element: HTMLElement = fixture.nativeElement;
    const header = element.querySelector("h1");
    expect(header?.textContent).toBe("Product List")

  });

  

});
