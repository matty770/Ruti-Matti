import { Time } from '@angular/common';

export enum Statuses
{
    Late = 1, Absent, Present, NonPresent, Sent
}
export class FutureData
{
    
    idChild: string;
    kinderGardenCode: number;
    date:Date;
    status: Statuses; 
    updateDate: Date;
    updateBy:string;
    alarm:Time;
    comments:string;
  
    constructor(idChild: string, kinderGardenCode: number, date:Date, status: Statuses, updateDate: Date, updateBy:string, alarm:Time, comments:string) 
        {
            this.idChild = idChild;
            this.kinderGardenCode = kinderGardenCode;
            this.date = date;
            this.status = status;
            this.updateDate = updateDate;
            this.updateBy = updateBy;
            this.alarm = alarm;
            this.comments=comments;
    }
}