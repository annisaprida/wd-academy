(function($){
    //Attach this new method to jQuery
    $.fn.cek = function(){     
     	$(this).keyup(function()
     	{
     		var flagNama = 0;
     		var flagAdr = 0;
     		var flagEmail = 0;
     		var flagDob = 0;
     		if($(this).hasClass("name")){
				var value = $(this).val();
				var corr = $("#nameCorrect");
				var err = $(".errName");
				var regex = /^[a-zA-Z ]{2,30}$/;
				var flagNama = 1;
				var data = $(this).data("id");
     		}

     		if($(this).hasClass("addr")){
				var value = $(this).val();
				var corr = $("#addrCorrect");
				var err = $(".errAddress");
				var regex = /^[a-zA-Z ]{2,30}$/;
				var flagAdr = 1;
				var data = $(this).data("id");
     		}

     		if($(this).hasClass("email")){
				var value = $(this).val();
                var regex=/^([\w-\.]+@([\w-]+\.){1,4}[\w-]{2,4})?$/;
				var flagEmail = 1;
				var data = $(this).data("id");
     		}

     		if($(this).hasClass("dob")){
				var value = $(this).val();
                var regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
                var flagDob = 1;
                var data = $(this).data("id");
     		}

  			if(flagNama == 1 || flagAdr == 1 || flagEmail == 1 || flagDob == 1){
  				if(value =="" || value==null){
                    $(this).next().next().html("Please fill in your "+data+" .");
                    $(this).next().next().fadeIn("slow");  
                    $(this).next().hide();
                }
                if(!value.match(regex)){
                        $(this).next().next().html("Please fill in your "+data+ " with correct formats.");
                        $(this).next().next().fadeIn("slow"); 
                        $(this).next().hide();
                    }
                else{
                	$(this).next().next().hide();
                    $(this).next().show();
                    $(this).next().html("Correct");        
                } 	
  			}

     	}) 
    }; 
})(jQuery);