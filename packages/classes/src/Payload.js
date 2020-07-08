const defaults = {
	data: null,
	type: null,
	createdAt: '',
	timestamp: '',
	duration: 0,
	position: 0,
}

class Payload {
	constructor({
		data = defaults.data,
		type = defaults.type,
		createdAt = defaults.createdAt,
		timestamp = defaults.timestamp,
		duration = defaults.duration,
		position = defaults.position,
	} = defaults) {
		Object.assign(this, {
			data,
			type,
			createdAt,
			timestamp,
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
}

export default Payload
