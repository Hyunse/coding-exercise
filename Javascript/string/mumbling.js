function accum(s) {
    let result = '';

    Array.prototype.map.call(s,(char, index, array) => {
        let low = char.toLowerCase();
        result += low.toUpperCase();
        for(let i = 0; i < index; i++) {
            result += low;
        }
        if(array.length != index+1) {
            result += '-';
        }
    });

    console.log(result);
}

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

accum("ZpglnRxqenU");// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
accum("NyffsGeyylB");// "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
accum("MjtkuBovqrU");// "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
accum("EvidjUnokmM");// "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
accum("HbideVbxncC");// "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");


function accumBest(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}