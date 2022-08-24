import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from "./../product-service.service";

import { Product } from "./../product";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 productForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductServiceService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      price: new FormControl('',[
        Validators.required
      ]),
    });
  }

  handleSubmit():void {
    let formData = this.productForm.value;
    // console.log(formData);
    
    let product: Product = {
      name: formData.name,
      price: formData.price
  }
  // console.log(product);
  
  this._ProductService.save(product);
  this._Router.navigate(['/']);
}

}
