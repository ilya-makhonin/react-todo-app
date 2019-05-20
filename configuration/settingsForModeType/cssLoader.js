const cssLoaderConfig = function (mode) {
    const baseConfig = {
        loader: 'css-loader',
        options: {
            url: true,
            import: true,
            camelCase: true,
            sourceMap: true,
        }
    };

    const buildAddOption = {
        modules: true,
        hashPrefix: 'hash',
        sourceMap: false
    };

    if (mode === 'development') return baseConfig;
    if (mode === 'production') {
        return {
            ...baseConfig,
            options: {
                ...baseConfig.options,
                ...buildAddOption
            }
        };
    }
};


module.exports = cssLoaderConfig;
