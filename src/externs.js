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
 *   vnode: (function(!preact.VNode)|undefined),
 *   unmount: (function(!preact.VNode)|undefined),
 *   diffed: (function(!preact.VNode)|undefined),
 *   event: (function(!Event)|undefined),
 *   requestAnimationFrame: (Function|undefined),
 *   debounceRendering: (Function|undefined),
 *   useDebugValue: (function((string|number))|undefined)
 * }}
 */
preact.Options;

/**
 * @interface
 * @extends {HTMLElement}
 */
preact.PreactElement;

/**
 * @type {preact.VNode|null}
 */
preact.PreactElement.prototype._children;

/**
 * @type {Object}
 */
preact.PreactElement.prototype._listeners;

/**
 * @type {SVGElement}
 */
preact.PreactElement.prototype.ownerSVGElement;

/**
 * @type {string|number|undefined}
 */
preact.PreactElement.prototype.data;

/**
 * @param {!preact.ComponentChild} vnode
 * @param {!preact.PreactElement} parentDom
 * @param {(Element|Text|Object)=} replaceNode
 */
preact.render = function(vnode, parentDom, replaceNode) {};