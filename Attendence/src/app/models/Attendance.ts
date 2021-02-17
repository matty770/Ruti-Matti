import { Statuses } from 'src/app/models/LiveData';

export class Attendance
{
  Id : string;
  FirstName : string;
  LastName:string;
  pictureBase64: string;
  Status:Statuses;
    constructor() { 
    }
}