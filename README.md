# Planning Poker

Web tool for collaborative guessing of scrum story complexity. Roles:

- Moderator

  - Creates the session
  - Can reset votes when discussing the next story
  - Can reveal the current votes

- Guesser

  - Votes or abstains from voting the current story

- Observer
  - Can do nothing but watch the process

All roles will see the result of voting and the votes of every guesser after they were revealed by the moderator.

## Development

### Goal

Test frameworks like WebSockets, Socket.IO and Bootstrap with Angular. Have fun with creating different themes.

### Setup

Make sure NodeJS 18 and npm 8+ is installed. Run the command

> npm i

in project root and folders scrum-poker and scrum-poker-server.

### Code Formatting

Use prettier and format on save.

### Starting the application

1. Start the backend in folder scrum-poker-server: `npm run dev`
2. Start the frontend in folder scrum-poker: `npm run start`
3. Open http://localhost:4200 in browser.

### Testing

After starting the application, you can run Playwright end-to-end tests with `npm run e2e`. To develop new tests,
call `npm run e2e:dev` instead which will open the Playwright UI.

## Deployment

In the project root, run the _build.sh_ which builds and assembles the whole application to _dist_ folder.
Once built, you can adapt _run.sh_ environment variables as you need it and run the file.
