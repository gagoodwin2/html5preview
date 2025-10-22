(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.kv = function() {
	this.initialize(img.kv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);// helper functions:

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


(lib.white_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A8HGQIAAsfMA4PAAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white_bg, new cjs.Rectangle(-180,-40,360,80), null);


(lib.s3_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1E2946").s().p("AgLAMQgFgEAAgIQAAgGAFgFQAEgFAHAAQAHAAAGAFQAEAFAAAGQAAAIgEAEQgGAFgHAAQgHAAgEgFg");
	this.shape.setTransform(51.3,45.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AgkBFQgRgKgJgSQgKgRAAgYQAAgWAJgSQAKgRAQgKQARgKAUAAQAVAAAQAIQAQAJAJARQAKAPAAAXIAAAKIh2AAIAAACQABAXANANQANANAUAAQASAAAKgIQAMgIAEgPIAZAAQgEAYgTAPQgSAOgaAAQgXAAgQgJgAgdgsQgNALgDASIBcAAQgBgTgNgLQgNgLgUAAQgQAAgNAMg");
	this.shape_1.setTransform(40.3,38.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AgmBNIAAiYIAVAAIAEAWQAGgKAKgHQAKgFATAAIAHAAIAAAXIgNAAQgWAAgIAPQgJAOAAAXIAABNg");
	this.shape_2.setTransform(27.925,38.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("AgmBEQgSgKgJgRQgKgRAAgYQAAgWAKgSQAJgRASgKQARgKAVAAQAWAAARAKQATAKAIARQAKATAAAVQAAAXgKASQgIARgTAKQgQAKgXAAQgWAAgQgKgAgagwQgLAHgHANQgGAOAAAOQAAAPAGAOQAHANALAHQALAHAPAAQAPAAALgHQAMgHAGgNQAGgMABgRQgBgPgGgNQgGgNgMgHQgMgHgOAAQgOAAgMAHg");
	this.shape_3.setTransform(13.65,38.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("ABaBOIAAhWQAAgXgKgMQgKgLgRAAQgSAAgMANQgLAOAAAXIAABSIgXAAIAAhWQAAgWgKgNQgKgLgRAAQgSAAgMAOQgLAOAAAYIAABQIgYAAIAAiYIAVAAIADAVQARgYAcAAQARAAAMAIQANAIAFAOQARgeAkAAQAaAAAQAQQAQARAAAiIAABYg");
	this.shape_4.setTransform(-7.975,38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AAsBOIAAhUQAAgWgLgOQgLgMgTAAQgWAAgLAPQgNAQAAAYIAABNIgYAAIAAiYIAVAAIADAUQASgWAfgBQAcAAARARQARARAAAkIAABVg");
	this.shape_5.setTransform(-37.25,38.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("AgmBNIAAiYIAWAAIADAWQAFgJALgIQAKgFATAAIAHAAIAAAXIgMAAQgXAAgIAPQgJAOAAAXIAABNg");
	this.shape_6.setTransform(-50.1,38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("Ag6BCQgPgMAAgUQAAgYAPgLQARgMAdAAIAsAAIAAgLQAAgPgKgIQgJgIgSAAQgQAAgKAHQgKAHgDALIgZAAQADgWARgNQASgMAbAAQAcAAAQAOQARAPAAAaIAABBQAAALAKAAIAHAAIAAAXIgNAAQgPAAgGgGQgHgHABgLQgTAZggAAQgZAAgQgMgAgxAgQABAMAIAGQAJAHAQAAQAUAAAPgLQAMgMAAgUIAAgHIguAAQgjAAAAAZg");
	this.shape_7.setTransform(-63.5,38.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("AgkBFQgQgKgLgSQgIgSgBgXQABgWAIgSQAJgRARgKQARgKAUAAQAVAAAQAIQARAJAIARQAKAPAAAXIAAAKIh2AAIAAACQABAXANANQANANAUAAQARAAAMgIQALgIAEgPIAZAAQgFAYgRAPQgTAOgaAAQgXAAgQgJgAgdgsQgNALgDASIBcAAQgBgTgNgLQgNgLgUAAQgPAAgOAMg");
	this.shape_8.setTransform(-80.2,38.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("AgLBpIAAjRIAYAAIAADRg");
	this.shape_9.setTransform(-91.55,36.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("AgnBEQgRgKgKgRQgJgSAAgXQAAgVAJgTQAKgRARgKQASgKAVAAQAWAAASAKQARAKAKARQAJATAAAVQAAAXgJASQgKARgRAKQgRAKgXAAQgWAAgRgKgAgZgwQgMAHgGANQgHANABAPQgBARAHAMQAGANAMAHQAKAHAPAAQAQAAAKgHQAMgHAGgNQAHgMgBgRQABgPgHgNQgGgNgMgHQgLgHgPAAQgOAAgLAHg");
	this.shape_10.setTransform(-111.05,38.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2946").s().p("AAUBiQgVAAgJgKQgJgJAAgVIAAhZIgcAAIAAgXIAcAAIAAgrIAXAAIAAArIAnAAIAAAXIgnAAIAABZQAAAJAEAEQAEAEAJABIAbAAIAAAWg");
	this.shape_11.setTransform(-124.25,36.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2946").s().p("AgmBNIAAiYIAWAAIADAWQAGgJAKgIQAKgFATAAIAHAAIAAAXIgNAAQgVAAgJAPQgJAQAAAVIAABNg");
	this.shape_12.setTransform(125.2,2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2946").s().p("AgkBFQgQgKgKgSQgKgRAAgYQABgWAIgSQAKgRAQgKQARgKAUAAQAVAAAQAIQARAJAIARQAJAPACAXIgBAKIh2AAIAAACQABAXANANQANANAVAAQAQAAAMgIQAMgIADgPIAZAAQgFAYgRAPQgTAOgZAAQgWAAgSgJgAgegsQgMALgDASIBcAAQgCgTgNgLQgMgLgTAAQgRAAgOAMg");
	this.shape_13.setTransform(111.25,2.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2946").s().p("AgnBhQgRgKgJgRQgJgSAAgYQAAgYAJgQQAJgRARgLQASgKAUAAQASAAANAHQANAHAIALIAAhQIAYAAIAADRIgVAAIgDgZQgTAbghAAQgVAAgRgJgAgjgMQgOAOAAAaQAAAZAOAPQAOAQAWAAQAPAAALgHQALgHAHgNQAGgMAAgRQAAgQgGgMQgHgNgLgIQgMgHgOAAQgWAAgOAQg");
	this.shape_14.setTransform(93.675,0.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2946").s().p("AgLBqIAAiYIAYAAIAACYgAgKhOQgFgEAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_15.setTransform(82.15,-0.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2946").s().p("AgOBNIg5iYIAaAAIAtB7IAuh7IAaAAIg5CYg");
	this.shape_16.setTransform(71.8,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2946").s().p("AgnBEQgSgKgIgRQgKgSAAgXQAAgVAKgTQAIgRASgKQASgKAVAAQAWAAASAKQARAKAKARQAJASAAAWQAAAYgJARQgKARgRAKQgRAKgXAAQgWAAgRgKgAgZgwQgMAHgGANQgHANABAPQgBARAHAMQAGANAMAHQAKAHAPAAQAQAAAKgHQAMgHAGgNQAHgOAAgPQAAgOgHgOQgGgNgMgHQgLgHgPAAQgNAAgMAHg");
	this.shape_17.setTransform(56.35,2.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2946").s().p("AgmBNIAAiYIAVAAIAEAWQAFgJALgIQALgFASAAIAHAAIAAAXIgMAAQgWAAgJAPQgJAPAAAWIAABNg");
	this.shape_18.setTransform(43.7,2.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E2946").s().p("AhKBrIAAjTIAVAAIADAYQAUgbAgAAQAWAAAQAKQARAKAJARQAJARAAAZQAAAXgJARQgJAQgRALQgQAKgWAAQgSAAgNgGQgNgHgIgMIAABTgAgahNQgLAGgHAOQgGANAAAPQAAARAGAMQAHAMALAIQALAHAPAAQAWAAAOgPQAOgPAAgZQAAgZgOgQQgOgPgWAAQgOgBgMAIg");
	this.shape_19.setTransform(29.475,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2946").s().p("AgkBFQgQgJgKgTQgKgRAAgYQAAgWAJgSQAKgSAQgJQARgKAUAAQAUAAARAIQAQAJAKARQAJARABAVIgBAKIh2AAIAAACQABAWANAOQANANAUAAQARAAALgIQAMgIAEgPIAZAAQgFAYgSAPQgSAOgaAAQgWAAgRgJgAgdgsQgOALgBASIBbAAQgCgTgNgLQgMgLgUAAQgQAAgNAMg");
	this.shape_20.setTransform(4.025,2.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E2946").s().p("AgmBNIAAiYIAWAAIADAWQAGgJAKgIQAKgFATAAIAHAAIAAAXIgMAAQgXAAgIAPQgKAQABAVIAABNg");
	this.shape_21.setTransform(-8.35,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E2946").s().p("Ag6BCQgPgMgBgUQAAgYAQgLQARgMAdAAIAsAAIAAgLQAAgOgKgJQgJgIgSAAQgQAAgLAHQgKAHgCALIgZAAQADgWARgNQARgMAcAAQAdAAAPAOQAQAOAAAbIAABBQABALAKAAIAIAAIAAAXIgOAAQgPAAgGgGQgGgGgBgMQgRAZghAAQgZAAgQgMgAgxAgQABAMAIAGQAJAHAQAAQAVAAANgLQANgMAAgUIAAgHIguAAQgjAAAAAZg");
	this.shape_22.setTransform(-21.75,2.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E2946").s().p("AgiBEQgRgJgKgSQgJgSAAgXQAAgXAKgRQAJgRARgKQASgKAUAAQAbAAARAOQASAPAFAZIgZAAQgDgPgMgJQgMgIgQAAQgVAAgOAPQgNAQAAAYQAAAZANAQQAOAPAVAAQASAAAKgIQAMgJADgPIAZAAQgGAagRAOQgRAOgcAAQgWAAgPgKg");
	this.shape_23.setTransform(-38.4,2.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E2946").s().p("AAsBpIAAhUQAAgVgLgOQgLgNgUAAQgVAAgMAQQgMANAAAbIAABMIgZAAIAAjRIAZAAIAABSQAIgMAMgHQAMgIASAAQAbAAASARQAQARAAAjIAABVg");
	this.shape_24.setTransform(-54.95,0.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E2946").s().p("AATBiQgUAAgJgKQgKgJABgVIAAhZIgcAAIAAgXIAcAAIAAgrIAXAAIAAArIAnAAIAAAXIgnAAIAABZQAAAJAEAEQAEAEAJABIAbAAIAAAWg");
	this.shape_25.setTransform(-68.45,0.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E2946").s().p("AgLBpIAAjRIAXAAIAADRg");
	this.shape_26.setTransform(-76.275,0.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E2946").s().p("Ag6BCQgPgMgBgUQAAgYAQgLQARgMAdAAIAsAAIAAgLQAAgOgKgJQgJgIgSAAQgQAAgLAHQgKAHgCALIgZAAQADgWARgNQARgMAcAAQAdAAAPAOQAQAOABAbIAABBQgBALALAAIAIAAIAAAXIgOAAQgPAAgGgGQgHgGAAgMQgRAZghAAQgZAAgQgMgAgxAgQABAMAIAGQAJAHAQAAQAVAAANgLQANgMAAgUIAAgHIguAAQgjAAAAAZg");
	this.shape_27.setTransform(-87,2.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E2946").s().p("AgkBFQgQgJgKgTQgKgTAAgWQAAgXAKgRQAJgRAQgKQARgKAUAAQAUAAARAIQAQAJAKARQAJARABAVIgBAKIh2AAIAAACQABAWANAOQANANAUAAQARAAAMgIQALgIAEgPIAZAAQgFAYgSAPQgSAOgaAAQgWAAgRgJgAgdgsQgOALgBASIBbAAQgCgUgMgKQgNgLgUAAQgPAAgOAMg");
	this.shape_28.setTransform(-103.725,2.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E2946").s().p("AAsBpIAAhUQAAgWgKgNQgLgNgVAAQgTAAgNAQQgNAOAAAaIAABMIgZAAIAAjRIAZAAIAABSQAHgMANgHQANgIARAAQAcAAARARQARAQAAAkIAABVg");
	this.shape_29.setTransform(-120.45,0.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1E2946").s().p("AgmBNIAAiYIAVAAIAEAWQAGgKAKgHQAKgFATAAIAHAAIAAAXIgMAAQgXAAgIAPQgJAOAAAXIAABNg");
	this.shape_30.setTransform(35.125,-33.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1E2946").s().p("AgxA9QgRgRAAgkIAAhUIAZAAIAABSQAAAYAKAMQAKANAUAAQAUAAALgPQAMgPAAgZIAAhMIAZAAIAACYIgVAAIgEgVQgRAWgfAAQgbAAgQgQg");
	this.shape_31.setTransform(21.075,-33.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E2946").s().p("AgmBEQgTgKgIgRQgKgSAAgXQAAgVAKgTQAIgRATgKQARgKAVAAQAWAAARAKQASAKAJARQAKASAAAWQAAAYgKARQgJARgSAKQgQAKgXAAQgWAAgQgKgAgagwQgLAHgHANQgFANgBAPQABARAFAMQAHANALAHQALAHAPAAQAQAAAKgHQANgHAFgNQAHgOAAgPQAAgOgHgOQgFgNgNgHQgLgHgPAAQgOAAgMAHg");
	this.shape_32.setTransform(4.2,-33.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E2946").s().p("Ag/BqIAAgWIAVAAQAIAAADgBQADgCADgEIAOgdIg8iZIAaAAIAuB7IAth7IAaAAIhGCxQgDALgGAKQgEAHgGADQgIAEgJgBg");
	this.shape_33.setTransform(-11.2,-30.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E2946").s().p("AAUBiQgVAAgJgKQgKgJAAgVIAAhZIgbAAIAAgXIAbAAIAAgrIAYAAIAAArIAnAAIAAAXIgnAAIAABZQABAJADAEQAEAEAJABIAbAAIAAAWg");
	this.shape_34.setTransform(-31.3,-35.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1E2946").s().p("AgLBpIAAjRIAXAAIAADRg");
	this.shape_35.setTransform(-39.125,-35.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E2946").s().p("AgxA9QgRgRAAgkIAAhUIAZAAIAABSQgBAYALAMQALANASAAQAVAAAMgPQALgQAAgYIAAhMIAZAAIAACYIgWAAIgDgVQgSAWgdAAQgcAAgQgQg");
	this.shape_36.setTransform(-50.5,-33.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E2946").s().p("AgsBBQgSgOgBgZIAZAAQABAOALAJQAMAJARAAQAQgBAKgGQAKgGAAgLQAAgJgFgEQgEgGgIgBQgEgCgSgCQgTgCgMgEQgMgEgJgHQgHgIAAgQQAAgNAHgLQAIgKANgHQANgFARAAQAZgBASANQAQAMADAYIgZAAQgCgMgKgHQgLgJgNAAQgPABgKAGQgKAHAAAKQAAAIAEAEQAFAEAHACIAUADQARACARAFQANAEAIAIQAIALAAAOQAAANgJAMQgHAKgOAGQgPAGgQgBQgdAAgSgNg");
	this.shape_37.setTransform(-66.075,-33.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E2946").s().p("AAsBOIAAhUQAAgWgLgOQgKgMgVAAQgUAAgMAPQgNAPAAAZIAABNIgYAAIAAiYIAVAAIADAUQASgWAggBQAcAAAQARQARARAAAkIAABVg");
	this.shape_38.setTransform(-81.875,-33.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1E2946").s().p("AgmBEQgSgKgJgRQgKgSAAgXQAAgVAKgTQAJgRASgKQARgKAVAAQAWAAASAKQARAKAKARQAJATAAAVQAAAXgJASQgKARgRAKQgRAKgXAAQgWAAgQgKgAgagwQgKAHgIANQgFANAAAPQAAARAFAMQAIANAKAHQALAHAPAAQAQAAAKgHQAMgHAGgNQAHgMAAgRQAAgPgHgNQgGgNgMgHQgLgHgPAAQgOAAgMAHg");
	this.shape_39.setTransform(-99.1,-33.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1E2946").s().p("AgtBeQgXgNgNgZQgMgYAAggQAAgfAMgYQANgYAXgNQAWgOAdAAQAjAAAXATQAYATAGAhIgaAAQgGgWgQgMQgQgNgZAAQgVAAgQALQgQAKgKATQgIATgBAXQABAYAIATQAJATARAKQAQALAVAAQAYAAARgMQAPgMAGgXIAaAAQgFAhgYATQgWATgkAAQgdAAgWgNg");
	this.shape_40.setTransform(-118.3,-35.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s3_mc, new cjs.Rectangle(-129,-46.6,258.1,93.30000000000001), null);


(lib.s2_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1E2946").s().p("AgLAMQgFgEAAgIQAAgGAFgFQAEgFAHAAQAIAAAEAFQAFAGAAAFQAAAHgFAFQgEAFgIAAQgHAAgEgFg");
	this.shape.setTransform(22.775,80.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AAUBiQgVAAgJgKQgKgJABgVIAAhaIgcAAIAAgWIAcAAIAAgrIAXAAIAAArIAnAAIAAAWIgnAAIAABZQAAALAEAEQAEADAJAAIAbAAIAAAXg");
	this.shape_1.setTransform(14.45,72.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AgLBqIAAiYIAXAAIAACYgAgKhOQgFgEAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_2.setTransform(6.625,71.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("AgsBBQgSgOgBgZIAZAAQAAAOAMAJQAMAJARAAQARAAAJgHQAKgGAAgLQAAgJgEgEQgFgGgIgBIgWgEQgTgDgMgDQgMgEgIgIQgIgHAAgQQAAgOAHgKQAJgLAMgGQAOgFAQAAQAaAAARAMQAQAMADAYIgZAAQgBgMgLgHQgKgJgOABQgPAAgKAGQgKAHAAAKQAAAJAFADQAEAFAHABIAVADQASACAPAFQANAEAIAIQAIAJAAARQAAANgIALQgIAKgOAGQgPAFgQAAQgcAAgTgNg");
	this.shape_3.setTransform(-3.775,74.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("AgLBqIAAiYIAXAAIAACYgAgKhOQgFgEAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_4.setTransform(-14.125,71.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AgOBMIg5iYIAaAAIAuB8IAth8IAaAAIg5CYg");
	this.shape_5.setTransform(-24.475,74.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("AgjBFQgRgKgKgSQgJgRAAgYQgBgWAKgSQAIgRASgKQARgKATAAQAVAAAQAIQARAJAJARQAKARAAAVIgBAKIh1AAIAAACQAAAVANAPQANANAUAAQARAAALgIQANgIADgPIAZAAQgFAYgSAPQgSAOgaAAQgVAAgRgJgAgdgsQgOALgBASIBbAAQgCgTgNgLQgMgLgTAAQgRAAgNAMg");
	this.shape_6.setTransform(-48.1,74.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("AAsBNIAAhTQAAgXgLgNQgLgMgUAAQgUAAgNAPQgMAPAAAZIAABMIgYAAIAAiYIAVAAIADAVQASgXAgAAQAcABAQAQQARARAAAkIAABUg");
	this.shape_7.setTransform(-64.775,74.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("AgmBEQgSgKgJgRQgKgRAAgYQAAgWAKgSQAJgRASgKQARgKAVAAQAWAAASAKQARAKAJARQAKATAAAVQAAAXgKASQgJARgRAKQgRAKgXAAQgWAAgQgKgAgagwQgLAHgHANQgGAOAAAOQAAAPAGAOQAHANALAHQALAHAPAAQAPAAALgHQAMgHAGgNQAHgMAAgRQAAgPgHgNQgGgNgMgHQgMgHgOAAQgOAAgMAHg");
	this.shape_8.setTransform(-82,74.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("AArBNIAAhTQAAgXgKgNQgLgMgTAAQgWAAgMAPQgMAOAAAaIAABMIgYAAIAAiYIAVAAIADAVQARgXAgAAQAcABARAQQARASAAAjIAABUg");
	this.shape_9.setTransform(-106.9,74.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("AgLBqIAAiYIAXAAIAACYgAgKhOQgFgEAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_10.setTransform(-118.475,71.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2946").s().p("AgnBhQgRgKgJgRQgJgSAAgYQAAgYAJgQQAJgRARgLQASgKAUAAQARAAAOAHQANAHAIALIAAhQIAYAAIAADRIgVAAIgDgZQgTAbghAAQgVAAgRgJgAgjgMQgOAPAAAZQAAAYAOAQQAOAQAWAAQAPAAALgHQAMgHAGgNQAGgOAAgPQAAgPgGgNQgGgNgMgIQgMgHgOAAQgWAAgOAQg");
	this.shape_11.setTransform(89.075,36.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2946").s().p("AgkBFQgQgKgKgSQgKgTAAgWQAAgXAKgRQAJgRAQgKQARgKAUAAQAUAAARAIQARAJAJARQAJARABAVIgBAKIh2AAIAAACQABAXANANQANANAVAAQAQAAAMgIQALgIAEgPIAZAAQgFAYgSAPQgSAOgaAAQgWAAgRgJgAgdgsQgOALgBASIBbAAQgCgUgMgKQgNgLgUAAQgPAAgOAMg");
	this.shape_12.setTransform(72.175,38.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2946").s().p("AgOBMIg5iYIAaAAIAtB8IAuh8IAaAAIg5CYg");
	this.shape_13.setTransform(57.075,38.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2946").s().p("AgjBFQgRgKgKgSQgJgRAAgYQgBgWAKgSQAIgRARgKQARgKAUAAQAVAAAQAIQARAJAJARQAIAPACAXIgBAKIh2AAIAAACQABAXANANQANANAUAAQARAAALgIQANgIADgPIAZAAQgFAYgSAPQgSAOgaAAQgXAAgPgJgAgegsQgMALgCASIBbAAQgCgTgNgLQgMgLgUAAQgQAAgOAMg");
	this.shape_14.setTransform(41.9,38.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2946").s().p("AgMBqIAAiYIAYAAIAACYgAgKhOQgFgEAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_15.setTransform(30.65,35.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2946").s().p("AAsBpIAAhUQAAgWgLgNQgLgNgUAAQgUABgMAPQgNANAAAaIAABNIgZAAIAAjRIAZAAIAABSQAIgMAMgIQAMgHARAAQAdAAAQARQASARAAAiIAABWg");
	this.shape_16.setTransform(19.325,35.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2946").s().p("AgjBEQgRgKgJgRQgJgSAAgXQAAgXAJgRQALgSAQgJQARgKAWAAQAaAAASAOQARAPAFAZIgZAAQgDgPgMgJQgMgIgPAAQgWAAgNAPQgOAQAAAYQAAAZAOAQQANAPAWAAQARAAALgIQAKgJAEgPIAZAAQgFAagRAOQgSAOgbAAQgXAAgQgKg");
	this.shape_17.setTransform(2.6,38.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2946").s().p("Ag6BCQgPgMAAgUQAAgYAPgLQARgMAdAAIAsAAIAAgLQAAgOgKgJQgJgIgSAAQgPAAgLAHQgKAGgDAMIgZAAQADgWARgNQARgMAcAAQAcAAARAOQAQAPAAAaIAABBQAAALAKAAIAHAAIAAAXIgNAAQgOAAgHgGQgHgHAAgLQgSAZggAAQgZAAgQgMgAgxAgQAAAMAJAGQAJAHAQAAQAVAAANgLQANgMAAgUIAAgHIguAAQgjAAAAAZg");
	this.shape_18.setTransform(-13.025,38.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E2946").s().p("AgjBFQgSgKgJgSQgJgRAAgYQAAgWAJgSQAIgRASgKQARgKATAAQAVAAARAIQAQAJAJARQAKARAAAVIgBAKIh1AAIAAACQAAAVANAPQANANAVAAQAQAAAMgIQAMgIADgPIAZAAQgFAYgSAPQgSAOgaAAQgWAAgQgJgAgdgsQgOALgBASIBbAAQgCgTgNgLQgMgLgTAAQgRAAgNAMg");
	this.shape_19.setTransform(-37.85,38.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2946").s().p("AgdBjQgMgGgJgMIgDAXIgVAAIAAjRIAYAAIAABSQAUgbAgAAQAVAAARAKQAQAJAKASQAJARAAAYQAAAWgJASQgKASgRAKQgPAKgWAAQgSAAgNgHgAgagVQgLAHgGANQgHAMAAAQQAAARAHANQAFAMAMAIQALAHAPAAQAXAAANgQQAOgPAAgZQAAgagOgOQgNgQgXAAQgOAAgMAHg");
	this.shape_20.setTransform(-54.75,36.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E2946").s().p("AAsBNIAAhTQAAgXgLgNQgKgMgVAAQgUAAgMAPQgNAOAAAaIAABMIgYAAIAAiYIAVAAIADAVQASgXAgAAQAcABAQAQQARARAAAkIAABUg");
	this.shape_21.setTransform(-80.125,38.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E2946").s().p("Ag6BCQgPgMAAgUQAAgYAPgLQARgMAdAAIAsAAIAAgLQAAgOgKgJQgKgIgRAAQgPAAgLAHQgKAGgDAMIgZAAQADgWARgNQARgMAcAAQAcAAARAOQAQAPAAAaIAABBQAAALAKAAIAHAAIAAAXIgNAAQgOAAgHgGQgHgHAAgLQgSAZggAAQgaAAgPgMgAgxAgQAAAMAJAGQAJAHAQAAQAVAAANgLQANgMAAgUIAAgHIguAAQgjAAAAAZg");
	this.shape_22.setTransform(-96.475,38.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E2946").s().p("AgjBEQgRgKgJgRQgJgTAAgWQAAgVAJgTQAKgSARgJQARgKAWAAQAbAAARAOQARAPAFAZIgZAAQgEgPgLgJQgLgIgRAAQgUAAgOAPQgOAQABAYQgBAZAOAQQAOAPAUAAQASAAALgIQALgJADgPIAZAAQgEAagTAOQgRAOgcAAQgWAAgQgKg");
	this.shape_23.setTransform(-113.15,38.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FA0031").s().p("Ag3A+QgSgRAAgnIAAhTIAqAAIAABOQAAAVAIAKQAIALAPAAQAPAAAIgMQAJgLAAgVIAAhMIAqAAIAACZIglAAIgFgTQgGAKgMAGQgKAFgQAAQgbAAgQgQg");
	this.shape_24.setTransform(76.55,2.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FA0031").s().p("AgUBpIAAjRIApAAIAADRg");
	this.shape_25.setTransform(64.175,-0.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FA0031").s().p("AgbBpIAAh1IgZAAIAAgkIAZAAIAAgOQAAgVAMgKQALgLAXAAIAiAAIAAAkIgaAAQgGAAgDADQgDADAAAHIAAAHIAmAAIAAAkIgmAAIAAB1g");
	this.shape_26.setTransform(55.225,-0.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E2946").s().p("AhMBcQgTgOAAgaQAAgSALgPQAMgQAYgKQgMgOgEgKQgFgLAAgNQAAgOAIgMQAHgLAPgHQANgHARAAQANAAALAGQALAGAHALQAGALAAAMQAAATgMAOQgMAPgaALIApAuIAjg0IAbAAIgvBFIAMANQAFAFADABQAEACAHAAIAUAAIAAAWIgXAAQgKAAgIgCQgIgDgGgGIgMgOQgaAbggAAQgdAAgSgPgAg+AaQgIAKAAAOQAAAQAMAKQALAJATAAQAYAAATgVIgyg5QgSAJgJAKgAgihNQgJAIAAANQAAALAEAIQAEAIALANQAmgPAAgcQAAgMgHgHQgHgHgLAAQgPAAgIAIg");
	this.shape_27.setTransform(31.025,-0.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FA0031").s().p("Ag3BbQgVgQgDgdIAqAAQADANAJAHQAKAGAOABQAUAAALgQQAKgQAAgdIAAgGIgEAHQgHAKgMAHQgOAFgNAAQgVAAgQgIQgQgJgJgQQgJgPAAgVQAAgUAKgRQAKgRASgIQASgKAWAAQATAAASAIQAQAIALAPQALANAEAUQAGAQAAAZQAAAzgXAcQgWAdgpAAQggAAgTgQgAgcg9QgKAJAAASQAAAQAKAKQAJAKAQAAQAPAAAKgKQAKgLAAgPQAAgSgKgJQgJgLgQAAQgPAAgKALg");
	this.shape_28.setTransform(2.75,-0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FA0031").s().p("AACBpIAAiFQgDABgIAAIgjAAIAAgkIAgAAQAHABAFgHQADgGAAgJIAAgUIAqAAIAADRg");
	this.shape_29.setTransform(-12.975,-0.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FA0031").s().p("AgzARIAAghIBnAAIAAAhg");
	this.shape_30.setTransform(-23.2,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FA0031").s().p("AhYBpIAAjRIBJAAQAdAAAaANQAYANAMAYQAOAZAAAdQAAAegOAYQgMAYgYANQgZAOgeAAgAgrBEIAcAAQAbgBAQgSQAPgSAAgfQAAgegPgSQgQgSgbAAIgcAAg");
	this.shape_31.setTransform(-40.2,-0.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FA0031").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_32.setTransform(-55.15,-0.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FA0031").s().p("AgaBpIhHjRIAvAAIAyCaIAziaIAvAAIhHDRg");
	this.shape_33.setTransform(-68.9,-0.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FA0031").s().p("Ag1BdQgZgPgMgXQgNgYAAgfQAAgdANgZQANgYAYgOQAXgOAeAAQAfAAAXAOQAYAOANAYQANAZAAAdQAAAfgNAYQgNAYgYAOQgXAOgfAAQgdAAgYgOgAgeg7QgNAKgHAPQgHAQAAASQAAAUAHAPQAHARANAIQAOAJAQAAQARAAANgJQANgIAIgRQAHgPAAgUQAAgSgHgQQgIgQgNgJQgNgJgRAAQgQAAgOAJg");
	this.shape_34.setTransform(-89.125,-0.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FA0031").s().p("AgvBeQgYgOgMgYQgMgXAAghQAAggAMgXQAMgYAYgOQAXgNAeAAQAaAAATAKQATAKAMARQAMARACAXIgtAAQgDgRgNgLQgMgLgTAAQgYAAgPATQgPATAAAeQAAAfAPATQAPATAYAAQATAAAMgLQANgKADgSIAtAAQgCAXgMARQgMASgTAJQgTAKgaAAQgeAAgXgNg");
	this.shape_35.setTransform(-110.775,-0.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E2946").s().p("AAUBiQgVAAgJgKQgJgJAAgVIAAhaIgcAAIAAgWIAcAAIAAgrIAXAAIAAArIAnAAIAAAWIgnAAIAABZQABALADAEQAEADAJAAIAbAAIAAAXg");
	this.shape_36.setTransform(115.6,-35.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E2946").s().p("AgsBBQgSgOAAgZIAYAAQABAOALAJQAMAJARAAQARAAAJgHQAKgGAAgLQAAgJgFgEQgFgGgHgBIgWgEQgUgDgLgDQgNgDgHgJQgJgHABgQQgBgOAJgKQAHgKANgHQAOgFAQAAQAZAAASANQARAMABAXIgYAAQgBgMgLgHQgKgJgPABQgOAAgKAGQgKAHAAAKQAAAJAEADQAFAFAHABIAVADQARACAPAFQAOAEAIAIQAHAJABARQgBAOgHAKQgJAKgOAGQgNAFgRAAQgdAAgSgNg");
	this.shape_37.setTransform(103.35,-33.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E2946").s().p("AAsBNIAAhTQAAgXgLgNQgLgMgUAAQgVAAgLAPQgNAPAAAZIAABMIgZAAIAAiYIAWAAIADAVQASgXAgAAQAcABARARQARAQAAAkIAABUg");
	this.shape_38.setTransform(87.55,-33.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1E2946").s().p("AgMBqIAAiYIAYAAIAACYgAgLhOQgEgEAAgHQAAgHAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAHQAAAHgEAEQgFAFgHAAQgGAAgFgFg");
	this.shape_39.setTransform(76,-36.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1E2946").s().p("Ag6BCQgQgMAAgUQABgYAQgLQAQgMAdAAIAsAAIAAgLQAAgPgKgIQgJgIgSAAQgQAAgKAHQgKAHgDALIgYAAQACgWASgNQAQgMAcAAQAdAAAQAOQAQAOAAAbIAABBQAAALAKAAIAIAAIAAAXIgOAAQgPAAgGgGQgGgGgBgMQgSAZggAAQgZAAgQgMgAgwAgQgBAMAKAGQAIAHAQAAQAVAAANgLQANgMAAgUIAAgHIguAAQgjAAABAZg");
	this.shape_40.setTransform(65.35,-33.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1E2946").s().p("AgwBfQgTgOgDgZIAZAAQADAOANAJQAMAHASAAQAxAAABgwIAAgSQgRAcgjAAQgUAAgSgJQgQgJgKgSQgJgSAAgXQAAgWAJgTQAKgSARgJQARgKAUAAQASAAANAHQANAIAIANIADgaIAWAAIAACQQAABFhMAAQgdAAgTgNgAgjhGQgOAQAAAZQAAAZAOAPQAOAPAVAAQAQAAALgHQAMgHAFgMQAHgMAAgQQAAgRgHgNQgFgMgMgIQgNgHgOAAQgVAAgOAPg");
	this.shape_41.setTransform(47.6,-30.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1E2946").s().p("Ag6BCQgPgMAAgUQAAgYAPgLQARgMAdAAIAsAAIAAgLQAAgOgKgJQgKgIgRAAQgPAAgLAHQgKAGgDAMIgZAAQADgWARgNQARgMAcAAQAcAAARAOQAQAPAAAaIAABBQAAALAKAAIAHAAIAAAXIgNAAQgOAAgHgGQgHgHAAgLQgSAZggAAQgaAAgPgMgAgwAgQAAAMAJAGQAIAHAQAAQAVAAANgLQANgMAAgUIAAgHIguAAQgiAAAAAZg");
	this.shape_42.setTransform(31.525,-33.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1E2946").s().p("AAsBNIAAhTQAAgXgLgNQgKgMgVAAQgTAAgOAPQgMAPAAAZIAABMIgZAAIAAiYIAWAAIADAVQASgXAgAAQAbABASARQAQAQAAAkIAABUg");
	this.shape_43.setTransform(6.8,-33.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1E2946").s().p("AgmBEQgSgKgJgRQgKgRAAgYQAAgWAKgSQAJgRASgKQARgKAVAAQAWAAARAKQASAKAJARQAKASAAAWQAAAYgKARQgJARgSAKQgQAKgXAAQgWAAgQgKgAgagwQgMAIgFAMQgHANAAAPQAAARAHAMQAFAMAMAIQALAHAPAAQAQAAALgHQAMgIAFgMQAHgMAAgRQAAgPgHgNQgFgMgMgIQgNgHgOAAQgNAAgNAHg");
	this.shape_44.setTransform(-10.425,-33.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E2946").s().p("AgMBqIAAiYIAYAAIAACYgAgKhOQgFgEAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_45.setTransform(-22,-36.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E2946").s().p("AAUBiQgVAAgJgKQgJgJAAgVIAAhaIgcAAIAAgWIAcAAIAAgrIAXAAIAAArIAnAAIAAAWIgnAAIAABZQAAAKAEAFQAEADAJAAIAbAAIAAAXg");
	this.shape_46.setTransform(-29.875,-35.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1E2946").s().p("AgiBEQgRgJgJgSQgKgSAAgXQAAgXAKgRQAJgRARgKQASgKAUAAQAaAAATAOQASAPAEAZIgZAAQgDgPgMgJQgMgIgQAAQgVAAgNAPQgOAQAAAYQAAAZAOAQQANAPAVAAQASAAAKgIQAMgJAEgPIAYAAQgGAagRAOQgRAOgcAAQgWAAgPgKg");
	this.shape_47.setTransform(-42.8,-33.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E2946").s().p("AgkBFQgQgJgKgTQgKgTAAgWQAAgXAKgRQAJgRAQgKQARgKAUAAQAUAAARAIQAQAJAKARQAJARABAVIgBAKIh2AAIAAACQABAWANAOQANANAUAAQARAAAMgIQALgIAEgPIAZAAQgFAYgSAPQgSAOgaAAQgWAAgRgJgAgdgsQgOALgBASIBbAAQgCgUgMgKQgNgLgUAAQgQAAgNAMg");
	this.shape_48.setTransform(-59.275,-33.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E2946").s().p("AAUBiQgVAAgJgKQgKgJAAgVIAAhaIgbAAIAAgWIAbAAIAAgrIAYAAIAAArIAnAAIAAAWIgnAAIAABZQABALADAEQAEADAJAAIAbAAIAAAXg");
	this.shape_49.setTransform(-72.15,-35.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E2946").s().p("AgnBEQgSgKgIgRQgKgSAAgXQAAgVAKgTQAIgRASgKQASgKAVAAQAWAAASAKQARAKAKARQAJASAAAWQAAAYgJARQgKARgRAKQgRAKgXAAQgWAAgRgKgAgZgwQgMAHgGANQgHANABAPQgBARAHAMQAGANAMAHQAKAHAPAAQAQAAAKgHQAMgHAGgNQAHgOAAgPQAAgOgHgOQgGgNgMgHQgLgHgPAAQgNAAgMAHg");
	this.shape_50.setTransform(-85.3,-33.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E2946").s().p("AgmBMIAAiYIAVAAIADAYQAHgKAKgIQALgFASgBIAHAAIAAAYIgMAAQgWAAgJAPQgKAQAAAVIAABMg");
	this.shape_51.setTransform(-97.95,-33.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E2946").s().p("AhKBsIAAjVIAVAAIADAZQAUgaAggBQAWAAAQAKQARAJAJASQAJARAAAZQAAAYgJAPQgJASgRAKQgRAKgVAAQgSAAgNgGQgNgHgIgMIAABUgAgahOQgLAHgHAOQgGANAAAPQAAAQAGANQAHAMALAIQALAHAPAAQAWAAAOgQQAOgOAAgZQAAgagOgPQgOgPgWAAQgOAAgMAGg");
	this.shape_52.setTransform(-112.175,-30.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E2946").s().p("AAlBMIglhwIglBwIgbAAIgyiYIAaAAIAmB8IAoh8IAWAAIAmB8IAoh8IAZAAIgzCYg");
	this.shape_53.setTransform(5.925,-69.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E2946").s().p("AgmBEQgSgKgJgRQgKgRAAgYQAAgWAKgSQAJgRASgKQARgKAVAAQAWAAASAKQARAKAJARQAKATAAAVQAAAXgKASQgJARgRAKQgRAKgXAAQgWAAgQgKgAgagwQgMAHgGANQgGAOAAAOQAAAPAGAOQAGANAMAHQALAHAPAAQAPAAALgHQAMgHAGgNQAHgMAAgRQAAgPgHgNQgGgNgMgHQgMgHgOAAQgOAAgMAHg");
	this.shape_54.setTransform(-13.95,-69.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E2946").s().p("AAsBpIAAhUQAAgXgLgMQgKgNgVAAQgTABgOAPQgMANAAAaIAABNIgZAAIAAjRIAZAAIAABSQAIgMAMgIQANgHARAAQAbAAASARQAQARAAAiIAABWg");
	this.shape_55.setTransform(-31,-72.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E2946").s().p("AAsBNIAAhTQAAgWgLgOQgLgMgTAAQgVAAgMAPQgNAPAAAZIAABMIgYAAIAAiYIAVAAIADAVQASgXAfAAQAdABAQAQQARASAAAjIAABUg");
	this.shape_56.setTransform(-55.7,-69.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E2946").s().p("AgmBMIAAiYIAWAAIADAYQAGgKAKgIQAKgFATgBIAHAAIAAAYIgMAAQgXAAgIAPQgJAOAAAXIAABMg");
	this.shape_57.setTransform(-68.55,-69.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E2946").s().p("Ag6BCQgPgMgBgUQAAgYAQgLQARgMAdAAIAsAAIAAgLQAAgPgKgIQgJgIgSAAQgQAAgKAHQgLAHgCALIgZAAQADgWARgNQARgMAcAAQAcAAAQAOQARAPAAAaIAABBQAAALAKAAIAHAAIAAAXIgNAAQgPAAgGgGQgHgHAAgLQgRAZghAAQgZAAgQgMgAgxAgQABAMAIAGQAJAHAQAAQAVAAAOgLQAMgMAAgUIAAgHIguAAQgjAAAAAZg");
	this.shape_58.setTransform(-81.95,-69.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1E2946").s().p("AgkBFQgQgKgLgSQgJgSAAgXQAAgWAJgSQAKgRAQgKQARgKAUAAQAVAAAQAIQAQAJAJARQAKAPAAAXIAAAKIh2AAIAAACQABAXANANQANANAUAAQARAAALgIQAMgIAEgPIAZAAQgEAYgTAPQgSAOgaAAQgXAAgQgJgAgdgsQgNALgDASIBcAAQgBgTgNgLQgNgLgUAAQgQAAgNAMg");
	this.shape_59.setTransform(-98.65,-69.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1E2946").s().p("Ag8BpIAAjRIAaAAIAAC5IBfAAIAAAYg");
	this.shape_60.setTransform(-113.25,-72.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s2_mc, new cjs.Rectangle(-120.4,-82.5,240.8,165.1), null);


(lib.s1_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1E2946").s().p("Ag0BcQgYgMgOgYQgOgYAAggQAAgeANgYQANgYAYgNQAWgNAgAAQAfAAAXAMQAYAMANAWQAOAXAAAdQAAAKgCAJIiUAAIAAACQACAVAMANQANANAUABQARgBAMgHQAMgIADgOIA4AAQgDAUgNARQgMAQgVAKQgUAJgbAAQghAAgZgNgAgdg0QgMALgDASIBcAAQgCgSgNgLQgMgKgUAAQgRAAgNAKg");
	this.shape.setTransform(107.975,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AgbCMIAAkXIA3AAIAAEXg");
	this.shape_1.setTransform(91.575,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AhqCQIAAkdIAxAAIAGAdQALgPAQgIQAPgIAVAAQAcAAAVANQAWANAMAYQAMAYAAAgQAAAfgMAWQgMAYgWANQgVANgcAAQgnAAgWgcIAABqgAglhRQgNARAAAaQAAAbANAPQAOAQAXAAQAWAAAOgQQAOgQAAgaQAAgbgOgQQgOgQgWAAQgXAAgOAQg");
	this.shape_2.setTransform(74.975,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("ABoBoIAAhyQAAgvgjAAQgSAAgLANQgMAOAAAXIAABvIg3AAIAAhyQAAgvgkAAQgTAAgLAOQgLANABAXIAABvIg5AAIAAjNIAxAAIAGAaQAKgOAOgHQAPgHAVAAQAsAAAQAiQAMgRASgIQASgJAXAAQAiAAAUAWQAVAWAAAzIAABwg");
	this.shape_3.setTransform(44.45,43.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("AgbCSIAAjNIA3AAIAADNgAgWhaQgKgJAAgOQAAgOAKgJQAJgJANAAQAOAAAKAJQAIAJABAOQgBAOgIAJQgKAJgOAAQgNAAgJgJg");
	this.shape_4.setTransform(21.55,39.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AhCBWQgbgSgCghIA2AAQABAOAMAIQANAJARAAQATgBAJgGQALgGAAgKQAAgIgFgEQgFgEgJgCIgbgEQgdgEgRgFQgRgGgLgLQgLgMAAgUQAAgTALgRQALgOAUgJQAVgJAZABQApAAAaASQAaASABAeIg1AAQgBgLgLgHQgLgIgRAAQgPAAgKAGQgKAGAAAKQAAAIAFADQAGAEAIABIAbAEQAqAEAVAOQAXAMAAAfQAAAUgMAPQgLAPgWAIQgUAJgdgBQgqAAgagTg");
	this.shape_5.setTransform(6.025,43.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("Ag0BcQgYgMgOgYQgOgYAAggQAAgeANgYQAOgZAXgMQAWgNAgAAQAeAAAYAMQAYAMANAWQANAWABAeQAAALgCAIIiUAAIAAACQADAXALALQANANAUABQASgBALgHQALgIAEgOIA3AAQgCAVgNAQQgLAQgWAKQgUAJgaAAQgjAAgYgNgAgdg0QgMALgDASIBcAAQgDgTgMgKQgMgKgUAAQgRAAgNAKg");
	this.shape_6.setTransform(-26.25,43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("Ag8CAQgWgNgLgYQgNgZAAgeQAAgeANgYQAMgYAVgNQAWgNAcAAQAnAAAWAcIAAhkIA4AAIAAEXIgyAAIgFgdQgXAfgoAAQgcAAgVgNgAgjgGQgNAPAAAbQAAAaANARQAOAQAWAAQAXAAANgQQAOgQAAgaQAAgcgOgPQgNgQgXAAQgVAAgPAQg");
	this.shape_7.setTransform(-50.45,40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("AhTBaQgVgQAAgdQAAghAYgRQAZgSAtAAIAoAAIAAgKQAAgNgKgJQgLgIgQAAQgPAAgLAHQgKAHgCALIg2AAQACgfAagSQAYgRAqAAQArAAAYATQAYATAAAlIAABHQAAAIADADQACACAIAAIAGAAIAAAwIgdAAQgmAAAAgiQgLASgQAJQgQAJgXAAQgjAAgUgPgAgmAVQgJAGAAAOQAAALAIAGQAIAGAOAAQAUAAAOgMQANgNAAgVIAAgEIgoAAQgSAAgKAHg");
	this.shape_8.setTransform(-72.875,43.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("ABpBoIAAhyQAAgvgkAAQgSAAgLANQgLANAAAYIAABvIg4AAIAAhyQAAgvgkAAQgSAAgMAOQgLAOABAWIAABvIg5AAIAAjNIAxAAIAGAaQAKgNAOgIQAPgHAVAAQAtAAAPAiQAMgQASgJQASgJAXAAQAiAAAUAWQAVAVAAA0IAABwg");
	this.shape_9.setTransform(-102.35,43.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("AgjAfQARAAALgIQAJgHAAgMIAAgEQgGACgHAAQgLAAgIgHQgIgIAAgPQABgMAJgKQALgKAOAAQATAAALAPQAMAOAAAYQgBAggTASQgTARgjABg");
	this.shape_10.setTransform(79.1,9.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2946").s().p("AAsBoIAAhsQAAg1gqAAQgVAAgMAPQgMAPAAAbIAABoIg4AAIAAjNIAxAAIAFAaQAKgNAQgIQAQgHAVAAQAkAAAXAWQAXAXAAAzIAABvg");
	this.shape_11.setTransform(62.025,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2946").s().p("Ag4BcQgZgNgNgYQgNgYAAgfQAAgeANgYQANgYAZgNQAYgNAgAAQAiAAAXANQAZANANAYQANAYAAAeQAAAfgNAYQgNAYgZANQgXANgiAAQggAAgYgNgAgkgqQgOARAAAZQAAAbAOAQQAOAQAWAAQAYAAANgQQAOgQAAgbQAAgagOgQQgNgQgYAAQgWAAgOAQg");
	this.shape_12.setTransform(38.175,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2946").s().p("AgbCSIAAjNIA3AAIAADNgAgXhaQgIgJgBgOQABgOAIgJQALgJAMAAQAOAAAKAJQAIAJABAOQgBAOgIAJQgKAJgOAAQgMAAgLgJg");
	this.shape_13.setTransform(21.55,-4.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2946").s().p("AAXCEQg6AAAAg7IAAhiIgiAAIAAgwIAiAAIAAg6IA4AAIAAA6IAvAAIAAAwIgvAAIAABZQAAAKAEAFQAFAFALAAIAdAAIAAAwg");
	this.shape_14.setTransform(9.175,-3.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2946").s().p("Ag0BcQgXgNgOgYQgNgYAAgfQAAgeANgYQAOgZAYgMQAWgNAhAAQApAAAaAVQAaAWAGAkIg7AAQgDgOgLgKQgKgJgRAAQgUAAgOAQQgNARAAAZQAAAaANARQANAQAVAAQARAAALgJQAKgIAEgRIA6AAQgGAlgaAWQgaAVgqAAQggAAgXgNg");
	this.shape_15.setTransform(-9.1,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2946").s().p("Ag0BcQgZgMgOgYQgNgYAAggQAAgeANgYQAOgZAWgMQAXgNAgAAQAeAAAYAMQAYAMANAXQANAVABAeQAAALgCAIIiUAAIAAACQACAWAMANQANANAVgBQARAAALgHQALgIAEgOIA4AAQgDAVgNAQQgNARgUAJQgUAJgbAAQghAAgZgNgAgdg0QgMALgDASIBcAAQgCgTgNgKQgMgKgUAAQgRAAgNAKg");
	this.shape_16.setTransform(-31.95,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2946").s().p("AAXCEQg6AAAAg7IAAhiIgiAAIAAgwIAiAAIAAg6IA4AAIAAA6IAuAAIAAAwIguAAIAABZQAAAKAEAFQAFAFALAAIAdAAIAAAwg");
	this.shape_17.setTransform(-50.625,-3.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2946").s().p("Ag4BcQgYgNgOgYQgNgYAAgfQAAgeANgYQAOgYAYgNQAYgNAgAAQAhAAAYANQAYANAOAYQAOAYAAAeQAAAfgOAYQgNAZgZAMQgYANghAAQggAAgYgNgAgkgqQgOAQAAAaQAAAbAOAQQANAQAXAAQAYAAAOgQQANgQAAgbQAAgZgNgRQgPgQgXAAQgXAAgNAQg");
	this.shape_18.setTransform(-69.3,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E2946").s().p("Ag+BnIAAjNIA0AAIAFAfQAJgQAMgHQAPgIAWAAIAJAAIAAAzIgVAAQgZAAgLAPQgKAOAAAYIAABlg");
	this.shape_19.setTransform(-87.7,-0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2946").s().p("AhqCQIAAkdIAxAAIAGAdQAKgOARgJQAQgIAUAAQAdAAAUANQAVANANAYQAMAYAAAfQAAAhgMAVQgMAYgWANQgVANgcAAQgoAAgVgcIAABqgAglhRQgNAQAAAaQAAAbANAQQANAQAYAAQAWAAANgQQAOgPABgcQgBgagOgQQgMgQgXAAQgYAAgNAQg");
	this.shape_20.setTransform(-107.75,3.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E2946").s().p("Ag0BcQgZgMgOgYQgNgYAAggQAAgfANgYQANgYAXgMQAXgNAgAAQAeAAAYAMQAXALAOAYQANAVABAeQAAAKgCAJIiUAAIAAACQACAVAMAOQANANAUgBQASAAALgHQALgIAEgOIA3AAQgDAVgMAQQgMAQgVAKQgVAJgaAAQghAAgZgNgAgdg0QgMALgDASIBcAAQgDgSgMgLQgMgKgUAAQgSAAgMAKg");
	this.shape_21.setTransform(-0.175,-44.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E2946").s().p("AgbCMIAAkXIA3AAIAAEXg");
	this.shape_22.setTransform(-16.6,-48);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E2946").s().p("AgZCFQgQgIgKgOIgGAcIgxAAIAAkXIA4AAIAABkQAYgcAlAAQAcAAAWANQAVAMAMAYQANAWAAAgQAAAggNAYQgLAYgWANQgVANgcAAQgVAAgQgIgAglgGQgNAPAAAaQAAAbANARQANAQAYAAQAWAAANgQQAOgQAAgbQAAgbgOgPQgNgQgWAAQgYAAgNAQg");
	this.shape_23.setTransform(-33.175,-47.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E2946").s().p("AhLBSQgWgXAAgzIAAhvIA4AAIAABoQgBAcALAOQAKAPATAAQAVAAAMgQQALgPAAgdIAAhlIA4AAIAADNIgxAAIgGgZQgKAMgPAIQgNAHgVAAQglAAgWgWg");
	this.shape_24.setTransform(-57.7,-44.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E2946").s().p("Ag4BcQgZgNgNgYQgNgXAAggQAAgfANgXQANgYAZgNQAYgNAgAAQAiAAAXANQAYAMAOAZQANAYAAAeQAAAggNAXQgOAYgYANQgXANgiAAQggAAgYgNgAgkgqQgOARAAAZQAAAbAOAQQAOAQAWAAQAYAAANgQQAOgQAAgbQAAgagOgQQgNgQgYAAQgWAAgOAQg");
	this.shape_25.setTransform(-81.075,-44.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E2946").s().p("Ah2CMIAAkXIBhAAQApAAAgARQAhATARAfQARAhAAAnQAAAogRAgQgRAgghASQggASgpAAgAg6BaIAlAAQAlAAAVgZQAVgYAAgpQAAgngVgZQgVgZglAAIglAAg");
	this.shape_26.setTransform(-106.075,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s1_mc, new cjs.Rectangle(-118.4,-62,236.9,124), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E41837").s().p("AgEAJQgDgBgBgDIgCgFIACgEIAEgEIAEgCQADABACABIAEAEIACAEIgCAFQgBADgDABQgCACgDAAIgEgCgAgEgGQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgCADIACAFQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAIAEACQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAIgEgCIgEACgAADAGIgBgCIgCgCIgBgBIgBAAIAAAFIgCAAIAAgKIAEAAIACAAIABABIABABIgBACIgCABIABABIADAEgAgCAAIACAAIACAAIAAgBIAAgBIgBgBIgBAAIgCAAg");
	this.shape.setTransform(55.35,-6.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41837").s().p("AgwAxQgUgVAAgcQAAgbAUgVQAVgVAbAAQAQAAANAHQANAHALAOIAAgYIAQAAIAACDIgQAAIAAgWQgMANgNAGQgMAHgQAAQgbAAgVgVgAgZgtQgLAHgIAMQgGANgBANQABAOAGANQAIANAMAHQAMAHANAAQAOAAAMgHQANgHAGgMQAIgNgBgOQAAgWgPgQQgPgPgWAAQgNAAgNAHg");
	this.shape_1.setTransform(46.3,-0.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E41837").s().p("AApBEIAAg/QAAgXgCgHQgDgNgJgGQgIgHgNAAQgPAAgMAKQgNALgDAOQgDAMAAAXIAAAxIgRAAIAAiDIARAAIAAAXQAKgNANgHQANgHANAAQAPAAALAHQAMAJAFAMQAGANAAAaIAABEg");
	this.shape_2.setTransform(30.575,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E41837").s().p("AghBEIAAiDIASAAIAAATQAJgMAHgFQAIgGAKAAQAHAAAHAFIgIAOQgGgCgDgBQgJAAgHAIQgIAHgEAOQgDALAAAiIAAAtg");
	this.shape_3.setTransform(19.45,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E41837").s().p("AgxAwQgTgUAAgcQAAgXAQgVQAUgZAgAAQAiAAAUAaQANASABAaIh2AAQABAXAOAPQAOAPAVAAQAIAAALgDQAKgEAGgGQAIgHAGgMIAPAIQgGAOgKAIQgJAIgMAFQgMAFgOAAQggAAgSgWgAgggoQgLAJgFATIBhAAQgCgOgIgIQgEgHgNgGQgKgFgMAAQgTAAgNAMg");
	this.shape_4.setTransform(6.75,-0.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E41837").s().p("AgwBJQgUgUAAgeQAAgcAUgTQAVgVAbAAQAPAAAOAHQANAGAKAPIAAhMIARAAIAAC3IgRAAIAAgWQgKAMgOAHQgNAGgPABQgcAAgUgVgAgZgVQgMAHgHAMQgHAMAAAOQAAAPAHAMQAHAMAMAHQANAIAMAAQAPAAAMgIQANgGAGgNQAIgMgBgPQAAgVgPgQQgOgQgXAAQgNAAgNAIg");
	this.shape_5.setTransform(-10.2,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E41837").s().p("AgxAxQgTgVAAgcQAAgaASgUQAUgXAeAAQAfAAAUAXQASAUAAAaQAAAcgTAVQgTAVgfAAQgeAAgTgVgAgjgkQgQAQAAAVQAAAOAHANQAIANALAGQANAHAMAAQAOAAAMgHQALgGAIgNQAHgNAAgOQAAgVgQgQQgOgQgWAAQgVAAgOAQg");
	this.shape_6.setTransform(-26.6,-0.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E41837").s().p("ABSBEIAAhIQAAgUgEgJQgCgHgIgFQgIgGgKAAQgMABgKAHQgLAHgEAMQgFAOAAAaIAAA0IgQAAIAAhEQAAgWgDgKQgDgHgIgGQgHgFgKgBQgLABgLAHQgKAHgGAMQgEAMAAAYIAAA4IgRAAIAAiDIARAAIAAAWQAIgLAKgHQAMgIAQAAQAIAAAKAEQAIADAFAHQAFAGAEAMQAJgQANgIQANgIAOAAQANAAALAHQALAHAFAMQAFAOAAAXIAABIg");
	this.shape_7.setTransform(-46.35,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BFE6F6").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_8.setTransform(-52.675,12.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2E1F5").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_9.setTransform(-43.45,12.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A4DCF3").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_10.setTransform(-34.225,12.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97D7F1").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_11.setTransform(-24.725,12.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8BD2F0").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_12.setTransform(-15.5,12.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7ECDEE").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_13.setTransform(-6.275,12.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#71C9EC").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_14.setTransform(3.225,12.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#64C4EB").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_15.setTransform(12.45,12.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#56BFE9").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_16.setTransform(21.675,12.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4ABAE7").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_17.setTransform(31.175,12.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3CB5E5").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_18.setTransform(40.4,12.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#26ADE2").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_19.setTransform(49.625,12.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-56.3,-12.6,112.69999999999999,25.299999999999997), null);


(lib.kv_inner_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kv();
	this.instance.setTransform(-320,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kv_inner_mc, new cjs.Rectangle(-320,-480,640,960), null);


(lib.code_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AFrAYQgGgFAAgIIAHAAQAAAFAEAEQAEACAGAAQAFAAAEgCQAEgDAAgFQAAgEgEgDQgDgDgHABIgFAAIAAgGIAFAAQAGABADgDQADgDAAgFQAAgDgDgDQgDgCgGgBQgFAAgDADQgEADAAAFIgGAAQAAgHAFgFQAFgFAIAAQAJABAFAEQAFAEAAAGQAAALgJACQAFAAACADQAEAEAAAGQAAAGgGAFQgFAEgKABQgJgBgFgEgAERAVQgGgHAAgMIAAgDQAAgLAGgIQAGgIAJAAQAKAAAGAIQAGAIAAALIAAADQAAAMgGAHQgGAIgKAAQgJAAgGgIgAEWgPQgEAFAAAKIAAABQAAAKAEAFQAEAHAGgBQAHABAEgHQAEgFAAgKIAAgBQAAgKgEgFQgEgHgHAAQgGAAgEAHgADgAVQgGgHAAgMIAAgDQAAgLAGgIQAGgIAJAAQAKAAAGAIQAGAIAAALIAAADQAAAMgGAHQgGAIgKAAQgJAAgGgIgADlgPQgEAFAAAKIAAABQAAAKAEAFQAEAHAGgBQAHABAEgHQAEgFAAgKIAAgBQAAgKgEgFQgEgHgHAAQgGAAgEAHgACvAVQgGgHAAgMIAAgDQAAgLAGgIQAGgIAJAAQAKAAAGAIQAGAIAAALIAAADQAAAMgGAHQgGAIgKAAQgJAAgGgIgAC0gPQgEAFAAAKIAAABQAAAKAEAFQAEAHAGgBQAHABAEgHQAEgFAAgKIAAgBQAAgKgEgFQgEgHgHAAQgGAAgEAHgACCAXQgGgFAAgHIAHAAQAAAEAEAEQADADAGAAQAFAAAEgDQAEgEAAgFQAAgHgEgDQgDgCgGgBQgKAAgDAHIgGAAIACgfIAhAAIAAAGIgbAAIgBASQAEgGAJABQAIAAAGAEQAFAFAAAJQAAAIgGAFQgGAGgIAAQgJgBgFgFgAg2AVQgIgJAAgMQAAgLAIgJQAHgHAMgBQAMABAHAHQAIAJAAALQAAAMgIAJQgHAHgMABQgMgBgHgHgAgxgPQgGAGAAAJQAAAJAGAHQAFAGAJAAQAJAAAFgGQAFgHAAgJQAAgJgFgGQgFgGgJAAQgJAAgFAGgAhvAVQgHgIAAgNQAAgMAHgIQAIgHAMgBQAJABAGAEQAHAFABAKIgHAAQgCgHgEgDQgEgDgGAAQgJAAgGAGQgFAGAAAJQAAAKAFAGQAFAGAJAAQAHAAAEgDQAEgEACgFIAHAAQgBAIgHAFQgGAGgKAAQgMgBgHgHgAlVAVQgHgJAAgMQAAgMAHgIQAIgHAMgBQAJABAHAEQAGAFACAJIgIAAQgBgFgFgEQgEgDgGAAQgJAAgFAGQgGAGAAAJQAAAKAGAGQAFAGAJAAQAHAAAFgEQAFgFAAgHIAAgCIgRAAIAAgGIAYAAIAAAeIgGAAIAAgIQgDAEgEABQgFAEgHAAQgLgBgIgHgAmGAXQgGgFgBgIIAIAAQAAAFAEAEQAEADAHAAQAFAAAEgCQADgDAAgEQAAgFgEgDIgLgCQgIgBgEgDQgGgDAAgIQAAgGAFgFQAFgFAJAAQAJAAAGAFQAFAFABAHIgHAAQgBgFgEgCQgDgDgGAAQgGAAgDACQgDACAAAFQAAAEAEADIALACQAIACAFACQAFADAAAIQAAAHgFAFQgGAEgIABQgLgBgFgFgAE7AcIAAgGIAVgTIAHgGQADgDAAgFQAAgEgEgEQgDgDgFAAQgGABgDADQgDAEAAAFIAAABIgHAAIAAgCQAAgIAFgFQAFgEAJgBQAJAAAFAFQAFAFAAAHQAAAGgEAFIgIAHIgRAPIAdAAIAAAGgABQAcIAAgGIAWgTIAGgGQADgDAAgFQAAgEgDgEQgDgDgGAAQgFABgEADQgDAEAAAFIAAABIgHAAIAAgCQAAgIAFgFQAGgEAIgBQAJAAAFAFQAFAFAAAHQAAAGgDAFIgJAHIgRAPIAeAAIAAAGgAAPAcIgUg3IAHAAIARAvIARgvIAHAAIgUA3gAjGAcIAAg3IAWAAQAIAAAFAEQAFAFAAAIQAAAIgFAEQgFAFgIgBIgPAAIAAAWgAi/AAIAOAAQAGAAADgCQADgDAAgFQAAgFgDgCQgDgEgGAAIgOAAgAjXAcIgegqIAAAqIgHAAIAAg3IAHAAIAeAqIAAgqIAGAAIAAA3gAAwAIIAAgFIAbAAIAAAFgAiYAIIAAgFIAbAAIAAAFgAkgAIIAAgFIAbAAIAAAFg");
	this.shape.setTransform(-0.075,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.code_mc, new cjs.Rectangle(-42.1,-6.5,84.30000000000001,13.1), null);


(lib.branding_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-24.6,0,248.2,0).s().p("Ai9AoQgkAAAAgoQAAgnAkgBIF6AAQAkABAAAnQAAAogkAAg");
	this.shape.setTransform(-113.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-81.1,0,191.6,0).s().p("Ai8AoQgkAAAAgoQAAgnAkgBIF5AAQAkABAAAnQAAAogkAAg");
	this.shape_1.setTransform(-57.275,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-139.2,0,133.6,0).s().p("Ai8AoQgkAAAAgoQAAgnAkgBIF5AAQAkABAAAnQAAAogkAAg");
	this.shape_2.setTransform(0.825,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-195.7,0,77,0).s().p("Ai8AoQgkAAAAgoQAAgnAkgBIF6AAQAjABABAnQgBAogjAAg");
	this.shape_3.setTransform(57.35,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-252.2,0,20.5,0).s().p("Ai8AoQgkAAAAgoQAAgnAkgBIF5AAQAkABAAAnQAAAogkAAg");
	this.shape_4.setTransform(113.875,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.branding_mc, new cjs.Rectangle(-136.3,-4,272.70000000000005,8.1), null);


(lib.br = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EEEEEE").s().p("AhjBkIAAjHIDHAAIAADHg");
	this.shape.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.br, new cjs.Rectangle(0,0,20,20), null);


(lib.kv_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_389 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(389).call(this.frame_389).wait(1));

	// Layer_1
	this.instance = new lib.kv_inner_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},389).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352,-528,704,1056);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {frame2:27,frame3:62};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,26,61,209];
	// timeline functions:
	this.frame_0 = function() {
		this.kv_mc.gotoAndPlay(1);
	}
	this.frame_26 = function() {
		var _this = this;
		this.stop();
		setTimeout(
			function () {
				_this.gotoAndPlay('frame2');
			}, 3500
		)
	}
	this.frame_61 = function() {
		var _this = this;
		this.stop();
		setTimeout(
			function () {
				_this.gotoAndPlay('frame3');
			}, 3500
		)
	}
	this.frame_209 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(35).call(this.frame_61).wait(148).call(this.frame_209).wait(1));

	// border
	this.instance = new lib.br();
	this.instance.setTransform(319.5,240.05,0.05,24.999,0,0,0,10,10);

	this.instance_1 = new lib.br();
	this.instance_1.setTransform(0.5,240.05,0.05,24.999,0,0,0,10,10);

	this.instance_2 = new lib.br();
	this.instance_2.setTransform(160,479.5,17.001,0.05,0,0,0,10,10);

	this.instance_3 = new lib.br();
	this.instance_3.setTransform(160,0.5,17.001,0.05,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(210));

	// s3
	this.instance_4 = new lib.s3_mc();
	this.instance_4.setTransform(151.5,129.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81).to({_off:false},0).to({y:79.5,alpha:1},15,cjs.Ease.quadOut).wait(114));

	// s2
	this.instance_5 = new lib.s2_mc();
	this.instance_5.setTransform(143.75,165.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({y:115.5,alpha:1},15,cjs.Ease.quadOut).to({y:75.5,alpha:0},15,cjs.Ease.quadInOut).wait(134));

	// s1
	this.instance_6 = new lib.s1_mc();
	this.instance_6.setTransform(143,155.35);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({y:95.35,alpha:1},14,cjs.Ease.quadOut).to({y:55.35,alpha:0},15,cjs.Ease.quadInOut).wait(169));

	// branding_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgcHAh9IAAsgMA4PAAAIAAMgg");
	var mask_graphics_3 = new cjs.Graphics().p("EgcHAh9IAAsgMA4PAAAIAAMgg");
	var mask_graphics_6 = new cjs.Graphics().p("EgcHAh9IAAsgMA4PAAAIAAMgg");
	var mask_graphics_9 = new cjs.Graphics().p("EgcHAh9IAAsgMA4PAAAIAAMgg");
	var mask_graphics_12 = new cjs.Graphics().p("EgcHAh9IAAsgMA4PAAAIAAMgg");
	var mask_graphics_15 = new cjs.Graphics().p("EgcHAh9IAAsgMA4PAAAIAAMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-165,y:217.275}).wait(3).to({graphics:mask_graphics_3,x:-105,y:217.275}).wait(3).to({graphics:mask_graphics_6,x:-48,y:217.275}).wait(3).to({graphics:mask_graphics_9,x:11,y:217.275}).wait(3).to({graphics:mask_graphics_12,x:66,y:217.275}).wait(3).to({graphics:mask_graphics_15,x:160,y:217.275}).wait(195));

	// branding
	this.instance_7 = new lib.branding_mc();
	this.instance_7.setTransform(160.25,390.1);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(210));

	// ref_code
	this.instance_8 = new lib.code_mc();
	this.instance_8.setTransform(46.95,469.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadInOut).wait(192));

	// logo
	this.instance_9 = new lib.logo();
	this.instance_9.setTransform(249.5,513.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:453.45},14,cjs.Ease.quadInOut).wait(196));

	// brand
	this.instance_10 = new lib.white_bg();
	this.instance_10.setTransform(160,526.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:466.55},14,cjs.Ease.quadInOut).wait(196));

	// kv
	this.kv_mc = new lib.kv_mc();
	this.kv_mc.name = "kv_mc";
	this.kv_mc.setTransform(160,240,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.kv_mc).wait(210));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(140,230.1,200,336.5);
// library properties:
lib.properties = {
	id: 'A7AE48A664DE43B5BEC4BBCC86599430',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"kv.jpg", id:"kv"}
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
an.compositions['A7AE48A664DE43B5BEC4BBCC86599430'] = {
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