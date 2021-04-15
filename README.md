# Angular 7 PWA Example
 
This example shows how to build a search app with Angular 7, Angular CLI, and Angular Material.

Please read [Build Your First PWA with Angular](https://developer.okta.com/blog/2019/01/30/first-angular-pwa) to see how this app was created.

**Prerequisites:** [Node.js](https://nodejs.org/). 

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-angular-pwa-example.git
cd okta-angular-pwa-example
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

Run the app using:
 
```bash
npm install
npm start
```

### Create a New OIDC App in Okta

Before you begin, you’ll need a free Okta developer account. Install the [Okta CLI](https://cli.okta.com) and run `okta register` to sign up for a new account. If you already have an account, run `okta login`. Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Use `http://localhost:4200/callback` for the Redirect URI and set the Logout Redirect URI to `http://localhost:4200`.

Copy your `issuer` and copy the `clientId` in to `src/app/app.module.ts`. 

```ts
const oktaConfig = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/callback'
};
```

## Links

This example uses the following open source libraries from Okta:

* [Okta Angular SDK](https://github.com/okta/okta-angular)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2019/01/30/first-angular-pwa), or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
