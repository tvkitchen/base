const defaults = {
	data: null,
	type: null,
	createdAt: '',
	origin: '',
	duration: 0,
	position: 0,
}

class Payload {
	/**
	 * Creates a new Payload.
	 * If createdAt is not specified, it defaults to the current time.
	 *
	 * @param  {Object} properties Allow specification of properties on construction.
	 */
	constructor({
		data = defaults.data,
		type = defaults.type,
		createdAt = defaults.createdAt,
		origin = defaults.origin,
		duration = defaults.duration,
		position = defaults.position,
	} = defaults) {
		Object.assign(this, {
			data,
			type,
			createdAt: createdAt || (new Date()).toISOString(),
			origin,
			duration,
			position,
		})
	}

	static serialize = (payload) => JSON.stringify(payload)

	static deserialize = (serializedPayload) => {
		const deserializedPayload = JSON.parse(serializedPayload, (key, value) => {
			if (typeof value === 'object'
					&& value != null) {
				const stringifiedType = value.type || ''
				if (stringifiedType === 'Buffer') {
					return Buffer.from(value.data || '')
				}
			}
			return value
		})
		return new Payload(deserializedPayload)
	}

	/**
	 * A comprehensive list of attributes that an object must have to be considered a Payload.
	 *
	 * This attribute is INTERNAL and should not be relied on; it may be removed and only exists
	 * as an optimization to the isPayload method.
	 *
	 * @type {Array}
	 */
	static duckTypeProperties = Object.getOwnPropertyNames(new Payload())

	/**
	 * Checks whether an object is an instance of a Payload.
	 *
	 * This uses duck typing, rather than instanceof, since we can't rely on the prototype chain
	 * matching across packages and versions.
	 *
	 * @param  {Object}  obj The object being tested.
	 * @return {Boolean}     The result of the duck test.
	 */
	static isPayload = (obj) => (
		Payload.duckTypeProperties
			.every((property) => Object.prototype.hasOwnProperty.call(obj, property))
	)

	/**
	 * Extracts and returns an object that has been stringified within the payload data.
	 */
	getDataObject() {
		return JSON.parse(this.data.toString())
	}

	/**
	 * Extracts and returns a string value from payload data.
	 */
	getDataString() {
		return this.data.toString()
	}

	/**
	 * Converts a simple object to a buffer and assigns it to payload data.
	 *
	 * The object must be serializable via JSON.stringify / JSON.parse
	 */
	setDataObject(obj) {
		this.data = Buffer.from(JSON.stringify(obj))
	}

	/**
	 * Converts a string to a buffer and assigns it to the payload data.
	 */
	setDataString(str) {
		this.data = Buffer.from(str)
	}
}

export { Payload }
