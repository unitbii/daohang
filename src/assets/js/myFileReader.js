/* FileReader是浏览器提供的文件读取接口，我封装了几个依赖FileReader的方法
 * this.showDataByText ：获得文件的的文本内容
 * this.showDataByURL ：获得DataURL格式的图片链接
 */


//FileReader方法
var myFileReader = function(obj){
    if(typeof FileReader == "undified") {
        alert("该浏览器不支持FileReader");
        return;
    }
    //公共方法
    var indexOfArr = function(arr, str){
        for(i in arr){
            if(arr[i] == str) return i;
        }
        return -1;
    }
    var clearInputFile = function(input){
        if(input.value){
            try{
                input.value = ''; //for IE11, latest Chrome/Firefox/Opera...
            }catch(err){
            }
            if(input.value){ //for IE5 ~ IE10
                var form = document.createElement('form'),
                    ref = input.nextSibling,
                    p = input.parentNode;
                form.appendChild(input);
                form.reset();
                p.insertBefore(input,ref);
            }
        }
    }
    //init
    var init = function(obj){
        if(!obj.ele) return;
        var ele = obj.ele,
            limit = obj.limit || 1024000,
            typeList = obj.typeList || [],
            resultFile = ele.files[0];
        if (!resultFile) return;
        if (indexOfArr(typeList, resultFile.type) === -1) {
            alert("文件格式不正确，请正确导入文件");
            clearInputFile(ele);
            return;
        }
        if (resultFile.size > limit) {
            alert("容量超限，文件大小请小于"+limit+"字节。");
            clearInputFile(ele);
            return;
        }
        return true;
    }
    //对外接口要用this
    //获得文件的的文本内容
    this.showDataByText = function(obj){
        if(init(obj)){
            var resultFile = obj.ele.files[0],
                callback = obj.callback || function(){},
                reader = new FileReader();
            reader.readAsText(resultFile,'UTF-8');
            reader.onload = function(e){
                callback(this.result);
            };
        }
    };
    //获得DataURL格式的图片链接
    this.showDataByURL = function(){
        var resultFile = init(obj);
        if(init(obj)){
            var resultFile = obj.ele.files[0],
                callback = obj.callback || function(){},
                reader = new FileReader();
            reader.readAsDataURL(resultFile);
            reader.onload = function (e) {
                callback(this.result);
            };
        }
    };
}
module.exports = myFileReader;