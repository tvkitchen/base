import { NotImplementedError } from '..'

describe('NotImplementedError', () => {
	describe('constructor', () => {
		it('should construct when provided no parameters', () => {
			const error = new NotImplementedError()
			expect(error).not.toBeUndefined()
			expect(error.message).toBe('')
		})
		it('should construct when provided a method name', () => {
			const methodName = 'myAbstractMethod'
			const error = new NotImplementedError(methodName)
			expect(error).not.toBeUndefined()
			expect(error.message).toEqual(expect.stringContaining(methodName))
		})
		it('should properly throw when provided no parameters', () => {
			const t = () => {
				throw new NotImplementedError()
			}
			expect(t).toThrow(NotImplementedError)
		})
		it('should properly throw when provided a method name', () => {
			const methodName = 'myAbstractMethod'
			const t = () => {
				throw new NotImplementedError(methodName)
			}
			expect(t).toThrow(NotImplementedError)
		})
	})
})
