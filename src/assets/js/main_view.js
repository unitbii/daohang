/* 这里是页面主体，包括静态页面和ajax请求 */


var yS = require('./y-script');
var myFileReader = require('./y-myFileReader');
var html_main_view = require('../html/main_view.html');


//floor_03操作方法集合
var F3_ATC = {
    $main_view: null,
    $f3: null,
    init: function(){//初始化
        console.log("F3_ATC执行初始化");
        this.$main_view = $("#main_view");
        this.reset();
    },
    reset: function(){//重置数据
        this.$f3 = this.$main_view.find("nav.floor_03");
        this.resize();
        // F3_ATC.getIcon($sa);
            //检查图片
            // setTimeout(function(){
            //     console.log("开始");
            //     $floor_03.find("a").each(function(){
            //         var $t = $(this);
            //         if($t.find("span:first").html() == "wordpress"){
            //             F3_ATC.getIcon($t);
            //         }
            //     });
            // },1000);
    },
    resize: function(){//容器尺寸变化时触发
        this.reHerght(this.$f3);
    },
    reHerght: function($ele){//设置h0、h1;把第二排标签全部隐藏
        var myself = this;
        $ele.each(function(){
            var $t =$(this),
                $as = $t.find("a"),
                h0 = $t.find("a:first").outerHeight();
            $as.css({"display":"block"});
            $t.attr({"data-h0": h0,"data-h1": $t.find("a:last").position().top + h0})
            .css({"overflow":"visible"});
            myself.hide_a($ele);
        });
    },
    hide_a: function($ele){
        $ele.each(function(){
            var $as = $(this).find("a");
            $as.css({"display":"block"});
            for(var i=$as.length-1;i>=0;i--){//倒着循环每个元素
                if($as[i].offsetTop != 0){
                    $as[i].style.display="none";
                }else {
                    break;
                }
            }
        });
    },
    slideToggle: function($ele){
        if($ele.outerHeight() == $ele.attr("data-h0")){
            this.slideDown($ele);
        }else{
            this.slideUp($ele);
        }
    },
    slideDown: function($ele){
        $ele.each(function(){
            var $t =$(this),
                $as = $t.find("a");
            $as.css({"display":"block"});
            $t.css({"overflow":"hidden"})
            .animate({"height":$t.attr("data-h1")+"px"}, 200, function(){
                $t.css({"overflow":"visible"});
            });
        });
    },
    slideUp: function($ele){
        var myself = this;
        $ele.each(function(){
            var $t =$(this),
                $as = $t.find("a");
            $t.css({"overflow":"hidden"})
            .animate({"height":$t.attr("data-h0")+"px"}, 200, function(){
                myself.hide_a($ele);
                $t.css({"overflow":"visible"});
            });
        });
    },
    getIcon: function($as){
        $as.each(function(){
            var $t = $(this),
                href = $t.attr("href").trim(),
                url = [],
                imgsrc = [];
            url = href.replace("http://", "").replace("https://", "").split("/");
            //获得主站地址后，我们要获得所有可能的icon地址。
            //1、直接拼写，自动识别http、https
            imgsrc.push("//" + url[0] + "/favicon.ico");
            //2、保留后两个字段
            // imgsrc.push("//" + url[0].match(/[^.]+[.][com|cn|com.cn|net|io|org|]+$/) + "/favicon.ico");
            //3、在前面加上 www
            if(url[0].indexOf('www.') == -1){
                imgsrc.push("//" + "www." + url[0].match(/[\w]+[.][\w]+$/) + "/favicon.ico");
            }
            //4、去网站的link标签里去找orz.........
            console.log(imgsrc);
            //图片加载之后执行
            for(var i in imgsrc){
                yS.loadImage(imgsrc[i], function(){
                    $t.find(".d-img").attr("src",imgsrc[i]).removeClass("d-img");
                });
            }
        });
    }
}

//从谷歌文件重构标签数据
function reDataFormGoogle(response){
    //判断一下是否是谷歌文件吧
    var flieType = response.substring(10, 34);
    if(flieType !== "NETSCAPE-Bookmark-file-1"){
        console.log("不是谷歌文件");
        return;
    }
    var ele = jQuery(response).find("dl")[0],
        getTime = new Date().getTime(),
        ID = getTime;
        rep =  {//未来这个数据要与缓存合并
            topLine: {
                re_date: getTime,
                queue: [],
                content: {}
            },
            re_date: getTime,
            queue: [],
            content: {}
        };
    //
    var makeID = function(){
        ID += 1;
        return ID;
    };
    var makeTagData = function ($ele) {
        var tag = {
            re_date: getTime,
            title: $ele.html(),
            href: $ele.attr("href"),
            desp: ""
        };
        return tag;
    }
    var make2F = function($t, f1){
        var f2_id = makeID(),
            f2 = {
                title: $t.children("h3").html(),
                re_date: getTime,
                queue: [],
                content: {}
            },
            DL = $t.children("dl")[0];
        if(DL){
            jQuery(DL).children("dt").each(function(){
                var $t = jQuery(this),
                    $children = $t.children();
                if($children.length ==1 && $children[0].tagName == "A"){
                    var tag = makeTagData($children),
                        tag_id = makeID();
                    f2.queue.push(tag_id);
                    f2.content[tag_id] = tag;
                }else{
                    //循环成功
                    make2F($t, f1);
                }
            });
        }
        f1.queue.push(f2_id);
        f1.content[f2_id] = f2;
    }

    if(!ele) return;
    jQuery(ele).children("dt").each(function(){
        var $t = jQuery(this),
            $children = $t.children();
        if($children.length ==1 && $children[0].tagName == "A"){
            var tag = makeTagData($children),
                tag_id = makeID();
            rep.topLine.queue.push(tag_id);
            rep.topLine.content[tag_id] = tag;
        }else{
            var f1_id = makeID(),
                f1 = {
                    title: $t.children("h3").html(),
                    topLine: {
                        re_date: getTime,
                        queue: [],
                        content: {}
                    },
                    re_date: getTime,
                    queue: [],
                    content: {}
                };
            var DL = $t.children("dl")[0];
            if(DL){
                jQuery(DL).children("dt").each(function(){
                    var $t = jQuery(this),
                        $children = $t.children();
                    if($children.length ==1 && $children[0].tagName == "A"){
                        var tag = makeTagData($children),
                            tag_id = makeID();
                        f1.topLine.queue.push(tag_id);
                        f1.topLine.content[tag_id] = tag;
                    }else{
                        make2F($t, f1);
                    }
                });
            }
            rep.queue.push(f1_id);
            rep.content[f1_id] = f1;
        }
    });
    if(rep.topLine.queue.length>0 || rep.queue.length>0) return rep;
}


