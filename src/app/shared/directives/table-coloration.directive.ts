import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTableColoration]'
})
export class TableColorationDirective {


  @Input("appTableColoration")
  set evaluation(value:number){
    if (value > 1){
      this._renderer.setStyle(this._el.nativeElement, "color", "yellow");
    } else {
      this._renderer.setStyle(this._el.nativeElement, "color", "gray");
    }
  }


  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }
}


