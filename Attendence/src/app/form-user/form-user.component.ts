import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from 'src/app/models/User';
import isIsraeliIdValid from 'israeli-id-validator';
import { KinderGarden } from '../models/KinderGarden';
import { KinderGardensService } from '../services/Kindergarden.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  //@ViewChild('f') userForm:NgForm;
 

KinderGardenArray:number[]=[]; 
kin:KinderGarden;
user:User=new User();
ListKinderGarden:KinderGarden[];
KinderGardenofTeacher:number;
select:string="";
kinderGardenListOfTeacher:KinderGarden[];
constructor(private userService:UserService,private kinderGardenService:KinderGardensService, private router:Router) {
 }
  
selectedKinderGarden(obj){
  alert(this.kin); 
  
 //   console.log(obj);
   // this.KinderGardenArray.push(obj[0]);
  //  alert(this.KinderGardenArray.length);
  this.kinderGardenListOfTeacher.push(this.kin);
 }
  ngOnInit() {
    this.getKinderGardenList();
  }
  getKinderGardenList()  
{
  this.kinderGardenService.GetAllKinderGarden().subscribe(
      data=>{this.ListKinderGarden=data;});
}
//addUser(UserForm)
//{
//  if(isIsraeliIdValid(UserForm.value.Id)==true)
//  {
//    alert(UserForm.value.Id);
//    this.userService.addUser(UserForm);
//    UserForm.reset();
//  }
//  else alert("תעודת זהות אינה תקינה, נסה שוב")  
//}
addUser(UserForm)
{
  //alert(this.KinderGardenArray.length+"כמות הגנים");
  if(isIsraeliIdValid(this.user.Id)==true)
  {
    this.user.Active=1;
    this.user.Permission=this.userService.user.Permission;
    if(this.user.Permission==2)
    {
      alert("גננת הוספת ");
    //  this.KinderGardenArray.forEach(element => {
   //  this.kinderGardenService.GetKinderGarden(element).subscribe(data=>{
     //  this.kinderGardenListOfTeacher.push(data) });    
         
    // });
     this.userService.addTeacher(this.kinderGardenListOfTeacher,this.user);  
    }
    else
    {
      this.userService.addUser(this.user);
    }
   

    UserForm.reset();
  }
  else alert("תעודת זהות אינה תקינה, נסה שוב")  
}
Exit()
{
  this.router.navigate(['']);
}

}
