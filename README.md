# Expose.team Zapier Integration

Lets any Zapier customer search **people**, **companies**, and **schools** through Expose.team from inside a Zap.

Built with the [Zapier Platform CLI](https://platform.zapier.com/) — this is a standalone Zapier app.

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
