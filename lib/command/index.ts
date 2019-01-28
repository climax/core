import errors from '../errors'
import Option from '../option'

import * as T from './types'
import * as OptionT from '../option/types'

export default class Command implements T.Command {
  protected _description: string
  protected _options: OptionT.Option[] = []

  /**
   * Getter/Setter for the command description.
   */
  public description(description?: string): string | Command {
    if (typeof description === 'undefined') {
      switch (true) {
        case this._description === undefined:
          throw errors.error.ERR_COMMAND_DESCRIPTION_UNDEFINED
      }

      return this._description
    }

    switch (true) {
      case typeof description !== 'string':
        throw errors.error.ERR_COMMAND_DESCRIPTION_VALIDATION_TYPE

      case description.length === 0:
        throw errors.error.ERR_COMMAND_DESCRIPTION_VALIDATION_LENGTH
    }

    this._description = description

    return this
  }

  /**
   * Declare a new command option.
   */
  public option(
    slug: string,
    description: string,
    filter?: OptionT.OptionFilter,
  ): Command {
    this._options.push(new Option(slug, description, filter))

    return this
  }
}
