import { sortedIndexBy } from '../sortedArray'

describe('IAppliance', () => {
	describe('sortedIndexBy', () => {
		it('should return the first index greater than or equal to the passed value', () => {
			const harness = (arr, value, fn, returnHighest, index) => expect(
				sortedIndexBy(arr, value, fn, returnHighest),
			).toBe(index)
			harness([1, 2, 3, 4, 5], 3, (x) => x, false, 2)
			harness([1, 2, 4, 5, 6], 3, (x) => x, false, 2)
			harness([1, 2, 4, 5, 6], 14, (x) => x, false, 5)
			harness([1, 2, 4, 5, 5, 5, 6], 5, (x) => x, true, 6)
			harness([{ v: 1 }, { v: 2 }, { v: 4 }, { v: 5 }, { v: 6 }], 14, (x) => x.v, false, 5)
			harness([{ v: 1 }, { v: 2 }, { v: 4 }, { v: 5 }, { v: 6 }], 1, (x) => x.v, false, 0)
		})
	})
})
