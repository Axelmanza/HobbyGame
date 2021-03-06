import {Videogame} from "./videogame";
import {Person} from "./person";
import * as fs from "fs-extra";


export class HobbyGame{
    private games: Videogame[]
    constructor(games: Videogame[]){
        this.games = games
    }
    //Getter
    public getGames(){
        return this.games
    }
    //Setter
    public setGames(games: Videogame[]){
        this.games = games
    }

    //Metodos publicos
    public totalPrice(): number{
        let total: number = 0;
        for (let i = 0; i < this.games.length; i++){
            total += this.games[i].getPrice();
        }
        return total;
    }
    public totalPricePlatform(platform: string): number{
        let total: number = 0;
        for (let i = 0; i < this.games.length; i++){
            if (this.games[i].isInPlatform(platform)){
                total += this.games[i].getPrice();
            }  
        }
        return total;
    }
    public inLang(lang: string): string{
        let games: string = ''
        for (let i = 0; i < this.games.length; i++){
            if (this.games[i].inLanguage(lang)){
                games += this.games[i].getTitle() + ' ';
            }
        }
        return games;
    }
    public ofDeveloper(developer: Person){
        let games: string = ''
        for (let i = 0; i < this.games.length; i++){
            if (this.games[i].gameDeveloper(developer)){
                games += this.games[i].getTitle() + ' ';
            }
        }
        return games;
    }
    public inPlatAndLang(platform: string, lang: string): string{
        let games: string = '';
        for (let i = 0; i < this.games.length; i++){
            if (this.games[i].isInPlatform(platform) && this.games[i].inLanguage(lang)){
                games += this.games[i].getTitle() + ' ';
            }  
        }
        return games;
    }
    public byScore(): string{
        let games: string = '';
        for (let i = 0; i < this.games.length; i++){
            if (this.games[i].getScore() >= 5){
                games += this.games[i].getTitle() + ' ';
            }
        }
        return games
    }
    public toJSON(){
        let json = {'juegos': this.games}
        return json;
    }
    public escribirEnFicheroJson(nombre:string){
        fs.writeFileSync("./" + nombre + ".json", JSON.stringify(this.games))
    }
    public static obtenerInstancia(nombreFichero: string):HobbyGame{
        let str
        str = fs.readFileSync("./" + nombreFichero + ".json")
        return new HobbyGame(JSON.parse(str));
        // return new HobbyGame(fs.readJsonSync("./" + nombreFichero + ".json") )
    }
}