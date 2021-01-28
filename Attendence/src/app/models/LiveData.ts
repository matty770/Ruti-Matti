import { Time } from '@angular/common';

export enum Statuses
{
    Late = 1, Absent, Present, NonPresent, Sent,Confirm
}
export class LiveData
{
    
    IdChild: string;
    KinderGardenCode: number;
    date:Date;
    status: Statuses; 
    updateDate: Date;
    updateBy:string;
    alarm:Time;
    comments:string;
  
    constructor(IdChild: string, KinderGardenCode: number, date:Date, status: Statuses, updateDate: Date, updateBy:string, alarm:Time, comments:string) 
        {
            this.IdChild = IdChild;
            this.KinderGardenCode = KinderGardenCode;
            this.date = date;
            this.status = status;
            this.updateDate = updateDate;
            this.updateBy = updateBy;
            this.alarm = alarm;
            this.comments=comments;
    }
}