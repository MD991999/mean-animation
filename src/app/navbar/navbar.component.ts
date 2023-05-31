import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  icon1: any;
  icon2: any
  middlesession: any
  headersession: any
  emailid: any = '';
  pswd: any = '';
  admincorrectdata: any;
  adminincorrectdata: any;
  ispresent: boolean = false;
  iscontinue: boolean = false
  totp: any;
  inputcollections: any;
  item: any;
  firstinputnumber: any = '';
  secondinputnumber: any = '';
  thirdinputnumber: any = '';
  forthinputnumber: any = '';
  fifthinputnumber: any = '';
  sixthinputnumber: any = '';
  array: any = '';
  username: any;
isavailable:boolean=false
isdisplay:boolean=false;
adminemail:any;
  continueadminform = this.fb.group({
    firstinputnumber: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    secondinputnumber: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    thirdinputnumber: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    forthinputnumber: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    fifthinputnumber: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
    sixthinputnumber: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
  })
  constructor(private api: ApiService, private router: Router, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.username = localStorage.getItem('name')
  }

  // fetching name from localstorage



  hamburgerclick() {
    this.icon1 = document.querySelector('.icon1')
    this.headersession = document.querySelector('.header-session')
    this.middlesession = document.querySelector('.middle-session')
    this.icon1.style.transform = 'translateX(-100px)';
    this.icon2 = document.querySelector('.icon2')
    this.icon2.style.transform = 'translateX(75px)';
    this.headersession.style.background = ' rgb(3,37,65)';
    this.middlesession.style.transform = 'translateY(0px)';
  }
  crossclick() {
    this.icon1 = document.querySelector('.icon1')
    this.icon1.style.transform = 'translateX(0px)';
    this.icon2 = document.querySelector('.icon2')
    this.icon2.style.transform = 'translateX(-100px)';
    this.headersession.style.background = ' #183c55'
    this.middlesession.style.transform = 'translateY(-100px)';

  }
  submit() {
    // api call 

    this.api.admindetails(this.emailid, this.pswd)
      // asynchronous function
      .subscribe((result: any) => {
        this.ispresent = true
        this.iscontinue = true

        console.log('the result is', result);
        this.totp = result.totp
        console.log(this.totp);

        alert(result.message)

        this.admincorrectdata = result.message;
        console.log(this.admincorrectdata);
this.adminemail=localStorage.setItem('adminemail',result.email)
      },
        (result: any) => {
          this.adminincorrectdata = result.error.message
        }
      )
  }
  continue() {
    console.log(this.firstinputnumber);
    // this.array=this.array+''
    this.array = this.array + this.continueadminform.value.firstinputnumber
    this.array = this.array + this.continueadminform.value.secondinputnumber
    this.array = this.array + this.continueadminform.value.thirdinputnumber
    this.array = this.array + this.continueadminform.value.forthinputnumber
    this.array = this.array + this.continueadminform.value.fifthinputnumber
    this.array = this.array + this.continueadminform.value.sixthinputnumber
    console.log('the output', this.array);

    if (this.continueadminform.valid) {
      if (this.array == this.totp) {
        setTimeout(() => {
          this.router.navigateByUrl('adminpage')
        }, 1000)

      }
      else {
        alert('Incorrect otp')
        this.array = ''
        this.continueadminform.reset();
      }

    }
    else {

      alert('Invalid form')
      this.array = ''

    }
    console.log(this.array);

    // this.firstinputnumber = this.firstinputnumber.value
  }
  //  logout function

  logout() {
   this.isdisplay=!this.isdisplay
    // localStorage.removeItem('name');
//     this.username=''
//     setTimeout(() => {
// this.router.navigateByUrl('')
//     },2000)
  }














}

