function ImageSwitcher(imageId, imageArray)
{
	this.id = imageId
	this.images = imageArray;
	this.currentIndex = 0;
	this.nextIndex = 1;
}

ImageSwitcher.prototype.next = function()
{
	this.currentIndex = this.nextIndex;
	this.nextIndex++;
	if (this.nextIndex >= this.images.length)
		{
			this.nextIndex = 0;
		}
	document.getElementById(this.id).style.backgroundImage = 'url("' + this.images[this.currentIndex]; + '")'
}
/*
function ImageScroller(imageId, imageSrc, length, width)
{
	this.img = document.getElementById(imageId)
	this.image = imageSrc;
	this.img.style.backgroundPosition = 0;
	this.img.style.backgroundRepeat = 'repeat-x';
	this.img.style.backgroundImage = 'url("' + image + '")'
	this.width = width;
	this.length = length;
	this.step = this.width / this.length;
}

ImageScroller.prototype.scroll = function(time)
{
	if(this.img.style.backgroundPostion == -this.length)
	{
		this.img.style.backgroundPosition == 0;
	}
	this.frameStep = this.step / (time / 10);
	targetPosition = this.img.style.backgroundPosition - this.frameStep;
	t = setInterval(this.slide(step), this.framestep);
	while(this.img.style.backgroundPostion > targetPostition)
	{
		true;
	}
	clearInterval(t);
}

ImageScroller.prototype.slide = function(distance)
{
	this.img.style.backgroundPostition -= distance;
}
	
*/
var switcher1Images = [
	'picture1.jpg',
	'picture2.jpg',
	'picture3.jpg'
];

var switcher2Images = [
	'picture4.jpg',
	'picture5.jpg',
	'picture6.jpg'
];

var switcher1 = new ImageSwitcher('switcher1', switcher1Images);
var switcher2 = new ImageSwitcher('switcher2', switcher2Images);
//var scroller1 = new ImageScroller('scroller1', 'picstrip1.jpg', 6, 146)
