export class Person{
    private name: string
    private nationality: string
    private profession: string
    private expYears: number
    constructor(name: string, nationality: string, profession: string, expYears: number){
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.expYears = expYears;
    }
    public getName(){
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
    public setProf(prof:string){
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
    public printPerson(){
        console.log(`
        Name: ${this.name}
        Nationality: ${this.nationality}
        Profession: ${this.profession}
        Experience Years: ${this.expYears}
        `);
    }
    public toStringPerson(){
        console.log('' + this.name + '\n' + this.nationality + '\n' + this.profession + '\n' + this.expYears);
    }

    
}