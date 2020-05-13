import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {ownercatlist} from "./model/ownercatlist";
import { Observable } from 'rxjs';
import {apiURL} from "./utils/constant";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor( private http:HttpClient) { }
  public ownersWithCats:ownercatlist[] =[] 
  getCats():Observable<boolean>
  {
    return this.http.get(apiURL)
    .pipe(
      map((data:any[])=>{this.ownersWithCats=data;
      return true;}));
    
  }

}
