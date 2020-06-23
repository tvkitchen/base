/* eslint-disable import/prefer-default-export */
/**
 * Find the index within a sorted array to which a given value could be inserted while
 * still maintaining order.
 *
 * This takes in a function that will be called on array items in order to parse the sorted
 * value.
 *
 * @param  {Array}    array         The sorted array to inspect.
 * @param  {*}        value         The value to use when finding the index.
 * @param  {Function} valueGetter   The function to extract values from array items.
 * @param  {Boolean}  returnHighest Whether to return the lowest (false) or highest (true) index.
 * @return {Number}                 The index at which value should be inserted into the array.
 */
export const sortedIndexBy = (array, value, valueGetter = (x) => x, returnHighest = false) => {
	let low = 0
	let high = array.length
	while (low < high) {
		const mid = Math.floor((low + high) / 2)
		const computed = valueGetter(array[mid])
		if (computed < value) {
			low = mid + 1
		} else if (computed === value
			&& returnHighest === true) {
			low = mid + 1
		} else {
			high = mid
		}
	}
	return Math.min(high, array.length)
}
