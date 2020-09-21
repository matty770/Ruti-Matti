export class Student {
    name: string;
    id: string;
    phoneNumber: string;
    groupNum:number;
    classLevel:string;
    constructor(name: string, id: string,phoneNumber: string,groupNum:number,
        classLevel:string) {
        this.name = name;
        this.id = id;
        this.phoneNumber=phoneNumber;
        this.groupNum=groupNum;
        this.classLevel=classLevel;
    }
   
}