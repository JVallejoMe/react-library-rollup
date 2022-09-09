interface MonsterWeakness {
  condition: string;
  element: string;
  stars: number;
}

interface MonsterResistance {
  condition: string;
  element: string;
}

interface MonsterLocation {
  id: number;
  zoneCount: number;
  name: string;
}

export class Monster {
  id: string = "";
  description: string = "";
  name: string = "";
  type: string = "";
  species: string = "";
  weaknesses: MonsterWeakness[] = [];
  resistances: MonsterResistance[] = [];
  locations: MonsterLocation[] = [];

  constructor(data: any) {
    this.id = data.id;
    this.description = data.description;
    this.name = data.name;
    this.type = data.type;
    this.species = data.species;
    this.weaknesses = data.weaknesses;
    this.resistances = data.resistances;
    this.locations = data.locations;
  }
}
