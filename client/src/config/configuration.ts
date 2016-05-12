import {config} from "./config";

export class Configuration {

  public get(key: string): ConfigurationResult {
    const value: any = this.resolveRecursive(config, key.split(".").reverse());
    return new ConfigurationResult(value);
  }

  private resolveRecursive(config: JSON, keys: string[]): any {
    const current: any = config[keys.pop()];

    if (current === undefined) {
      throw Error("Config key is undefined");
    } else if (keys.length > 0) {
      return this.resolveRecursive(current, keys);
    } else {
      return current;
    }
  }
}

export class ConfigurationResult {
  constructor(private value: any) {}

  public asString(): string {
    return this.value.toString();
  }

  public asInt(): number {
    return parseInt(this.value, 10);
  }

  public asFloat(): number {
    return parseFloat(this.value);
  }

  public asBoolean(): boolean {
    return !!this.value;
  }
}
