import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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
  public districts : string[] = [];
  public cities = [
    {city: 'Chon thanh pho'
    ,district:[]},
    {city: 'an giang'
  , district: ["Thành phố Vũng Tàu"
              ,"Thị xã Bà Rịa"
              ,"Thị xã Phú Mỹ"
              ,"Huyện Châu Đức"
              ,"Huyện Côn Đảo"
              ,"Huyện Đất Đỏ"
              ,"Huyện Long Điền"
              ,"Huyện Tân Thành"
              ,"Huyện Xuyên Mộc"]
            },
            {
              city: 'Bà Rịa - Vũng Tàu',
              district: [
              "Thành phố Vũng Tàu",
              "Thị xã Bà Rịa",
              "Thị xã Phú Mỹ",
              "Huyện Châu Đức",
              "Huyện Côn Đảo",
              "Huyện Đất Đỏ",
              "Huyện Long Điền",
              "Huyện Tân Thành",
              "Huyện Xuyên Mộc"]
            }]
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(private common: CommonService){}

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
    // console.log('traicay = ', this.traiCay);
    console.log(this.cities);

  }
  public changeCity(event : any) : void{
    const city = event.target.value;
    if(!city) {
      return ;
    }

    // way1 
    // console.log('event :', event.target.value);
    // const search = this.cities.filter(data => data.city === city);
    // console.log('search', search);
    // if(search && search.length > 0) {
    //   this.districts = search[0].district;
    // }
    // way 2
    this.districts = this.cities.find(data => data.city === city)?.district || [];
  }
  
}
