const { defineConfig } = require('@vue/cli-service')
module.exports = { 
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/james_website/' //為github的專案名稱 
  : '/' 
 }
