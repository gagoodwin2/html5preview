(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"4in10_728x90_sc_atlas_1", frames: [[715,80,186,42],[0,134,380,180],[382,134,569,59],[0,0,713,132],[715,0,291,78],[382,195,291,78],[675,195,291,78],[382,275,291,9]]}
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



(lib.CachedBmp_10 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["4in10_728x90_sc_atlas_1"]);
	this.gotoAndStop(7);
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
	this.shape.graphics.f("#FFFFFF").s().p("AwKClIAAlJMAgVAAAIAAFJg");
	this.shape.setTransform(103.5,81.1662,1,0.9695);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,65.2,207,32), null);


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
	mask.graphics.p("AnQBoIAAjQIOhAAIAADQg");
	mask.setTransform(46.5,10.45);

	// Layer_3
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,93,20.9), null);


// stage content:
(lib.RECOVER_728x90_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(21.35,75.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175));

	// ppl_copy
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(21.35,30.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(21.35,30.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},79).to({state:[]},10).to({state:[{t:this.instance_2}]},10).to({state:[]},10).wait(66));

	// wp4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAC8QgGAGgJAAQgKAAgHgHQgHgHAAgKIAAhrQgEACgEAAQgKAAgIgHQgHgIAAgKIAAhgQAAgQAMgMQAMgMARAAIA/AAQARAAAMAMQAMAMAAAQIAABgQAAAKgHAIQgHAHgKAAIgIgCIAABrQAAAKgHAHQgIAHgKAAQgJAAgHgGgAAIBJIAABhQAAAIAIAAQAIAAAAgIIAAjBQAAgIAIAAQAEAAACACQADACAAAEIAAA/QAAAIAIAAQAIAAAAgIIAAhgQAAgKgHgHQgIgHgKAAIg/AAQgKAAgIAHQgHAHAAAKIAABgQAAAEADACQACACAEAAQAIAAAAgIIAAg/QAAgIAIAAQAIAAAAAIIAADBQAAAIAIAAQADAAADgDQACgCAAgDIAAhhQAAgIAHAAQAIAAAAAIgAgbh8QgMgMAAgRQAAgQAMgMQALgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgLgMgAgQiqQgHAHAAAKQAAAKAHAIQAHAHAJAAQAKAAAHgHQAHgIAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape.setTransform(72.275,49.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(39).to({_off:false},0).wait(136));

	// wp3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAC8QgGAGgJAAQgKAAgHgHQgHgHAAgKIAAhrQgEACgEAAQgKAAgIgHQgHgIAAgKIAAhgQAAgQAMgMQAMgMARAAIA/AAQARAAAMAMQAMAMAAAQIAABgQAAAKgHAIQgHAHgKAAQgFAAgEgCIAABrQAAAKgHAHQgHAHgKAAQgJAAgHgGgAAIBJIAABhQAAAIAIAAQAIAAAAgIIAAjBQAAgIAIAAQAIAAAAAIIAAA/QAAAEADACQACACAEAAQAIAAAAgIIAAhgQAAgKgHgHQgIgHgKAAIg/AAQgKAAgIAHQgHAHAAAKIAABgQAAAEADACQACACAEAAQADAAACgCQADgCAAgEIAAg/QAAgIAIAAQAIAAAAAIIAADBQAAAIAIAAQAIAAAAgIIAAhhQAAgEACgCQADgCACAAQAIAAAAAIgAgbh8QgMgMAAgRQAAgQAMgMQALgMAQAAQARAAAMAMQALAMAAAQQAAARgLAMQgMAMgRAAQgQAAgLgMgAgQiqQgHAHAAAKQAAAKAHAIQAHAHAJAAQAKAAAHgHQAHgIAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1.setTransform(57.725,49.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(29).to({_off:false},0).wait(146));

	// wp2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAC8QgGAGgJAAQgKAAgHgHQgHgHAAgKIAAhrQgEACgFAAQgKAAgHgHQgHgIAAgKIAAhgQAAgQAMgMQAMgMARAAIA/AAQARAAAMAMQAMAMAAAQIAABgQAAAKgHAIQgHAHgKAAQgFAAgEgCIAABrQAAAKgHAHQgHAHgKAAQgJAAgHgGgAAGBDQACACAAAEIAABhQAAAIAIAAQAIAAAAgIIAAjBQAAgIAIAAQAIAAAAAIIAAA/QAAAEADACQACACAEAAQADAAACgCQADgCAAgEIAAhgQAAgKgHgHQgIgHgKAAIg/AAQgKAAgIAHQgHAHAAAKIAABgQAAAEADACQACACADAAQAEAAACgCQADgCAAgEIAAg/QAAgIAIAAQAIAAAAAIIAADBQAAAIAIAAQAIAAAAgIIAAhhQAAgEACgCQADgCACAAQADAAADACgAgbh8QgMgMAAgRQAAgQAMgMQALgMAQAAQARAAALAMQAMAMAAAQQAAARgMAMQgLAMgRAAQgQAAgLgMgAgQiqQgHAHAAAKQAAAKAHAIQAHAHAJAAQAKAAAHgHQAHgIAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_2.setTransform(43.175,49.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(19).to({_off:false},0).wait(156));

	// wp1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAC8QgGAGgJAAQgKAAgIgHQgHgHAAgKIAAhrQgDACgFAAQgKAAgHgHQgHgIAAgKIAAhgQAAgQAMgMQAMgMARAAIA/AAQARAAAMAMQAMAMAAAQIAABgQAAAKgHAIQgIAHgKAAIgIgCIAABrQAAAKgHAHQgHAHgKAAQgJAAgHgGgAAGBDQACACAAAEIAABhQAAAIAIAAQAIAAAAgIIAAjBQAAgIAIAAQAIAAAAAIIAAA/QAAAIAIAAQAJAAAAgIIAAhgQAAgKgHgHQgIgHgKAAIg/AAQgKAAgIAHQgHAHAAAKIAABgQAAAIAIAAQAIAAAAgIIAAg/QAAgEADgCQACgCAEAAQAIAAAAAIIAADBQAAAIAIAAQAIAAAAgIIAAhhQAAgIAHAAQADAAADACgAgch8QgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAALAMQAMAMAAAQQAAARgMAMQgLAMgRAAQgQAAgMgMgAgQiqQgHAHAAAKQAAAKAHAIQAHAHAJAAQAKAAAHgHQAHgIAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_3.setTransform(28.625,49.975);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(166));

	// ppl
	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(21.35,30.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175));

	// white_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(426.6,9.2,1.0869,1.0002,0,0,0,213.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:103.5,regY:81.2,x:306.7,y:72},0).wait(24).to({alpha:0.9796},0).wait(1).to({alpha:0.9592},0).wait(1).to({alpha:0.9388},0).wait(1).to({alpha:0.9184},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.8776},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.8367},0).wait(1).to({alpha:0.8163},0).wait(1).to({alpha:0.7959},0).wait(1).to({alpha:0.7755},0).wait(1).to({alpha:0.7551},0).wait(1).to({alpha:0.7347},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6939},0).wait(1).to({alpha:0.6735},0).wait(1).to({alpha:0.6531},0).wait(1).to({alpha:0.6327},0).wait(1).to({alpha:0.6122},0).wait(1).to({alpha:0.5918},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.5306},0).wait(1).to({alpha:0.5102},0).wait(1).to({alpha:0.4898},0).wait(1).to({alpha:0.4694},0).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.4082},0).wait(1).to({alpha:0.3878},0).wait(1).to({alpha:0.3673},0).wait(1).to({alpha:0.3469},0).wait(1).to({alpha:0.3265},0).wait(1).to({alpha:0.3061},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2653},0).wait(1).to({alpha:0.2449},0).wait(1).to({alpha:0.2245},0).wait(1).to({alpha:0.2041},0).wait(1).to({alpha:0.1837},0).wait(1).to({alpha:0.1633},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.1224},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.0816},0).wait(1).to({alpha:0.0612},0).wait(1).to({alpha:0.0408},0).wait(1).to({alpha:0.0204},0).wait(1).to({alpha:0},0).wait(102));

	// white
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(591.4,-54.75,1.8696,1.5487,0,0,0,214.1,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:103.5,regY:81.2,x:384.55,y:29.85},0).wait(24).to({alpha:0.9796},0).wait(1).to({alpha:0.9592},0).wait(1).to({alpha:0.9388},0).wait(1).to({alpha:0.9184},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.8776},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.8367},0).wait(1).to({alpha:0.8163},0).wait(1).to({alpha:0.7959},0).wait(1).to({alpha:0.7755},0).wait(1).to({alpha:0.7551},0).wait(1).to({alpha:0.7347},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6939},0).wait(1).to({alpha:0.6735},0).wait(1).to({alpha:0.6531},0).wait(1).to({alpha:0.6327},0).wait(1).to({alpha:0.6122},0).wait(1).to({alpha:0.5918},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.5306},0).wait(1).to({alpha:0.5102},0).wait(1).to({alpha:0.4898},0).wait(1).to({alpha:0.4694},0).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.4082},0).wait(1).to({alpha:0.3878},0).wait(1).to({alpha:0.3673},0).wait(1).to({alpha:0.3469},0).wait(1).to({alpha:0.3265},0).wait(1).to({alpha:0.3061},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2653},0).wait(1).to({alpha:0.2449},0).wait(1).to({alpha:0.2245},0).wait(1).to({alpha:0.2041},0).wait(1).to({alpha:0.1837},0).wait(1).to({alpha:0.1633},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.1224},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.0816},0).wait(1).to({alpha:0.0612},0).wait(1).to({alpha:0.0408},0).wait(1).to({alpha:0.0204},0).wait(1).to({alpha:0},0).wait(102));

	// _in10_sc
	this.instance_6 = new lib.CachedBmp_9();
	this.instance_6.setTransform(430.45,53.55,0.5,0.5);

	this.instance_7 = new lib.ClipGroup();
	this.instance_7.setTransform(670,27.1,1,1,0,0,0,46.5,10.5);

	this.instance_8 = new lib.CachedBmp_8();
	this.instance_8.setTransform(212.7,12.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(175));

	// base
	this.instance_9 = new lib.CachedBmp_6();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(175));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,352.5,45);
// library properties:
lib.properties = {
	id: 'F884B224D997483284F56B065FE31FD3',
	width: 728,
	height: 90,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/4in10_728x90_sc_atlas_1.png", id:"4in10_728x90_sc_atlas_1"}
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
an.compositions['F884B224D997483284F56B065FE31FD3'] = {
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