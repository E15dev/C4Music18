/**
 * @name C4Music18
 * @version 0.1.1
 * @author XerwinXpl
 * @description play C418 music
 * @authorLink https://twitter.com/XerwinXpl
 * @website https://github.com/E15dev/C4Music18
 * @source https://raw.githubusercontent.com/E15dev/C4Music18/main/C4Music18.plugin.js
 */


//const test_audio_link = 'https://t4.bcbits.com/stream/433394b5867317aecb383601f830efef/mp3-128/1603173650?p=0&amp;ts=1656633589&amp;t=63e32ea177cedd9754ead49d0b1e98e7e459434d&amp;token=1656633589_01f13e3c15873007c7389c61c1fae653c2c28fe1&quot;'
//const test_audio_link_C418 = 'https://t4.bcbits.com/stream/cd49e5352cc9a20d9dfc578532536470/mp3-128/3116021428?p=0&ts=1656675218&t=68c0c9ad1155150a94e634bf7526457c73e176e4&token=1656675218_ba44184baea6457e2fd6f1245da45a914c455db8'
/**const tracks = [
    test_audio_link,
    test_audio_link_C418]**/

const tracks = [
    'https://t4.bcbits.com/stream/cd49e5352cc9a20d9dfc578532536470/mp3-128/3116021428?p=0&ts=1656680158&t=11198d90e955d0a2e77955636a0f50ff8bca1601&token=1656680158_7a9e206ef2112293e690797325b6c724e19c7a4f',
    'https://t4.bcbits.com/stream/2546e3eda89b7aaccbdc80ad853cc1fd/mp3-128/1328755437?p=0&ts=1656680158&t=a10194b6beb383e641466fd505dd0ec342415453&token=1656680158_20b9637c4612d47068c4d739b99cfc1766e0ffa2',
    'https://t4.bcbits.com/stream/f9c0ebb02d3d9975c7142d891b79a547/mp3-128/91570495?p=0&ts=1656680158&t=3d7728209b1603efe3668c6aebaeef953d25174d&token=1656680158_eb34f950d2b4e9ceeef4fd1d91fdbf5875bbd5a5',
    'https://t4.bcbits.com/stream/85f789b256addf5e69d5c6f4f3c91eb6/mp3-128/2834993980?p=0&ts=1656680158&t=fdee08c8f0678bbcd2b1c5d3bf0752b220f89c88&token=1656680158_3196ee54f2f54c2069bb065b29bf26394616076e',
    'https://t4.bcbits.com/stream/b358d1961c607e28f79450f8bc685205/mp3-128/4056329291?p=0&ts=1656680158&t=0a8c67ed015c4a165c3de066a117db71f1822c91&token=1656680158_e2e0db9300fe5bbda78845ff68abd54e3a3ee54e',
    'https://t4.bcbits.com/stream/1b3385bf8c4169623952758e2a364909/mp3-128/2420183342?p=0&ts=1656680158&t=0c9f378e371389b930a4b11ee44654f8cd8f90d6&token=1656680158_2b60e4d7b2f3033ee6be5ad0a4a2b069dd58bf1e',
    'https://t4.bcbits.com/stream/3be9ef24e0e1128d52a97f18ad80a170/mp3-128/2210605235?p=0&ts=1656680158&t=d400a77d9218f7367cf5b0cd45f898df76bbb656&token=1656680158_edf3064070b98cdf41057717ea01b886c2dce8ab',
    'https://t4.bcbits.com/stream/bc6aac1858567be93a888c8975e884d4/mp3-128/1077969287?p=0&ts=1656680158&t=bb2b77761ca42a4ffa59285bfd9d5475f6727f50&token=1656680158_9dc49502cf8aa166a14cfb916ff6301216a38309'
]

var audio;

module.exports = class C4Music18 {
    load() {}
    start() {
        var track_now = _.sample(tracks);
        BdApi.showToast("now playing : " + track_now);
        audio = new Audio(track_now);
        audio.volume = 0.1;
        audio.play();
    }

    stop() {
        //dont touch
        audio.pause();
    }
}
