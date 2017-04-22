/**
 * request.js 
 * @param {string} url  发送请求的url
 * @param {obj} opts 配置对象
 *     @property {boolean} async 是否异步 true: 异步 false: 同步 [默认值: true]
 *     @property {obj} data 传输的数据 [默认值: {}]
 *     @property {string} type 传输的数据类型  [默认值: 'json']
 *     @property {string} method 请求类型 [默认值: 'GET']
 *     @property {boolean} reset 请求是否带上时间戳避免缓存 true: 带时间戳 false: 不带时间戳 [默认值: true] 
 *     @property {boolean} progress 上传是否显示进度条 true: 显示 false: 不显示 [默认值: false] 一般给图片等文件上传专用
 */
export default class Request{
    request(url, opts) {
        //初始化opts
        var opts = opts || {
            async: true,
            data: {},
            type: 'json',
            method: 'GET',
            reset: true
        };
        //1.创建XHR对象
        var XHR = this.createXHR();
        //url拼接，是否加时间戳避免缓存
        var url = this.exchangeURL(url, opts.reset);
        // opts.data = exchangeData(opts.data);
        console.log(opts);
        if(opts.progress === true) {
            var index = opts.data.index;
            opts.data = this.exchangeImgData(opts.data.imgData);
            XHR.upload.addEventListener('progress',function(evt) {
                if(evt.lengthComputable) {
                    var complete = (evt.loaded / evt.total * 100 | 0);
                    // console.log(complete);
                    opts.onProgress(complete, index);
                    //到时给progress进度条使用
                    // progress.value = progress.innerHTML = complete;
                    // progress.style.width = (progress.value*6)+"px";
                }
            },false);
            XHR.addEventListener('load', function(evt) {
                //到时给progress进度条使用
                opts.onProgressEnd(index);
                // progress.value = progress.innerHTML = 100;
                // console.log(evt);
                // console.log('上传完毕');
            }, false);
            XHR.addEventListener('error', function(evt) {
                console.log('上传时发生错误');
            }, false);
            XHR.addEventListener('abort', function(evt) {
                console.log('上传时发生错误');
            }, false);
            //2.连接服务器
            XHR.open(opts.method, url);
            //3.发送数据
            XHR.send(opts.data);
        }else{
            //2.连接服务器
            XHR.open(opts.method, url, opts.async);
            //3.发送数据
            XHR.send(opts.data);
        }
        //4.接收返回数据
        XHR.onreadystatechange = this.getState.bind(XHR, opts);
    };

    /**
     * 创建XHR对象
     */
    createXHR() {
        if(window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }else if(window.ActiveXObject) {
            //IE6.0
            return new ActiveXObject("Microsoft.XMLHttp");
        }else{
            alert('您的浏览器不支持XHR对象，请升级浏览器');
        }
    };

    /**
     * 转换URL的函数
     * @param {string} url 发送请求的url
     * @param {boolean} reset 请求是否带上时间戳避免缓存 true: 带时间戳 false: 不带时间戳 [默认值: true]
     */
    exchangeURL(url, reset) {
        if(reset) {
            return url+'?t='+new Date().getTime();
        }else {
            return url;
        }
    };

    /**
     * 转换Data的函数
     * @param {obj} data 传输的数据 [默认值: {}]
     */
    // var exchangeData = function(data) {
    //     var arr = [];
    //     for (var i in data) { 
    //         arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    //     }
    //     return arr.join('&');
    // };

    /**
     * 转换Data的函数,专门给图片使用
     * @param {obj} data 传输的数据 [默认值: {}]
     */
    exchangeImgData(data) {
        var imgDataSplit = data.toString().split(',')[1];
        var imgData = window.atob(imgDataSplit);
        var ia = new Uint8Array(imgData.length);
        for (var j = 0; j < imgData.length; j++) {
            ia[j] = imgData.charCodeAt(j);
        };
        // canvas.toDataURL 返回的默认格式就是 image/jpeg
        var blob=new Blob([ia], {type:"image/jpeg"});
        var formData = new FormData();
        formData.append('file', blob);

        return formData; 
    };

    /**
     * 获取请求返回
     */
    getState(opts) {
        if(this.readyState == 4) {
            if(this.status == 200) {
                opts.success(this.responseText);        
            }else {
                // opts.fail();
                // alert('请求失败');         
            }
        }
    };
}