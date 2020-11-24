import { Time } from '@angular/common';

export class KinderGarden
{
    idKinderGarden:number;
    name:string;
    address:string;
    phone:string;
    year:number;
    BeginingHour:Time;
    Space:Time;

    constructor(idKinderGarden:number, name:string, address:string,phone:string, year:number, BeginingHour:Time, Space:Time) {
      this.idKinderGarden=idKinderGarden;
      this.name=name;
      this.address=address;
      this.phone=phone;
      this.year=year;
      this.BeginingHour=BeginingHour;
      this.Space=Space;
    }
}

