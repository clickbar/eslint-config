---
'@clickbar/eslint-config-typescript': major
'@clickbar/eslint-config-base': major
'@clickbar/eslint-config': major
'@clickbar/eslint-config-vue': major
---

Migrate to Eslint v9 & flat-config

Please use an `eslint.config.js` file and use our rules like this:

```js
import clickbar from '@clickbar/eslint-config'

export default clickbar()
```

For other necessary adjustments please checkout the ESlint config documentation.
