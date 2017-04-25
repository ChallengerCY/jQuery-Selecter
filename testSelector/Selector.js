/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("button").click(function(){
        $("span").text("span元素被修改");  /*直接选择标签*/
        $(".pclass").text("p1被修改");    /*通过选择class来找到对象，格式是$(".class名")*/
        $("#pid").text("p2被修改"); /*通过查找id来找到对象，格式是$("#ID名")*/
    })
})