import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Product } from '../../../src/productModel';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  geturls: any;
  posturls: any;
  baseUrl: string = "http://localhost:8000";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  // Sending a GET request to /products

  // public getProducts(): Observable<Product[]> {

  //   return this.http

  //     .get(this.baseUrl + '/products')

  //     .map(products => {
  //       const productData = products;
  //       // return chamados.map((chamado) => new Chamado(chamado));
  //       return productData.map((product) => new Product(product));

  //     })

  //     .catch((err) => {

  //       console.error(err);

  //     });

  // }

  getProduct() {
    debugger;
    // this.geturls = "http://localhost:8000/products";
  return this.http.get('/api/product').map(res => res);
    // return this.http.get(this.geturls).map((res: Response) => res)
  }

  /// post request
  // let headers = new Headers({ 'Content-Type': 'application/json' });
  // let body = new FormData();
  // body.append('username', username);
  // body.append('password', password);
  // console.log(body);
  // console.log(headers);
  // return this.http.post('http://api/v1/get_user',body,headers).map((res: Response) => res.json());



  // Sending a POST request to /products




  public createProduct(product) {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let body = new FormData();
    // body.append('username', username);
    // body.append('password', password);
    // console.log(body);
    // console.log(headers);
    // return this.http.post('http://api/v1/get_user',body,headers).map((res: Response) => res.json());

    // debugger;
    // this.posturls = "/api/users";
    // return this.http.post(this.geturls, product).map((res: Response) => res)  
    // this.http.post(this.posturls, { username: product.username, password: product.password }, {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // });
    // debugger;
    //   .subscribe(res =>
    //      console.log(res)
    // );
    debugger;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let body = { "username": product.username, "password": product.password };

    // this.http.post("/api/users", JSON.parse(JSON.stringify(body)), { headers: headers }).map(res => res).subscribe(data1 => {
    //   console.log("data is posting", data1);
    // });
        return this.http.post("/api/users", JSON.parse(JSON.stringify(body)), { headers: headers }).map((res: Response) => res);

  };

  


  // Sending a GET request to /products/:id

  public getProductById(productId: number) {

  }

  // Sending a PUT request to /products/:id

  public updateProduct(product: Product) {

  }

  // Sending a DELETE request to /products/:id

  public deleteProductById(productId: number) {

  }
}
