import { Component, OnInit } from '@angular/core';

@Component({
	styles:  [``],
  selector: '',
	template: `
	<!--
		<button style="margin-top:10px;margin-left:10px;" (click)="onPlay()">Play</button>
		-->
		<!--
		<div id="all" style="padding:50px;">
			<div id="01">So... for whatever reason... your company has decided to go with Angular2</div>
			<div id="02" style="margin:10px 0 10px 0;font-size:32px;">You panick!!!</div>
			<div id="03">What am i going to do do without those great Sencha Ext JS controls?</div>
			<div id="04" style="margin:10px 0 10px 0;font-size:24px;">That great Grid!</div>
			<div id="05">The PivotGrid, Calendar, TreeView, Charts, Dataview, Carousel, D3...</div>
			<div id="06" style="margin:10px 0 10px 0;">well... we at Sencha have great news!</div>
			<div id="07">now you can use all of the Ext JS controls you know and love from within Angular2!</div>
			<br>
			<div id="08">Introducing...</div>
			<div id="09">Sencha ExtAngular</div>
			<br>
			<img id="10" style="height:1px;" src="resources/app/images/ExtAngular.png" alt="" />
		</div>
		-->
	`
})
export class IntroComponent implements OnInit {

	onPlay() {
//		this.tl.play();
	}

	ngOnInit() {
// 		var tl = new TimelineLite();
// //			var all = document.getElementById('all');
// 			var v01 = document.getElementById('01');
// 			var v02 = document.getElementById('02');
// 			var v03 = document.getElementById('03');
// 			var v04 = document.getElementById('04');
// 			var v05 = document.getElementById('05');
// 			var v06 = document.getElementById('06');
// 			var v07 = document.getElementById('07');
// 			var v08 = document.getElementById('08');
// 			var v09 = document.getElementById('09');
// 			var v10 = document.getElementById('10');

// 	// Controlling Timeline Playback
// 	tl
// 		.from(v01, 6, {x: -915, autoAlpha: 3, delay: 0, ease:Power1.easeOut})
// 		.from(v02, 3, {x: -915, autoAlpha: 3, delay: 2, ease:Power1.easeOut})
// 		.from(v03, 3, {x: -915, autoAlpha: 3, delay: 1, ease:Power1.easeOut})
// 		.from(v04, 3, {x: -915, autoAlpha: 3, delay: 0, ease:Power1.easeOut})
// 		.from(v05, 3, {x: -915, autoAlpha: 3, delay: 0, ease:Power1.easeOut})
// 		.from(v06, 3, {x: -915, autoAlpha: 3, delay: 4, ease:Power1.easeOut})
// 		.from(v07, 3, {x: -915, autoAlpha: 3, delay: 3, ease:Power1.easeOut})
// 		.from(v08, 3, {x: -915, autoAlpha: 3, ease:Power1.easeOut})
// 		.from(v09, 3, {x: -915, autoAlpha: 3, ease:Power1.easeOut})
// 		.to(v10, 1, {height:200, ease:Power1.easeOut});


// element, duration, 
	//tl.pause();







//			var len = 3;
//			var y = -100;
			//this.tl = new TimelineLite();
			//this.tweenlight =new TweenLight();

			//this.sencha = document.getElementById('sencha');
			//this.gm = document.getElementById('gm');
			//this.text = document.getElementById('text');
//TweenLite.to(all, 1.5, {y: 50, autoAlpha: 0});
//			this.tl
//				.staggerTo(this.all, 0.2, {x: -20, ease:Power1.easeOut}, 0.5);
//			this.tl.play();
	}

}
