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
p.nominalBounds = new cjs.Rectangle(0,0,1200,1600);// helper functions:

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
	this.shape.graphics.f("#1E2946").s().p("AgaAbQgKgLAAgQQAAgPAKgKQALgKAPAAQARAAAKAKQAKAKAAAPQAAAPgKAMQgLAJgQABQgOgBgMgJg");
	this.shape.setTransform(284.85,189.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgVgnAAgyQABgxATgnQATglAlgWQAkgWAtAAQAtAAAkATQAiATAVAkQAUAjABAxIgBAVIkBAAIAAAFQACAxAdAdQAcAdAtAAQAlAAAYgSQAZgSAJgfIA2AAQgKAygoAhQgmAgg5AAQgwAAglgVgAhBhhQgcAZgEAnIDHAAQgEgqgbgXQgdgYgpAAQglAAgdAZg");
	this.shape_1.setTransform(261.7,175.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAOgWAWgOQAXgOAoAAIAPAAIAAA0IgaAAQgwAAgTAgQgVAgAAAvIAACog");
	this.shape_2.setTransform(235.575,175.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("AhUCUQgmgVgVgnQgUgmAAgyQAAgxAUgmQAWgnAlgVQAmgWAuAAQAvAAAnAWQAlAWAVAmQAVAmgBAxQABAygVAmQgUAmgmAWQgmAWgwAAQgwAAgkgWgAg4hqQgaAQgNAcQgOAdAAAhQAAAiAOAdQAOAcAZAQQAYAPAgAAQAhAAAYgPQAZgPAPgdQANgbAAgkQAAgigNgcQgPgdgZgPQgZgPggAAQgfAAgZAPg");
	this.shape_3.setTransform(205.3,175.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("ADCCoIAAi7QAAgxgUgYQgUgagmAAQgqAAgYAdQgXAeAAAyIAACxIg1AAIAAi7QAAgwgUgZQgVgagnAAQgoAAgYAfQgXAfAAAyIAACuIg2AAIAAlLIAuAAIAIAuQAjgyA9AAQAkAAAcAQQAcAQAMAfQAkg/BPAAQA4AAAjAkQAjAiAABLIAAC+g");
	this.shape_4.setTransform(159.125,175.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgygXgcQgXgbgsAAQgtAAgbAhQgbAgAAA3IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBGAAQA9AAAlAlQAkAkAABOIAAC4g");
	this.shape_5.setTransform(95.725,175.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAOgWAWgOQAXgOAoAAIAPAAIAAA0IgaAAQgwAAgTAgQgVAfAAAwIAACog");
	this.shape_6.setTransform(68.575,175.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgyAigaQAigaBBAAIBgAAIAAgXQAAghgVgSQgWgSgmAAQgjAAgWAPQgXAQgFAZIg1AAQAGgxAlgbQAmgcA7AAQA/AAAjAfQAjAfAAA6IAACOQAAAYAWAAIAQAAIAAAxIgdAAQghAAgNgNQgOgNAAgaQgnA4hHAAQg4AAghgagAhqBGQAAAYATAPQAUAPAhAAQAwAAAbgZQAcgaAAgqIAAgRIhlAAQhKAAAAA4g");
	this.shape_7.setTransform(40.175,175.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("AhOCVQgmgWgUgmQgUgnAAgyQAAgyAUgmQATgmAkgVQAkgWAtAAQAtAAAkATQAjATAUAkQAVAlAAAvIgBAVIkAAAIAAAFQABAxAdAdQAcAdAtAAQAlAAAYgSQAagSAIgfIA2AAQgKAygnAhQgnAgg5AAQgwAAglgVgAhAhhQgdAYgEAoIDHAAQgEgqgbgXQgcgYgqAAQglAAgcAZg");
	this.shape_8.setTransform(4.575,175.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("AgaDjIAAnFIA1AAIAAHFg");
	this.shape_9.setTransform(-19.325,169.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("AhUCUQgngWgUgmQgVgmABgyQgBgxAVgmQAVgmAmgWQAlgWAvAAQAvAAAnAWQAkAWAVAmQAWAmgBAxQABAygWAmQgUAmglAWQgmAWgwAAQgwAAgkgWgAg4hqQgaAQgOAcQgNAcAAAiQAAAkANAbQAOAcAaAQQAYAPAgAAQAhAAAYgPQAZgQAOgcQANgbAAgkQAAgigNgcQgNgcgagQQgagPgfAAQgfAAgZAPg");
	this.shape_10.setTransform(-61.55,175.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2946").s().p("AArDUQguAAgUgUQgUgVAAgtIAAjDIg8AAIAAgxIA8AAIAAhdIA1AAIAABdIBTAAIAAAxIhTAAIAADCQAAAVAIAJQAIAJAUAAIA6AAIAAAwg");
	this.shape_11.setTransform(-89.475,171.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAOgWAWgOQAXgOAoAAIAPAAIAAA0IgaAAQgwAAgUAgQgUAgAAAvIAACog");
	this.shape_12.setTransform(440.5,97.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgUgnAAgyQAAgyAUgmQATgmAkgVQAkgWAtAAQAtAAAkATQAjATAUAkQAVAlAAAvIgBAVIkAAAIAAAFQABAxAdAdQAcAdAtAAQAlAAAYgSQAagSAIgfIA2AAQgKAygnAhQgnAgg5AAQgwAAglgVgAhAhhQgdAYgEAoIDHAAQgEgqgbgXQgcgYgqAAQglAAgcAZg");
	this.shape_13.setTransform(410.925,97.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2946").s().p("AhVDSQgkgVgVgmQgUgmAAg1QAAgyAUgmQAVglAkgWQAmgWAsAAQAoAAAcAPQAdAPAQAZIAAivIA1AAIAAHHIguAAIgHg1QgpA4hIAAQguAAgkgTgAhNgbQgeAhAAA2QAAA2AeAiQAeAiAwAAQAhAAAYgPQAagQANgbQAOgbAAgkQAAgkgOgbQgOgcgZgQQgZgPggAAQgwgBgeAjg");
	this.shape_14.setTransform(373.475,92);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2946").s().p("AgaDmIAAlLIA1AAIAAFLgAgYiqQgJgJAAgPQAAgPAJgKQAKgKAOAAQAPAAAKAKQAJAKAAAPQAAAPgJAJQgKAKgPAAQgOAAgKgKg");
	this.shape_15.setTransform(349.175,91.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2946").s().p("AgfCmIh8lLIA5AAIBjEOIBjkOIA4AAIh8FLg");
	this.shape_16.setTransform(327.375,97.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2946").s().p("AhVCUQglgVgUgnQgWgmABgyQgBgxAWgmQAVgnAkgVQAngWAuAAQAvAAAmAWQAmAWAVAmQAUAmAAAxQAAAygUAmQgUAmgnAWQgkAWgxAAQgvAAgmgWgAg5hqQgZAQgNAcQgOAcAAAiQAAAkAOAbQAOAcAYAQQAZAPAgAAQAhAAAYgPQAZgPAPgdQANgbAAgkQAAgigNgcQgPgdgZgPQgZgPggAAQgfAAgaAPg");
	this.shape_17.setTransform(294.65,97.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAOgWAWgOQAXgOAoAAIAPAAIAAA0IgaAAQgwAAgTAgQgVAfAAAwIAACog");
	this.shape_18.setTransform(267.925,97.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E2946").s().p("AiiDpIAAnNIAuAAIAHA2QAqg6BHAAQAuAAAkAVQAlAUAUAmQAUAnAAA0QAAAygUAlQgUAmglAWQgkAWguAAQgnAAgdgPQgcgOgRgaIAAC1gAg5ipQgZAPgOAcQgNAbAAAkQAAAjANAcQANAcAaAQQAZAPAgAAQAwAAAegiQAfghAAg2QAAg2gfgiQgegigwAAQggAAgZAPg");
	this.shape_19.setTransform(237.775,104.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgUgngBgyQAAgxAVgnQATgmAkgVQAkgWAtAAQAtAAAkATQAiATAVAkQAUAlABAvIgBAVIkAAAIAAAFQABAxAdAdQAcAdAtAAQAlAAAYgSQAZgSAJgfIA2AAQgLAygnAhQgmAgg5AAQgwAAglgVgAhAhhQgdAYgEAoIDHAAQgEgqgbgXQgcgYgqAAQglAAgcAZg");
	this.shape_20.setTransform(182.6,97.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAOgWAWgOQAXgOAoAAIAPAAIAAA0IgaAAQgwAAgTAgQgVAfAAAwIAACog");
	this.shape_21.setTransform(156.475,97.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgyAigaQAigaBBAAIBgAAIAAgXQAAghgVgSQgWgSgmAAQgjAAgWAPQgXAQgFAZIg0AAQAFgxAlgbQAmgcA7AAQA+AAAjAfQAkAfAAA6IAACOQAAAYAVAAIARAAIAAAxIgdAAQghAAgNgNQgOgNAAgaQgnA4hHAAQg4AAghgagAhqBGQAAAYAUAPQATAPAhAAQAvAAAcgZQAcgaAAgqIAAgRIhlAAQhKAAAAA4g");
	this.shape_22.setTransform(128.1,97.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E2946").s().p("AhMCUQglgWgUgmQgUgmAAgyQAAgxAVgnQAUgmAlgVQAlgWAvAAQA7AAAmAgQAmAeAKA3Ig2AAQgJgggYgSQgZgTgjAAQguAAgeAiQgdAiAAA1QAAA1AdAjQAeAiAuAAQAmAAAYgTQAZgTAGghIA2AAQgLA4gmAfQgmAgg8AAQgvAAgkgWg");
	this.shape_23.setTransform(92.675,97.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E2946").s().p("ABgDkIAAi2QAAgygYgbQgXgbgsAAQgtAAgbAgQgbAgAAA4IAACmIg1AAIAAnHIA1AAIAACzQARgbAagQQAbgQAmAAQA9AAAlAkQAkAlABBNIAAC5g");
	this.shape_24.setTransform(57.45,91.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E2946").s().p("AArDUQguAAgUgUQgUgVAAgtIAAjDIg8AAIAAgxIA8AAIAAhdIA0AAIAABdIBUAAIAAAxIhUAAIAADCQAAAUAJAKQAHAJAVAAIA6AAIAAAwg");
	this.shape_25.setTransform(28.875,93.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E2946").s().p("AgaDkIAAnHIA0AAIAAHHg");
	this.shape_26.setTransform(12.55,91.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgyAigaQAigaBBAAIBgAAIAAgXQAAghgVgSQgWgSgmAAQgjAAgWAPQgXAPgFAaIg1AAQAGgyAlgaQAmgcA8AAQA+AAAjAfQAjAfAAA6IAACOQAAAYAWAAIAQAAIAAAxIgdAAQghAAgNgNQgNgNgBgaQgmA4hIAAQg3AAgigagAhqBGQAAAYATAPQAUAPAhAAQAvAAAdgZQAbgaAAgqIAAgRIhlAAQhKAAAAA4g");
	this.shape_27.setTransform(-10.075,97.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgVgnAAgyQABgxATgnQATglAlgWQAkgWAtAAQAtAAAkATQAiATAVAkQAUAjABAxIgBAVIkBAAIAAAFQACAxAdAdQAcAdAtAAQAlAAAYgSQAZgSAJgfIA2AAQgKAygoAhQgmAgg5AAQgwAAglgVgAhBhhQgcAZgEAnIDHAAQgEgqgbgXQgdgYgpAAQglAAgdAZg");
	this.shape_28.setTransform(-45.65,97.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E2946").s().p("ABfDkIAAi2QAAgzgXgaQgYgbgrAAQguAAgbAgQgbAgAAA4IAACmIg1AAIAAnHIA1AAIAACzQARgaAbgRQAbgQAmAAQA7AAAmAkQAmAlgBBNIAAC5g");
	this.shape_29.setTransform(-81.2,91.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAPgWAVgOQAXgOAoAAIAPAAIAAA0IgbAAQgvAAgUAgQgUAfAAAwIAACog");
	this.shape_30.setTransform(249.925,19.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1E2946").s().p("AhsCDQgkgkAAhOIAAi4IA1AAIAAC1QABAzAWAbQAWAbAqAAQAtAAAZghQAaghAAg2IAAimIA1AAIAAFLIguAAIgHgsQgmAwhDAAQg8AAgjglg");
	this.shape_31.setTransform(220.1,20.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E2946").s().p("AhVCUQgmgWgTgmQgWgmAAgyQAAgxAWgmQATgmAmgWQAngWAuAAQAvAAAmAWQAmAWAVAmQAUAmABAxQgBAygUAmQgUAmgnAWQgkAWgxAAQgwAAglgWgAg5hqQgZAQgNAcQgOAcAAAiQAAAkAOAbQANAcAZAQQAZAPAgAAQAhAAAYgPQAagQANgcQAOgbAAgkQAAgigOgcQgNgcgagQQgZgPggAAQgfAAgaAPg");
	this.shape_32.setTransform(184.2,19.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E2946").s().p("AiKDnIAAgxIAvAAQAPAAAIgDQAIgDAFgIIAMgZIARgoIiClNIA5AAIBlEOIBikOIA5AAIiZGDQgLAegJAPQgIAOgOAIQgOAHgXAAg");
	this.shape_33.setTransform(151.525,26.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E2946").s().p("AArDUQguAAgUgUQgUgVAAgtIAAjDIg8AAIAAgxIA8AAIAAhdIA0AAIAABdIBUAAIAAAxIhUAAIAADCQAAAUAJAKQAHAJAVAAIA6AAIAAAwg");
	this.shape_34.setTransform(108.025,15.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1E2946").s().p("AgZDjIAAnGIA0AAIAAHGg");
	this.shape_35.setTransform(91.7,13.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E2946").s().p("AhsCDQgkgkAAhOIAAi4IA1AAIAAC1QABAzAWAbQAWAbAqAAQAtAAAZghQAaggAAg3IAAimIA1AAIAAFLIguAAIgHgsQgmAwhDAAQg7AAgkglg");
	this.shape_36.setTransform(67.65,20.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E2946").s().p("AhhCMQgngegBg1IA2AAQABAeAZATQAaASAmABQAjgBAWgOQAVgOAAgWQAAgUgKgKQgLgLgQgEQgRgEgegDQgsgFgZgJQgbgIgSgSQgQgSAAghQAAgcAQgYQARgXAcgMQAegNAjAAQA5AAAlAbQAlAbADA0Ig1AAQgEgcgVgQQgWgQgggBQgjABgUAOQgVAOAAAWQAAARAKAJQAJAKAQACQALADAiAFQAqAEAeAKQAcAJASAUQARATAAAjQAAAfgSAWQgRAWgeANQgdAMglAAQhAAAgogeg");
	this.shape_37.setTransform(34.575,19.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgzgXgbQgXgbgsAAQguAAgaAhQgbAfAAA4IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBGAAQA8AAAlAlQAlAlAABNIAAC4g");
	this.shape_38.setTransform(1.025,19.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1E2946").s().p("AhVCUQgmgWgTgmQgWgmABgyQgBgxAWgmQAUgmAlgWQAngWAuAAQAvAAAmAWQAlAVAWAnQAUAmAAAxQAAAygUAmQgVAngmAVQgkAWgxAAQgvAAgmgWgAg5hqQgYAPgPAdQgNAcAAAiQAAAkANAbQAPAdAYAPQAZAPAgAAQAhAAAYgPQAagQANgcQAOgdAAgiQAAghgOgdQgNgcgagQQgagPgfAAQgfAAgaAPg");
	this.shape_39.setTransform(-35.65,19.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1E2946").s().p("AhkDKQgygcgag1QgbgzAAhGQAAhDAbg1QAag0AygeQAygdA/AAQBLABA0ApQAyApAOBHIg5AAQgNgxgjgZQgkgbg0AAQguAAgkAWQgkAYgTAoQgTAoAAA0QAAA0ATApQATAoAkAXQAjAYAvAAQA0AAAjgbQAkgbAMgwIA5AAQgNBHgyAqQgyAohNAAQhAAAgxgdg");
	this.shape_40.setTransform(-76.575,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s3_mc, new cjs.Rectangle(-99.8,-9.3,548.6999999999999,202.3), null);


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
	this.shape.graphics.f("#1E2946").s().p("AgZAbQgLgLAAgQQAAgPALgKQAKgKAPAAQARAAAKAKQAKAKAAAPQAAAQgKALQgLAKgQgBQgOABgLgKg");
	this.shape.setTransform(487.45,231.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AAqDUQgtAAgUgUQgUgVAAgtIAAjDIg7AAIAAgxIA7AAIAAhdIA1AAIAABdIBTAAIAAAxIhTAAIAADCQAAAVAHAJQAJAJAUAAIA5AAIAAAwg");
	this.shape_1.setTransform(470.05,213.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AgaDmIAAlLIA1AAIAAFLgAgYiqQgJgJAAgPQAAgPAJgKQAKgKAOAAQAPAAAKAKQAJAKAAAPQAAAPgJAJQgKAKgPAAQgOAAgKgKg");
	this.shape_2.setTransform(453.725,211.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("AhhCMQgngegBg1IA2AAQABAeAZASQAaAUAmgBQAjAAAWgNQAVgOAAgXQAAgTgKgLQgLgLgQgDQgRgEgegEQgsgFgZgJQgbgIgSgSQgQgSAAghQAAgdAQgXQARgXAcgNQAegMAjAAQA5AAAlAcQAlAbADAyIg1AAQgEgbgVgPQgWgSggABQgjgBgUAOQgVAPAAAWQAAARAKAJQAJAJAQAEQALACAiAEQAqAGAeAJQAcAJASATQARAUAAAjQAAAfgSAVQgRAXgeAMQgdANglAAQhAAAgogeg");
	this.shape_3.setTransform(431.825,218.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("AgZDmIAAlLIA0AAIAAFLgAgYiqQgKgKABgOQgBgPAKgKQALgKANAAQAPAAAKAKQAKAKAAAPQAAAPgKAJQgKAKgPAAQgNAAgLgKg");
	this.shape_4.setTransform(410.05,211.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AgfCmIh8lLIA5AAIBjEOIBjkOIA4AAIh8FLg");
	this.shape_5.setTransform(388.275,218.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgUgnAAgyQAAgyAUgmQATgmAkgVQAjgWAuAAQAtAAAkATQAiATAVAkQAUAjABAxIgBAVIkAAAIAAAFQABAxAcAdQAdAdAtAAQAkAAAZgSQAZgSAIgfIA2AAQgKAzgmAgQgnAgg5AAQgwAAglgVgAhBhhQgdAZgDAnIDHAAQgEgqgbgXQgcgYgqAAQgmAAgcAZg");
	this.shape_6.setTransform(337.075,218.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgygXgcQgXgbgsAAQgtAAgbAhQgbAgAAA3IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBHAAQA7AAAmAlQAkAkAABOIAAC4g");
	this.shape_7.setTransform(301.55,218.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("AhUCUQgmgWgVgmQgUglAAgzQAAgyAUglQAVgmAmgWQAlgWAvAAQAwAAAlAWQAmAWAVAmQAUAmAAAxQAAAygUAmQgVAmgmAWQgkAWgxAAQgwAAgkgWgAg5hqQgZAQgNAcQgOAcAAAiQAAAkAOAbQANAcAZAQQAZAPAgAAQAhAAAZgPQAZgQANgcQAOgbAAgkQAAgigOgcQgNgcgZgQQgbgPgfAAQgeAAgbAPg");
	this.shape_8.setTransform(264.875,218.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgzgXgbQgXgbgsAAQguAAgaAhQgbAfAAA4IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBGAAQA8AAAlAlQAlAlAABNIAAC4g");
	this.shape_9.setTransform(210.925,218.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("AgZDmIAAlLIA0AAIAAFLgAgYiqQgKgKAAgOQAAgPAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAPgKAJQgKAKgPAAQgOAAgKgKg");
	this.shape_10.setTransform(186.5,211.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2946").s().p("AhVDSQglgVgUgmQgUgmAAg1QAAgyAUgmQAVglAkgWQAlgWAtAAQAnAAAdAPQAdAPAQAZIAAiuIA1AAIAAHGIguAAIgHg1QgpA4hIAAQgvAAgjgTgAhNgbQgfAhAAA2QAAA1AfAjQAeAiAwAAQAhAAAYgPQAagQANgbQAOgdAAgiQAAgjgOgcQgOgcgZgQQgZgPggAAQgwgBgeAjg");
	this.shape_11.setTransform(143.225,212.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgUgmAAgzQAAgxATgnQAUgmAkgVQAjgWAuAAQAtAAAkATQAiATAVAkQAUAjABAxIgBAVIkAAAIAAAFQABAxAcAdQAdAdAtAAQAkAAAZgSQAZgSAIgfIA2AAQgKAzgmAgQgnAgg5AAQgwAAglgVgAhBhhQgdAZgDAnIDHAAQgEgqgcgXQgbgYgqAAQgmAAgcAZg");
	this.shape_12.setTransform(107.275,218.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2946").s().p("AgfCmIh8lLIA5AAIBjEOIBkkOIA3AAIh8FLg");
	this.shape_13.setTransform(75.225,218.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgVgnAAgyQABgxATgnQAUgmAkgVQAkgWAtAAQAtAAAkATQAjATAUAkQAUAlABAvIgBAVIkBAAIAAAFQACAxAdAdQAcAdAtAAQAkAAAZgSQAagSAHgfIA2AAQgJAygoAhQgmAgg5AAQgwAAglgVgAhBhhQgcAYgEAoIDHAAQgEgqgcgXQgcgYgpAAQgmAAgcAZg");
	this.shape_14.setTransform(43.1,218.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2946").s().p("AgaDmIAAlLIA1AAIAAFLgAgYiqQgJgJAAgPQAAgPAJgKQAKgKAOAAQAPAAAKAKQAJAKAAAPQAAAPgJAJQgKAKgPAAQgOAAgKgKg");
	this.shape_15.setTransform(19.375,211.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2946").s().p("ABfDkIAAi2QAAgygXgbQgYgbgsAAQgsAAgcAgQgbAgAAA4IAACmIg1AAIAAnHIA1AAIAACzQARgaAbgRQAbgQAmAAQA7AAAmAkQAmAmgBBMIAAC5g");
	this.shape_16.setTransform(-4.5,212.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2946").s().p("AhMCUQgkgVgUgnQgVgnAAgxQAAgxAVgnQAUgmAlgVQAlgWAwAAQA6AAAmAgQAmAfAKA2Ig2AAQgIgfgZgTQgZgTgiAAQgvAAgdAiQgeAhAAA2QAAA2AeAiQAdAiAvAAQAlAAAYgTQAYgSAIgiIA1AAQgLA4gmAfQgmAgg7AAQgwAAgkgWg");
	this.shape_17.setTransform(-40.125,218.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgyAigaQAigaBBAAIBhAAIAAgXQAAghgWgSQgWgSgmAAQgjAAgWAPQgXAQgEAZIg2AAQAGgxAlgbQAmgcA8AAQA+AAAjAfQAjAfAAA6IAACOQAAAYAWAAIAQAAIAAAxIgdAAQggAAgOgNQgNgNgBgaQgmA4hIAAQg3AAgigagAhqBGQAAAYATAPQAUAPAhAAQAvAAAdgZQAcgbAAgpIAAgRIhmAAQhKAAAAA4g");
	this.shape_18.setTransform(-73.325,218.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E2946").s().p("AhOCVQgmgWgUgmQgUgnAAgyQAAgyAUgmQATgmAkgVQAjgWAuAAQAtAAAkATQAiASAVAlQAUAjABAxIgBAVIkAAAIAAAFQABAxAdAdQAcAdAtAAQAkAAAZgSQAZgSAJgfIA1AAQgKAzgmAgQgnAgg5AAQgwAAglgVgAhBhhQgdAZgDAnIDHAAQgEgqgbgXQgcgYgqAAQgmAAgcAZg");
	this.shape_19.setTransform(546.075,140.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2946").s().p("AhADXQgegPgPgZIgHAzIguAAIAAnHIA1AAIAACxQAqg5BHAAQAuAAAkAVQAkATAVAnQAUAmAAA0QAAAygUAmQgVAngkAVQglAVgtAAQgmAAgegOgAg5guQgZAPgOAcQgOAaAAAjQAAAkAOAcQANAdAaAPQAYAQAhAAQAwAAAegiQAegjAAg1QAAg2geghQgegigwAAQghAAgYAPg");
	this.shape_20.setTransform(510.125,134.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgzgXgbQgXgbgsAAQgtAAgbAhQgbAgAAA3IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBGAAQA9AAAlAlQAkAkAABOIAAC4g");
	this.shape_21.setTransform(455.125,140.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgyAigaQAigaBBAAIBgAAIAAgXQAAghgVgSQgWgSgmAAQgjAAgWAPQgXAQgFAZIg1AAQAGgxAlgbQAmgcA7AAQA/AAAjAfQAjAfAAA6IAACOQAAAYAWAAIAQAAIAAAxIgdAAQghAAgNgNQgOgNAAgaQgnA4hHAAQg4AAghgagAhqBGQAAAYATAPQAUAPAhAAQAwAAAbgZQAcgaAAgqIAAgRIhlAAQhKAAAAA4g");
	this.shape_22.setTransform(420.325,140.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E2946").s().p("AhMCUQglgWgUgmQgUgmAAgyQAAgxAVgnQAUgmAlgVQAlgWAvAAQA7AAAmAgQAmAeAKA3Ig2AAQgJgggYgSQgZgTgjAAQguAAgeAiQgdAiAAA1QAAA1AdAjQAeAiAuAAQAmAAAXgTQAagTAGghIA2AAQgLA4gmAfQgmAgg8AAQgvAAgkgWg");
	this.shape_23.setTransform(384.875,140.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FA0031").s().p("Ah6CFQglgjAAhWIAAi0IBcAAIAACpQAAAvAPAWQARAXAhAAQAhAAATgZQASgaABgtIAAilIBbAAIAAFNIhRAAIgJgoQgRAVgXAMQgYALghAAQg6AAglgkg");
	this.shape_24.setTransform(331.7,140.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FA0031").s().p("AgtDkIAAnHIBbAAIAAHHg");
	this.shape_25.setTransform(305.375,134.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FA0031").s().p("Ag7DkIAAkAIg3AAIAAhNIA3AAIAAgeQAAgsAZgYQAagYAxAAIBKAAIAABPIg4AAQgOAAgHAGQgHAIAAANIAAAQIBUAAIAABNIhUAAIAAEAg");
	this.shape_26.setTransform(286.575,134.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E2946").s().p("AimDJQgpggAAg4QAAgnAZgiQAYgiA1gWQgYgdgLgYQgKgYAAgcQAAgeARgZQASgaAcgOQAegOAjAAQAegBAYANQAYAOAPAWQAOAWAAAdQAAApgaAgQgbAfg5AXIBaBlIBNhyIA4AAIhkCWIAZAdQAJAKAKAEQAIAEAPAAIArAAIAAAwIgyAAQgWgBgSgFQgQgFgNgOIgagdQg3A5hIAAQg+AAgogegAiIA5QgQAUAAAfQAAAkAZAUQAYAUApAAQA1AAApguIhth7QgqAUgRAWgAhLioQgTASAAAbQAAAXAIASQAKATAXAbQBUgiAAg8QAAgYgQgQQgPgPgZAAQgfAAgTARg");
	this.shape_27.setTransform(234.125,134.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FA0031").s().p("Ah6DFQgrgjgIg/IBcAAQAHAcATAOQAUAPAfAAQAtAAAXgiQAYgjAAg+IAAgMIgKAPQgRAXgaAMQgZANghAAQgtAAgjgTQgkgTgSgiQgUgiAAgtQAAgtAVgkQAXgkAlgTQAngUAyAAQAsAAAkASQAjAQAYAhQAWAcAMAqQAMAqAAAwQAABxgxA9QgwA+hZAAQhHAAgrgjgAg+iHQgWAXAAAjQAAAkAVAWQAVAWAiAAQAiAAAWgWQAVgWAAgkQAAgigVgYQgVgWghAAQgiAAgWAWg");
	this.shape_28.setTransform(172.875,134.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FA0031").s().p("AADDkIAAkiQgIADgPABIhMAAIAAhOIBEAAQARAAAJgNQAHgNAAgUIAAgtIBcAAIAAHHg");
	this.shape_29.setTransform(139.375,134.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FA0031").s().p("AhxAlIAAhJIDjAAIAABJg");
	this.shape_30.setTransform(117.925,138.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FA0031").s().p("AjADkIAAnHICdAAQBEAAA0AeQA1AdAcAzQAcA0AABBQAABCgcA0QgdA0g0AdQg0AdhEAAgAhfCTIA8AAQA9gBAigoQAigoAAhCQAAhCgignQghgog+AAIg8AAg");
	this.shape_31.setTransform(81.6,134.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FA0031").s().p("AgwDkIAAnHIBhAAIAAHHg");
	this.shape_32.setTransform(49.775,134.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FA0031").s().p("Ag5DkIibnHIBoAAIBsFRIBwlRIBlAAIiaHHg");
	this.shape_33.setTransform(20.525,134.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FA0031").s().p("Ah0DJQg0gegcg0Qgcg1AAhCQAAhAAcg2QAcg0A0gfQA0gdBAAAQBCAAAzAdQA0AfAcA0QAdA2AABAQAABCgdA1QgcA1g0AdQgzAehCAAQhAAAg0gegAhBiBQgcATgRAiQgPAiAAAqQAAAsAPAhQARAiAcATQAdATAkAAQAlAAAdgTQAcgTAQgiQAPghABgsQgBgqgPgiQgRgigbgTQgdgTglAAQglAAgcATg");
	this.shape_34.setTransform(-22.6,134.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FA0031").s().p("AhoDLQgygcgbg1Qgbg1AAhFQAAhFAbg0QAbg0AygdQAygcBEAAQA1AAArAUQApAVAaAmQAbAlAFAyIhiAAQgJgogagVQgbgXgoAAQg1AAghApQggApABBCQgBBDAgApQAhApA1AAQAoAAAbgWQAagXAJgnIBiAAQgFAxgbAmQgaAngpAUQgrAVg1gBQhEAAgygcg");
	this.shape_35.setTransform(-68.85,134.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E2946").s().p("AAqDUQgtAAgUgUQgUgVAAgtIAAjDIg7AAIAAgxIA7AAIAAhdIA0AAIAABdIBVAAIAAAxIhVAAIAADCQABAVAHAJQAJAJAUAAIA6AAIAAAwg");
	this.shape_36.setTransform(411.8,57.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E2946").s().p("AhhCMQgngegBg1IA1AAQACAeAZASQAZATAmAAQAkABAVgOQAWgPAAgWQAAgUgKgKQgLgLgQgDQgQgEgfgEQgrgFgbgJQgbgIgRgSQgRgSAAghQAAgcARgYQARgXAcgMQAegNAiAAQA6AAAlAbQAlAbADAzIg1AAQgDgagWgRQgWgRghAAQgiAAgUAOQgVAPAAAWQAAARAKAJQAJAKAQACQALAEAiADQArAGAdAJQAcAJARATQASAUAAAjQAAAdgSAYQgTAXgcAMQgeAMglAAQhAAAgngeg");
	this.shape_37.setTransform(385.875,62.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgygXgcQgXgbgsAAQgtAAgbAhQgbAgAAA3IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBGAAQA9AAAlAlQAkAkAABOIAAC4g");
	this.shape_38.setTransform(352.275,62.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1E2946").s().p("AgaDmIAAlLIA0AAIAAFLgAgYiqQgKgJAAgPQAAgPAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAOgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_39.setTransform(327.9,55.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgzAigZQAhgaBCAAIBgAAIAAgXQAAghgVgSQgWgSgmAAQgjAAgWAPQgWAPgGAaIg1AAQAGgxAlgbQAmgcA7AAQA/AAAjAfQAjAfAAA6IAACOQAAAYAWAAIAQAAIAAAxIgdAAQghAAgNgNQgNgNgBgaQgmA4hIAAQg4AAghgagAhqBGQAAAYATAPQAUAPAhAAQAwAAAbgZQAcgaAAgqIAAgRIhlAAQhKAAAAA4g");
	this.shape_40.setTransform(305.475,62.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1E2946").s().p("AhpDNQgogdgHg2IA2AAQAHAgAaAQQAbARApAAQBrAAAAhoIAAgnQgkA9hNAAQguAAgkgUQgkgUgVgnQgUglAAg1QAAgyAUgmQAVgmAkgWQAmgWAsAAQAnAAAdAQQAdAQAQAeIAHg6IAuAAIAAE7QAACWijAAQhAAAgpgegAhNiYQgeAiAAA2QAAA2AeAhQAeAiAwAAQAhAAAYgPQAagQANgaQAOgbAAgkQAAgkgOgcQgOgcgZgQQgZgPggAAQgwAAgeAig");
	this.shape_41.setTransform(267.625,68.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgyAigaQAigaBBAAIBhAAIAAgXQAAghgWgSQgWgSgmAAQgjAAgWAPQgXAQgEAZIg2AAQAGgxAlgbQAmgcA8AAQA+AAAjAfQAjAfAAA6IAACOQAAAYAWAAIAQAAIAAAxIgdAAQggAAgOgNQgNgNgBgaQgmA4hIAAQg3AAgigagAhqBGQAAAYATAPQAUAPAhAAQAvAAAdgZQAcgbAAgpIAAgRIhmAAQhKAAAAA4g");
	this.shape_42.setTransform(233.475,62.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgzgXgbQgXgbgsAAQguAAgaAhQgbAfAAA4IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBGAAQA8AAAlAlQAlAlAABNIAAC4g");
	this.shape_43.setTransform(179.925,62.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1E2946").s().p("AhUCUQgngWgUgmQgVgmAAgyQAAgxAVgmQAVgmAmgWQAmgWAuAAQAvAAAnAWQAlAVAUAnQAWAmAAAxQAAAygWAmQgUAnglAVQgmAWgwAAQgwAAgkgWgAg5hqQgYAPgOAdQgOAcAAAiQAAAkAOAbQAOAdAYAPQAZAPAgAAQAgAAAagPQAZgQANgcQAOgbAAgkQAAgigOgcQgNgcgZgQQgbgPgfAAQgfAAgaAPg");
	this.shape_44.setTransform(143.25,62.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E2946").s().p("AgZDmIAAlLIA0AAIAAFLgAgYiqQgKgKABgOQgBgPAKgKQALgKANAAQAPAAAJAKQALAKAAAPQAAAOgLAKQgJAKgPAAQgNAAgLgKg");
	this.shape_45.setTransform(118.8,55.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E2946").s().p("AArDUQguAAgUgUQgUgVAAgtIAAjDIg8AAIAAgxIA8AAIAAhdIA0AAIAABdIBUAAIAAAxIhUAAIAADCQAAAUAJAKQAIAJAUAAIA6AAIAAAwg");
	this.shape_46.setTransform(102.375,57.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1E2946").s().p("AhMCUQgkgVgVgnQgUgoAAgwQAAgxAVgnQATgmAmgVQAlgWAvAAQA7AAAmAgQAmAeAKA3Ig2AAQgIgfgZgTQgZgTgiAAQgvAAgeAiQgdAiAAA1QAAA1AdAjQAeAiAvAAQAlAAAYgTQAZgTAGghIA2AAQgLA4gmAfQgnAgg6AAQgwAAgkgWg");
	this.shape_47.setTransform(74.975,62.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E2946").s().p("AhOCVQglgVgVgnQgUgmAAgzQAAgxATgnQAUgmAkgVQAjgWAuAAQAtAAAjATQAjATAVAkQAUAjABAxIgBAVIkBAAIAAAFQACAxAcAdQAdAdAtAAQAkAAAZgSQAZgSAIgfIA2AAQgKAzgmAgQgnAgg5AAQgwAAglgVgAhBhhQgdAZgDAnIDHAAQgEgqgcgXQgcgYgpAAQgmAAgcAZg");
	this.shape_48.setTransform(39.975,62.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E2946").s().p("AAqDUQgtAAgUgUQgUgWAAgsIAAjDIg7AAIAAgxIA7AAIAAhdIA0AAIAABdIBVAAIAAAxIhVAAIAADCQABAVAHAJQAJAJAUAAIA6AAIAAAwg");
	this.shape_49.setTransform(12.75,57.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E2946").s().p("AhUCUQgngWgUgmQgVgmABgyQgBgxAVgmQAVgmAmgWQAmgWAuAAQAvAAAnAWQAkAWAVAmQAWAmgBAxQABAygWAmQgUAmglAWQgmAWgwAAQgwAAgkgWgAg4hqQgaAQgOAcQgNAcAAAiQAAAkANAbQAOAcAaAQQAYAPAgAAQAhAAAYgPQAZgQAOgcQANgbAAgkQAAgigNgcQgNgcgagQQgagPgfAAQgfAAgZAPg");
	this.shape_50.setTransform(-15,62.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAOgWAWgOQAYgOAoAAIAOAAIAAA0IgbAAQgvAAgTAgQgVAgAAAvIAACog");
	this.shape_51.setTransform(-41.75,62.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E2946").s().p("AiiDpIAAnNIAuAAIAHA2QAqg6BHAAQAtAAAlAVQAlAUAUAmQAUAmAAA1QAAAzgUAkQgUAmglAWQglAWgtAAQgnAAgdgPQgdgPgQgZIAAC1gAg5ipQgYAPgPAcQgNAbAAAkQAAAjANAcQAPAdAYAPQAZAPAgAAQAvAAAggiQAeghAAg2QAAg2gegiQgfgigwAAQggAAgZAPg");
	this.shape_52.setTransform(-71.9,68.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E2946").s().p("Aj4ilIA4AAIBTENIBXkNIAwAAIBSENIBXkNIA2AAIhuFLIg7AAIhQj2IhSD2Ig7AAg");
	this.shape_53.setTransform(179.95,-15.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E2946").s().p("AhUCUQgmgWgVgmQgUgmAAgyQAAgxAUgmQAWgmAlgWQAmgWAuAAQAvAAAnAWQAlAWAVAmQAUAmAAAxQAAAygUAmQgVAmglAWQgmAWgwAAQgwAAgkgWgAg4hqQgaAQgNAcQgNAcAAAiQAAAkANAbQAOAcAZAQQAZAPAfAAQAhAAAYgPQAagQAOgcQANgbAAgkQAAgigNgcQgOgcgagQQgZgPggAAQgeAAgaAPg");
	this.shape_54.setTransform(137.55,-15.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E2946").s().p("ABfDkIAAi2QAAgzgXgaQgYgbgrAAQgtAAgbAgQgbAfAAA5IAACmIg1AAIAAnHIA1AAIAACzQAPgaAcgRQAbgQAmAAQA8AAAmAkQAkAmABBMIAAC5g");
	this.shape_55.setTransform(101.3,-21.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E2946").s().p("ABfCoIAAi1QAAgzgXgbQgXgbgsAAQguAAgaAhQgbAfAAA4IAACmIg1AAIAAlLIAuAAIAHAtQAmgxBGAAQA8AAAlAlQAlAlAABNIAAC4g");
	this.shape_56.setTransform(47.775,-15.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E2946").s().p("AhTCmIAAlLIAuAAIAHAyQAPgWAVgOQAXgOAoAAIAPAAIAAA0IgbAAQgvAAgUAgQgUAfAAAwIAACog");
	this.shape_57.setTransform(20.625,-15.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E2946").s().p("Ah/CQQghgaAAgtQAAgzAigZQAhgaBCAAIBhAAIAAgXQAAghgXgSQgVgSgmAAQgjAAgWAPQgWAPgGAaIg1AAQAGgxAlgbQAngcA7AAQA+AAAjAfQAjAfAAA6IAACOQAAAYAWAAIAQAAIAAAxIgdAAQggAAgNgNQgOgNgBgaQgmA4hIAAQg3AAgigagAhrBGQAAAYAUAPQATAPAiAAQAwAAAcgZQAcgbAAgpIAAgRIhmAAQhLAAAAA4g");
	this.shape_58.setTransform(-7.8,-15.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1E2946").s().p("AhOCVQgmgWgUgmQgUgnAAgyQAAgyAUgmQATgmAkgVQAjgWAuAAQAtAAAkATQAiASAVAlQAUAjABAxIgBAVIkAAAIAAAFQABAxAdAdQAcAdAtAAQAkAAAZgSQAZgSAJgfIA1AAQgKAzgmAgQgnAgg5AAQgwAAglgVgAhBhhQgdAZgDAnIDHAAQgEgqgbgXQgcgYgqAAQgmAAgcAZg");
	this.shape_59.setTransform(-43.375,-15.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1E2946").s().p("AiDDkIAAnHIA5AAIAAGTIDOAAIAAA0g");
	this.shape_60.setTransform(-74.25,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s2_mc, new cjs.Rectangle(-89.7,-44.6,651.5,279.90000000000003), null);


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
	this.shape.graphics.f("#1E2946").s().p("Ah2DQQg4gcgfg2Qgeg2AAhHQAAhGAeg3QAcg1A1gdQA2geBEAAQBEAAA3AcQA2AcAeAxQAeAyABBEQAAAYgEASIlOAAIAAADQAEAzAcAdQAcAcAvAAQAnAAAagQQAZgRAJggIB9AAQgIAugbAlQgdAlgtAVQguAVg8AAQhMAAg4gdgAhCh1QgdAYgFAoIDRAAQgGgqgdgXQgcgXgrAAQgpAAgcAYg");
	this.shape.setTransform(415.175,231.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("Ag+E7IAAp1IB+AAIAAJ1g");
	this.shape_1.setTransform(378.95,222.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AjvFEIAAqCIBuAAIANBAQAYgfAkgTQAlgTAuAAQA+AAAwAeQAxAdAbA1QAbA2AABIQAABHgbA0QgbA1gxAeQgxAcg+AAQhYABgyhBIAADvgAhUi3QgeAlAAA7QAAA8AeAkQAfAlAzAAQAzAAAfgmQAggjAAg8QAAg7ggglQgfgkgzAAQgzAAgfAkg");
	this.shape_2.setTransform(342.325,239.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("ADrDqIAAkCQAAhphQAAQgoAAgaAdQgZAeAAA0IAAD8Ih+AAIAAkCQAAhphRAAQgpAAgZAeQgZAeAAA0IAAD7Ih/AAIAAnOIBvAAIALA5QAYgdAggQQAigQAvgCQBjAAAmBPQAZgmApgUQAqgVAzAAQBLAAAvAyQAuAyAABzIAAD9g");
	this.shape_3.setTransform(274.275,230.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("Ag+FIIAAnOIB+AAIAAHOgAgzjMQgVgVAAgfQAAgeAVgVQAVgTAfgBQAfABAVATQAUAVAAAeQAAAfgUAVQgVAVgfgBQgeABgWgVg");
	this.shape_4.setTransform(223.425,221.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AiXDCQg8gqgDhKIB4AAQADAeAbAUQAaASAqAAQAqABAWgNQAXgNABgZQgBgSgKgJQgKgIgVgFIhAgJQg7gIgqgNQgqgNgXgaQgZgbAAgtQABgsAZgkQAYgiAtgTQAtgSA6gBQBeABA6AoQA7AnAEBHIh5AAQgCgagagRQgYgRgmAAQgjAAgXAOQgWANAAAXQAAAQAMAIQAMAJASADQAWAEAoAEQBdALAzAdQAyAcAABHQAAAtgaAiQgcAjguASQgvASg/AAQhgABg8gsg");
	this.shape_5.setTransform(189.25,231.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("Ah2DQQg5gdgeg1Qgeg2AAhHQAAhHAdg2QAdg1A1gdQA1geBFAAQBFAAA2AcQA1AbAfAyQAeAyABBEQAAAUgEAWIlPAAIAAADQAFAyAcAeQAcAcAvAAQAnAAAagQQAZgQAIghIB9AAQgGAsgdAnQgcAlgtAVQgvAVg7AAQhMAAg4gdgAhCh1QgcAYgGAoIDRAAQgGgpgdgYQgcgXgrAAQgpAAgcAYg");
	this.shape_6.setTransform(116.625,231.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("AiIEhQgwgegcg2Qgbg3AAhGQAAhFAbg2QAcg1AwgdQAzgeA8AAQBZAAAxA/IAAjhIB/AAIAAJ1IhuAAIgNhAQg1BGhaAAQg+AAgwgdgAhOgOQggAjAAA8QAAA8AgAkQAeAlAzAAQAzAAAfgkQAegkAAg8QAAg9gegjQggglgyAAQgzAAgeAlg");
	this.shape_7.setTransform(62.85,223.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("Ai8DJQgwgjAAhBQAAhJA3goQA3goBnAAIBbAAIAAgXQAAgfgYgTQgXgSgnAAQgjAAgWAPQgXAQgEAaIh7AAQAGhHA5gnQA5goBeAAQBhAAA1AsQA2ArAABSIAACiQAAARAHAGQAHAGAPAAIAPAAIAABrIhBAAQhXAAAChLQgaAoglAUQgkAVg0AAQhNAAgvgkgAhWAvQgWAQAAAdQAAAYATAPQARAOAhAAQAwAAAdgcQAdgdABgvIAAgJIhcAAQgoAAgWAPg");
	this.shape_8.setTransform(13.075,231.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("ADrDqIAAkCQAAhphQAAQgpAAgZAdQgaAeAAA0IAAD8Ih9AAIAAkCQAAhphRAAQgqAAgZAeQgYAfAAAzIAAD7Ih/AAIAAnOIBuAAIAMA5QAYgdAggQQAigRAvgBQBjAAAmBPQAYgmAqgUQAqgVAzAAQBLAAAuAyQAvAyAABzIAAD9g");
	this.shape_9.setTransform(-52.475,230.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("AhRBHQAqgBAWgRQAVgSAAgaIgBgLQgNAGgPAAQgZAAgTgRQgRgRAAghQAAgeAXgVQAYgVAgAAQAqAAAaAgQAaAiAAA0QAABJgtAoQgsAohPAAg");
	this.shape_10.setTransform(348.75,145.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2946").s().p("ABjDqIAAjzQAAh4heAAQgxABgbAhQgbAhAAA8IAADsIh+AAIAAnOIBuAAIAMA6QAZgdAhgRQAjgRAxAAQBQAAA1AyQA0AzAAB0IAAD6g");
	this.shape_11.setTransform(310.95,122.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2946").s().p("AiADQQg3gdgeg3Qgeg2AAhGQAAhFAeg2QAeg2A3gdQA5geBHAAQBIAAA4AeQA4AdAdA2QAfA3AABEQAABHgfA2QgeA2g3AdQg3AdhJAAQhIAAg4gdgAhThfQgeAlgBA6QABA7AeAlQAgAlAzAAQA1AAAfglQAfglAAg7QAAg6gfglQgfglg1AAQgzAAggAlg");
	this.shape_12.setTransform(258,123.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2946").s().p("Ag/FIIAAnOIB+AAIAAHOgAgzjMQgVgVAAgfQAAgeAVgVQAVgTAegBQAgABAVATQAUAVAAAeQAAAfgUAVQgVAVgggBQgeABgVgVg");
	this.shape_13.setTransform(221.275,113.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2946").s().p("AA0EoQiEAAAAiEIAAjfIhMAAIAAhrIBMAAIAAiBIB+AAIAACBIBpAAIAABrIhpAAIAADKQAAAZALAKQAKALAYAAIBCAAIAABrg");
	this.shape_14.setTransform(194.15,116.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2946").s().p("Ah2DQQg1gdgeg3Qgdg2AAhGQAAhFAdg3QAeg1A2gdQA3geBGAAQBcAAA7AwQA7AvANBUIiDAAQgIgigYgVQgZgUgkAAQgwAAgeAlQgeAlAAA6QAAA8AeAkQAeAlAwAAQAlAAAZgUQAZgWAHgjICCAAQgMBVg7AwQg7AwheAAQhHAAg2gdg");
	this.shape_15.setTransform(153.675,123.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2946").s().p("Ah2DQQg4gcgfg2Qgeg2AAhHQAAhIAeg1QAcg1A1gdQA2geBEAAQBEAAA3AcQA2AcAeAxQAeAyABBEQAAAYgEASIlOAAIAAADQAEAzAcAdQAcAcAvAAQAnAAAagQQAZgRAJggIB9AAQgIAugbAlQgdAlgtAVQguAVg8AAQhMAAg4gdgAhCh1QgdAYgFAoIDRAAQgGgqgdgXQgcgXgrAAQgpAAgcAYg");
	this.shape_16.setTransform(102.975,123.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2946").s().p("AAzEoQiCAAAAiEIAAjfIhNAAIAAhrIBNAAIAAiBIB+AAIAACBIBoAAIAABrIhoAAIAADKQgBAYALALQAKALAZAAIBBAAIAABrg");
	this.shape_17.setTransform(61.7,116.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2946").s().p("Ah/DQQg4gdgeg3Qgeg2AAhGQAAhFAeg2QAeg2A4gdQA4geBHAAQBIAAA4AeQA4AdAeA2QAeA2AABFQAABIgeA1QgfA2g3AdQg3AdhJAAQhIAAg3gdgAhShfQgfAlAAA6QAAA7AfAlQAfAlAzAAQA1AAAfglQAfglAAg7QAAg6gfglQgfglg1AAQgzAAgfAlg");
	this.shape_18.setTransform(20.375,123.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E2946").s().p("AiMDnIAAnNIBzAAIAMBFQAVgjAdgRQAfgRAzAAIAWAAIAABzIgzAAQg1AAgaAgQgYAhAAA3IAADig");
	this.shape_19.setTransform(-20.25,123.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2946").s().p("AjvFEIAAqCIBuAAIANBAQAYgfAkgTQAlgTAuAAQA+AAAwAeQAxAdAbA1QAbA2AABIQAABHgbA0QgbA1gxAeQgxAcg+AAQhYABgyhBIAADvgAhUi3QgeAlAAA7QAAA8AeAkQAfAlAzAAQAzAAAfgmQAggjAAg8QAAg7ggglQgfgkgzAAQgzAAgfAkg");
	this.shape_20.setTransform(-64.675,131.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E2946").s().p("Ah2DQQg5gdgeg1Qgeg2AAhHQAAhHAdg2QAdg1A1gdQA1geBFAAQBEAAA3AcQA2AcAeAxQAeAyABBEQAAAYgEASIlOAAIAAADQAEAzAcAdQAcAcAvAAQAnAAAagQQAZgRAJggIB9AAQgIAugbAlQgdAlgtAVQguAVg8AAQhMAAg4gdgAhCh1QgdAYgFAoIDRAAQgGgqgdgXQgcgXgrAAQgpAAgcAYg");
	this.shape_21.setTransform(173.825,15.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E2946").s().p("Ag+E7IAAp1IB9AAIAAJ1g");
	this.shape_22.setTransform(137.6,6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E2946").s().p("Ag5ErQgigRgZghIgNA/IhuAAIAAp1IB/AAIAADiQA0hABWAAQA+AAAxAdQAxAdAbA1QAbA0AABIQAABHgbA1QgbA2gxAeQgxAeg9AAQgwAAgkgTgAhUgPQgeAkAAA7QAAA9AeAkQAfAlAzAAQAzAAAfglQAggkAAg8QAAg7gggkQgfglgzAAQgzAAgfAkg");
	this.shape_23.setTransform(100.975,7.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E2946").s().p("AiqC4QgzgyAAh1IAAj6IB/AAIAADrQAABAAWAeQAWAhAuAAQAvAAAagkQAagjAAg/IAAjkIB/AAIAAHOIhxAAIgLg4QgaAdgfAQQghAQgtAAQhRAAg0gyg");
	this.shape_24.setTransform(46.475,15.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E2946").s().p("Ah/DQQg3gdgfg3Qgeg2AAhGQAAhFAeg2QAfg2A3gdQA3geBIAAQBJAAA3AeQA4AdAeA2QAeA1AABGQAABIgeA1QgfA2g3AdQg2AdhKAAQhJAAg2gdgAhShfQggAlAAA6QAAA7AgAlQAfAlAzAAQA1AAAfglQAfgkAAg8QAAg7gfgkQgfglg1AAQgzAAgfAlg");
	this.shape_25.setTransform(-5.4,15.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E2946").s().p("AkLE7IAAp1IDaAAQBeAABIAoQBJAoAnBHQAnBIAABbQAABcgnBIQgoBIhIAnQhIAoheAAgAiEDLIBTAAQBVgBAvg3QAvg3AAhcQAAhbgvg3Qgvg3hVgBIhTAAg");
	this.shape_26.setTransform(-60.875,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s1_mc, new cjs.Rectangle(-88.7,-24.7,527.5,297), null);


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
	this.shape.setTransform(136.8823,-10.1943,2.1297,2.13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41837").s().p("AgwAxQgUgVAAgcQAAgbAUgVQAVgVAbAAQAQAAANAHQANAHALAOIAAgYIAQAAIAACDIgQAAIAAgWQgMANgNAGQgMAHgQAAQgbAAgVgVgAgZgtQgLAHgIAMQgGANgBANQABAOAGANQAIANAMAHQAMAHANAAQAOAAAMgHQANgHAGgMQAIgNgBgOQAAgWgPgQQgPgPgWAAQgNAAgNAHg");
	this.shape_1.setTransform(117.609,1.5738,2.1297,2.13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E41837").s().p("AApBEIAAg/QAAgXgCgHQgDgNgJgGQgIgHgNAAQgPAAgMAKQgNALgDAOQgDAMAAAXIAAAxIgRAAIAAiDIARAAIAAAXQAKgNANgHQANgHANAAQAPAAALAHQAMAJAFAMQAGANAAAaIAABEg");
	this.shape_2.setTransform(84.1202,1.201,2.1297,2.13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E41837").s().p("AghBEIAAiDIASAAIAAATQAJgMAHgFQAIgGAKAAQAHAAAHAFIgIAOQgGgCgDgBQgJAAgHAIQgIAHgEAOQgDALAAAiIAAAtg");
	this.shape_3.setTransform(60.4278,1.201,2.1297,2.13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E41837").s().p("AgxAwQgTgUAAgcQAAgXAQgVQAUgZAgAAQAiAAAUAaQANASABAaIh2AAQABAXAOAPQAOAPAVAAQAIAAALgDQAKgEAGgGQAIgHAGgMIAPAIQgGAOgKAIQgJAIgMAFQgMAFgOAAQggAAgSgWgAgggoQgLAJgFATIBhAAQgCgOgIgIQgEgHgNgGQgKgFgMAAQgTAAgNAMg");
	this.shape_4.setTransform(33.3812,1.5738,2.1297,2.13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E41837").s().p("AgwBJQgUgUAAgeQAAgcAUgTQAVgVAbAAQAPAAAOAHQANAGAKAPIAAhMIARAAIAAC3IgRAAIAAgWQgKAMgOAHQgNAGgPABQgcAAgUgVgAgZgVQgMAHgHAMQgHAMAAAOQAAAPAHAMQAHAMAMAHQANAIAMAAQAPAAAMgIQANgGAGgNQAIgMgBgPQAAgVgPgQQgOgQgXAAQgNAAgNAIg");
	this.shape_5.setTransform(-2.7165,-3.4849,2.1297,2.13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E41837").s().p("AgxAxQgTgVAAgcQAAgaASgUQAUgXAeAAQAfAAAUAXQASAUAAAaQAAAcgTAVQgTAVgfAAQgeAAgTgVgAgjgkQgQAQAAAVQAAAOAHANQAIANALAGQANAHAMAAQAOAAAMgHQALgGAIgNQAHgNAAgOQAAgVgQgQQgOgQgWAAQgVAAgOAQg");
	this.shape_6.setTransform(-37.6428,1.5738,2.1297,2.13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E41837").s().p("ABSBEIAAhIQAAgUgEgJQgCgHgIgFQgIgGgKAAQgMABgKAHQgLAHgEAMQgFAOAAAaIAAA0IgQAAIAAhEQAAgWgDgKQgDgHgIgGQgHgFgKgBQgLABgLAHQgKAHgGAMQgEAMAAAYIAAA4IgRAAIAAiDIARAAIAAAWQAIgLAKgHQAMgIAQAAQAIAAAKAEQAIADAFAHQAFAGAEAMQAJgQANgIQANgIAOAAQANAAALAHQALAHAFAMQAFAOAAAXIAABIg");
	this.shape_7.setTransform(-79.7035,1.201,2.1297,2.13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BFE6F6").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_8.setTransform(-93.1735,29.1567,2.1297,2.13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2E1F5").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_9.setTransform(-73.5275,29.1567,2.1297,2.13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A4DCF3").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_10.setTransform(-53.8814,29.1567,2.1297,2.13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97D7F1").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_11.setTransform(-33.6497,29.1567,2.1297,2.13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8BD2F0").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_12.setTransform(-14.0036,29.1567,2.1297,2.13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7ECDEE").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_13.setTransform(5.6424,29.1567,2.1297,2.13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#71C9EC").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_14.setTransform(25.8741,29.1567,2.1297,2.13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#64C4EB").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_15.setTransform(45.5202,29.1567,2.1297,2.13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#56BFE9").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_16.setTransform(65.1662,29.1567,2.1297,2.13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4ABAE7").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_17.setTransform(85.398,29.1567,2.1297,2.13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3CB5E5").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_18.setTransform(105.044,29.1567,2.1297,2.13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#26ADE2").s().p("AgeAHQgGAAAAgHQAAgGAGAAIA9AAQAGAAAAAGQAAAHgGAAg");
	this.shape_19.setTransform(124.6901,29.1567,2.1297,2.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-101,-23.4,240.1,54), null);


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

}).prototype = getMCSymbolPrototype(lib.kv_inner_mc, new cjs.Rectangle(-320,-480,1200,1600), null);


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
	this.shape.graphics.f("#666666").s().p("ABCGrQgIgHAAgLIAKAAQABAHAEAFQAHAFAIAAQAIAAAFgFQAGgFAAgKQAAgIgFgFQgFgGgJAAQgPAAgEALIgJAAIACgwIAzAAIAAAJIgqAAIgBAbQAGgHANgBQANAAAHAIQAJAIgBAMQABAOgKAIQgHAHgNAAQgNAAgJgIgAhGGoQgJgLAAgTIAAgDQAAgTAJgLQAJgLAOAAQAOAAAJALQAJALAAATIAAADQAAATgJALQgJALgOAAQgPAAgIgLgAg/FvQgFAJgBAPIAAADQABAPAFAJQAGAIAKAAQAKAAAGgIQAFgJAAgPIAAgDQAAgPgFgJQgGgIgKAAQgKAAgGAIgAkPGrQgJgJABgOQAAgOAIgIQAIgJANAAQAMAAAGAFQAIAGABAKIgKAAQgDgMgOAAQgIAAgGAFQgFAHgBAKQABAKAFAHQAGAFAIABQAHAAAEgEQAFgEABgGIAKAAQgBAKgIAHQgHAFgLAAQgOAAgHgIgAlmGnQgLgMAAgSQAAgTALgMQAMgMARAAQASAAALAMQALAMAAATQAAASgLAMQgLAMgSAAQgRAAgMgMgAleFwQgJAKAAAPQAAAOAJAJQAIAJANAAQANAAAJgJQAHgJABgOQgBgPgHgKQgJgJgNAAQgNAAgIAJgAoLGsQgJgHAAgMIAKAAQABAIAFAEQAGAFAJAAQAJAAAFgEQAFgFABgGQAAgHgGgEQgGgEgJAAIgHAAIAAgJIAGAAQAJABAGgFQAEgEAAgGQAAgGgFgFQgFgDgIAAQgHAAgFAEQgGAEAAAIIgKAAQAAgMAIgGQAIgHAMAAQANAAAIAGQAIAGgBAKQAAAPgNAEQAHABADAFQAFAGABAIQgBALgHAHQgJAGgOAAQgOAAgHgHgAqTGoQgJgLAAgTIAAgDQAAgTAJgLQAJgLAOAAQAOAAAJALQAJALAAATIAAADQAAATgJALQgIALgPAAQgOAAgJgLgAqLFvQgHAJAAAPIAAADQAAAPAHAJQAFAIAKAAQAKAAAFgIQAHgJAAgPIAAgDQAAgPgHgJQgFgIgKAAQgKAAgFAIgArdGoQgJgLAAgTIAAgDQAAgTAJgLQAJgLAOAAQAOAAAJALQAJALAAATIAAADQAAATgJALQgIALgPAAQgOAAgJgLgArWFvQgFAJAAAPIAAADQAAAPAFAJQAGAIAKAAQAKAAAGgIQA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gALKDlQgFAGAAAJQAAALAFAGQAFAGAJABQAJgBAHgGQAFgGAAgKQAAgKgFgGQgHgHgJABQgJgBgFAHgAkeErIAAhVIAIAAIACAKQAHgKAOAAQANAAAIAIQAIAJAAAOQAAAOgIAJQgIAIgNAAQgPAAgGgKIAAAhgAkPDlQgFAGAAAJQAAALAFAGQAGAGAJABQAJgBAGgGQAFgGABgKQgBgKgFgGQgGgHgJABQgJgBgGAHgAFVEeQAGAAACgDQADgDAAgDIgBgCQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgHgBAAgGQAAgDACgCQACgCAEAAQAFAAACAEQACADABAFQgBAIgEAEQgEAFgJAAgAtxEeQAFAAADgDQACgDAAgDIAAgCQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgGgBgBgGQABgDACgCQACgCADAAQAFAAADAEQACADAAAFQAAAIgEAEQgFAFgIAAgAUdEOQgHgGgCgLIALAAQADAPAPAAQAKAAAHgJQAFgKAAgOIAAgEIgBACQgCAHgHADQgGAEgIAAQgMAAgJgHQgHgJgBgMQAAgMAJgIQAIgIANAAQAQAAAKAOQAGALAAARQAAAUgJAMQgIALgPAAQgLAAgIgGgAUiDNQgFAFAAAJQAAAJAFAFQAFAFAJAAQAIAAAGgFQAFgGAAgJQAAgIgFgFQgGgGgIAAQgIAAgGAGgAStEGQgHgLAAgRQAAgUAIgLQAJgMAPAAQALAAAIAGQAHAHACAKIgKAAQgDgPgPAAQgLABgHAIQgFAJAAAPIAAAEIABgDQACgFAGgEQAHgEAIAAQAMAAAIAHQAJAIgBANQAAANgIAHQgIAIgNAAQgRAAgIgOgAS4DqQgFAFAAAKQAAAIAFAFQAFAFAJABQAJgBAFgFQAFgGAAgIQAAgIgFgGQgFgFgJAAQgIAAgGAFgARnENQgHgFAAgLQgBgIAFgGQAEgFAIgCQgGgBgEgGQgFgEABgIQgBgKAJgGQAHgGANAAQANAAAHAGQAIAGAAAKQAAAHgEAFQgEAGgHABQAIACAFAFQAEAGAAAIQAAALgIAFQgIAHgOAAQgOAAgJgHgARvDxQgGAEABAHQAAAHAFAEQAGAFAJAAQAJAAAGgFQAFgEAAgHQAAgHgFgEQgGgEgJAAQgJAAgGAEgARxDLQgFAEAAAGQAAAHAFADQAFAEAIAAQAIAAAFgEQAFgDAAgHQAAgGgFgEQgFgEgIAAQgIAAgFAEgAPZEJQgJgLAAgTIAAgDQAAgSAJgMQAIgLAOAAQAOAAAKALQAIAMABASIAAADQgBATgIALQgJALgPAAQgOAAgIgLgAPgDQQgGAJAAAPIAAADQAAAPAGAJQAFAIAKAAQALAAAFgIQAGgJAAgPIAAgDQAAgPgGgJQgFgIgLAAQgKAAgFAIgAN2EMQgJgJAAgOQAAgOAIgJQAIgIANAAQANgBAIAJQAIAHAAANIAAAFIgvAAIAAABQgBAIAGAGQAFAFAJABQAGgBAFgDQAEgDACgGIAKAAQgCAJgHAGQgHAGgLAAQgOAAgHgIgAOdDvQgBgIgFgFQgFgEgIAAQgHAAgFAEQgFAGgBAHIAlAAIAAAAgAMIEMQgIgJAAgOQAAgOAIgJQAJgIAOAAQANAAAIAIQAJAJAAAOQAAAOgJAJQgIAIgNAAQgOAAgJgIgAMPDlQgFAGAAAKQAAAKAFAGQAHAGAJABQAJgBAFgGQAFgGAAgKQAAgKgFgGQgFgHgJABQgJgBgHAHgAJ+EPQgGgFAAgHQAAgUAYABIASAAIAAgFQAAgGgDgDQgFgDgHAAQgGgBgFADQgDADgBAEIgKAAQABgJAHgFQAGgEAMAAQAMgBAGAHQAGAFAAAKIAAAbQAAAFAFAAIACAAIAAAJIgFAAQgLAAAAgKQgHAKgNAAQgLAAgGgFgAKCECQAAAEAEADQADADAGAAQAJAAAGgFQAEgEAAgJIAAgCIgTAAQgNAAAAAKgAGXEMQgIgIgBgMIALAAQAAAJAHAEQAGAGAJAAQAJgBAGgDQAFgEAAgHQAAgGgHgEQgEgDgMgBQgNgDgGgDQgJgHABgLQAAgKAIgHQAHgGANAAQAOAAAIAHQAJAHAAALIgLAAQgBgHgFgEQgGgEgIgBQgIAAgFAEQgFAEAAAGQAAAHAHADQAEACALADQANACAGADQAJAHAAAKQABAMgJAGQgJAHgNAAQgOAAgKgIgAEcEPQgGgFAAgHQAAgUAZABIASAAIAAgFQAAgGgFgDQgDgDgIAAQgGgBgEADQgEADgCAEIgJAAQABgJAHgFQAGgEAMAAQAMgBAGAHQAGAFABAKIAAAbQAAAFADAAIAEAAIAAAJIgGAAQgLAAAAgKQgHAKgNAAQgKAAgHgFgAEgECQAAAEAEADQADADAGAAQAJAAAFgFQAGgEAAgJIAAgCIgTAAQgOAAAAAKgACiEPQgFgFAAgHQAAgUAYABIASAAIAAgFQAAgGgEgDQgEgDgHAAQgGgBgFADQgEADgBAEIgJAAQAAgJAIgFQAGgEAMAAQALgBAHAHQAGAFAAAKIAAAbQAAAFAEAAIADAAIAAAJIgFAAQgMAAAAgKQgGAKgOAAQgKAAgHgFgACnECQgBAEAEADQAEADAFAAQAKAAAFgFQAFgEAAgJIAAgCIgTAAQgNAAAAAKgAgZEMQgIgIAAgPQAAgOAIgIQAJgKANABQAKgBAHAHQAHAFACAKIgKAAQgEgNgMABQgJgBgGAHQgFAGAAAKQAAAKAFAGQAGAHAJAAQAGgBAEgDQAEgDACgHIAKAAQgCALgHAFQgIAGgJAAQgOAAgIgIgAiKEKIgCAKIgIAAIAAhVIAKAAIAAAhQAHgKANAAQAOAAAHAIQAJAJAAAOQAAAOgJAJQgHAIgOAAQgOAAgGgKgAiFDlQgGAGABAJQgBALAGAGQAFAGAKABQAJgBAGgGQAFgGAAgKQAAgKgFgGQgGgHgJABQgKgBgFAHgAjQEOQgHgHAAgOIAAgjIAJAAIAAAiQABATAQAAQAIAAAFgGQAEgFAAgLIAAgfIAKAAIAAA+IgIAAIgCgIQgHAIgMAAQgLAAgGgGgAlaEMQgJgJAAgOQAAgOAIgJQAIgIANAAQANgBAIAJQAIAHAAANIAAAFIgvAAIAAABQgBAIAGAGQAFAFAJABQAGgBAFgDQAEgDACgGIAKAAQgCAJgHAGQgHAGgKAAQgPAAgHgIgAkzDvQgBgIgFgFQgFgEgIAAQgHAAgFAEQgFAGgBAHIAlAAIAAAAgAoxEJQgJgLAAgTIAAgDQAAgSAJgMQAIgLAOAAQAOAAAKALQAIAMABASIAAADQgBATgIALQgJALgPAAQgOAAgIgLgAoqDQQgGAJAAAPIAAADQAAAPAGAJQAFAIAKAAQALAAAFgIQAGgJAAgPIAAgDQAAgPgGgJQgFgIgLAAQgKAAgFAIgAquEGQgIgLAAgRQABgUAIgLQAIgMAQAAQALAAAIAGQAHAHACAKIgLAAQgDgPgPAAQgKABgHAIQgFAJgBAPIAAAEIABgDQADgFAGgEQAGgEAJAAQAMAAAIAHQAIAIAAANQAAANgIAHQgJAIgMAAQgRAAgIgOgAqjDqQgGAFAAAKQABAIAEAFQAGAFAJABQAIgBAFgFQAGgGAAgIQAAgIgGgGQgEgFgJAAQgJAAgFAFgAuqEMQgJgJAAgOQAAgOAIgJQAIgIANAAQANgBAIAJQAIAHAAANIAAAFIgvAAIAAABQAAAIAFAGQAFAFAIABQAHgBAFgDQAEgDACgGIAKAAQgCAJgHAGQgHAGgLAAQgOAAgHgIgAuEDvQAAgIgFgFQgFgEgIAAQgGAAgGAEQgFAGgBAHIAkAAIAAAAgAvtEMQgHgIAAgPQgBgOAJgIQAIgKAOABQAKgBAIAHQAGAFADAKIgLAAQgDgNgNABQgKgBgFAHQgGAGABAKQgBAKAGAGQAFAHAKAAQAGgBAEgDQAEgDACgHIALAAQgDALgGAFQgIAGgLAAQgOAAgIgIgAwvEPQgGgFAAgHQAAgUAYABIASAAIAAgFQAAgGgDgDQgFgDgHAAQgGgBgFADQgDADgBAEIgKAAQABgJAHgFQAGgEAMAAQAMgBAGAHQAGAFAAAKIAAAbQAAAFAFAAIADAAIAAAJIgGAAQgLAAAAgKQgHAKgNAAQgLAAgGgFgAwrECQAAAEAEADQADADAGAAQAJAAAGgFQAEgEAAgJIAAgCIgTAAQgNAAAAAKgAzmEPQgHgGgBgJIAKAAQABAFAEAEQAEADAIAAQAGAAAFgDQAEgDAAgDQAAgFgEgDQgDgBgJgBQgMgBgFgEQgIgDAAgJQAAgIAIgGQAGgEALAAQAKAAAHAEQAHAGAAAJIgKAAQAAgFgEgDQgFgDgFAAQgHAAgEACQgEADAAAEQAAAFAFACQACABAJABQAMABAGADQAGAFABAJQgBAIgGAFQgIAFgKAAQgMAAgHgFgA0oEMQgJgJAAgOQABgOAHgJQAJgIANAAQAMgBAIAJQAJAHAAANIAAAFIgwAAIAAABQAAAIAFAGQAGAFAIABQAHgBAFgDQAEgDACgGIAKAAQgDAJgGAGQgIAGgKAAQgOAAgIgIgA0BDvQgBgIgFgFQgFgEgHAAQgHAAgGAEQgFAGAAAHIAkAAIAAAAgA3PEPQgGgFAAgHQAAgUAZABIASAAIAAgFQAAgGgFgDQgDgDgIAAQgGgBgFADQgDADgCAEIgJAAQABgJAHgFQAGgEAMAAQALgBAHAHQAGAF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AIAAgEQAAgHgFgCQgDgEgIAAQgGAAgEADQgEADgCAEIgJAAQABgJAHgFQAGgFAMAAQAMAAAGAGQAGAGABAKIAAAbQAAAEADAAIAEAAIAAAJIgGAAQgLAAAAgKQgHAKgNAAQgKABgHgFgAncBlQAAAFAEACQADADAGABQAJgBAFgFQAGgEAAgIIAAgDIgTAAQgOAAAAAKgArHBwQgIgIgBgNIALAAQAAAJAHAFQAGAFAKAAQAIAAAFgEQAGgDAAgHQAAgHgHgDQgFgDgLgCQgNgCgGgEQgJgGAAgLQABgKAHgHQAIgGANgBQAOAAAJAIQAIAGAAAMIgKAAQgBgIgGgEQgFgEgJAAQgJAAgEADQgFAEAAAHQAAAGAGAEQAFACALACQANACAGAEQAKAGgBALQAAALgIAHQgIAHgNgBQgPABgKgIgAtrBwQgJgJABgPQAAgNAIgJQAIgJANAAQAMAAAGAGQAIAGABAKIgKAAQgDgNgOAAQgIAAgGAGQgFAGgBAKQABALAFAGQAGAGAIAAQAHAAAEgEQAEgDACgGIAKAAQgBAKgIAGQgHAGgLgBQgOAAgHgHgAuuBvQgJgJAAgOQABgNAHgKQAJgIANAAQAMAAAIAIQAJAHAAAOIAAAEIgwAAIAAABQAAAJAFAGQAGAFAIAAQAHAAAEgEQAFgCACgHIAKAAQgDAKgGAGQgIAFgKAAQgOABgIgJgAuHBSQgBgHgFgFQgFgFgHAAQgHAAgGAFQgFAFAAAHIAkAAIAAAAgAwbBvQgJgJAAgOQAAgNAJgKQAIgIAOAAQANAAAJAIQAIAKAAANQAAAOgIAJQgJAJgNgBQgOABgIgJgAwUBIQgGAGAAAKQAAAKAGAHQAGAGAJAAQAJAAAFgGQAGgHAAgKQAAgKgGgGQgFgGgJAAQgJAAgGAGgAzeBzQgGgFAAgIQAAgTAZAAIASAAIAAgEQAAgHgFgCQgDgEgHAAQgHAAgEADQgFADgBAEIgJAAQABgJAHgFQAGgFAMAAQALAAAHAGQAGAGABAKIAAAbQAAAEADAAIAEAAIAAAJIgGAAQgLAAAAgKQgHAKgOAAQgJABgHgFgAzaBlQAAAFADACQAEADAGABQAJgBAFgFQAFgEABgIIAAgDIgTAAQgOAAAAAKgA2JBvQgJgJABgOQAAgNAIgKQAHgIAOAAQANAAAHAIQAJAH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gBACQgCACgEAAQgCAAgCgCgAY+jJQgIgIAAgPQgBgOAJgIQAHgJANAAQAOAAAHAIQAJAIgBANIAAAEIgvAAIAAABQAAAJAGAFQAEAGAJAAQAGAAAFgEQAFgCACgHIAJAAQgBAKgIAFQgHAGgKABQgOAAgIgJgAZljmQAAgIgGgEQgEgFgJABQgGgBgFAFQgGAFgBAHIAlAAIAAAAgAX8jIQgIgJAAgPQAAgNAIgJQAIgJAOAAQALAAAHAGQAHAFACALIgKAAQgEgNgNAAQgJAAgGAGQgFAGAAAKQAAAKAFAHQAGAGAJAAQAHAAADgEQAFgDACgGIAKAAQgCAKgHAGQgHAGgLAAQgOgBgIgHgAVjjIQgIgJAAgPQAAgOAIgIQAJgJANAAQAOAAAGAKIAAggIAKAAIAABUIgIAAIgCgKQgHALgNAAQgNgBgJgHgAVqjwQgFAGAAAKQAAALAFAFQAHAHAJAAQAJAAAFgHQAFgFAAgLQAAgKgFgGQgFgGgJAAQgJAAgHAGgAUgjFQgFgFgBgIQAAgTAZAAIASAAIAAgFQAAgFgEgEQgEgDgHAAQgHAAgEACQgEADgBAFIgJAAQABgJAGgFQAHgFALAAQAMAAAGAGQAHAFAAALIAAAbQAAAEAEAAIADAAIAAAJIgGAAQgKAAgBgJQgGAJgOABQgKAAgHgFgAUkjTQAAAFAEACQAEAEAGAAQAJAAAFgGQAFgEAAgIIAAgDIgTAAQgOAAAAAKgASqjFQgGgFAAgIQAAgTAZAAIASAAIAAgFQAAgFgFgEQgDgDgIAAQgGAAgFACQgDADgCAFIgJAAQABgJAHgFQAGgFAMAAQALAAAHAGQAGAFAAALIAAAbQAAAEAEAAIAEAAIAAAJIgGAAQgLAAAAgJQgHAJgNABQgKAAgHgFgASujTQAAAFAEACQADAEAGAAQAJAAAFgGQAGgEAAgIIAAgDIgTAAQgOAAAAAKgARrjIQgJgJABgPQAAgNAIgJQAIgJANAAQAMAAAGAGQAIAFABALIgKAAQgDgNgOAAQgIAAgGAGQgFAGgBAKQABAKAFAHQAGAGAIAAQAHAAAEgEQAEgDACgGIAKAAQgBAKgIAGQgHAGgLAAQgOgBgHgHgAQMjIQgIgJAAgPQAAgOAIgIQAJgJANAAQAOAAAHAKIAAggIAJAAIAABUIgIAAIgBgKQgIALgNAAQgNgBgJgHgAQTjwQgFAGAAAKQAAALAFAFQAHAHAJAAQAIAAAGgHQAFgFABgLQgBgKgFgGQgGgGgIAAQgJAAgHAGgAPKjJQgJgIAAgPQAAgOAIgIQAIgJANAAQANAAAIAIQAIAIAAANIAAAEIgwAAIAAABQABAJAFAFQAFAGAIAAQAHAAAFgEQAEgCACgHIAKAAQgCAKgHAFQgHAGgLABQgOAAgHgJgAPwjmQAAgIgFgEQgFgFgIABQgGgBgGAFQgFAFgBAHIAkAAIAAAAgALWjJQgJgIAAgPQAAgOAJgIQAIgJANAAQAOAAAJAJQAIAIAAAOQAAAPgIAIQgJAJgOAAQgNAAgIgJgALdjwQgGAGAAAKQAAALAGAFQAGAHAIAAQAKAAAFgHQAGgFgBgLQABgKgGgGQgFgGgKAAQgIAAgGAGgAI2jFQgGgFAAgIQAAgTAYAAIASAAIAAgFQAAgFgDgEQgFgDgHAAQgGAAgFACQgDADgBAFIgKAAQABgJAHgFQAGgFAMAAQAMAAAGAGQAGAFAAALIAAAbQAAAEAFAAIACAAIAAAJIgFAAQgLAAAAgJQgHAJgNABQgLAAgGgFgAI6jTQAAAFAEACQADAEAGAAQAJAAAGgGQAEgEAAgIIAAgDIgSAAQgOAAAAAKgAGwjJQgJgIAAgPQAAgOAJgIQAIgJAOAAQANAAAJAJQAIAIAAAOQAAAPgIAIQgJAJgNAAQgOAAgIgJgAG3jwQgGAGAAAKQAAALAGAFQAGAHAJAAQAJAAAFgHQAGgFAAgLQAAgKgGgGQgFgGgJAAQgJAAgGAGgAFdjGQgIgFgBgKIALAAQAAAFAFAEQAEADAHABQAHAAAEgEQAFgCAAgEQAAgFgFgCQgDgCgIAAQgMgCgGgDQgHgEAAgIQAAgJAHgFQAHgFAKAAQALAAAHAFQAGAFABAKIgKAAQgBgFgEgEQgEgCgGAAQgGAAgEACQgFADAAAEQABAFAEABQADACAIABQAMABAGADQAHAEAAAJQAAAIgHAGQgHAFgLAAQgMgBgGgFgAEhjGQgIgFAAgKIALAAQgBAFAFAEQAEADAIABQAGAAAFgEQAEgCAAgEQAAgFgEgCQgDgCgJAAQgMgCgGgDQgGgEAAgIQAAgJAGgFQAHgFAKAAQALAAAHAFQAHAFAAAKIgJAAQgBgFgEgEQgEgCgHAAQgGAAgEACQgEADAAAEQAAAFAEABQAEACAHABQANABAFADQAIAEgBAJQABAIgIAGQgGAFgLAAQgMgBgHgFgADfjJQgIgIgBgPQAAgOAJgIQAHgJANAAQANAAAJAIQAHAIAAANIAAAEIgvAAIAAABQAAAJAGAFQAEAGAJAAQAGAAAGgEQAEgCABgHIAKAAQgBAKgIAFQgGAGgLABQgOAAgIgJgAEGjmQAAgIgFgEQgGgFgIABQgGgBgFAFQgGAFgBAHIAlAAIAAAAgABzjJQgIgIgBgPQABgOAIgIQAJgJANAAQAOAAAIAJQAJAIAAAOQAAAPgJAIQgIAJgOAAQgNAAgJgJgAB6jwQgFAGgBAKQABALAFAFQAGAHAJAAQAJAAAFgHQAGgFAAgLQAAgKgGgGQgFgGgJAAQgJAAgGAGgAhdjJQgIgIAAgPQgBgOAJgIQAHgJANAAQAOAAAHAIQAJAIgBANIAAAEIgvAAIAAABQAAAJAGAFQAEAGAJAAQAGAAAFgEQAFgCACgHIAJAAQgBAKgIAFQgHAGgKABQgOAAgIgJgAg2jmQAAgIgGgEQgEgFgJABQgGgBgFAFQgGAFgBAHIAlAAIAAAAgAjHjFQgHgFAAgIQABgTAYAAIASAAIAAgFQAAgFgEgEQgEgDgHAAQgHAAgEACQgEADgBAFIgKAAQACgJAGgFQAHgFALAAQAMAAAGAGQAHAFAAALIAAAbQAAAEAEAAIADAAIAAAJIgGAAQgLAAAAgJQgHAJgNABQgKAAgGgFgAjEjTQAAAFAEACQADAEAHAAQAIAAAGgGQAFgEAAgIIAAgDIgTAAQgOAAAAAKgAkHjIQgIgJAAgPQAAgNAJgJQAHgJAOAAQALAAAHAGQAHAFACALIgLAAQgCgNgOAAQgJAAgFAGQgGAGAAAKQAAAKAGAHQAFAGAJAAQAGAAAEgEQAFgDABgGIALAAQgCAKgHAGQgIAGgLAAQgNgBgIgHgAnLjFQgGgFAAgIQAAgTAYAAIASAAIAAgFQAAgFgDgEQgFgDgHAAQgGAAgFACQgDADgBAFIgKAAQABgJAHgFQAGgFAMAAQAMAAAGAGQAGAFAAALIAAAbQAAAEAFAAIACAAIAAAJIgFAAQgLAAAAgJQgHAJgNABQgLAAgGgFgAnHjTQAAAFAEACQADAEAGAAQAJAAAGgGQAEgEAAgIIA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AAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgDAAgDgDgAROkLQAAAAgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQACgCADAAQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDAAgCgDgAGTkLQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQACgCADAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDAAgCgDgAJLlFIAAgJIAJAAQAEgBACgBIADgGIADgHIgYg+IAKAAIATAxIASgxIALAAIgcBIIgFALQgEADgGAAgABIlFIAAhWIAJAAIABAKQAIgLAOAAQAMAAAIAJQAJAIAAAPQAAAOgJAIQgIAJgMAAQgPAAgHgKIAAAigABYmNQgGAHAAAKQAAAKAGAGQAGAHAJgBQAIABAGgHQAGgGAAgKQAAgKgGgHQgGgFgIgBQgJABgGAFgAhnlFIAAhWIAIAAIACAKQAHgLANAAQAOAAAHAJQAJAIAAAPQAAAOgJAIQgHAJgOAAQgOAAgGgKIAAAigAhYmNQgGAHABAKQgBAKAGAGQAFAHAKgBQAJABAGgHQAFgGAAgKQAAgKgFgHQgGgFgJgBQgKABgFAFgAKKlfQgCgBAAgDQAAgEACgCQACgBADAAQADAAACABQACACAAAEQAAADgCABQgCACgDAAQgDAAgCgCgAG1lmQgIgIAAgOQAAgOAIgJQAJgJANAAQANAAAJAJQAJAJAAAOQAAAOgJAIQgJAJgNAAQgNAAgJgJgAG8mNQgFAHAAAKQAAAKAFAGQAGAHAJgBQAJABAGgHQAFgGAAgKQAAgKgFgHQgGgFgJgBQgJABgGAFgAFaliQgIgGAAgKIAKAAQAAAGAEADQAFAEAIAAQAGAAAFgDQADgDAAgEQABgEgFgCQgDgCgIgBQgMgBgGgDQgHgFAAgIQAAgJAHgEQAHgFAKgBQALABAGAFQAIAEAAAKIgKAAQAAgFgEgDQgFgDgGAAQgGAAgFADQgDACAAAEQAAAFAEABQADACAIABQANACAFADQAHAEAAAIQAAAJgHAGQgHAEgKAAQgNAAgGgFgAEXlmQgIgIAAgOQAAgOAIgJQAIgJANAAQANABAIAHQAIAIAAAOIAAAEIgwAAIAAAAQAAAKAGAFQAFAGAJgBQAGABAFgEQAFgDABgGIAKAAQgCAKgHAFQgHAGgKAAQgOAAgJgJgAE/mDQgBgHgFgEQgFgFgIAAQgGAAgGAFQgGAFAAAGIAlAAIAAAAgADbliQgIgGAAgKIALAAQgBAGAFADQAFAEAHAAQAHAAAEgDQAEgDAAgEQAAgEgEgCQgDgCgJgBQgMgBgFgDQgIgFABgIQgBgJAIgEQAGgFAKgBQALABAHAFQAHAEAAAKIgKAAQAAgFgEgDQgEgDgHAAQgGAAgEADQgEACAAAEQAAAFAEABQAEACAIABQAMACAGADQAGAEAAAIQAAAJgGAGQgIAEgKAAQgMAAgHgFgACXlmQgJgIAAgOQAAgOAJgJQAIgJANAAQAOAAAJAJQAIAJAAAOQAAAOgIAIQgJAJgOAAQgNAAgIgJgACemNQgGAHAAAKQAAAKAGAGQAGAHAIgBQAKABAFgHQAGgGAAgKQAAgKgGgHQgFgFgKgBQgIABgGAFgAgaljQgGgHgBgPIAAgiIAKAAIAAAiQAAATAQAAQAHAAAGgFQAEgHAAgKIAAgfIAKAAIAAA9IgJAAIgBgIQgHAJgMAAQgKAAgHgGgAkIlmQgJgIAAgOQAAgOAJgJQAIgJANAAQAOAAAJAJQAIAJAAAOQAAAOgIAIQgJAJgOAAQgNAAgIgJgAkCmNQgFAHAAAKQAAAKAFAGQAGAHAJgBQAKABAFgHQAGgGgBgKQABgKgGgHQgFgFgKgBQgJABgGAFgAmKlhQgGgGAAgIQAAgSAYgBIASAAIAAgEQAAgGgDgDQgEgEgHAAQgHAAgFADQgEADAAAEIgKAAQABgIAHgFQAHgFALgBQAMABAGAFQAHAGgBALIAAAbQABADAEAAIACAAIAAAJIgFAAQgLAAAAgJQgHAKgOAAQgKAAgGgEgAmGlwQAAAFADADQAEADAGAAQAJAAAGgFQAEgEAAgJIAAgDIgTAAQgNAAAAAKgAnKllQgHgJgBgOQAAgOAJgJQAIgIAOgBQAKABAIAFQAHAGACALIgLAAQgDgOgNAAQgKABgFAFQgGAHAAAKQAAAKAGAHQAFAFAKAAQAGABAEgEQAFgEABgFIALAAQgCAJgHAHQgIAFgLAAQgNAAgJgIgAoLljQgHgHAAgPIAAgiIAJAAIAAAiQABATAQAAQAIAAAFgFQAEgHAAgKIAAgfIAKAAIAAA9IgIAAIgCgIQgHAJgMAAQgLAAgGgGgApSllQgJgJAAgOQAAgOAJgJQAIgJAMAAQAPABAHAJIAAgfIAKAAIAABTIgJAAIgBgKQgIALgOAAQgMAAgIgIgApLmNQgGAHAAAKQAAAKAGAGQAGAHAIgBQAJABAGgHQAGgGAAgKQAAgKgGgHQgGgFgJgBQgIABgGAFgAqVlmQgJgIAAgOQAAgOAIgJQAIgJANAAQANABAIAHQAIAIAAAOIAAAEIgvAAIAAAAQgBAKAGAFQAFAGAJgBQAGABAFgEQAEgDACgGIAKAAQgCAKgHAFQgHAGgKAAQgPAAgHgJgApumDQgBgHgFgEQgFgFgIAAQgHAAgFAFQgFAFgBAGIAlAAIAAAAgAshlmQgJgIAAgOQAAgOAJgJQAIgJANAAQAOAAAJAJQAIAJAAAOQAAAOgIAIQgJAJgOAAQgNAAgIgJgAsamNQgGAHAAAKQAAAKAGAGQAGAHAIgBQAJABAGgHQAGgGAAgKQAAgKgGgHQgGgFgJgBQgIABgGAFgAujliQgIgGAAgKIAKAAQAAAGAEADQAFAEAIAAQAGAAAFgDQADgDAAgEQABgEgFgCQgDgCgIgBQgMgBgGgDQgHgFAAgIQAAgJAHgEQAHgFAKgBQALABAGAFQAIAEAAAKIgKAAQAAgFgEgDQgFgDgGAAQgGAAgFADQgDACAAAEQAAAFAEABQADACAIABQANACAFADQAHAEAAAIQAAAJgHAGQgHAEgKAAQgNAAgGgFgAwylhQgHgGAAgIQAAgSAZgBIASAAIAAgEQAAgGgEgDQgEgEgHAAQgGAAgFADQgEADgBAEIgKAAQACgIAGgFQAHgFALgBQAMABAGAFQAHAGA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");
	this.shape.setTransform(130.2,-42.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.code_mc, new cjs.Rectangle(-39.1,-90.5,339.20000000000005,96.4), null);


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
	this.shape.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-24,0,629.7,0).s().p("Ai5AoQgjAAgBgoQABgnAjAAIFzAAQAjAAAAAnQAAAogjAAg");
	this.shape.setTransform(-307.85,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-79.6,0,574.2,0).s().p("Ai5AoQgkAAAAgoQAAgnAkAAIFzAAQAkAAgBAnQABAogkAAg");
	this.shape_1.setTransform(-252.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-135.1,0,518.6,0).s().p("Ai5AoQgkAAAAgoQAAgnAkAAIFzAAQAkAAAAAnQAAAogkAAg");
	this.shape_2.setTransform(-196.75,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-192.2,0,461.5,0).s().p("Ai5AoQgjAAAAgoQAAgnAjAAIFzAAQAjAAAAAnQAAAogjAAg");
	this.shape_3.setTransform(-139.65,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-247.8,0,406,0).s().p("Ai5AoQgkAAAAgoQAAgnAkAAIFzAAQAkAAgBAnQABAogkAAg");
	this.shape_4.setTransform(-84.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-303.3,0,350.4,0).s().p("Ai5AoQgkAAAAgoQAAgnAkAAIFzAAQAkAAAAAnQAAAogkAAg");
	this.shape_5.setTransform(-28.55,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-360.4,0,293.3,0).s().p("Ai5AoQgjAAAAgoQAAgnAjAAIFzAAQAjAAAAAnQAAAogjAAg");
	this.shape_6.setTransform(28.55,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-416,0,237.8,0).s().p("Ai5AoQgjAAgBgoQABgnAjAAIFzAAQAjAAAAAnQAAAogjAAg");
	this.shape_7.setTransform(84.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-471.5,0,182.2,0).s().p("Ai5AoQgkAAAAgoQAAgnAkAAIFzAAQAkAAgBAnQABAogkAAg");
	this.shape_8.setTransform(139.65,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-528.6,0,125.1,0).s().p("Ai5AoQgkAAABgoQgBgnAkAAIFzAAQAkAAAAAnQAAAogkAAg");
	this.shape_9.setTransform(196.75,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-584.2,0,69.6,0).s().p("Ai5AoQgjAAAAgoQAAgnAjAAIFzAAQAjAAAAAnQAAAogjAAg");
	this.shape_10.setTransform(252.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B7B6BB","#A8A4B1","#8C86A0","#787093","#675D87","#5C4F80","#55477D","#554582"],[0,0.051,0.141,0.251,0.361,0.498,0.671,1],-639.7,0,14,0).s().p("Ai5AoQgkAAAAgoQAAgnAkAAIFzAAQAjAAAAAnQAAAogjAAg");
	this.shape_11.setTransform(307.85,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.branding_mc, new cjs.Rectangle(-330,-4,660,8), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:-26.6,y:-36.2},389).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-378.6,-564.2,1320,1760);


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
	this.instance.setTransform(767.5,512.1,0.05,52.2002,0,0,0,10,10);

	this.instance_1 = new lib.br();
	this.instance_1.setTransform(0.5,512.1,0.05,52.2002,0,0,0,10,10);

	this.instance_2 = new lib.br();
	this.instance_2.setTransform(384.05,1023.5,39.3998,0.05,0,0,0,10,10);

	this.instance_3 = new lib.br();
	this.instance_3.setTransform(384.05,0.5,39.3998,0.05,0,0,0,10,10);

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
	var mask_graphics_0 = new cjs.Graphics().p("EgcHBF5IAAsgMA4PAAAIAAMgg");
	var mask_graphics_2 = new cjs.Graphics().p("EgcHBFgIAAsgMA4PAAAIAAMgg");
	var mask_graphics_4 = new cjs.Graphics().p("EgcHBFgIAAsgMA4PAAAIAAMgg");
	var mask_graphics_6 = new cjs.Graphics().p("EgcHBFgIAAsgMA4PAAAIAAMgg");
	var mask_graphics_8 = new cjs.Graphics().p("EgcHBFgIAAsgMA4PAAAIAAMgg");
	var mask_graphics_10 = new cjs.Graphics().p("EgcHBFgIAAsgMA4PAAAIAAMgg");
	var mask_graphics_12 = new cjs.Graphics().p("EgagBFgIAAsgMA4PAAAIAAMgg");
	var mask_graphics_14 = new cjs.Graphics().p("EgmABFgIAAsgMBMBAAAIAAMgg");
	var mask_graphics_16 = new cjs.Graphics().p("EglQBFgIAAsgMBMAAAAIAAMgg");
	var mask_graphics_18 = new cjs.Graphics().p("EgnTBFgIAAsgMBSWAAAIAAMgg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg0BBFgIAAsgMBoDAAAIAAMgg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg0BBFgIAAsgMBoDAAAIAAMgg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg3PBFgIAAsgMBvfAAAIAAMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-165,y:447.275}).wait(2).to({graphics:mask_graphics_2,x:-75,y:444.775}).wait(2).to({graphics:mask_graphics_4,x:-19.5,y:444.775}).wait(2).to({graphics:mask_graphics_6,x:35.5,y:444.775}).wait(2).to({graphics:mask_graphics_8,x:95.5,y:444.775}).wait(2).to({graphics:mask_graphics_10,x:145.5,y:444.775}).wait(2).to({graphics:mask_graphics_12,x:190.25,y:444.775}).wait(2).to({graphics:mask_graphics_14,x:197.25,y:444.775}).wait(2).to({graphics:mask_graphics_16,x:248.0005,y:444.775}).wait(2).to({graphics:mask_graphics_18,x:275.484,y:444.775}).wait(2).to({graphics:mask_graphics_20,x:273,y:444.775}).wait(2).to({graphics:mask_graphics_22,x:332,y:444.775}).wait(2).to({graphics:mask_graphics_24,x:359.996,y:444.775}).wait(186));

	// branding
	this.instance_7 = new lib.branding_mc();
	this.instance_7.setTransform(384.25,843.1);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(210));

	// ref_code
	this.instance_8 = new lib.code_mc();
	this.instance_8.setTransform(49.95,1010.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadInOut).wait(191));

	// logo
	this.instance_9 = new lib.logo();
	this.instance_9.setTransform(599.5,1083.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:963.45},14,cjs.Ease.quadInOut).wait(196));

	// brand
	this.instance_10 = new lib.white_bg();
	this.instance_10.setTransform(382.45,1114.45,2.1889,2.1882,0,0,0,-0.2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:994.45},14,cjs.Ease.quadInOut).wait(196));

	// kv
	this.kv_mc = new lib.kv_mc();
	this.kv_mc.name = "kv_mc";
	this.kv_mc.setTransform(204.85,307.25,0.64,0.64,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.kv_mc).wait(210));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(372.9,502.1,405.20000000000005,702.1);
// library properties:
lib.properties = {
	id: 'A7AE48A664DE43B5BEC4BBCC86599430',
	width: 768,
	height: 1024,
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