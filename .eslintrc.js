module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },
  env:{
    node: true,
  },
  rules:{
    quotes:['error','single',{
      avoidEscape:true
    }],
  },
}