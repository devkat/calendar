import {autoinject} from "aurelia-dependency-injection";
import {Router, NavModel} from "aurelia-router";
import R from "ramda";

@autoinject()
export class NavigationCustomElement {

  public navigation: { [k: string]: NavModel };

  constructor(private router: Router) {
    this.initializeNavigation(router.navigation);
    console.log(router);
  }

  private initializeNavigation(models: NavModel[]): void {
    const mapName: any = R.map((model: NavModel) => {
      return [model.config.route, model];
    });

    this.navigation = R.pipe(mapName, R.fromPairs)(models) as { [k: string]: NavModel };
  }
}
