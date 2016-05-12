import {SessionService} from "./../../services/session-service";
import {autoinject} from "aurelia-dependency-injection";
import {Router} from "aurelia-router";
import {routes} from "../../config/routes";

@autoinject()
export class BackendCustomElement {
  public heading: string = "Welcome to Aurelia!";
  public firstName: string = "John";
  public lastName: string = "Doe";

  constructor(private sessionService: SessionService, router: Router) {
    router.configure(routes);
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public logout(): void {
    this.sessionService.logout();
  }
}
