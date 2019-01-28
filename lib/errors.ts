/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable:max-line-length

import rorre from 'rorre'

export default rorre.declare({
  ERR_COMMAND_DESCRIPTION_UNDEFINED: `The command description has not been set.`,
  ERR_COMMAND_DESCRIPTION_VALIDATION_LENGTH: `The command description can't be empty.`,
  ERR_COMMAND_DESCRIPTION_VALIDATION_TYPE: `The command description can't be empty.`,

  ERR_FILTERS_IS_CONFLICT_MANDATORY_BOOLEAN: `The option description can't be empty.`,

  ERR_OPTION_DESCRIPTION_VALIDATION_LENGTH: `The option description can't be empty.`,
  ERR_OPTION_DESCRIPTION_VALIDATION_TYPE: `The option description is mandatory and must be a string.`,
  ERR_OPTION_FILTER_CUSTOM_VALIDATION_TYPE: `If you want to use a custom option filter, this filter must be a function.`,
  ERR_OPTION_FILTER_INTERNAL_VALIDATION_TYPE: `The option filter is not usable as is. Specify, at least, both the obligation and type.`,
  ERR_OPTION_SLUG_VALIDATION_FORMAT: `The option slug format is wrong.`,
  ERR_OPTION_SLUG_VALIDATION_LENGTH: `The option slug can't be empty.`,
  ERR_OPTION_SLUG_VALIDATION_TYPE: `The option slug is mandatory and must be a string.`,

  ERR_PROGRAM_DESCRIPTION_UNDEFINED: `The program description has not been set.`,
  ERR_PROGRAM_DESCRIPTION_VALIDATION_LENGTH: `The program description can't be empty.`,
  ERR_PROGRAM_DESCRIPTION_VALIDATION_TYPE: `The program description can't be empty.`,
  ERR_PROGRAM_NAME_UNDEFINED: `The program name has not been set.`,
  ERR_PROGRAM_NAME_VALIDATION_LENGTH: `The program name can't be empty.`,
  ERR_PROGRAM_NAME_VALIDATION_TYPE: `The program name must be a string.`,
  ERR_PROGRAM_VERSION_UNDEFINED: `The version has not been set.`,
  ERR_PROGRAM_VERSION_VALIDATION_SEMVER: `The program version is not a valid SemVer string. Please check https://semver.org to get more info.`,
  ERR_PROGRAM_VERSION_VALIDATION_TYPE: `The program version must be a string.`,
  ERR_PROGRAM_VERSION_VALIDATION_V: `The version you set can't start with a "v" or a "V". If you want to declare "vX.Y.Z", just declare "X.Y.Z".`,
})
