function getdata_model(A){
	var a=A.model_param,
	b=A.model_path;
	var t=A.callback;
		$.ajax({ 
		    type: "POST", 	
			url: "http://120.78.69.27:8080/demo_xjh/GetParameter.do",
			dataType:"json",
			//async: false,
			data:{
				param:a,
				path:b
			},
			
						beforeSend:function() {
				
var h = 5; 

$("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:h}).appendTo("div#wait"); 

$("<div class=\"datagrid-mask-msg\"></div>").html("<p style=\"color:#008080\" ><font size=\"5\"> Please wait.Data is being loaded...</font></p>").appendTo("div#wait").css({display:"block", 
left:($(document.body).outerWidth(true) - 190) / 2, 
top:(h - 45) / 2}); 

}, 
complete:function(data) { 
$('.datagrid-mask-msg').remove(); 
$('.datagrid-mask').remove(); 
$("#btn").removeAttr("disabled");
}, 
			success: function(data) {
			 // $("#createResult").html(data.msg);
			 //data1=data.msg;
			 //data1=data.msg;
			 //console.log(data.msg)
			 return t(data);
			},
			error:function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			}     
		});
		}
