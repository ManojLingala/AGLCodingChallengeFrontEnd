import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatlistComponent } from './catlist.component';
import { PetService } from '../pet.service';
import { of } from 'rxjs/internal/observable/of';

describe('CatlistComponent', () => {
  let component: CatlistComponent;
  let fixture: ComponentFixture<CatlistComponent>;
  let petservice;
  let ownersWithCats;

  beforeEach(async(() => {
    ownersWithCats=[
      {
        ownerGender: "Male",
        catNames: ["Garfield", "Jim", "Max", "Tom"]
        
      },
      {
        ownerGender: "Female",
        catNames: ["Garfield", "Simba", "Tabby"]
        
      },
    ]
    petservice=jasmine.createSpyObj(['getCats']);
    component = new CatlistComponent(petservice);

  }));

  fdescribe('catalistcomponent',()=>{
  
    it('should create', () => {
    expect(component).toBeTruthy();
    });

    it('should set cats correctly from the service',()=>{
      component.cats=ownersWithCats;
      expect(component.cats.length).toBe(2);
    });

     it('should return the male gender', () => {
      petservice.getCats.and.returnValue(of(true));
      component.cats=ownersWithCats;
      expect(component.cats[0].ownerGender).toEqual('Male');
      });

      it('should return the female gender', () => {
        component.cats=ownersWithCats;
        expect(component.cats[1].ownerGender).toEqual('Female');
        });
    
      it('should return the correct no of cats for the male gender', () => {
        component.cats=ownersWithCats;
        expect(component.cats[0].catNames.length).toBe(4);
        expect(component.cats[0].catNames[0]).toEqual('Garfield');
        expect(component.cats[0].catNames[1]).toEqual('Jim');
        expect(component.cats[0].catNames[2]).toEqual('Max');
        expect(component.cats[0].catNames[3]).toEqual('Tom');
        });

        it('should return the correct no of cats for the female gender', () => {
          component.cats=ownersWithCats;
          expect(component.cats[1].catNames.length).toBe(3);
          expect(component.cats[1].catNames[0]).toEqual('Garfield');
          expect(component.cats[1].catNames[1]).toEqual('Simba');
          expect(component.cats[1].catNames[2]).toEqual('Tabby');
          });

  });

});
