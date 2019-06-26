$(document).ready(function() {
  $(".movie_prise_box_open").click(function() {
    $("#movie_prise_box").css("display","block");
  });
  $(".movie_prise_box_close").click(function() {
    $("#movie_prise_box").css("display","none");
  });

//슬라이드 나중에 수정하기
  $(".movie_info3_bt2").click(function() {
    $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt4.png");
    $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_view01").css("display","block");
    $(".movie_info3_view02").css("display","none");
    $(".movie_info3_view03").css("display","none");
    $(".movie_info3_view04").css("display","none");
  });
  $(".movie_info3_bt3").click(function() {
    $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt4.png");
    $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_view02").css("display","block");
    $(".movie_info3_view01").css("display","none");
    $(".movie_info3_view03").css("display","none");
    $(".movie_info3_view04").css("display","none");
  });
  $(".movie_info3_bt4").click(function() {
    $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt4.png");
    $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_view03").css("display","block");
    $(".movie_info3_view02").css("display","none");
    $(".movie_info3_view01").css("display","none");
    $(".movie_info3_view04").css("display","none");
  });
  $(".movie_info3_bt5").click(function() {
    $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt3.png");
    $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt4.png");
    $(".movie_info3_view04").css("display","block");
    $(".movie_info3_view02").css("display","none");
    $(".movie_info3_view03").css("display","none");
    $(".movie_info3_view01").css("display","none");
  });

var num=1;
var dot_count=1;
  $(".movie_info3_bt6").click(function() {
    if (num<4) {
          num ++;
          dot_count ++;
          dot_event();
          $(".movie_info3_view01").css("display","none");
          $(".movie_info3_view02").css("display","none");
          $(".movie_info3_view03").css("display","none");
          $(".movie_info3_view04").css("display","none");
          $(".movie_info3_view0"+num).css("display","block");
        }
    else {
      num=1;
      dot_count=1;
      dot_event();
      $(".movie_info3_view01").css("display","none");
      $(".movie_info3_view02").css("display","none");
      $(".movie_info3_view03").css("display","none");
      $(".movie_info3_view04").css("display","none");
      $(".movie_info3_view0"+num).css("display","block");
    }
  });
  $(".movie_info3_bt1").click(function() {
    if (num<4) {
          num --;
          dot_count --;
          dot_event();
          $(".movie_info3_view01").css("display","none");
          $(".movie_info3_view02").css("display","none");
          $(".movie_info3_view03").css("display","none");
          $(".movie_info3_view04").css("display","none");
          $(".movie_info3_view0"+num).css("display","block");
        }
    else {
      num=4;
      dot_count=4;
      dot_event();
      $(".movie_info3_view01").css("display","none");
      $(".movie_info3_view02").css("display","none");
      $(".movie_info3_view03").css("display","none");
      $(".movie_info3_view04").css("display","none");
      $(".movie_info3_view0"+num).css("display","block");
    }
  });
  function dot_event(){
    if(dot_count == 1){
      $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt4.png");
      $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt3.png");
    }else if(dot_count == 2){
      $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt4.png");
      $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt3.png");
    }else if(dot_count == 3){
      $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt4.png");
      $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt3.png");
    }else if(dot_count == 4){
      $(".movie_info3_bt2 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt3 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt4 img").attr("src","img/movie_info3_bt3.png");
      $(".movie_info3_bt5 img").attr("src","img/movie_info3_bt4.png");
    }
  }
//슬라이드 나중에 수정하기
//dot_count 오류남
});
