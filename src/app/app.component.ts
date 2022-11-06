import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'TestTaskAngular';
 defaultCurrencies = ["UAH", "USD", "EUR", "PLN"];
 rates = []

setRates(rates:any) {
    this.rates = rates
  console.log(this.rates)
}

 ngOnInit() {
   fetch("https://cdn.cur.su/api/latest.json")
       .then(res => res.json())
       .then(json => {
         this.setRates(json.rates);
       }).catch(err => {
     throw new Error(`Something goes wrong with error ${err}`)
   })
 }
}
