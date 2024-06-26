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
      					//test report input
					opcode: 'DSEcho',
					text: 'echo [DSIN]',
					blockType: Scratch.BlockType.REPORTER,
         				arguments: {
            					DSIN: {
							type: Scratch.ArgumentType.STRING, 
							defaultValue: 'message'
						} 
          				}
        			}
				]
			};//end return
		}//end get info  
//call block definitions below
		DSEcho(args){
			report args.DSIN;
		};
	}//end class extension
	Scratch.extensions.register(new Extension());
})(Scratch);
