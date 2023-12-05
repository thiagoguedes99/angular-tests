import { appConfig } from './app.config'


describe('AppConfig', () => {

  it('should to valid the providers.length', () => {
    expect(appConfig.providers.length).toBe(2);
  });

});
