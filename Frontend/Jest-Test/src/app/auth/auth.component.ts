import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  label = 'Click Here';

  onKeyDown(event: any){
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if(event.ctrlKey && charCode === 's'){
      event.preventDefault();
    }
  }
  ngOnInit(): void {
    
  }

  onClickButton() {
    this.label = 'You Clicked';
  }

}
