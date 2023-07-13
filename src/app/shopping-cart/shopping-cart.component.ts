import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  itemForm: FormGroup;
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  private cartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor(private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {
    this.cartSubject.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  addItem(): void {
    if (this.itemForm.valid) {
      const newItem: CartItem = {
        name: this.itemForm.value.name,
        quantity: this.itemForm.value.quantity,
        price: this.itemForm.value.price
      };

      const updatedItems = [...this.cartItems, newItem];
      this.cartSubject.next(updatedItems);

      this.itemForm.reset();
    }
  }

  removeItem(item: CartItem): void {
    const updatedItems = this.cartItems.filter(i => i !== item);
    this.cartSubject.next(updatedItems);
  }

  private calculateTotal(): void {
    this.cartTotal = this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }
}
