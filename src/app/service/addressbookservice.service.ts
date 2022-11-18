import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  constructor(private http:HttpClient) { }

  getAddressBookData(){
    return this.http.get("http://localhost:8087/getall");
  }
  
  addAddressBookData(address:any){
    return this.http.post("http://localhost:8087/create", address);
  }

  deleteAddressBookdata(id: number){
    return this.http.delete("http://localhost:8087/delete/"+id);
  }

  updateAddressData(address:any, id:number){
    return this.http.put("http://localhost:8087/update/"+id, address)

  }

  getAddressById(id:number){
    return this.http.get("http://localhost:8087/get/"+id)
  }
  
}
