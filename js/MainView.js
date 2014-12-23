/**
 * View: MainView
 *
 * Responsibilities:
 *   - Main Screen for the application.
 *   - Will create all the necessary sub views
 *   - Manage all the application wide events
 */
(function() {
	
	brite.registerView("MainView",{Parent:"body"},{
		
		create: function(){
			// 由于第一个View是静态的, 不需要调用 js 渲染, 只需要在模板中用.html() 
			return render("MainView");
		}
			
	});

})(); 