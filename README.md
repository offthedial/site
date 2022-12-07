# off the dial site
> The website for everything Off the Dial!

![Stars][stars-shield]
# <!-- ![Banner](banner.png) -->

A website that allows players to sign up to tournaments using their discord account, read rules, blog posts, and more.
- Saves user's signup information and autofills them each season.
- Converting markdown files to blog posts for staff to post updates.

## usage
The website can be found at [`otd.ink`](https://otd.ink).

## local setup
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
   - Update the `GATSBY_API_URL` to wherever your local functions api is hosted (by default, the firebase emulator uses `http://localhost:5000` for hosting)

3. Your site is now running at `http://localhost:8000`!

<!-- markdown links & imgs -->
[stars-shield]: https://img.shields.io/github/stars/offthedial/site.svg?style=social
