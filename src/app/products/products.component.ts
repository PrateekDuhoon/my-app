import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.products$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
