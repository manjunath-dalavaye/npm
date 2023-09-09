<div align="center">

<img src="https://github.com/ilihub.png" width="100" style="border-radius: 10%;" />

Source code of ilihub's npm packages.

[![Twitter][twitter_img]][twitter_url] [![Email][email_img]][email_url] [![Sponsor][sponsor_img]][sponsor_url]

[![Repo License][repo_license_img]][repo_license_url] [![Repo Size][repo_size_img]][repo_size_url] [![Repo Contributors][repo_contributors_img]][repo_contributors_url] [![CodeFactor][codefactor_img]][codefactor_url]

</div>

---

### Packages

This repository contains the source code of the following npm packages and their sub-packages.

| Package                                                                               | Description                                                                                   |
| :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------- |
| [![ilihub/code][ilihub_code_npm_img]][ilihub_code_npm_url]                            | A collection of useful TypeScript functions.                                                  |
| [![ilihub/case][ilihub_case_npm_img]][ilihub_case_npm_url]                            | A collection of useful TypeScript functions to convert strings between different cases.       |
| [![ilihub/dsa][ilihub_dsa_npm_img]][ilihub_dsa_npm_url]                               | A collection of useful TypeScript functions and utilities for data structures and algorithms. |
| [![ilihub/number-system][ilihub_number_system_npm_img]][ilihub_number_system_npm_url] | A collection of useful TypeScript functions to perform number system conversions.             |

---

### Setup

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

   Replace `PACKAGE_NAME` with the name of the package you want to test.

6. Final Check before commiting.

   ```bash
   pnpm all
   ```

   This command will ensure that all the packages are built, tested, linted and formatted properly.

7. Create a pull request.

   ```bash
   git add .
   git commit -m "Commit message"
   git push
   ```

   Then create a pull request from your forked repository.

8. Wait for the pull request to be reviewed and merged.

   Once the pull request is merged, you can celebrate your contribution to the open source community 🎉.

---

### How can I contribute?

You can contribute to this repository in the following ways.

- Report a bug.
- Suggest a feature.
- Fix a bug.
- Implement a feature.
- Improve the documentation.
- Improve the code quality.
- Improve the test coverage.
- Improve the performance.
- Add Functionalities to existing packages.

---

## New contributor guide

Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub][finding_ways_to_contribute_to_open_source_on_github]
- [Set up Git][set_up_git]
- [GitHub flow][github_flow]
- [Collaborating with pull requests][collaborating_with_pull_requests]

---

<!-- Reference Links -->

[twitter_url]: https://twitter.com/ilihubofficial
[twitter_img]: https://img.shields.io/badge/Twitter-ilihubofficial-blue?logo=twitter&logoColor=white
[email_url]: mailto:contact@ilihub.tech
[email_img]: https://img.shields.io/badge/Email-contact%40ilihub.tech-blue?logo=gmail&logoColor=white
[sponsor_url]: https://www.buymeacoffee.com/ilihub
[sponsor_img]: https://img.shields.io/badge/Sponsor-ilihub-blue?logo=buymeacoffee&logoColor=white
[repo_license_url]: https://github.com/ilihub/npm/blob/master/LICENSE.md
[repo_license_img]: https://img.shields.io/github/license/ilihub/npm
[repo_size_url]: https://github.com/ilihub/npm
[repo_size_img]: https://img.shields.io/github/repo-size/ilihub/npm
[repo_contributors_url]: https://github.com/ilihub/npm/graphs/contributors
[repo_contributors_img]: https://img.shields.io/github/contributors/ilihub/npm
[codefactor_url]: https://www.codefactor.io/repository/github/ilihub/npm
[codefactor_img]: https://www.codefactor.io/repository/github/ilihub/npm/badge
[ilihub_code_npm_img]: https://img.shields.io/badge/%40ilihub/-code-blue?logo=npm
[ilihub_code_npm_url]: https://www.npmjs.com/package/@ilihub/code
[ilihub_case_npm_img]: https://img.shields.io/badge/%40ilihub/-case-blue?logo=npm
[ilihub_case_npm_url]: https://www.npmjs.com/package/@ilihub/case
[ilihub_dsa_npm_img]: https://img.shields.io/badge/%40ilihub/-dsa-blue?logo=npm
[ilihub_dsa_npm_url]: https://www.npmjs.com/package/@ilihub/dsa
[ilihub_number_system_npm_img]: https://img.shields.io/badge/%40ilihub/-number%20system-blue?logo=npm
[ilihub_number_system_npm_url]: https://www.npmjs.com/package/@ilihub/number-system
[finding_ways_to_contribute_to_open_source_on_github]: https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github "Finding ways to contribute to open source on GitHub"
[set_up_git]: https://docs.github.com/en/get-started/quickstart/set-up-git "Set up Git"
[github_flow]: https://docs.github.com/en/get-started/quickstart/github-flow "GitHub flow"
[collaborating_with_pull_requests]: https://docs.github.com/en/get-started/quickstart/collaborating-with-issues-and-pull-requests "Collaborating with pull requests"

<!-- Reference Links End -->