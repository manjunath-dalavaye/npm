# Welcome to ilihub contributing guide

Thank you for investing your time in contributing to our project!

Read our [Code of Conduct][code_of_conduct] to keep our community approachable and respectable.

<!-- Referenced links start -->

[code_of_conduct]: ./CODE_OF_CONDUCT.md "Code of Conduct"

<!-- Referenced links end -->

## What can I contribute?

You can contribute to this project in many ways:

- Report a bug.
- Suggest a feature.
- Fix a bug.
- Implement a feature.
- Improve the documentation.
- Improve the code quality.
- Improve the test coverage.
- Improve the performance.
- Add Functionalities to existing packages.

Please feel free to open an issue to talk about your ideas before implementing them.

## New contributor guide

To get an overview of the project, read the [README][readme]. Here are some resources to help you get started with open-source contributions:

- [Finding ways to contribute to open source on GitHub][finding_ways_to_contribute_to_open_source_on_github]
- [Set up Git][set_up_git]
- [GitHub flow][github_flow]
- [Collaborating with pull requests][collaborating_with_pull_requests]

<!-- Referenced links start -->

[readme]: ./README.md "README"
[finding_ways_to_contribute_to_open_source_on_github]: https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github "Finding ways to contribute to open source on GitHub"
[set_up_git]: https://docs.github.com/en/get-started/quickstart/set-up-git "Set up Git"
[github_flow]: https://docs.github.com/en/get-started/quickstart/github-flow "GitHub flow"
[collaborating_with_pull_requests]: https://docs.github.com/en/get-started/quickstart/collaborating-with-issues-and-pull-requests "Collaborating with pull requests"

<!-- Referenced links end -->

## Getting started

Follow the steps below to contribute to this repository.

1. [Fork](https://github.com/ilihub/npm/fork) this repository.

   Use the fork button on the top right corner of this page.

2. Clone the forked repository.

   ```bash
   git clone https://github.com/YOUR_USERNAME/npm.git
   ```

   Replace `YOUR_USERNAME` with your GitHub username.

3. Install dependencies.

   ```bash
   pnpm install
   ```

   > **Note** If you don't have `pnpm` installed, you can follow the instructions from [`pnpm.io/installation`](https://pnpm.io/installation).

4. Build the packages.

   ```bash
   pnpm build --filter @ilihub/PACKAGE_NAME
   ```

   Replace `PACKAGE_NAME` with the name of the package you want to build (`code`, `case`, `dsa`, `number-system`)

5. Run tests.

   ```bash
   pnpm test --filter @ilihub/PACKAGE_NAME
   ```

   Replace `PACKAGE_NAME` with the package name you want to test.

6. Final Check before committing.

   ```bash
   pnpm all
   ```

   This command will ensure that all the packages are built, tested, linted, and formatted properly.

7. Create a pull request.

   ```bash
   git add .
   git commit -m "Commit message"
   git push
   ```

   Then create a pull request from your forked repository.

8. Wait for the pull request to be reviewed and merged.

   Once the pull request is merged, you can celebrate your contribution to the open-source community 🎉.

---
