/**
 * @author cho
 * @date 2014/10/15
 * @link http://pagecho.com
 */

var winWidth=0;
var winHeight=0;
function findDimensions()
{
  if(window.innerWidth)
    winWidth=window.innerWidth;
  else if((document.body)&&(document.body.clientWidth))
    winWidth=document.body.clientWidth;
  if(document.documentElement && document.documentElement.clientWidth)
    {
    winWidth=document.documentElement.clientWidth;
    }
}
findDimensions();
window.onresize=findDimensions;
function showHeadBlock(){
    $(".blog-title").addClass("blog-title-active");
    if(winWidth>1057){
      $(".move-block").animate({marginLeft:'-330px'},'fast');
    }else{
      $(".move-block").animate({left:'-330px'},'fast');
    }
    $("#secondary").animate({right:'0'},'fast');
    $(".side-click").removeClass("icon-arrow-down").addClass("icon-cross");

    $(".side-click-mask").show();
}
function hideHeadBlock(){
    $(".blog-title").removeClass("blog-title-active");
    $(".move-block").animate({left:'0px',marginLeft:'0px'},'fast');
    $("#secondary").animate({right:'-330px'},'fast');
    $(".side-click").removeClass("icon-cross").addClass("icon-arrow-down");

    $(".side-click-mask").hide();
}

$(document).ready(function(){
  $('body').delegate('.icon-arrow-down','click',function(){
    showHeadBlock();
  });
  $('body').delegate('.icon-cross,.side-click-mask','click',function(){
    hideHeadBlock();
  });
});