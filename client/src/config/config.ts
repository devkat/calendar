export const config: any = {
  "name": "Test application",
  "appRoot": {
    "guest": "app/components/layout/backend",
    "authenticated": "app/components/layout/backend",
  },
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
        "calendar": "calendars/:id"
      },
      "google": {
        "config": "google/config",
      },
    },
  },
};
