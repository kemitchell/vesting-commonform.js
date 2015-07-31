Generate [vesting.js][vesting.js]-compatible vesting provisions.

```javascript
var straight48 = require('vesting-commonform')(48)
require('commonform-validate').form(straight48.form) // => true
straight48.blanks['monthly fraction'] // => '1/48th'
```

[vesting.js]: https://npmjs.com/packages/vesting
