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


(lib.s6_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1E2946").s().p("Ag9BqQgcgTgQgaQgQgcAAghQAAggAQgdQAQgaAcgSQAdgQAgAAQAiAAAbAQQAcASAQAaQARAdAAAgQAAAggRAdQgQAagcATQgbAQgiAAQghAAgcgQgAgnhFQgSALgMATQgMASAAAVQAAAWAMATQALAUATAKQASALAVgBQAhAAAYgYQAYgXAAgiQAAgVgLgSQgLgTgSgLQgRgLgYAAQgWAAgRALg");
	this.shape.setTransform(233.2,143.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AlHFeIgJgVQgEgKgHgIQBlgJBjgWQBhgXBUglIADgCIgHgGIgqgmQgZgWgTgNIAxgdIArAhQAZATATARIAMALQAygcApgkQAtgnAfgxIjaAAQgsAkg1AhQhEAphVAiQgDgHgHgJQgIgKgGgGQgHgIgHgGQBTgeA/glQBCglAugoQAwgpAdgoIBCAOQgYAegdAeIDDAAIAMgDIAoAYQgrBZhFA/QhHBAhYAqQhZAqhlAaQhqAahnAMIgFgUgAlIAZQgIgQgIgJQBLgNBMgaQA9gTA6gcIgGgFQgZgWgSgMQgagSgTgLIAsgfQAfARAlAbQAUAPAPANQA2gfAugoQAhgcAZgfIjiAAIgNAKQhJA6hlAvQgEgHgIgIIgPgQQgGgFgJgGQBBgcA0ghQA2ghAogjQAqglAXghIBCAPQgYAdgcAcIDQAAIAKgDIAnAYQglBDg+A2Qg8A1hJApQhIAphSAcQhQAchOARQgFgMgIgQg");
	this.shape_1.setTransform(181.725,120.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AlVFLIgOgUQgGgKgGgGQBegSA8gYQAhgNAZgOIgDgCQg5grgohEIAzgVQAnA8A1AkIAGAEQAegcAPgdQANgYAGgaIjuAAIAAk1ID4AAIAAhEIlCAAIAAg2IK3AAIAAA2Ik4AAIAABEIEGAAIAAE1IkOAAQgIAngSAkQgRAhgdAdQAeANAgAKQBIAUBZAIQBcAJBpADQgJAKgHARQgHARgDAPQhugFhdgLQhcgMhJgYQgngNgjgSQgfAUgoASQhBAbhgAVIgKgQgAAdgMQAAAYgBAXIDMAAIAAhQIjLAAgAjfAjIC9AAQADgYgBgYIAAggIi/AAgAAdhdIDLAAIAAhQIjLAAgAjfhdIC/AAIAAhQIi/AAg");
	this.shape_2.setTransform(98.9,123.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("AlRFnIgggSQAcgqANg0QAMgyAEg0QADg+ABgjIAAiTIgRAVIgNgMIgggXQAqguAghEQAghDAUhLIA2ANQgJAfgJAcIBuAAIAIgCIAlAYQgIAXgMAcQgKAWgQAdIgEAIIBTAAIAAHRQAAATgEALQgEAOgOAFQgNAIgSABQgTACgfAAQgBgLgFgPQgEgQgGgJIA6AAQALAAAAgKIAAh6IhIAAIAACUIgsAAIAAiUIhOAAIgFAjQgHAugNAlQgOArgVAgQgFgFgIgGgAiOCCIBIAAIAAhqIhIAAgAkCAwQAAArgCAkIAAADIBKAAIAAhqIhIAAgAiOgVIBIAAIAAhhIhIAAgAkCgVIBIAAIAAhhIhIAAgAkLilIBsAAQAIgNAHgQIAUgxIACgFIhpAAQgTAvgVAkgACvFuIAAiZIijAAIAAg2ICjAAIAAhhIhZAAQgTAtgWAhIgfgSQgGgDgJgEQAYghAUgxQATgzAJguIA0AKQgIAhgKAfIBGAAIAAhMIA4AAIAABMIB3AAIAAA0Ih3AAIAABhICMAAIAAA2IiMAAIAACZgAANhRQgMgNgHgGQAugUAcghQAagfANgqQAIgZAFgZIhtAAIAAgzIFSAAIgBAXQgDBGgEAmQgDAlgGAbQgFAVgKAKQgGAKgMAFQgJAEgPABQgOACgWAAQgZgBgXgCQAAgJgEgQQgDgOgHgKIBIADQAJABAFgCQAGgBADgFQAGgHADgSQAEgOAEgsIAEg6Ih1AAQgHAigKAiQgQAwgeAnQggAmg2AYQgEgIgKgOg");
	this.shape_3.setTransform(16.4,120.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("AiyE0QgGgPgIgPICSABQANAAAFgFQAEgDAAgLIAAl5QAngUAkgXQAmgZAkgbQAigaAhgdIAHgIIoEAAIAAg8II/AAIANgDIAwAjQglAng0AtQg0Arg2AkQgsAegpAXIAAFcQAAAegKAPQgKAPgWAHQgWAHgqABQgkAChCAAQgCgKgHgUg");
	this.shape_4.setTransform(-60,123.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AEBFEIhLggIigg7IAegsIDqBUQAmAPAYAMIgeA0QgcgOghgOgAk+FPIgOgSQgHgJgIgGQBagSA2gTQA4gUAigVQAigXARgVQAQgWAFgWQAGgWAAgRIAAhLIA/AAIAABLQAAAXgHAeQgGAbgTAbQgTAbglAaQgnAbg6AXQg7AYhcAVQgEgKgGgHgAkTDSIAAklIIvAAIAAEgIhAAAIAAjoImyAAIAADtgAj3ibIAAjDIH0AAIAADDgAi5jPIF0AAIAAhbIl0AAg");
	this.shape_5.setTransform(339.45,26.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("AlVFVQgNgNgOgKQBSgqA7g6QA5g6AkhDQAjhAAVhFQAUhDAIg/QAJg+ACgyQACgrAAgnIBDAAQgBAdgDA9IgCAZIAFAkQAEAkANA4QAMAzAZBAQAYA9AlA6QAnA9A2AzQA3A0BNAjQgOAKgLAOQgKALgJAPQhOgkg6g4Qg5g4gng/QgnhAgYhBQgTg1gLgvQgIAggKAgQgVBGgnBHQgmBFg7A/Qg7A9hVAtQgGgJgQgPg");
	this.shape_6.setTransform(256.825,24.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("Ak9FjIgRgPIgOgMQAmgnAWgtQAXguALgvQAJglAFgmIhsBDIgWg3QAkgRAhgTIBBglIABgwIAAjpIEbAAIgHgaQgNglgMgbIA8gNQAMAdANAiIAMAoIECAAIAAA4IojAAIAACxQAAAugFA1QgFAzgNA5QgNA1gZAzQgaAzgpApQgEgGgJgJgAgvFUIgMgbIB0ABQALgCACgCQAEgEABgIIAAkLQAlgTAkgVQAmgYAhgaIAJgHIliAAIAAg2IGeAAIAOgEIAqAhQgdAbgpAgQglAcgtAbQgdASgbAOIAAD1QAAAagHANQgJAOgVAGQgVAHghAAIhUABQgBgMgHgPgAkyhZIg3hlIAugWIAcAxQALAQASAiIAVApIgwAbIgVgsg");
	this.shape_7.setTransform(185.35,24.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("AlXFLIAAqVIKcAAIAAA6IpgAAIAAIiIJzAAIAAA5gACuDQQgmgjgngfIg8gvQgJARgLAQQgaAmg0AiQgzAihWAcQgGgKgKgOQgJgMgMgKQBTgYAvgdQAugdAYghQAWgdAHgfIjoAAIAAg0IDwAAIAAgOIAAhlIh9AAQgeApgiAeIgPgLIgkgVQAoggAggrQAhgsASgxIA5AOQgNAhgRAeIFoAAIAAA0IjSAAIAABlIAAAOID3AAIAAA0Ij+AAIgBAFIABgBQAoAcAnAfQAmAdAnAiQAmAgAYAZIgpApQgYgagigfg");
	this.shape_8.setTransform(104.875,25.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("ACBFdIgHgWIgJgVICBACQAOAAADgEQAEgGAAgJIAAnLIoOAAIAAIbIg7AAIAApVIDcAAIAMgcIAXg7QAKgcAGgZIBJAMQgRAtgVArIgUAoIFnAAIAAIFQAAAdgIAQQgIARgVAIQgXAHglABQghACg7AAQgBgJgEgLgAieEDIAAlCIE4AAIAAEIIkBAAIAAA6gAhnCSIDJAAIAAicIjJAAg");
	this.shape_9.setTransform(21.925,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("Ag9FwIAAl/IFsAAIAAE8QAAAXgGAMQgFANgSAGQgPAIgdABIhIABQgBgMgFgOQgGgPgFgLIBaABQAPgBAAgNIAAg3Ij7AAIAAB7gAgFDIID7AAIAAhBIj7AAgAgFBcID7AAIAAg+Ij7AAgAkFFQIgMgTQgGgJgGgGQALgGAOgSQAOgSAAgaIAAkkIh4AAIAAg5ICxAAIAAFWIBUg+IAJAbQAGARAFAIIiCBkIgaAWIgMAPIgIgSgAh2g9IAAguIDQAAIAAg3IikAAIAAgsICkAAIAAg0Ii4AAIAAguIC4AAIAAg+IA8AAIAAA+IDAAAIAAAuIjAAAIAAA0ICoAAIAAAsIioAAIAAA3IDZAAIAAAugAjjjjQgYgZgUgSIgrgqIAmglQAWASAXAVIAsArQAXAXAKANIgpArQgMgSgUgVg");
	this.shape_10.setTransform(-59.525,24.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s6_mc, new cjs.Rectangle(-96.2,-12.2,470.5,170.1), null);


(lib.s5_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1E2946").s().p("Ag8BqQgcgSgQgbQgRgcAAghQAAghARgcQAQgcAcgQQAcgQAgAAQAiAAAbAQQAbARARAbQARAcAAAhQAAAhgRAcQgRAbgbASQgbAQgiAAQghAAgbgQgAgohFQgRAMgMARQgLATAAAVQAAAXALASQAMATARALQAUALAUAAQAiAAAYgZQAYgXAAgiQAAgUgMgUQgKgRgTgMQgSgLgXAAQgVAAgTALg");
	this.shape.setTransform(245.65,239.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AhbFiIgSgQQgKgIgHgEQAigkATgsQAUgsAKgsQAKgtADgtQADgsAAgoIAAjWIC8AAQgJgYgVggQgWghgVgaIA1gVQAaAeATAcQAXAhAJAVIg2AYIC/AAIAAE5Ig8AAIAAgyIkIAAIgDAuQgDAvgMA3QgLAygWAyQgXAygjAmIgNgPgAAggXIEHAAIAAiZIkHAAgAk8FPQgEgOgHgPIAxABIAegBQAIAAADgDQADgCAAgKIAAjQIhnAgIgRg8QAYgEA2gPIAqgNIAAisIhrAAIAAg5IBrAAIAAiiIA7AAIAACiIBcAAIAAA5IhcAAIAACbIBYgZIAJA2IhhAeIAADiQAAAZgGAPQgGAOgQAHQgQAIgZABQgWACgrAAg");
	this.shape_1.setTransform(190.675,216.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("ABNFvIAAj6QgQAYgSAYQgoA1guArQgvArgwAcQgEgIgIgJIgOgRIgPgNQAugYAvgnQAvgmAngwQAXgdASgdIjFAAIAAg3IDpAAIAAhjIiuAAIAAj/IGeAAIAAD/Ii0AAIAABjIDgAAIAAA3Ii8AAQATAgAXAdQAlAuAsAmQArAlAsAZIgOAOIgQARQgHAKgFAHQgrgbgtgtQgrgqgmg0QgTgbgQgZIAAD8gAgniCIEoAAIAAiTIkoAAgAkGFsIAAnKIgBACQgpA5gsAsIgJgRIgZgpQAogmAmgzQAlg0Ahg5QAfg5AYg+IA4ASQgaBDglBCIgTAhIAAIig");
	this.shape_2.setTransform(108.6,216.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FA0031").s().p("Ag5F0Qg4AAgegJQgfgJgMgVQgMgVAAgmIAAh1IBhAAIAABzQAAARAKAEQAKAEAiAAICHAAQAUAAAKgGQAKgGAEgTQAFgWACglQAKAGAQAGQARAHAQAEIAdAHQgGA4gNAbQgOAfgaAKQgcALguAAgAl1E8QAPgVANgZQANgUAPgfQANgbAHgYIBWAfIgiBOQgVAugRAdgAECEkIgdg5QgSgigNgUIBWgbIA/BrQAQAeAHARIhcAgQgFgRgPgfgAABDoIhGhRIBKgiQARAQATAVIAlAoQARASAMAQIhQAoQgKgRgQgTgAlGCLIgbgXQgOgLgKgEQAegoAPgxQAOgvAEgwQAEgzAAglIAAh6IFxAAIgChKIBaAAIABBKIBHAAIgFgEQgWgUgVgOIA4goQAOAIAfAXQAXARAPAPIgVAPIBJAAIAABNIjRAAIABARQAJBOAQA5IAAACQAtg9AahIIBWAUQgmBkg/BPIgRAUIABABQAYAfAfAAQAPAAAGgWQAFgVAEg0QAOAMAWALQAVALARAFQgGA5gMAeQgNAfgVAMQgVAMgjAAQg8AAgogmIgPgRQgeAaggAUQgFgHgOgOIgmglIAAAcIjtAAIAAi6IDtAAIAACTQAogXAjgfIgGgNQgZhGgLhdIgFgyIkdAAIAAAuQAAAdgEAyQgDAmgJAyQgJAsgRAqQgRArgZAiQgJgLgMgKgAh8AoIBXAAIAAg7IhXAAgAjKh0IAAhAID2AAIAABAg");
	this.shape_3.setTransform(24.525,215.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FA0031").s().p("AiMFhIgZgYQgLgJgNgJQAvggAVglQAWglAGgmQAHgkAAgkIAAhJIBWAAIAABNQAAAegEAmQgEAmgMAjQgLAkgZAiQgZAigoAeQgHgJgMgMgAlrEwQAZgiAXglQARgZAlg/QAagtAYgxIBGBAIgsBWQgZAvgXAnQgVAmgcAsgAEAFsQgPABgOgGQgQgEgJgKQgLgLgEgRQgFgRAAgpIAAjtIBYAAIAADwIABAPQABAGACABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIAFACIAMAAIAGgCIAFgBQADgDACgSQACgMAAgSIACgwQAMAMARAKQASAJARAFQgBAegCAYQgDAegEAKQgIAagSAKQgHAFgOAEQgNACgKAAgAAxFYIAAlCIBUAAIAAFCgAEDghIk4AYQgeAEgIACQgPADgIADIgGgbIgJgiIgIgbQAPgDASgGQATgFAMgMIBChPIiIAAIAAhVIDQAAIgFgRQgMgigLgaIBZgVQAKAVAPAlQAIAWAGASIC+AAIAABVIhvAAQATAVAVAZQAUAXAcAlQAXAeAOAXIhNAxQgNgYgUgbgABEiUQgUAagTAXICvgJQgZgfgQgSIA4ghIh3AAgAkNgOQgcgRgagOQgdgQgZgJIAyhKQAbAKAbANQAcAMAbARQAdARAPALIg2BPQgNgMgcgRgAjwjmQgegUgWgOQgbgQgagMIA2hHQAdANAXANQAYANAeASQAYAPAQAQIg4BNQgOgOgZgSg");
	this.shape_4.setTransform(-59.525,216.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AitFrIAAljQgRApgWAsQgYAugbAqQgaAngcAeQgGgPgJgNIgSgcQAbgaAZgjQAZgkAXgqQAXgoATgrQALgZAJgYIiOAAIAAg4ICdAAIAAiGIgSAEQhAAKgzAFQgBgKgFgNIgKgZQAogEBFgNQAxgIA7gOQAygNAkgOIAnAvQglAOg8APIglAIIAACRICLAAIAAA4IiLAAIAAAUIASAUIAgAkIBUBjIgkAxQgJgPgSgZIhHhgIAAFggAA1FKIAApyIEqAAIAAJsIg9AAIAAg9IiyAAIAABDgABwDOICyAAIAAm8IiyAAg");
	this.shape_5.setTransform(435.325,120.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FA0031").s().p("AC7FPQgKgagJgPIAvABQAXABAHgBQAIAAADgDQADgDAAgGIAAhKIAAiSIhyAAIgEAYIgBAIQAVARATARQAVATAYAYQAVAUANARIg7A1QgLgPgWgXIg1g1QgOAagVAYQgaAfgrAZQgJgQgQgSQgOgQgLgKIAACgIhWAAIAAmLIC5AAIAAg5Ii/AAIAAhRIHzAAIAABRIjcAAIAAA5IDMAAIAAEtQAAAggIASQgGATgWALQgXAKgbADQgfACgjAAQgEgVgIgWgAgoDRQAhgRARgUQAVgYALgbQAKgaAEgbIAAgFIhgAAgAktFhIgbgZQgNgLgKgGQAlglAWgtQAVguALguIACgMIhYAzIgchaQAegMAmgTIA8gdQACgmAAgkIAAgWIhEAlIgMgvQgIgbgMgbQgMgfgLgWIBFghQAUAiARAqQALAcAGAWIAAjAIERAAIgCgIQgJgmgIgZIBogUQAKAbALAiIAIAeIDoAAIAABWIoPAAIAACaQAAAvgFA4QgEA6gOA4QgOA5gZA1QgaA2gqApQgGgJgNgOg");
	this.shape_6.setTransform(354.825,120.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FA0031").s().p("AlOFOIgagZIgWgSQApghAVgmQAVgmAGglQAGglAAgiIAAgfIhMAAIAAhYIF2AAIAABYIg9AAIAAC5QAAAPAFAHQAFAIARADQARADAgAAIDJAAQAcAAAOgIQAOgHAGgWQAGgXADgtQAOALAaAJQAXAIAWAFQgIA/gOAgQgPAhgeAOQgfANg2AAIjRAAQg+AAgkgLQgkgKgOgaQgOgbAAgtIAAi5Ig6AAIAAAhQAAApgKA1QgIAxgbAzQgaAxgvAmQgGgJgMgOgAB/DkQgCgSgIgYQgIgXgKgTIBNACQAIgBADgCQADgDAAgHIAAi8Ii3AAIAAhVIC3AAIAAhOIA5AAIAAgyInwAAIAABBIDlAAIAABYIkdAAIAAhUIgmAAIAAidIKxAAIAACdIhCAAIAAA7IBTAAIAABVIhTAAIAAC+QAAAfgHASQgHATgWAKQgUAKgdADQgcACgcAAIgMAAgABEBTQgGgPgQgeIgZgpIBKgeQAXAdAQAfQASAhAIAcIhOAjQgEgSgKgWg");
	this.shape_7.setTransform(271.875,122.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("ABcFUQgEgMgJgPIA9ABIAkgBQALgBACgCQAEgEAAgGIAAiZIlDAAIAAg0IFDAAIAAhFIkwAAIAAgyIHVAAIAAAyIhqAAIAABFIB5AAIAAA0Ih5AAIAACaQABAWgHAPQgGANgTAHQgRAGgeACQgeACgtgBQgBgLgGgQgAj2FuIAAlwIgPAPQgqArgmAdQgDgJgEgIIgYgpQAkgaAlgjQAlgjAggoQAggnAYgqIA1AVQgcAwgjAvIgEAEIAAG0gAAMEMIgjgqQgSgVgTgSIAqgcQAdAbAcAeQAeAgAPAXIguAhQgJgOgRgWgAg+hPIAAkJIF+AAIAAEJgAgDh8IEHAAIAAhCIkHAAgAgDjqIEHAAIAAhAIkHAAgAlnjKQAdgSAkgeQAfgaAdggQAdggAQgbIA6AXQgXAighAkQgiAlgiAdQgjAeglAag");
	this.shape_8.setTransform(188.3,120.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2946").s().p("AhgFcIgZgTQBIgrAqgxQAogxAWg0QAUgyAHgyIABgHIi1AAIAAg3IC6AAIABgcIAAh3IA4AAIAAB3IAAAcIDTAAIAAA3IjNAAQAZBcAvBKQA2BUBZAmQgJAHgGAHIgOASIgLAQQg8gegug0Qgtg0gehFQgLgYgJgaQgHAYgKAYQgXA5grA1QgrA1hLAuQgIgLgMgKgAkkFqQAAgLgFgQQgGgQgHgKQA5AEAbgEQAIgBAHgDQAFgDAFgGQAOgRAGgqQAFgsABg7IgBgfIgRARQgeAeglAcQgmAdgfARIgQgZQgJgLgLgKQAigPAigWQAhgXAhgdQAcgbASgZIgBgFQgIgigSgiIgaAQQgoAYgyAWQgHgLgKgKIgSgSQAygWAlgWIAjgWQgeglgyghIAnggQA0AiAgAkIABAAQAkgcAYgdIAyAbQgeAigmAdIgLAKQAMATAHAUQARAmAFArQAFAsAAApQAABDgIA1QgIAzgYAdQgQASgbAEQgSADgYABgADohZQgcgagigYIApgdQATAMAXASQASAPAWAUQATATAKAOIgqAgQgSgYgegbgAidi4IAAhCIi+AAIAAg3IC+AAIAAg/IA7AAIAAA/IDPAAIAAg/IA7AAIAAA/IC8AAIAAA3Ii8AAIAAA+Ig7AAIAAg+IjPAAIAABCg");
	this.shape_9.setTransform(105.15,120.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2946").s().p("AC9FuQgdAAglgDQgBgMgFgRQgFgPgIgNQAqADAbABIAuAAQAMABAGgDQAJgDAFgHQAKgLAHgfQAGgdAGg9QAFg7AEhcQAEhLADhmIjrAAIgPAeQgYAwgbAnIgyghQAbgiAYgvQAWgrATg4QATg0ANg3IA6AMQgSBCgSAxIgHAUIEPAAIgBAeQgDB6gGBqQgFBkgEA0QgFA6gIAjQgIAggLAPQgNAQgPAIQgOAGgVACQgOACgWAAIgQAAgAleEHIBXgPQAjgGBHgNIBwgVIAEA1IksA9gAlUB6QgDgLgFgHQAOgDAQgNQAOgOAUgWQAOgOASgWQAMgOAhgrIAKgOIgkAEIg4AIIgfAFQgHACgHADIgFgQIgIgWIgHgSQANgEAKgMQAOgQAMgRQAIgMANgVIAgg1QASggARgjQAQgiAPglIA5AXQgWAxgdAyQgZAugfAwQgSAbgQAWIBtgKIAGgIQAagpAWgoIAzAfQg4BXg4BHQglAvgnApIC+gcIAAAbQAAAQACAIIjaAmQgcAFgLAEIgTAHgACBBdQgZgggegeQgagcghgcIAogiQAdAWAgAhQAdAcAcAgQAbAgAOAXIgtAmQgPgagZgeg");
	this.shape_10.setTransform(21.95,120.5125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2946").s().p("AEfE0QgdgbgYgUQgcgZgZgUIAogkIA1AqQAZAUAdAaQAZAXAQAQIgqArQgMgQgcgagAlJFBQgFgRgHgNIBaACQAJgCADgCQADgCAAgIIAAk6IiEAAIAAg1IDDAAIhahCQghgYgggUIAhgnIBHAvQATgRAVgYQAUgWAXgfIAGgIIjYAAIAAg2ID+AAIAMgDIAkAaQgQAbgbAjQgZAhgaAcQgTAUgVASIAUAOQAcASAaAVIgRAVIA3AAIAJgCIAlAKIghBdQgRAtgRAkIgtgMIAUgvIAUg5IAEgNIhVAAIAAE7QAAAZgHANQgGANgRAIQgSAHgaACQgcABgpAAQgDgQgFgMgAgxFEQgLgMgKgIQBGgZAqgeQArgfATghQAUgkAGghQAHghAAggIAAifIA5AAIAACgQAAAlgIAoQgGAogYAoQgYAngsAjQgtAjhMAdIgQgXgAABClIAAl8IB5AAIAMgrIAJglIiqAAIAAg2IGLAAIAAA2IigAAIgSAzIgKAdICcAAIAAF6Ig6AAIAAlDIjdAAIAAFFg");
	this.shape_11.setTransform(-59.925,122.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2946").s().p("AivFhIgRgQQgGgIgKgGQBJgkAwgqQAxgoAdgtQAagrAPgsQAOgrAEgoQAEgrAAgfIAAgzIBAAAIAAAzQAAAcgCAdQAQBFAbA+QAgBIAzA1QA1A1BJAaQgGAEgJALIgOATIgMASQhLgfg3g7Qg2g8gghOIgQgsIgCAGQgPAwgfAwQgfAxgyAuQgzAthNAnQgEgGgJgKgAlvD0IBvicQAggxAYgnIAuAnIhpCpIg1BOgADigLQgJgFgIgDQANgaANgiQANgfANgoIAIgXIkoAAQgNAkgPAjQgZA3gfArIgRgMIgXgMQgJgGgJgDQAggqAYgzQAXgxAVhBQAUg8AMhBIA/AMQgPBBgRA7IEmAAIAMgDIAsAYQgJAkgPArQgOAngRAlIgcA/gAjzjEQgagUgcgUQgdgTgcgQIAkgrQAbAPAeATQAdARAbATQAbATAQARIgmAxQgOgQgdgVg");
	this.shape_12.setTransform(421.55,24.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E2946").s().p("AltAhIAAhBILbAAIAABBg");
	this.shape_13.setTransform(345.125,23.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2946").s().p("AjrFuIAAk6QgrAtgyAjIgJgSIgWglQA2gmAsgyQAsgyAkg7QASgeARgiIjBAAIAAg5IDbAAQAZg9ASg/IA+APQgQA2gWA3IGdAAIAAA5Im2AAIgHAPQgmBPg0BHIAAGBgAh7FeIAAg4IDTAAIAAjjIizAAIAAg4ICzAAIAAiZIA8AAIAACZIC1AAIAAA4Ii1AAIAADjIDUAAIAAA4g");
	this.shape_14.setTransform(262.975,24.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2946").s().p("ABnFQQgHgSgHgNIA9ABIAxABIAfgBQANAAAEgFQAEgFAAgLIAAoFIl6AAIAAg5IHxAAIAAA5Ig7AAIAAIGQAAAfgIAQQgJAPgXAJQgTAGgrACQgjAChAAAQgBgLgGgUgAkFFvIAAnGQgjA0gnArIgWgoIgNgSQAngoAhgyQAjg0Acg5QAcg4AVg9IA5ARQgbBIgeA8IgPAfIAAIpgAhoDVIAAlMID6AAIAAEUIjBAAIAAA4gAgvBoICJAAIAAipIiJAAg");
	this.shape_15.setTransform(180.9,24.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E2946").s().p("AlKFWQgIgMgMgMQBTggA7hAQATgVARgYQgkgegegWQgqghgggWQAPgsANgyQARg+ALgyIADgLIhhAAIAAg5IBtAAIAKgzQAKg8AHg0IA8AEQgKA8gLA4IgJArICCAAIAMgCIAmAHQgJB5gZBeQgWBUgiBAIAmAiQAeAaAVAaIgpAxQgVgagegcIgdgdQgfArgkAgQg1AwhDAdgAjIh+QgTBUgKAhIgQA5IAtAgIA7AtQAQghAOgmQAfhVAMh0Ih/AAgAAlFcIAAp1IE6AAIAAJnIg8AAIAAgvIjEAAIAAA9gABfDmIDEAAIAAnHIjEAAg");
	this.shape_16.setTransform(97.35,24.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E2946").s().p("AlRFoIgfgTQAbgrAMgyQANgzAEg1QAEg8gBglIAAiSIgRAVIgMgMIgggYQAqgsAhhEQAghDAShMIA3AMQgJAggKAcIBvAAIAJgCIAlAXQgJAYgNAcQgJAWgPAeIgFAIIBTAAIAAHPQAAASgEAOQgEAMgNAHQgNAHgUACQgSABgfAAQgCgLgEgPQgEgMgGgNIA5AAQAMAAAAgLIAAh5IhIAAIAACUIgsAAIAAiUIhOAAIgFAjQgHAtgNAnQgOAqgVAfQgFgEgIgFgAiOCBIBIAAIAAhpIhIAAgAkBAvQgBAsgCAjIAAADIBKAAIAAhpIhHAAgAiOgUIBIAAIAAhiIhIAAgAkBgUIBHAAIAAhiIhHAAgAkLikIBsAAQAIgOAHgRIAUgwIACgGIhpAAQgTAwgVAlgACuFvIAAiaIiiAAIAAg1ICiAAIAAhhIhYAAQgTAsgWAhIgugYQAZgiASgwQAUg0AJgtIAzAJQgHAhgKAeIBFAAIAAhKIA5AAIAABKIB4AAIAAA2Ih4AAIAABhICMAAIAAA1IiMAAIAACagAANhRQgNgOgFgEQAtgVAbghQAbgfANgpQAIgaAFgaIhtAAIAAgyIFSAAIgBAWQgCBGgEAmQgEAmgGAaQgFAXgJAKQgIAJgKAEQgKAFgQABQgNACgWgBQgaAAgWgBQgBgKgDgQQgDgNgHgLIBIAEQAJgBAFgBQAGAAADgGQAGgGAEgUQADgOAEgrIADg7Ih0AAQgHAjgKAiQgQAxgfAlQgeAmg3AZQgEgJgKgNg");
	this.shape_17.setTransform(16.15,24.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E2946").s().p("AiyE0QgGgPgJgQICTABQANAAAFgDQAEgGAAgJIAAl6QAmgTAlgYQAmgYAkgbQAigZAhgfIAIgHIoGAAIAAg8II/AAIAOgCIAvAiQgkAog1AsQgzArg2AlQgsAdgpAXIAAFbQgBAfgJAOQgJAQgXAIQgWAGgqACQgkAChBAAQgCgMgIgTg");
	this.shape_18.setTransform(-60.25,27.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s5_mc, new cjs.Rectangle(-97.3,-12.2,567.6999999999999,266), null);


(lib.s4_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1E2946").s().p("AhsHlQgTgTgVgRQgUgSgPgIQAsgxAag8QAag7ANg/QANhBAEg8QADhBAAgzIAAkZID4AAQgKgagSggQgZgugZgkIB3gtQAfAoAWAoQAaArANAfIhOAfID8AAIAAHQIiDAAIAAg7IkpAAIgBARQgFBKgRBOQgQBLgfBJQgeBFgyA5QgMgRgTgQgABNgwIElAAIAAijIklAAgAmyG8QgKglgNgdIA5ABIAlgBQAJAAAEgDQAFgEAAgMIAAjjIh+AlIgdiBQAogJBJgSIAqgKIAAi7IiJAAIAAh9ICJAAIAAjQICAAAIAADQIBuAAIAAB9IhuAAIAACaIBogbIASB2Ih6AjIAAEJQABAugKAdQgKAegbAPQgZARgnAFQgnAFg3AAQgDgZgKgng");
	this.shape.setTransform(293.65,181.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E2946").s().p("AhJIFQgDgbgPgoQgPgrgMgYIBHACIBAABIAoAAQARAAAGgFQAGgFAAgPIAAk4IpBAAIAAiAIJBAAIAAiFICKAAIAACFIEMAAIAACAIkMAAIAAE7QAAA4gPAeQgOAdgnAQQgnAPg4AEQgyAEgyAAIgigBgAj0EsQgagmgigrQghgrghgiIBphDQAcAbAoAsQAmArAZAjQAbAmAQAhIhwBMQgQgjgZgkgAFGiSIAAhvIqXAAIAABvIiGAAIAAjtIGhAAIgIgWQgTgxgQggICCgfQAWAlARAoQANAdAJAcIF1AAIAADtg");
	this.shape_1.setTransform(180.725,180.6188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2946").s().p("AlkIEIAAmdQgWBCgaA8QgZA4geAuQgGgUgLgYIgXgwIgXgrQAZggAagyQAWgoAag+QAWg3ARg4QAMgoAIglIiQAAIAAh6ICYAAIAAjZICCAAIAADZIB/AAIAAB6Ih/AAIAAArIARAWICbDZIhbBrQgLgbgWguQgYgvgUgmIgEgHIAAHUgAFvGoIkNAkIhYAOQgjAFgQAGQgSAFgLAFIAAAAIgCABIAAgKIgJgbIgSgxQgKgbgIgRQAVgIASgXQASgXAVgoQAMgVATgqQAUguAXg7QAUg0AbhNQAYhIAPhFICMA0QgcBdgnBhQgjBVgtBiQgSAmgUAlID3gbIgTgtQghhKgbg0IBuguQAhA8AeA9QAiBIAWA4QAYA8AOAxIh5A5QgIgjgPgugAg/gPIgtgdIgogWQAqgwAkhCQAhhCAbhPQAahRAPhMICHAbQgSBVgfBbQgeBUgmBMQgkBLgrA1QgOgMgTgMgAFPh/QglhFgchVQgahPgZhqIB9geQAfCAAqBeQAqBdBABNQgcAVgcAgQgeAhgNAaQg0hAglhHg");
	this.shape_2.setTransform(65.9,181.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2946").s().p("AkjICIAAjNIjDAjIgbh/IB+gRIBggNIAAh8IhWAAQgYAAgdAEQgbAFgGAIIgYhLQgGgRgKgUQARgEANgXQAPgZANgjIATg5QALgkAQg6IhjAAIAAh8ICBAAQANg5AHg+IB+AXQgJAvgMAxICqAAIAAB8IjMAAQgVBEgYBCQgPArgQAmIA/AAIAAieIB5AAIAACeIBWAAIAAB2IhWAAIAABpIBbgOIAGBzIhhARIAADkgAhaHuIAAh6IDzAAIAAjKIi8AAIAAh4IH2AAIAAB4Ii1AAIAADKIDkAAIAAB6gAFcgUQg5ghg1gcIgZgNQgnAcgpAYQhMAthNAeQgIgPgOgUIgdgpQgRgVgNgNQBEgXBFglQBBgjA8gwQA6gvAsg3IAOgSIk4AAIAAh2IGJAAIAYgGIBcAuQghBTg0BEQgkAwgpApQA1AZA6AfQA0AcAkAZIhQBnQgegYg1geg");
	this.shape_3.setTransform(-47.425,181.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2946").s().p("Ah9B4QBFgVAlgnQAegfAFgoIgMABQgoAAgggZQgfgbgBgvQABgvAfgaQAggaArAAQA7AAAeApQAeApAABFQAABcg5BIQg6BHhkAfg");
	this.shape_4.setTransform(373.95,73.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E2946").s().p("AhrHlQgWgVgTgPQgUgSgPgIQAsgxAag8QAag7ANg/QANhBAEg8QAEhBAAgzIAAkZID3AAQgKgagSghQgWgngcgqIB3gtQAeAnAYApQAXAnAPAjIhOAfID8AAIAAHQIiDAAIAAg7IkoAAIgCARQgGBQgQBIQgQBLgfBJQgeBGgzA4QgJgOgUgTgABOgwIEkAAIAAijIkkAAgAmyG8QgKgogNgaIBdAAQAKAAAFgDQAEgEAAgMIAAjjIh+AkIgdiAQAsgKBFgRIAqgKIAAi7IiJAAIAAh9ICJAAIAAjQICBAAIAADQIBuAAIAAB9IhuAAIAACaIBngbIASB2Ih5AjIAAEJQAAAugKAdQgJAdgbAQQgbARgmAFQgnAFg3AAQgEgggJggg");
	this.shape_5.setTransform(294.525,37.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2946").s().p("AnnIIIAAvaIEGAAIATgFIBaA0IhCDSQgWA+gOAjQA1BAAQA5QAQA7AAAvQAAA1gMAmQgMAjgcAUQgNAKgRAFQgQAGgTADIgjADIgngBQgCgdgHgdQgGgggPgbIAxABQASAAAPgJQAKgIAEgQQAFgRAAgXQAAgmgQg0QgPgygxg4QAOgtALgmIAXhcIAThLIhiAAIAANkgACOIEQgBgcgLgmQgLgmgRgbQAnAFAdABIAwABQAXAAAQgRQAKgMAIguQAHg0AFhVQAEg8AChUIi0AAQgMBWgVBKQgdBkg8BRQg8BRhqA6QgMgYgZgeQgYgegYgSQBfgyA0hFQA0hFAYhXQAYhUAFhpQAGhVAChOIiMAAIAAh7IELAAQgFgegMglIgbhWIB6geQAQAqAMAnQAOAqAKAhIheAbIFFAAIAAB7IlmAAQgCBBgEBBIEwAAIgBA3QgECIgEBGQgGBXgFA5QgFA3gJAlQgJAigNAPQgRAYgXALQgUAJgbAFQgZAGgmAAIgWAAQgcAAgegCg");
	this.shape_6.setTransform(183.55,37.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2946").s().p("An0H0IAAhoIGsAAIAAg6IlbAAIAAhkIFbAAIAAgwIk2AAIAAleIE2AAIAAgqImlAAIAAhnIGlAAIAAgxIhxAFQh5AFhPABQAAgVgJgfIgRgzQBVgBBwgGQBXgCBygJQBVgFBlgKQBRgJBNgMIA9BnQhMANhjAJQhVAJhIAFIAAA4IGxAAIAABnImxAAIAAAqIFIAAIAAFeIlIAAIAAAwIFyAAIAABkIlyAAIAAA6IG5AAIAABogAA8BnIDCAAIAAgxIjCAAgAj+BnIC2AAIAAgxIi2AAgAA8gZIDCAAIAAgwIjCAAgAj+gZIC2AAIAAgwIi2AAg");
	this.shape_7.setTransform(68.125,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2946").s().p("ADbEfQhkBziIBJQgMgXgMgRQgOgUgRgWQgRgUgPgNQCBg8BfhvIAYgfQgihHgZhRQgziegei7IAwgIIg1AAIAAh/IF6AAIAWgDIBXAWQgYD1hAC0QgnBtg2BaIASAaQBOBsB2A+QgPAMgTAVQgOAPgUAbQgQAUgKASQh9hLhRh0gADGg1QAOAoAQAlQAZgxAVg4QAth5AXiRIjWAAQAZCeAtCIgAnCG5IgigoQgRgSgRgMQBKg0A7hTQA4hOAqhgQgwhBgug5Qg6hHgwg3IBhhPQAxA1A7BFIAyA7QAPgvAMgzQAThRAMhUIkxAAIAAh/IFTAAIAXgDIBUAXQgTDbgyC1QgOAygRAtQAeAqAYAjQAqA9AbA3IhvBdQgYg2gpg/IgMgSQgQAggSAeQhPCEhwBbQgJgPgSgVg");
	this.shape_8.setTransform(-47.675,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s4_mc, new cjs.Rectangle(-99.5,-14.8,486.1,248.3), null);


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
	this.shape.graphics.f("#666666").s().p("AHHAeQgHgGABgKIAHAAQABAGAFAEQAEAEAIAAQAHAAAEgEQAFgDAAgGQAAgGgEgDQgFgDgIAAIgGAAIAAgGIAFAAQAIgBAEgDQAEgDAAgFQAAgGgEgDQgEgDgHAAQgHAAgEAEQgEADAAAGIgIAAQAAgJAGgGQAHgGAKAAQALABAGAEQAHAFAAAJQgBANgKACQAFABAEAEQADAEAAAHQABAKgIAFQgGAGgMgBQgLAAgHgFgAFWAaQgHgJAAgPIAAgDQAAgOAHgKQAIgKAMAAQALAAAHAKQAIAKAAAOIAAADQAAAPgIAJQgHAJgLAAQgMAAgIgJgAFcgUQgEAHAAAMIAAADQAAALAEAIQAFAHAJAAQAHAAAFgHQAGgIAAgLIAAgDQAAgMgGgHQgFgHgHAAQgJAAgFAHgAEZAaQgIgJAAgPIAAgDQAAgOAIgKQAHgKAMAAQALAAAIAKQAHAKABAOIAAADQgBAPgHAJQgHAJgMAAQgMAAgHgJgAEfgUQgFAHAAAMIAAADQAAALAFAIQAEAHAJAAQAIAAAFgHQAFgIAAgLIAAgDQAAgMgFgHQgFgHgIAAQgJAAgEAHgADbAaQgHgJAAgPIAAgDQAAgOAHgKQAHgKAMAAQAMAAAHAKQAIAKAAAOIAAADQAAAPgIAJQgGAJgNAAQgMAAgHgJgADigUQgGAHAAAMIAAADQAAALAGAIQAEAHAIAAQAIAAAGgHQAEgIAAgLIAAgDQAAgMgEgHQgGgHgIAAQgIAAgEAHgACiAdQgGgGgBgKIAIAAQABAHAEADQAFAFAHAAQAHAAAEgEQAFgFAAgHQAAgIgEgEQgFgDgGAAQgNAAgEAIIgIAAIACgnIAqAAIAAAHIgiAAIgCAXQAGgHAMAAQAKAAAGAHQAHAFgBALQAAAKgGAIQgIAFgKAAQgLABgHgHgAhFAZQgJgKAAgPQAAgPAJgJQAKgLAOAAQAPAAAJALQAJAJAAAPQAAAPgJAKQgJAKgPAAQgOAAgKgKgAg+gTQgIAIABALQgBAMAIAIQAGAIALgBQALABAHgIQAHgIgBgMQABgLgHgIQgHgIgLAAQgLAAgGAIgAiMAaQgJgKAAgQQAAgPAJgJQAKgLAPAAQALABAIAFQAIAHACALIgJAAQgCgIgGgDQgFgFgIAAQgLAAgGAIQgHAHAAAMQAAAMAHAIQAGAIALgBQAIAAAFgEQAGgDABgIIAKAAQgCALgIAHQgIAFgMAAQgPAAgJgJgAmsAaQgJgKAAgQQAAgPAJgJQAKgLAPAAQALABAIAFQAIAHACALIgJAAQgCgIgGgDQgFgFgHAAQgMAAgGAIQgHAIAAALQAAAMAHAIQAGAIALgBQAKABAGgGQAGgFAAgKIAAgCIgUAAIAAgHIAdAAIAAAlIgIAAIAAgKQgDAEgFADQgHAEgIgBQgOAAgKgJgAnqAdQgHgGgBgLIAJAAQABAHAFAEQAFAEAIAAQAHAAAFgDQAFgDgBgFQAAgGgFgDQgEgCgKgBQgKgDgGgCQgHgFAAgIQAAgKAHgFQAGgGALAAQAMABAGAFQAIAGAAAKIgJAAQgBgHgEgDQgFgEgHAAQgHAAgEADQgEADAAAGQAAAGAFACQAEACAKACQALACAEACQAIAFAAAJQAAAJgHAGQgHAGgLgBQgNABgHgHgAGKAjIAAgHIAcgXQAGgFACgDQADgFABgFQgBgHgEgDQgEgEgHAAQgHAAgEAEQgEAFAAAGIAAACIgIAAIAAgCQgBgKAHgHQAGgFALgBQALAAAGAGQAHAFAAALQAAAGgFAGQgDAEgHAGIgVASIAlAAIAAAIgABkAjIAAgHIAbgXQAGgFADgDQADgFAAgFQAAgHgEgDQgFgEgHAAQgGAAgFAEQgDAFAAAGIAAACIgJAAIAAgCQAAgKAHgHQAGgFAKgBQALAAAHAGQAGAFAAALQAAAGgEAGQgDAEgIAGIgVASIAlAAIAAAIgAASAjIgYhFIAIAAIAVA6IAWg6IAJAAIgaBFgAj5AjIAAhFIAbAAQALAAAGAGQAHAFAAALQAAAKgHAEQgGAGgLAAIgSAAIAAAbgAjwAAIASAAQAGAAAEgDQAEgEABgFQgBgHgEgDQgEgEgGAAIgSAAgAkOAjIgmg1IAAA1IgIAAIAAhFIAIAAIAmA1IAAg1IAIAAIAABFgAA7AKIAAgHIAiAAIAAAHgAjAAKIAAgHIAiAAIAAAHgAlqAKIAAgHIAiAAIAAAHg");
	this.shape.setTransform(10.1,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.code_mc, new cjs.Rectangle(-42.1,-6.5,104.7,15.4), null);


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
			}, 3000
		)
	}
	this.frame_61 = function() {
		var _this = this;
		this.stop();
		setTimeout(
			function () {
				_this.gotoAndPlay('frame3');
			}, 3000
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

	// s6
	this.instance_4 = new lib.s6_mc();
	this.instance_4.setTransform(151.5,129.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81).to({_off:false},0).to({y:79.5,alpha:1},15,cjs.Ease.quadOut).wait(114));

	// s5
	this.instance_5 = new lib.s5_mc();
	this.instance_5.setTransform(151.5,129.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({y:79.5,alpha:1},15,cjs.Ease.quadOut).to({y:39.5,alpha:0},15,cjs.Ease.quadInOut).wait(134));

	// s4
	this.instance_6 = new lib.s4_mc();
	this.instance_6.setTransform(151.5,129.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({y:79.5,alpha:1},14,cjs.Ease.quadOut).to({y:39.5,alpha:0},15,cjs.Ease.quadInOut).wait(169));

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