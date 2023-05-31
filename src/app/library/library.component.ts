import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  _id = localStorage.getItem('_id');
  alllistinwatchlater: any[] = [];
  alllistinhistory: any[] = [];
  ispresent: boolean = true
  isdisplay: boolean = true
  messagedisplay: any;
  isvisible: boolean = false;
  animation: any = []

  constructor(private api: ApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.watchlater(this._id)
    this.history(this._id)
    if(!localStorage.getItem('_id')){
      alert('please login')
    }
  }

  // get watchlater collection
  watchlater(_id: any) {

    console.log('the id of that person', _id);
    this.api.getwatchlaterlist(_id)
      .subscribe((result: any) => {
        console.log(result);
        this.alllistinwatchlater = result.message
      })
  }

  // get history collection
  history(_id: any) {
    console.log('the id of that person', _id);
    this.api.gethistorylist(_id)
      .subscribe((result: any) => {
        console.log(result);
        this.alllistinhistory = result.message
      }
        // (result: any) => {
        //   console.log(result);
        //   this.messagedisplay=result.message
        //   console.log('dssdsdsd',this.messagedisplay);
        //   // alert('')
        // }
      )

  }
  // to hide watchlater 
  displayhistoryonly() {
    this.ispresent = false
    this.isdisplay = true

  }
  // to view watchlater+history
  library() {
    this.ispresent = true
    this.isdisplay = true

  }
  // to hide history
  displaywatchlater() {
    this.isdisplay = false
    this.ispresent = true
  }
  // delete history
  deletehistory(_id: any) {
    this.api.deletehistory(_id)
      .subscribe((result: any) => {
        console.log(result);
        alert(result.message)
        location.reload()
        // this.isvisible=true
      }


        ,
        (result: any) => {
          alert(result.error.message)
          this.messagedisplay = result.error.message

        })
  }


  // delete watchlater

  watchlaterhistory(_id: any) {
    this.api.deletewatchlater(_id)
      .subscribe((result: any) => {
        console.log(result);
        alert(result.message)
        location.reload()
        // this.isvisible=true
      }


        ,
        (result: any) => {
          alert(result.error.message)
          this.messagedisplay = result.error.message

        })
  }

  // to delete a particular animation from history
  deletebutton(_id: any, animeid: any) {
    console.log('the id', _id, 'and', animeid);

    this.api.deleteaparticularanimationhistory(_id, animeid)
      .subscribe((result: any) => {
        console.log(result);
        alert(result.message);
        location.reload()

        // this.history(_id)
      },
        (result: any) => {
          alert(result.error.message)
          this.messagedisplay = result.error.message
        })
  }



  // to delete a particular animation from watchlater
  deletebuttonwatchlater(_id: any, animeid: any) {
    console.log('the id', _id, 'and', animeid);

    this.api.deleteaparticularanimationwatchlater(_id, animeid)
      .subscribe((result: any) => {
        console.log(result);
        alert(result.message)
        location.reload()

        // this.history(_id)
      },
        (result: any) => {
          alert(result.error.message)
          this.messagedisplay = result.error.message
        })
  }


// to view details of particular animation 

  eyebutton(_id: any) {
    this.isvisible = true
    this.api.viewanimation(_id)
      .subscribe((result: any) => {
        console.log(result);
        this.animation = result.message
      },
        (result: any) => {
          alert(result.error.message)
        })
  }
// child to parent
// to return to parent when clicked on the back button in child
backbuttoncall(){
  this.isvisible = false;
location.reload()
}


backbutton(){
  this.router.navigateByUrl('animation-list')
}
}
