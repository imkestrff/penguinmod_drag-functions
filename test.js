(function(Scratch) {'use strict';
	class Extension {
		getInfo() {
			return {
				id: "DSFI",
				name: "Drag Functions",
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
					disableMonitor: true,
					allowDropAnywhere: true
					}
				],
			};//end return
		}//end get info  
			logToConsole() {
    		console.log('Hello world!');
		}
	}//end class extension
	testLogToConsole(){console.log('log!')};
	testReporter(){return 'report!'};
	Scratch.extensions.register(new Extension());
})(Scratch);
