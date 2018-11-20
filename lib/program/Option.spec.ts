import errors from '../errors'
import Option from './Option'

const _ = undefined as any

describe(`Option`, () => {
  describe(`#constructor()`, () => {
    it(`should fail with a wrong typed <slug>`, () =>
      expect(() => new Option(1337 as any, _)).toThrow(errors.dictionary.ERR_OPTION_SLUG_VALIDATION_TYPE))
    it(`should fail with an empty string <slug>`, () =>
      expect(() => new Option('', _)).toThrow(errors.dictionary.ERR_OPTION_SLUG_VALIDATION_LENGTH))
    it(`should fail with a malformed <slug>`, () =>
      expect(() => new Option('foo', _)).toThrow(errors.dictionary.ERR_OPTION_SLUG_VALIDATION_FORMAT))
    it(`should fail with a wrong typed <description>`, () =>
      expect(() => new Option('-f --foo', 1337 as any)).toThrow(errors.dictionary.ERR_OPTION_DESCRIPTION_VALIDATION_TYPE))
    it(`should fail with an empty string <description>`, () =>
      expect(() => new Option('-f --foo', '')).toThrow(errors.dictionary.ERR_OPTION_DESCRIPTION_VALIDATION_LENGTH))
    it(`should fail with a wrong typed <filter>`, () =>
      expect(() => new Option('-f --foo', 'foo', 1337 as any)).toThrow(errors.dictionary.ERR_OPTION_FILTER_VALIDATION_TYPE))

    // it(`should pass with a valid description`, () => expect(() => program.description('test')).not.toThrow())
    // it(`should have set the valid description`, () => expect(program.description()).toStrictEqual('test'))
  })
})
