export class User {
  id?: number;
  name: string;

  constructor(id?: number, name?: string) {
    this.id = id? id : 0;
    this.name = name? name: "";
  }

  public setUser(id: number | undefined, name: string) {
    this.id = id;
    this.name = name;
  }
}
