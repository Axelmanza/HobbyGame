import {Videogame} from "./videogame";
import {Person} from "./person";

export class HobbyGame{
    private games: Videogame[]
    constructor(games: Videogame[]){
        this.games = games
    }
    public getGames(){
        return this.games
    }
    public setGames(games: Videogame[]){
        this.games = games
    }
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
    
}