import { IAppliance } from '../..'

class FullyImplementedAppliance extends IAppliance {
	audit = async () => true

	isValidPayload = async () => true

	start = async () => true

	stop = async () => true

	invoke = async () => true

	ingestPayload = async () => true

	static getInputTypes = () => []

	static getOutputTypes = () => []
}

export { FullyImplementedAppliance }
