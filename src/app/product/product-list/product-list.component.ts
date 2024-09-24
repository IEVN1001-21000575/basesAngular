import { Component } from '@angular/core';
import { IProductos } from '../productos';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter: string="";
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:IProductos[]=[
    {

      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 Puertas",
      "Year":"febrero 2 2020",
      "Precio":20000,
      "Color":"Blanco",
      "Marca":"Nissan",
      "ImagenUrl":"https://th.bing.com/th/id/R.927f3224fa28293d1f7659d7b1823396?rik=rad%2fwlSEnbeJvQ&pid=ImgRaw&r=0"
    },
    {
      "ProductoId":2,
      "Modelo":"A4",
      "Descripcion":"4 Puertas",
      "Year":"marzo 12 2021",
      "Precio":120000,
      "Color":"Blanco",
      "Marca":"AUDI",
      "ImagenUrl":"https://static.motor.es/fotos-noticias/2022/08/dr-automobiles-ventas-coches-2022-julio-202288853-1659425209_1.jpg"
    },
    {
      "ProductoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 Puertas",
      "Year":"febrero 2 2020",
      "Precio":18000,
      "Color":"Azul",
      "Marca":"KIA",
      "ImagenUrl":"https://www.eluniversal.com.mx/sites/default/files/2022/06/16/qiantu-1.jpg"
    }
  ]
}