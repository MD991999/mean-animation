import { Component } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent {
// uname=localStorage.getItem('name')
// email=localStorage.getItem('name')
// wishlist=localStorage.getItem('wishlist')
isdisplay:boolean=true
// to logout 
_id=localStorage.getItem('_id')
uname=localStorage.getItem('name')
 email= localStorage.getItem('email')
wishlist= localStorage.getItem('wishlist')
  logout(){
  
    if(this.uname|| this.email||this.wishlist){
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('wishlist')
      localStorage.removeItem('_id')

      this.isdisplay=false
      location.reload()
    }
    
  }
  // to cancel logout
  crossclick(){
    this.isdisplay=false

  }
}
