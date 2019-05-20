const scssLoaderConfig =  function (mode) {
    const basicConfig = {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            implementation: require('sass')
        }
    };

    if (mode === 'development') return basicConfig;
    if (mode === 'production') {
        return {
            ...basicConfig,
            options: {
                ...basicConfig.options,
                sourceMap: false
            }
        };
    }
};


module.exports = scssLoaderConfig;
