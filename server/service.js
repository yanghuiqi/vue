let rp = require('request-promise');
let requestHost = 'http://localhost:8080';

let rpUtil = {
    get: (url, header, req, res, callback) => {
        (async () => {
            try{
                let rpRes = await rp(url);
                if(typeof rpRes == 'string') {
                    let resErr = false;
                    try{
                        JSON.parse(rpRes);
                    }catch(err) {
                        resErr = true;
                        console.log(err)
                        console.log(resStr);
                        res.json({status: 500, messge: '服务器返回错误'});
                    }
                    if(!resErr) {
                        callback(JSON.parse(rpRes));
                    }
                }else if(typeof rpRes == 'object') {
                    callback(rpRes);
                }
            }catch(error) {
                console.log(`statusCode: ${error.statusCode}`)
                console.log(`error: ${error.error}`);
                console.log(`message: ${error.message}`);
                res.json({status: 500, messge: '请求服务器错误'})
            }
        })();
    }
};
module.exports = {
    search: (req, res) => {
        let args = req.query;
        rpUtil.get(`${requestHost}/search?keywords=${encodeURIComponent(args.keywords)}&offset=${args.offset || 0}&type=${args.type || 1}&limit=${args.limit || 30}`, null, req, res, (body) => {
            res.json(body);
        });
    },
    musicUrl: (req, res) => {
        let args = req.query;
        rpUtil.get(`${requestHost}/music/url?id=${args.id}`, null, req, res, (body) => {
            res.json(body);
        });
    },
    songDetail: (req, res) => {
        let args = req.query;
        rpUtil.get(`${requestHost}/song/detail?ids=${args.ids}`, null, req, res, (body) => {
            res.json(body);
        });
    },
    personalized: (req, res) => {
        rpUtil.get(`${requestHost}/personalized`, null, req, res, (body) => {
            res.json(body);
        });
    },
    playlistDetail: (req, res) => {
        let args = req.query;
        let id = args.id;
        if(id) {
            rpUtil.get(`${requestHost}/playlist/detail?id=${id}`, null, req, res, (body) => {
                res.json(body);
            });
        }else {
            res.json({status: 500, messge: '缺少参数id'})
        }
    },
    newsong: (req, res) => {
        rpUtil.get(`${requestHost}/personalized/newsong`, null, req, res, (body) => {
            console.log(body)
            res.json(body);
        });
    },
    topAlbum: (req, res) => {
        let args = req.query;
        let offset = args.offset | 0;
        let limit = args.limit || 30;
        rpUtil.get(`${requestHost}/top/album?offset=${offset}&limit=${limit}`, null, req, res, (body) => {
            res.json(body);
        });
    },
    getAlbum: (req, res) => {
        let args = req.query;
        let id = args.id;
        if(id) {
            rpUtil.get(`${requestHost}/album?id=${id}`, null, req, res, (body) => {
                res.json(body);
            });
        }else {
            res.json({status: 500, messge: '缺少参数id'})
        }
    },
    artists: (req, res) => {
        let args = req.query;
        let id = args.id;
        if(id) {
            rpUtil.get(`${requestHost}/artists?id=${id}`, null, req, res, (body) => {
                res.json(body);
            });
        }else {
            res.json({status: 500, messge: '缺少参数id'})
        }
    }
};