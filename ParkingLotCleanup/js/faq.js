"use strict"

$(document).ready( () => {

    //
    // FAQ carousel
    //
    const imgWidth = 500;
    const numImg = 3;
    const imgSlideTime = 180;
    const slider = $("#faqCarouselImgList ul");

    $("#faqCarouselRight").click( evt => { 
        const leftProperty = parseInt(slider.css("left"));
        
        let newLeftProperty = 0;
        // if there's room to slide to the next image, slide to the next image
        if (leftProperty - imgWidth > (-1 * imgWidth * numImg)) {
            newLeftProperty = leftProperty - imgWidth;
        }
        slider.animate({left: newLeftProperty}, imgSlideTime);  
        
        evt.preventDefault();
    }); 
    
    $("#faqCarouselLeft").click( evt => {
        const leftProperty = parseInt(slider.css("left"));
        
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + imgWidth;
        }
        slider.animate({left: newLeftProperty}, imgSlideTime);

        evt.preventDefault();
    });




    // 
    // FAQ dropdowns
    // 
    $("#faqs dd").slideUp(0); // Hides dd tag content by default
	
    $("#faqs dt").click( evt => {
		const dt = evt.currentTarget;

		$(dt).toggleClass("show");
		if ($(dt).attr("class") != "show") {
			$(dt).next().slideUp(180);
	   	}
	   	else {
	        $(dt).next().slideDown(180);
		}

		evt.preventDefault();
    }); // end click
    
    
    
}); // end ready