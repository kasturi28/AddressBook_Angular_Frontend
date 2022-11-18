import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookModel } from 'src/app/model/addressbook.model';
import { AddressbookService } from 'src/app/service/addressbookservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  crosslogo="../../../assets/close.jpeg.jpg"

  addressbook1: AddressbookModel= new AddressbookModel(0,"","","","","","","","");
  id:any = this.route.snapshot.paramMap.get("id");

  constructor(
    private router:Router,
    private service:AddressbookService,
    private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.service.getAddressById(this.id).subscribe((data:any)=>{
      this.addressbook1=data;
    console.log(this.addressbook1);
    });
  }

  onSubmit(){
    console.log(this.addressbook1);
    this.service.addAddressBookData(this.addressbook1).subscribe((data:any)=>{
      alert("Form Submitted")
      this.router.navigate([""]);
    });
  }

  onUpdate(){
    console.log(this.id);
    this.service.updateAddressData(this.addressbook1,this.id).subscribe((data:any)=>{
    this.router.navigate([""]);
    console.log(this.addressbook1);
    });
  }
}
