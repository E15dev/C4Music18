/**
 * @name C4Music18
 * @version 0.1.1
 * @author XerwinXpl
 * @description play C418 music
 * @authorLink https://twitter.com/XerwinXpl
 * @website https://github.com/E15dev/C4Music18
 * @source https://raw.githubusercontent.com/E15dev/C4Music18/main/C4Music18.plugin.js
 */


const test_audio_link = 'https://t4.bcbits.com/stream/433394b5867317aecb383601f830efef/mp3-128/1603173650?p=0&amp;ts=1656633589&amp;t=63e32ea177cedd9754ead49d0b1e98e7e459434d&amp;token=1656633589_01f13e3c15873007c7389c61c1fae653c2c28fe1&quot;'
const test_audio_link_C418 = 'https://t4.bcbits.com/stream/cd49e5352cc9a20d9dfc578532536470/mp3-128/3116021428?p=0&ts=1656675218&t=68c0c9ad1155150a94e634bf7526457c73e176e4&token=1656675218_ba44184baea6457e2fd6f1245da45a914c455db8'
const tracks = [test_audio_link, test_audio_link_C418]
var audio;
module.exports = class C4Music18 {
    load() {}
    start() {
        BdApi.showToast(_.sample(tracks));
        audio = new Audio(_.sample(tracks));
        audio.volume = 0.3
        audio.play()
    }

    stop() {
        audio.pause();
    }
}
