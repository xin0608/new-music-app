module.exports = {
    plugins: {
        'postcss-pxtorem': {
            // 能够把所有元素的px单位转成Rem
            // rootValue: 转换px的基准值。
            // 例如一个元素宽是75px，则换成rem之后就是2rem。
            rootValue: 37.5,
            propList: ['*']
        }
    }
}
// postcss技术:webpack的插件（转化/降级css的代码）工
// postcss-pxtorem插件