/****************************************************************************
 * 公共函数
 * 依赖jQuery
 * author: C.Y
 ***************************************************************************/
var jQuery = require('jquery');
// jQuery.noConflict();

/************************** JS函数(不依赖jquery) ***************************/

//阻止所有默认事件
//event.preventDefault();


//阻止事件冒泡
exports.stopBubble = function(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
};

//检测 屏幕尺寸发生变化
exports.resize = function(fn) {
    fn = fn || function() {};
    var prev_ori = window.orientation;
    window.addEventListener('resize', function() {
        if (prev_ori != window.orientation) {
            prev_ori = window.orientation;
            fn();
        } else if (!window.orientation) fn();
    }, false);
}

//判断ios
exports.check_ios = function(fn) {
    fn = fn || function() {};
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        fn();
        return true;
    } else return false;
}

//判断android
exports.check_android = function(fn) {
    fn = fn || function() {};
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    if (isAndroid) {
        fn();
        return true;
    } else return false;
}

//判断微信
exports.isWeiXin = function(fn) {
    fn = fn || function() {};
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        fn();
        return true;
    } else return false;
}

//判断当中文输入法输入时，cpLock开(true)
exports.cpCheck = function() {
    CPLOCK = false;
    jQuery("form").on('compositionstart', "input,textarea", function(e) {
        CPLOCK = true;
    });
    jQuery("form").on('compositionend', "input,textarea", function(e) {
        CPLOCK = false;
    });
}

//是否支持H5本地储存
exports.check_H5Storage = function(fn) {
    fn = fn || function() {};
    if (typeof(Storage) !== "undefined") {
        fn();
        return true;
    } else {
        console.log("不支持 web 存储。");
        return false;
    }
}

//设置cookie
exports.setCookie = function(name, value, time) { //默认存在7天
    var days = 7,
        exp = new Date();
    if (isNaN(time)) {
        console.log("time参数无效或不存在，cookie默认保留"+days+"天");
        time = days * 24 * 60 * 60 * 1000;
    }
    exp.setTime(exp.getTime() + time);
    document.cookie = name + '=' + escape(value) + '; expires=' + exp.toGMTString();
}
//获得cookie
exports.getCookie = function(name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg);
    if (arr) {
        return unescape(arr[2]);
    } else return null;
}

//监听屏幕滚动的事件触发过于频繁，我想降低其触发频率
exports.touchmove = function(fn, interval) {
    interval = interval || 100; //默认间隔100毫秒
    var Y_touchmove_trigger_clock = 1; //全局锁
    window.document.onscroll = function() {
        if (Y_touchmove_trigger_clock == 1) {
            Y_touchmove_trigger_clock = 0;
            setTimeout(function() {
                fn();
                Y_touchmove_trigger_clock = 1;
            }, interval);
        }
    }
}

// 图片加载之后执行
exports.loadImage = function(url, callback) {
    var img = new Image(); //创建一个Image对象，实现图片的预下载
    img.src = url;
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
        callback.call(img);
        return;
    }
    img.onload = function() { //图片下载完毕时异步调用callback函数。
        callback.call(img); //将回调函数的this替换为Image对象
    };
};

// 获取目标节点距离页面顶部高度
exports.getScrollTop = function(el) {
    var tp = el.offsetTop;
    if (el.offsetParent) {
        while (el = el.offsetParent) {
            tp += el.offsetTop;
        }
    }
    return tp;
}

/* 复制：只限PC端谷歌浏览器，安卓、微信和苹果浏览器均不可用(不建议使用)
 * 另一种复制插件可解决微信和苹果浏览器复制问题，android浏览器依然无法复制
 * 依赖<script src="/clipboard.min.js"></script>
 *  <button data-clipboard-action="copy" data-clipboard-target="css选择器" data-clipboard-text="或者直接复制这里的内容">点我复制</button>
    <script>
        var clipboard = new Clipboard('.btn');
        clipboard.on('success', function(e) {
            console.log("复制成功");
        });
        clipboard.on('error', function(e) {
            console.log("复制失败");
        });
    </script>
 */
exports.copy = function(txt) {
    var id = "copy_input_" + new Date().getTime(),
        ele = "<input id='" + id + "' style='opacity:0;position:absolute;height:0;' value='" + txt + "'>";
    document.getElementsByTagName("body")[0].append(ele);
    setTimeout(function() {
        var obj = document.getElementById(id);
        obj.select(); // 选择对象(这个命令只能选择非隐藏文本域内容)
        document.execCommand("Copy"); // 执行浏览器复制命令
        console.log("已复制好，可贴粘。");
        obj.remove();
    }, 0);
}

