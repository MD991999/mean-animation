import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  uname: string = ''
  email: string = ''
  pswd: string = ''
  cpswd: string = ''
  dob: string = ''
  option: string = ''
  gender: string = ''
  constructor(private api: ApiService,private router:Router) {

  }
  register() {
    if (this.pswd == this.cpswd) {
      // alert('Continue')
      this.api.registerapi(this.uname, this.email, this.pswd, this.dob, this.option, this.gender)
        .subscribe((result: any) => {
          console.log(result);
          alert(result.message)
          this.router.navigateByUrl('/login')
        },
        (result:any)=>{
          alert(result.error.message)
          
        }
        )
    }
    else {
      alert('Your pswd doesnt match')
    }

  }
  
}
