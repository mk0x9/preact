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
 * @param {*} componentClass
 * @param {Object=} props
 * @param {*} children
 * @return {preact.Component}
 */
preact.h = function (componentClass, props, children) { };
