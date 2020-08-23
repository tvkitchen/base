import IAppliance from '../../IAppliance'

class FullyImplementedAppliance extends IAppliance {
	audit = async () => true

	isValidPayload = async () => true

	start = async () => true

	stop = async () => true

	invoke = async () => true

	ingestPayload = async () => true

	on = () => true

	static getInputTypes = () => []

	static getOutputTypes = () => []
}

export default FullyImplementedAppliance
