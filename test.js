(function(Scratch) {
	'use strict';
	class Extension {
		getInfo() {
			return {
				id: "DSFI",
				name: "Drag Functions",
				color1: "#42FF88",
				color2: "#21BA63",
				color3: "#166342",
				//define blocks below
				blocks: [
					{
					//test log block
					opcode: 'testLogToConsole',
					text: 'log to console',
					blockType: Scratch.BlockType.COMMAND
					},
					{
	 				//test reporter block
					opcode: 'testReporter',
					text: 'testing!',
					blockType: Scratch.BlockType.REPORTER,
					disableMonitor: false,
					allowDropAnywhere: true
					}
				]
			};//end return
		}//end get info  
//call block definitions below
		testLogToConsole(){
			console.log('log!');
		};
		testReporter(){
			return 'report!';
		};
	}//end class extension
	Scratch.extensions.register(new Extension());
})(Scratch);
