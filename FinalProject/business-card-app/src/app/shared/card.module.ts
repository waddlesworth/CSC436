export class card{
    public name: string; 
    public title: string;
    public company:string;
    public phone : string; 
    public email: string; 
    public web: string; 
    public address : string; 
   
    constructor(name: string, title:string, company:string, phone:string, email:string, web:string, address:string){
        this.name = name;
        this.title = title;
        this.company = company;
        this.phone = phone;
        this.email = email;
        this.web = web;
        this.address = address;
    }
}