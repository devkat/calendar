System.register(["aurelia-dependency-injection", "../../services/google-auth-service", "../../services/google-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_dependency_injection_1, google_auth_service_1, google_service_1;
    var GoogleSigninWidgetCustomElement;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (google_auth_service_1_1) {
                google_auth_service_1 = google_auth_service_1_1;
            },
            function (google_service_1_1) {
                google_service_1 = google_service_1_1;
            }],
        execute: function() {
            let GoogleSigninWidgetCustomElement = class GoogleSigninWidgetCustomElement {
                constructor(googleService, googleAuthService) {
                    this.googleService = googleService;
                    this.googleAuthService = googleAuthService;
                    this.config = undefined;
                    this.googleService.getConfig().then(config => {
                        this.config = config;
                    });
                }
                signinSuccess(event) {
                    const user = gapi.auth2.getAuthInstance().currentUser.get();
                    const authResponse = user.getAuthResponse();
                    this.googleAuthService.setAccessToken(authResponse.access_token);
                }
            };
            GoogleSigninWidgetCustomElement = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [google_service_1.GoogleService, google_auth_service_1.GoogleAuthService])
            ], GoogleSigninWidgetCustomElement);
            exports_1("GoogleSigninWidgetCustomElement", GoogleSigninWidgetCustomElement);
        }
    }
});
//# sourceMappingURL=google-signin-widget.js.map