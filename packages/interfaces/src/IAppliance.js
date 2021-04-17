// We need to allow a second class in this file that is used for duck typing.
// It will never be referecned, and is defined within the duck typing method.
/* eslint-disable max-classes-per-file */

// This is defining method stubs meant to be overridden.
/* eslint-disable class-methods-use-this */

import { Transform } from 'stream'
import {
	InterfaceInstantiationError,
	NotImplementedError,
} from '@tvkitchen/base-errors'

class IAppliance extends Transform {
	// A logger for use by the Appliance.
	logger = null

	/**
	 * Constructor for a new appliance.
	 *
   * @param  {Object} settings        Values to override default appliance settings.
   * @param  {Object} settings.logger The logger to use.
	 */
	constructor(settings = {}) {
		super({
			...settings,
			objectMode: true,
		})
		if (this.constructor === IAppliance) {
			throw new InterfaceInstantiationError(this.constructor.name)
		}
	}

	/**
	 * Checks to ensure that third party dependencies are available to the appliance.
	 *
	 * If anything is missing or misconfigured it will log an error message explaining the corrective
	 * steps, and will return false.
	 *
	 * @return {Boolean} Whether the dependencies and configurations properly exist.
	 */
	async audit() {
		throw new NotImplementedError('audit')
	}

	/**
	 * Asserts that a given payload is actually a payload.
   *
	 * @param  {Payload} payload The payload that we want to validate.
	 * @return {Boolean}         The result of the validation check.
	 */
	// eslint-disable-next-line no-unused-vars
	async isValidPayload(payload) {
		throw new NotImplementedError('isValidPayload')
	}

	/**
	 * Prepares the Appliance to process data and starts data processing.
	 *
	 * @return {Boolean} Whether the appliance successfully started.
	 */
	async start() {
		throw new NotImplementedError('start')
	}

	/**
	 * Stops the appliance from processing data and cleans up the appliance.
	 *
	 * @return {Boolean} Whether the appliance successfully stopped.
	 */
	async stop() {
		throw new NotImplementedError('stop')
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
	async invoke(payloads) {
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
	async ingestPayload(payload) {
		throw new NotImplementedError('ingestPayload')
	}

	/** @inheritdoc */
	// eslint-disable-next-line no-underscore-dangle
	async _transform(chunk, encoding, callback) {
		this.ingestPayload(chunk)
			.then(() => callback())
			.catch((error) => callback(error))
	}

	/**
	 * A comprehensive list of attributes that an object must have to be considered an IAppliance.
	 *
	 * This attribute is INTERNAL and should not be relied on; it may be removed and only exists
	 * as an optimization to the isIAppliance method.
	 *
	 * @type {Array}
	 */
	static duckTypeProperties = (() => {
		class Appliance extends IAppliance {} // Since IAppliance cannot be instantiated directly.
		return Object.getOwnPropertyNames(new Appliance())
	})()

	/**
	 * Checks whether an object is an instance of an IAppliance.
	 *
	 * This uses duck typing, rather than instanceof, since we can't rely on the prototype chain
	 * matching across packages and versions.
	 *
	 * This method is implemented, which violates the spirit of interfaces.
	 * Luckily, JavaScript doesn't actually know what an interface is. Also if it handled typing
	 * in a reasonable way we wouldn't have to do this to begin with.
	 *
	 * @param  {Object} obj The object being tested.
	 * @return {Boolean}     The result of the duck test.
	 */
	static isIAppliance(obj) {
		return IAppliance.duckTypeProperties
			.every((property) => Object.prototype.hasOwnProperty.call(obj, property))
	}

	/**
	 * Getter for the list of data types accepted by the appliance.
	 *
	 * @return {String[]} The list of data types accepted by the appliance.
	 */
	static getInputTypes() {
		throw new NotImplementedError('getInputTypes')
	}

	/**
	 * Getter for the list of data types produced by the appliance.
	 *
	 * @return {String[]} The list of data types produced by the appliance.
	 */
	static getOutputTypes() {
		throw new NotImplementedError('getOutputTypes')
	}
}

export { IAppliance }
