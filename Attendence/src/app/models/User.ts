export class User
{
    Id : string;
    Name : string;
    Address : string;
    PhoneNum : string;
    KinderGardenCode: number;
    Permission : number;
    MailAddress : string;
  
    constructor(   Id : string, Name : string,Address : string, PhoneNum : string, KinderGardenCode: number
        , Permission : number,MailAddress : string) 
        {
            this.Id = Id;
            this.Name = Name;
            this.Address = Address;
            this.PhoneNum = PhoneNum;
            this.KinderGardenCode = KinderGardenCode;
            this.Permission = Permission;
            this.MailAddress = MailAddress;
    }
}