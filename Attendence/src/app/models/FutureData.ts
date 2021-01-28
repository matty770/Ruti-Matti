import { Time } from '@angular/common';
import { isDate } from 'util';

export enum Statuses
{
    Late = 1, Absent, Present, NonPresent, Sent,Confirm
}
export class FutureData
{
    IdChild: string;
    KinderGardenCode: number;
    Date:Date;
    Status: Statuses; 
    UpdateDate: Date;
    UpdateBy:string;
    Alarm:Time;
    Comments:string;
  
    constructor(//idChild: string, kinderGardenCode: number, date:Date, status: Statuses, updateDate: Date, updateBy:string, alarm:Time, comments:string
    ) 
        {
           //this.idChild = idChild;
           //this.kinderGardenCode = kinderGardenCode;
           //this.date = date;
           //this.status = status;
           //this.updateDate = updateDate;
           //this.updateBy = updateBy;
           //this.alarm = alarm;
           //this.comments=comments;
    }

}