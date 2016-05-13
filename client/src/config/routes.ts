import {RouterConfiguration} from "aurelia-router";

export function routes(config: RouterConfiguration): RouterConfiguration {
  config.title = "Calendar";
  // config.options.pushState = true;
  config.map([
    {route: "", redirect: "dashboard"},
    // Dashboard
    {
      route: "/dashboard",
      name: "dashboard",
      moduleId: "app/pages/dashboard/dashboard",
      nav: true,
      settings: { name: "Dashboard", icon: "home" },
    },
    // Settings
    // Calendars
    {
      route: "/settings/calendars",
      name: "calendars",
      moduleId: "app/pages/settings/calendars",
      nav: true,
      settings: { name: "Calendars", icon: "date-range" },
    },
  ]);

  return config;
}
