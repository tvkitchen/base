import {
	InterfaceInstantiationError,
	NotImplementedError,
} from '@tvkitchen/base-errors'
import { IAppliance } from '..'
import {
	FullyImplementedAppliance,
	PartiallyImplementedAppliance,
} from './classes'

describe('IAppliance', () => {
	describe('constructor', () => {
		it('should throw an error when called directly', () => {
			expect(() => {
				new IAppliance() // eslint-disable-line no-new
			}).toThrow(InterfaceInstantiationError)
		})

		it('should throw an error when getInputTypes() is called without implementation', () => {
			const implementedAppliance = new PartiallyImplementedAppliance()
			expect(() => implementedAppliance.getInputTypes()).toThrow(NotImplementedError)
		})

		it('should allow construction when extended', () => {
			expect(() => {
				new PartiallyImplementedAppliance() // eslint-disable-line no-new
			}).not.toThrow(Error)
		})
	})

	describe('getOutputTypes', () => {
		it('should throw an error when called without implementation', () => {
			const appliance = new PartiallyImplementedAppliance()
			expect(() => appliance.getOutputTypes()).toThrow(NotImplementedError)
		})

		it('should not throw an error when called with implementation', () => {
			const appliance = new FullyImplementedAppliance()
			expect(() => appliance.getOutputTypes()).not.toThrow(NotImplementedError)
		})
	})

	describe('isValidPayload', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.isValidPayload())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.isValidPayload()).toBeDefined()
		})
	})

	describe('setup', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.setup())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.setup()).toBeDefined()
		})
	})

	describe('teardown', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.teardown())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.teardown()).toBeDefined()
		})
	})

	describe('invoke', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.invoke())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.invoke()).toBeDefined()
		})
	})

	describe('ingestPayload', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.ingestPayload())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.ingestPayload()).toBeDefined()
		})
	})

	describe('getInputTypes', () => {
		it('should throw an error when called without implementation', () => {
			const appliance = new PartiallyImplementedAppliance()
			expect(() => appliance.getInputTypes()).toThrow(NotImplementedError)
		})

		it('should not throw an error when called with implementation', () => {
			const appliance = new FullyImplementedAppliance()
			expect(() => appliance.getInputTypes()).not.toThrow(NotImplementedError)
		})
	})

	describe('on', () => {
		it('should throw an error when called without implementation', () => {
			const appliance = new PartiallyImplementedAppliance()
			expect(() => appliance.on()).toThrow(NotImplementedError)
		})

		it('should not throw an error when called with implementation', () => {
			const appliance = new FullyImplementedAppliance()
			expect(() => appliance.on()).not.toThrow(NotImplementedError)
		})
	})

	describe('emitResult', () => {
		it('should throw an error when called without implementation', () => {
			const appliance = new PartiallyImplementedAppliance()
			expect(() => appliance.emitResult()).toThrow(NotImplementedError)
		})

		it('should not throw an error when called with implementation', () => {
			const appliance = new FullyImplementedAppliance()
			expect(() => appliance.emitResult()).not.toThrow(NotImplementedError)
		})
	})
})
