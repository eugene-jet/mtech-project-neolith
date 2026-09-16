# Contributing to Neolith

Thanks for your interest in Neolith. The project is in an early setup phase and
does not have a technology stack yet, so these guidelines are intentionally
lightweight and will grow as the project takes shape.

## Getting started

1. Fork the repository and clone your fork.
2. Copy `.env.example` to `.env` and fill in any values you need locally.
3. Create a branch for your change:

   ```bash
   git checkout -b short-description-of-change
   ```

## Making changes

- Keep each pull request focused on a single change.
- Match the style and conventions of the surrounding code.
- Update the README or other docs when your change affects them.

## Commit messages

Write clear, imperative commit subjects (for example, "Add health check
endpoint"). Include a short body explaining the reasoning when the change is not
self-explanatory.

## Pull requests

- Push your branch and open a pull request against `main`.
- Describe what the change does and why.
- Make sure the CI workflow passes before requesting review.

## Reporting issues

Open a GitHub issue describing the problem or proposal. Include steps to
reproduce for bugs, and the motivation and expected outcome for feature
requests.

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](LICENSE).
