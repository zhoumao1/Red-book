$.ajax({
        url: './data_s/1.json',
        type: 'get',
        dataType: 'json',
        success: function (response) {
        	var htmlList = '';
        	var data = response.data;
        	console.log(data);
           	$.each(data, function(i,el) {
           		htmlList +='<div class="one">'+
           		'<img src="'+ el.img +'"><h4 class="weui_media_title">'+ el.text +'</h4>'+
           		'<p class="weui_media_desc"><img src="'+ el.imgs +'"><h4 class="weui_media_title">'+ el.texts +'</h4></p>'+
           		'</div>';
           	});

   	$('.one').empty().append(htmlList);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (textStatus == 'timeout') {
                    alert('请求超时');
                    return false;
                }
                console.log(jqXHR.responseText);
            },
        });
        
        
    $.ajax({
        url: './data_s/2.json',
        type: 'get',
        dataType: 'json',
        success: function (response) {
        	var htmlList = '';
        	var arr = response.arr;
        	console.log(arr);
           	$.each(arr, function(i,el) {
           		htmlList +='<div class="tow">'+
           		'<img src="'+ el.img +'"><h4 class="weui_media_title">'+ el.text +'</h4>'+
           		'<p class="weui_media_desc"><img src="'+ el.imgs +'"><h4 class="weui_media_title">'+ el.texts +'</h4></p>'+
           		'</div>';
           	});

   	$('.tow').empty().append(htmlList);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (textStatus == 'timeout') {
                    alert('请求超时');
                    return false;
                }
                console.log(jqXHR.responseText);
            },
        });
        
        
        
    $.ajax({
    url: './data_s/3.json',
    type: 'get',
    dataType: 'json',
    success: function (response) {
    	var htmlList = '';
    	var add = response.add;
    	console.log(add);
       	$.each(add, function(i,el) {
       		htmlList +='<div class="tre">'+
       		'<img src="'+ el.img +'"><h4 class="weui_media_title">'+ el.text +'</h4>'+
       		'<p class="weui_media_desc"><img src="'+ el.imgs +'"><h4 class="weui_media_title">'+ el.texts +'</h4></p>'+
       		'</div>';
       	});

   	$('.tre').empty().append(htmlList);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (textStatus == 'timeout') {
                    alert('请求超时');
                    return false;
                }
                console.log(jqXHR.responseText);
            },
        });
        
        
        
    $.ajax({
        url: './data_s/4.json',
        type: 'get',
        dataType: 'json',
        success: function (response) {
        	var htmlList = '';
        	var ass = response.ass;
        	console.log(ass);
           	$.each(ass, function(i,el) {
           		htmlList +='<div class="fur">'+
           		'<img src="'+ el.img +'"><h4 class="weui_media_title">'+ el.text +'</h4>'+
           		'<p class="weui_media_desc"><img src="'+ el.imgs +'"><h4 class="weui_media_title">'+ el.texts +'</h4></p>'+
           		'</div>';
           	});

   	$('.fur').empty().append(htmlList);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (textStatus == 'timeout') {
                    alert('请求超时');
                    return false;
                }
                console.log(jqXHR.responseText);
            },
        });