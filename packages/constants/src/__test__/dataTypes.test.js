import { dataTypes } from '..'

describe('dataTypes', () => {
	describe('constant buckets', () => {
		it('should be objects', () => {
			Object.keys(dataTypes).forEach((bucketName) => {
				expect(typeof dataTypes[bucketName]).toBe('object')
			})
		})
		it('should be named according to bucket naming conventions', () => {
			const validNamePattern = /[a-zA-Z0-9_]{1,16}/
			Object.keys(dataTypes).forEach((bucketName) => {
				expect(bucketName).toMatch(validNamePattern)
			})
		})
		it('should have an `ANY` attribute', () => {
			Object.keys(dataTypes).forEach((bucketName) => {
				expect(dataTypes[bucketName]).toHaveProperty('ANY')
			})
		})
	})

	describe('constants', () => {
		it('should be named according to constant naming conventions', () => {
			const validNamePattern = /[a-zA-Z0-9_]{1,32}/
			Object.keys(dataTypes).forEach((bucketName) => {
				const bucket = dataTypes[bucketName]
				const constantNames = Object.keys(bucket)
				constantNames.forEach((constantName) => {
					expect(constantName).toMatch(validNamePattern)
				})
			})
		})
	})

	describe('constant values', () => {
		it('should match constant bucket and name', () => {
			Object.keys(dataTypes).forEach((bucketName) => {
				const bucket = dataTypes[bucketName]
				const constantNames = Object.keys(bucket)
				constantNames.forEach((constantName) => {
					const constantValue = bucket[constantName]
					expect(typeof constantValue).toBe('string')
					expect(constantValue).toBe(`${bucketName}.${constantName}`)
				})
			})
		})
	})
})
