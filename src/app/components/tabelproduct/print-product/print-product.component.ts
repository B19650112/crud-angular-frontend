import { Component, OnInit } from '@angular/core';
import { ListProductService } from 'src/app/services/list-product.service';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-print-product',
  templateUrl: './print-product.component.html',
})

export class PrintProductComponent implements OnInit {
  
  prttblproducts
  showBar: boolean = false; ProgressValue: number = 0; idCount: number = 0
  blobType= "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  constructor( private servisproduct: ListProductService ) {}

  ngOnInit() {
  }
  //print to Excel or PDF tabelproduct
  prtExcelPDF(event) {
    this.ProgressValue = 0
    event.preventDefault();
    const target = event.target
    this.showBar = true
    const printto = target.querySelector('input[name="printto"]:checked').value
    this.servisproduct.getListProduct().subscribe(data => {
      this.prttblproducts = data
      if (this.prttblproducts.length > 0) {
        if (printto == 'Excel') {
          this.getExcelProduct(this.prttblproducts)
        } else {
          this.getPdfProduct(this.prttblproducts)
        }
        setTimeout(() => {
          this.showBar = false;
        }, 2000)
      }
    })
  }

  windowclose() {
    window.history.back();
  }

  //print to Excel tabelproduct
  getExcelProduct(prttblproducts) {

    var workbook = new Excel.Workbook();
    var border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    var font = { name: 'Calibri', size: 11, bold: true };

    // Create a sheet
    var sheet = workbook.addWorksheet('Sheet1');
    
    sheet.mergeCells('A1', 'E2');
    sheet.getCell('A1').value = 'LIST TABEL PRODUCT'
    sheet.getCell('A1').font = font;
    sheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getRow(3).values = ['ID', 'Image Path', 'Title', 'description', 'Price'];
    
    // Table header
    sheet.columns = [
      { key: 'id', width: 6 },
      { key: 'imagepath', width: 20 },
      { key: 'title', width: 12 },
      { key: 'description', width: 50 },
      { key: 'price', width: 16, },
    ];
    
    ['A3', 'B3', 'C3', 'D3', 'E3'].map(key => {
      sheet.getCell(key).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'cccccc' } };
    });
    ['A3', 'B3', 'C3', 'D3', 'E3'].map(key => {
      sheet.getCell(key).alignment = { vertical: 'middle', horizontal: 'center' };
    });

    sheet.getCell('A3').font = font; sheet.getCell('B3').font = font; sheet.getCell('C3').font = font;
    sheet.getCell('D3').font = font;sheet.getCell('E3').font = font

    sheet.getCell('A3').border = border; sheet.getCell('B3').border = border; sheet.getCell('C3').border = border;
    sheet.getCell('D3').border = border;sheet.getCell('E3').border = border;
    sheet.getRow(3).height = 24

    for (var i = 0; i < prttblproducts.length; i++) {
        this.ProgressValue = Math.round((100 * i / prttblproducts.length))
        sheet.addRow({ id:prttblproducts[i].ID,imagepath: prttblproducts[i].imagepath, title: prttblproducts[i].title,
            description: prttblproducts[i].description,price: parseInt(prttblproducts[i].price)});
    }
    sheet.getColumn(5).numFmt ='#,##0 ;[Red]-#,##0 '
    var j = 4
    var length = prttblproducts.length
    length = length + j
    for (j = 0; j < length; j++) {
      sheet.getCell('A' + j).border = border; sheet.getCell('B' + j).border = border; sheet.getCell('C' + j).border = border;
      sheet.getCell('D' + j).border = border;sheet.getCell('E' + j).border = border;
      sheet.getCell('A:'+ j).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('C:'+ j).alignment = { vertical: 'middle', horizontal: 'center' };
    }

    workbook.xlsx.writeBuffer().then(data => {
      var blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, "tabelproduct.xlsx", true);
    });
    
  }
  //print to PDF tabelproduct
  getPdfProduct(prttblproducts) {
 
    let doc = new jsPDF('p', 'pt');
    let head = this.headRows();
    let body = this.bodyRows(prttblproducts);
    doc.text(42,20,"List Tabel Product");
    doc.autoTable({
      startY: 25,
      head: head,
      body: body,
      theme: 'grid',
      tableWidth: 'auto',
      headStyles: {
        halign: 'center'
      },
      columnStyles: { id: { halign: 'center'},title: { halign: 'center'}, price: {halign: 'right'}
      },
    });
    doc.save('tabelproduct.pdf')
  }

  headRows() {
    return [{id:'ID', imagepath:'Image Path', title:'Title', description:'description', price:'Price',}];
  }

  bodyRows(prttblproducts) {
    let body = [];
    for (var i = 0; i < prttblproducts.length; i++) {
      this.ProgressValue = Math.round((100 * i / prttblproducts.length))
      body.push({
        id: prttblproducts[i].ID,
        imagepath: prttblproducts[i].imagepath,
        title: prttblproducts[i].title,
        description: prttblproducts[i].description,
        price: parseInt(prttblproducts[i].price).toLocaleString(),
      });
    }
    return body;
  }

}
