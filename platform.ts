import {storageDevice} from "./storageDevice";
export class Platform{
    private name: string
    private releaseYear: number
    private company: string
    private nBits: number
    private generation: number
    private hasHD: boolean
    private hdSize: number
    private hasInternetConex: boolean
    private storageDevice: storageDevice
    private color: string
    constructor(name: string, releaseYear: number, company: string, 
        nBits: number, generation: number, hasHD: boolean, hdSize: number,
        hasInternetConex: boolean, storageDevice: storageDevice, color: string){
            this.name = name
            this.releaseYear = releaseYear
            this.company = company
            this.nBits = nBits
            this.generation = generation
            this.hasHD = hasHD
            this.hdSize = hdSize
            this.hasInternetConex = hasInternetConex
            this.storageDevice = storageDevice
            this.color = color
    }
    //getters
    public getName(){return this.name}
    public getRealese(){return this.releaseYear}
    public getCompany(){return this.company}
    public getBits(){return this.nBits}
    public getGen(){return this.generation}
    public getHD(){return this.hasHD}
    public getHdSize(){return this.hdSize}
    public getConex(){return this.hasInternetConex}
    public getStoage(){return this.storageDevice}
    public getColor(){return this.company}
    //setters
    public setName(name: string){this.name = name}
    public setRealese(releaseYear: number){this.releaseYear = releaseYear}
    public setCompany(company: string){this.company = company}
    public setBits(nBits: number){this.nBits = nBits}
    public setGen(generation: number){this.generation = generation}
    public setHD(hasHD: boolean){this.hasHD = hasHD}
    public setHdSize(hdSize: number){this.hdSize = hdSize}
    public setConex(hasInternetConex: boolean){this.hasInternetConex = hasInternetConex}
    public setStoage(storageDevice: storageDevice){this.storageDevice = storageDevice}
    public setColor(color: string){this.color = color}
    //Metodos
    public alreadyIN(consola: Platform):boolean{
        let isIN: boolean = false;
        if(consola.name === this.name && consola.releaseYear === this.releaseYear &&
            consola.company === this.company && consola.nBits === this.nBits &&
            consola.generation === this.generation && consola.hasHD === this.hasHD &&
            consola.hdSize === this.hdSize && consola.hasInternetConex === this.hasInternetConex &&
            consola.storageDevice === this.storageDevice && consola.color === this.color){
                isIN = true;
        }
        return isIN;
    }
    public printPlatform(){
        console.log(`
        Name: ${this.name}
        Realese: ${this.releaseYear}
        Company: ${this.company}
        nBits: ${this.nBits}
        Generation: ${this.generation}
        Has HD: ${this.hasHD}
        hd Size: ${this.hdSize}
        Internet: ${this.hasInternetConex}
        Storage Device: ${this.storageDevice}
        Color: ${this.color}`);
    }
    public toStringPlatform(){
        console.log('' + this.name + '\n' + this.releaseYear + '\n' + this.company + '\n' + this.nBits +
                    this.generation + '\n' + this.hasHD + '\n' + this.hdSize + '\n' + this.hasInternetConex +
                    this.storageDevice + '\n' + this.color);
    }
}