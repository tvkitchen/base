import avro from 'avsc'
import { Payload } from './Payload'

const AVRO_TYPES = {
	RECORD: 'record',
	NULLABLE_BYTES_OR_STRING: ['null', 'bytes', 'string'],
	NULLABLE_STRING: ['null', 'string'],
	INTEGER: 'int',
}

const FIELD_TYPES = {
	data: AVRO_TYPES.NULLABLE_BYTES_OR_STRING,
	type: AVRO_TYPES.NULLABLE_STRING,
	createdAt: AVRO_TYPES.NULLABLE_STRING,
	origin: AVRO_TYPES.NULLABLE_STRING,
	duration: AVRO_TYPES.INTEGER,
	position: AVRO_TYPES.INTEGER,
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
	static serialize = (payload) => payloadType.toBuffer(payload)

	static deserialize = (serializedPayload) => (
		typeof serializedPayload === 'string'
			? super.deserialize(serializedPayload)
			: new AvroPayload(payloadType.fromBuffer(serializedPayload))
	)
}

export { AvroPayload }
