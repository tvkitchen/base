import { sortedIndexBy } from './tools/utils/sortedArray'
import { Payload } from './Payload'

/**
 * PayloadArray stores a series of Payloads in a data structure that allows for easy filtering
 * and lookup by position and type.
 */
class PayloadArray {
	payloads = []

	constructor(...payloads) {
		payloads.forEach((payload) => this.insert(payload))
	}

	get length() { return this.payloads.length }

	/**
	 * Insert a Payload into the PayloadArray while maintaining position order.
	 *
	 * @param  {Payload} payload The Payload to be inserted.
	 * @return {PayloadArray}    This PayloadArray to allow for chaining.
	 */
	insert = (payload) => {
		if (!Payload.isPayload(payload)) {
			throw new Error('Attempt to insert a non-Payload to PayloadArray')
		}
		const index = this.indexOfPosition(payload.position)
		this.payloads.splice(index, 0, payload)
		return this
	}

	/**
	 * Remove all payloads from the PayloadArray.
	 *
	 * @return {null}
	 */
	empty() {
		this.payloads = []
	}

	/**
	 * Find the index to which a payload with a given position would be inserted.
	 *
	 * @param  {Number}  position      The position being searched for.
	 * @param  {Boolean} returnHighest Whether to return the lowest (false) or highest (true) index.
	 * @return {Number}          The index of the item, or the PayloadArray length.
	 */
	indexOfPosition(position, returnHighest = false) {
		return sortedIndexBy(
			this.payloads,
			position,
			(payload) => payload.position,
			returnHighest,
		)
	}

	/**
	 * Create a new PayloadArray containing only Payloads of the specified type.
	 *
	 * @param  {String} type  The type of payload to include in the new PayloadArray.
	 * @return {PayloadArray} A filtered PayloadArray.
	 */
	filterByType(type) {
		const filteredPayloadArray = new PayloadArray()
		const typeStem = type.endsWith('.ANY') ? type.slice(0, -3) : type
		filteredPayloadArray.payloads = this.payloads.filter(
			(payload) => payload.type.startsWith(typeStem),
		)
		return filteredPayloadArray
	}

	/**
	 * Create a new PayloadArray containing only Payloads that exist within a specified duration.
	 *
	 * @param  {Number} start The start position.
	 * @param  {Number} end   The optional end position; if omitted, will
	 *                        include the remainder of the array.
	 * @return {PayloadArray} A filtered PayloadArray.
	 */
	filterByPosition(start, end = null) {
		const left = this.indexOfPosition(start)
		const right = (end === null) ? this.payloads.length : this.indexOfPosition(end, true)
		const filteredPayloadArray = new PayloadArray()
		filteredPayloadArray.payloads = this.payloads.slice(left, right)
		return filteredPayloadArray
	}

	/**
	 * Copy the content of the PayloadArray to a vanilla Array.
	 *
	 * @return {Array} The resulting Array.
	 */
	toArray() { return [...this.payloads] }

	/**
	 * Get the earliest position represented in this PayloadArray.
	 *
	 * @return {Number} The position of the first payload.
	 */
	getPosition() {
		return this.payloads[0].position
	}

	/**
	 * Get the origin timestamp of this PayloadArray.
	 *
	 * @return {String} The ISO string of the first payload's origin
	 */
	getOrigin() {
		return this.payloads[0].origin
	}

	/**
	 * Get the duration represented by this PayloadArray.
	 *
	 * @return {Number} The duration covered by this PayloadArray
	 */
	getDuration() {
		const firstPayload = this.payloads[0]
		const [lastPayload] = this.payloads.slice(-1)
		return lastPayload.position - firstPayload.position + lastPayload.duration
	}

	/**
	 * A comprehensive list of attributes that an object must have to be considered a PayloadArray.
	 *
	 * This attribute is INTERNAL and should not be relied on; it may be removed and only exists
	 * as an optimization to the isPayloadArray method.
	 *
	 * @type {Array}
	 */
	static duckTypeProperties = Object.getOwnPropertyNames(new PayloadArray())

	/**
	 * Checks whether an object is an instance of a PayloadArray.
	 *
	 * This uses duck typing, rather than instanceof, since we can't rely on the prototype chain
	 * matching across packages and versions.
	 *
	 * @param  {Object} obj The object being tested.
	 * @return {Boolean}     The result of the duck test.
	 */
	static isPayloadArray(obj) {
		return PayloadArray.duckTypeProperties
			.every((property) => Object.prototype.hasOwnProperty.call(obj, property))
	}
}

export { PayloadArray }
