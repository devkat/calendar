import {Aurelia} from "aurelia-framework";
import {SessionService} from "./services/session-service";
import {I18N} from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';

import "font-awesome/css/font-awesome.css!";

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin("aurelia-polymer")
    .plugin("aurelia-html-import-template-loader")
    .plugin('aurelia-i18n', (instance) => {
      // register backend plugin
      instance.i18next.use(Backend);

      // adapt options to your needs (see http://i18next.com/docs/options/)
      // make sure to return the promise of the setup method, in order to guarantee proper loading
      return instance.setup({
        backend: {                                  // <-- configure backend settings
          loadPath: '/locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
        },
        lng : 'en',
        attributes : ['t', 'i18n'],
        fallbackLng : 'en',
        debug : false,
      });
    });

  const sessionService: SessionService = aurelia.container.get(SessionService);

  aurelia.start().then(() => aurelia.setRoot("app/components/layout/backend"));
}
