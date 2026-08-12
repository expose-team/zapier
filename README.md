# Expose.team Zapier Integration

Lets any Zapier customer search **people**, **companies**, and **schools** through Expose.team from inside a Zap.

Built with the [Zapier Platform CLI](https://platform.zapier.com/) — this is a standalone Zapier app, not part of the [expose-team/website](../website) Nuxt project. It just calls the public `https://expose.team/api` endpoints that the website already exposes.

## How it works

- **Authentication** (`authentication.js`): custom auth — the user pastes their Expose.team API key (from `/platform/api-key`). The test call hits `GET /api/api-key` with `x-api-key` set, which validates the key and returns the account's name/email.
- **Searches** (`searches/*.js`): "Find Person", "Find Company", "Find School" — each is a thin wrapper around `GET /api/search?type=...`, callable as a step in a Zap to enrich data mid-Zap.
- Every request automatically gets the `x-api-key` header attached (`beforeRequest` in `index.js`), and 401/402 responses are turned into readable Zapier errors (invalid key / out of credits).

There's no API versioning here on purpose — this app always calls the live `expose.team` endpoints, so a change on the website side takes effect immediately without needing a Zapier app republish.

## Local setup

```bash
npm install
npx zapier-platform login          # one-time, opens a browser to log into your Zapier account
npx zapier-platform register "Expose.team"   # first time only, creates the app on Zapier and writes .zapierapprc
npx zapier-platform push           # uploads a private version you can test with
```

(the CLI's binary is `zapier-platform` in this version — older docs/tutorials refer to it as just `zapier`.)

After `zapier push`, invite yourself (or the target Zapier account) as a tester from the [Zapier Developer Platform](https://developer.zapier.com/) to try it in a real Zap.

## Testing

```bash
npx zapier-platform validate   # structural + (network-dependent) integration checks
npm test                       # mocha specs, see test/
```

## Publishing

Once you're happy with it, submit it for review from the Developer Platform so any Zapier customer can find and use it (`zapier-platform promote` after Zapier approves it).
