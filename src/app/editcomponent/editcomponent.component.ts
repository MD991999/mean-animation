import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcomponent',
  templateUrl: './editcomponent.component.html',
  styleUrls: ['./editcomponent.component.css']
})
export class EditcomponentComponent implements OnInit {
  pageContent: string = 'This is the default page content';
  tagname: any;
  animationdetails: any = {}
  animation: any = {};
  updatedAnimename:any;
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


  constructor(private fb: FormBuilder,private viewcomponentroute: ActivatedRoute, private api: ApiService, private router: Router) {

  }
  onContentChange(event: any) {
    this.pageContent = event.target.innerText;
  }
  @HostListener('document:paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain');
    document.execCommand('insertText', false, text);
  }

  ngOnInit(): void {
    // to get the id of a particular animations
    this.viewcomponentroute.params
      .subscribe((result: any) => {
        console.log('the id of particular animation is', result);
        this.tagname = result._id
        console.log(this.tagname);
        //  return this.tagname
      })

    // to view the details of a particular animation 
    this.api.viewanimation(this.tagname)
      .subscribe((result: any) => {
        console.log(result);
        this.animationdetails = result.message
        console.log(this.animationdetails);
        this.animation = result
      })

      if(!localStorage.getItem('adminemail')){
        alert('Please login')
      // this.adminrouter.parent
        this.router.navigateByUrl('')
      }
  
  
  }
  backarrow() {
    this.router.navigateByUrl('/adminpage')
  }
  updateanimation(_id:any){
    console.log(this.createanimationmovieform);
    
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


    if(this.createanimationmovieform.valid){
this.api.updateparticularanimations(_id,animationbg,animename,animeimage,animedescription,animegenre,animetimeduration,animetrailor,animescreenplaystoryby,animescreenplayby,animestoryby,animewriter)
.subscribe((result: any) => {
  console.log(result);
},
(result: any) => {
  console.log(result.error.message);
}
)
    }
    else{
      alert('Invalid form')
    }

console.log('id of the updated animation is',_id,);

  }
}
