// JavaScript Document - Counter Code discovered on Code Academy exercise and modified for use

// JavaScript Document
var catArray = [
  { clickCount: 0,
	name: 'Kitkat',
	imgSrcSmall: 'img/kitkat-opt-230x153.jpg',
	imgSrcLarge: 'img/kitkat-opt-1920x1280.jpg',
	alt: 'kitkat photo',
	bio: 'KitKat lives in Satellite Beach,FL - Loves to play in the backyard chasing lizards, enjoys sunbathing, and Friday night BBQs'
  },
  { clickCount: 0,
	name: 'Fezzik',
	imgSrcSmall: 'img/fezzik-opt-230x153.jpg',
	imgSrcLarge: 'img/fezzik-3-opt-1920x1280.jpg',
	alt: 'fezzik photo',
	bio: 'Fezzik is a fun loving cat that lives in Menlo Park CA. Fezzik enjoys the temperate climate of the Bay Area-plays, eats & sleeps and takes full advantage of this high tech area'
  },
  { clickCount: 0,
	name: 'Vesper',
	imgSrcSmall: 'img/vesper-opt-230x213.jpg',
	imgSrcLarge: 'img/vesper-opt-1920x1280.jpg',
	alt: 'vesper photo',
	bio: 'Vesper is a California native and enjoys hanging out with his friend Fezzik. Vesper is always up for playtime'
  },
  { clickCount: 0,
	name: 'Marvin',
	imgSrcSmall: 'img/marvin-opt-320x213.jpg',
	imgSrcLarge: 'img/marvin-opt-1920x1280.jpg',
	alt: 'marvin photo',
	bio: "Marvin lives in Melbourne Beach, FL. He loves to watch sunrises over the ocean and enjoys warm summer's breeze."
  },
  { clickCount: 0,
	name: '2-Cats',
	imgSrcSmall: 'img/cats-in-window-opt-230x213.jpg',
	imgSrcLarge: 'img/cats-in-window-opt-1920x1280.jpg',
	alt: '2-cats photo',
	bio: "If you thought one cat was cute how about two."
  }];


var cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrcSmall = ko.observable(data.imgSrcSmall);
	this.imgSrcLarge = ko.observable(data.imgSrcLarge);
	this.imgAttribution = ko.observable('http://www.theparamountgroup.us');
	this.bio = ko.observable(data.bio);
	};

var ViewModel = function() {
	self = this;
	this.catList = ko.observableArray([]);
	
	catArray.forEach(function(catItem) {
		self.catList.push(new cat(catItem));
	});
	
	this.currentCat = ko.observable(this.catList()[0]);
	
	this.incrementCounter = function() {
	//	self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	this.clickCount(this.clickCount() + 1);
	};
	
	/*
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Kitkat');
	this.imgSrc = ko.observable('img/kitkat-opt-1920x1280.jpg');
	this.imgAttribution = ko.observable('http://www.theparamountgroup.us');
	this.incrementCounter = function() {
	this.clickCount(this.clickCount() + 1);
	};
	*/
};
	
ko.applyBindings(new ViewModel());