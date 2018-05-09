import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
    console.log(this.total);
    console.log(this.delivery);
    console.log(this.itemsValue);
  }

  public total(): number {
    return this.delivery + this.itemsValue;
  }

}
