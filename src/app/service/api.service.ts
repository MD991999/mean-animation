import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private trailerUrl = 'https://example.com/trailer.mp4';

  constructor(private http: HttpClient) { }
  // register api call
  registerapi(uname: any, email: any, pswd: any, dob: any, option: any, gender: any) {
    const body = {
      uname,
      email,
      pswd,
      dob,
      option,
      gender
    }
    return this.http.post('http://localhost:3000/register', body)
  }
  // to display everything on a table
  displaydetails() {
    return this.http.get('http://localhost:3000/table')
  }
  // log in of admin
  admindetails(username: any, password: any) {
    const body = {
      username,
      password
    }
    return this.http.post('http://localhost:3000/navbar', body)
  }

  // to add new animation movies to thw backend

  addanimation(animationbg: any, animename: any, animeimage: any, animedescription: any, animegenre: any, animetimeduration: any, animetrailor: any, animescreenplaystoryby: any, animedirector: any, animescreenplayby: any, animestoryby: any, animewriter: any) {
    const body = {
      animationbg,
      animename,
      animeimage,
      animedescription,
      animegenre,
      animetimeduration,
      animetrailor,
      animescreenplaystoryby,
      animedirector,
      animescreenplayby,
      animestoryby,
      animewriter
    }
    return this.http.post('http://localhost:3000/adminpage', body)
  }

  // to get a details of animation from backend and display it in a table
  displayanimationdetails() {
    return this.http.get('http://localhost:3000/table-animationdetails')
  }

  // to get details of a particular animation
  viewanimation(_id: any) {
    return this.http.get('http://localhost:3000/viewanimation/' + _id)
  }
  // to check the logindetails of a particular person
  logindetails(email: any, pswd: any) {
    const body = {
      email,
      pswd
    }
    return this.http.post('http://localhost:3000/login', body)
  }

  // api call to obtain the number of animations in the database
  animenumberdatabase() {
    return this.http.get('http://localhost:3000/admin-page/animecount')
  }
  // api call to obtain the number of animations in the database
  adminnumberdatabase() {
    return this.http.get('http://localhost:3000/admin-page/admincount')
  }
  // api call to obtain the number of animations in the database
  usernumberdatabase() {
    return this.http.get('http://localhost:3000/admin-page/userscount')
  }

  // api to delete  a particualr animation 
  deleteanime(id: any) {
    return this.http.delete('http://localhost:3000/admin-page/delete/' + id)
  }

  // api call to update details
  updateanime(id: any, animation: any) {
    return this.http.put('http://localhost:3000/admin-page/update/' + id, animation)
  }

  // api call to download video

  // api call to add to watchlist
  watchlist(email: any, animationdetails: any) {
    const body = {
      _id:animationdetails._id,
      animeimage: animationdetails.animeimage,
      animename: animationdetails.animename,

    }
    return this.http.post('http://localhost:3000/wishlist/' + email, body)
  }

// api call to get te Watchlater
getwatchlaterlist(_id:any){
return this.http.get('http://localhost:3000/watchlater/'+_id)
}

// api call to add to history
addtohistory(_id:any,animationdetails:any){
  const body={
    animeid:animationdetails._id,
animename:animationdetails.animename,
animeimage:animationdetails.animeimage,
animetrailor:animationdetails.animetrailor
  }
  return this.http.post('http://localhost:3000/addtohistory/'+_id,body)
 
}

// api call to get te Watchlater

gethistorylist(_id:any){
  return this.http.get('http://localhost:3000/history/'+_id)
  }


  // api call to delete history

  deletehistory(_id:any){
    return this.http.delete('http://localhost:3000/deletehistory/'+_id)

  }
  // api call to delete watchlater

  deletewatchlater(_id:any){
    return this.http.delete('http://localhost:3000/watchlaterhistory/'+_id)

  }




  //  api to delete a particular animation from history
  deleteaparticularanimationhistory(_id:any,animeid:any){
    return this.http.delete(`http://localhost:3000/deleteonehistory/${_id}/${animeid}`);
  }
  

//  api to delete a particular animation from watchlater
deleteaparticularanimationwatchlater(_id:any,animeid:any){
  return this.http.delete(`http://localhost:3000/deleteonewatchlater/${_id}/${animeid}`);
} 
  // api call to update the details
  updateparticularanimations(_id:any,animationbg:any,animename:any,animeimage:any,animedescription:any,animegenre:any,animetimeduration:any,animetrailor:any,animescreenplaystoryby:any,animescreenplayby:any,animestoryby:any,animewriter:any){
    const body={
      animationbg,
      animename,
      animeimage,
      animedescription,
      animegenre,
      animetimeduration,
      animetrailor,
      animescreenplaystoryby,
      animescreenplayby,
      animestoryby,
      animewriter
    }
    return this.http.put(`http://localhost:3000/updateanimation/${_id}`,body);

  }


// deleteaparticularanimationhistory(_id: any, animename: any) {
//   return this.http.delete('http://localhost:3000/deleteonehistory/'+_id,{
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     }),
//     body: {
//       animename: animename
//     }
//   });
// }

}












  // to check whether the animation is already in wishlist
//   wishlistdetails(email:any){
// this.http.get('http://localhost:3000/wishlistcheck/'+ email)
//   }
// }
// return   this.http.get('http://localhost:3000/table-animationdetails/+id')
