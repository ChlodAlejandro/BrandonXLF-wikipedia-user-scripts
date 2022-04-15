/*** Null Edit ***/

// Adds a link to perform a [[WP:NULLEDIT]] on the current page
// Documentation at [[w:User:BrandonXLF/NullEdit]]
// By [[w:User:BrandonXLF]]

$(mw.util.addPortletLink('p-cactions', '#', 'Null edit')).click(function(e) {
	e.preventDefault();
	new mw.Api().edit(mw.config.get('wgPageName'), function(rev) {
		return rev.content;
	}).then(function() {
		window.location.reload();
	});
});