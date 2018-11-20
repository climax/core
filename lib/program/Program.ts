/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import errors from '../errors'
import validateSemVer from '../utils/validateSemVer'
import Option from './Option'
import { OptionFilter } from './Option.d'

class Program {
  private _description: string
  private _name: string
  private _options: Option[] = []
  private _version: string

  public description(description?: string): string | Program {
    if (typeof description === 'undefined') {
      switch (true) {
        case this._description === undefined:
          throw errors.error.ERR_PROGRAM_DESCRIPTION_UNDEFINED
      }

      return this._description
    }

    switch (true) {
      case typeof description !== 'string':
        throw errors.error.ERR_PROGRAM_DESCRIPTION_VALIDATION_TYPE

      case description.length === 0:
        throw errors.error.ERR_PROGRAM_DESCRIPTION_VALIDATION_LENGTH
    }

    this._description = description

    return this
  }

  public name(name?: string): string | Program {
    if (typeof name === 'undefined') {
      switch (true) {
        case this._name === undefined:
          throw errors.error.ERR_PROGRAM_NAME_UNDEFINED
      }

      return this._name
    }

    switch (true) {
      case typeof name !== 'string':
        throw errors.error.ERR_PROGRAM_NAME_VALIDATION_TYPE

      case name.length === 0:
        throw errors.error.ERR_PROGRAM_NAME_VALIDATION_LENGTH
    }

    this._name = name

    return this
  }

  public version(version?: string): string | Program {
    if (typeof version === 'undefined') {
      switch (true) {
        case this._version === undefined:
          throw errors.error.ERR_PROGRAM_VERSION_UNDEFINED
      }

      return this._version
    }

    switch (true) {
      case typeof version !== 'string':
        throw errors.error.ERR_PROGRAM_VERSION_VALIDATION_TYPE

      case version.length !== 0 && version[0].toLocaleLowerCase() === 'v':
        throw errors.error.ERR_PROGRAM_VERSION_VALIDATION_V

      case !validateSemVer(version):
        throw errors.error.ERR_PROGRAM_VERSION_VALIDATION_SEMVER
    }

    this._version = version

    return this
  }

  public option(slug: string, description: string, filter?: OptionFilter) {
    this._options.push(new Option(slug, description, filter))
  }
}

export default new Program()