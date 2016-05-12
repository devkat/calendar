import {RouterConfiguration} from "aurelia-router";

export function routes(config: RouterConfiguration): RouterConfiguration {
  config.title = "Backend Test";
  // config.options.pushState = true;
  config.map([
    {route: "", redirect: "dashboard"},
    // dashboard
    {
      route: "/dashboard",
      name: "dashboard",
      moduleId: "app/pages/dashboard/dashboard",
      nav: true,
      settings: { name: "Dashboard", icon: "home" },
    },
    // calendars
    {
      route: "/calendars",
      name: "calendars",
      moduleId: "app/pages/calendars/calendars",
      nav: true,
      settings: { name: "Calendars", icon: "calendar" },
    }
  ]);

  return config;
}
