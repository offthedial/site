# Off the Dial Site
> The central website for Off the Dial. 

![Stars][stars-shield]
# <!-- ![Banner](banner.png) -->

A website to serve as a centralized place to find everything Off the Dial. This websites is currently in beta, more features are to come. Stay tuned!
- Embedded signup page (soon).

## Usage
The live version of the website can be found at [`otd.ink`](https://otd.ink).

## Contributing
1. Fork the repository and clone it.
2. Create a new branch to submit your pull request from.

### Creating a new branch
All branch names should be in `kebab-case` (lowercase, words seperated by dashes).
- If you are creating a post, format your branch like this: `posts/<post-slug>`.
- If you are creating a feature, format your branch like this: `feature/<name-of-feature>`.

You should not touch the `master` or `gh-pages` branches.

### Running locally
1. Navigate into your new site’s directory and start it up.

   ```shell
   cd site/
   npm i
   gatsby develop
   ```
2. In order to test firebase features, create a new `.env.development` file in the root directory.
   - Copy the contents of `.env.production`
   - Download a new service account from your firebase project and replace each of the `GATSBY_FIREBASE_` environment variables.
      > This is because the version controlled service account is restricted to the `otd.ink` domain, which won't work on `localhost`
   - Start your local firebase emulator with `firebase serve`. You can find more detailed instructions in the [firebase documentation](https://firebase.google.com/docs/emulator-suite).
   - Update the `GATSBY_API_URL` to wherever your local functions api is hosted (by default, the firebase emulator uses `localhost:5000`)

3. Your site is now running at `http://localhost:8000`!

---

_[https://github.com/offthedial/site](https://github.com/offthedial/site)_

<!-- markdown links & imgs -->
[stars-shield]: https://img.shields.io/github/stars/offthedial/site.svg?style=social
