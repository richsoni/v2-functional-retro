# Functional Retro

Because retros should be more than fun.

# Stack

This project is based on the following technologies:
* [lerna]
* [create-react-app] with `--typescript` support
* [storybook] with Typescript support
* Typescript

# Structure

* Root Workspace
  - `web-main` -> create react app which is the main entry for the application
  - `components` -> all react components, storybook lives here

# Development

## Getting Started

1. Clone the repository
2. install lerna `npm install -g lerna`
3. `lerna bootstrap && lerna link`

### Developing Components

`yarn storybook`

### Application Development

`yarn start`
