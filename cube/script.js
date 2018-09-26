//独立完成部分
var s_1 = document.getElementById("surface-1");
var s_2 = document.getElementById("surface-2");
var s_3 = document.getElementById("surface-3");
var s_4 = document.getElementById("surface-4");
var s_5 = document.getElementById("surface-5");
var s_6 = document.getElementById("surface-6");
var arr = {
    					1: s_1,
						2: s_2,
						3: s_3,
						4: s_4,
						5: s_5,
						6: s_6
					};
function changeStyle(){
	setTimeout(function(){
		var i = getRandomNum(1, 6);
		var obj = arr[i];
		console.log("==========:" + i + ",------->:" + arr[i].flag)
		if(arr[i].flag) {
			 var j = getRandomNum(1, 6);
			 obj.className = "surface " + "surface-" + i +  " pic-" + j;
			 arr[i].flag = true
		}else{
       arr[i].flag = true;
		} 
    changeStyle();
	},200);
}
// 随机数
function getRandomNum(under, over){
	switch ( arguments.length ){
		case 1: 
		    return parseInt(Math.random()*under+1);
		case 2: 
		    return parseInt(Math.random()*(over-under+1) + under);
		default: return 1;
	}
}

setTimeout(changeStyle,6000);