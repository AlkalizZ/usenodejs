/**
 * Created by Alkali on 16/3/24.
 */
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var multer = require('multer');


//app.use(multer()); // for parsing multipart/form-data

app.use(bodyParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));
    //默认情况下Express并不知道该如何处理该请求体，因此我们需要增加bodyParser中间件，用于分析
    //application/x-www-form-urlencoded和application/json
    //请求体，并把变量存入req.body。我们可以像下面的样子来“使用”中间件[这个保证POST能取到请求参数的值]：

app.post('/state', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');

    function getRandom(min, max){
        return Math.floor(min + Math.random() * (max - min + 1));
    }

    var json = {
        success: true,
        state: getRandom(1, 5)
    };
    res.send(json);
});


app.post('/list', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');//CORS
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");


    var start = parseInt(req.body.start) || 0;
    var len = parseInt(req.body.len) || 3;
    var allData = [
        {
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "3.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },
        {
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "1.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "任务完成哟哟哟", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "5", //星星
            "good": 0, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 555, //平均消费
            "discount": "0.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<50m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "任务完成哟哟哟", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<50m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 0, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "新白鹿餐厅(滨江店)", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "自己写好了后台233", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "3.5", //星星
            "good": 123, //如果这个数大于0, 就显示大拇指
            "people": 83, //否则显示这个(看图)
            "average": 2122, //平均消费
            "discount": "9.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<100m" //距离
        },{
            "title": "任务完成哟哟哟", //店名
            "imgUrl": "http://77uc6m.com1.z0.glb.clouddn.com/1.png-q30",
            "stars": "2.5", //星星
            "good": 6, //如果这个数大于0, 就显示大拇指
            "people": 813, //否则显示这个(看图)
            "average": 52, //平均消费
            "discount": "7.5", //打折, 只会有X, X.5折两种
            "flag": "qiang|xue|pingpai", //标志, qiang表示"抢", xue表示绿色的那个标志, pingpai是第三个标志, "|"是分隔符
            "distance": "<50m" //距离
        }
    ];


    allData[allData.length - 1].isEnd = true;

    var data = [];
    for (var i = 0; i < len; i++){
        data.push(allData[start + i]);
    }

    var json = {
        success: true,
        data: data
    };

    console.log(json);

    res.send(json);
});


app.listen(3999);
console.log('开启监听');