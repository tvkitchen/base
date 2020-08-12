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
		it('should support the log() method', () => {
			const consoleLogCopy = console.log
			console.log = jest.fn()
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toHaveProperty('log')
			expect(typeof appliance.logger.log).toBe('function')
			expect(() => appliance.logger.log('customLevel', 'Test message')).not.toThrow()
			expect(console.log).toHaveBeenCalledTimes(1)
			console.log = consoleLogCopy
		})
		it('should support the fatal() method', () => {
			const consoleLogCopy = console.log
			console.log = jest.fn()
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toHaveProperty('fatal')
			expect(typeof appliance.logger.fatal).toBe('function')
			expect(() => appliance.logger.fatal('Test message')).not.toThrow()
			expect(console.log).toHaveBeenCalledTimes(1)
			console.log = consoleLogCopy
		})
		it('should support the error() method', () => {
			const consoleLogCopy = console.log
			console.log = jest.fn()
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toHaveProperty('error')
			expect(typeof appliance.logger.error).toBe('function')
			expect(() => appliance.logger.error('Test message')).not.toThrow()
			expect(console.log).toHaveBeenCalledTimes(1)
			console.log = consoleLogCopy
		})
		it('should support the warn() method', () => {
			const consoleLogCopy = console.log
			console.log = jest.fn()
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toHaveProperty('warn')
			expect(typeof appliance.logger.warn).toBe('function')
			expect(() => appliance.logger.warn('Test message')).not.toThrow()
			expect(console.log).toHaveBeenCalledTimes(1)
			console.log = consoleLogCopy
		})
		it('should support the info() method', () => {
			const consoleLogCopy = console.log
			console.log = jest.fn()
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toHaveProperty('info')
			expect(typeof appliance.logger.info).toBe('function')
			expect(() => appliance.logger.info('Test message')).not.toThrow()
			expect(console.log).toHaveBeenCalledTimes(1)
			console.log = consoleLogCopy
		})
		it('should support the debug() method', () => {
			const consoleLogCopy = console.log
			console.log = jest.fn()
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toHaveProperty('debug')
			expect(typeof appliance.logger.debug).toBe('function')
			expect(() => appliance.logger.debug('Test message')).not.toThrow()
			expect(console.log).toHaveBeenCalledTimes(1)
			console.log = consoleLogCopy
		})
		it('should support the trace() method', () => {
			const consoleLogCopy = console.log
			console.log = jest.fn()
			const appliance = new PartiallyImplementedAppliance()
			expect(appliance.logger).toHaveProperty('trace')
			expect(typeof appliance.logger.trace).toBe('function')
			expect(() => appliance.logger.trace('Test message')).not.toThrow()
			expect(console.log).toHaveBeenCalledTimes(1)
			console.log = consoleLogCopy
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
