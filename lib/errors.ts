// tslint:disable:max-line-length

import rorre from 'rorre'

export default rorre.declare({
  ERR_CMD_ACTN_V_UND: `The command action is mandatory and must be set.`,
  ERR_CMD_ACTN_V_TYP: `The command (or program) action must be a function.`,
  ERR_CMD_DESC_V_UND: `The command (or program) description is mandatory and must be set.`,
  ERR_CMD_DESC_V_LEN: `The command (or program) description can't be empty.`,
  ERR_CMD_DESC_V_TYP: `The command (or program) description is mandatory and must be a string.`,

  ERR_FLT_TYPE_I_UND: `The filter type is undefined. Did you attempt to call #isBoolean() from an unset filter?`,

  ERR_OPT_DESC_V_LEN: `[Option: "%s"] The option description can't be empty.`,
  ERR_OPT_DESC_V_TYP: `[Option: "%s"] The option description is mandatory and must be a string.`,
  ERR_OPT_FILT_V_TYP: `[Option: "%s"] The option filter is not processable as is. Specify, at least, both the obligation and type.`,
  ERR_OPT_FILT_V_TYP_C: `[Option: "%s"] If you want to use a custom option filter, this filter must be a function.`,
  ERR_OPT_SLUG_V_FMT: `[Option: "%s"] The option slug format is wrong.`,
  ERR_OPT_SLUG_V_LEN: `The option slug can't be empty.`,
  ERR_OPT_SLUG_V_TYP: `The option slug is mandatory and must be a string.`,

  ERR_PRG_ARGS_V_LEN: `Something went wrong during the arguments validation (length < 2).`,
  ERR_PRG_ARGS_V_TYP: `Something went wrong during the arguments validation (not an array).`,
  ERR_PRG_NAME_V_UND: `The program name has not been set and can't be found in your package.json.`,
  ERR_PRG_NAME_V_LEN: `The program name can't be empty.`,
  ERR_PRG_NAME_V_TYP: `The program is mandatory and name must be a string.`,
  ERR_PRG_VERS_V_UND: `The version has not been set and can't be found in your package.json.`,
  ERR_PRG_VERS_V_SEM: `The program version is not a valid SemVer string. Please check https://semver.org to get more info.`,
  ERR_PRG_VERS_V_TYP: `The program version must be a string.`,
  ERR_PRG_VERS_V_NOV: `The version you set can't start with a "v" or a "V". If you want to declare "vX.Y.Z", just declare "X.Y.Z".`,

  ERR_VAL_DESC_V_LEN: `[Value: "%s"] The value description can't be empty.`,
  ERR_VAL_DESC_V_TYP: `[Value: "%s"] The value description is mandatory and must be a string.`,
  ERR_VAL_NAME_V_LEN: `The value name can't be empty.`,
  ERR_VAL_NAME_V_TYP: `The value name is mandatory and must be a string.`,
})
