import {Configuration} from "../../config/configuration";
import {HttpClient, RequestInit} from "aurelia-fetch-client";
import {autoinject} from "aurelia-dependency-injection";

@autoinject()
export class RestClient {
  constructor(
    private http: HttpClient,
    private config: Configuration) {

    http.configure(client => {
      client
        .useStandardConfiguration()
        .withBaseUrl(config.get("rest.baseUrl").asString());
    });
  }

  /**
   *
   * @returns {function((Request|string), RequestInit=): Promise<Response>}
   */
  public unauthorized(): RestClientExecutor {
    return {
      fetch: (input: Request | string, init?: RequestInit): Promise<Response> => {
        return this.http.fetch(input, init);
      },
    };
  }

  public authorized(token: string): RestClientExecutor {
    const defaults: RequestInit = {
      headers: {
        "Authorization": `token ${token}`,
      },
    };

    return {
      fetch: (input: Request | string, init?: RequestInit): Promise<Response> => {
        return this.http.fetch(input, Object.assign({}, defaults, init));
      },
    };
  }
}

export interface RestClientExecutor {
  fetch: (input: Request | string, init?: RequestInit) => Promise<Response>;
}
