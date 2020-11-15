import Prism from 'prismjs';
import './css/style.scss';
import prismjsDebugger from './js/prismjs-debugger';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  prismjsDebugger(document.getElementById('while-loop'), [
    { number: 1 },
    { number: 3 },
    { number: 4, console: '3' },
    { number: 5 },
    { number: 3 },
    { number: 4, console: '2' },
    { number: 5 },
    { number: 3 },
    { number: 4, console: '1' },
    { number: 5 },
    { number: 3 },
    { number: 8, console: 'Bonne année !!' }
  ], true).initialize();

});
