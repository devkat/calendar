import {RouterConfiguration} from "aurelia-router";

export function routes(config: RouterConfiguration): RouterConfiguration {
  config.title = "Calendar";
  // config.options.pushState = true;
  config.map([
    {route: "", redirect: "calendar"},
    /*
    // Dashboard
     {
     route: "/dashboard",
     name: "dashboard",
     moduleId: "app/pages/dashboard/dashboard",
     nav: true,
     settings: { name: "Dashboard", icon: "home" },
     },
     */
    // Settings
    // Calendars
    {
      route: "/calendar",
      name: "Calendar",
      moduleId: "app/pages/calendar/calendar",
      nav: true,
      settings: { name: "Calendar", icon: "date-range" },
    },
    {
      route: "/settings/calendars",
      name: "settingsCalendars",
      moduleId: "app/pages/settings/calendars",
      nav: true,
      settings: { name: "My Calendars", icon: "settings" },
    },
    {
      route: "/settings/calendars/create/:type",
      name: "settingsCalendarCreate",
      moduleId: "app/pages/settings/create-calendar",
      nav: false,
    },
    {
      route: "/settings/calendars/:id",
      name: "settingsCalendarEdit",
      moduleId: "app/pages/settings/edit-calendar",
      nav: false,
    },
  ]);

  return config;
}
