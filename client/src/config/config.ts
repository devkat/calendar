export const config: any = {
  "name": "Test application",
  "rest": {
    "baseUrl": "/api/",
    "endpoints": {
      "auth": {
        "login": "auth/login",
        "logout": "auth/logout",
      },
      "calendarTypes": "calendarTypes",
      "calendars": {
        "calendars": "calendars",
        "calendar": "calendars/:id",
        "events": "calendars/:id/events",
      },
      "google": {
        "config": "google/config",
        "calendars": "google/calendars",
      },
    },
  },
};
