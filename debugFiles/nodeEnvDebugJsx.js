const React = require('./react.development')
// const ReactDOM = require('./react-dom.development')cls
const jsxRuntime = require('./react-jsx-runtime.development')
const { jsx = _jsx, jsxs = _jsxs} = jsxRuntime
require('./babel')

const ReactApp = () => {
    const [myData, setMyData] = React.useState('11');
    return /*#__PURE__*/_jsxs("div", {
      children: [myData, /*#__PURE__*/_jsx("button", {
        onClick: () => setMyData(`${myData}++`),
        children: "+"
      })]
    });
  }

const result = jsx(ReactApp, {})
console.log(result)