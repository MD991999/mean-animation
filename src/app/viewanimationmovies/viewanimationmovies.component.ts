import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { HttpClientModule } from '@angular/common/http';
import { Renderer2 } from '@angular/core'

// import {httpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-viewanimationmovies',
  templateUrl: './viewanimationmovies.component.html',
  styleUrls: ['./viewanimationmovies.component.css']
})
export class ViewanimationmoviesComponent implements OnInit {
  ispresent: boolean = false
  isdisplay: boolean = false
  istrue: boolean = false
  // how to generate a user defined events in the class
  //  to do that we need to create an object for the class eventemitter
  @Output() backbutton = new EventEmitter()
  // what does thismean is that ,when the user click on the back button,an event will occur at parent in the child selector.here the event is named as backbutton.here the parent is animation-list and child is view-animation


  @Input() animationdetails: any;
  // showIcons = false;
  _id = localStorage.getItem('_id')
  fileUrl: string = '';
  fileName: string = 'my-video.mp4';
  watchlistcollection = JSON.parse(localStorage.getItem("wishlist") || "")
  myObject: any;
  email: any = localStorage.getItem('email')
  constructor(private http: HttpClientModule, private api: ApiService, private router: Router) {
    // private renderer: Renderer2,
  }


  //   downloadVideo(_id:any) {
  //     console.log('hello downloads');

  //     fetch(this.animationdetails.trailor)
  //         .then(res => res.blob())
  //         .then(blob => saveAs(blob, 'video.mp4'));
  // }
  downloadVideo(_id: any) {
    // const link = document.createElement('a');
    // link.setAttribute('href', 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4');
    // link.setAttribute('download', 'my-video.mp4');
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }





  // https://www.kapwing.com/videos/64437d0dffb95b0017619444

  ngOnInit(): void {
    // console.log('the output can be',this.display);
    // this.myObject=localStorage.getItem('myObject')
    // console.log(this.myObject);
    if (!localStorage.getItem('name')) {
      alert('Please login')
      this.router.navigateByUrl('')
    }



    this.alreadyinwishlist(this.email)










  }
  backarrow() {
    // parent should know that the user has clicked on the back button in the child body,to do that we will generate an event in the child
    // to occure an userdefined event :use emit()
    this.backbutton.emit()

  }

  sharebutton() {
    this.ispresent = !this.ispresent
    console.log(this.ispresent);

  }
  linkcopy() {
    this.isdisplay = !this.isdisplay
    console.log('the link copy is ', this.isdisplay);

  }
  watchlist(email: any, animationdetails: any) {


    console.log(email);
    console.log('dffsdffsdfdf', animationdetails);
    this.alreadyinwishlist(email)

    this.api.watchlist(email, animationdetails)
      .subscribe((result: any) => {
        console.log(result);
        alert(result.message)
        this.istrue = true
      },
        (result: any) => {
          alert(result.message.error)
        }
      )
  }


  //  add animation to history
  historyplaytailor(_id: any, animationdetails: any) {
    console.log('ghfhfhfh', animationdetails._id);

    this.api.addtohistory(_id, animationdetails)

      .subscribe((result: any) => {
        console.log('the final outcome is', result);
        // alert(result.message)

      },
        (result: any) => {
          alert(result.message.error)

        }
      )
  }

















  // to check whether the animation is already in wishlist
  alreadyinwishlist(email: any) {
    //     console.log('jhgjg nameeeeeeeeeeee',this.animationdetails.animename);
    // for(let item of this.watchlistcollection){
    //   console.log('jhgjg',item.animename);

    //   if(item.animename+''==this.animationdetails.animename+''){
    //     this.istrue=true
    //     console.log('true/false',this.istrue);

    //    }
    // }

    // this.api.wishlistdetails(email)
  }

}
