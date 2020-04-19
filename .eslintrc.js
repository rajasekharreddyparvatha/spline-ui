module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'es2017': true
    },
    'overrides': [
        {
            'files': [
                '*.spec.ts',
                '**/testing/**/*.ts'
            ]
        },
        {
            'files': ['*.ts'],
            'parser': '@typescript-eslint/parser',
            'parserOptions': {
                'ecmaVersion': 2020,
                'sourceType': 'module',
                'tsconfigRootDir': __dirname,
                'project': './tsconfig.json'
            },
            'plugins': [
                '@typescript-eslint',
                '@typescript-eslint/tslint',
                '@angular-eslint'
            ],
            'extends': [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ],
            'rules': {
                '@typescript-eslint/no-empty-function': 0,
                '@typescript-eslint/no-var-requires': 0,
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/unbound-method': [
                    'error',
                    {
                        'ignoreStatic': true
                    }
                ],
                '@typescript-eslint/no-non-null-assertion': 0,
                '@typescript-eslint/tslint/config': [
                    'error',
                    {
                        'lintFile': './tslint.json'
                    }
                ],
                '@typescript-eslint/no-namespace': 0,
                'no-inner-declarations': 0,
                'max-lines': 0,
                'brace-style': [
                    'error',
                    'stroustrup'
                ],
                'curly': [
                    'error',
                    'all'
                ],
                'indent': [
                    'error',
                    4,
                    {
                        'SwitchCase': 1,
                        'FunctionDeclaration': {
                            'parameters': 'first'
                        }
                    }
                ],
                '@typescript-eslint/array-type': 'off',
                'arrow-parens': 'off',
                '@angular-eslint/component-class-suffix': 'error',
                '@angular-eslint/contextual-lifecycle': 'error',
                '@angular-eslint/directive-class-suffix': 'error',
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        'type': 'attribute',
                        'prefix': 'app',
                        'style': 'camelCase'
                    }
                ],
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        'type': 'element',
                        'prefix': 'app',
                        'style': 'kebab-case'
                    }
                ],
                'no-restricted-imports': [
                    'error',
                    {
                        'paths': [
                            {
                                'name': 'rxjs/Rx',
                                'message': 'Please import directly from \'rxjs\' instead'
                            }
                        ]
                    }
                ],
                '@typescript-eslint/interface-name-prefix': 'off',
                'max-classes-per-file': 'off',
                'max-len': [
                    'error',
                    {
                        'code': 140
                    }
                ],
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        'accessibility': 'no-public'
                    }
                ],
                '@typescript-eslint/member-ordering': 'error',
                'no-multiple-empty-lines': 'off',
                'no-empty': 'off',
                '@typescript-eslint/no-inferrable-types': [
                    'error',
                    {
                        'ignoreParameters': true
                    }
                ],
                'no-fallthrough': 'error',
                'quote-props': [
                    'error',
                    'as-needed'
                ],
                'sort-keys': 'off',
                'quotes': [
                    'error',
                    'single'
                ],
                'comma-dangle': ['error', 'only-multiline'],
                '@angular-eslint/no-conflicting-lifecycle': 'error',
                '@angular-eslint/no-host-metadata-property': 'error',
                '@angular-eslint/no-input-rename': 'error',
                '@angular-eslint/no-inputs-metadata-property': 'error',
                '@angular-eslint/no-output-native': 'error',
                '@angular-eslint/no-output-on-prefix': 'error',
                '@angular-eslint/no-output-rename': 'error',
                '@angular-eslint/no-outputs-metadata-property': 'error',
                '@angular-eslint/use-lifecycle-interface': 'warn',
                '@angular-eslint/use-pipe-transform-interface': 'error'
            }
        },
        {
            'files': [
                '*.component.html'
            ],
            'parser': '@angular-eslint/template-parser',
            'plugins': [
                '@angular-eslint/template'
            ],
            'rules': {
                '@angular-eslint/template/banana-in-a-box': 'error',
                '@angular-eslint/template/no-negated-async': 'error'
            }
        }
    ]
};