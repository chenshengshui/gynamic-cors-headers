module.exports = function (corsReg, allowHeaders = "content-type") {
    return function(req, res, next) {
        var origin = req.headers.origin;
        // 开发环境 或者 域名匹配时
        if (
            (process.env.NODE_ENV &&
                process.env.NODE_ENV.toLowerCase().includes('dev')) ||
                corsReg.test(origin)
        ) {
            res.header('Access-Control-Allow-Origin', origin);
        } else {
            // 不允许访问
            res.header('Access-Control-Allow-Origin', null);
        }
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, GET, POST, DELETE, OPTIONS'
        );
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', allowHeaders);
        
        next();
    };
}