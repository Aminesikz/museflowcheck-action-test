# museflowcheck-action-test

A tiny Express app used to test the [MuseFlowCheck](https://github.com/Aminesikz/MuseFlowCheck) GitHub Action on
real pull requests. See [VULNERABLE.md](VULNERABLE.md): its PRs are deliberately insecure.

| Branch | What the PR adds | Expected check |
|---|---|---|
| `pr1-vulnerable-search` | `GET /search` building SQL from `req.query.q` and echoing it into HTML | ❌ failed: SQL injection and XSS commented inline |
| `pr2-safe-search` | the same feature with a bound parameter and a JSON response | ✅ passed |
| `pr3-plugin-routes` | routes loaded through computed `require()` paths the tracer cannot follow | ❌ failed: incomplete analysis, never green |
