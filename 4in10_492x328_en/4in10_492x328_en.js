(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"4in10_492x328_en_atlas_1", frames: [[0,0,1040,240],[1042,0,829,274],[0,421,920,53],[0,242,536,143],[538,276,536,143],[1076,276,536,143]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["4in10_492x328_en_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["4in10_492x328_en_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["4in10_492x328_en_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["4in10_492x328_en_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["4in10_492x328_en_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["4in10_492x328_en_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EglkAPjIAA/FMBLJAAAIAAfFg");
	this.shape.setTransform(240.475,99.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,481,199), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmbAZoMAAAgzPMBM3AAAMAAAAzPg");
	mask.setTransform(263.975,164);

	// Layer_3
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(18,0,492,120), null);


// stage content:
(lib.RECOVER_492x328_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ppl_copy
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(38.45,24.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(38.45,24.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},79).to({state:[]},10).to({state:[{t:this.instance_1}]},10).to({state:[]},10).wait(66));

	// wp4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAFaQgMALgRAAQgSABgNgNQgNgNgBgTIAAjFQgFADgJAAQgTAAgNgNQgNgNAAgSIAAiyQAAgfAWgWQAWgVAfAAIB1AAQAfAAAXAVQAVAVAAAgIAACyQAAASgNANQgNANgTAAQgJAAgFgDIAADFQgBATgNANQgMANgTgBQgRAAgNgLgAALB7QAEAFAAAGIAACzQAAAGAFAEQAEAFAGAAQAGAAAFgFQAEgEAAgGIAAllQAAgGAEgEQAFgFAFABQAHgBAEAFQAEAEABAGIAAB3QgBAFAFAFQAEAFAGgBQAHABAEgFQAEgFAAgFIAAiyQABgTgNgNQgOgNgTAAIh1AAQgTAAgNANQgNANAAATIAACyQAAAFAEAFQAFAFAGgBQAGABAEgFQAFgFgBgFIAAh3QABgGAEgEQAFgFAGABQAFgBAFAFQAFAEAAAGIAAFlQgBAGAFAEQAEAFAGAAQAHAAAEgFQAEgEAAgGIAAizQAAgGAEgFQAFgEAFAAQAGAAAFAEgAgzjlQgXgWAAgfQAAgeAXgXQAVgWAeABQAfgBAVAWQAXAXAAAeQAAAfgXAWQgVAVgfAAQgeAAgVgVgAgek6QgNANAAATQAAASANANQANANARABQASgBAOgNQANgNAAgSQAAgTgNgNQgOgNgSABQgRgBgNANg");
	this.shape.setTransform(132.3,60.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(39).to({_off:false},0).wait(136));

	// wp3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAFaQgMALgRAAQgSABgNgNQgOgNAAgTIAAjFQgFADgJAAQgTAAgNgNQgNgNAAgSIAAiyQAAgfAWgWQAVgVAfAAIB2AAQAgAAAVAVQAWAWAAAfIAACyQAAASgNANQgNANgSAAQgKAAgFgDIAADFQAAATgNANQgNANgTgBQgRAAgNgLgAALB7QAEAFAAAGIAACzQAAAGAFAEQADAFAHAAQAGAAAEgFQAFgEAAgGIAAllQgBgGAFgEQAFgFAFABQAHgBAEAFQAEAEABAGIAAB3QAAAFAEAFQAEAFAHgBQAFABAFgFQAEgFAAgFIAAiyQAAgTgNgNQgNgNgTAAIh2AAQgSAAgNANQgNANgBATIAACyQABAFAEAFQAEAFAHgBQAGABAEgFQAFgFgBgFIAAh3QAAgGAFgEQAEgFAGABQAGgBAFAFQAEAEABAGIAAFlQgBAGAFAEQAEAFAGAAQAGAAAFgFQAEgEAAgGIAAizQAAgGAFgFQAEgEAFAAQAGAAAFAEgAgzjlQgXgWAAgfQAAgeAXgXQAWgWAdABQAfgBAWAWQAVAXABAeQgBAfgVAWQgWAVgfAAQgdAAgWgVgAgfk6QgNANABATQgBASANANQAOANARABQATgBAMgNQAOgNAAgSQAAgTgOgNQgMgNgTABQgRgBgOANg");
	this.shape_1.setTransform(105.5,60.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(29).to({_off:false},0).wait(146));

	// wp2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAFaQgMALgRAAQgSABgNgNQgNgNAAgTIAAjFQgGADgJAAQgTAAgNgNQgNgNAAgSIAAiyQAAgfAWgWQAVgVAfAAIB3AAQAfAAAVAVQAWAWAAAfIAACyQAAASgNANQgNANgTAAQgJAAgFgDIAADFQAAATgOANQgNANgSgBQgRAAgNgLgAALB7QAEAFAAAGIAACzQAAAGAEAEQAFAFAGAAQAGAAAEgFQAFgEAAgGIAAllQAAgGAEgEQAEgFAHABQAGgBAEAFQAFAEAAAGIAAB3QAAAFAEAFQAEAFAGgBQAHABAEgFQAEgFAAgFIAAiyQAAgTgNgNQgNgNgSAAIh3AAQgSAAgNANQgNANAAATIAACyQAAAFAEAFQAEAFAHgBQAGABAEgFQAFgFAAgFIAAh3QAAgGAEgEQAEgFAGABQAHgBAEAFQAEAEAAAGIAAFlQAAAGAFAEQAEAFAGAAQAGAAAFgFQAEgEAAgGIAAizQAAgGAFgFQAEgEAFAAQAGAAAFAEgAgzjlQgWgWAAgfQAAgeAWgXQAWgWAdABQAfgBAWAWQAWAXAAAeQAAAfgWAWQgWAVgfAAQgdAAgWgVgAgfk6QgNANAAATQAAASANANQAOANARABQATgBANgNQANgNAAgSQAAgTgNgNQgNgNgTABQgRgBgOANg");
	this.shape_2.setTransform(78.675,60.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(19).to({_off:false},0).wait(156));

	// wp1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAFaQgMAMgRgBQgSAAgNgMQgNgOAAgSIAAjEQgGACgJAAQgTAAgNgNQgNgNAAgSIAAizQAAgeAWgWQAVgWAfABIB3AAQAfgBAVAWQAWAWAAAeIAACzQAAASgNANQgNANgTAAQgJAAgFgCIAADEQAAASgOAOQgNAMgSAAQgRABgNgMgAALB7QAEAFAAAGIAACzQAAAGAEAFQAFAEAGAAQAGAAAEgEQAFgFAAgGIAAlkQAAgHAEgEQAEgEAHgBQAGABAEAEQAFAEAAAHIAAB2QAAAFAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgFIAAizQAAgSgNgNQgNgNgSAAIh3AAQgSAAgNANQgNANAAASIAACzQAAAFAEAFQAEAFAHAAQAGAAAEgFQAFgFAAgFIAAh2QAAgHAEgEQAEgEAGgBQAHABAEAEQAEAEAAAHIAAFkQAAAGAFAFQAEAEAGAAQAGAAAFgEQAEgFAAgGIAAizQAAgGAFgFQAEgEAFAAQAGAAAFAEgAg0jmQgVgVAAgfQAAgfAVgWQAWgVAegBQAfABAWAVQAWAXAAAeQAAAfgWAVQgWAXgfAAQgeAAgWgXgAgfk5QgNAMAAATQAAASANAOQAOANARgBQATABANgNQANgOAAgSQAAgTgNgMQgNgOgTAAQgRAAgOAOg");
	this.shape_3.setTransform(51.825,60.65);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(166));

	// ppl
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(38.45,24.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175));

	// info
	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(15.85,293.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175));

	// white
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(245.55,223.55,1,1,0,0,0,240.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({alpha:0.98},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(101));

	// _in10_en
	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(38.3,139.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(175));

	// base
	this.instance_6 = new lib.ClipGroup();
	this.instance_6.setTransform(241.9,164,1,1,0,0,0,259.9,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(175));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(228,164,274,164);
// library properties:
lib.properties = {
	id: 'F4A5315057A74E078BD3EF57F2F8750B',
	width: 492,
	height: 328,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/4in10_492x328_en_atlas_1.png", id:"4in10_492x328_en_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F4A5315057A74E078BD3EF57F2F8750B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;