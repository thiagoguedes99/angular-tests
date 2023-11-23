const esModule = ['@angular', '@ngrx', 'd3', '@ngx-translate'];

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/app/**/*.ts'],
  coveragePathIgnorePatterns: [
    'setup-jest.ts',
    'public_api.ts',
    '.module.ts',
    '.interface.ts',
    'utils.ts',
    'main.ts',
    'enviroment.ts',
    'enviroment.prod.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  // para o jest entender libs do angular que são feitas com ESM com extensão .mjs
  transformIgnorePatterns: [`node_modules/(?!.*\\.mjs$|${esModule.join('|')})`],


};
