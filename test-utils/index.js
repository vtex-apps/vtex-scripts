const React = require('react')
const reactTestingLibrary = require('react-testing-library')
const { IntlProvider } = require('react-intl')
const paths = require('../utils/paths')

const pkg = require(paths.resolveAppPath('package.json'))

let defaultLocale = 'en-US'
if (pkg.vtexScripts && pkg.vtexScripts.defaultLocale) {
  defaultLocale = pkg.vtexScripts.defaultLocale
}

const defaultStrings = require(paths.resolveAppPath('../messages/' + defaultLocale + '.json'))

const customRender = (node, options) => {
 const rendered = reactTestingLibrary.render(
   React.createElement(IntlProvider, {
      messages: defaultStrings,
      locale: defaultLocale
   }, node),
   options
 )

 return {
   ...rendered,
   rerender: newUi =>
     customRender(newUi, {
       container: rendered.container,
       baseElement: rendered.baseElement,
     }),
 }
}

// re-export everything
module.exports = Object.assign({},
 reactTestingLibrary,
 { render: customRender }
)
