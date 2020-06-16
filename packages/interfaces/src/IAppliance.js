import {
	InterfaceInstantiationError,
	NotImplementedError,
} from '@tvkitchen/base-errors'
import {
	logLevels,
} from '@tvkitchen/base-constants'

class IAppliance {
	// A simple, replaceable logger for use by the Appliance.
	logger = {
		log: (level, message) => console.log(`${level}: ${message}`), // eslint-disable-line no-console
		fatal: (message) => this.logger.log(logLevels.fatal, message),
		error: (message) => this.logger.log(logLevels.error, message),
		warn: (message) => this.logger.log(logLevels.warn, message),
		info: (message) => this.logger.log(logLevels.info, message),
		debug: (message) => this.logger.log(logLevels.debug, message),
		trace: (message) => this.logger.log(logLevels.trace, message),
	}

	/**
	 * Constructor for a new appliance.
	 *
	 * @param  {Object} overrideSettings Values to override default appliance settings.
	 */
	// eslint-disable-next-line no-unused-vars
	constructor(overrideSettings = {}) {
		if (this.constructor === IAppliance) {
			throw new InterfaceInstantiationError(this.constructor.name)
		}
	}

	/**
	 * Getter for the list of data types accepted by the appliance.
	 *
	 * @return {String[]} The list of data types accepted by the appliance.
	 */
	getInputTypes = () => {
		throw new NotImplementedError('getInputTypes')
	}

	/**
	 * Getter for the list of data types produced by the appliance.
	 *
	 * @return {String[]} The list of data types produced by the appliance.
	 */
	getOutputTypes = () => {
		throw new NotImplementedError('getOutputTypes')
	}

	/**
	 * Asserts that a given payload is actually a payload.
   *
	 * @param  {Payload} payload The payload that we want to validate.
	 * @return {Boolean}         The result of the validation check.
	 */
	// eslint-disable-next-line no-unused-vars
	isValidPayload = async (payload) => {
		throw new NotImplementedError('isValidPayload')
	}

	/**
	 * Prepares the Appliance to process data.
	 */
	setup = async () => {
		throw new NotImplementedError('setup')
	}

	/**
	 * Cleans up after processing is complete.
	 */
	teardown = async () => {
		throw new NotImplementedError('teardown')
	}

	/**
	 * Invokes the appliance on unprocessed data.
	 * This generally should not be called directly, but rather Payloads should be passed to the
	 * Appliance using the ingestPayload method.
	 *
	 * @param {PayloadArray} payloads A PayloadArray containing Payloads that should be processed.
	 * @return {PayloadArray}         Leftover Payloads that still need to be processed.
	 */
	// eslint-disable-next-line no-unused-vars
	invoke = async (payloads) => {
		throw new NotImplementedError('invoke')
	}

	/**
	 * Called to pass data into the appliance. If the payload is valid, it is added
	 * to the buffer and the appliance is invoked.
	 *
	 * @param  {Payload} payload The payload to be ingested.
	 * @return {Boolean}         Whether the payload resulted in a successful invocation.
	 * @throws {AssertionError} when passed an invalid payload for this appliance.
	 */
	// eslint-disable-next-line no-unused-vars
	ingestPayload = async (payload) => {
		throw new NotImplementedError('ingestPayload')
	}

	/**
	 * Registers a listener to the appliance for a given event type.
	 *
	 * Event types are listed in constants/events.js
	 *
	 * @param  {String} eventType  The type of event being listened to.
	 * @param  {Function} listener The listener to be registered for that event.
	 * @return {EventEmitter}      The EventEmitter (so events can be chained).
	 */
	// eslint-disable-next-line no-unused-vars
	on = (eventType, listener) => {
		throw new NotImplementedError('on')
	}

	/**
	 * Called by an implemented appliance when there is data worth sharing.
	 *
	 * @param  {Payload} payload The result that is ready to share.
	 * @return {Boolean}         Returns true if there are output listeners, false otherwise.
	 */
	// eslint-disable-next-line no-unused-vars
	emitResult = (payload) => {
		throw new NotImplementedError('emitResult')
	}
}

export default IAppliance
