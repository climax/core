import errors from '../errors'
import Option from '../option'
import Value from '../value'

import * as T from './types'
import * as OptionT from '../option/types'
import * as ValueT from '../value/types'

export default class Command implements T.Command {
  protected _action: T.CommandAction
  protected _description: string
  protected _options: OptionT.Option[] = []
  protected _values: ValueT.Value[] = []

  /**
   * Getter/Setter for the command (or program) description.
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
   * Declare the callback to run for this command (or program).
   */
  public action(callback: T.CommandAction): Command {
    switch (true) {
      case typeof callback !== 'function':
        throw errors.error.ERR_COMMAND_ACTION_VALIDATION_TYPE
    }

    this._action = callback

    return this
  }

  /**
   * Declare a new command (or program) option.
   *
   * @description
   * The <slug> parameter must be a valid slug, i.e.: "-s, --sluggy-slug" or
   * "--sluggy-slug".
   */
  public option(
    slug: string,
    description: string,
    filter?: OptionT.OptionFilter,
  ): Command {
    switch (true) {
      case typeof slug !== 'string':
        throw errors.error.ERR_COMMAND_OPTION_SLUG_VALIDATION_TYPE

      case slug.length === 0:
        throw errors.error.ERR_COMMAND_OPTION_SLUG_VALIDATION_LENGTH

      case typeof description !== 'string':
        throw errors.error.ERR_COMMAND_OPTION_DESCRIPTION_VALIDATION_TYPE

      case description.length === 0:
        throw errors.error.ERR_COMMAND_OPTION_DESCRIPTION_VALIDATION_LENGTH
    }

    this._options.push(new Option(slug, description, filter))

    return this
  }

  /**
   * Declare a new command (or program) value.
   *
   * @description
   * The <name> parameter MUST be in camelCase and will be used as a placeholder
   * for the help description of this command (or program).
   */
  public value(name: string, description: string): Command {
    this._values.push(new Value(name, description))

    switch (true) {
      case typeof name !== 'string':
        throw errors.error.ERR_COMMAND_VALUE_NAME_VALIDATION_TYPE

      case name.length === 0:
        throw errors.error.ERR_COMMAND_VALUE_NAME_VALIDATION_LENGTH

      case typeof name !== 'string':
        throw errors.error.ERR_COMMAND_VALUE_DESCRIPTION_VALIDATION_TYPE

      case name.length === 0:
        throw errors.error.ERR_COMMAND_VALUE_DESCRIPTION_VALIDATION_LENGTH
    }

    return this
  }
}
