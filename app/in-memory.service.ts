import {InMemoryDbService} from "angular-in-memory-web-api";
import {Crisis} from "./crisis-center/crisis";

export class InMemoryService implements InMemoryDbService {
    createDb() {
      let heroes = [
        { id: 1, name: 'Windstorm' },
        { id: 2, name: 'Bombasto' },
        { id: 3, name: 'Magneta' },
        { id: 4, name: 'Tornado' }
      ];
      let crises = [
        new Crisis(1, 'Dragon Burning Cities'),
        new Crisis(2, 'Sky Rains Great White Sharks'),
        new Crisis(3, 'Giant Asteroid Heading For Earth'),
        new Crisis(4, 'Procrastinators Meeting Delayed Again'),
      ];
      return {heroes: heroes, crises: crises};
    }
}
