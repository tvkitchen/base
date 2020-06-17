import { logLevels } from '..'

describe('logLevels', () => {
	describe('entries', () => {
		it('should be camelCase', () => {
			Object.keys(logLevels).forEach((logLevel) => {
				expect(logLevel).toMatch(/^[a-z][a-zA-Z]*$/)
			})
		})
		it('should have a value that matches the constant name', () => {
			Object.keys(logLevels).forEach((logLevel) => {
				expect(logLevels[logLevel]).toEqual(logLevel)
			})
		})
	})
})
