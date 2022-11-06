import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss']
})
export class ConvertorComponent{
  @Input() curr!: string[]
  @Input() rates!: any
  nowDate: Date = new Date()
  fromCurrency:string ="UAH"
  toCurrency:string = "USD"
  fromPrice:number = 1;
  toPrice:number = 1;

  setToPrice(value:number) {
    this.toPrice = value;
  }
  setFromPrice(value:number) {
    this.fromPrice = value;
  }

  onChangeFromPrice(value:any)  {
    const price = value / this.rates[this.fromCurrency];
    const result = price * this.rates[this.toCurrency]
    console.log("working")
   this.setToPrice(+result.toFixed(2));
    this.setFromPrice(+value);
  }
  onChangeToPrice (value:any){
    const result = (this.rates[this.fromCurrency] / this.rates[this.toCurrency]) * value;
    this.setFromPrice(+result.toFixed(2));
   this.setToPrice(+value);
  }

onChangeFromCurrecy() {
  this.onChangeFromPrice(this.fromPrice);
}
  onChangetoCurrecy() {
    this.onChangeToPrice(this.toPrice);
  }
}
