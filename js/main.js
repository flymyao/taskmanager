// 这里我们应该告诉brite，然后让它去加载... /tmpl/ViewName.tmpl 和.. /css/ViewName.css文件
//需求中。对于开发非常有用的是，可以关闭生产（如文件可以预编译和链接）。
brite.viewDefaultConfig.loadTmpl = true;
brite.viewDefaultConfig.loadCss = true;

// 当文档准备好时，我们显示MainView (同时它将显示子views) 
$(document).ready(function(){
  brite.display("MainView","#pageBody");
});

// 使用handelbars 间接的渲染一个模板
// 该简单的间接以后允许更多灵活性  
// 当需要使用预编译或其他模板引擎时
Handlebars.templates = Handlebars.templates || {}; 
Handlebars.partials =  Handlebars.templates;

function render(templateName,data){
	var tmpl = Handlebars.templates[templateName];

	if (!tmpl){
		var html = $("#" + templateName).html();
		if (!html){
			throw "Not template found in pre-compiled and in DOM for " + templateName;
		}
		tmpl = Handlebars.compile(html);
		Handlebars.templates[templateName] = tmpl;
	}
	return tmpl(data);
}