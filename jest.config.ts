import { Config } from '@jest/types'

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/apps/**/*.ts'
    ]
}

export default config