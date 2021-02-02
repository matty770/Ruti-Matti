import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from 'src/app/models/User';
import isIsraeliIdValid from 'israeli-id-validator';
import { KinderGarden } from '../models/KinderGarden';
import { KinderGardensService } from '../services/Kindergarden.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  //@ViewChild('f') userForm:NgForm;
user:User=new User();
ListKinderGarden:KinderGarden[];
KinderGardenofTeacher:number;
  constructor(private userService:UserService,private kinderGardenService:KinderGardensService) { }

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
  if(isIsraeliIdValid(this.user.Id)==true)
  {
    this.user.Active=1;
    this.user.Permission=this.userService.user.Permission;
    if(this.user.Permission==2)
    {
      alert("t");
      this.userService.addTeacher(this.KinderGardenofTeacher,this.user);
    }
    else
    {
      alert("p");
      this.userService.addUser(this.user);
    }
   

    UserForm.reset();
  }
  else alert("תעודת זהות אינה תקינה, נסה שוב")  
}

}
