const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages({
     includes:['path','flag']
})
module.exports = {
    configureWebpack: {
        plugins: [
            new tfPages.webpack.DefinePlugin({
                ROUTES: JSON.stringify(tfPages.routes)
            })
        ]
    }
}