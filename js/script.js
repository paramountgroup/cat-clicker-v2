// JavaScript Document - Counter Code discovered on Code Academy exercise and modified for use
function modify_qty(val) {   // This is the original code I used before we got to knockout.
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    document.getElementById('qty').value = new_qty;
	
    return new_qty;
}

var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Kitkat');
	this.imgSrc = ko.observable('img/kitkat-opt-1920x1280.jpg');
	this.imgAttribution = ko.observable('http://www.theparamountgroup.us');
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
//	console.log(this.name);
//	console.dir(this.name);

	};
};
	
ko.applyBindings(new ViewModel());