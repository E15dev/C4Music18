/**
 * @name C4Music18
 * @version 0.1.0
 * @author XerwinXpl
 * @description play C418 music
 * @authorLink https://twitter.com/XerwinXpl
 * @website https://github.com/E15dev/C4Music18
 * @source https://raw.githubusercontent.com/E15dev/C4Music18/main/C4Music18.plugin.js
 */


const test_audio_link = 'https://t4.bcbits.com/stream/433394b5867317aecb383601f830efef/mp3-128/1603173650?p=0&amp;ts=1656633589&amp;t=63e32ea177cedd9754ead49d0b1e98e7e459434d&amp;token=1656633589_01f13e3c15873007c7389c61c1fae653c2c28fe1&quot;'
//var audio;

module.exports = class C4Music18 {

    load() {}
    start() {
        BdApi.showToast("C4Music18 : starting!");
        //play(test_audio_link)
        var audio = new Audio(test_audio_link);
        audio.play()
    }

    stop() {
        audio.stop()
    }
}

/**
function play(a_link) {
    audio = new Audio(a_link);
    audio.play();
} **/
