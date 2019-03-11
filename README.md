# VTEX Scripts

This package contains the scripts and build configuration for the VTEX modules.

## Usage

1.  Add the `@vtex/vtex-scripts` to your devDependencies

```sh
$ yarn add @vtex/vtex-scripts enzyme enzyme-adapter-react-16 jsdom --dev
```

2. Add the following scripts to your `package.json`

```json
{
  "scripts": {
    "build": "vtex-scripts build",
    "test": "vtex-scripts test"
  }
}
```

3. Add the following to a `setupTests.js` in the root of your _source_ directory

```js
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')

global.window = jsdom.window
global.document = window.document

Enzyme.configure({ adapter: new Adapter() })
```

## Configurations

You can also customize some default configurations that comes with `vtex-scripts`

The following properties can be supplied in a `vtexScriptsOverride` property inside your `package.json`

| Name                 |   Type   | Description                                                        |
| -------------------- | :------: | ------------------------------------------------------------------ |
| `srcPath`            | `String` | The relative path of your sources directory (e.g. `./src`)         |
| `distPath`           | `String` | The relative path of your compiled files directory (e.g. `./dist`) |
| `setupTestsFilename` | `String` | The filename of the tests setup file (e.g. `setupTests.js`)        |
