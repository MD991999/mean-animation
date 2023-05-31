import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import jspdf from 'jspdf';
import 'jspdf-autotable'
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  table:any={}
  maintable:any=[]
  i=1
  
constructor(private api:ApiService,private router:Router){

}
ngOnInit(): void {
  this.display();
  if(!localStorage.getItem('adminemail')){
    alert('Please login')
  // this.adminrouter.parent
    this.router.navigateByUrl('')
  }

}
display(){
  this.api.displaydetails()
  .subscribe((result)=>{
    console.log(result);
    this.table=result
    this.maintable=this.table.message
    console.log(this.maintable);
    
  })
}
// function to download a pdf
generatepdf(){
  // to download the pdf ,we hve to create an object of jspdf
  var pdf=new jspdf()
  // set up title col
  let col=['Name','Email','Password','Date of birth','Genre','Gender']
  // set up row
  let row:any=[]
  // basic styling for pdf document
  // size of the heading
  pdf.setFontSize(20)
  // nme of the heading
  pdf.text('REGISTERED USER DETAILS',15,15)
  // set the fontsize for the remaining data
  pdf.setFontSize(12)
  pdf.setTextColor(99)
  // we have to convert maintable to nested array
  // if you want to download a pdf using jspdf,you have to convert the array of objects into nested array

var allanimation=this.maintable
// here allanimations is an array of objects
// now what we do is we have to convert 'allanimations' into nested array.To do that ,first we take each elements from the 'allanimations' .Here each element in the 'allanimations' are of type object.
for(let elements of allanimation){
  // elements are object,allanimations is array of objects
  var temp=[elements.uname,elements.email,elements.pswd,elements.dob,elements.option,elements.gender]
row.push(temp)
}
// convert the nested array to pdf
(pdf as any).autoTable(col,row,{startY:25})
// col means title row,row means body,third argumnet specify the position
// while downloading if you want to open pdf in another tab
pdf.output('dataurlnewwindow')
// download table as pdf 
pdf.save('Registered User Details.pdf')
}
}
