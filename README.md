# TfL Status Checker

Uses the TfL Unified API to display service statuses for the various TfL services.

## Features
- First class accessibility support - app is keyboard navigable and screen reader friendly
- 'Pull to refresh' to reload data
- 'Did you mean' for misspelled service names

## Technology Used

### Backend
- Express

### Frontend
- React
- React Router DOM
- RTK Query
- SCSS

## To Run Locally
1. Sign up for access to TfL's API at https://api.tfl.gov.uk, register for the Unified API, and grab your `app_id` and `app_key` values.
2. Rename `.env-example` to `.env` and add your `app_id` and `app_key` values to `PRIVATE_TFL_APP_ID` and `PRIVATE_TFL_APP_KEY` respectively.
3. Run `yarn` to install all dependencies.
4. In one terminal run `yarn server:dev`.
5. In another terminal run `yarn client:dev`.

## Roadmap
- Pin services to top
- PWA functionality

## License
This project is licensed under [MIT](https://opensource.org/license/mit/).
