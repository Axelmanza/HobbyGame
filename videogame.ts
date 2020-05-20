import {Person} from "./person";
import {Platform} from "./platform";

export class Videogame{
    private title: string
    private year: number
    private developers: Person[]
    private nationality: string
    private director: Person
    private languages: string[]
    private platforms: Platform[]
    private price: number
    private score: number
    constructor(title: string, year: number, developers: Person[], nationality: string, director: Person,
        languages: string[], platforms: Platform[], price: number, score: number){
            this.title = title
            this.year = year
            this.developers = developers
            this.nationality = nationality
            this.director = director
            this.languages = languages
            this.platforms = platforms
            this.price = price
            this.score = score
    }

    //getters
    getTitle(){return this.title}
    getYear(){return this.year}
    getDevelopers(){return this.developers}
    getNationality(){return this.nationality}
    getDirector(){return this.director}
    getLanguages(){return this.languages}
    getPlatforms(){return this.platforms}
    getPrice(){return this.price}
    getScore(){return this.score}

    //setters
    setTitle(title: string){this.title = title}
    setYear(year: number){this.year = year}
    setDevelopers(developers: Person[]){this.developers = developers}
    setNationality(nationality: string){this.nationality = nationality}
    setDirector(director: Person){this.director = director}
    setLanguages(languages: string[]){this.languages = languages}
    setPlatforms(platforms: Platform[]){this.platforms = platforms}
    setPrice(price: number){this.price = price}
    setScore(score: number){this.score = score}
    //Metodos
    public isInPlatform(platform: string):boolean{
        // let isIN: boolean = false;
        // let i:number = 0;
        // while(!isIN && i < (this.platforms.length-1)){
        //     if (this.platforms[i].getName() === platform){
        //         isIN = true;
        //     }
        //     i++;
        // }
        // return isIN;
        return this.platforms.some(plat => plat.getName() === platform)
    }
    public gameDeveloper(developer: Person): boolean{
        return this.developers.some(dev=> dev.getPName() === developer.getPName());
    }
    public inLanguage(language: string): boolean{
        return this.languages.some(lang => lang === language);
    }
    public printVideojuego(){
        console.log(`
        Title: ${this.title}
        Year: ${this.year}
        Developers: ${this.printDevs()}
        Nationality: ${this.nationality}
        Languages: ${this.printLangs()}
        Platforms: ${this.printPlats()}
        Price: ${this.price}
        Score: ${this.score}`); 
    }
    public toStringVideogame(): string{
        return ('' + this.title + '\n' + this.year + '\n' + this.developers.forEach(developer => developer.getPName()) + '\n' +
                    this.nationality + '\n' + this.languages.forEach(language => language) + '\n' + 
                    this.platforms.forEach(platform => platform.getName()) + '\n' + this.price + '\n' + this.score);
    }

    //Mstodos Privados
    private printDevs(): string{
        let text: string = ''
        this.developers.forEach(dev => text += dev.nameToString() + ' ');
        return text;
    }
    private printLangs(): string{
        let text: string = ''
        this.languages.forEach(lan => text += lan + ' ');
        return text;
    }
    private printPlats(): string{
        let text: string = ''
        this.platforms.forEach(plat => text += plat.getName() + ' ');
        return text;
    }
}