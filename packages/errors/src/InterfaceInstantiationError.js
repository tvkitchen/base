/**
 * InterfaceInstantiationError is thrown when an interface is instantiated directly.
 * This is a workaround to the fact that ES6 does not formally support interfaces.
 */
class InterfaceInstantiationError extends Error {
	/**
	 * @param {String} interfaceName The name of the interface being instantiated
	 */
	constructor(interfaceName) {
		if (interfaceName !== undefined) {
			super(`You cannot instantiate an interface: ${interfaceName}`)
		} else {
			super()
		}
	}
}

export default InterfaceInstantiationError
