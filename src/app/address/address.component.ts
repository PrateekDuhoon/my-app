import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addressForm = this.formBuilder.group({
      addresses: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.addAddress();
  }

  get addressControls() {
    return this.addressForm.get('addresses') as FormArray;
  }

  createAddressGroup(): FormGroup {
    return this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  addAddress(): void {
    this.addressControls.push(this.createAddressGroup());
  }

  removeAddress(index: number): void {
    this.addressControls.removeAt(index);
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
      // Perform further actions
    }
  }
}
