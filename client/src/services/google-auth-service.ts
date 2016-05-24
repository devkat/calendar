import {autoinject} from "aurelia-dependency-injection";
import {Maybe, MaybeType} from "tsmonad";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
export class GoogleAuthService {

  private _accessToken: Maybe<string> = Maybe.nothing();

  constructor(private eventAggregator: EventAggregator) {
  }

  public setAccessToken(accessToken: string): void {
    this._accessToken = Maybe.just(accessToken);
    this.eventAggregator.publish('google-signin', accessToken);
  }

  public getAccessToken(): Maybe<string> {
    return this._accessToken;
  }

  public isSignedIn(): boolean {
    return this._accessToken.map((token: string) => true).valueOr(false);
  }

}
