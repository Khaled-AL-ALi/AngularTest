import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stupProduct = {

    id: 3,
    name: 'Devops',
    price: 710,
    quantity: 0,
    status: '4 left',
    description: "this course help us to understand automation testing",
    imgaddress: "http/"

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product = stupProduct
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector("p");
    expect(p?.textContent).toBe("course is available on discount")
  });

  it('verify paragraph', () => {
    expect(component).toBeTruthy();
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelectorAll("p");
    expect(p?.length).toEqual(2)
  });


  it('verify paragraph', () => {
    component.product = stupProduct
    fixture.detectChanges();
    let selectedproduct: any
    component.notify.subscribe((product) => selectedproduct = product)
    component.clickMeChlid()
    expect(selectedproduct).toEqual(stupProduct)

  });

});
