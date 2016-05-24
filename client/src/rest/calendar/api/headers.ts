import Immutable from "immutable";

export class Headers {

  private map: Immutable.Map<string, string>;

  public static create(): Headers {
    return new Headers(Immutable.Map<string, string>());
  }

  constructor(map: Immutable.Map<string, string>) {
    this.map = map;
  }

  public set(name: string, value: string): Headers {
    return new Headers(this.map.set(name, value));
  }

  public toObject(): Object {
    return this.map.toObject();
  }
}
