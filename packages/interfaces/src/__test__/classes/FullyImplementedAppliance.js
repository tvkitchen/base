import IAppliance from '../../IAppliance'

class FullyImplementedAppliance extends IAppliance {
	audit = async () => true

	getInputTypes = () => []

	getOutputTypes = () => []

	isValidPayload = async () => true

	setup = async () => null

	teardown = async () => null

	invoke = async () => true

	ingestPayload = async () => true

	on = () => true
}

export default FullyImplementedAppliance