//字符串(非中文)转换为bate64编码
exports.toBase64 = function(data) {
    var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var base64Pad = '=';

    var result = '';
    var length = data.length;
    var i;
    // Convert every three bytes to 4 ascii characters.

    for (i = 0; i < (length - 2); i += 3) {
        result += toBase64Table[data.charCodeAt(i) >> 2];
        result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
        result += toBase64Table[((data.charCodeAt(i + 1) & 0x0f) << 2) + (data.charCodeAt(i + 2) >> 6)];
        result += toBase64Table[data.charCodeAt(i + 2) & 0x3f];
    }

    // Convert the remaining 1 or 2 bytes, pad out to 4 characters.

    if (length % 3) {
        i = length - (length % 3);
        result += toBase64Table[data.charCodeAt(i) >> 2];
        if ((length % 3) == 2) {
            result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
            result += toBase64Table[(data.charCodeAt(i + 1) & 0x0f) << 2];
            result += base64Pad;
        } else {
            result += toBase64Table[(data.charCodeAt(i) & 0x03) << 4];
            result += base64Pad + base64Pad;
        }
    }
    return result;
}
/* Convert Base64 data to a string */
exports.base64ToString = function(data) {
    var toBinaryTable = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    var base64Pad = '=';

    var result = '';
    var leftbits = 0; // number of bits decoded, but yet to be appended
    var leftdata = 0; // bits decoded, but yet to be appended

    // Convert one by one.
    for (var i = 0; i < data.length; i++) {
        var c = toBinaryTable[data.charCodeAt(i) & 0x7f];
        var padding = (data.charCodeAt(i) == base64Pad.charCodeAt(0));
        // Skip illegal characters and whitespace
        if (c == -1) continue;

        // Collect data into leftdata, update bitcount
        leftdata = (leftdata << 6) | c;
        leftbits += 6;

        // If we have 8 or more bits, append 8 bits to the result
        if (leftbits >= 8) {
            leftbits -= 8;
            // Append if not padding.
            if (!padding)
                result += String.fromCharCode((leftdata >> leftbits) & 0xff);
            leftdata &= (1 << leftbits) - 1;
        }
    }

    // If there are any bits left, the base64 string was corrupted

    if (leftbits)
        throw Components.Exception('Corrupted base64 string');
    return result;
}

/****************************** 需要jquery支持 ******************************/

// 回到顶部
exports.totop = function(time) {
    time = time || 800; //默认800毫秒
    jQuery('html, body').animate({
        scrollTop: '0px'
    }, time);
}

// 触屏移动超过range则清除touchend事件。子代的touchend事件无法清除。
function moveCheck($ele, range) {
    range = range || 6;
    $ele = jQuery($ele);
    $ele.on("touchstart", function(event) {
        var touch = event.originalEvent.targetTouches[0];
        // || event.targetTouches[0];//兼容Zepto（再做考虑）
        startPos = {
            x: touch.pageX,
            y: touch.pageY
        };
    });
    $ele.on('touchmove', function(event) {
        var $t = jQuery(this);
        var touch = event.originalEvent.targetTouches[0];
        // || event.targetTouches[0];//兼容Zepto（再做考虑）
        endPos = {
            x: touch.pageX - startPos.x,
            y: touch.pageY - startPos.y
        };
        if (Math.abs(endPos.x) > range || Math.abs(endPos.y) > range) {
            $t.off("touchend").on("touchend", function() {
                console.log("触摸点移动了,所以清除了touchend事件");
                $t.off('touchend');
            });
        }
    });
}

// 设置固定长宽比
exports.setHeight = function($ele, ratio) {
    ratio = ratio || 1; // ratio=高/宽(默认为1)
    $ele = jQuery($ele);

    function setCss() {
        $ele.css({
            "height": $ele.innerWidth() * ratio + "px"
        });
    }
    setCss();
    window.addEventListener('resize', function() {
        setCss();
    }, false);
}

// input不能填写非数字之外的字符。
exports.inputNum = function($input) {
    $input = jQuery($input);
    $input.on("input", function() {
        this.value = this.value.replace(/[^\d]/ig, '');
    });
}

/**************************** 自定义组件 ********************************/
// 倒计时工具

// 下拉菜单 组件

//
/***************************** 规模插件 *********************************/

/* 自定义弹窗
 *
 */


/* 上传图片
 * 需要执行Y_verifyForm.init()完成初始化。
 * 上传时，执行Y_verifyForm.upimg()来触发上传。具体参数查看方法详情
 * 图片上传还要封装一些功能：1、提示信息；2、
 */


/* 表单验证
 * 初始化：执行 Y_verifyForm.init();
 * 需要在input中添加ytype=""以下定义的表单提交项
 * 目前显示错误信息的元素($showElem)规则是input标签同级的.caution元素: ($showElem=$t.parent().find(".caution"))
 * 这个项目还有待完善：
 *      1、检测分为变化即检测(input)、失去焦点检测(blur)、和剪切模式(cut)。
 *          1.1、检测模式静默打开，无需关闭。
 *      2、展示错误信息的元素可定制，模式可定制、可同时使用和关闭。
 *          2.1、展示错误信息的模式有：普通展示，弹窗展示，自定义。
 *      3、必填项等检测规则深化。
 *          3.1、非必填项为空时，直接通过检测。(或，正确值包括空值)
 *      4、目前只做了button[type=button]检查，其他提交方式没有做。
 * 重要bug：1、首先，该表单验证无法与其他表单验证共同阻止表单提交（不管哪个表单验证代码，一旦完全正确，表单一定会提交，其他表单验证阻止不了表单）
 *          2、重名检测这样，异步等待后台数据的验证，无法写进该表单验证中。
 */