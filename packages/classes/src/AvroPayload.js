import avro from 'avsc'
import { Payload } from './Payload'

const AVRO_TYPES = {
	RECORD: 'record',
	NULLABLE_BYTES_OR_STRING: ['null', 'bytes', 'string'],
	NULLABLE_STRING: ['null', 'string'],
	LONG: 'long',
}

const FIELD_TYPES = {
	data: AVRO_TYPES.NULLABLE_BYTES_OR_STRING,
	type: AVRO_TYPES.NULLABLE_STRING,
	createdAt: AVRO_TYPES.NULLABLE_STRING,
	origin: AVRO_TYPES.NULLABLE_STRING,
	duration: AVRO_TYPES.LONG,
	position: AVRO_TYPES.LONG,
}

const payloadType = avro.Type.forSchema({
	name: 'Payload',
	type: AVRO_TYPES.RECORD,
	fields: Object.entries(FIELD_TYPES).map(([name, type]) => ({
		name,
		type,
	})),
})

class AvroPayload extends Payload {
	static serialize(payload) {
		return payloadType.toBuffer(payload)
	}

	static deserialize(serializedPayload) {
		if (typeof serializedPayload === 'string') {
			return super.deserialize(serializedPayload)
		}
		return new AvroPayload(payloadType.fromBuffer(serializedPayload))
	}
}

export { AvroPayload }
