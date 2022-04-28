module.exports = {
  root : true,
  env  : {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential'
  ],
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true
    }
  },

  globals: {
    "_": true
  },
  rules: {
    semi   : ['error', 'always'],
    indent : [
      'error',
      2,
      {
        SwitchCase         : 1,
        VariableDeclarator : 'first',
        MemberExpression   : 1,
        ObjectExpression   : 1,
        ImportDeclaration  : 1,
        ArrayExpression    : 1
      }
    ],
    'prefer-const': [
      'error',
      {
        ignoreReadBeforeAssign: false
      }
    ],
    'arrow-body-style' : 0,
    'arrow-parens'     : 0,
    'linebreak-style'  : 0,
    'key-spacing'      : [
      'error',
      {
        align: {
          beforeColon : true,
          afterColon  : true,
          on          : 'colon'
        }
      }
    ],
    'max-len'                     : 0,
    'generator-star-spacing'      : 'off',
    'space-before-function-paren' : [
      'error',
      {
        anonymous  : 'never',
        named      : 'never',
        asyncArrow : 'always'
      }
    ],
    'new-cap'                      : ['error', { newIsCap: false }],
    'keyword-spacing'              : ['error', { before: true, after: true }],
    'space-before-blocks'          : 'error',
    curly                          : ['error', 'all'],
    eqeqeq                         : ['error', 'always'],
    'array-bracket-spacing'        : ['error', 'never'],
    'array-element-newline'        : ['error', 'consistent'],
    'block-spacing'                : 'error',
    'brace-style'                  : ['error', '1tbs'],
    'comma-dangle'                 : ['error', 'never'],
    'comma-spacing'                : ['error', { before: false, after: true }],
    'comma-style'                  : ['error', 'last'],
    'computed-property-spacing'    : ['error', 'never'],
    'import/prefer-default-export' : 'off',
    'no-underscore-dangle'         : 0,
    'no-plusplus'                  : 0,
    'no-prototype-builtins'        : 0,
    'no-shadow'                    : 0,
    'no-multi-spaces'              : ['error', { exceptions: { VariableDeclarator: true, ImportDeclaration: true, AssignmentExpression: true } }],
    'no-empty-function'            : 'error',
    'no-loop-func'                 : 'error',
    'no-undefined'                 : 'error',
    'no-use-before-define'         : ['error', { functions: true, classes: true }],
    'no-multi-assign'              : 'error',
    'no-duplicate-imports'         : 'error',
    'no-console'                   : process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger'                  : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html'                : 0,
    'vue/no-parsing-error'         : [
      'error',
      {
        'invalid-first-character-of-tag-name': false
      }
    ],
    'vue/attributes-order'                          : 'error',
    'vue/multiline-html-element-content-newline'    : 2,
    'vue/html-closing-bracket-spacing'              : 2,
    'vue/html-closing-bracket-newline'              : 'error',
    'vue/no-spaces-around-equal-signs-in-attribute' : 'error',
    'vue/no-shared-component-data'                  : 'error',
    'vue/require-render-return'                     : 'error',
    'vue/use-v-on-exact'                            : ['error'],
    'vue/valid-template-root'                       : 2,
    'vue/valid-v-bind'                              : 'error',
    'vue/html-end-tags'                             : 'error',
    'vue/html-indent'                               : [
      'error',
      2,
      {
        attribute    : 1,
        baseIndent   : 1,
        closeBracket : 0
      }
    ],
    'vue/html-quotes'       : 'error',
    'vue/html-self-closing' : [
      'error',
      {
        html: {
          void      : 'never',
          normal    : 'always',
          component : 'always'
        },
        svg  : 'always',
        math : 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline : 20,
        multiline  : {
          max: 20
        }
      }
    ],
    'vue/mustache-interpolation-spacing'          : ['error', 'always'],
    'vue/name-property-casing'                    : ['error', 'PascalCase'],
    'vue/no-template-shadow'                      : 'error',
    'vue/singleline-html-element-content-newline' : [
      'error',
      {
        ignoreWhenNoAttributes : true,
        ignoreWhenEmpty        : true
      }
    ],
    'vue/no-confusing-v-for-v-if'    : 'error',
    'vue/this-in-template'           : ['error', 'never'],
    'vue/multi-word-component-names' : 'off'
  }
};
