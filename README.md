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

### maintenance

<details><summary>Updating new weapons:</summary>

> - Navigate to [https://github.com/offthedial/site/tree/master/src/components/weapons.js](https://github.com/offthedial/site/tree/master/src/components/weapons.js). This is where the weapon data is stored.
> - All images / data is linked to from sendou.ink. Inside the file, you will see a link to the corresponding `weapon.json` file.
> - Copy and paste the json data into the file under the `importedWeapons` variable.
> - Delete all non `MAIN_` weapon keys.
> - Image links are automatically generated based on weapon keys. You are finished.

</details>
<details><summary>Updating IDTGA info card:</summary>

> - Navigate to https://github.com/offthedial/site/blob/HEAD/src/pages/idtga/info.mdx. This is where the season info is stored.
> - The frontmatter has one `hidden:` field. If you do not have any season info to show, you can choose to hide the Season Info tab all together.
> - Modify the markdown content until you are satisfied.

</details>
<details><summary>Adding staff cards:</summary>

> - Navigate to https://github.com/offthedial/site/blob/HEAD/src/pages/staff.md. This is the staff page.
> - Each staff card is contained within a `Card` component, duplicate one of the existing cards and modify the properties and content until you are satsified.
> - Make sure all staff cards are always placed above the comment, you'll see.

</details>
<details><summary>Adding more redirect links:</summary>

> - Navigate to https://github.com/offthedial/site/blob/HEAD/gatsby-node.js. This is where the redirect pages are generated.
> - You will see a function called `createRedirectPages` that includes a list of redirects.
> - Add an entry to the list with the redirect that you want.

</details>

<!-- markdown links & imgs -->

[stars-shield]: https://img.shields.io/github/stars/offthedial/site.svg?style=social
