(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"4in10_300x250_en_atlas_1", frames: [[602,399,378,85],[0,263,600,180],[876,99,20,85],[0,0,505,261],[507,99,367,98],[602,199,367,98],[602,299,367,98],[507,0,462,97]]}
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



(lib.CachedBmp_8 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["4in10_300x250_en_atlas_1"]);
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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A0UKjIAA1FMAopAAAIAAVFg");
	this.shape.setTransform(130.075,67.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,260.2,135), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AuxDVIAAmpIdiAAIAAGpg");
	mask.setTransform(94.55,21.275);

	// Layer_3
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,189,42.5), null);


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
	mask.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask.setTransform(150,124.975);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,124.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib.RECOVER_300x250_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(18.6,188.3,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.setTransform(149.95,124.9,1,1,0,0,0,94.5,21.2);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},174).wait(76));

	// ppl_copy
	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(23.85,23.5,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(23.85,23.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},79).to({state:[]},10).to({state:[{t:this.instance_4}]},10).to({state:[]},10).to({state:[]},116).wait(25));

	// wp4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADtQgIAIgMAAQgMAAgJgJQgJgJAAgNIAAiGQgFABgFAAQgNAAgJgJQgJgIAAgNIAAh6QAAgVAPgOQAPgPAVAAIBRAAQAVAAAPAPQAPAOAAAVIAAB6QAAAMgJAJQgJAJgNAAQgGAAgEgBIAACGQAAANgJAJQgJAJgNAAQgLAAgJgIgAAHBUQADAEAAAEIAAB6QAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAj0QAAgEADgDQADgDAFAAQAEAAADADQADADAAAEIAABRQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAh6QAAgMgJgJQgJgJgMAAIhRAAQgMAAgKAJQgJAJAAAMIAAB6QAAAEADADQADADAFAAQAEAAADgDQADgDAAgEIAAhRQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAD0QAAAEADADQADADAEAAQAFAAADgDQADgDAAgEIAAh6QAAgEADgEQADgDADAAQAEAAADADgAgjidQgPgPAAgVQAAgVAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgVAAQgUAAgPgPgAgVjWQgJAJAAAMQAAANAJAJQAJAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgIgJgNAAQgMAAgJAJg");
	this.shape.setTransform(88.125,47.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(39).to({_off:false},0).wait(30).to({_off:true},156).wait(25));

	// wp3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAADtQgIAIgMAAQgMAAgJgJQgJgJAAgNIAAiGQgEABgGAAQgNAAgJgJQgJgJAAgMIAAh6QAAgVAPgOQAPgPAVAAIBRAAQAVAAAPAPQAPAOAAAVIAAB6QAAAMgJAJQgJAJgNAAQgGAAgEgBIAACGQAAANgJAJQgJAJgMAAQgMAAgJgIgAAHBUQADAEAAAEIAAB6QAAAEADADQADADAFAAQADAAAEgDQADgDAAgEIAAj0QAAgEACgDQADgDAFAAQAEAAADADQADADAAAEIAABRQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAh6QAAgMgJgJQgJgJgMAAIhRAAQgMAAgJAJQgJAJAAAMIAAB6QAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAhRQAAgEADgDQADgDAEAAQAFAAADADQACADAAAEIAAD0QAAAEADADQAEADADAAQAFAAADgDQADgDAAgEIAAh6QAAgEADgEQADgDADAAQAEAAADADgAgjidQgPgPAAgVQAAgVAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgVAAQgUAAgPgPgAgVjWQgJAJAAAMQAAANAJAJQAKAJALAAQAMAAAKgJQAJgJAAgNQAAgMgJgJQgJgJgNAAQgLAAgKAJg");
	this.shape_1.setTransform(69.75,47.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(29).to({_off:false},0).wait(40).to({_off:true},156).wait(25));

	// wp2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAADtQgIAIgLAAQgNAAgJgJQgJgJAAgNIAAiGQgEABgGAAQgNAAgJgJQgJgJAAgMIAAh6QAAgVAPgOQAPgPAVAAIBRAAQAVAAAPAPQAPAOAAAVIAAB6QAAANgJAIQgJAJgNAAQgFAAgFgBIAACGQAAANgJAJQgJAJgMAAQgMAAgJgIgAAHBUQADAEAAAEIAAB6QAAAEADADQADADAFAAQAEAAADgDQADgDAAgEIAAj0QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABRQAAAEADADQADADAEAAQAFAAADgDQADgDAAgEIAAh6QAAgMgJgJQgKgJgMAAIhRAAQgMAAgJAJQgJAJAAAMIAAB6QAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAhRQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEIAAD0QAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAh6QAAgEADgEQADgDADAAQAEAAADADgAgjidQgPgPAAgVQAAgVAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgVAAQgUAAgPgPgAgUjWQgJAJAAAMQAAANAJAJQAJAJALAAQANAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgNAAQgLAAgJAJg");
	this.shape_2.setTransform(51.375,47.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(19).to({_off:false},0).wait(50).to({_off:true},156).wait(25));

	// wp1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAADtQgIAIgLAAQgNAAgJgJQgJgJAAgNIAAiGQgFABgFAAQgNAAgJgJQgJgJAAgMIAAh6QAAgVAPgOQAPgPAVAAIBRAAQAVAAAPAPQAPAOAAAVIAAB6QAAANgJAIQgJAJgNAAQgFAAgFgBIAACGQAAANgJAJQgJAJgMAAQgMAAgJgIgAAHBUQADAEAAAEIAAB6QAAAEADADQADADAFAAQAEAAADgDQADgDAAgEIAAj0QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABRQAAAEADADQADADAEAAQAEAAAEgDQADgDAAgEIAAh6QAAgMgJgJQgKgJgMAAIhRAAQgMAAgJAJQgJAJAAAMIAAB6QAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAhRQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEIAAD0QAAAEADADQADADAEAAQAEAAADgDQADgDAAgEIAAh6QAAgEADgEQADgDADAAQAEAAADADgAgjidQgPgPAAgVQAAgVAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgVAAQgUAAgPgPgAgUjWQgJAJAAAMQAAANAJAJQAJAJALAAQANAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgNAAQgLAAgJAJg");
	this.shape_3.setTransform(33.025,47.975);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(60).to({_off:true},156).wait(25));

	// ppl
	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(23.85,23.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},225).wait(25));

	// white
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(151.4,172.6,1,1.0519,0,0,0,130.1,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:67.5,scaleY:1.0487,y:170.65,alpha:0.9796},0).wait(1).to({scaleY:1.0454,y:170.25,alpha:0.9592},0).wait(1).to({scaleY:1.0422,y:169.95,alpha:0.9388},0).wait(1).to({scaleY:1.039,y:169.6,alpha:0.9184},0).wait(1).to({scaleY:1.0357,y:169.25,alpha:0.898},0).wait(1).to({scaleY:1.0325,y:168.9,alpha:0.8776},0).wait(1).to({scaleY:1.0292,y:168.55,alpha:0.8571},0).wait(1).to({scaleY:1.026,y:168.2,alpha:0.8367},0).wait(1).to({scaleY:1.0227,y:167.9,alpha:0.8163},0).wait(1).to({scaleY:1.0195,y:167.5,alpha:0.7959},0).wait(1).to({scaleY:1.0163,y:167.2,alpha:0.7755},0).wait(1).to({scaleY:1.013,y:166.85,alpha:0.7551},0).wait(1).to({scaleY:1.0098,y:166.5,alpha:0.7347},0).wait(1).to({scaleY:1.0065,y:166.15,alpha:0.7143},0).wait(1).to({scaleY:1.0033,y:165.8,alpha:0.6939},0).wait(1).to({scaleY:1.0001,y:165.45,alpha:0.6735},0).wait(1).to({alpha:0.6531},0).wait(1).to({alpha:0.6327},0).wait(1).to({alpha:0.6122},0).wait(1).to({alpha:0.5918},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.5306},0).wait(1).to({alpha:0.5102},0).wait(1).to({alpha:0.4898},0).wait(1).to({alpha:0.4694},0).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.4082},0).wait(1).to({alpha:0.3878},0).wait(1).to({alpha:0.3673},0).wait(1).to({alpha:0.3469},0).wait(1).to({alpha:0.3265},0).wait(1).to({alpha:0.3061},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2653},0).wait(1).to({alpha:0.2449},0).wait(1).to({alpha:0.2245},0).wait(1).to({alpha:0.2041},0).wait(1).to({alpha:0.1837},0).wait(1).to({alpha:0.1633},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.1224},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.0816},0).wait(1).to({alpha:0.0612},0).wait(1).to({alpha:0.0408},0).wait(1).to({alpha:0.0204},0).wait(1).to({alpha:0},0).wait(150).to({_off:true},1).wait(50));

	// _in10_en
	this.instance_7 = new lib.CachedBmp_9();
	this.instance_7.setTransform(23.6,103.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},225).wait(25));

	// Layer_1
	this.instance_8 = new lib.CachedBmp_7();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_6();
	this.instance_9.setTransform(-1852.25,-489.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).to({state:[]},225).wait(25));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1702.2,-364.2,2002.2,614.2);
// library properties:
lib.properties = {
	id: '09CE6A8C91D8482C857128A08FA69732',
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/4in10_300x250_en_atlas_1.png", id:"4in10_300x250_en_atlas_1"}
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
an.compositions['09CE6A8C91D8482C857128A08FA69732'] = {
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