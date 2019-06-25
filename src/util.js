/**
 * Assign properties from `props` to `obj`
 * @param {!Object} obj The object to copy properties to
 * @param {!Object} props The object to copy properties from
 * @returns {!Object}
 */
export function assign(obj, props) {
	for (let i in props) obj[i] = props[i];
	return (obj);
}

/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {Node} node The node to remove
 */
export function removeNode(node) {
	let parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}
