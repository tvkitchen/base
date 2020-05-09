const defaults = {
	data: null,
	type: null,
}

class Payload {
	constructor({
		data = defaults.data,
		type = defaults.type,
	} = defaults) {
		Object.assign(this, {
			data,
			type,
		})
	}

	static serialize = (payload) => JSON.stringify(payload)

	static deserialize = (serializedPayload) => {
		const deserializedPayload = JSON.parse(serializedPayload, (key, value) => {
			if (typeof value === 'object') {
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
