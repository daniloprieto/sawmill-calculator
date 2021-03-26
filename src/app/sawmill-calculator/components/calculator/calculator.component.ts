import { Add } from './../add.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit{

  public add: Add = {
    quantity: null,
    inches: null,
    length: null,
    meters: null,
    feet: null,
    price: null,
  };

  public order: Add[] = [];

  public priceFeet:number = 80;

  public feet:number = 0;
  public meters: number = 0;
  public price: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  change(){
    this.getMeters();
    this.getFeet();
    this.getPrice();
  }

  getMeters(){
    if (this.add?.quantity !== undefined
      && this.add?.quantity !== null
      && this.add?.length !== undefined
      && this.add?.length !== null
      && this.add?.inches !== null
      && this.add?.inches !== undefined){

      console.log(this.add);

      this.add.meters = Math.round( ( (this.add.quantity * this.add.length) + ( (this.add.inches * 0.0254) * this.add.quantity) ) );

    }

  }

  getFeet(){
    if (this.add?.meters !== null && this.add?.inches && this.add.quantity){

      this.add.feet = Math.round( (this.add.meters *  3.28084) );

    }
  }

  getPrice(){
    if (this.add?.feet !== null){

      this.add.price = this.add.feet *  this.priceFeet;

    }
  }

  addToOrder(add:any){
    this.order.push(add);

    this.add = {
      quantity: null,
      inches: null,
      length: null,
      meters: null,
      feet: null,
      price: null,
    };

    if (this.add.feet){
      this.add.price = (this.add.feet * this.priceFeet);
    }

    this.totals();
  }

  quitToOrder(index:number){
    this.order.splice(index,1);
    console.log(index);
    this.totals();
  }

  totals(){
    let meters = 0;
    let feet = 0;
    let price = 0;

    for( let product of this.order){
      if(product.meters && product.feet && product.price){

        meters += product.meters;
        feet += product.feet;
        price += product.price;
      }

    };

    this.meters = meters;
    this.feet = feet;
    this.price = price;
  }

}
