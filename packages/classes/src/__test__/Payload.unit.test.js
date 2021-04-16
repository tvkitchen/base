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
				origin: '2020-02-02T03:04:01.000Z',
				duration: 1000,
				position: 60000,
			}
			const payload = new Payload(parameters)
			expect(payload).not.toBeUndefined()
			expect(payload.data).toBe('I ate all of the cheese')
			expect(payload.type).toBe('CONFESSION')
			expect(payload.createdAt).toEqual('2020-02-02T03:04:05.000Z')
			expect(payload.origin).toEqual('2020-02-02T03:04:01.000Z')
			expect(payload.duration).toBe(1000)
			expect(payload.position).toBe(60000)
		})
		it('should populate a default createdAt', () => {
			const payload = new Payload()
			expect(payload.createdAt).not.toBe('')
		})
		it('should set createdAt differently for payloads created at different times', () => {
			jest.clearAllMocks()
			const firstMockDate = new Date(1592156234000)
			jest.spyOn(global, 'Date').mockImplementation(() => firstMockDate)
			const firstPayload = new Payload()
			jest.spyOn(global, 'Date').mockRestore()
			const secondMockDate = new Date(1592156235000)
			jest.spyOn(global, 'Date').mockImplementation(() => secondMockDate)
			const secondPayload = new Payload()
			jest.spyOn(global, 'Date').mockRestore()
			expect(firstPayload.createdAt).not.toEqual(secondPayload.createdAt)
		})
	})

	describe('serialize', () => {
		it('should properly should serialize data with an empty object', () => {
			jest.clearAllMocks()
			const mockDate = new Date(1592156234000)
			jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
			const payload = new Payload()
			jest.spyOn(global, 'Date').mockRestore()
			const serializedPayload = Payload.serialize(payload)
			expect(serializedPayload).toMatchSnapshot()
		})
		it('should properly should serialize data with a partially populated object', () => {
			const parameters = {
				data: 'I ate all of the cheese',
				createdAt: '2020-07-08T17:28:29.032Z',
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
				origin: '2020-02-02T03:04:01.000Z',
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
				origin: '2020-02-02T03:04:01.000Z',
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
			expect(deserializedPayload).toMatchSnapshot({
				createdAt: expect.any(String),
			})
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

	describe('duckTypeProperties', () => {
		it('should contain all properties of a Payload', () => {
			const completePropertySet = new Set([
				...Payload.duckTypeProperties,
				...Object.getOwnPropertyNames(new Payload()),
			])
			expect(completePropertySet.size).toEqual(Payload.duckTypeProperties.length)
		})
	})

	describe('isPayload', () => {
		it('should properly detect a Payload object', () => {
			const payload = new Payload()
			expect(Payload.isPayload(payload)).toBe(true)
		})
		it('should properly detect a non-Payload object', () => {
			const obj = {}
			expect(Payload.isPayload(obj)).toBe(false)
		})
		it('should properly detect a non-Payload object with common fields', () => {
			const obj = {
				data: 'sup',
				type: 'hello',
			}
			expect(Payload.isPayload(obj)).toBe(false)
		})
	})

	describe('getDataObject', () => {
		it('should return the object representation of stringified json', () => {
			const dataObject = { a: 'hello' }
			const payload = new Payload({
				data: Buffer.from(JSON.stringify(dataObject)),
			})
			expect(payload.getDataObject()).toEqual(dataObject)
		})
	})

	describe('getDataString', () => {
		it('should return the buffered string', () => {
			const dataString = 'hello'
			const payload = new Payload({
				data: Buffer.from(dataString),
			})
			expect(payload.getDataString()).toEqual(dataString)
		})
	})

	describe('setDataObject', () => {
		it('should store an object in a form that can be deserialized', () => {
			const dataObject = { a: 'hello' }
			const payload = new Payload()
			payload.setDataObject(dataObject)
			expect(payload.data instanceof Buffer).toBe(true)
			expect(JSON.parse(payload.data.toString())).toEqual(dataObject)
		})
	})

	describe('setDataString', () => {
		it('should return the buffered string', () => {
			const dataString = 'hello'
			const payload = new Payload()
			payload.setDataString(dataString)
			expect(payload.data instanceof Buffer).toBe(true)
			expect(payload.data.toString()).toEqual(dataString)
		})
	})
})
