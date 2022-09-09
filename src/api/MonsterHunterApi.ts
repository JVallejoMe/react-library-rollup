const API_URL = "https://mhw-db.com";

export class MonsterHunterApi {
  public static getAllMonsters = async (): Promise<any> => {
    let data: any[] = [];
    try {
      const res = await fetch(`${API_URL}/monsters`);
      data = await res.json();
    } catch (e) {
      console.log(e);
    }

    return data;
  };

  public static getMonster = async (id: string): Promise<any> => {
    let data: any = null;
    try {
      const res = await fetch(`${API_URL}/monsters/${id}`);
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    return data;
  };

  public static getAllWeapons = async (): Promise<any> => {
    let data: any[] = [];
    try {
      const res = await fetch(`${API_URL}/weapons`);
      data = await res.json();
    } catch (e) {
      console.log(e);
    }

    return data;
  };

  public static getWeapon = async (id: string): Promise<any> => {
    let data: any = null;
    try {
      const res = await fetch(`${API_URL}/weapons/${id}`);
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    return data;
  };
}
