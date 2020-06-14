import Payload from './Payload'

/**
 * PayloadArray stores a series of Payloads in a data structure that allows for easy filtering
 * and lookup by position and type.
 */
class PayloadArray {
	payloads = []

	constructor(...payloads) {
		[...payloads].forEach((payload) => this.insert(payload))
	}

	get length() { return this.payloads.length }

	/**
	 * Insert a Payload into the PayloadArray while maintaining position order.
	 *
	 * @param  {Payload} payload The Payload to be inserted.
	 * @return {PayloadArray}    This PayloadArray to allow for chaining.
	 */
	insert = (payload) => {
		if (!(payload instanceof Payload)) {
			throw new Error('Attempt to insert a non-Payload to PayloadArray')
		}
		const index = this.indexOfPosition(payload.position)
		this.payloads.splice(index, 0, payload)
		return this
	}

	/**
	 * Find the index of the first Payload whose position is greater than or equal to this one.
	 *
	 * If no qualifying payloads exist, this will return the length of the PayloadArray, because
	 * the implied position for the payload is the end of the array.
	 *
	 * @param  {Number} position The position being searched for.
	 * @return {Number}          The index of the item, or the PayloadArray length.
	 */
	indexOfPosition = (position) => {
		const recursiveSearch = (sortedPayloads, target, left, right) => {
			if (left === right) return left
			const index = Math.floor((left + right) / 2)
			if (index === sortedPayloads.length) return index
			const payload = sortedPayloads[index]
			if (payload.position === target) return index
			if (payload.position < target) {
				return recursiveSearch(sortedPayloads, target, index + 1, right)
			}
			if (payload.position > target) return recursiveSearch(sortedPayloads, target, left, index)
			return index
		}
		return recursiveSearch(this.payloads, position, 0, this.payloads.length)
	}

	/**
	 * Filter out the Payloads of the specified type.
	 *
	 * NOTE: This returns a new PayloadArray and does not modify the original.
	 *
	 * @param  {String} type  The type of payload to include in the new PayloadArray.
	 * @return {PayloadArray} A filtered PayloadArray.
	 */
	filterByType = (type) => {
		const filteredPayloadArray = new PayloadArray()
		filteredPayloadArray.payloads = this.payloads.filter(
			(payload) => RegExp(`^${type.replace(/\.ANY$/, '.*')}$`).test(payload.type),
		)
		return filteredPayloadArray
	}

	/**
	 * Filter out the Payloads that exist within a specified duration.
	 *
	 * This returns a new PayloadArray and does not modify the original.
	 *
	 * @param  {Number} start The start position.
	 * @param  {Number} end   The optional end position; if omitted, will
	 *                        include the remainder of the array.
	 * @return {PayloadArray} A filtered PayloadArray.
	 */
	filterByPosition = (start, end = null) => {
		const filteredPayloadArray = new PayloadArray()
		filteredPayloadArray.payloads = this.payloads.filter(
			(payload) => (payload.position >= start
				&& (end === null
					|| payload.position <= end)),
		)
		return filteredPayloadArray
	}

	/**
	 * Copy the content of the PayloadArray to a vanilla Array.
	 *
	 * @return {Array} The resulting Array.
	 */
	toArray = () => [...this.payloads]
}

export default PayloadArray
