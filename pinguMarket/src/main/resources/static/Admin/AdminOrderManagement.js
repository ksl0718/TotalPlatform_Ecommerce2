let subToggle=true;
$(".menu").click(()=>{
  if(subToggle){
    $(".sub").slideDown(1000);
  }else{
    $(".sub").slideUp(1000);
  }
  subToggle=!subToggle;
});