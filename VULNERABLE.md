# Deliberately vulnerable — test target only

This repository is a disposable test target for the [MuseFlowCheck](https://github.com/Aminesikz/MuseFlowCheck)
GitHub Action. Its pull requests add intentionally insecure code (SQL injection, reflected cross-site scripting) so
the Action has something real to find.

- **Do not deploy it, run it on a reachable host, or copy code from it.**
- There is no real data and no database behind it.
- The vulnerabilities are on purpose; please don't report them.
