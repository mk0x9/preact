/**
 * @fileoverview Externs for google closure compiler
 * @externs
 */

/**
 * @type {!Object}
 * @const
 */
var preact = {};

/**
 * @interface
 * @param {Object=} props
 * @param {Object=} context
 */
preact.Component = function (props, context) { };

/**
 * @type {Object}
 */
preact.Component.prototype.props;

/**
 * @type {Object}
 */
preact.Component.prototype.context;

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
preact.Component.prototype.setState = function (nextState, callback) { };

/**
 * @param {Function=} callback
 */
preact.Component.prototype.forceUpdate = function (callback) { };

/**
 * @typedef {*}
 */
preact.ComponentChild;

/**
 * @constructor
 * @extends {HTMLElement}
 */
preact.PreactElement = function () {};

/**
 * @typedef {{
 *  current: *
 * }}
 */
preact.RefObject;

/**
 * @typedef {Function}
 */
preact.RefCallback;

/**
 * @typedef {!preact.RefObject|!preact.RefCallback}
 */
preact.Ref;

/**
 * @param {*} componentClass
 * @param {Object} props
 * @param {*} children
 * @return {preact.Component}
 */
preact.h = function (componentClass, props, children) { };

/**
 * @typedef {{
 *  type: *,
 *  props: *,
 *  key: !preact.Key,
 *  ref: preact.Ref,
 *  startTime: (number|null),
 *  endTime: (number|null)
 * }}
 */
preact.VNode;

/**
 * @typedef {string|number|null}
 */
preact.Key;

/**
 * @typedef {{
 *   vnode: function(!preact.VNode),
 *   unmount: function(!preact.VNode),
 *   diffed: function(!preact.VNode),
 *   event: function(!Event),
 *   requestAnimationFrame: Function,
 *   debounceRendering: Function,
 *   useDebugValue: function((string|number))
 * }}
 */
preact.Options;