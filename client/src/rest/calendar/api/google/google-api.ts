import {autoinject} from "aurelia-dependency-injection";
import {Configuration} from "../../../../config/configuration";
import {RestClient} from "../../rest-client";
import {GoogleConfigModel} from "../../models/google-config-model";

@autoinject()
export class GoogleApi {

  private configEndpoint: string;

  constructor(
    private rest: RestClient,
    private config: Configuration) {

    this.configEndpoint = config.get("rest.endpoints.google.config").asString();
  }

  public getConfig(): Promise<GoogleConfigModel> {
    return this.rest.unauthorized().fetch(this.configEndpoint, {
        method: "GET",
      })
      .then(response => {
        return response.json();
      });
  }
}
