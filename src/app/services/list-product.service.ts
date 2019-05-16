import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {

  constructor(private http: HttpClient) {
  }
  //get all tabelproduct
  getListProduct() {
    return this.http.get('api/api/grp01/listtblproduct');
  }
  //add tabelproduct
  getAddProduct(imagepath,title,description,price) {
    return this.http.post('api/api/grp01/addtblproduct', {imagepath,title,description,price},
    {responseType: 'text'});
  }
  //update tabelproduct
  getUpdateProduct(id,imagepath,title,description,price) {
    return this.http.post('api/api/grp01/updatetblproduct/'+id, {id,imagepath,title,description,price})
  }
  //delete by id tabelproduct
  getDeletProduct(id) {
    return this.http.delete('api/api/grp01/deletetblproduct/'+id)
  }
  //check input validation
  getCheckProduct(imagepath,title,description,price) {
    return this.http.get('api/api/grp01/checktblproduct', {params: {imagepath:imagepath,title:title,
                        description:description,price:price}})
  }
 
}
