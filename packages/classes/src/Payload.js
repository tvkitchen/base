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
}

export default Payload
