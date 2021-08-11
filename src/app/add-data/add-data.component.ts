import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  signupform!: FormGroup;


  roles=['Admin','SuperAdmin','Subscriber'];

  keys=['Admin','SuperAdmin','Subscriber'];
  constructor(private mainService:MainService,private router:Router) { }

  ngOnInit(): void {
    this.signupform=new FormGroup(
      {
        'uid':new FormControl(null),
        'fname':new FormControl(null,[Validators.required]),
        'mname':new FormControl(null,[Validators.required]),
        'lname':new FormControl(null,[Validators.required]),
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'phonenumber':new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        'address':new FormControl(null,[Validators.required]),
        'cname':new FormControl(null,[Validators.required]),
        'website':new FormControl(null,[Validators.required]),
        'caddress':new FormControl(null,[Validators.required]),
        'rname':new FormControl(null,[Validators.required]),
        'key':new FormControl('Admin',[Validators.required]),
        'description':new FormControl(null,[Validators.required])
      }
    );
  }


  cancel(){
    this.router.navigate(['/crudtable']);
  }

  onSubmit(user:any){
    
    this.mainService.addUser(user).subscribe((res:any)=>{
     alert("Data added successfully !!");
     this.router.navigate(['/crudtable']);
    },
    (err:any)=>{
      alert("Something went wrong. This data can't be added !!");
    });
  }
}
