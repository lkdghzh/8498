module.exports = {
    root: true,
    parserOptions: {
        sourceType: "module"
    },
    env: {
        es6: true,
        node: true
    },
    globals: {
        document: false,
        navigator: false,
        window: false
    },
    rules: {
        'no-eval': 2,
        'no-extra-semi': 2,
        "no-unused-vars": 2,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    }
}