//main_view初始化
function main_view_init(data){

    //floor_03初始化
    F3_ATC.init();
    //关于上传谷歌文件
    // $("body").append('<input type="file" name="googleTagFile" id="googleTagFile" style="display:none;">');

    //延后执行
    setTimeout(function() {
        //事件监听
        $("#main_view").on("click", "ul.floor_01 li", function() {
            var $t = $(this);
            if ($t.hasClass("disabled") || $t.hasClass("on")) return;
            data.f1_opt = $t.index();

            setTimeout(function(){
                F3_ATC.reset();
                //为“前端文章”做的临时处理
                if($t.index() == 2) F3_ATC.slideDown(F3_ATC.$f3);
            },0);
        })
        .on("click", "section.section_f2 header", function() {
            F3_ATC.slideToggle($(this).next());
        });
        $(window).resize(function(){
            F3_ATC.resize();
        });

        //关于上传谷歌文件
        // $("#importTagFile01, #importTagFile02").on("click", function(){
        //     $("#googleTagFile").trigger("click");
        // });
        // $("#googleTagFile").on("change", function(){
        //     var ele = this,
        //         FRFormGoogle = new myFileReader(),
        //         rep_id = "0";//从这里传入仓库id
        //     FRFormGoogle.showDataByText({
        //         ele: ele,
        //         limit: 1024000,
        //         typeList: ["text/html"],
        //         callback: function(response){
        //             var rep = reDataFormGoogle(response),
        //                 repository = {rep_id: rep};
        //             if(!rep) alert("请上传正确的文件。");
        //             console.log(rep);
        //             $(ele).parents(".uploadingTagFile").find(".uploading").on("click", function(){
        //                 return;
        //                 //上传数据，服务器端合并数据
        //                 $.ajax({
        //                     url:"",
        //                     data: repository,
        //                     dataType:"json",
        //                     type:"post",
        //                     success: function(re){
        //                         print_re(re);
        //                         if(!re.success) return;
        //                         //客户端合并数据(并展示到前端页面)
        //                         //要测试前，先整体移入daohang项目吧
        //                         //我先可以直接展示下试试，因为结构是对的。
        //                         //然后再想怎么合并。
        //                     }
        //                 });
        //             });
        //         }
        //     });
        // });



        /*【数据交换】(重要)
         *
         */

            //增

            //删

            //改

            //保存 | 到缓存 | 到服务器
            //在本地保存一个时间戳，如果更新，则按照时间戳的先后来判断最新数据
            //每隔1分钟，查看下时间戳，若更新了，则将修改部分上传到服务器。
            //若没到1分钟用户下线，再上线时，依然有效。
            //若没到1分钟用户清除浏览器缓存，会出现问题。
    }, 0);
}

// module.exports
function MAIN_VIEW(id) {
    // 搭建静态页面 (隐藏)
    $("#"+id).html(html_main_view).css({"display":"none"});

    // 载入标准空数据，以让vue初始化（这里直接载入了临时数据
    var data = require('./data'),
        vm = new Vue({
        el: "#main_view",
        data: data
    });

    //如果有缓存，导入缓存数据
    //没有缓存，请求后台
        // $.ajax({
        //     url: "",
        //     data: "",
        //     type: "",
        //     success: function(re){
        //         console.log(re);
        //         //请求成功，显示页面
        //     }
        // });

    //请求成功后，页面才算初始化完毕(可见后续的代码应该都在这步结束之后)
    //未来要写在以上ajax里面
    $("#page_main").css({"display":"block"});

    //main_view初始化
    main_view_init(data);

    //数据导入
    //数据导入为什么要写在这里，它属于初始化吗？（yes）
    //数据导入可以写在头部吗？（不可以）因为在其他页面理论上是不会有导入功能的。
    //所以，本质上main_view需要一个编辑工具栏（确定了）
}

module.exports = MAIN_VIEW;