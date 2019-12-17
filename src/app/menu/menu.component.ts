import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public texto:string
  constructor() { }

  ngOnInit() {
    this.texto = "Hello World!"
  }

  clicou() {
    if(this.texto == "Você clicou!") {
      this.texto = "Você clicará"
    }
    else{
      this.texto = "Você clicou!"
    }
  }

}
