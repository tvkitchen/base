import { applianceEvents } from '..'

describe('applianceEvents', () => {
	describe('constants', () => {
		it('should have capitalized names', () => {
			const validNamePattern = /[A-Z_]{1,32}/
			Object.keys(applianceEvents).forEach((constantName) => {
				expect(constantName).toMatch(validNamePattern)
			})
		})
	})
})
