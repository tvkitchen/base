import fs from 'fs'
import path from 'path'
import { Payload } from '..'

describe('Payload', () => {
	describe('constructor', () => {
		it('should construct when provided no parameters', () => {
			const payload = new Payload()
			expect(payload).not.toBeUndefined()
		})
		it('should construct when provided partial parameters', () => {
			const parameters = {
				data: 'I ate all of the cheese',
			}
			const payload = new Payload(parameters)
			expect(payload).not.toBeUndefined()
			expect(payload.data).toBe('I ate all of the cheese')
			expect(payload.type).toBeNull()
		})
		it('should construct when provided all parameters', () => {
			const parameters = {
				data: 'I ate all of the cheese',
				type: 'CONFESSION',
				createdAt: '2020-02-02T03:04:05.000Z',
				timestamp: '2020-02-02T03:04:01.000Z',
				duration: 1000,
				position: 60000,
			}
			const payload = new Payload(parameters)
			expect(payload).not.toBeUndefined()
			expect(payload.data).toBe('I ate all of the cheese')
			expect(payload.type).toBe('CONFESSION')
			expect(payload.createdAt).toEqual('2020-02-02T03:04:05.000Z')
			expect(payload.timestamp).toEqual('2020-02-02T03:04:01.000Z')
			expect(payload.duration).toBe(1000)
			expect(payload.position).toBe(60000)
		})
	})

	describe('serialize', () => {
		it('should properly should serialize data with an empty object', () => {
			const payload = new Payload()
			const serializedPayload = Payload.serialize(payload)
			expect(serializedPayload).toMatchSnapshot()
		})
		it('should properly should serialize data with a partially populated object', () => {
			const parameters = {
				data: 'I ate all of the cheese',
			}
			const payload = new Payload(parameters)
			const serializedPayload = Payload.serialize(payload)
			expect(serializedPayload).toMatchSnapshot()
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
			const payload = new Payload(parameters)
			const serializedPayload = Payload.serialize(payload)
			expect(serializedPayload).toMatchSnapshot()
		})
	})

	describe('deserialize', () => {
		it('should properly should deserialize an empty serialized payload', () => {
			const payload = Payload.deserialize('{}')
			expect(payload.data).toBeNull()
			expect(payload.type).toBeNull()
		})
		it('should properly deserialize a partially populated serialized payload', () => {
			const payload = Payload.deserialize('{"data":"Hello."}')
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
			const payload = new Payload(parameters)
			const serializedPayload = Payload.serialize(payload)
			const deserializedPayload = Payload.deserialize(serializedPayload)
			expect(deserializedPayload).toMatchSnapshot()
		})
		it('should properly deserialize payload strings with null values', () => {
			const serializedPayload = '{"data":"hello","type":null}'
			const deserializedPayload = Payload.deserialize(serializedPayload)
			expect(deserializedPayload).toMatchSnapshot()
		})
		it('should properly deserialize a serialized payload containing buffered data', () => {
			const data = fs.readFileSync(path.join(__dirname, '/data/thinkingface.png'))
			const parameters = {
				data,
				type: 'CONFESSION',
			}
			const payload = new Payload(parameters)
			const serializedPayload = Payload.serialize(payload)
			const deserializedPayload = Payload.deserialize(serializedPayload)
			expect(deserializedPayload).toEqual(payload)
		})
	})
})
