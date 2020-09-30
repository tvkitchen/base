// We test logging in this suite
/* eslint-disable no-console */

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

		it('should allow construction when extended', () => {
			expect(() => {
				new PartiallyImplementedAppliance() // eslint-disable-line no-new
			}).not.toThrow(Error)
		})
	})

	describe('logger', () => {
		it('should be defined', () => {
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toBeDefined()
		})
	})

	describe('audit', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.audit())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.audit()).toBeDefined()
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

	describe('start', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.start())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.start()).toBeDefined()
		})
	})

	describe('stop', () => {
		it('should throw an error when called without implementation', async () => {
			const appliance = new PartiallyImplementedAppliance()
			await expect(async () => appliance.stop())
				.rejects.toBeInstanceOf(NotImplementedError)
		})

		it('should not throw an error when called with implementation', async () => {
			const appliance = new FullyImplementedAppliance()
			expect(await appliance.stop()).toBeDefined()
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

	describe('duckTypeProperties', () => {
		it('should contain all properties of an IAppliance', () => {
			const completePropertySet = new Set([
				...IAppliance.duckTypeProperties,
				...Object.getOwnPropertyNames(new FullyImplementedAppliance()),
			])
			expect(completePropertySet.size).toEqual(IAppliance.duckTypeProperties.length)
		})
	})

	describe('isIAppliance', () => {
		it('should properly detect an IAppliance object', () => {
			const appliance = new FullyImplementedAppliance()
			expect(IAppliance.isIAppliance(appliance)).toBe(true)
		})
		it('should properly detect a non-IAppliance object', () => {
			const obj = {}
			expect(IAppliance.isIAppliance(obj)).toBe(false)
		})
		it('should properly detect a non-IAppliance object with common fields', () => {
			const obj = {
				audit: () => true,
			}
			expect(IAppliance.isIAppliance(obj)).toBe(false)
		})
	})

	describe('getInputTypes', () => {
		it('should throw an error when called without implementation', () => {
			expect(() => PartiallyImplementedAppliance.getInputTypes()).toThrow(NotImplementedError)
		})

		it('should not throw an error when called with implementation', () => {
			expect(() => FullyImplementedAppliance.getInputTypes()).not.toThrow(NotImplementedError)
		})
	})

	describe('getOutputTypes', () => {
		it('should throw an error when called without implementation', () => {
			expect(() => PartiallyImplementedAppliance.getOutputTypes()).toThrow(NotImplementedError)
		})

		it('should not throw an error when called with implementation', () => {
			expect(() => FullyImplementedAppliance.getOutputTypes()).not.toThrow(NotImplementedError)
		})
	})
})
