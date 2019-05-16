import { Component, OnInit, ViewChild } from '@angular/core';
import { ListProductService } from 'src/app/services/list-product.service';
import { ModalDirective } from 'angular-bootstrap-md';

var mFound=""
var mEdit = "0";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})

export class ListProductComponent implements OnInit {
    
  listtblproducts
  
  id: String; imagepath: String; title: String; description: String; price: String;
  page:number = 1; delId:number = 0; errMsg: String; mBlink: String; mbtnCancel: String; nameProduct: String
  showMsg: boolean = false; showBtn: boolean = false

  @ViewChild('deleteModal') deleteModal: ModalDirective;

  constructor(private servisproduct: ListProductService) { }

  ngOnInit() {
    this.refreshListProduct()
    this.initVariable()
  }
  
  //Select detail for edit tabelProduct
  onSelectDetail(record) {
    this.id = record.ID
    this.imagepath = record.imagepath
    this.title = record.title
    this.description = record.description
    this.price = parseInt(record.price).toLocaleString()
    this.mbtnCancel = "Cancel"
    this.showBtn=true
    mEdit = "1"
  }
  //add save tabelProduct
  addsaveProduct(event) {
    event.preventDefault();
    const target = event.target
    this.imagepath = target.querySelector('#imagepath').value
    this.title = target.querySelector('#title').value
    this.description = target.querySelector('#description').value
    this.removeCommas()

    mFound = "0"
    if (mEdit=="1") {
      mFound = "1"
    }

    this.showMsg= false
    this.servisproduct.getCheckProduct(this.imagepath, this.title, this.description, this.price).subscribe(data => {
      if(Object.keys(data).length > 0) {
        this.mBlink = "**"
        this.errMsg = Object(data.toString())
        this.showMsg= true
        setTimeout(() => {
          this.showMsg = false;
        }, 2000)
        return
      } else {
        if (mFound=="0") {
          this.servisproduct.getAddProduct(this.imagepath, this.title, this.description, this.price).subscribe()
        } else {
          this.servisproduct.getUpdateProduct(this.id, this.imagepath, this.title, this.description, this.price).subscribe()
        }
        this.refreshListProduct()
        this.initVariable()
      }
    })
  }
  //delete dialog form
  delProduct(id,description) {
    this.delId = id
    this.nameProduct = description
    this.deleteModal.show()
  }
  //delete by id tabelProduct
  deleteProduct() {
    this.servisproduct.getDeletProduct(this.delId).subscribe();
    this.refreshListProduct()
    this.deleteModal.hide()
  }
  //Select all record and count tabelProduct
  refreshListProduct(){
    this.showBtn=true
    this.servisproduct.getListProduct().subscribe(data => {
      this.listtblproducts = data
    })
    setTimeout(() => {
      this.showBtn = false;
    }, 100)        // timeout 100 = 10000 record, This is used to pagination does not appear first before finish reading the data
  }
  //remove comma when editing edit values and check special characters
  removeCommas(){
    this.price = this.price.replace(/,/g,'');
    this.description = this.description.replace(/[\/\\#,+~`:*?<>{}]/gi,'');
  }
  //window close
  windowclose() {
    this.initVariable()
    window.history.back();
  }
  //init variable input tabelProduct
  initVariable() {
    this.id=null
    this.imagepath=""
    this.title=""
    this.description=""
    this.price=""
    this.showMsg=false
    this.mbtnCancel = "Exit"
    mEdit="0"
    if (this.mbtnCancel == "Cancel") {
      this.showBtn = false
    }
  }

}