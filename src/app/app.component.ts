import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  stripe: any;
  card: any;

  constructor() { }

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51OIWdzABSza0y4Y7CN0Blt2TD6K1YoMKS5hB8ZPp4umxuUt5baSrudj5hCJGTFCCLpQteB8Zk0fv95wBhrKZR09Y00hocIvb5V');

    const elements = this.stripe.elements();
    this.card = elements.create('card');
    this.card.mount('#card-element');
  }

}
