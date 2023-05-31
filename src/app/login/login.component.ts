import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uname: any;
  email: any;
  _id:any;
  wishlist:any=[]
  // loginform is an instance of formGroup
  loginform = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {

  }
  login() {
    console.log(this.loginform);

    let username = this.loginform.value.username
    let password = this.loginform.value.password
    if (this.loginform.valid) {
      // alert('successfully login')
      // api call
      this.api.logindetails(username, password)
        .subscribe((result: any) => {
          console.log('the output is', result);
          this.uname = result.uname
          this.email = result.email
          this.wishlist=result.wishlist
          this._id=result._id
          localStorage.setItem("name", this.uname)
          localStorage.setItem("email", this.email)
          localStorage.setItem("wishlist", JSON.stringify(this.wishlist))
          localStorage.setItem("_id", this._id)

          alert(result.message)
          setTimeout(() => {
            this.router.navigateByUrl('/animation-list')
          }, 2000)
        },
          (result: any) => {
            console.log('the output is', result);
            alert(result.error.message)
          }
        )
    }
    else{
      alert('Please fill the required details')
    }

  }
  register(){
    this.router.navigateByUrl('register')
  }
}
