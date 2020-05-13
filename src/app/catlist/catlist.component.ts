import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import{ PetService} from '../pet.service';
import {ownercatlist} from '../model/ownercatlist';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.scss']
})
export class CatlistComponent implements OnInit {
  
  constructor( private data:PetService) { }
 
  public cats: ownercatlist[]= [];

  ngOnInit() {
    this.data.getCats().subscribe(success=>{
      if(success){
      
        this.cats=this.data.ownersWithCats;
        console.log(this.cats);

      }      }
    )
  }

}
