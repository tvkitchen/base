import IAppliance from '../../IAppliance'

class FullyImplementedAppliance extends IAppliance {
	audit = async () => true

	isValidPayload = async () => true

	setup = async () => null

	teardown = async () => null

	invoke = async () => true

	ingestPayload = async () => true

	on = () => true

	static getInputTypes = () => []

	static getOutputTypes = () => []
}

export default FullyImplementedAppliance
