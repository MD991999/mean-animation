import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, multicast } from 'rxjs';
import { ApiService } from '../service/api.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-animation-list',
  templateUrl: './animation-list.component.html',
  styleUrls: ['./animation-list.component.css']
})
export class AnimationListComponent implements OnInit {
  myarray: any = []
  ispresent: boolean = false
  uname: any = '';
  parentdiv: any;
  isvisible: boolean = false;
  // item:any={}
  animename: any;

  _id:any;
  // always remember to assign the value of searchitem to an empty string,otherwise you wont get the result as you expected.Here 'searchitem' means the value that we enter in the searchbox
  searchitem:any='';
  animation: any = {};
  // =this.item.animename
  storeanimation: any;
  constructor(private api: ApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.displayanimations()
    this.uname = localStorage.getItem('name')

  }
  displayanimations() {
    this.api.displayanimationdetails()
      .subscribe((result: any) => {
        console.log(result);
        this.myarray = result.message
        console.log('array of elements is', this.myarray);

      })
      // if(this.myarray.length+=this.myarray.length+1){
      //   this.ispossible=true
      // }
  }
  // loginrecommendation() {

  //   this.uname = localStorage.getItem('name')
  //   this.parentdiv = document.querySelector('.parent-div')
  //   if (this.uname) {
  //     this.ispresent = false
  //     // this.id=localStorage.getItem('id')
  //     // this.viewanimation(this.animename)

  //     // this.router.navigateByUrl('viewanimation')
  //   }
  //   else {
  //     this.ispresent = true


  //   }
  // }
  // ok button
  okbutton() {
    this.ispresent = false
    this.viewanimation(this.animename)
    setTimeout(() => {
      this.router.navigateByUrl('/login')
    }, 500)
  }






  // ========================================



  // to view a particular animation
  viewanimation(_id:any) {
    console.log('the animename of the animation is', _id);
    // ================================
    this.uname = localStorage.getItem('name')
    // this.parentdiv = document.querySelector('.parent-div')
    if (this.uname) {
      this.ispresent = false
      this.api.viewanimation(_id)
        .subscribe((result: any) => {
        

          // console.log('the complete details of the animation is', result);
          this.animation = result.message
          // const serializedObject = JSON.stringify(this.animation);
          // localStorage.setItem("myObject", serializedObject);
          console.log('the value is ', this.animation);
        }
        )
      this.isvisible = true
      console.log('the result is', this.isvisible);

      // this.id=localStorage.getItem('id')
      // this.viewanimation(this.animename)

      // this.router.navigateByUrl('viewanimation')
    }
    else {
      this.ispresent = true
    }





    // ==================================

    // this.api.viewanimation(animename)
    // .subscribe((result:any)=>{
    //   console.log('the complete details of the animation is',result);
    // }
    // )
    // this.isvisible = true
    // console.log('the result is', this.isvisible);

  }








  // ==================================================

  // to view all function with the help of event emitter
  viewallanimation() {
    // to hide the child view
    this.isvisible = false
    // to bring back the view of parent element

  }


  constfunction(event: any) {
    console.log('the output is', event.target);
  }

  // search button
  filter(event:any){
    this.searchitem=event.target.value
    console.log(this.searchitem);
    
  }
}
