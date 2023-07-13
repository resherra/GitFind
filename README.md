# GitFind

GitFind is a web application that allows users to search for a GitHub user, view their repositories, and explore detailed information such as commits, issues, and pull requests for each repository.

## Features

GitFind offers the following features:

**Search**: Users can search for a GitHub user by entering their username in the search bar.
**User Profile**: The application displays basic information about the searched user, including their avatar, bio.
**Repositories List**: Users can browse through the repositories of the searched user, viewing details such as the repository name, language, and the number of stars and forks.
**Repositories Pagination**: If the searched user has a large number of repositories, pagination is implemented to load repositories in smaller, manageable chunks.
**Infinite Scroll**: The repository details supports infinite scrolling, allowing users to effortlessly load more repositories as they clicking "Load more" button.
**Repository Details**: Clicking on a repository in the list navigates the user to a detailed view, showcasing additional information such as the commits, open issues, and pull requests for that repository.
**Error Handling**: The application handles various error scenarios, displaying appropriate messages when API requests fail or when the searched user or repository cannot be found.

## Installation

To run GitFind locally on your machine, follow these steps:

1. Clone the repository:

```
git clone https://github.com/lazych/GitFind.git
```

2. Navigate to the project directory:

```
cd GitFind
```

3. Install the dependencies:

```
pnpm install
```

4. Obtain a GitHub Personal Access Token:

   - Visit [GitHub's Personal Access Tokens](https://github.com/settings/tokens) page.
   - Generate a new token with the `repo` scope selected.
   - Copy the generated token to use in the next step.

5. Create a `.env` file in the project root directory and add the following line:

```
VITE_AUTH=YOUR_PERSONAL_ACCESS_TOKEN
```

- Replace `YOUR_PERSONAL_ACCESS_TOKEN` with the token you obtained in the previous step.

6. Start the development server:

```
pnpm dev
```

7. Open your browser and visit `http://localhost:5173` to access the GitFind application.

## Built with

- Vite
- React
- React Query
- Tailwindcss
- Find more at [package.json](https://github.com/lazych/GitFind/blob/master/package.json)
