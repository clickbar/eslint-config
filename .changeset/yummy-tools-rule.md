---
'@clickbar/eslint-config-base': patch
---

Remove tailwindcss plugin to support using TW4

This causes these rules to be removed:

- tailwindcss/enforces-negative-arbitrary-values
- tailwindcss/enforces-shorthand
- tailwindcss/no-contradicting-classname
