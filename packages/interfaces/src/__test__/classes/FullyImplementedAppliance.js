// This is a test class so we can ignore the opinionated method requirements
/* eslint-disable class-methods-use-this */
import { IAppliance } from '../..'

class FullyImplementedAppliance extends IAppliance {
	async audit() { return true }

	async isValidPayload() { return true }

	async start() { return true }

	async stop() { return true }

	async invoke() { return true }

	async ingestPayload() { return true }

	static getInputTypes() { return [] }

	static getOutputTypes() { return [] }
}

export { FullyImplementedAppliance }
