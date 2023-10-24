# GitHub Repositories

This project is a technical test for the Frontend Developer position at the [MVST company](https://www.mvst.co/home). This is a web application that allows you to search and view the GitHub repositories of a particular user by name and language.

## Preview

![image](https://github.com/EricSalat/github-repositories/assets/70376693/987ebf4f-329b-43e3-8a57-b2426ada7298)

## Demo

You can try the application live at this link: (https://github-repositories-omega.vercel.app/).

## Features

- Display a list of repositories based on a username search.
- Filter results by repository name.
- Filter results by the primary programming language.
- Call the Github API and store data using a Context, which is consumed by components that use its data.
- Update the header's username and the amount of repositories that he/she owns.

## Developement

The project is built with React, bundled with Vite, the UI components that handle different states have been tested with Storybook, formatted with ESLint and deployed on Vercel from the same repository.
The code includes comments following the JSDocs standard to improve code readability and facilitate understanding. The interface is user-friendly and easy to use. The UI, colors, and style are based on the Figma brand image.

## Installation

To run the project in your local environment, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/EricSalat/github-repositories.git

2. Navigate to the project directory:

   ```bash
   cd github-repositories
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm run start
   ```

## Issues

JSDocs and TypeDocs don't have good compatibility with React because they don't document state variables (useState) by default, which the application relies on. To do so, you need to configure the better-docs plugin. You'll see that the better-docs dependencies are installed but they were breaking the application, so due to time constraints, I couldn't set it up or generate the documentation in HTML.

## Future improvements

There are many things that could be improved with time and resources.

- Add a section for the user's profile with their photo, description, links, etc., using data from the GitHub API. In this instance, due to time limitations, I chose to focus on making the repository search functionality work perfectly before rushing to integrate more components.
- Add a chart depicting the activity of each repository. API data can be integrated into a JavaScript charting library like [LightWeight Charts](https://www.tradingview.com/lightweight-charts/).
- Test all components in Storybook.
- Develop a function that removes special characters and capitalization in searches.
- Add a specific error message for when a non-existent username is entered in the search bar.
- Include more programming languages in the legend or develop a feature to show only those programming languages that the user's API contains.
- Export JSDocs documentation into an HTML format.
- Unit testing with Jest and React Testing Library.
