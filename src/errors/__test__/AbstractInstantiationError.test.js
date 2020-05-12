import { AbstractInstantiationError } from '..'

describe('AbstractInstantiationError', () => {
	describe('constructor', () => {
		it('should construct when provided no parameters', () => {
			const error = new AbstractInstantiationError()
			expect(error).not.toBeUndefined()
			expect(error.message).toBe('')
		})
		it('should construct when provided a class name', () => {
			const className = 'myAbstractClass'
			const error = new AbstractInstantiationError(className)
			expect(error).not.toBeUndefined()
			expect(error.message).toEqual(expect.stringContaining(className))
		})
		it('should properly throw when provided no parameters', () => {
			const t = () => {
				throw new AbstractInstantiationError()
			}
			expect(t).toThrow(AbstractInstantiationError)
		})
		it('should properly throw when provided a class name', () => {
			const className = 'myAbstractclass'
			const t = () => {
				throw new AbstractInstantiationError(className)
			}
			expect(t).toThrow(AbstractInstantiationError)
		})
	})
})
