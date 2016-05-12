import {autoinject} from "aurelia-dependency-injection";
import {json} from "aurelia-fetch-client";
import {Configuration} from "../../../../config/configuration";
import {LoginRequest} from "./login-request";
import {Session} from "./session";
import {RestClient} from "../../rest-client";

@autoinject()
export class AuthApi {

  private loginEndpoint: string;
  private logoutEndpoint: string;

  constructor(
    private rest: RestClient,
    private config: Configuration) {

    this.loginEndpoint = config.get("rest.endpoints.auth.login").asString();
    this.logoutEndpoint = config.get("rest.endpoints.auth.login").asString();
  }

  public login(username: string, password: string): Promise<Session> {

    const request: LoginRequest = {
      username,
      password,
    };

    return this.rest.unauthorized()
      .fetch(this.loginEndpoint, {
        method: "POST",
        body: json(request),
      })
      .then(response => {
        return response.json();
      });
  }

  public logout(): Promise<boolean> {
    return this.rest.unauthorized()
      .fetch(this.logoutEndpoint, {
        method: "POST",
      })
      .then(response => response.ok);
  }
}
