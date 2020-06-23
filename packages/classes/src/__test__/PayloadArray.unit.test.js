import {
	Payload,
	PayloadArray,
} from '..'

describe('PayloadArray', () => {
	describe('constructor', () => {
		it('should construct when provided no parameters', () => {
			const payloadArray = new PayloadArray()
			expect(payloadArray).not.toBeUndefined()
		})
		it('should construct when provided a single payload', () => {
			const payloadArray = new PayloadArray(
				new Payload(),
			)
			expect(payloadArray.length).toEqual(1)
		})
		it('should construct when provided multiple payloads', () => {
			const payloadArray = new PayloadArray(
				new Payload(),
				new Payload(),
				new Payload(),
			)
			expect(payloadArray.length).toEqual(3)
		})
		it('should insert in the correct order when provided multiple payloads', () => {
			const payloadArray = new PayloadArray(
				new Payload({ position: 3 }),
				new Payload({ position: 1 }),
				new Payload({ position: 2 }),
				new Payload({ position: 5 }),
				new Payload({ position: 4 }),
			)
			const arr = payloadArray.toArray()
			expect(arr[0].position).toBe(1)
			expect(arr[1].position).toBe(2)
			expect(arr[2].position).toBe(3)
			expect(arr[3].position).toBe(4)
			expect(arr[4].position).toBe(5)
		})
		it('should error when provided a non-payload', () => {
			expect(() => new PayloadArray(
				new Payload(),
				15,
			)).toThrow()
		})
	})

	describe('insert', () => {
		it('should error when provided a non-payload', () => {
			const payloadArray = new PayloadArray()
			expect(() => payloadArray.insert(15)).toThrow()
			expect(() => payloadArray.insert('apple')).toThrow()
			expect(() => payloadArray.insert({})).toThrow()
		})
		it('should insert in the correct order', () => {
			const payloadArray = new PayloadArray()
			payloadArray.insert(new Payload({ position: 300 }))
			payloadArray.insert(new Payload({ position: 11 }))
			payloadArray.insert(new Payload({ position: 20 }))
			payloadArray.insert(new Payload({ position: 5 }))
			payloadArray.insert(new Payload({ position: 40 }))
			const arr = payloadArray.toArray()
			expect(arr[0].position).toBe(5)
			expect(arr[1].position).toBe(11)
			expect(arr[2].position).toBe(20)
			expect(arr[3].position).toBe(40)
			expect(arr[4].position).toBe(300)
		})
	})

	describe('indexOfPosition', () => {
		it('should return 0 if there are no Payloads', () => {
			const payloadArray = new PayloadArray()
			expect(payloadArray.indexOfPosition(500)).toBe(0)
			expect(payloadArray.indexOfPosition(0)).toBe(0)
			expect(payloadArray.indexOfPosition(1)).toBe(0)
		})
		it('should return 0 if there are no Payloads with an earlier position', () => {
			const payloadArray = new PayloadArray(new Payload({ position: 1000 }))
			expect(payloadArray.indexOfPosition(500)).toBe(0)
			expect(payloadArray.indexOfPosition(0)).toBe(0)
			expect(payloadArray.indexOfPosition(1)).toBe(0)
		})
		it('should return 1 if there is a single Payload with an earlier position', () => {
			const payloadArray = new PayloadArray(new Payload({ position: 1000 }))
			expect(payloadArray.indexOfPosition(5000)).toBe(1)
			expect(payloadArray.indexOfPosition(1001)).toBe(1)
		})
		it('should return the index of the first payload with the passed position', () => {
			const payloadArray = new PayloadArray(new Payload({ position: 1000 }))
			expect(payloadArray.indexOfPosition(1000)).toBe(0)
		})
		it('should return the index of the first payload with the passed position', () => {
			const payloadArray = new PayloadArray(
				new Payload({ position: 500 }),
				new Payload({ position: 1000 }),
			)
			expect(payloadArray.indexOfPosition(1000)).toBe(1)
		})
	})

	describe('filterByType', () => {
		it('should return a PayloadArray whose payloads match the specified type', () => {
			const payloadArray = new PayloadArray(
				new Payload({ type: 'TEXT.WORD' }),
				new Payload({ type: 'TEXT.WORD' }),
				new Payload({ type: 'TEXT.ATOM' }),
			)
			const filteredPayloadArray = payloadArray.filterByType('TEXT.WORD')
			expect(filteredPayloadArray).toBeInstanceOf(PayloadArray)
			expect(filteredPayloadArray.length).toBe(2)
		})
		it('should return a PayloadAarray whose payloads match any type within the specified ANY bucket', () => {
			const payloadArray = new PayloadArray(
				new Payload({ type: 'TEXT.WORD' }),
				new Payload({ type: 'TEXT.WORD' }),
				new Payload({ type: 'TEXT.ATOM' }),
			)
			const filteredPayloadArray = payloadArray.filterByType('TEXT.ANY')
			expect(filteredPayloadArray).toBeInstanceOf(PayloadArray)
			expect(filteredPayloadArray.length).toBe(3)
		})
	})

	describe('filterByPosition', () => {
		it('should return a PayloadArray whose payloads exist within the specified time range', () => {
			const payloadArray = new PayloadArray(
				new Payload({ position: 0 }),
				new Payload({ position: 1000 }),
				new Payload({ position: 2000 }),
			)
			const filteredPayloadArray = payloadArray.filterByPosition(0, 1000)
			expect(filteredPayloadArray).toBeInstanceOf(PayloadArray)
			expect(filteredPayloadArray.length).toBe(2)
		})
		it('should return a PayloadArray whose payloads exist within the specified time range', () => {
			const payloadArray = new PayloadArray(
				new Payload({ position: 0 }),
				new Payload({ position: 1000 }),
				new Payload({ position: 2000 }),
			)
			const filteredPayloadArray = payloadArray.filterByPosition(0, 1500)
			expect(filteredPayloadArray).toBeInstanceOf(PayloadArray)
			expect(filteredPayloadArray.length).toBe(2)
		})
		it('should return a PayloadArray whose payloads exist after the specified time', () => {
			const payloadArray = new PayloadArray(
				new Payload({ position: 0 }),
				new Payload({ position: 1000 }),
				new Payload({ position: 2000 }),
			)
			const filteredPayloadArray = payloadArray.filterByPosition(1000)
			expect(filteredPayloadArray).toBeInstanceOf(PayloadArray)
			expect(filteredPayloadArray.length).toBe(2)
		})
	})

	describe('toArray', () => {
		it('should return an array', () => {
			const payloadArray = new PayloadArray()
			expect(payloadArray.toArray()).toBeInstanceOf(Array)
		})
		it('should return an array of the same length as the PayloadArray', () => {
			const payloadArray = new PayloadArray()
			const arr = payloadArray.toArray()
			expect(arr.length).toEqual(payloadArray.length)
		})
		it('should not return a reference to the array contained by the PayloadArray', () => {
			const payloadArray = new PayloadArray()
			payloadArray.toArray().push('pants')
			expect(payloadArray.toArray()).not.toEqual(['pants'])
		})
	})
})
