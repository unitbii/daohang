/* 搜索栏插件
 * 作者：C.Y
 * 用法：
 * 1、在html中创建元素<div class="search_box" id="search_box">
 * 2、在js中写入以下代码
    var SEARCH_BOX = require('./y-search_box'); // 引入模块
    var search_box = new SEARCH_BOX(); // 创建对象
    search_box.init("search_box"); // init(参数：id)
 */

var yS = require('../y-script');

function SEARCH_BOX() {

    var id = '',
        innerHtml = '',
        ele = null;

    this.html = function(txt) {

        if (typeof txt !== 'undefined') {
            innerHtml = txt;
        } else {
            innerHtml = '<form class="search_form yrow" target="_blank">';
            innerHtml += '<input type="text" name="word" placeholder="搜索...">';
            innerHtml += '<div class="search_control">';
            innerHtml += '<input type="submit" formaction="http://www.baidu.com/baidu" value="百度">';
            innerHtml += '<div class="triangle"><span></span></div>';
            innerHtml += '<ul class="search_list">';
            innerHtml += '<li data-url="https://www.google.com/search" data-name="q">谷歌</li>';
            innerHtml += '<li data-url="http://www.baidu.com/baidu" data-name="word">百度</li>';
            innerHtml += '</ul></div></form>';
        }
    }

    this.reset = function() {

        ele.innerHTML = innerHtml;

        this.css();

        var $ele = $(ele),
            $list = $ele.find("ul.search_list");

        setTimeout(function() {
            $ele.on("click", "div.triangle", function(e) {
                    var $t = $(this);
                    if ($list.is(":hidden")) {
                        $list.attr("data-slideLock", "1").slideDown(200);
                        setTimeout(function() {
                            $list.removeAttr("data-slideLock");
                        }, 100);
                    } else {
                        yS.stopBubble();
                        $list.slideUp(200);
                    }
                })
                .on("click", "ul.search_list li", function(e) {
                    var $t = $(this);
                    $ele.find("input[type='text']").attr("name", $t.attr("data-name"));
                    $ele.find("input[type='submit']").attr("value", $t.html()).attr("formaction", $t.attr("data-url"));
                });
            $("body").on("click", function() {
                if (!$list.attr("data-slideLock")) $list.slideUp(200);
            });
        }, 0);
    }
    this.css = function() {
        var $ele = $(ele);
        $ele.css({
            "font-size": "16px",
            "height": "30px",
            "margin": "10px auto",
            "position": "relative"
        }).find("form.search_form").css({
            "width": "100%",
            "height": "100%"
        }).find("input[type=text]").css({
            "border": "1px solid #bbb",
            "border-color": "#777 #bbb #bbb #777",
            "height": "100%",
            "width": "100%",
            "padding-left": "0.5em",
            "-webkit-box-shadow": "0 0 0px 1000px white inset"
        }).parent().find("div.search_control").css({
            "width": "27%",
            "height": "100%",
            "min-width": "64px",
            "max-width": "74px",
            "position": "absolute",
            "top": '0',
            "right": "0"
        }).find("input[type=submit]").css({
            "background-color": "#333",
            "border": "0",
            "color": "#fff",
            "height": "100%",
            "width": "100%",
            "padding": "0 14px 0 0",
            "outline": "0"
        }).parent().find("div.triangle").hover(function() {
            $(this).css({
                "background-color": "#478dca"
            });
        }, function() {
            $(this).css({
                "background-color": "#333"
            });
        }).css({
            "cursor": "pointer",
            "height": "100%",
            "padding": "12px 3px",
            "position": "absolute",
            "top": "0",
            "right": "0"
        }).find("span").css({
            "border": "4px solid transparent",
            "border-top": "5px solid #fff",
            "display": "block"
        }).parent().parent().find("ul.search_list").css({
            "display": "none",
            "background-color": "#333",
            "color": "#fff",
            "width": "100%",
            "position": "absolute",
            "top": "100%",
            "right": "0",
            "z-index": "10"
        }).find("li").hover(function() {
            $(this).css({
                "background-color": "#478dca"
            });
        }, function() {
            $(this).css({
                "background-color": "#333"
            });
        }).css({
            "cursor": "pointer",
            "line-height": "30px",
            "padding-right": "14px",
            "text-align": "center"
        });
    }
    this.init = function(id, html) {

        console.log("Plugins: SEARCH_BOX init");

        if (id) {
            ele = document.getElementById(id);
            if (ele) {
                this.html(html);
                this.reset();
            } else {
                console.error("找不到id为' " + id + " '的元素");
            }
        } else {
            console.error("请输入元素id");
        }
    }
};

module.exports = SEARCH_BOX;