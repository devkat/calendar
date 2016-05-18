import {RestClient} from "../rest-client";
import Immutable from "immutable";

export abstract class RestApi {

  constructor(private restClient: RestClient) {}

  protected headers(): Immutable.Map<string, string> {
    return Immutable.Map<string, string>();
  }

  protected get<T>(endpoint: string): Promise<T> {
    return this.restClient.unauthorized().fetch(endpoint, {
      method: "GET",
    }).then(response => { return response.json(); });
  }

  public post<T>(endpoint: string, obj: T): Promise<void> {
    return this.restClient.unauthorized().fetch(endpoint, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    }).then(response => { });
  }

  public put<T>(endpoint: string, obj: T): Promise<void> {
    return this.restClient.unauthorized().fetch(endpoint, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    }).then(response => { });
  }

}