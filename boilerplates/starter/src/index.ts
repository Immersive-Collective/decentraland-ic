/*
  
  Immersive Colective - DC
  https://immersive-collective.org

  DC SDK7 - Boilerplate - index.ts

  */

import _ from 'lodash';
import Wad from 'web-audio-daw';

//import * as Pizzicato from 'pizzicato';

const array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));  // Should print [5, 4, 3, 2, 1]

// const sound = new Pizzicato.Sound({
//     source: 'wave',
//     options: {
//         type: 'sine',
//         frequency: 440
//     }
// }, () => {
//     sound.play();
// });
// console.log("Pizzicato")

// let bell = new Wad({source : 'https://www.myserver.com/audio/bell.mp3'});
// bell.play();
// bell.stop();

//console.log(Wad)

// if (typeof AudioContext === 'undefined') {
//     global.AudioContext = function() {
//         // Mocked functions and properties
//         this.createOscillator = () => {
//             return {
//                 start: () => {},
//                 stop: () => {},
//                 // ... other required methods and properties
//             };
//         };
//         // ... other required methods and properties
//     };
// }

if (typeof AudioContext !== 'undefined') {
    console.log("AudioContext is available!");
} else {
    console.log("AudioContext is NOT available.");
}


console.log("index.ts");