import {Aurelia} from "aurelia-framework";
import {SessionService} from "./services/session-service";

import "font-awesome/css/font-awesome.css!";

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin('aurelia-polymer');
  aurelia.use.plugin('aurelia-html-import-template-loader');

  const sessionService: SessionService = aurelia.container.get(SessionService);

  aurelia.start().then(() => aurelia.setRoot(sessionService.appRoot()));
}
