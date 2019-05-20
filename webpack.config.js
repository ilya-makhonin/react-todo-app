const lightConfig = require('./configuration/webpack.light.config');
const buildConfig = require('./configuration/webpack.build.config');


module.exports = function(un, args){
    if (args.mode === 'development') {
        return lightConfig;
    }
    if (args.mode === 'production') {
        return buildConfig;
    }
    return lightConfig;
};
