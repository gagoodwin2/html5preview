(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"over60_320x480_en_atlas_1", frames: [[642,792,220,49],[0,0,580,942],[0,944,640,320],[582,0,517,370],[582,372,517,138],[582,512,517,138],[582,652,517,138]]}
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



(lib.CachedBmp_7 = function() {
	this.initialize(ss["over60_320x480_en_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["over60_320x480_en_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["over60_320x480_en_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["over60_320x480_en_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["over60_320x480_en_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["over60_320x480_en_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["over60_320x480_en_atlas_1"]);
	this.gotoAndStop(6);
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
	this.shape.graphics.f("#FFFFFF").s().p("A5CRJMAAAgiRMAyFAAAMAAAAiRg");
	this.shape.setTransform(160.325,109.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,320.7,219.3), null);


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
	mask.graphics.p("AokB7IAAj1IRJAAIAAD1g");
	mask.setTransform(54.9,12.325);

	// Layer_3
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,109.8,24.5), null);


// stage content:
(lib._320x480_ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(30.85,72.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(30.85,72.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},99).to({state:[]},10).to({state:[{t:this.instance_1}]},10).to({state:[]},10).wait(46));

	// wp6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAFNQgLAMgRAAQgRAAgNgNQgNgNAAgSIAAi8QgGABgIAAQgSAAgMgMQgNgMAAgTIAAirQAAgdAVgVQAVgWAeAAIByAAQAdAAAVAWQAVAVAAAdIAACrQAAATgMAMQgNAMgSAAQgIAAgGgBIAAC8QAAASgNANQgMANgSAAQgQAAgNgMgAAKB3QAEAEAAAGIAACsQAAAGAFAFQAEADAGAAQAGAAAEgDQAEgFAAgGIAAlXQAAgGAFgEQAEgEAGgBQAFABAFAEQAEAEAAAGIAABxQAAAHAEAEQAEAEAGAAQAGAAAFgEQAEgEAAgHIAAirQAAgRgNgNQgNgNgRAAIhyAAQgSAAgNANQgMANAAARIAACrQAAAHAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgHIAAhxQAAgGAFgEQAEgEAGgBQAGABAEAEQAEAEAAAGIAAFXQAAAGAEAFQAFADAFAAQAGAAAFgDQAEgFAAgGIAAisQAAgGAEgEQAEgEAFgBQAGABAEAEgAgyjdQgVgVAAgeQAAgdAVgWQAWgUAcgBQAeABAVAUQAVAWAAAdQAAAegVAVQgVAVgeAAQgcAAgWgVgAgdkuQgNANAAARQAAASANANQAMANARAAQASAAANgNQAMgNAAgSQAAgRgMgNQgNgNgSAAQgRAAgMANg");
	this.shape.setTransform(172.875,107);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59).to({_off:false},0).wait(116));

	// wp5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAFNQgMAMgQAAQgRAAgNgNQgNgNAAgSIAAi8QgFABgJAAQgSAAgNgMQgMgMAAgTIAAirQAAgdAVgVQAVgWAeAAIByAAQAdAAAVAWQAVAVAAAdIAACrQAAATgNAMQgMAMgSAAQgIAAgGgBIAAC8QAAASgNANQgNANgRAAQgQAAgNgMgAALB3QAEAEgBAGIAACsQABAGAEAFQAEADAGAAQAGAAAEgDQAEgFAAgGIAAlXQAAgGAFgEQADgEAHgBQAFABAFAEQAEAEAAAGIAABxQAAAHAEAEQAFAEAFAAQAGAAAEgEQAEgEABgHIAAirQAAgRgNgNQgNgNgRAAIhyAAQgSAAgNANQgNANAAARIAACrQABAHAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgHIAAhxQABgGAEgEQAEgEAGgBQAFABAFAEQAEAEAAAGIAAFXQAAAGAEAFQAEADAGAAQAHAAAEgDQAEgFAAgGIAAisQAAgGAEgEQAEgEAFgBQAGABAFAEgAgxjdQgWgVAAgeQAAgdAWgWQAUgUAdgBQAdABAWAUQAVAWAAAdQAAAegVAVQgWAVgdAAQgdAAgUgVgAgekuQgMANAAARQAAASAMANQAOANAQAAQASAAANgNQAMgNAAgSQAAgRgMgNQgNgNgSAAQgQAAgOANg");
	this.shape_1.setTransform(147.05,107);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(49).to({_off:false},0).wait(126));

	// wp4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAFNQgMAMgQAAQgRAAgNgNQgNgNAAgSIAAi8QgGABgIAAQgSAAgNgMQgMgMAAgTIAAirQAAgdAVgVQAVgWAeAAIBxAAQAeAAAVAWQAVAVAAAdIAACrQAAATgMAMQgNAMgSAAQgIAAgGgBIAAC8QAAASgNANQgNANgRAAQgQAAgNgMgAAKB3QAEAEAAAGIAACsQAAAGAFAFQAEADAGAAQAGAAAEgDQAEgFAAgGIAAlXQAAgGAEgEQAFgEAFgBQAGABAFAEQAEAEAAAGIAABxQAAAHAEAEQAEAEAGAAQAGAAAFgEQAEgEAAgHIAAirQAAgRgNgNQgNgNgSAAIhxAAQgSAAgNANQgMANAAARIAACrQAAAHAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgHIAAhxQAAgGAFgEQAEgEAGgBQAGABAEAEQAEAEAAAGIAAFXQAAAGAEAFQAEADAGAAQAGAAAFgDQAEgFAAgGIAAisQAAgGAEgEQAEgEAFgBQAGABAEAEgAgyjdQgVgVAAgeQAAgdAVgWQAWgUAcgBQAeABAVAUQAVAWAAAdQAAAegVAVQgVAVgeAAQgcAAgWgVgAgdkuQgNANAAARQAAASANANQAMANARAAQASAAANgNQAMgNAAgSQAAgRgMgNQgNgNgSAAQgRAAgMANg");
	this.shape_2.setTransform(121.225,107);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(39).to({_off:false},0).wait(136));

	// wp3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAFNQgLAMgRAAQgSAAgMgNQgMgNAAgSIAAi8QgHABgIAAQgSAAgMgMQgNgMAAgTIAAirQAAgdAVgVQAVgWAdAAIBzAAQAdAAAVAWQAVAVAAAdIAACrQAAATgNAMQgMAMgSAAQgJAAgFgBIAAC8QAAASgNANQgNANgRAAQgRAAgMgMgAALB3QADAEAAAGIAACsQAAAGAFAFQAEADAGAAQAFAAAFgDQAEgFAAgGIAAlXQAAgGAFgEQADgEAHgBQAFABAFAEQAEAEAAAGIAABxQAAAHAEAEQAEAEAGAAQAGAAAEgEQAFgEAAgHIAAirQAAgRgNgNQgNgNgRAAIhzAAQgRAAgNANQgNANAAARIAACrQAAAHAFAEQAEAEAGAAQAGAAAEgEQAEgEABgHIAAhxQAAgGAEgEQAEgEAFgBQAGABAFAEQAEAEAAAGIAAFXQAAAGAEAFQAFADAFAAQAGAAAEgDQAFgFAAgGIAAisQAAgGAEgEQAEgEAFgBQAGABAFAEgAgxjdQgWgVABgeQgBgdAWgWQAUgUAdgBQAdABAWAUQAVAWAAAdQAAAegVAVQgWAVgdAAQgdAAgUgVgAgekuQgMANAAARQAAASAMANQAOANAQAAQARAAAOgNQAMgNAAgSQAAgRgMgNQgOgNgRAAQgQAAgOANg");
	this.shape_3.setTransform(95.4,107);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(29).to({_off:false},0).wait(146));

	// wp2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAFNQgMAMgQAAQgRAAgNgNQgNgNAAgSIAAi8QgGABgIAAQgSAAgNgMQgMgMAAgTIAAirQAAgdAVgVQAVgWAeAAIBxAAQAeAAAVAWQAVAVAAAdIAACrQAAATgMAMQgNAMgSAAQgIAAgGgBIAAC8QAAASgNANQgNANgRAAQgQAAgNgMgAAKB3QAEAEAAAGIAACsQAAAGAFAFQAEADAGAAQAGAAAEgDQAEgFAAgGIAAlXQAAgGAEgEQAEgEAGgBQAGABAFAEQAEAEAAAGIAABxQAAAHAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgHIAAirQAAgRgMgNQgNgNgSAAIhxAAQgSAAgNANQgMANAAARIAACrQAAAHAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgHIAAhxQAAgGAFgEQAEgEAGgBQAFABAFAEQAEAEAAAGIAAFXQAAAGAEAFQAEADAGAAQAGAAAFgDQAEgFAAgGIAAisQAAgGAEgEQAEgEAFgBQAGABAEAEgAgyjdQgVgVAAgeQAAgdAVgWQAVgUAdgBQAeABAVAUQAVAWAAAdQAAAegVAVQgVAVgeAAQgdAAgVgVgAgekuQgMANAAARQAAASAMANQANANARAAQASAAANgNQAMgNAAgSQAAgRgMgNQgNgNgSAAQgRAAgNANg");
	this.shape_4.setTransform(69.575,107);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(19).to({_off:false},0).wait(156));

	// wp1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAFNQgMAMgQAAQgRAAgOgNQgMgNAAgSIAAi8QgGABgIAAQgSAAgMgMQgNgMAAgTIAAirQAAgdAVgVQAVgWAdAAIBzAAQAdAAAVAWQAVAVAAAdIAACrQAAATgMAMQgNAMgSAAQgJAAgFgBIAAC8QAAASgNANQgNANgRAAQgQAAgNgMgAALB3QADAEAAAGIAACsQAAAGAFAFQADADAHAAQAFAAAFgDQAEgFAAgGIAAlXQAAgGAFgEQAEgEAGgBQAFABAEAEQAEAEABAGIAABxQgBAHAFAEQAEAEAGAAQAGAAAEgEQAFgEAAgHIAAirQAAgRgNgNQgNgNgRAAIhzAAQgRAAgNANQgNANAAARIAACrQAAAHAFAEQAEAEAGAAQAFAAAFgEQAEgEAAgHIAAhxQAAgGAEgEQAEgEAGgBQAHABAEAEQAEAEAAAGIAAFXQAAAGAEAFQAEADAGAAQAGAAAFgDQAEgFgBgGIAAisQABgGAEgEQAEgEAFgBQAGABAFAEgAgyjdQgVgVAAgeQAAgdAVgWQAWgUAcgBQAeABAUAUQAWAWAAAdQAAAegWAVQgUAVgeAAQgcAAgWgVgAgekuQgMANAAARQAAASAMANQANANARAAQARAAANgNQANgNAAgSQAAgRgNgNQgNgNgRAAQgRAAgNANg");
	this.shape_5.setTransform(43.75,107);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(166));

	// ppl
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(30.85,72.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175));

	// white
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(163.25,269.7,0.9792,1,0,0,0,160.6,109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:160.3,x:162.9,alpha:0.9865},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.9595},0).wait(1).to({alpha:0.9459},0).wait(1).to({alpha:0.9324},0).wait(1).to({alpha:0.9189},0).wait(1).to({alpha:0.9054},0).wait(1).to({alpha:0.8919},0).wait(1).to({alpha:0.8784},0).wait(1).to({alpha:0.8649},0).wait(1).to({alpha:0.8514},0).wait(1).to({alpha:0.8378},0).wait(1).to({alpha:0.8243},0).wait(1).to({alpha:0.8108},0).wait(1).to({alpha:0.7973},0).wait(1).to({alpha:0.7838},0).wait(1).to({alpha:0.7703},0).wait(1).to({alpha:0.7568},0).wait(1).to({alpha:0.7432},0).wait(1).to({alpha:0.7297},0).wait(1).to({alpha:0.7162},0).wait(1).to({alpha:0.7027},0).wait(1).to({alpha:0.6892},0).wait(1).to({alpha:0.6757},0).wait(1).to({alpha:0.6622},0).wait(1).to({alpha:0.6486},0).wait(1).to({alpha:0.6351},0).wait(1).to({alpha:0.6216},0).wait(1).to({alpha:0.6081},0).wait(1).to({alpha:0.5946},0).wait(1).to({alpha:0.5811},0).wait(1).to({alpha:0.5676},0).wait(1).to({alpha:0.5541},0).wait(1).to({alpha:0.5405},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.5135},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4865},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.4595},0).wait(1).to({alpha:0.4459},0).wait(1).to({alpha:0.4324},0).wait(1).to({alpha:0.4189},0).wait(1).to({alpha:0.4054},0).wait(1).to({alpha:0.3919},0).wait(1).to({alpha:0.3784},0).wait(1).to({alpha:0.3649},0).wait(1).to({alpha:0.3514},0).wait(1).to({alpha:0.3378},0).wait(1).to({alpha:0.3243},0).wait(1).to({alpha:0.3108},0).wait(1).to({alpha:0.2973},0).wait(1).to({alpha:0.2838},0).wait(1).to({alpha:0.2703},0).wait(1).to({alpha:0.2568},0).wait(1).to({alpha:0.2432},0).wait(1).to({alpha:0.2297},0).wait(1).to({alpha:0.2162},0).wait(1).to({alpha:0.2027},0).wait(1).to({alpha:0.1892},0).wait(1).to({alpha:0.1757},0).wait(1).to({alpha:0.1622},0).wait(1).to({alpha:0.1486},0).wait(1).to({alpha:0.1351},0).wait(1).to({alpha:0.1216},0).wait(1).to({alpha:0.1081},0).wait(1).to({alpha:0.0946},0).wait(1).to({alpha:0.0811},0).wait(1).to({alpha:0.0676},0).wait(1).to({alpha:0.0541},0).wait(1).to({alpha:0.0405},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.0135},0).wait(1).to({alpha:0},0).wait(101));

	// over60_en
	this.instance_4 = new lib.CachedBmp_11();
	this.instance_4.setTransform(30.85,188,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(175));

	// base
	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(13.9,0,0.5,0.5);

	this.instance_6 = new lib.ClipGroup();
	this.instance_6.setTransform(248.6,444.15,1,1,0,0,0,54.9,12.3);

	this.instance_7 = new lib.CachedBmp_5();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(175));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160,240,160,231);
// library properties:
lib.properties = {
	id: '1AC7F6FA74FC4BC59984F8CB017E5DB6',
	width: 320,
	height: 480,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/over60_320x480_en_atlas_1.png", id:"over60_320x480_en_atlas_1"}
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
an.compositions['1AC7F6FA74FC4BC59984F8CB017E5DB6'] = {
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