$.extend(spring.config, {
  pages: [
    {name: 'jeasyui design', number: 1},
  ]
});


var method='/repos/' + spring.config.owner + '/' + spring.config.repo;

spring.fn.request(method,{},function(data){
	      var root=data.data;
	      var desc=root["description"];
		  var owner=root["owner"];
		  var login=owner["login"];
		  var owner_home=owner["html_url"];
		  var avatar_url=owner["avatar_url"];
		  var full_name=root["full_name"];
		  var a_owner_home="<a target='_blank' href='"+owner_home+"'  >"+login+"</a>";
		  
		  var conf_desc="<img src='"+avatar_url+"' style='width:46px'  />&nbsp;&nbsp;"+a_owner_home+"<br/>"+desc+"<br/>"+spring_desc;
		  document.title=full_name+":"+desc;
		  $.extend(spring.config, {
		    desc:conf_desc
		  });
//$(".desc").text(desc);
	});
