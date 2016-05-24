import {RestClient} from "../rest-client";
import {Headers} from "./headers";

export abstract class RestApi {

  constructor(private restClient: RestClient) {}

  protected headers(): Headers {
    return Headers.create();
  }

  protected get<T>(endpoint: string): Promise<T> {
    return this.restClient.unauthorized().fetch(endpoint, {
      method: "GET",
      headers: this.headers().toObject(),
    }).then(response => { return response.json(); });
  }

  public post<T>(endpoint: string, obj: T): Promise<void> {
    return this.restClient.unauthorized().fetch(endpoint, {
      method: "POST",
      headers: this.headers().set("Content-Type", "application/json").toObject(),
      body: JSON.stringify(obj),
    }).then(response => {});
  }

  public put<T>(endpoint: string, obj: T): Promise<void> {
    return this.restClient.unauthorized().fetch(endpoint, {
      method: "PUT",
      headers: this.headers().set("Content-Type", "application/json").toObject(),
      body: JSON.stringify(obj),
    }).then(response => { });
  }

}
