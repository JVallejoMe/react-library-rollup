import { Monster, MonsterTable } from "../models";
import { MonsterHunterApi } from "../api/MonsterHunterApi";

export class MonsterCall {
  public static getAllMonsters = async (): Promise<MonsterTable> => {
    const data = await MonsterHunterApi.getAllMonsters();
    return new MonsterTable(data);
  };

  public static getMonster = async (id: string): Promise<Monster> => {
    const data = await MonsterHunterApi.getMonster(id);
    return new Monster(data);
  };
}
