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
              Scratch.BlockShape.SQUARE
            } 
          }
        }
				]
			};//end return
		}//end get info  
//call block definitions below
		DSEcho(){
			report 'DSIN';
		};
	}//end class extension
	Scratch.extensions.register(new Extension());
})(Scratch);
