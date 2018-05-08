import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true,
  }]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() public options: RadioOption[];
  public value: any;
  public onChange: any;

  constructor() { }

  ngOnInit() {
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {

  }


  public setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

}
