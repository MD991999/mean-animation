import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  template: `
  <h1>New animation added!</h1>
  <button (click)="showNotification()">Notify users</button>
`
})
export class AdminPageComponent implements OnInit {
  // this variable is used to hide and display (middesession1 div)
  showdetails = true
  isButtonActive = false;
  displayanimationlist = false
  sidebarlist = true
  myarray: any = []
  animation: any = {}
  containerdivtable: any;
  searchitem: any = '';
  isdisplay: boolean = false;
  animecount: any;
  usercount: any;
  admincount: any;
  istrue: boolean = false;
  item: any;
  isdisplaymodel: boolean = false
  adminemail = localStorage.getItem('adminemail')

  // asidebarlist: boolean = false
  // variables used while adding a new animations
  // animename:any='';
  // animescreenplaystory:any='devassia';
  // animedirector:any='liji';
  // animescreenplayby:any='abin';
  // animestoryby:any='bobby';
  // animewriter:any='minnu';
  // creating a group
  createanimationmovieform = this.fb.group({
    animationbg: ["", [Validators.required]],
    animename: ["", [Validators.required]],
    // Image
    animeimage: ["", [Validators.required]],
    // Overview
    animedescription: ["", [Validators.required]],
    // genre
    animegenre: ["", [Validators.required]],
    // time-duration
    animetimeduration: ["", [Validators.required]],
    // trailor video
    animetrailor: ["", [Validators.required]],
    // screenplay/story by:
    animescreenplaystoryby: [""],
    // director:
    animedirector: [""],
    // Screen play:
    animescreenplayby: [""],
    // story by:
    animestoryby: [""],
    // writer by:
    animewriter: [""],
    // date
    // animedateofdisplay:[""]
  })




  // inorder to make this component reactive forms i need to do dependency injection
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {

  }

  // to hide and display the middlesession1 div
  viewanimationlist() {
    this.isButtonActive = true;
    this.displayanimationlist = !this.displayanimationlist
    this.sidebarlist = false
    // this.asidebarlist=false
    this.showdetails = !this.showdetails
  }
  // function for adding new animation movie on the mongodb
  createanimation() {
    console.log(this.createanimationmovieform);
    // access all data in html file in the ts file
    let animationbg = this.createanimationmovieform.value.animationbg;

    let animename = this.createanimationmovieform.value.animename;
    let animeimage = this.createanimationmovieform.value.animeimage;
    let animedescription = this.createanimationmovieform.value.animedescription;
    let animegenre = this.createanimationmovieform.value.animegenre;
    let animetimeduration = this.createanimationmovieform.value.animetimeduration;
    let animetrailor = this.createanimationmovieform.value.animetrailor;
    let animescreenplaystoryby = this.createanimationmovieform.value.animescreenplaystoryby;
    let animedirector = this.createanimationmovieform.value.animedirector;
    let animescreenplayby = this.createanimationmovieform.value.animescreenplayby;
    let animestoryby = this.createanimationmovieform.value.animestoryby;
    let animewriter = this.createanimationmovieform.value.animewriter;
    this.containerdivtable = document.querySelector('.container-div-table')
    if (this.createanimationmovieform.valid) {
      // alert('continue')
      // api call
      this.api.addanimation(animationbg, animename, animeimage, animedescription, animegenre,
        animetimeduration, animetrailor, animescreenplaystoryby, animedirector,
        animescreenplayby, animestoryby, animewriter)
        .subscribe((result: any) => {
          console.log(result.message);
          alert(result.message);
          this.fetchanimationdata()
          console.log('result.messagetouser');

          // this.containerdivtable.reload()
        },
          (result: any) => {
            console.log(result.error.message);
            alert(result.error.message);

          })
    }
    else {
      alert('Some fields are mandatory')
    }
  }


  ngOnInit(): void {
    this.fetchanimationdata()
    this.animecountdatabase()
    this.admincountdatabase()
    this.usercountdatabase()
    if (!this.adminemail) {
      alert('Please login')
      this.router.navigateByUrl('')
    }
  }

  fetchanimationdata() {
    this.api.displayanimationdetails()
      .subscribe((result: any) => {
        console.log(result);
        this.myarray = result.message
        console.log('the output is', this.myarray);
        this.item = this.myarray._id
        console.log('the value of item is', this.item);

      })




  }

  // function that specify the logic for hiding and displayind the aside bar

  // hamburgerclick(){
  //   this.asidebarlist=!this.asidebarlist

  // }


  filter(event: any) {
    this.searchitem = event.target.value
  }


  viewanimation(_id: any) {
    // this.isdisplay=!this.isdisplay
    //   console.log(_id);
    // this.router.navigateByUrl('viewanimation')
    //   this.api.viewanimation(_id)
    //   .subscribe((result:any)=>{
    //     console.log(result);
    //     this.animationdetails=result.message
    //     console.log(this.animationdetails);

    //   })
  }
  // to obtain the number of animations in the stored in the database
  animecountdatabase() {
    this.api.animenumberdatabase()
      .subscribe((result: any) => {
        console.log(result);
        this.animecount = result
      })
  }

  // to obtain the number of admin in the stored in the database
  admincountdatabase() {
    this.api.adminnumberdatabase()
      .subscribe((result: any) => {
        console.log(result);
        this.admincount = result
      })
  }


  // to obtain the number of users in the stored in the database
  usercountdatabase() {
    this.api.usernumberdatabase()

      .subscribe((result: any) => {
        console.log(result);
        this.usercount = result
      })
  }

  // function that defines the logic to display a particular function
  eyebutton(_id: any) {
    this.istrue = true
    console.log('the particular id of the animation is', _id);
    this.api.viewanimation(_id)
      .subscribe((result: any) => {
        console.log('the final output is', result);
        this.animation = result.message
        console.log('the animation variable', this.animation);

      })
  }

  // function to diaply the parent element when child click on the back button
  displayparentdiv() {
    this.istrue = false
  }

  // function used to update animations
  // editbutton(_id:any){
  //   this.isdisplaymodel=true
  //   console.log(this.isdisplaymodel);
  //   console.log('id tag',_id);

  // }
  updateanimation() {

  }

  // function to delete the nimations
  deleteanimation(_id: any) {
    console.log(_id);

    this.api.deleteanime(_id)
      .subscribe((result: any) => {
        // alert(result.message)
        this.fetchanimationdata()
      },
        (result: any) => {
          alert(result.error.message)
        })
  }
  homeclick(){
    this.router.navigateByUrl('')
  }

  logoutadmin() {
    localStorage.removeItem('adminemail')
    this.router.navigateByUrl('')
  }

}
