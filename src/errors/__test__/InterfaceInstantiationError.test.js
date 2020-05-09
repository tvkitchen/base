import { InterfaceInstantiationError } from '..'

describe('InterfaceInstantiationError', () => {
	describe('constructor', () => {
		it('should construct when provided no parameters', () => {
			const error = new InterfaceInstantiationError()
			expect(error).not.toBeUndefined()
			expect(error.message).toBe('')
		})
		it('should construct when provided an interface name', () => {
			const interfaceName = 'IClassInterface'
			const error = new InterfaceInstantiationError(interfaceName)
			expect(error).not.toBeUndefined()
			expect(error.message).toEqual(expect.stringContaining(interfaceName))
		})
		it('should properly throw when provided no parameters', () => {
			const t = () => {
				throw new InterfaceInstantiationError()
			}
			expect(t).toThrow(InterfaceInstantiationError)
		})
		it('should properly throw when provided an interface name', () => {
			const interfaceName = 'IClassInterface'
			const t = () => {
				throw new InterfaceInstantiationError(interfaceName)
			}
			expect(t).toThrow(InterfaceInstantiationError)
		})
	})
})
