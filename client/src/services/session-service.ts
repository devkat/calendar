import {autoinject} from "aurelia-dependency-injection";
import {Aurelia} from "aurelia-framework";
import {AuthApi} from "../rest/calendar/api/auth/auth-api";
import {Session} from "../rest/calendar/api/auth/session";
import {Configuration} from "../config/configuration";

@autoinject
export class SessionService {

  private session: Session = undefined;

  private guestRoot: string;
  private authenticatedRoot: string;

  constructor(
    private app: Aurelia,
    private authApi: AuthApi,
    private config: Configuration) {

    this.guestRoot = config.get("appRoot.guest").asString();
    this.authenticatedRoot = config.get("appRoot.authenticated").asString();
  }

  public login(username: string, password: string): void {
    this.authApi.login(username, password)
      .then(response => {
        this.session = response;
        this.app.setRoot(this.authenticatedRoot);
      });
  }

  public logout(): void {
    this.authApi.logout().then(response => {
      this.session = undefined;
      this.app.setRoot(this.guestRoot);
    });
  }

  public isAuthenticated(): boolean {
    return this.session !== undefined;
  }

  public appRoot(): string {
    return this.isAuthenticated()
      ? this.authenticatedRoot
      : this.guestRoot;
  }
}
