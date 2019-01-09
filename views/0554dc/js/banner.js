jQuery(function() {
	var sWidth = jQuery("#focus").width(); 
	var len = jQuery("#focus ul li").length; 
	var index = 0;
	var picTimer;
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	jQuery("#focus").append(btn);
	jQuery("#focus .btnBg").css("opacity",0.5);
	jQuery("#focus .btn span").css("opacity",0.4).mouseenter(function() {
		index = jQuery("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");
	jQuery("#focus .preNext").css("opacity",0.2).hover(function() {
		jQuery(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		jQuery(this).stop(true,false).animate({"opacity":"0.2"},300);
	});
	jQuery("#focus .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
	jQuery("#focus .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	jQuery("#focus ul").css("width",sWidth * (len));
	jQuery("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); 
	}).trigger("mouseleave");
	function showPics(index) {
		var nowLeft = -index*sWidth; 
		jQuery("#focus ul").stop(true,false).animate({"left":nowLeft},300); 
		jQuery("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); 
	}
});