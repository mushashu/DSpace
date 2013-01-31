// jQuery for collapsing/expanding DSpace sidebar (ds-options) 
// last modification: 2012-03-08

 $(document).ready(function() {

 if (jQuery.browser.mobile=="true"){
alert("mobile");
}
else
{
//alert("no mobile");
}


 $(".ds-option-set:nth-child(n)").hide();
   //collapse Search and My Account boxes
 $(".ds-option-set:first").show();
 $(".ds-option-set:last").hide();
//	$("Browse").show();
	
 // $(".ds-option-set:third").hide();
 // $(".ds-option-set:fourth").hide();
  $(".ds-option-set-head").css({cursor:'pointer'}).click(function()
  { $(this).next(".ds-option-set").slideToggle(500) });

  // counting # of ds-simple-list
  var n = $("div.ds-option-set ul.ds-simple-list").length;

  // if viewing front or macro pages
  // don't collapse 1st ds-simple-list -usually titled "All of xxxx"
  if(n<=2) {
  // alert(n);
  $("div.ds-option-set ul.ds-simple-list:first").show();
  }

  // if viewing individual community/collection pages
  //collapse 1st ds-simple-list -usually titled "All of xxxx"
  else if(n==3) {
  // alert(n);
  $("div.ds-option-set ul.ds-simple-list:first").hide();
  $(".ds-sublist-head").css({cursor:'pointer'}).click(function()
  { $(this).next(".ds-simple-list").slideToggle(500); });
  }

  // if logged-in as an administrator
  // only collapse search box OR don't collapse anything
  else {
  // alert(n);
  $("div.ds-option-set ul.ds-simple-list").show();
  $(".ds-option-set:last").show();
  }

  // counting # of <objects> videos on a page
  var v = $("object").length;
  // alert(v);

  //if more than 1 video is found, only embed the 1st one
  if(v>=2) {
  // alert(n);
  $("object").hide();
  $("object:first").show();
  }

});

