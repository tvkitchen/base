import IAppliance from '../../IAppliance'

class FullyImplementedAppliance extends IAppliance {
	audit = () => true

	getInputTypes = () => []

	getOutputTypes = () => []

	isValidPayload = async () => true

	setup = async () => null

	teardown = async () => null

	invoke = async () => true

	ingestPayload = async () => true

	on = () => true

	emitResult = () => true
}

export default FullyImplementedAppliance
