import fs from 'fs'
import path from 'path'
import { AvroPayload } from '..'

describe('AvroPayload', () => {
	describe('serialize', () => {
		it('should properly should serialize data with an empty object', () => {
			jest.clearAllMocks()
			const mockDate = new Date(1592156234000)
			jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
			const payload = new AvroPayload()
			jest.spyOn(global, 'Date').mockRestore()
			const serializedAvroPayload = AvroPayload.serialize(payload)
			expect(serializedAvroPayload).toMatchSnapshot()
		})
		it('should properly should serialize data with a partially populated object', () => {
			const parameters = {
				data: 'I ate all of the cheese',
				createdAt: '2020-07-08T17:28:29.032Z',
			}
			const payload = new AvroPayload(parameters)
			const serializedAvroPayload = AvroPayload.serialize(payload)
			expect(serializedAvroPayload).toMatchSnapshot()
		})
		it('should properly should serialize data with a fully populated object', () => {
			const parameters = {
				data: 'I ate all of the cheese',
				type: 'CONFESSION',
				createdAt: '2020-02-02T03:04:05.000Z',
				timestamp: '2020-02-02T03:04:01.000Z',
				duration: 1000,
				position: 60000,
			}
			const payload = new AvroPayload(parameters)
			const serializedAvroPayload = AvroPayload.serialize(payload)
			expect(serializedAvroPayload).toMatchSnapshot()
		})
	})

	describe('deserialize', () => {
		it('should properly should deserialize an empty serialized payload', () => {
			const payload = AvroPayload.deserialize('{}')
			expect(payload.data).toBeNull()
			expect(payload.type).toBeNull()
		})
		it('should properly deserialize a partially populated serialized payload', () => {
			const payload = AvroPayload.deserialize('{"data":"Hello."}')
			expect(payload.data).toBe('Hello.')
			expect(payload.type).toBeNull()
		})
		it('should properly deserialize a serialized payload', () => {
			const parameters = {
				data: 'I ate all of the cheese',
				type: 'CONFESSION',
				createdAt: '2020-02-02T03:04:05.000Z',
				timestamp: '2020-02-02T03:04:01.000Z',
				duration: 1000,
				position: 60000,
			}
			const payload = new AvroPayload(parameters)
			const serializedAvroPayload = AvroPayload.serialize(payload)
			const deserializedAvroPayload = AvroPayload.deserialize(serializedAvroPayload)
			expect(deserializedAvroPayload).toMatchSnapshot()
		})
		it('should properly deserialize payload strings with null values', () => {
			const serializedAvroPayload = '{"data":"hello","type":null}'
			const deserializedAvroPayload = AvroPayload.deserialize(serializedAvroPayload)
			expect(deserializedAvroPayload).toMatchSnapshot({
				createdAt: expect.any(String),
			})
		})
		it('should properly deserialize a serialized payload containing buffered data', () => {
			const data = fs.readFileSync(path.join(__dirname, '/data/thinkingface.png'))
			const parameters = {
				data,
				type: 'CONFESSION',
			}
			const payload = new AvroPayload(parameters)
			const serializedAvroPayload = AvroPayload.serialize(payload)
			const deserializedAvroPayload = AvroPayload.deserialize(serializedAvroPayload)
			expect(deserializedAvroPayload).toEqual(payload)
		})
	})
})
