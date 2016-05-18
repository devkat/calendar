import {SessionService} from "./../../services/session-service";
import {autoinject} from "aurelia-dependency-injection";
import {Router} from "aurelia-router";
import {routes} from "../../config/routes";

@autoinject()
export class BackendCustomElement {

  constructor(
      private sessionService: SessionService,
      private router: Router) {
    router.configure(routes);
  }

  public logout(): void {
    this.sessionService.logout();
  }

}
