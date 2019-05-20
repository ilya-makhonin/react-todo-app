const configForWorkingWithOutputStyles = function (mode, type='loader') {
    const forDevelopmentStyleLoader = {
        loader: 'style-loader',
        options: {
            hmr: true,
            sourceMap: true,
            singleton: false
        }
    };

    // If user loader this function returned full rule for use property
    if (mode === 'development' && type === 'loader') return forDevelopmentStyleLoader;
    if (mode === 'production' && type === 'loader') {
        return {
            ...forDevelopmentStyleLoader,
            options: {
                ...forDevelopmentStyleLoader.options,
                hmr: false
            }
        };
    }

    // If used mini-css-extract-plugin this function returned only
    // options for use property and config for new plugin instance
    if (mode === 'development' && type === 'plugin') {
        return {
            options: { hmr: true, reloadAll: true },
            forPlugin: {
                filename: '[name].css',
                chunkFilename: '[id].css',
            }
        };
    }
    if (mode === 'production' && type === 'plugin') {
        return {
            options: { hmr: false },
            forPlugin: {
                filename: 'assets/css/[name].[hash].css',
                chunkFilename: 'assets/css/[id].css',
            }
        };
    }
};


module.exports = configForWorkingWithOutputStyles;
