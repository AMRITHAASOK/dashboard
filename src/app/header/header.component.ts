import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(){}
  ngOnInit(): void {

  }
  //userdefined event
 @Output() toggle=new EventEmitter()
  menuIconClick(){
    this.toggle.emit()
   setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    )
   },100);
  }
}
