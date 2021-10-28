function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var AccordionContext = React.createContext({
  active: 0,
  setActive: function setActive() {}
});

var AccordionWrapper = function AccordionWrapper(props) {
  var _useState = React.useState(0),
      active = _useState[0],
      setActive = _useState[1];

  return /*#__PURE__*/React__default.createElement(AccordionContext.Provider, {
    value: {
      active: active,
      setActive: setActive
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "accordion-wrapper"
  }, /*#__PURE__*/React__default.createElement("form", null, props.children)));
};

var AccordionItem = function AccordionItem(props) {
  var indexPlus;

  var indexCount = function indexCount(index) {
    indexPlus = index + 1;
    return indexPlus;
  };

  var _useContext = React.useContext(AccordionContext),
      active = _useContext.active,
      setActive = _useContext.setActive;

  var eventHandler = function eventHandler(e, index) {
    e.preventDefault();
    setActive(index);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "accordion-item11"
  }, /*#__PURE__*/React__default.createElement("h3", {
    className: "accordion-title"
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick(e) {
      return eventHandler(e, props.index);
    },
    className: active === props.index ? 'active' : 'inactive',
    "aria-expanded": active === props.index ? 'true' : 'false',
    "aria-controls": 'sect-' + indexCount(props.index),
    "aria-disabled": active === props.index ? 'true' : 'false'
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "title-wrapper"
  }, props.title), /*#__PURE__*/React__default.createElement("span", {
    className: "icon-wrapper"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: active === props.index ? 'plus' : 'minus'
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "accordion-panel"
  }, /*#__PURE__*/React__default.createElement("div", {
    id: 'sect-' + indexCount(props.index),
    className: active === props.index ? 'panel-open' : 'panel-close'
  }, props.description)));
};

AccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

exports.AccordionItem = AccordionItem;
exports.AccordionWrapper = AccordionWrapper;
//# sourceMappingURL=index.js.map
