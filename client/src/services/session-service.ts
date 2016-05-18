import {autoinject} from "aurelia-dependency-injection";
import {Aurelia} from "aurelia-framework";
import {AuthApi} from "../rest/calendar/api/auth/auth-api";
import {Session} from "../rest/calendar/api/auth/session";
import {Configuration} from "../config/configuration";

@autoinject
export class SessionService {

  private session: Session = undefined;

  constructor(
    private app: Aurelia,
    private authApi: AuthApi,
    private config: Configuration) {
  }

  public login(username: string, password: string): void {
    this.authApi.login(username, password)
      .then(response => {
        this.session = response;
      });
  }

  public logout(): void {
    this.authApi.logout().then(response => {
      this.session = undefined;
    });
  }

  public isAuthenticated(): boolean {
    return this.session !== undefined;
  }

}
