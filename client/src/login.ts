import {SessionService} from "./services/session-service";
import {autoinject} from "aurelia-dependency-injection";

@autoinject()
export class Welcome {
  public heading: string = "Logged out";
  public firstName: string = "John";
  public lastName: string = "Doe";

  constructor(private sessionService: SessionService) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public login(): void {
    this.sessionService.login(this.firstName, this.lastName);
    // alert(`Welcome, ${this.fullName}!`);
  }
}
