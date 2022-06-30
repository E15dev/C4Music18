/**
 * @name C4Music18
 * @version 0.1.6
 * @author XerwinXpl
 * @description play C418 music
 * @authorLink https://twitter.com/XerwinXpl
 * @website https://github.com/E15dev/C4Music18
 * @source https://raw.githubusercontent.com/E15dev/C4Music18/main/C4Music18.plugin.js
 */

const tracks = [
    'https://t4.bcbits.com/stream/bc6aac1858567be93a888c8975e884d4/mp3-128/1077969287?p=0&ts=1656680730&t=3d0a9bbaf363f70994caeb276f9ad84e55a65f26&token=1656680730_198b3a330946c99a3b444a62b02c3f3d037884e2',
    'https://t4.bcbits.com/stream/3be9ef24e0e1128d52a97f18ad80a170/mp3-128/2210605235?p=0&ts=1656680730&t=5e264e8fb0bd87e3d1baa834759dabef13af505e&token=1656680730_cc9dcd276d54582deefa830e3193959240021074',
    'https://t4.bcbits.com/stream/1b3385bf8c4169623952758e2a364909/mp3-128/2420183342?p=0&ts=1656680730&t=9f99ac2879d6fd1395725b7b8a806a7a9decb195&token=1656680730_d90dc25d5a00f5d83732120506e99cf9da0f7ee8',
    'https://t4.bcbits.com/stream/b358d1961c607e28f79450f8bc685205/mp3-128/4056329291?p=0&ts=1656680730&t=8d6f20b1639cc2490a7276eb1a397090c0f7a264&token=1656680730_1802d177300346206fb89b9d140c3f1c30bc0dc6',
    'https://t4.bcbits.com/stream/85f789b256addf5e69d5c6f4f3c91eb6/mp3-128/2834993980?p=0&ts=1656680730&t=86d4b1564cf34be0146481b34f360016a5f837fe&token=1656680730_9a382b73fbd8553e1647c98dd8552d77c9ba9372',
    'https://t4.bcbits.com/stream/f9c0ebb02d3d9975c7142d891b79a547/mp3-128/91570495?p=0&ts=1656680730&t=cf717c0e68a5b52404c38f8666881c4932ee5ca6&token=1656680730_8d5208dfaaaf19756b46583cc26d665d425fda78',
    'https://t4.bcbits.com/stream/2546e3eda89b7aaccbdc80ad853cc1fd/mp3-128/1328755437?p=0&ts=1656680730&t=f2e2a6be06a4a9033584836677c975017d8ab086&token=1656680730_89b391a232b47c53f92f25dabdd99112984e100d',
    'https://t4.bcbits.com/stream/cd49e5352cc9a20d9dfc578532536470/mp3-128/3116021428?p=0&ts=1656680880&t=64ff93bc9b6064f75deffbc8e1df68c3ab98e859&token=1656680880_9747c4094e6ee9e8032fcd87dbcd80e2bccc6ff9',
    'https://t4.bcbits.com/stream/17299ba58416eb288d6e8a2e8665476d/mp3-128/3433861699?p=0&ts=1656680758&t=36a2bb290fd33a3568dbcecb51718bb8ee6df216&token=1656680758_2a3864ba28bf3d9a7cc492a4a5bbffb3d573a38f'
]

const names = [
    'kaffee',
    'bummer',
    'peanuts',
    'familiar faces',
    "it's complicated",
    'hotel music',
    'repetition',
    'sod',
    'heyhey'
]

var audio;

module.exports = class C4Music18 {
    load() {}
    start() {
        var l_t_id;
        var t_id = randomNumber(0, 8);
        //BdApi.showToast("now playing : " + (t_id+1) + " | " + names[t_id], {type: "success", icon: false, timeout: 5000});
        trackToast(t_id)
        audio = new Audio(tracks[t_id]);
        audio.volume = 0.1;
        audio.play();
        audio.onended = function() {
            l_t_id = t_id;
            while (t_id == l_t_id) {
                t_id = randomNumber(0, 8);
            }
            //BdApi.showToast("now playing : " + (t_id+1) + " | " + names[t_id], {type: "success", icon: false, timeout: 5000});
            trackToast(t_id)
            audio = new Audio(tracks[t_id]);
            audio.volume = 0.1;
            audio.play();
        };
    }

    stop() {
        audio.pause();
    }
}

function randomNumber(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
}

function trackToast(tid) {
    BdApi.showToast("now playing : " + (tid+1) + " | C418 - " + names[tid], {type: "success", icon: false, timeout: 7500});
    console.log("now playing : " + (tid+1) + " | C418 - " + names[tid]);
}
