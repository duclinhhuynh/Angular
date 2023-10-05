import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public name = "linh";
  public 'age': number ;
  public traiCay = ["tao", "nho", "quyt"];
  public traiCay2 = [{ten: 'tao', price: 20, sale: true}, {ten: 'dao', price: -25, sale :false}, {ten: 'quyt', price: 15, sale: true}];
  constructor(){}

  ngOnInit(): void {
    console.log('traicay = ', this.traiCay);
  }
  public resetName(): void{
    this.name = '';
  }
}
