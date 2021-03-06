import { Profession } from "./profession";
export class Person{
    private name: string
    private nationality: string
    private profession: Profession
    private expYears: number
    constructor(name: string, nationality: string, profession: Profession, expYears: number){
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.expYears = expYears;
    }
    public getPName(){
        return this.name
    }
    public getNation(){
        return this.nationality
    }
    public getProf(){
        return this.profession
    }
    public getExp(){
        this.expYears
    }
    public setName(name: string){
        this.name = name
    }
    public setNation(nation: string){
        this.nationality = nation
    }
    public setProf(prof:Profession){
        this.profession = prof
    }
    public setExp(exp: number){
        this.expYears = exp
    }
    public inDataBase(person: Person){
        let isIn: boolean = false;
        if (person.name === this.name && person.nationality === this.nationality 
            && person.profession === this.profession && person.expYears === this.expYears){
            isIn = true;
        }
        console.log(isIn);
    }
    public printPerson(): string{
        return(`
        Name: ${this.name}
        Nationality: ${this.nationality}
        Profession: ${this.profession}
        Experience Years: ${this.expYears}
        `);
    }
    public toStringPerson(): string{
        return ('' + this.name + '\n' + this.nationality + '\n' + this.profession + '\n' + this.expYears);
    }
    public nameToString(): string{
        let text: string = `${this.name}`
        return text;
    }
    
}