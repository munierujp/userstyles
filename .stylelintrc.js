// @ts-check

/** @typedef {import('stylelint').Config} Config */

/**
 * @type {Config}
 * @see https://stylelint.io/user-guide/configure/
 */
const config = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null
  }
}

export default config
