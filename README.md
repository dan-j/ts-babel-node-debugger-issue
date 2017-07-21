# Test repository for debugging with `ts-babel-node`

*Note: the version of ts-babel-node is a forked version to support ts-node@3.2.1, earlier versions
of ts-node aren't compatible with older versions of typescript (or something) and my fork was the
path of least resistance*


Essentially, any configurations that run `require('ts-babel-node').registerBabel()` prevent Webstorm
 from debugging the project.

## Using `-r` hook or binaries

Debugging works running the following commands in Webstorm:

```
> node -r ts-node/register index.ts
> ts-node index.ts
```

Debugging doesn't work with the following:

```
> node -r ts-babel-node/register index.ts
> ts-babel-node index.ts
```

## Using `register()` function

Debugging works when running `node index.js` with `index.js` as so:

```js
require('ts-node').register();
require('./index.ts');
```

It doesn't work with `index.js` as so:

```js
require('ts-babel-node').register();
require('./index.ts');
```

Nor does it work with this:

```js
require('ts-babel-node').registerBabel();
require('ts-node').register();
require('./index.ts');
```