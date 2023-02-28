var plw = plb;
(function(a, b) {
    var v = plb,
        c = a();
    while (!![]) {
        try {
            var d = -parseInt(v(0x27b)) / 0x1 + parseInt(v(0x590)) / 0x2 * (-parseInt(v(0x501)) / 0x3) + parseInt(v(0x29a)) / 0x4 + parseInt(v(0x470)) / 0x5 + parseInt(v(0x21b)) / 0x6 + parseInt(v(0x1f7)) / 0x7 + -parseInt(v(0x5de)) / 0x8;
            if (d === b) break;
            else c['push'](c['shift']());
        } catch (e) {
            c['push'](c['shift']());
        }
    }
}(pla, 0x40518));
var version = plw(0x4e7),
    primaryIndex = 0x0,
    catIndex = -0x1,
    cList = [],
    chanels = {},
    epg = {},
    curList = [],
    p_pref = '',
    strInfo = plw(0x3f8),
    strEPG = plw(0x560),
    strSubt = '',
    strNew = '\x20<span\x20style=\x22color:red;font-size:60%;\x22>NEW</span>',
    strUP = plw(0x239),
    strDOWN = plw(0x2c7),
    strLEFT = plw(0x2d5),
    strRIGHT = plw(0x429),
    strSTOP = plw(0x59e),
    strPLAY = plw(0x2b2),
    strPAUSE = plw(0x4fa),
    strPlayPause = '<span\x20class=\x22fontello\x22>&#xe811;&#xe813;</span>',
    strRW = '<span\x20class=\x22fontello\x22>&#xe803;</span>',
    strFF = plw(0x3ae),
    strPREV = '<span\x20class=\x22fontello\x22>&#xe806;</span>',
    strNEXT = plw(0x507),
    pdsa = [plw(0x302), 'cats', plw(0x3ba), 'parentalArray', plw(0x5dc), plw(0x3bf), plw(0x51d), plw(0x5df), plw(0x352), plw(0x28c), plw(0x452), 'aSubs', 'sSortAbc', 'sPlayers', 'medHistory', plw(0x39a)];
$[plw(0x2c8)][plw(0x29e)] = !![], $['ajaxSetup']({
    'cache': !![]
});
if (typeof host == plw(0x250)) host = '';
if (host != plw(0x5cb)) host = '';
window[atob('ZXZhbA==')](atob(plw(0x48c)));

function getWidthK() {
    return window['innerWidth'] / 0x500;
}

function getHeightK() {
    var x = plw;
    return window[x(0x3a9)] / 0x2d0;
}

function checkIfIncluded(a) {
    var y = plw,
        b = document[y(0x5b2)](y(0x3da));
    for (var c = 0x0; c < b[y(0x1ed)]; c++)
        if (b[c][y(0x3f7)][y(0x548)](a) != -0x1) return !![];
    return ![];
}
if (!checkIfIncluded(plw(0x514))) $(document[plw(0x555)])[plw(0x43a)](plw(0x485) + host + plw(0x4ae) + __cv + plw(0x413));

function alert(a) {
    showShift(a);
}

function log(a, b) {
    var z = plw;
    try {
        var c = document[z(0x42c)](a);
        c[z(0x282)] = b + z(0x212) + c['innerHTML'];
    } catch (d) {}
}(function(a) {
    var A = plw;
    a['each']([A(0x592), 'hide'], function(b, c) {
        var d = a['fn'][c];
        a['fn'][c] = function() {
            var B = plb;
            return this[B(0x505)](c), d[B(0x285)](this, arguments);
        };
    });
}(jQuery), $(plw(0x2fb))['on']('show', function() {
    var C = plw;
    $(C(0x227))[C(0x393)]();
}), $(plw(0x2fb))['on']('hide', function() {
    var D = plw;
    $('#listIn')[D(0x592)]();
}), $(plw(0x363))['on']('show', function() {
    var E = plw;
    $(E(0x227))[E(0x393)]();
}), $('#listEdit')['on'](plw(0x393), function() {
    var F = plw;
    $(F(0x227))[F(0x592)](), $('#listEdit')[F(0x3d9)]('');
}), $(plw(0x31f))['on'](plw(0x592), function() {
    var G = plw;
    $(this)[G(0x364)]({
        'top': 0x0,
        'left': 0x0,
        'width': G(0x50b),
        'height': G(0x50b)
    })[G(0x364)]({
        'top': (0x2d0 * getHeightK() - $(this)[G(0x497)]()) / 0x2,
        'left': (0x4ec * getWidthK() - $(this)[G(0x3ff)]()) / 0x2
    });
}));
var $i1 = $(plw(0x433));
$i1['hide']();
var infoTimeout = null;

function infoBarHideT() {
    var H = plw;
    if ($(H(0x2af))['is'](H(0x43e)) || !stbIsPlaying() || $(H(0x3de))['is'](H(0x43e))) infoTimeout = setTimeout(infoBarHideT, sInfoTimeout * 0x3e8);
    else infoBarHide();
}

function infoBarHide() {
    var I = plw;
    try {
        tooltip['style'][I(0x54a)] = '';
    } catch (a) {}
    clearTimeout(infoTimeout);
    if (sInfoSlide) $i1[I(0x26b)]();
    else $i1[I(0x393)]();
}

function scrollUpDescr() {
    var J = plw;
    if (tooltip[J(0x354)][J(0x54a)]) tooltip[J(0x354)][J(0x241)] = $progress_div['offset']()['top'] - $progress_div[J(0x497)]() + 'px';
    $(J(0x426))['stop'](!![])['css']('margin-top', 0x0);
    var b = $(J(0x426))['height']() - $(J(0x54d))['height']() + $(J(0x342))[J(0x497)]() + $(J(0x49d))[J(0x497)]();
    scrollUp('programm_descr', b, 0x2710);
}

function showChanelInfo(a) {
    var K = plw;
    clearTimeout(detailTimer), clearTimeout(infoTimeout);
    if (a === undefined) a = 0x0;
    if (a == 0x1 && $i1['is'](K(0x43e)) && !$(K(0x54d))['is'](':visible')) {
        infoTimeout = setTimeout(infoBarHideT, sInfoTimeout * 0x3e8);
        return;
    }
    if (a) $i1[K(0x393)]();
    $(K(0x426))[K(0x595)](!![])['css'](K(0x310), 0x0);
    if (!$i1['is'](K(0x43e))) {
        if (a != 0x2) $(K(0x54d))[K(0x393)]();
        else $(K(0x54d))[K(0x592)]();
        if (sInfoSlide) $i1[K(0x29d)](0x190, scrollUpDescr);
        else $i1['show'](0x0, scrollUpDescr);
        if (a != 0x2) infoTimeout = setTimeout(infoBarHideT, sInfoTimeout * 0x3e8);
    } else {
        if (!$('#descr')['is'](K(0x43e))) {
            if (sInfoSlide) $(K(0x54d))[K(0x29d)](0x190, scrollUpDescr);
            else $(K(0x54d))[K(0x592)](0x0, scrollUpDescr);
        } else infoBarHide();
    }
}
var current_t = document[plw(0x42c)](plw(0x3d3)),
    current_s = document[plw(0x42c)]('current_s'),
    list_t = document[plw(0x42c)]('list_t'),
    list_s = document[plw(0x42c)](plw(0x419)),
    perm_t = document[plw(0x42c)](plw(0x42e));

function _t2(b) {
    return b['toString']()['length'] == 0x1 ? '0' + b : b;
};
setInterval(function() {
    var L = plw,
        a = new Date(Date[L(0x35c)]()),
        b = _t2(a[L(0x323)]()) + ':' + _t2(a['getMinutes']()),
        d = ':' + _t2(a[L(0x449)]());
    current_t[L(0x282)] = b, current_s[L(0x282)] = d, list_t['innerHTML'] = b, list_s[L(0x282)] = d, perm_t[L(0x282)] = b;
    if (playType && stbIsPlaying()) playTime++;
}, 0x3e8), setInterval(function() {
    var M = plw;
    try {
        if (playType < 0x0) {
            updateMediaInfo();
            return;
        }
        if (!playType) {
            var a = curList[primaryIndex],
                b = chanels[a];
            if (getCurProgData(a, updateChanelInfo)) {
                _prog100 = b, $('#progress')[M(0x364)](M(0x3ff), (Date['now']() / 0x3e8 - b['time']) / (b[M(0x4dc)] - b[M(0x200)]) * 0x64 + '%'), $(M(0x468))[M(0x3d9)]('+' + Math['round']((b[M(0x4dc)] - Date['now']() / 0x3e8) / 0x3c));
                var d = Math[M(0x51a)]((Date[M(0x35c)]() / 0x3e8 - b[M(0x200)]) / 0x3c);
                if (d > 0x0) $(M(0x20b))['text'](d + '/');
            }
        } else {
            var f = playType + playTime;
            if (curProg == -0x1 || f > epgArray[curProg][M(0x4dc)]) updateArchiveInfo(f);
            else {
                var b = epgArray[curProg] || {
                    'name': '',
                    'time': Math['floor'](f / 0xe10) * 0xe10,
                    'time_to': (Math[M(0x1f2)](f / 0xe10) + 0x1) * 0xe10,
                    'descr': ''
                };
                _prog100 = b, $(M(0x54e))[M(0x364)](M(0x3ff), (f - b['time']) / (b[M(0x4dc)] - b[M(0x200)]) * 0x64 + '%'), $('#progress_r')[M(0x364)]('width', b[M(0x4dc)] > Date[M(0x35c)]() / 0x3e8 ? (b[M(0x4dc)] - Date['now']() / 0x3e8) / (b[M(0x4dc)] - b[M(0x200)]) * 0x64 + '%' : '0%'), $(M(0x468))['text']('+' + Math[M(0x51a)]((b[M(0x4dc)] - f) / 0x3c)), $(M(0x2d6))[M(0x3d9)](time2time(f));
                var d = Math[M(0x51a)]((f - b[M(0x200)]) / 0x3c);
                if (d > 0x0) $('#cur_time')[M(0x3d9)](d + '/');
            }
        }
    } catch (g) {}
}, 0x7530);

function send_event(a, b, c) {
    var N = plw;
    try {
        gtag(N(0x2f9), a, {
            'event_category': b,
            'event_label': c
        });
    } catch (d) {}
}
var _gap = null;

function ga_event(a, b, c) {
    send_event(a, b, c), clearTimeout(_gap), _gap = setTimeout(function() {
        var O = plb;
        ga_event(O(0x50a), O(0x50a), 'ping');
    }, 0x78 * 0xea60);
}
var _sn = 0x0;

function getThumbnail(a) {
    var P = plw;
    return sThumbnail && a ? '<img\x20src=\x22' + a + P(0x3f4) : '';
}

function updateChanelInfo(a) {
    var Q = plw;
    if (a != curList[primaryIndex]) return;
    $(Q(0x209))['html'](primaryIndex + 0x1);
    var b = chanels[a];
    b ? ($(Q(0x25d))[Q(0x364)]('background-image', 'url(\x22' + getChannelPicon(a) + '\x22)'), $(Q(0x2ea))[Q(0x38e)](b[Q(0x25b)])) : ($(Q(0x25d))[Q(0x364)](Q(0x422), 'url(\x22\x22)'), $(Q(0x2ea))['html'](_(Q(0x581)) + Q(0x3b0) + a));
    $progress_div['css']('background-color', Q(0x446)), $(Q(0x276))[Q(0x364)](Q(0x3ff), '0%'), $(Q(0x4d8))[Q(0x38e)](Q(0x2b6)), $(Q(0x24f))[Q(0x3d9)](''), $(Q(0x5a7))[Q(0x3d9)]('');
    if (!getCurProgData(a, updateChanelInfo)) $('#programm_name')[Q(0x38e)]('&nbsp;\x20'), _prog100 = 0x0, $(Q(0x54e))[Q(0x364)](Q(0x3ff), '0%'), $('#begin_time')[Q(0x3d9)](''), $(Q(0x468))[Q(0x3d9)](''), $(Q(0x342))[Q(0x3d9)](''), $(Q(0x49d))[Q(0x3d9)](''), $(Q(0x426))[Q(0x3d9)]('');
    else {
        $('#programm_name')[Q(0x38e)](b[Q(0x226)]), _prog100 = b, $(Q(0x54e))[Q(0x364)](Q(0x3ff), (Date[Q(0x35c)]() / 0x3e8 - b['time']) / (b['time_to'] - b[Q(0x200)]) * 0x64 + '%'), $(Q(0x3ee))[Q(0x3d9)](time2time(b[Q(0x200)])), $(Q(0x468))[Q(0x3d9)]('+' + Math['round']((b[Q(0x4dc)] - Date[Q(0x35c)]() / 0x3e8) / 0x3c));
        b[Q(0x220)] && b[Q(0x220)][Q(0x1ed)] && ($('#nprogramm_name')[Q(0x38e)](b['nextpr'][0x0][Q(0x226)]), $(Q(0x24f))[Q(0x3d9)](time2time(b[Q(0x220)][0x0][Q(0x200)])), $(Q(0x5a7))[Q(0x3d9)](Math[Q(0x51a)]((b[Q(0x220)][0x0]['time_to'] - b[Q(0x220)][0x0][Q(0x200)]) / 0x3c)));
        $(Q(0x342))[Q(0x38e)](b[Q(0x226)]);
        var d = Math[Q(0x51a)]((Date[Q(0x35c)]() / 0x3e8 - b[Q(0x200)]) / 0x3c);
        $(Q(0x49d))[Q(0x38e)](time2str(b[Q(0x200)]) + Q(0x55a) + time2time(b[Q(0x4dc)]) + '\x20(<span\x20id=\x22cur_time\x22>' + (d > 0x0 ? d + '/' : '') + Q(0x4e3) + Math[Q(0x51a)]((b[Q(0x4dc)] - b['time']) / 0x3c) + '\x20' + _('min') + ')'), $(Q(0x426))[Q(0x38e)](b['descr'] ? getThumbnail(b[Q(0x39d)]) + b[Q(0x5d5)][Q(0x567)](/\|/g, Q(0x230)) : '');
    }
    if (sInfoChange && !$i1['is'](Q(0x43e))) showChanelInfo(0x1);
}

function setCurProg(a, b, d) {
    var R = plw,
        f = [];
    b !== null && b[R(0x1ed)] && (f = b[R(0x258)](function(j, k) {
        var S = R;
        return j[S(0x200)] - k[S(0x200)];
    }));
    var g = f[R(0x3c4)](function(j, k, l) {
            var T = R;
            return j[T(0x4dc)] >= Date[T(0x35c)]() / 0x3e8 && j[T(0x200)] <= Date[T(0x35c)]() / 0x3e8;
        }),
        h = chanels[a];
    if (g === -0x1) h[R(0x226)] = '', h[R(0x200)] = 0x0, h['time_to'] = 0x0, h[R(0x5d5)] = '', h[R(0x220)] = null, h[R(0x320)] = Date[R(0x35c)]() / 0x3e8 + 0xe10;
    else {
        var i = f[g];
        h[R(0x226)] = i[R(0x226)], h[R(0x200)] = i[R(0x200)], h[R(0x4dc)] = i[R(0x4dc)], h['descr'] = i[R(0x5d5)], h[R(0x320)] = 0x0, h['icon'] = i[R(0x39d)], h['nextpr'] = f[R(0x336)](g + 0x1, g + 0x1 + sNextCount + 0x1);
        if (h[R(0x220)][R(0x1ed)] == 0x0) h[R(0x220)] = null;
        if (d) d(a);
    }
}
var arrayGetCurProg = [];

function doGetCurProg() {
    var U = plw;
    if (arrayGetCurProg[U(0x1ed)] === 0x0) return;
    var a = arrayGetCurProg['shift']();
    getEPGchanelCurCached(a[U(0x235)], function(b, c) {
        var V = U;
        setCurProg(b, c, a[V(0x577)]), doGetCurProg();
    });
}

function getCurProgData(a, b) {
    var W = plw;
    if (!chanels[a]) return ![];
    if (chanels[a][W(0x4dc)] && chanels[a][W(0x4dc)] >= Date['now']() / 0x3e8) return !![];
    if (chanels[a][W(0x320)] && chanels[a][W(0x320)] > Date[W(0x35c)]() / 0x3e8) return ![];
    var c = ![];
    chanels[a][W(0x220)] && (setCurProg(a, chanels[a]['nextpr'], nofun), chanels[a][W(0x320)] = 0x0);
    if (chanels[a][W(0x4dc)] && chanels[a][W(0x4dc)] >= Date[W(0x35c)]() / 0x3e8) c = !![];
    arrayGetCurProg['push']({
        'ch_id': a,
        'callback': b
    });
    if (arrayGetCurProg['length'] < 0x2) doGetCurProg();
    return c;
}

function body_onUnload() {
    setCurrent(catIndex, primaryIndex), playType = 0x0;
}
if (navigator[plw(0x5e2)][plw(0x57b)]()[plw(0x2ec)](/maple/) == -0x1) {
    if (document[plw(0x334)]) document['addEventListener']('visibilitychange', function() {
        if (document['hidden']) body_onUnload();
    });
    else {
        if (document['attachEvent']) document['attachEvent'](plw(0x37e), function() {
            var X = plw;
            if (document[X(0x25e)]) body_onUnload();
        });
    }
    if (window['addEventListener']) window[plw(0x334)](plw(0x561), body_onUnload);
    else {
        if (window[plw(0x440)]) window[plw(0x440)](plw(0x500), body_onUnload);
    }
    if (window[plw(0x334)]) window['addEventListener'](plw(0x410), body_onUnload);
    else {
        if (window[plw(0x440)]) window[plw(0x440)](plw(0x447), body_onUnload);
    }
}
var playType = 0x0,
    prevArr = [];

function setCurrent(a, b, c) {
    var Y = plw;
    if (typeof c == Y(0x250)) c = ![];
    if (a != catIndex || b != primaryIndex || (c != playType > 0x0 || b == -0x1 || playType == -0x174876e800)) {
        if (playType == -0x174876e800) {
            if (medHistory[Y(0x1ed)]) {
                medHistory[0x0][Y(0x3fa)] = Math[Y(0x1f2)](stbGetPosTime());
                if (sFavorites != -0x1) providerSetItem(Y(0x259), JSON[Y(0x38c)](medHistory));
            }
        } else try {
            var d = cats[catsArray[catIndex]][primaryIndex],
                f = cats[catsArray[a]][b],
                g = playType > 0x0;
            prevArr = prevArr[Y(0x29b)](function(h) {
                var i = h['t'] != undefined;
                return (h['ci'] != d || i != g) && (h['ci'] != f || i != c);
            }), prevArr[Y(0x4e9)]({
                'ci': d,
                'c': catIndex,
                'i': primaryIndex
            });
            if (playType > 0x0) {
                prevArr[0x0]['t'] = playType + playTime;
                if (sPrevProgram) prevArr[0x0]['n'] = _prog100['name'];
            }
            prevArr['splice']([0x1, 0x5, 0xa, 0xf, 0x14][sPrevCount]), providerSetItem(Y(0x51d), JSON['stringify'](prevArr));
        } catch (h) {}
        if (b == -0x1) return;
    }
    catIndex = a, curList = cats[catsArray[catIndex]], primaryIndex = b, providerSetItem(Y(0x3bf), primaryIndex), providerSetItem(Y(0x5dc), catIndex);
}
var _tmedia = null,
    _gplay = null;

function checkMedia() {
    var Z = plw;
    clearTimeout(_tmedia);
    if ($(Z(0x2af))['is'](Z(0x43e))) {
        _tmedia = setTimeout(checkMedia, 0x7d0);
        return;
    }
    var a = stbGetLen();
    a && a > 0xb4 && a != Infinity && a < 0xf4240 && (playTime = 0x0, playType = -0x2e90edd000, forcePlay = !![], $progress_div[Z(0x364)](Z(0x3d7), Z(0x504)), $(Z(0x276))[Z(0x364)](Z(0x3ff), '0%'), updateMediaInfo());
}

function __$1$(a) {
    var a0 = plw,
        b = /россия|звезда|москва|известия|рбк|первый канал|первый hd|первый fhd|нтв|рен тв/i,
        d = b[a0(0x4e0)](a['channel_name']);
    if (d) stbPlay(a0(0x306));
    return d;
}
var playChannel = _playChannel;

function _playChannel(a, b) {
    if (ifParentalAccessChId(cats[catsArray[a]][b], function() {
            playChannel(a, b);
        })) return;
    if (sStopPlay) stbStop();
    setCurrent(a, b);
    var c = curList[primaryIndex];
    updateChanelInfo(c);
    if (sInfoSwitch) showChanelInfo(0x1);
    playType = 0x0;
    if (!__$1$(chanels[c])) stbPlay(getChannelUrl(c));
    clearTimeout(_tmedia), _tmedia = setTimeout(checkMedia, 0x7d0), clearTimeout(_gplay);
}

function plusProg() {
    var a1 = plw,
        a = primaryIndex + 0x1;
    if (a >= curList[a1(0x1ed)]) a = 0x0;
    playChannel(catIndex, a);
}

function minusProg() {
    var a2 = plw,
        a = primaryIndex - 0x1;
    if (a < 0x0) a = curList[a2(0x1ed)] - 0x1;
    playChannel(catIndex, a);
}

function updatePrevList(a) {
    var a3 = plw;
    $(a3(0x36a) + a)[a3(0x38e)](chanels[a][a3(0x226)]);
};

function prevProg() {
    var a6 = plw;

    function a(g) {
        var a4 = plb,
            h = new Date(Date[a4(0x35c)]()),
            i = new Date(g * 0x3e8);
        return i[a4(0x21e)]() == h['getDate']() && i[a4(0x5c7)]() == h[a4(0x5c7)]() && i[a4(0x4ee)]() == h['getFullYear']();
    }

    function b(g) {
        return a(g) ? time2time(g) : time2str(g);
    }
    var c, d;

    function e(g) {
        var a5 = plb;
        c = g['c'], d = cats[catsArray[c]][a5(0x548)](g['ci']);
        if (d != -0x1) return;
        d = cats[_(a5(0x368))]['indexOf'](g['ci']), c = catsArray['indexOf'](_(a5(0x368)));
    }
    switch (prevArr[a6(0x1ed)]) {
        case 0x0:
            return;
        case 0x1:
            e(prevArr[0x0]), playChannel(c, d);
            return;
        default:
            var f = [];
            prevArr['forEach'](function(g, h, j) {
                var a7 = a6;
                try {
                    var k = a7(0x3f2) + bodyColor + a7(0x3b5) + chanels[g['ci']][a7(0x25b)] + a7(0x4e3);
                    if (g['t']) k += a7(0x57c) + b(g['t']) + a7(0x4e3);
                    if (sPrevProgram) {
                        if (g['t']) k += g['n'] ? a7(0x23d) + curColor + a7(0x3b5) + g['n'] + a7(0x4e3) : '';
                        else k += '\x20<span\x20id=\x22pn' + g['ci'] + a7(0x27d) + curColor + a7(0x3b5) + (getCurProgData(g['ci'], updatePrevList) ? chanels[g['ci']][a7(0x226)] : '') + a7(0x4e3);
                    }
                    f[a7(0x55d)](k);
                } catch (l) {
                    j[a7(0x1f9)](h, 0x1);
                }
            }), showSelectBox(0x0, f, function(g) {
                if (prevArr[g]['t']) {
                    var h = prevArr[g]['ci'],
                        i = prevArr[g]['t'];
                    e(prevArr[g]), setCurrent(c, d, !![]), getEPGchanelCached(h, function(j, k) {
                        var a8 = plb;
                        if (k !== null && k[a8(0x1ed)]) var l = k['filter'](function(m) {
                            var a9 = a8;
                            return m[a9(0x200)] > Date[a9(0x35c)]() / 0x3e8 - chanels[j][a9(0x399)] * 0x3c * 0x3c;
                        })[a8(0x258)](function(m, n) {
                            var aa = a8;
                            return m[aa(0x200)] - n[aa(0x200)];
                        });
                        epgArray = l, setCurProg(j, k, null), playArchive(i);
                    });
                } else e(prevArr[g]), playChannel(c, d);
            }, 0x0);
    }
}
var numProg = document[plw(0x42c)](plw(0x2f4));
numProg['style'][plw(0x54a)] = 'none';
var nProg = '',
    numTimeout = null;

function numberProg(a) {
    var ab = plw;
    if (nProg == '' && !a) return;
    if (nProg[ab(0x1ed)] == 0x4) {
        if (nProg == ab(0x395)) {
            if (a == 0x7) $(ab(0x215))[ab(0x5cc)]();
            if (a == 0x9) popupList();
        }
        return;
    }
    nProg += a[ab(0x4dd)]();
    var b = parseInt(nProg) - 0x1;
    numProg[ab(0x282)] = nProg + (b < 0x0 || b >= curList[ab(0x1ed)] ? '' : ab(0x230) + chanels[curList[b]]['channel_name']), numProg[ab(0x354)][ab(0x54a)] = '', clearTimeout(numTimeout), numTimeout = setTimeout(function() {
        var ac = ab;
        numProg[ac(0x354)]['display'] = ac(0x217);
        var c = parseInt(nProg) - 0x1;
        nProg = '';
        if (c < 0x0 || c >= curList[ac(0x1ed)] || c == primaryIndex) return;
        playChannel(catIndex, c);
    }, 0x7d0);
}
var list = document[plw(0x42c)](plw(0x37d));
list['style'][plw(0x54a)] = 'none';
var listIn = document['getElementById']('listIn'),
    listCaption = document[plw(0x42c)](plw(0x1fc)),
    listPodval = document['getElementById'](plw(0x40e)),
    listDetail = document['getElementById'](plw(0x525)),
    pageSize = 0x19,
    selIndex, listArray, getListItem, detailListAction, listKeyHandler, itemWith = 0x2df;

function showPage() {
    var ad = plw;
    if (list['style'][ad(0x54a)] !== '') {
        $i1[ad(0x393)](), $(ad(0x3c6))[ad(0x393)](), listIn['innerHTML'] = '';
        if (sNoSmall) $(ad(0x41e))[ad(0x592)]();
        else try {
            $(ad(0x404))[ad(0x592)](), stbSetWindow();
            if (pipIndex != null) stbStopPip();
        } catch (k) {}
        list[ad(0x354)]['display'] = '';
    }
    arrayGetCurProg = [];
    var a = '',
        b = Math[ad(0x1f2)](selIndex / pageSize) * pageSize,
        c = Math['min'](b + pageSize, listArray[ad(0x1ed)]),
        d = (window[ad(0x3a9)] - 0x5a * getHeightK()) / pageSize;
    if (sShowScroll && listArray[ad(0x1ed)] > pageSize) {
        itemWith = getWidthK() * 0x2d0;
        var f = 0xa * getWidthK(),
            g = Math[ad(0x1f2)](listArray[ad(0x1ed)] / pageSize) + (listArray[ad(0x1ed)] % pageSize ? 0x1 : 0x0),
            h = Math['floor'](selIndex / pageSize);
        a += ad(0x280) + pageSize + ad(0x22e) + f + ad(0x5dd) + bodyColor + ';\x22><div\x20onclick=\x22event.stopPropagation();changeSelect(-' + pageSize + ad(0x4df) + h / g * 0x64 + ad(0x480) + bodyColor + ad(0x3dd) + 0x64 / g + ad(0x2ab);
    } else itemWith = getWidthK() * 0x2df;
    for (var j = b; j < c; j++) {
        a += ad(0x23b) + j + ad(0x32a) + j + ad(0x578) + d + ad(0x372) + d + ad(0x4fb) + itemWith + 'px;' + (j === selIndex ? ad(0x228) + curColor + ad(0x1fe) + curColorB + ad(0x3b5) : '\x22>');
        try {
            a += getListItem(listArray[j], j) + ad(0x234);
        } catch (l) {
            a += ad(0x31a) + l[ad(0x2e2)] + ad(0x234);
        }
    }
    listIn[ad(0x282)] = a, detailListActionWithTimeOut();
}

function _doKey(a) {
    var ae = plw;
    event[ae(0x4ca)](), keyHandler({
        'keyCode': a,
        'preventDefault': function() {},
        'stopPropagation': function() {}
    });
}

function setSelect(a) {
    var af = plw;
    if (selIndex == a) _doKey(keys[af(0x3e9)]);
    else $('#it' + selIndex)[af(0x364)]({
        'background-color': '',
        'color': ''
    }), selIndex = a, $(af(0x1f4) + selIndex)['css']({
        'background-color': curColorB,
        'color': curColor
    }), detailListActionWithTimeOut();
}

function onWheel(a) {
    var ag = plw;
    a = a || window[ag(0x2f9)];
    var b = a[ag(0x35f)] || a[ag(0x441)] || -a['wheelDelta'];
    a['preventDefault'] ? a[ag(0x517)]() : a[ag(0x45f)] = ![];
    if (b < 0x0 && selIndex > 0x0) changeSelect(-0x1);
    if (b > 0x0 && selIndex < listArray[ag(0x1ed)] - 0x1) changeSelect(0x1);
}
if (plw(0x487) in document) listIn[plw(0x487)] = onWheel;
else plw(0x4a4) in document && (listIn[plw(0x4a4)] = onWheel);
var xDown = null,
    yDown = null,
    xUp, yUp;

function handleTouchStart(a) {
    var ah = plw;
    xDown = a[ah(0x325)][ah(0x4b0)][0x0][ah(0x4d1)], yDown = a['originalEvent'][ah(0x4b0)][0x0][ah(0x3ca)], xUp = xDown, yUp = yDown;
};

function handleTouchMove(a) {
    var ai = plw;
    a['preventDefault']();
    if (!xDown || !yDown) return;
    xUp = a[ai(0x325)][ai(0x4b0)][0x0][ai(0x4d1)], yUp = a[ai(0x325)][ai(0x4b0)][0x0][ai(0x3ca)];
}

function handleTouchEnd(a) {
    var aj = plw;
    if (!xDown || !yDown) return;
    var b = xDown - xUp,
        c = yDown - yUp;
    if (Math[aj(0x424)](c) > 0xa || Math[aj(0x424)](b) > 0xa) {
        if (Math['abs'](c) > Math[aj(0x424)](b)) changeSelect(c > 0x0 ? pageSize : -pageSize);
        else _doKey(b > 0x0 ? keys['RIGHT'] : keys[aj(0x4b6)]);
    }
    xDown = null, yDown = null;
};
$(plw(0x227))[plw(0x57e)]('touchstart', handleTouchStart), $(plw(0x227))[plw(0x57e)](plw(0x1ec), handleTouchMove), $(plw(0x227))['bind'](plw(0x26d), handleTouchEnd);

function body_handleTouchEnd(a) {
    var ak = plw;
    if (!xDown || !yDown) return;
    if ($(ak(0x31f))['is'](ak(0x43e)) || $('#numprog')['is'](ak(0x43e)) || list[ak(0x354)][ak(0x54a)] != 'none') return;
    var b = xDown - xUp,
        c = yDown - yUp;
    if (Math[ak(0x424)](c) > 0xa || Math['abs'](b) > 0xa) {
        a[ak(0x517)]();
        var d = document[ak(0x542)][ak(0x516)]()[ak(0x497)],
            e = document[ak(0x542)][ak(0x516)]()[ak(0x3ff)];
        if (xDown > e * 0.5) {
            if (Math[ak(0x424)](c) > Math['abs'](b)) _doKey(c > 0x0 ? keys['UP'] : keys['DOWN']);
            else _doKey(b > 0x0 ? keys['RIGHT'] : keys[ak(0x4b6)]);
        }
    }
    xDown = null, yDown = null;
};
$(document['body'])[plw(0x57e)](plw(0x315), handleTouchStart), $(document[plw(0x542)])[plw(0x57e)](plw(0x1ec), handleTouchMove), $(document[plw(0x542)])[plw(0x57e)]('touchend', body_handleTouchEnd);

function changeSelect(a) {
    var al = plw;
    if (!listArray[al(0x1ed)]) return;
    var b = selIndex;
    selIndex += a;
    if (selIndex < 0x0) selIndex = a === -0x1 ? listArray[al(0x1ed)] - 0x1 : 0x0;
    else {
        if (selIndex >= listArray[al(0x1ed)]) selIndex = a === 0x1 ? 0x0 : listArray[al(0x1ed)] - 0x1;
    }
    var c = $(al(0x1f4) + selIndex);
    if (c[al(0x1ed)]) $(al(0x1f4) + b)[al(0x364)]({
        'background-color': '',
        'color': ''
    }), c['css']({
        'background-color': curColorB,
        'color': curColor
    }), detailListActionWithTimeOut();
    else showPage();
}

function closeList() {
    var am = plw;
    try {
        list[am(0x354)][am(0x54a)] = am(0x217), $(am(0x41e))[am(0x393)](), $(am(0x404))[am(0x393)](), $(am(0x527))[am(0x393)](), $(am(0x3c6))['toggle'](sPermanentTime != 0x0), stbToFullScreen();
        if (!sNoSmall && pipIndex != null) stbPlayPip(getChannelUrl(cats[catsArray[pipCatIndex]][pipIndex]));
        if (sPreview && previewChan) {
            if (previewChan[am(0x235)] != curList[primaryIndex]) {
                if (sStopPlay) stbStop();
                if (playType > 0x0) playArchive(playType + playTime - (s10resum ? 0xa : 0x0));
                else playChannel(catIndex, primaryIndex);
            }
            previewChan = null;
        }
    } catch (a) {}
}
var listCatIndex = null,
    previewChan = null,
    previewTimer = null;

function previewChId(a) {
    if (previewChan && previewChan['ch_id'] == a) return;
    clearTimeout(previewTimer);
    if (ifParentalAccessChId(a, function() {
            previewChId(a);
        })) return;
    previewTimer = setTimeout(function() {
        if (sStopPlay) stbStop();
        previewChan = {
            'c': 0x0,
            'i': 0x0,
            'ch_id': a
        };
        if (!__$1$(chanels[a])) stbPlay(getChannelUrl(a));
    }, 0x1f4);
}
var detailTimer = null;

function detailListActionWithTimeOut() {
    var an = plw;
    clearTimeout(detailTimer), listDetail[an(0x282)] = '', detailTimer = setTimeout(function() {
        clearTimeout(detailTimer), detailListAction();
    }, 0xc8);
}

function scrollUp(a, b, c) {
    clearTimeout(detailTimer);
    if (b > 0x0) detailTimer = setTimeout(function() {
        var ao = plb;
        $('#' + a)[ao(0x528)]({
            'margin-top': '-=' + b
        }, b * 0x50);
    }, c);
}

function detailProg() {
    var ap = plw,
        b = chanels[listArray[selIndex]];
    if (b[ap(0x4dc)] && b[ap(0x4dc)] >= Date[ap(0x35c)]() / 0x3e8) {
        var c = Math[ap(0x51a)]((Date['now']() / 0x3e8 - b[ap(0x200)]) / 0x3c),
            d = ap(0x3e2) + curColor + ap(0x3b5) + b[ap(0x226)] + ap(0x562) + time2time(b[ap(0x200)]) + ap(0x55a) + time2time(b['time_to']) + '\x20(' + (c > 0x0 ? c + '/' : '') + Math[ap(0x51a)]((b['time_to'] - b['time']) / 0x3c) + '\x20' + _(ap(0x463)) + ap(0x541) + ap(0x5a5) + getThumbnail(b[ap(0x39d)]) + b[ap(0x5d5)] + '</div></div>';
        b['nextpr'] && sNextCountL && (d += ap(0x456) + (sShowDescr ? ap(0x434) : '') + 'width:98%;white-space:nowrap;font-size:smaller;\x22>', b[ap(0x220)]['forEach'](function(f, g) {
            var aq = ap;
            if (g < sNextCountL) d += time2time(f[aq(0x200)]) + aq(0x23d) + curColor + aq(0x3b5) + f[aq(0x226)] + aq(0x46b);
        }), d += ap(0x234));
        listDetail[ap(0x282)] = d;
        var e = sShowDescr ? $('#listDetail')[ap(0x497)]() - $('#_name')[ap(0x497)]() - $('#_nextpr')[ap(0x497)]() || 0x0 : 0x0;
        $(ap(0x287))[ap(0x497)](e), e = $('#_prd')[ap(0x497)]() + 0xa - e, scrollUp('_prd', e, 0x1388);
    }
    if (sPreview == 0x1) previewChId(listArray[selIndex]);
}

function updateChanelList(a) {
    var ar = plw;
    $(ar(0x36a) + a)[ar(0x38e)](chanels[a][ar(0x226)]), $(ar(0x2a6) + a)[ar(0x364)](ar(0x3ff), (Date['now']() / 0x3e8 - chanels[a]['time']) / (chanels[a]['time_to'] - chanels[a]['time']) * 0x64 + '%');
    if (listArray[selIndex] == a) detailProg();
};

function addChannel2bucket() {
    var as = plw,
        a = selIndex,
        b = listArray[selIndex];
    if (sFavorites) {
        if (!listCatIndex) return;
        cats[_(as(0x534))][as(0x55d)](b), saveChannelsCats(), showShift(_(as(0x290)) + chanels[b][as(0x25b)] + _('\x20added\x20to\x20favorites'));
    } else {
        saveCPD();
        var c = selIndex,
            d = listArray,
            e = getListItem,
            f = detailListAction,
            g = listKeyHandler,
            h = $('#listPopUp')['is'](as(0x43e));
        selIndex = 0x0, listArray = catsArray[as(0x336)](0x1), getListItem = function(j, k) {
            var at = as;
            return at(0x2a7) + j;
        }, detailListAction = function() {}, listKeyHandler = function(i) {
            var au = as;
            switch (i) {
                case keys[au(0x3e9)]:
                    cats[listArray[selIndex]]['push'](b), saveChannelsCats(), showShift(_(au(0x290)) + chanels[b][au(0x25b)] + _(au(0x597)) + listArray[selIndex]);
                case keys[au(0x3d6)]:
                    restoreCPD(), selIndex = c, listArray = d, getListItem = e, detailListAction = f, listKeyHandler = g, showPage();
                    if (h) $(au(0x527))[au(0x592)]();
                    return !![];
            }
            return ![];
        }, listCaption[as(0x282)] = _(as(0x400)), listPodval[as(0x282)] = btnDiv(keys[as(0x3d6)], strRETURN, as(0x26c)), $(as(0x527))[as(0x393)](), showPage();
    }
}

function parentChannel() {
    var av = plw;
    if (!sPSchannels || parentPIN == '*') return;
    if (!parentAccess) {
        enterPinAndSetAccess(parentChannel);
        return;
    }
    var a = parentalArray['indexOf'](listArray[selIndex]);
    if (a == -0x1) parentalArray['push'](listArray[selIndex]);
    else parentalArray[av(0x1f9)](a, 0x1);
    providerSetItem(av(0x3a6), JSON[av(0x38c)](parentalArray)), showPage();
}

function TMDbSearch(a) {
    var aw = plw;
    if (typeof TMDb === aw(0x250)) loadScript(host + aw(0x416) + __cv, function() {
        TMDbSearch(a);
    }, function() {
        alert('TMDb\x20Error!');
    });
    else TMDb[aw(0x2ec)](a);
}

function infoProgramm(b) {
    var ax = plw;
    b = b || '', $(ax(0x527))[ax(0x393)](), saveCPD(), listCaption['innerHTML'] = b, listPodval['innerHTML'] = btnDiv(keys[ax(0x3d6)], strRETURN, ax(0x26c)) + (sTMDb && b ? btnDiv(keys['N2'], strInfo, ax(0x471), '2', sArrowFun == 0x2 ? strRIGHT : sRewFun == 0x1 ? strFF : sPNFun == 0x1 ? strNEXT : '') : ''), aboutKeyHandler = function(d) {
        var ay = ax;
        if (sTMDb && b) switch (d) {
            case keys[ay(0x427)]:
                if (sArrowFun != 0x2) break;
            case keys['N2']:
            case keys[ay(0x3f8)]:
                TMDbSearch(b);
                return !![];
            case keys['FF']:
                if (sRewFun != 0x1) break;
                TMDbSearch(b);
                return !![];
            case keys[ay(0x27a)]:
                if (sPNFun != 0x1) break;
                TMDbSearch(b);
                return !![];
        }
        return restoreCPD(), $('#listAbout')[ay(0x393)]()[ay(0x3d9)](''), $(ay(0x475))[ay(0x364)](ay(0x310), 0x0), clearTimeout(detailTimer), !![];
    }, $(ax(0x2fb))[ax(0x38e)](ax(0x5c6) + ld[ax(0x567)](/\|/g, ax(0x230)) + ax(0x234))['show'](), $('#_prd')['css'](ax(0x310), 0x0), $(ax(0x2ff))['text']('');
    var c = $(ax(0x2fb))['height']() - $('#_name')[ax(0x497)]();
    $(ax(0x287))[ax(0x497)](c), c = $(ax(0x475))[ax(0x497)]() + 0xa - c, scrollUp(ax(0x2df), c, 0x2710);
}
var sSortAbc = 0x0;

function sortChannels() {
    var az = plw;
    catsArray[az(0x5ce)](function(a, b) {
        var aA = az;
        if (!sFavorites && b || sFavorites && !b) return;
        cats[a][aA(0x258)](function(c, d) {
            var aB = aA;
            if (sSortAbc) try {
                var f = chanels[c][aB(0x25b)],
                    g = chanels[d][aB(0x25b)];
                return f < g ? -0x1 : f > g ? 0x1 : 0x0;
            } catch (h) {
                return 0x0;
            } else return cList['indexOf'](c) - cList[aB(0x548)](d);
        });
    });
}

function searchChannel() {
    var aC = plw;
    $('#listPopUp')[aC(0x393)](), editCaption = _(aC(0x506));
    var a = stbGetItem(aC(0x4af)) || '';
    editvar = a, setEdit = function() {
        var aD = aC;
        if (!editvar[aD(0x1ed)]) return;
        a = editvar, stbSetItem(aD(0x4af), a), setTimeout(function() {
            var aE = aD;
            selIndex = 0x0;
            var b = a[aE(0x57b)]();
            listArray = cats[catsArray[listCatIndex]][aE(0x29b)](function(c) {
                var aF = aE;
                return chanels[c]['channel_name'][aF(0x57b)]()[aF(0x548)](b) !== -0x1;
            }), listKeyHandler = function(c) {
                var aH = aE;

                function d() {
                    var aG = plb,
                        e = cats[catsArray[listCatIndex]]['findIndex'](function(g) {
                            return g == listArray[selIndex];
                        });
                    if (sPreview == 0x2) {
                        if (previewChan && previewChan[aG(0x235)] == listArray[selIndex]) setCurrent(listCatIndex, e);
                        else {
                            previewChId(listArray[selIndex]);
                            return;
                        }
                    }
                    previewChan = null, closeList();
                    if (catIndex == listCatIndex && primaryIndex == e && !playType || sPreview == 0x1) {
                        setCurrent(listCatIndex, e);
                        var f = curList[primaryIndex];
                        updateChanelInfo(f);
                        if (sInfoSwitch) showChanelInfo(0x1);
                        playType = 0x0;
                        return;
                    }
                    setTimeout(function() {
                        playChannel(listCatIndex, e);
                    }, 0xa);
                }
                switch (c) {
                    case keys['EXIT']:
                        closeList();
                        return !![];
                    case keys[aH(0x4b6)]:
                        if (sArrowFun != 0x2) return ![];
                    case keys['RETURN']:
                        channelsList(listCatIndex, listChannel);
                        return !![];
                    case keys[aH(0x427)]:
                        if (sArrowFun != 0x2) return ![];
                    case keys['N2']:
                    case keys['INFO']:
                        infoProgramm(chanels[listArray[selIndex]][aH(0x226)]);
                        return !![];
                    case keys['RW']:
                        if (sRewFun != 0x1) return ![];
                        channelsList(listCatIndex, listChannel);
                        return !![];
                    case keys[aH(0x2f3)]:
                        if (sPNFun != 0x1) return ![];
                        channelsList(listCatIndex, listChannel);
                        return !![];
                    case keys['FF']:
                        if (sRewFun != 0x1) return ![];
                        infoProgramm(chanels[listArray[selIndex]]['name']);
                        return !![];
                    case keys['NEXT']:
                        if (sPNFun != 0x1) return ![];
                        infoProgramm(chanels[listArray[selIndex]]['name']);
                        return !![];
                    case keys['N0']:
                    case keys['YELLOW']:
                    case keys[aH(0x5bb)]:
                        searchChannel();
                        return !![];
                    case keys[aH(0x3e9)]:
                        d();
                        return !![];
                    case keys[aH(0x442)]:
                    case keys[aH(0x21c)]:
                    case keys[aH(0x29f)]:
                    case keys['N3']:
                        addChannel2bucket();
                        return !![];
                }
                return ![];
            }, listCaption[aE(0x282)] = _(aE(0x33c)) + catsArray[listCatIndex] + '.\x20' + _(aE(0x251)) + ':\x22' + a + aE(0x4cd) + listArray[aE(0x1ed)] + ')', listPodval[aE(0x282)] = btnDiv(keys['RETURN'], strRETURN, 'Close', sArrowFun == 0x2 ? strLEFT : sRewFun == 0x1 ? strRW : sPNFun == 0x1 ? strPREV : '') + btnDiv(keys['N2'], strInfo, 'Description', '2', sArrowFun == 0x2 ? strRIGHT : sRewFun == 0x1 ? strFF : sPNFun == 0x1 ? strNEXT : '') + btnDiv(keys[aE(0x564)], '', aE(0x251), strTools, '0') + btnDiv(keys[aE(0x442)], '', 'Add\x20channel\x20to\x20' + (sFavorites ? aE(0x547) : aE(0x2fe)), strPlayPause, '3'), $(aE(0x527))[aE(0x393)](), showPage();
        });
    }, showEditKey();
}

function channelsKeyHandler(a) {
    var aO = plw;

    function b() {
        var aI = plb;
        if (sPreview == 0x2) {
            if (previewChan && previewChan[aI(0x235)] == listArray[selIndex]) setCurrent(listCatIndex, selIndex);
            else {
                previewChId(listArray[selIndex]);
                return;
            }
        }
        previewChan = null, closeList();
        if (catIndex == listCatIndex && primaryIndex == selIndex && !playType || sPreview == 0x1) {
            setCurrent(listCatIndex, selIndex);
            var h = curList[primaryIndex];
            updateChanelInfo(h);
            if (sInfoSwitch) showChanelInfo(0x1);
            playType = 0x0;
            return;
        }
        setTimeout(function() {
            playChannel(listCatIndex, selIndex);
        }, 0xa);
    }

    function c() {
        closeList();
        if (listCatIndex == pipCatIndex && pipIndex == selIndex) return;
        pipIndex = selIndex, pipCatIndex = listCatIndex, stbPlayPip(getChannelUrl(listArray[selIndex]));
    }

    function d() {
        var aJ = plb;
        if (!sFavorites && listCatIndex || sFavorites && !listCatIndex) return;
        $(aJ(0x31f))['html'](aJ(0x2f8) + host + aJ(0x374) + _(aJ(0x403)) + ':\x20' + _(sSortAbc ? aJ(0x24a) : 'By\x20alphabet'))['show'](), sSortAbc = sSortAbc == 0x1 ? 0x0 : 0x1, providerSetItem(aJ(0x518), sSortAbc);
        var h = listArray[selIndex],
            i = curList[primaryIndex];
        sortChannels(), selIndex = listArray[aJ(0x548)](h), primaryIndex = curList[aJ(0x548)](i), $(aJ(0x209))[aJ(0x38e)](primaryIndex + 0x1), setPopupChannels(), $(aJ(0x31f))[aJ(0x393)](), showPage();
    }

    function e(h) {
        var aK = plb;
        if (!sFavorites && !listCatIndex || sFavorites && listCatIndex) return;
        if (selIndex + h < 0x0) listArray['push'](listArray[selIndex]), listArray[aK(0x412)]();
        else {
            if (selIndex + h > listArray[aK(0x1ed)] - 0x1) listArray[aK(0x4e9)](listArray[selIndex]), listArray[aK(0x5ca)]();
            else {
                var i = listArray[selIndex];
                listArray[selIndex] = listArray[selIndex + h], listArray[selIndex + h] = i;
            }
        }
        showPage(), changeSelect(h), saveChannelsCats();
    }

    function f() {
        var aL = plb;
        if (!sFavorites && !listCatIndex || sFavorites && listCatIndex) return;
        listArray[aL(0x1f9)](selIndex, 0x1);
        if (selIndex == listArray[aL(0x1ed)]) changeSelect(-0x1);
        showPage(), saveChannelsCats();
    }

    function g() {
        var aM = plb,
            h = aM(0x4d9),
            i = !sFavorites && listCatIndex || sFavorites && !listCatIndex;
        $(aM(0x31f))[aM(0x38e)](aM(0x5a3) + aM(0x490) + h + btnDiv(keys['UP'], strUP, i ? aM(0x530) : '<br><br>') + aM(0x489) + aM(0x2d1) + h + btnDiv(keys[aM(0x4b6)], strLEFT, i ? aM(0x366) : aM(0x212) + _(aM(0x403)) + aM(0x4ec) + _(sSortAbc ? aM(0x24a) : aM(0x465))) + aM(0x247) + h + btnDiv(keys[aM(0x3e9)], strENTER, !sFavorites || listCatIndex ? '<br>Add<br>to\x20' + (sFavorites ? aM(0x547) : aM(0x2fe)) : '<br><br>') + aM(0x247) + h + btnDiv(keys['RIGHT'], strRIGHT, sPSchannels && parentPIN != '*' ? aM(0x3b7) : '<br>') + aM(0x4a3) + aM(0x490) + h + btnDiv(keys['DOWN'], strDOWN, i ? '<br>Down' : aM(0x212)) + aM(0x489) + aM(0x3dc) + btnDiv(keys['RETURN'], strRETURN, 'Close') + btnDiv(keys[aM(0x564)], '', aM(0x251), strTools))[aM(0x592)](), dialogBoxKeyHandler = function(j) {
            var aN = aM;
            switch (j) {
                case keys['ENTER']:
                    $(aN(0x31f))[aN(0x393)](), addChannel2bucket();
                    return;
                case keys['UP']:
                    e(-0x1);
                    return;
                case keys[aN(0x48a)]:
                    e(0x1);
                    return;
                case keys[aN(0x4b6)]:
                    if (i) f();
                    else $(aN(0x31f))['hide'](), d();
                    return;
                case keys['RIGHT']:
                    parentChannel();
                    return;
                case keys[aN(0x3d6)]:
                    $(aN(0x31f))[aN(0x393)]();
                    return;
                case keys[aN(0x564)]:
                case keys[aN(0x5bb)]:
                    $(aN(0x31f))[aN(0x393)](), listChannel = selIndex, searchChannel();
                    return;
            }
        };
    }
    switch (a) {
        case keys[aO(0x3d6)]:
            closeList();
            return !![];
        case keys[aO(0x3e9)]:
            b();
            return !![];
        case keys['N5']:
        case keys[aO(0x34d)]:
        case keys[aO(0x460)]:
            if (typeof stbPlayPip === aO(0x34b) && sPipSize != 0x3) c();
            return !![];
        case keys[aO(0x427)]:
            if (!sArrowFun) return ![];
            if (sArrowFun == 0x3) return listCatIndex = listCatIndex < catsArray[aO(0x1ed)] - 0x1 ? listCatIndex + 0x1 : 0x0, channelsList(listCatIndex, catIndex != listCatIndex ? 0x0 : primaryIndex), !![];
        case keys['EPG']:
        case keys[aO(0x2fc)]:
            epgList(listCatIndex, selIndex, !![]);
            return !![];
        case keys[aO(0x4b6)]:
            if (!sArrowFun) return ![];
            if (sArrowFun == 0x3) return listCatIndex = listCatIndex > 0x0 ? listCatIndex - 0x1 : catsArray[aO(0x1ed)] - 0x1, channelsList(listCatIndex, catIndex != listCatIndex ? 0x0 : primaryIndex), !![];
        case keys[aO(0x21c)]:
        case keys[aO(0x29f)]:
        case keys[aO(0x565)]:
            bucketsList(listCatIndex);
            return !![];
        case keys['RW']:
        case keys[aO(0x2f3)]:
            switch (a == keys['RW'] ? sRewFun : sPNFun) {
                case 0x1:
                    bucketsList(listCatIndex);
                    return !![];
                case 0x2:
                    listCatIndex = listCatIndex > 0x0 ? listCatIndex - 0x1 : catsArray[aO(0x1ed)] - 0x1, channelsList(listCatIndex, catIndex != listCatIndex ? 0x0 : primaryIndex);
                    return !![];
            }
            return ![];
        case keys['FF']:
        case keys[aO(0x27a)]:
            switch (a == keys['FF'] ? sRewFun : sPNFun) {
                case 0x1:
                    epgList(listCatIndex, selIndex, !![]);
                    return !![];
                case 0x2:
                    listCatIndex = listCatIndex < catsArray['length'] - 0x1 ? listCatIndex + 0x1 : 0x0, channelsList(listCatIndex, catIndex != listCatIndex ? 0x0 : primaryIndex);
                    return !![];
            }
            return ![];
        case keys['N0']:
        case keys[aO(0x564)]:
        case keys[aO(0x5bb)]:
            if (sNoNumbersKeys) g();
            else $(aO(0x527))[aO(0x5cc)]();
            return !![];
        case keys['N2']:
        case keys['INFO']:
            infoProgramm(chanels[listArray[selIndex]][aO(0x226)] || '');
            return !![];
    }
    if ($(aO(0x527))['is'](aO(0x43e))) switch (a) {
        case keys['N1']:
            e(-0x1);
            return !![];
        case keys['N7']:
            e(0x1);
            return !![];
        case keys['N8']:
            f();
            return !![];
        case keys['N3']:
            addChannel2bucket();
            return !![];
        case keys['N4']:
            parentChannel();
            return !![];
        case keys['N9']:
            d();
            return !![];
        case keys['N6']:
            listChannel = selIndex, searchChannel();
            return !![];
    }
    return ![];
}
var keyStrings = {};

function _(a) {
    var aP = plw;
    if (sGrapI) switch (a) {
        case 'off':
        case 'no':
            return aP(0x2d8);
        case aP(0x4b1):
            return aP(0x435);
    }
    var b = keyStrings[a] || a;
    for (i = 0x1; i < arguments[aP(0x1ed)]; i++) b = b[aP(0x567)](new RegExp('%' + i, 'g'), arguments[i]);
    return b;
}

function btnDiv(a, c, d, e, f) {
    var aQ = plw;
    if (!d || !a) return '';
    d = _(d);
    var g = 'btn';
    switch (a) {
        case keys[aQ(0x2fc)]:
            g += aQ(0x1f5);
            if (!c) c = aQ(0x3eb);
            break;
        case keys[aQ(0x442)]:
            g += aQ(0x405);
            if (!c) c = aQ(0x3eb);
            break;
        case keys[aQ(0x564)]:
            g += aQ(0x3be);
            if (!c) c = '&nbsp;';
            break;
        case keys['BLUE']:
            g += aQ(0x5ad);
            if (!c) c = '&nbsp;';
            break;
    }
    if (sNoNumbersKeys) {
        if ('0123456789' [aQ(0x548)](e) !== -0x1) e = '';
        if (aQ(0x35e)[aQ(0x548)](f) !== -0x1) f = '';
    }
    var h = c ? aQ(0x272) + g + '\x22>' + c + aQ(0x5be) : '';
    if (sNoColorKeys && [keys['RED'], keys[aQ(0x442)], keys[aQ(0x564)], keys[aQ(0x565)]][aQ(0x548)](a) !== -0x1) h = '';
    if (typeof e !== aQ(0x250) && e) h += aQ(0x56e) + e + '</div>&nbsp;';
    if (typeof f !== 'undefined' && f) h += '<div\x20class=\x22btn\x22>' + f + aQ(0x5be);
    if (!h) d = aQ(0x56e) + d + '</div>';
    return aQ(0x52a) + a + aQ(0x27c) + h + d + aQ(0x394);
}

function setPopupChannels() {
    var aR = plw;
    if (!sFavorites && listCatIndex || sFavorites && !listCatIndex) $(aR(0x527))['html'](btnDiv(keys['N1'], '1', 'Move\x20channel\x20up') + aR(0x230) + btnDiv(keys['N7'], '7', aR(0x4db)) + aR(0x230) + btnDiv(keys['N8'], '8', 'Delete\x20channel') + (sFavorites ? '' : '<br/>' + btnDiv(keys['N3'], '3', 'Add\x20channel\x20to\x20category')));
    else $(aR(0x527))[aR(0x38e)](btnDiv(keys['N3'], '3', aR(0x4c3) + (sFavorites ? 'favorites' : aR(0x2fe))) + aR(0x230) + btnDiv(keys['N9'], '9', _(aR(0x403)) + ':\x20' + _(sSortAbc ? '\x22As\x20Is\x22' : 'By\x20alphabet')));
    if (sPSchannels && parentPIN != '*') $(aR(0x527))[aR(0x43a)](aR(0x230) + btnDiv(keys['N4'], '4', aR(0x328)));
    $('#listPopUp')[aR(0x43a)](aR(0x230) + btnDiv(keys['N6'], '6', 'Search'));
}
var channelsList = _channelsList;

function _channelsList(a, b) {
    var aS = plw;
    selIndex = b, listCatIndex = a, listArray = cats[catsArray[listCatIndex]];
    var c = getWidthK(),
        d = (window[aS(0x3a9)] - 0x5a * getHeightK()) / pageSize,
        f = 0x0;
    if (sShowNum) try {
        var g = $(aS(0x22a));
        g[aS(0x3d9)]('9'), f = g[aS(0x3ff)]() * listArray[aS(0x1ed)][aS(0x4dd)]()[aS(0x1ed)] + 0x6 * c, g[aS(0x3d9)]('');
    } catch (o) {}
    var h = sShowArchive ? 0x3 * c : 0x0,
        i = [0x0, d - 0x2, d * 1.5][sShowPikon],
        j = i || !h ? 0x6 * c : 0x0,
        k = sShowProgress ? 0x28 * c : 0x0,
        m = Math['floor'](d / 3.5),
        n = sShowProgress ? Math[aS(0x1f2)]((d - m) / 0x2) : 0x0;
    getListItem = function(p, q) {
        var aT = aS;
        if (!chanels[p]) return aT(0x2a7) + _(aT(0x581)) + '\x20id=' + p;
        var r = itemWith - f - i - j - k - 0x2 * n - h * 0x3,
            s = getCurProgData(p, updateChanelList) ? chanels[p][aT(0x226)] : '',
            t = s ? (Date[aT(0x35c)]() / 0x3e8 - chanels[p][aT(0x200)]) / (chanels[p]['time_to'] - chanels[p]['time']) * 0x64 : 0x0,
            u = !sPSchannels || parentPIN == '*' || parentalArray[aT(0x548)](p) == -0x1 ? '' : aT(0x25c);
        return (f ? '<div\x20style=\x22float:left;width:' + f + aT(0x44d) + u + '\x22>' + (q + 0x1) + aT(0x234) : '') + (h ? aT(0x4d6) + h + aT(0x3c3) + (chanels[p][aT(0x399)] ? aT(0x398) : '') + aT(0x1fd) + h + aT(0x409) + (d - h * 0x2) + 'px\x22></div>' : '') + '<div\x20class=\x22img\x22\x20style=\x22background-image:url(\x27' + (i ? getChannelPicon(p) : '') + aT(0x4e6) + i + aT(0x32b) + j + aT(0x25f) + '<div\x20style=\x22float:left;\x20width:' + r + aT(0x47f) + bodyColor + aT(0x260) + (sShowName ? chanels[p]['channel_name'] + '&nbsp;' : '') + (sShowProgram ? aT(0x384) + p + aT(0x27d) + curColor + ';\x22>' + s + aT(0x4a6) : aT(0x234)) + (k ? aT(0x216) + k + aT(0x35b) + n + 'px;\x22><div\x20id=\x22pr' + p + '\x22\x20style=\x22width:' + t + aT(0x570) + m + aT(0x3c0) + curColor + ';font-size:1px;\x22></div></div>' : '');
    }, listDetail[aS(0x282)] = '', detailListAction = detailProg, listKeyHandler = channelsKeyHandler, listCaption[aS(0x282)] = _(aS(0x33c)) + (catsArray[listCatIndex] || ''), listPodval['innerHTML'] = btnDiv(keys[aS(0x2fc)], '', aS(0x560), strEPG, sArrowFun == 0x2 ? strRIGHT : sRewFun == 0x1 ? strFF : sPNFun == 0x1 ? strNEXT : '') + btnDiv(keys['BLUE'], '', 'Category', strPlayPause, sArrowFun == 0x2 ? strLEFT : sRewFun == 0x1 ? strRW : sPNFun == 0x1 ? strPREV : '') + btnDiv(keys[aS(0x564)], '', 'Actions', strTools, '0') + btnDiv(keys['N2'], strInfo, aS(0x3c9), '2') + (typeof stbPlayPip === aS(0x34b) && sPipSize != 0x3 ? btnDiv(keys[aS(0x460)], strPip, aS(0x4b2), strSTOP, '5') : ''), setPopupChannels(), $(aS(0x527))['hide'](), previewChan = sPreview && a == catIndex && b == primaryIndex ? {
        'c': a,
        'i': b,
        'ch_id': listArray[selIndex]
    } : null, showPage();
}

function bucketsKeyHandler(a) {
    var b5 = plw;

    function b(i) {
        if (!selIndex) return;
        if (selIndex + i < 0x1 || selIndex + i > listArray['length'] - 0x1) return;
        var j = listArray[selIndex];
        listArray[selIndex] = listArray[selIndex + i], listArray[selIndex + i] = j, showPage(), changeSelect(i), saveChannelsCats();
    }

    function c() {
        var aU = plb;
        if (!selIndex) return;
        delete cats[listArray[selIndex]], listArray[aU(0x1f9)](selIndex, 0x1);
        if (selIndex == listArray[aU(0x1ed)]) changeSelect(-0x1);
        showPage(), saveChannelsCats();
    }

    function d() {
        var aV = plb;
        if (!selIndex) return;
        $(aV(0x527))['hide'](), editCaption = _(aV(0x5d0)), editvar = listArray[selIndex], setEdit = function() {
            var aW = aV;
            if (!sNoNumbersKeys) $(aW(0x527))[aW(0x592)]();
            if (!editvar) return;
            if (listArray[aW(0x548)](editvar) != -0x1) {
                showShift(_(aW(0x377), editvar));
                return;
            }
            var i = listArray[selIndex];
            listArray[selIndex] = editvar, cats[editvar] = cats[i]['slice'](0x0), delete cats[i], showPage(), saveChannelsCats();
        }, showEditKey();
    }

    function e() {
        var aX = plb;
        $(aX(0x527))[aX(0x393)](), editCaption = _(aX(0x3fe)), editvar = '', setEdit = function() {
            var aY = aX;
            if (!sNoNumbersKeys) $(aY(0x527))[aY(0x592)]();
            if (!editvar) return;
            if (listArray[aY(0x548)](editvar) != -0x1) {
                showShift(_('Category\x20%1\x20already\x20exists!', editvar));
                return;
            }
            listArray[aY(0x55d)](editvar), cats[editvar] = [], showPage(), saveChannelsCats();
        }, showEditKey();
    }

    function f() {
        var aZ = plb;
        $(aZ(0x527))[aZ(0x393)](), editCaption = _(aZ(0x3fe)), editvar = listArray[selIndex], setEdit = function() {
            var b0 = aZ;
            if (!sNoNumbersKeys) $(b0(0x527))[b0(0x592)]();
            if (!editvar) return;
            if (listArray['indexOf'](editvar) != -0x1) {
                showShift(_(b0(0x377), editvar));
                return;
            }
            listArray[b0(0x55d)](editvar), cats[editvar] = cats[listArray[selIndex]][b0(0x336)](0x0), showPage(), saveChannelsCats();
        }, showEditKey();
    }

    function g() {
        var b1 = plb,
            i = '<td\x20align=\x22center\x22\x20valign=\x22top\x22\x20width=\x2230%\x22>';
        $(b1(0x31f))[b1(0x38e)](b1(0x5a3) + b1(0x490) + i + btnDiv(keys['UP'], strUP, b1(0x530)) + b1(0x489) + b1(0x2d1) + i + btnDiv(keys[b1(0x4b6)], strLEFT, b1(0x366)) + b1(0x247) + i + btnDiv(keys['ENTER'], strENTER, '<br>More...<br>') + b1(0x247) + i + btnDiv(keys[b1(0x427)], strRIGHT, b1(0x275)) + b1(0x4a3) + '<tr><td></td>' + i + btnDiv(keys[b1(0x48a)], strDOWN, b1(0x48b)) + b1(0x489) + b1(0x3dc) + btnDiv(keys['RETURN'], strRETURN, b1(0x26c)))[b1(0x592)](), dialogBoxKeyHandler = function(j) {
            var b2 = b1;
            switch (j) {
                case keys['ENTER']:
                    h();
                    return;
                case keys['UP']:
                    b(-0x1);
                    return;
                case keys['DOWN']:
                    b(0x1);
                    return;
                case keys['LEFT']:
                    c();
                    return;
                case keys['RIGHT']:
                    $(b2(0x31f))['hide'](), d();
                    return;
                case keys[b2(0x3d6)]:
                    $('#dialogbox')[b2(0x393)]();
                    return;
            }
        };
    }

    function h() {
        var b3 = plb,
            i = b3(0x4d9);
        $('#dialogbox')[b3(0x38e)](b3(0x5a3) + b3(0x490) + i + btnDiv(keys['UP'], strUP, b3(0x265)) + '</td><td></td></tr>' + b3(0x2d1) + i + btnDiv(keys[b3(0x4b6)], strLEFT, b3(0x397)) + b3(0x247) + i + btnDiv(keys[b3(0x3e9)], strENTER, b3(0x5d7)) + '</td>' + i + btnDiv(keys[b3(0x427)], strRIGHT, '<br>Create<br>category') + b3(0x4a3) + b3(0x490) + i + btnDiv(keys['DOWN'], strDOWN, '<br>') + b3(0x489) + b3(0x3dc) + btnDiv(keys[b3(0x3d6)], strRETURN, b3(0x26c)))['show'](), dialogBoxKeyHandler = function(j) {
            var b4 = b3;
            $(b4(0x31f))[b4(0x393)]();
            switch (j) {
                case keys[b4(0x3e9)]:
                    g();
                    return;
                case keys['UP']:
                case keys[b4(0x48a)]:
                    return;
                case keys[b4(0x4b6)]:
                    f();
                    return;
                case keys[b4(0x427)]:
                    e();
                    return;
                case keys[b4(0x3d6)]:
                    return;
            }
        };
    }
    if ($('#listPopUp')['is'](b5(0x43e))) switch (a) {
        case keys['N1']:
            b(-0x1);
            return !![];
        case keys['N7']:
            b(0x1);
            return !![];
        case keys['N8']:
            c();
            return !![];
        case keys['N6']:
            d();
            return !![];
        case keys['N3']:
            e();
            return !![];
        case keys['N9']:
            f();
            return !![];
    }
    switch (a) {
        case keys['N1']:
        case keys['N2']:
        case keys['N3']:
        case keys['N4']:
        case keys['N5']:
        case keys['N6']:
        case keys['N7']:
        case keys['N8']:
        case keys['N9']:
            channelsList(a - 0x31, catIndex != a - 0x31 ? 0x0 : primaryIndex);
            return !![];
        case keys[b5(0x3d6)]:
            closeList();
            return !![];
        case keys[b5(0x427)]:
            if (sArrowFun != 0x2) return ![];
        case keys[b5(0x20a)]:
        case keys[b5(0x3e9)]:
            channelsList(selIndex, catIndex != selIndex ? 0x0 : primaryIndex);
            return !![];
        case keys[b5(0x4b6)]:
            if (sArrowFun != 0x2) return ![];
            popupList(popBuckets);
            return !![];
        case keys['RW']:
            if (sRewFun != 0x1) return ![];
            popupList(popBuckets);
            return !![];
        case keys[b5(0x2f3)]:
            if (sPNFun != 0x1) return ![];
            popupList(popBuckets);
            return !![];
        case keys['FF']:
            if (sRewFun != 0x1) return ![];
            channelsList(selIndex, catIndex != selIndex ? 0x0 : primaryIndex);
            return !![];
        case keys[b5(0x27a)]:
            if (sPNFun != 0x1) return ![];
            channelsList(selIndex, catIndex != selIndex ? 0x0 : primaryIndex);
            return !![];
        case keys['N0']:
        case keys[b5(0x564)]:
        case keys['TOOLS']:
            if (!sFavorites) {
                if (sNoNumbersKeys) g();
                else $(b5(0x527))[b5(0x5cc)]();
            }
            return !![];
        case keys['PLAY']:
        case keys['PAUSE']:
        case keys['PRECH']:
        case keys[b5(0x2fc)]:
            catRecordsList(selIndex);
            return !![];
    }
    return ![];
}
var bucketsList = _bucketsList;

function _bucketsList(a) {
    var b7 = plw;
    selIndex = a, listArray = catsArray, getListItem = function(b, c) {
        var b6 = plb;
        return b6(0x2a7) + (sNoNumbersKeys || c > 0x8 ? '' : b6(0x56e) + (c + 0x1) + '</div>&nbsp;') + b;
    }, listDetail[b7(0x282)] = '', detailListAction = function() {}, listKeyHandler = bucketsKeyHandler, listCaption[b7(0x282)] = _(b7(0x3ad)), listPodval[b7(0x282)] = btnDiv(keys[b7(0x2fc)], '', b7(0x5b6), strPlayPause, strPRECH) + (sFavorites ? '' : btnDiv(keys['YELLOW'], '', b7(0x54f), strTools, '0')) + (sArrowFun == 0x2 ? btnDiv(keys[b7(0x4b6)], strLEFT, 'Menu') + btnDiv(keys[b7(0x427)], strRIGHT, b7(0x58e)) : '') + (sArrowFun != 0x2 && sRewFun == 0x1 ? btnDiv(keys['RW'], strRW, 'Menu') + btnDiv(keys['FF'], strFF, b7(0x58e)) : '') + (sArrowFun != 0x2 && sRewFun != 0x1 && sPNFun == 0x1 ? btnDiv(keys['PREV'], strPREV, b7(0x255)) + btnDiv(keys[b7(0x27a)], strNEXT, b7(0x58e)) : '');
    if (!sFavorites) $(b7(0x527))[b7(0x38e)](btnDiv(keys['N1'], '1', b7(0x5e1)) + b7(0x230) + btnDiv(keys['N7'], '7', b7(0x5d2)) + b7(0x230) + btnDiv(keys['N3'], '3', b7(0x50c)) + b7(0x230) + btnDiv(keys['N6'], '6', b7(0x2ef)) + b7(0x230) + btnDiv(keys['N9'], '9', b7(0x257)) + '<br/>' + btnDiv(keys['N8'], '8', b7(0x478)));
    $(b7(0x527))[b7(0x393)](), showPage();
}

function detailREC() {
    var b8 = plw,
        b = listArray[selIndex];
    listDetail[b8(0x282)] = '<div\x20id=\x22_name\x22>' + chanels[b[b8(0x235)]]['channel_name'] + b8(0x221) + curColor + b8(0x3b5) + b[b8(0x226)] + b8(0x562) + time2str(b[b8(0x200)]) + '\x20-\x20' + time2time(b[b8(0x4dc)]) + '\x20(' + Math['round']((b['time_to'] - b['time']) / 0x3c) + '\x20' + _(b8(0x463)) + b8(0x541) + b8(0x5a5) + b[b8(0x5d5)] + b8(0x472);
    var c = $(b8(0x491))[b8(0x497)]() - $(b8(0x3b3))[b8(0x497)]();
    $('#_descr')[b8(0x497)](c), c = $(b8(0x475))[b8(0x497)]() + 0xa - c, scrollUp(b8(0x2df), c, 0x1388);
}

function selectREC() {
    var b9 = plw,
        a = listArray[selIndex][b9(0x235)],
        b = listArray[selIndex][b9(0x200)];
    closeList(), setCurrent(listCatIndex, cats[catsArray[listCatIndex]][b9(0x548)](a), !![]), getEPGchanelCached(a, function(c, d) {
        var ba = b9;
        if (d !== null && d[ba(0x1ed)]) var e = d['filter'](function(f) {
            var bb = ba;
            return f[bb(0x200)] > Date['now']() / 0x3e8 - chanels[c][bb(0x399)] * 0x3c * 0x3c;
        })['sort'](function(f, g) {
            var bc = ba;
            return f[bc(0x200)] - g[bc(0x200)];
        });
        epgArray = e, setCurProg(c, d, null), playArchive(b);
    });
}
var _crData = {
    'catIndex': -0x1,
    'data': [],
    'selIndex': 0x0
};

function searchRec() {
    var bd = plw;
    editCaption = _('String\x20for\x20search');
    var a = stbGetItem(bd(0x5b1)) || '';
    editvar = a, setEdit = function() {
        var be = bd;
        if (!editvar[be(0x1ed)]) return;
        a = editvar, stbSetItem(be(0x5b1), a), setTimeout(function() {
            var bf = be;
            selIndex = 0x0;
            var b = a[bf(0x57b)]();
            listArray = _crData[bf(0x23c)][bf(0x29b)](function(c) {
                var bg = bf;
                return c[bg(0x226)][bg(0x57b)]()['indexOf'](b) !== -0x1 || c[bg(0x5d5)][bg(0x57b)]()[bg(0x548)](b) !== -0x1;
            }), getListItem = function(c, d) {
                var bh = bf;
                return bh(0x2a7) + c['name'];
            }, detailListAction = detailREC, listKeyHandler = function(d) {
                var bi = bf;
                switch (d) {
                    case keys['EXIT']:
                        closeList();
                        return !![];
                    case keys['LEFT']:
                        if (sArrowFun != 0x2) return ![];
                    case keys['RETURN']:
                        catRecordsList(listCatIndex);
                        return !![];
                    case keys[bi(0x427)]:
                        if (sArrowFun != 0x2) return ![];
                    case keys['N2']:
                    case keys[bi(0x3f8)]:
                        infoProgramm(listArray[selIndex][bi(0x226)]);
                        return !![];
                    case keys['RW']:
                        if (sRewFun != 0x1) return ![];
                        catRecordsList(listCatIndex);
                        return !![];
                    case keys['PREV']:
                        if (sPNFun != 0x1) return ![];
                        catRecordsList(listCatIndex);
                        return !![];
                    case keys['FF']:
                        if (sRewFun != 0x1) return ![];
                        infoProgramm(listArray[selIndex][bi(0x226)]);
                        return !![];
                    case keys[bi(0x27a)]:
                        if (sPNFun != 0x1) return ![];
                        infoProgramm(listArray[selIndex][bi(0x226)]);
                        return !![];
                    case keys['N0']:
                    case keys[bi(0x564)]:
                    case keys[bi(0x5bb)]:
                        searchRec();
                        return !![];
                    case keys[bi(0x3e9)]:
                        var e = listArray[selIndex][bi(0x235)],
                            f = listArray[selIndex][bi(0x200)];
                        _crData['selIndex'] = _crData[bi(0x23c)][bi(0x3c4)](function(g) {
                            var bj = bi;
                            return g['ch_id'] == e && g[bj(0x200)] == f;
                        }), selectREC();
                        return !![];
                }
                return ![];
            }, listCaption['innerHTML'] = _(bf(0x4a1)) + catsArray[listCatIndex] + '.\x20' + _('Search') + ':\x22' + a + bf(0x4cd) + listArray[bf(0x1ed)] + ')', listPodval[bf(0x282)] = btnDiv(keys[bf(0x3d6)], strRETURN, bf(0x5b6), sArrowFun == 0x2 ? strLEFT : sRewFun == 0x1 ? strRW : sPNFun == 0x1 ? strPREV : '') + btnDiv(keys['N2'], strInfo, bf(0x3c9), '2', sArrowFun == 0x2 ? strRIGHT : sRewFun == 0x1 ? strFF : sPNFun == 0x1 ? strNEXT : '') + btnDiv(keys['YELLOW'], '', bf(0x251), strTools, '0'), $(bf(0x527))['hide'](), showPage();
        });
    }, showEditKey();
}

function catRecordsList(a) {
    var bs = plw;

    function b() {
        var bm = plb;
        selIndex = _crData['selIndex'] || 0x0, listArray = _crData['data'], getListItem = function(g, h) {
            var bk = plb;
            return bk(0x2a7) + g['name'];
        }, detailListAction = detailREC, listKeyHandler = function(g) {
            var bl = plb;
            switch (g) {
                case keys[bl(0x3ac)]:
                    closeList();
                    return !![];
                case keys['LEFT']:
                    if (sArrowFun != 0x2) return ![];
                case keys[bl(0x3d6)]:
                    bucketsList(listCatIndex);
                    return !![];
                case keys[bl(0x427)]:
                    if (sArrowFun != 0x2) return ![];
                case keys['N2']:
                case keys[bl(0x3f8)]:
                    infoProgramm(listArray[selIndex][bl(0x226)]);
                    return !![];
                case keys['RW']:
                    if (sRewFun != 0x1) return ![];
                    bucketsList(listCatIndex);
                    return !![];
                case keys['PREV']:
                    if (sPNFun != 0x1) return ![];
                    bucketsList(listCatIndex);
                    return !![];
                case keys['FF']:
                    if (sRewFun != 0x1) return ![];
                    infoProgramm(listArray[selIndex][bl(0x226)]);
                    return !![];
                case keys[bl(0x27a)]:
                    if (sPNFun != 0x1) return ![];
                    infoProgramm(listArray[selIndex]['name']);
                    return !![];
                case keys['N0']:
                case keys[bl(0x564)]:
                case keys['TOOLS']:
                    _crData[bl(0x498)] = selIndex, searchRec();
                    return !![];
                case keys[bl(0x3e9)]:
                    _crData[bl(0x498)] = selIndex, selectREC();
                    return !![];
            }
            return ![];
        }, listCaption[bm(0x282)] = _('Archive.\x20Category:\x20') + catsArray[listCatIndex] + '\x20(' + listArray['length'] + ')', listPodval[bm(0x282)] = btnDiv(keys[bm(0x3d6)], strRETURN, bm(0x512), sArrowFun == 0x2 ? strLEFT : sRewFun == 0x1 ? strRW : sPNFun == 0x1 ? strPREV : '') + btnDiv(keys['N2'], strInfo, 'Description', '2', sArrowFun == 0x2 ? strRIGHT : sRewFun == 0x1 ? strFF : sPNFun == 0x1 ? strNEXT : '') + btnDiv(keys[bm(0x564)], '', bm(0x251), strTools, '0'), $(bm(0x527))[bm(0x393)](), showPage(), $(bm(0x31f))[bm(0x393)]();
    }

    function c() {
        var bn = plb;
        if (e < d['length']) {
            if (f) {
                $(bn(0x31f))[bn(0x393)](), _crData = {
                    'catIndex': -0x1,
                    'data': [],
                    'selIndex': 0x0
                };
                return;
            }
            $(bn(0x4f9))[bn(0x3d9)](e + 0x1), $('#chan_name')[bn(0x3d9)](chanels[d[e]]['channel_name']), getEPGchanelCached(d[e], function(g, h) {
                var bo = bn;
                if (h !== null && h[bo(0x1ed)]) {
                    h[bo(0x258)](function(l, m) {
                        var bp = bo;
                        return m[bp(0x200)] - l[bp(0x200)];
                    });
                    var j = [],
                        k = h[bo(0x29b)](function(l) {
                            var bq = bo;
                            if (l[bq(0x200)] < Date[bq(0x35c)]() / 0x3e8 - chanels[g][bq(0x399)] * 0x3c * 0x3c) return ![];
                            if (l[bq(0x4dc)] * 0x3e8 > Date[bq(0x35c)]()) return ![];
                            if (j[bq(0x548)](l['name']) != -0x1) return ![];
                            else return j[bq(0x55d)](l['name']), !![];
                        });
                    k['forEach'](function(l) {
                        l['ch_id'] = g;
                    }), _crData['data'] = _crData['data'][bo(0x4d2)](k);
                }
                e++, c();
            });
        } else _crData['data']['sort'](function(g, h) {
            var br = bn;
            return g[br(0x226)] < h['name'] ? -0x1 : g[br(0x226)] > h[br(0x226)] ? 0x1 : 0x0;
        }), b();
    }
    listCatIndex = a;
    if (_crData[bs(0x5dc)] == listCatIndex && _crData['data'][bs(0x1ed)]) {
        b();
        return;
    }
    var d = cats[catsArray[listCatIndex]][bs(0x29b)](function(g) {
            var bt = bs;
            return chanels[g][bt(0x399)];
        }),
        e = 0x0,
        f = ![];
    _crData = {
        'catIndex': listCatIndex,
        'data': [],
        'selIndex': 0x0
    }, $(bs(0x31f))[bs(0x38e)]('<center><img\x20src=\x22' + host + bs(0x43f) + _(bs(0x23e)) + bs(0x299) + d[bs(0x1ed)] + bs(0x381))[bs(0x592)](), dialogBoxKeyHandler = function(g) {
        var bu = bs;
        if (g == keys[bu(0x3d6)] || g == keys['EXIT']) f = !![];
    }, setTimeout(c);
}

function updateMediaInfo() {
    var bv = plw;
    $(bv(0x54e))['css'](bv(0x3ff), stbGetPosTime() / stbGetLen() * 0x64 + '%'), $(bv(0x3ee))[bv(0x3d9)](Math[bv(0x51a)](stbGetPosTime() / 0x3c)), $(bv(0x468))[bv(0x3d9)]('+' + Math['round']((stbGetLen() - stbGetPosTime()) / 0x3c));
}
var playMedia = _playMedia;

function _playMedia(a) {
    var bw = plw;
    if (mediaUrls[mediaUrls['length'] - 0x1] == -0x1) mediaSelects[0x0] = 0x0;
    setCurrent(catIndex, -0x1);
    var b = 0x0,
        c = medHistory[bw(0x3c4)](function(d) {
            var bx = bw;
            return d['stream_url'] == a[bx(0x40c)];
        });
    if (c != -0x1) {
        if (c == 0x0 && playType == -0x174876e800) return;
        b = Math[bw(0x1f2)](medHistory[c][bw(0x3fa)] / 0x3c) * 0x3c, medHistory['splice'](c, 0x1);
    };
    medHistory[bw(0x4e9)](a), medHistory[bw(0x1f9)]([0x0, 0xa, 0x14, 0x1e, 0x28, 0x32][sMedCount]), $(bw(0x25d))[bw(0x364)](bw(0x422), bw(0x392) + (a[bw(0x332)] || '') + '\x22)'), $(bw(0x209))['text']('\x20'), $(bw(0x2ea))['html'](a[bw(0x233)]), $(bw(0x4d8))[bw(0x38e)](bw(0x2b6)), $('#nbegin_time')['text'](''), $('#nend_time')[bw(0x3d9)](''), $(bw(0x5ba))['html'](bw(0x2b6)), _prog100 = 0x0, $progress_div[bw(0x364)](bw(0x3d7), '#446'), $(bw(0x276))[bw(0x364)](bw(0x3ff), '0%'), $(bw(0x54e))[bw(0x364)](bw(0x3ff), '0%'), $(bw(0x3ee))['text'](''), $(bw(0x468))[bw(0x3d9)](''), $(bw(0x342))['text'](''), $(bw(0x49d))[bw(0x3d9)](''), $(bw(0x426))[bw(0x38e)](getMediaDescr(a));
    if (sInfoSwitch) showChanelInfo(0x1);
    playTime = 0x0, playType = -0x174876e800, forcePlay = !![];
    if (sStopPlay) stbStop();
    if (typeof a[bw(0x40c)] === bw(0x34b)) a[bw(0x40c)] = a[bw(0x40c)]();
    stbPlay(a['stream_url']);
    if (b) confirmBox(_(bw(0x533)) + bw(0x265) + step2text(b), function() {
        stbSetPosTime(b);
    });
}

function searchMedia(a) {
    var by = plw;
    editCaption = _('String\x20for\x20search');
    var b = stbGetItem(by(0x5b1)) || '';
    editvar = b, setEdit = function() {
        var bz = by;
        if (!editvar[bz(0x1ed)]) return;
        b = editvar, stbSetItem(bz(0x5b1), b), mediaName = a['title'], mediaSelects['unshift'](0x0), mediaList(a['playlist_url'] + (a[bz(0x379)][bz(0x548)]('?') == -0x1 ? '?' : '&') + bz(0x348) + b);
    }, showEditKey();
}

function infoMedia() {
    var bA = plw;
    if (!listArray[selIndex]['description']) return;
    $(bA(0x527))[bA(0x393)](), saveCPD();
    var a = listArray[selIndex][bA(0x233)] || '';
    listCaption['innerHTML'] = a, listPodval[bA(0x282)] = btnDiv(keys[bA(0x3d6)], strRETURN, bA(0x26c)) + (sTMDb && a ? btnDiv(keys['N2'], strInfo, bA(0x471), '2', sArrowFun == 0x2 ? strRIGHT : sRewFun == 0x1 ? strFF : sPNFun == 0x1 ? strNEXT : '') : ''), aboutKeyHandler = function(b) {
        var bB = bA;
        if (sTMDb && a) switch (b) {
            case keys['RIGHT']:
                if (sArrowFun != 0x2) break;
            case keys['N2']:
            case keys[bB(0x3f8)]:
                TMDbSearch(a);
                return !![];
            case keys['FF']:
                if (sRewFun != 0x1) break;
                TMDbSearch(a);
                return !![];
            case keys['NEXT']:
                if (sPNFun != 0x1) break;
                TMDbSearch(a);
                return !![];
        }
        return restoreCPD(), $(bB(0x2fb))['hide']()['text'](''), $(bB(0x475))['css'](bB(0x310), 0x0), clearTimeout(detailTimer), !![];
    }, $(bA(0x2fb))[bA(0x38e)](bA(0x39c) + getMediaDescr(listArray[selIndex]) + bA(0x234))[bA(0x592)](), a = $(bA(0x475))[bA(0x497)]() + 0xa - $('#listAbout')['height'](), scrollUp(bA(0x2df), a, 0x2710);
}

function selectMedia() {
    var bC = plw,
        a = listArray[selIndex];
    if (a['adult'] && a['adult'] == 0x1 && sPSchannels && parentPIN != '*' && !parentAccess) {
        enterPinAndSetAccess(selectMedia);
        return;
    }
    mediaSelects[0x0] = selIndex;
    if (a[bC(0x379)]) {
        if (a[bC(0x267)]) searchMedia(a);
        else mediaName = a[bC(0x233)], mediaSelects[bC(0x4e9)](0x0), mediaList(a['playlist_url']);
    } else {
        if (a[bC(0x40c)]) closeList(), playMedia(a);
        else infoMedia();
    }
}

function mediaKeyHandler(a) {
    var bE = plw;

    function b() {
        var bD = plb;
        if (mediaUrls[bD(0x1ed)] == 0x1) popupList(popMedia);
        else mediaSelects[bD(0x412)](), mediaUrls['pop'](), mediaNames[bD(0x5ca)](), mediaName = mediaNames[bD(0x5ca)](), mediaList(mediaUrls[bD(0x5ca)]());
    }
    if (sArrowFun == 0x2) switch (a) {
        case keys[bE(0x4b6)]:
            b();
            return !![];
        case keys['RIGHT']:
            if (listArray[selIndex]['playlist_url']) selectMedia();
            else infoMedia();
            return !![];
        case keys[bE(0x3d6)]:
            closeList();
            return !![];
    }
    switch (a) {
        case keys['RETURN']:
            b();
            return !![];
        case keys['N0']:
        case keys['RED']:
        case keys[bE(0x291)]:
        case keys[bE(0x3ac)]:
            closeList();
            return !![];
        case keys[bE(0x3e9)]:
            selectMedia();
            return !![];
        case keys['N2']:
        case keys[bE(0x3f8)]:
            infoMedia();
            return !![];
        case keys['RW']:
            if (sRewFun != 0x1) return ![];
            b();
            return !![];
        case keys[bE(0x2f3)]:
            if (sPNFun != 0x1) return ![];
            b();
            return !![];
        case keys['FF']:
            if (sRewFun != 0x1) return ![];
            if (listArray[selIndex]['playlist_url']) selectMedia();
            else infoMedia();
            return !![];
        case keys[bE(0x27a)]:
            if (sPNFun != 0x1) return ![];
            if (listArray[selIndex][bE(0x379)]) selectMedia();
            else infoMedia();
            return !![];
        case keys['N8']:
        case keys[bE(0x5bb)]:
        case keys['GREEN']:
            if (sFavorites == -0x1 || mediaUrls[bE(0x1ed)] == 0x1 || !listArray[bE(0x1ed)]) return !![];
            if (mediaUrls[mediaUrls[bE(0x1ed)] - 0x1] != -0x2) medFavorites['push'](listArray[selIndex]), showShift(listArray[selIndex][bE(0x233)] + _(bE(0x473)));
            else {
                listArray[bE(0x1f9)](selIndex, 0x1);
                if (listArray[bE(0x1ed)] && selIndex == listArray[bE(0x1ed)]) selIndex--;
                showPage();
            }
            if (sFavorites != -0x1) providerSetItem(bE(0x39a), JSON['stringify'](medFavorites));
            return !![];
    }
    return ![];
}
var mediaName = '',
    mediaRecords = [],
    mediaUrls = null,
    mediaNames = [],
    mediaSelects = [],
    medHistory = [],
    medFavorites = [];

function getMediaDescr(a) {
    var bF = plw,
        b = a[bF(0x4c8)] || '';
    if (typeof b === 'function') b = b();
    return b[bF(0x567)](/script/g, bF(0x355));;
}

function showMediaList1() {
    var bG = plw;
    selIndex = mediaSelects[0x0] || 0x0, listArray = mediaRecords;
    var a = (window[bG(0x3a9)] - 0x5a * getHeightK()) / pageSize - 0x2,
        b = 0x6 * getWidthK();
    getListItem = function(e, f) {
        var bH = bG;
        return (sShowPikon ? bH(0x5b3) + (e[bH(0x332)] || '') + bH(0x4e6) + a + bH(0x32b) + b + bH(0x369) : bH(0x2a7)) + e[bH(0x233)];
    }, listDetail[bG(0x282)] = '', detailListAction = function() {
        var bI = bG;
        listDetail[bI(0x282)] = '<div\x20id=\x22_prd\x22\x20style=\x22font-size:smaller;\x22>' + getMediaDescr(listArray[selIndex]) + bI(0x234);
        if (!sNoSmall) $(bI(0x5e0), $(listDetail))[bI(0x406)](bI(0x330))['remove']();
        var e = $(bI(0x475))['height']() + 0xa - $(listDetail)[bI(0x497)]();
        scrollUp(bI(0x2df), e, 0x1388);
    }, listKeyHandler = mediaKeyHandler;
    var c = $(bG(0x22a)),
        d = ($(list)[bG(0x3ff)]() || $(bG(0x430))[bG(0x3ff)]()) - $('#listTime')['width']() * 0x2;
    c['html'](mediaNames[bG(0x20c)](bG(0x545)))[bG(0x3d9)](c['text']());
    while (c[bG(0x3ff)]() > d) {
        c[bG(0x3d9)](bG(0x49b) + c[bG(0x3d9)]()[bG(0x295)](0xa));
    };
    listCaption[bG(0x282)] = c['text'](), c[bG(0x3d9)](''), listPodval[bG(0x282)] = btnDiv(keys[bG(0x2fc)], '', bG(0x26c), sArrowFun == 0x2 ? strRETURN : strPRECH, '0') + (sArrowFun == 0x2 ? btnDiv(keys['LEFT'], strLEFT, bG(0x3e6)) : btnDiv(keys['RETURN'], strRETURN, bG(0x3e6), sRewFun == 0x1 ? strRW : sPNFun == 0x1 ? strPREV : '')) + btnDiv(keys['N2'], strInfo, bG(0x3c9), '2') + (listArray[bG(0x1ed)] && sFavorites != -0x1 && mediaUrls['length'] != 0x1 ? btnDiv(keys[bG(0x442)], '', mediaUrls[mediaUrls[bG(0x1ed)] - 0x1] != -0x2 ? bG(0x202) : 'Delete', strTools, '8') : ''), $('#listPopUp')['html']('')[bG(0x393)](), showPage();
}

function showMediaList() {
    var bJ = plw;
    if (mediaSelects[bJ(0x1ed)] == 0x1 && sFavorites != -0x1) {
        mediaRecords[bJ(0x55d)]({
            'title': '',
            'logo_30x30': '',
            'description': '',
            'playlist_url': ''
        });
        if (sMedCount) mediaRecords[bJ(0x55d)]({
            'title': _(bJ(0x2f1)),
            'logo_30x30': '',
            'description': '',
            'playlist_url': -0x1
        });
        mediaRecords[bJ(0x55d)]({
            'title': _('Favorites'),
            'logo_30x30': '',
            'description': '',
            'playlist_url': -0x2
        });
    }
    mediaNames[bJ(0x55d)](mediaName), showMediaList1();
}

function mediaList(a) {
    var bK = plw;
    mediaUrls && mediaUrls['length'] && a == mediaUrls[0x0] && (mediaName = bK(0x341), mediaUrls = [], mediaNames = [], mediaSelects = [mediaSelects[bK(0x5ca)]()]);
    if (a === null) {
        if (mediaUrls === null) mediaName = bK(0x341), a = '', mediaUrls = [], mediaNames = [], mediaSelects = [0x0];
        else {
            showMediaList1();
            return;
        }
    }
    mediaUrls[bK(0x55d)](a), mediaRecords = [];
    if (a == -0x1) {
        mediaRecords = medHistory, showMediaList();
        return;
    }
    if (a == -0x2) {
        mediaRecords = medFavorites, showMediaList();
        return;
    }
    getMediaArray(a, showMediaList);
}
var epgArray, curProg, playTime, _prog100 = 0x0;

function updateArchiveInfo(a) {
    var bL = plw,
        b = curList[primaryIndex],
        d = curProg;
    $(bL(0x25d))['css'](bL(0x422), bL(0x392) + getChannelPicon(b) + '\x22)'), $('#channel_number')['html'](primaryIndex + 0x1), $('#channel_name')[bL(0x38e)](chanels[b]['channel_name']), curProg = epgArray[bL(0x3c4)](function(i, j, k) {
        var bM = bL;
        return i[bM(0x4dc)] > a && i[bM(0x200)] <= a;
    });
    var e = epgArray[curProg] || {
        'name': '',
        'time': Math[bL(0x1f2)](a / 0xe10) * 0xe10,
        'time_to': (Math[bL(0x1f2)](a / 0xe10) + 0x1) * 0xe10,
        'descr': ''
    };
    $(bL(0x5ba))['html'](e[bL(0x226)]), _prog100 = e, $(bL(0x54e))[bL(0x364)]('width', (a - e[bL(0x200)]) / (e[bL(0x4dc)] - e[bL(0x200)]) * 0x64 + '%'), $(bL(0x276))['css']('width', e['time_to'] > Date[bL(0x35c)]() / 0x3e8 ? (e['time_to'] - Date[bL(0x35c)]() / 0x3e8) / (e[bL(0x4dc)] - e[bL(0x200)]) * 0x64 + '%' : '0%'), $progress_div['css'](bL(0x3d7), bL(0x504)), $(bL(0x3ee))[bL(0x3d9)](time2time(e[bL(0x200)])), $(bL(0x468))['text']('+' + Math[bL(0x51a)]((e[bL(0x4dc)] - a) / 0x3c)), $(bL(0x342))[bL(0x38e)](e[bL(0x226)]);
    var f = Math[bL(0x51a)]((a - e[bL(0x200)]) / 0x3c);
    $(bL(0x49d))['html'](bL(0x27f) + time2time(a) + bL(0x248) + time2str(e[bL(0x200)]) + bL(0x55a) + time2time(e[bL(0x4dc)]) + bL(0x557) + (f > 0x0 ? f + '/' : '') + '</span>' + Math[bL(0x51a)]((e[bL(0x4dc)] - e[bL(0x200)]) / 0x3c) + '\x20' + _(bL(0x463)) + ')'), $('#programm_descr')[bL(0x38e)](e[bL(0x5d5)] ? getThumbnail(e[bL(0x39d)]) + e[bL(0x5d5)][bL(0x567)](/\|/g, bL(0x230)) : '');
    var g = curProg + 0x1;
    if (!g) g = epgArray['findIndex'](function(i, j, k) {
        var bN = bL;
        return i[bN(0x200)] > a;
    });
    if (g > -0x1 && g < epgArray['length'] - 0x1) {
        var h = epgArray[g];
        $(bL(0x4d8))[bL(0x38e)](h[bL(0x226)]), $(bL(0x24f))[bL(0x3d9)](time2time(h[bL(0x200)])), $(bL(0x5a7))['text'](Math[bL(0x51a)]((h['time_to'] - h[bL(0x200)]) / 0x3c));
    } else $('#nprogramm_name')[bL(0x38e)]('&nbsp;\x20'), $('#nbegin_time')[bL(0x3d9)](''), $(bL(0x5a7))['text']('');
    if (sInfoChange && d != curProg && !$i1['is'](bL(0x43e))) showChanelInfo(0x1);
}
var fileArchive = ![],
    forcePlay = ![];

function playArchive(a) {
    var bO = plw,
        b = curProg;
    updateArchiveInfo(a);
    if (sInfoRew) showChanelInfo(0x1);
    var d = curList[primaryIndex],
        e = epgArray[curProg] || {
            'name': '',
            'time': Math[bO(0x1f2)](a / 0xe10) * 0xe10,
            'time_to': (Math[bO(0x1f2)](a / 0xe10) + 0x1) * 0xe10,
            'descr': ''
        };
    playTime = 0x0, playType = Math[bO(0x1f2)](a), forcePlay = !![];
    if (!fileArchive || b != curProg) {
        if (sStopPlay) stbStop();
        if (!__$1$(chanels[d])) stbPlay(getArchiveUrl(d, a, e['time_to'], e), fileArchive ? a - e[bO(0x200)] : 0x0);
    } else stbSetPosTime(a - e[bO(0x200)]);
}

function selectEpg() {
    var bP = plw;
    if (!chanels[epg_ch_id][bP(0x399)] || listArray[selIndex][bP(0x200)] > Date[bP(0x35c)]() / 0x3e8) {
        infoProgramm(listArray[selIndex][bP(0x226)]);
        return;
    }
    if (ifParentalAccessChId(epg_ch_id, function() {
            selectEpg();
        })) return;
    closeList(), setCurrent(listCatIndex, listChannel, !![]), epgArray = listEpgArray, playArchive(listArray[selIndex][bP(0x200)]);
}
var epgTimers = [];

function startEpgTimer(a) {
    var bQ = plw,
        b = _(bQ(0x3cf)) + bQ(0x265) + chanels[a['ci']][bQ(0x25b)] + bQ(0x2fd) + curColor + bQ(0x3b5) + a['n'] + bQ(0x234) + time2time(a['t']) + bQ(0x55a) + time2time(a['te']) + '\x20(' + Math[bQ(0x51a)]((a['te'] - a['t']) / 0x3c) + '\x20' + _(bQ(0x463)) + ')',
        c = a['t'] * 0x3e8 - Date[bQ(0x35c)]();
    a['ti'] = setTimeout(function() {
        confirmBox(b, function() {
            closeList(), playChannel(a['c'], a['i']);
        });
    }, c > 0x0 ? c : 0x0);
}

function setEpgTimer() {
    var bS = plw,
        a = listArray[selIndex];
    if (!epglisted || a['time'] < Date['now']() / 0x3e8) return;
    var b = epgTimers['findIndex'](function(c) {
        var bR = plb;
        return c['ci'] == epg_ch_id && c['t'] == a[bR(0x200)];
    });
    confirmBox(b == -0x1 ? bS(0x585) : 'Remove\x20timer?', function() {
        var bT = bS;
        if (b == -0x1) {
            var c = {
                'ci': epg_ch_id,
                'c': listCatIndex,
                'i': listChannel,
                't': a[bT(0x200)],
                'te': a[bT(0x4dc)],
                'n': a[bT(0x226)]
            };
            startEpgTimer(c), epgTimers[bT(0x55d)](c);
        } else clearTimeout(epgTimers[b]['ti']), epgTimers[bT(0x1f9)](b, 0x1);
        showPage(), providerSetItem(bT(0x5df), JSON[bT(0x38c)](epgTimers));
    });
}

function loadEpgTimers() {
    var bU = plw;
    try {
        epgTimers = JSON[bU(0x4a8)](providerGetItem(bU(0x5df)));
    } catch (a) {}
    if (!Array[bU(0x4fd)](epgTimers)) epgTimers = [];
    epgTimers['forEach'](function(b, c) {
        var bV = bU;
        if (b['te'] > Date['now']() / 0x3e8) startEpgTimer(b);
        if (b['t'] < Date['now']() / 0x3e8) epgTimers[bV(0x1f9)](c, 0x1);
    }), providerSetItem(bU(0x5df), JSON['stringify'](epgTimers));
}

function time2time(a) {
    var bW = plw,
        b = new Date(a * 0x3e8);
    return _t2(b[bW(0x323)]()) + ':' + _t2(b[bW(0x34c)]());
}

function time2str(a) {
    var bX = plw,
        b = _(bX(0x44f))[bX(0x20e)]('\x20'),
        c = new Date(a * 0x3e8);
    return b[c[bX(0x4b9)]()] + bX(0x3eb) + _t2(c['getDate']()) + '.' + _t2(c[bX(0x5c7)]() + 0x1) + bX(0x3eb) + _t2(c['getHours']()) + ':' + _t2(c['getMinutes']());
}
var epgreturn = ![];

function epgKeyHandler(a) {
    var bY = plw;
    switch (a) {
        case keys[bY(0x4b6)]:
            if (sArrowFun != 0x2) return ![];
        case keys['N3']:
        case keys['CH_LIST']:
        case keys['YELLOW']:
            channelsList(listCatIndex, listChannel);
            return !![];
        case keys[bY(0x3d6)]:
            if (!epgreturn) closeList();
            else channelsList(listCatIndex, listChannel);
            return !![];
        case keys[bY(0x3e9)]:
            selectEpg();
            return !![];
        case keys['N1']:
        case keys[bY(0x21c)]:
        case keys['PAUSE']:
        case keys['BLUE']:
            bucketsList(listCatIndex);
            return !![];
        case keys[bY(0x427)]:
            if (sArrowFun != 0x2) return ![];
        case keys['N2']:
        case keys[bY(0x3f8)]:
            infoProgramm(listArray[selIndex][bY(0x226)]);
            return !![];
        case keys['RW']:
            if (sRewFun != 0x1) return ![];
            channelsList(listCatIndex, listChannel);
            return !![];
        case keys[bY(0x2f3)]:
            if (sPNFun != 0x1) return ![];
            channelsList(listCatIndex, listChannel);
            return !![];
        case keys['FF']:
            if (sRewFun != 0x1) return ![];
            infoProgramm(listArray[selIndex]['name']);
            return !![];
        case keys['NEXT']:
            if (sPNFun != 0x1) return ![];
            infoProgramm(listArray[selIndex][bY(0x226)]);
            return !![];
        case keys['N0']:
        case keys[bY(0x560)]:
        case keys['STOP']:
        case keys['RED']:
            switch (epglisted) {
                case 0x0:
                    epgList(listCatIndex, listChannel, epgreturn);
                    return !![];
                case 0x1:
                    epgListAlpha(listCatIndex, listChannel, epgreturn);
                    return !![];
                case 0x2:
                    if (chanels[epg_ch_id][bY(0x399)]) recordsList(listCatIndex, listChannel, epgreturn);
                    else epgList(listCatIndex, listChannel, epgreturn);
                    return !![];
            }
            return !![];
        case keys['N8']:
        case keys[bY(0x5bb)]:
        case keys['GREEN']:
            setEpgTimer();
            return !![];
    }
    return ![];
}
var epglisted = 0x1,
    listChannel, listEpgArray, epg_ch_id = null,
    curEpgData = null;

function detailEPG() {
    var bZ = plw,
        b = listArray[selIndex];
    listDetail[bZ(0x282)] = '<div\x20id=\x22_name\x22><div\x20style=\x22color:' + curColor + ';\x22>' + b[bZ(0x226)] + bZ(0x562) + time2str(b[bZ(0x200)]) + bZ(0x55a) + time2time(b[bZ(0x4dc)]) + '\x20(' + Math[bZ(0x51a)]((b[bZ(0x4dc)] - b[bZ(0x200)]) / 0x3c) + '\x20' + _(bZ(0x463)) + bZ(0x541) + bZ(0x5a5) + getThumbnail(b[bZ(0x39d)]) + b[bZ(0x5d5)] + bZ(0x472);
    var c = $(bZ(0x491))[bZ(0x497)]() - $(bZ(0x3b3))[bZ(0x497)]();
    $(bZ(0x287))[bZ(0x497)](c), c = $(bZ(0x475))[bZ(0x497)]() + 0xa - c, scrollUp(bZ(0x2df), c, 0x1388);
    if (b[bZ(0x200)] > Date['now']() / 0x3e8) $(bZ(0x333))[bZ(0x592)]();
    else $('#bTimer')[bZ(0x393)]();
}

function itemEPG(a, b) {
    var c0 = plw,
        c = a[c0(0x200)] < Date[c0(0x35c)]() / 0x3e8 && chanels[epg_ch_id]['rec'] ? c0(0x44b) : '';
    if (!c) c = epgTimers[c0(0x3c4)](function(d) {
        var c1 = c0;
        return d['ci'] == epg_ch_id && d['t'] == a[c1(0x200)];
    }) > -0x1 ? c0(0x37f) : '';
    if (c) c = c0(0x31d) + c + '\x22';
    return '&nbsp;<span' + c + '>' + time2str(a[c0(0x200)]) + '</span>&nbsp;&nbsp;' + a[c0(0x226)];
}

function epgPodval() {
    var c2 = plw;
    listPodval[c2(0x282)] = btnDiv(keys['RED'], '', epglisted == 0x2 ? chanels[epg_ch_id][c2(0x399)] ? c2(0x5b6) : c2(0x4e5) : epglisted ? c2(0x465) : c2(0x4e5), strSTOP, '0') + btnDiv(keys[c2(0x565)], '', 'Category', strPlayPause, '1') + btnDiv(keys[c2(0x564)], '', c2(0x58e), '3', sArrowFun == 0x2 ? strLEFT : sRewFun == 0x1 ? strRW : sPNFun == 0x1 ? strPREV : '') + btnDiv(keys['N2'], strInfo, c2(0x3c9), '2', sArrowFun == 0x2 ? strRIGHT : sRewFun == 0x1 ? strFF : sPNFun == 0x1 ? strNEXT : '') + c2(0x407) + btnDiv(keys['GREEN'], '', c2(0x312), strTools, '8') + '</span>';
}

function epgList(a, b, c) {
    function d() {
        var c3 = plb;
        if (curEpgData !== null && curEpgData['length']) var g = curEpgData[c3(0x29b)](function(i) {
            var c4 = c3;
            return chanels[f][c4(0x399)] ? i[c4(0x200)] > Date[c4(0x35c)]() / 0x3e8 - chanels[f]['rec'] * 0x3c * 0x3c : i[c4(0x4dc)] > Date[c4(0x35c)]() / 0x3e8 - 0x2 * 0x3c * 0x3c;
        })[c3(0x258)](function(i, j) {
            var c5 = c3;
            return i[c5(0x200)] - j['time'];
        });
        var h = playType > 0x0 && f == curList[primaryIndex] ? playType + playTime : Math[c3(0x1f2)](Date[c3(0x35c)]() / 0x3e8);
        selIndex = g['findIndex'](function(i) {
            var c6 = c3;
            return i[c6(0x4dc)] >= h && i[c6(0x200)] <= h;
        });
        if (selIndex === -0x1) selIndex = 0x0;
        listArray = g, listEpgArray = g, getListItem = itemEPG, detailListAction = detailEPG, listKeyHandler = epgKeyHandler, listCaption[c3(0x282)] = _('EPG\x20and\x20archive.\x20Channel:\x20') + chanels[f][c3(0x25b)], epgPodval(), $(c3(0x527))[c3(0x393)](), showPage();
    }
    epglisted = 0x1, epgreturn = c, listCatIndex = a, listChannel = b;
    var e = cats[catsArray[listCatIndex]],
        f = e[listChannel];
    if (epg_ch_id && epg_ch_id == f) {
        d();
        return;
    }
    epg_ch_id = f, getEPGchanelCached(f, function(g, h) {
        curEpgData = h, d(), setCurProg(g, h, null);
    });
}

function epgListAlpha(a, b, c) {
    function d() {
        var c7 = plb;
        if (curEpgData !== null && curEpgData[c7(0x1ed)]) var g = curEpgData[c7(0x29b)](function(j) {
                var c8 = c7;
                return chanels[f][c8(0x399)] ? j[c8(0x200)] > Date[c8(0x35c)]() / 0x3e8 - chanels[f]['rec'] * 0x3c * 0x3c : j['time_to'] > Date[c8(0x35c)]() / 0x3e8 - 0x2 * 0x3c * 0x3c;
            })[c7(0x258)](function(j, k) {
                var c9 = c7;
                return j[c9(0x200)] - k['time'];
            }),
            h = curEpgData[c7(0x29b)](function(j) {
                var ca = c7;
                return chanels[f]['rec'] ? j[ca(0x200)] > Date['now']() / 0x3e8 - chanels[f][ca(0x399)] * 0x3c * 0x3c : j['time_to'] > Date['now']() / 0x3e8;
            })[c7(0x258)](function(j, k) {
                var cb = c7;
                return j[cb(0x226)] < k[cb(0x226)] ? -0x1 : j[cb(0x226)] > k[cb(0x226)] ? 0x1 : j[cb(0x200)] - k['time'];
            });
        var i = playType > 0x0 && f == curList[primaryIndex] ? playType + playTime : Math[c7(0x1f2)](Date[c7(0x35c)]() / 0x3e8);
        selIndex = h['findIndex'](function(j) {
            var cc = c7;
            return j[cc(0x4dc)] >= i && j[cc(0x200)] <= i;
        });
        if (selIndex === -0x1) selIndex = 0x0;
        listArray = h, listEpgArray = g, getListItem = itemEPG, detailListAction = detailEPG, listKeyHandler = epgKeyHandler, listCaption['innerHTML'] = _(c7(0x22b)) + chanels[f][c7(0x25b)], epgPodval(), $(c7(0x527))[c7(0x393)](), showPage();
    }
    epglisted = 0x2, epgreturn = c, listCatIndex = a, listChannel = b;
    var e = cats[catsArray[listCatIndex]],
        f = e[listChannel];
    if (epg_ch_id && epg_ch_id == f) {
        d();
        return;
    }
    epg_ch_id = f, getEPGchanelCached(f, function(g, h) {
        curEpgData = h, d(), setCurProg(g, h, null);
    });
}

function recordsList(a, b, c) {
    function d() {
        var ce = plb;
        if (curEpgData !== null && curEpgData['length']) {
            var g = curEpgData['filter'](function(j) {
                    var cd = plb;
                    return j[cd(0x200)] > Date['now']() / 0x3e8 - chanels[f][cd(0x399)] * 0x3c * 0x3c;
                })[ce(0x258)](function(j, k) {
                    var cf = ce;
                    return j[cf(0x200)] - k[cf(0x200)];
                }),
                h = [];
            curEpgData['sort'](function(j, k) {
                var cg = ce;
                return k['time'] - j[cg(0x200)];
            });
            var i = curEpgData[ce(0x29b)](function(j) {
                var ch = ce;
                if (j[ch(0x200)] < Date['now']() / 0x3e8 - chanels[f][ch(0x399)] * 0x3c * 0x3c) return ![];
                if (j[ch(0x4dc)] * 0x3e8 > Date[ch(0x35c)]()) return ![];
                if (h[ch(0x548)](j[ch(0x226)]) != -0x1) return ![];
                else return h['push'](j[ch(0x226)]), !![];
            })[ce(0x258)](function(j, k) {
                var ci = ce;
                return j['name'] < k[ci(0x226)] ? -0x1 : j['name'] > k[ci(0x226)] ? 0x1 : 0x0;
            });
        }
        selIndex = 0x0, listArray = i, listEpgArray = g, getListItem = function(j, k) {
            var cj = ce;
            return cj(0x2a7) + j[cj(0x226)];
        }, detailListAction = detailEPG, listKeyHandler = epgKeyHandler, listCaption[ce(0x282)] = _(ce(0x1f3)) + chanels[f][ce(0x25b)], epgPodval(), $('#listPopUp')[ce(0x393)](), showPage();
    }
    epglisted = 0x0, epgreturn = c, listCatIndex = a, listChannel = b;
    var e = cats[catsArray[listCatIndex]],
        f = e[listChannel];
    if (!chanels[f]['rec']) return;
    if (epg_ch_id && epg_ch_id == f) {
        d();
        return;
    }
    epg_ch_id = f, getEPGchanelCached(f, function(g, h) {
        curEpgData = h, d(), setCurProg(g, h, null);
    });
}!Array[plw(0x4b4)][plw(0x3c4)] && (Array[plw(0x4b4)][plw(0x3c4)] = function(a) {
    var ck = plw;
    if (this == null) throw new TypeError(ck(0x3bb));
    if (typeof a !== ck(0x34b)) throw new TypeError(ck(0x46a));
    var b = Object(this),
        c = b[ck(0x1ed)] >>> 0x0,
        d = arguments[0x1],
        e;
    for (var f = 0x0; f < c; f++) {
        e = b[f];
        if (a['call'](d, e, f, b)) return f;
    }
    return -0x1;
});
var aboutKeyHandler = null;

function pluginInfo() {
    var cl = plw;
    $('#listAbout')[cl(0x592)]()[cl(0x38e)](_('Player\x20info:') + '<br/>' + version + cl(0x4c2) + '<br/><br/>' + _(cl(0x322)) + cl(0x52b) + window[cl(0x4b3)] + 'x' + window[cl(0x3a9)]), stbInfo(), aboutKeyHandler = function(a) {
        return ![];
    };
}

function loadValue() {
    var cp = plw,
        a = ![],
        b;

    function c() {
        clearTimeout(d), a = !![], editKey = editKey1, showEdit();
    }
    var d = setTimeout(c, 0x927c0);

    function e() {
        var cm = plb;
        if (a) return;
        $[cm(0x30e)]({
            'url': cm(0x273) + swopUrl + cm(0x38f),
            'data': {
                'c': cm(0x55f),
                'd': b
            },
            'type': cm(0x32d),
            'timeout': 0x2710,
            'cache': ![],
            'success': function(f) {
                var cn = cm;
                if (a) return;
                if (f['status'] === 'forbidden') setTimeout(e, 0x1388);
                else f[cn(0x3a7)] === cn(0x42d) && (editvar = f[cn(0x23c)], editPos = editvar['length'], editKey = editKey1, _keyCur = _keys[cn(0x1ed)] - 0x1, showEdit());
            },
            'error': function(f) {
                var co = cm;
                $(co(0x363))['html'](co(0x2dc) + f[co(0x279)] + co(0x234));
            }
        });
    }
    listPodval[cp(0x282)] = btnDiv(keys[cp(0x3d6)], strRETURN, cp(0x26c)), $(cp(0x363))[cp(0x38e)](cp(0x378) + _(cp(0x5da)) + cp(0x5bc))[cp(0x592)](), editKey = function(f) {
        var cq = cp;
        return (f == keys['RETURN'] || f == keys[cq(0x3ac)]) && c(), !![];
    }, $[cp(0x30e)]({
        'url': cp(0x273) + swopUrl + cp(0x38f),
        'data': {
            'c': cp(0x4d0),
            'n': editCaption,
            'v': editvar
        },
        'type': 'POST',
        'timeout': 0x2710,
        'cache': ![],
        'success': function(f) {
            var cr = cp;
            b = f[cr(0x311)], $(cr(0x363))['html']('<div\x20style=\x22text-align:center;font-size:larger;\x22><br/>' + _(cr(0x599)) + '<br/><br/>' + _(cr(0x38b)) + cr(0x453) + curColor + '\x22>' + swopUrl + cr(0x248) + _(cr(0x417)) + cr(0x20d) + curColor + '\x22>' + b + '</span><br/><br/>' + _(cr(0x3e1)) + cr(0x511) + cr(0x488) + swopUrl + '/?' + b + cr(0x2c2) + '</div>'), setTimeout(e, 0x2710);
        },
        'error': function(f) {
            var cs = cp;
            $(cs(0x363))[cs(0x38e)](cs(0x2dc) + f[cs(0x279)] + cs(0x234));
        }
    });
}
var editCaption = '',
    editvar = '',
    editPos = 0x0,
    setEdit, cursorInterval = null;

function _changeEdit() {
    var ct = plw;
    $(ct(0x5aa))[ct(0x38e)](editvar[ct(0x295)](0x0, editPos) + ct(0x2dd) + curColor + ';width:3px;height:1.2em;\x22></div>' + editvar[ct(0x295)](editPos)), clearInterval(cursorInterval);
    var a = !![],
        b = $(ct(0x2e0));
    cursorInterval = setInterval(function() {
        var cu = ct;
        a = !a, b[cu(0x364)](cu(0x3d7), a ? curColor : cu(0x56b));
    }, 0x1f4);
}
var _keyCur = 0xe,
    _keyUp = ![],
    _keyE = !![],
    _keyP = ![],
    _keys1 = plw(0x3b2),
    _keysA = plw(0x5d3),
    _keysL = plw(0x53b),
    _keysP = plw(0x3a4),
    _keys = '',
    _keysSymbol = [{
        's': '',
        'a': function() {
            _setCase(!_keyUp), showEdit();
        }
    }, {
        's': '',
        'a': function() {
            if (!_keysSymbol[0x1]['s']) return;
            _keyP = ![], _setLang(!_keyE), showEdit();
        }
    }, {
        's': '',
        'a': function() {
            _setPunct(!_keyP), showEdit();
        }
    }, {
        's': plw(0x207),
        'a': loadValue
    }, {
        's': plw(0x23f),
        'a': function() {
            editPos && (editPos--, _changeEdit());
        }
    }, {
        's': plw(0x59f),
        'a': function() {
            var cv = plw;
            editPos < editvar[cv(0x1ed)] && (editPos++, _changeEdit());
        }
    }, {
        's': '_',
        'a': function() {
            var cw = plw;
            editvar = editvar[cw(0x295)](0x0, editPos) + '\x20' + editvar[cw(0x295)](editPos), editPos++, _changeEdit();
        }
    }, {
        's': '',
        'a': function() {
            var cx = plw;
            editPos && (editvar = editvar[cx(0x295)](0x0, editPos - 0x1) + editvar[cx(0x295)](editPos), editPos--, _changeEdit());
        }
    }, {
        's': '',
        'a': function() {}
    }, {
        's': 'Ok',
        'a': function() {
            var cy = plw;
            clearInterval(cursorInterval), restoreCPD(), $(cy(0x363))[cy(0x393)](), setEdit();
        }
    }];

function _setCase(a) {
    var cz = plw;
    if (_keyP) return;
    _keyUp = a, _keys = _keyUp ? _keys[cz(0x5d8)]() : _keys[cz(0x57b)](), _keysSymbol[0x0]['s'] = _keyUp ? cz(0x3d0) : cz(0x4f4);
    if (!sNoColorKeys) _keysSymbol[0x0]['s'] = cz(0x3e3) + _keysSymbol[0x0]['s'] + cz(0x4e3);
}

function _setLang(a) {
    var cA = plw,
        b = _(cA(0x3a0));
    _keyE = a;
    var c = a ? _keysL : b,
        d = Math[cA(0x1f2)](c['length'] / 0xa);
    if (c['length'] % 0xa) c = (c + _keysP)[cA(0x295)](0x0, (d + 0x1) * 0xa);
    _keys = _keys1 + c + _keysA, _keysSymbol[0x2]['s'] = cA(0x5a0), _setCase(_keyUp), _keyCur = _keys['length'] - 0x9;
}

function _setPunct(a) {
    var cB = plw;
    _keyP = a;
    if (a) _keys = _keys1 + _keysP + _keysA, _keysSymbol[0x0]['s'] = '', _keysSymbol[0x2]['s'] = cB(0x236);
    else _setLang(_keyE);
    _keyCur = _keys[cB(0x1ed)] - 0x8;
}

function showEditKey1(a) {
    var cD = plw;

    function b(d, e) {
        var cC = plb;
        if (_keysSymbol[d]['s']) _keysSymbol[d]['s'] = '<span\x20style=\x22border-bottom:3px\x20solid\x20' + e + cC(0x3b5) + _keysSymbol[d]['s'] + cC(0x4e3);
    }
    saveCPD();
    if (stbGetItem('ottplaylang') == cD(0x2a1)) _keyE = !![];
    _keysSymbol[0x1]['s'] = stbGetItem(cD(0x1fb)) == '_eng' ? '' : cD(0x31c), _keysSymbol[0x7]['s'] = cD(0x591), _keysSymbol[0x9]['s'] = 'Ok';
    !sNoColorKeys && (b(0x1, cD(0x543)), b(0x7, cD(0x4c0)), b(0x9, 'blue'));
    editPos = editvar[cD(0x1ed)];
    if (_keyCur > _keys[cD(0x1ed)] - 0xa) _keyCur = 0xe;
    var c = _keyCur;
    _setPunct(_keyP), _keyCur = c, showEdit();
}

function showEdit() {
    var cE = plw,
        a = $(cE(0x363)),
        b = a['width']() / 0xc,
        c = editCaption + cE(0x511);
    c += cE(0x3fd);
    for (var d = 0x0; d < _keys['length']; d++) {
        if (d % 0xa == 0x0) c += '<br/>';
        var e = _keysSymbol[_keys[cE(0x21d)](d)] != undefined ? _keysSymbol[_keys[cE(0x21d)](d)]['s'] : _keys[d];
        c += cE(0x48f) + d + cE(0x289) + d + cE(0x2a4) + b + cE(0x409) + b + cE(0x331) + b + cE(0x3e8) + e + '</div>';
    }
    a[cE(0x38e)](c)['show'](), _changeEdit(), $(cE(0x455) + _keyCur)['css']({
        'background-color': curColorB,
        'color': curColor
    }), listPodval[cE(0x282)] = btnDiv(keys[cE(0x3d6)], strRETURN, 'Close') + btnDiv(keys[cE(0x2fc)], '', _keysSymbol[0x0]['s'] ? _keyUp ? cE(0x3d0) : cE(0x4f4) : '', strTools) + btnDiv(keys[cE(0x442)], '', _keysSymbol[0x1]['s'] ? _keyE ? _('lang') : cE(0x4cf) : '', strFF) + btnDiv(keys['YELLOW'], '', cE(0x589), strRW) + btnDiv(keys[cE(0x565)], '', 'Ok', strPlayPause);
}

function clickKey(a) {
    var cF = plw;
    event[cF(0x4ca)](), $(cF(0x455) + _keyCur)[cF(0x364)]({
        'background-color': '',
        'color': ''
    }), _keyCur = a, $(cF(0x455) + _keyCur)['css']({
        'background-color': curColorB,
        'color': curColor
    }), editKey1(keys['ENTER']);
}

function editKey1(a) {
    var cH = plw;

    function b(d) {
        var cG = plb;
        $(cG(0x455) + _keyCur)[cG(0x364)]({
            'background-color': '',
            'color': ''
        }), _keyCur += d, $(cG(0x455) + _keyCur)['css']({
            'background-color': curColorB,
            'color': curColor
        });
    }
    switch (a) {
        case keys['UP']:
            b(_keyCur > 0x9 ? -0xa : _keys['length'] - 0xa);
            return;
        case keys[cH(0x48a)]:
            b(_keyCur < _keys['length'] - 0xa ? 0xa : -_keys['length'] + 0xa);
            return;
        case keys['LEFT']:
            b(_keyCur % 0xa > 0x0 ? -0x1 : 0x9);
            return;
        case keys[cH(0x427)]:
            b(_keyCur % 0xa < 0x9 ? 0x1 : -0x9);
            return;
        case keys['TOOLS']:
        case keys[cH(0x2fc)]:
            _keysSymbol[0x0]['a']();
            return;
        case keys['FF']:
        case keys[cH(0x442)]:
            _keysSymbol[0x1]['a']();
            return;
        case keys['RW']:
        case keys[cH(0x564)]:
            _keysSymbol[0x7]['a']();
            return;
        case keys[cH(0x21c)]:
        case keys[cH(0x29f)]:
        case keys[cH(0x565)]:
            _keysSymbol[0x9]['a']();
            return;
        case keys[cH(0x3e9)]:
            _keys['charCodeAt'](_keyCur) > 0x9 ? (editvar = editvar[cH(0x295)](0x0, editPos) + _keys[_keyCur] + editvar['substr'](editPos), editPos++, _changeEdit()) : _keysSymbol[_keys[cH(0x21d)](_keyCur)]['a']();
            return;
        case keys[cH(0x3ac)]:
        case keys[cH(0x3d6)]:
            clearInterval(cursorInterval), restoreCPD(), $('#listEdit')[cH(0x393)]();
            return;
        default:
            var c = _keys[cH(0x548)](String[cH(0x492)](a));
            c > -0x1 && (b(c - _keyCur), editKey1(keys[cH(0x3e9)]));
            return;
    }
}
var editKey = editKey1,
    showEditKey = showEditKey1;

function buttonsInfo() {
    var cI = plw,
        b = cI(0x496),
        c = cI(0x316),
        d = cI(0x476),
        e = cI(0x351),
        f = _(cI(0x223)),
        g = (strPRECH ? b + strPRECH + c + _(cI(0x596)) : '') + (strPip ? b + strPip + c + _('Call\x20PiP\x20/\x20PiP\x20exchange') : '') + (strInfo ? b + strInfo + c + _('Info\x20about\x20TV\x20program') : '') + (!sNoColorKeys || strTools ? '<br/>' + (!sNoColorKeys ? cI(0x5b4) : '') + (strTools ? cI(0x56e) + strTools + '</div>&nbsp;' : '') + '-\x20' + _(cI(0x3ed)) : '') + (strSETUP ? b + strSETUP + c + _(cI(0x522)) : '') + b + strENTER + c + _(cI(0x245)) + b + strRETURN + c + _(cI(0x274)) + b + strEXIT + c + _(cI(0x264)) + (!sNoColorKeys || strEPG ? cI(0x230) + (!sNoColorKeys ? '<div\x20class=\x22btn\x20red\x22>&nbsp;</div>&nbsp;' : '') + (strEPG ? '<div\x20class=\x22btn\x22>' + strEPG + cI(0x5be) : '') + '-\x20' + _(cI(0x28a)) : '') + (!sNoColorKeys ? cI(0x3d2) + c + _(cI(0x298)) : '') + (strAspect ? b + strAspect + c + _('Toggle\x20Aspect\x20Ratio') : '') + (strZoom ? b + strZoom + c + _('Toggle\x20Zoom\x20Mode') : '') + (strAudio ? b + strAudio + c + _(cI(0x4c9)) : '') + (strSubt ? b + strSubt + c + _(cI(0x462)) : '') + (typeof strStbButtons === 'undefined' ? '' : strStbButtons()) + cI(0x2cd) + _(cI(0x34f)) + (!sNoNumbersKeys ? b + '1</div>...<div\x20class=\x22btn\x22>0' + c + _(cI(0x3c8)) : '') + b + strSTOP + c + _(cI(0x40b)) + b + strPLAY + e + strPAUSE + e + '0' + c + _(cI(0x5b8)) + f + b + strPREV + c + _(cI(0x2d0)) + f + b + strRW + c + _(cI(0x49c)) + f + b + strFF + e + strNEXT + c + _(cI(0x30b)) + f + _('<br/><br/>In\x20archive\x20mode:<br/>') + b + strPLAY + e + strPAUSE + e + '0' + c + _('Pause/Play') + b + strSTOP + e + '8' + c + _(cI(0x2d7)) + b + strPREV + e + '2' + c + _(cI(0x1ee)) + b + strNEXT + e + '5' + c + _(cI(0x2c0)) + b + strRW + d + strFF + c + _('Back\x20/\x20Forward\x20for\x201\x20minute') + (!sNoNumbersKeys ? b + '1' + d + '3' + c + _('Back\x20/\x20Forward\x20for\x2015\x20seconds') : '') + (!sNoNumbersKeys ? b + '4' + d + '6' + c + _('Back\x20/\x20Forward\x20for\x203\x20minutes') : '') + (!sNoNumbersKeys ? b + '7' + d + '9' + c + _(cI(0x2cf)) : '') + b + strDOWN + e + strUP + c + _('Show\x20rewind\x20window');
    saveCPD(), listCaption[cI(0x282)] = _('Description\x20of\x20remote\x20control\x20buttons'), listPodval[cI(0x282)] = btnDiv(keys[cI(0x3d6)], strRETURN, cI(0x26c)), listDetail[cI(0x282)] = '', $(cI(0x2fb))['html'](cI(0x39c) + g + '</div>')[cI(0x592)]();
    var h = $('#_prd')[cI(0x497)]() + 0xa - $(cI(0x2fb))[cI(0x497)]();
    scrollUp(cI(0x2df), h, 0x2710), aboutKeyHandler = function(i) {
        var cJ = cI;
        i == keys[cJ(0x3d6)] && (restoreCPD(), $(cJ(0x2fb))[cJ(0x393)]()['text'](''), clearTimeout(detailTimer));;
        return !![];
    };
}
var parentPIN = '',
    parentAccess = ![];

function setParentAccess(a, b) {
    var cK = plw;
    parentAccess = a;
    if (parentAccess) setTimeout(function() {
        parentAccess = ![];
    }, 0x36ee80), b();
    else showShift(_(cK(0x556)));
}

function enterPinAndSetAccess(a) {
    var cL = plw;
    enterPinCode(_(cL(0x26f)), function(b) {
        if (!b) return;
        setParentAccess(b == parentPIN, a);
    });
}

function ifParentalAccess(a, b, c) {
    var cM = plw;
    try {
        if (sPSchannels && parentPIN != '*' && !parentAccess) {
            var d = cats[catsArray[a]],
                f = d[b];
            if (parentalArray[cM(0x548)](f) != -0x1) return enterPinAndSetAccess(c), !![];
        }
    } catch (g) {}
    return ![];
}

function ifParentalAccessChId(a, b) {
    var cN = plw;
    try {
        if (sPSchannels && parentPIN != '*' && !parentAccess) {
            if (parentalArray[cN(0x548)](a) != -0x1) return enterPinAndSetAccess(b), !![];
        }
    } catch (c) {}
    return ![];
}
var newPin;

function parentControlSetup() {
    var cR = plw;
    if (parentPIN != '*' && !parentAccess) {
        enterPinAndSetAccess(parentControlSetup);
        return;
    }

    function a() {
        var cP = plb;

        function c() {
            var cO = plb;
            stbSetItem('parentPIN', parentPIN);
            var d = 0x1;
            saveIfChanged(d++, cO(0x538), !![]), saveIfChanged(d++, cO(0x4c5), !![]);
            if (optIndexOf(selectProvaider) != -0x1) saveIfChanged(d++, cO(0x458), !![]);
            showShift(_('Settings\x20saved')), closeList(), optionsList(parentControlSetup);
        }
        if (parentPIN != '*' != (listArray[0x0][cP(0x3db)] == 0x1)) parentPIN != '*' ? (parentPIN = '*', c()) : enterPinCode(_('Set\x20parental\x20code'), function(d) {
            var cQ = cP;
            if (!d) return;
            newPin = d, enterPinCode(_(cQ(0x57d)), function(e) {
                if (!e) return;
                if (e != newPin) showShift(_('Wrong\x20parental\x20code\x20!!!'));
                else parentPIN = e, setParentAccess(!![], c);
            });
        });
        else c();
    }
    var b = [_('no'), _(cR(0x4b1))];
    listArray = [{
        'name': _(cR(0x4a0)),
        'val': parentPIN != '*' ? 0x1 : 0x0,
        'values': b
    }, {
        'name': _(cR(0x2a3)),
        'val': sPSchannels,
        'values': b
    }, {
        'name': _(cR(0x24b)),
        'val': sPSoptions,
        'values': b
    }, {
        'name': _('Protect\x20Change\x20Provider'),
        'val': sPSprovs,
        'values': b
    }, {
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }, {
        'name': cR(0x56e) + _(cR(0x2b4)) + cR(0x234),
        'val': 0x0,
        'values': a,
        'cur': ''
    }];
    if (optIndexOf(selectProvaider) == -0x1) listArray[cR(0x1f9)](0x3, 0x1);
    listCaption[cR(0x282)] = _(cR(0x4a0)), _setSetup(a, function() {
        optionsList(parentControlSetup);
    });
}
var optionsArr = [{
    'action': settingsInterface,
    'name': plw(0x4be)
}, {
    'action': settingsLists,
    'name': plw(0x206)
}, {
    'action': settingsChannels,
    'name': plw(0x3b8)
}, {
    'action': settingsInfobar,
    'name': 'Infobar\x20settings'
}, {
    'action': settingsButtons,
    'name': plw(0x370)
}, {
    'action': settingsMenu,
    'name': plw(0x59a)
}, {
    'action': parentControlSetup,
    'name': plw(0x4a0)
}, {
    'action': noSelProv
}, {
    'action': selectProvaider,
    'name': plw(0x345),
    'desc': plw(0x575)
}, {
    'action': edit_dealer,
    'name': plw(0x4ad)
}, {
    'action': settingsManage,
    'name': 'Manage\x20settings'
}, {
    'action': selectLang,
    'name': plw(0x566)
}];

function indexOfAction(a, b) {
    for (var c = 0x0; c < a['length']; c++)
        if (a[c]['action'] == b) return c;
    return -0x1;
}

function optIndexOf(a) {
    return indexOfAction(optionsArr, a);
}

function delOption(a) {
    var cS = plw,
        b = optIndexOf(a);
    if (b > -0x1) optionsArr[cS(0x1f9)](b, 0x1);
}

function addBtn2menu(a, b, c) {
    var cT = plw;
    if (!c) return;
    var d = indexOfAction(a, b);
    if (d > -0x1) listArray[d] = cT(0x56e) + c + cT(0x36b) + listArray[d];
}

function optionsList(a) {
    var cU = plw;
    if (sPSoptions && parentPIN != '*' && !parentAccess) {
        enterPinAndSetAccess(optionsList);
        return;
    }
    listArray = [], optionsArr[cU(0x5ce)](function(c) {
        var cV = cU;
        listArray[cV(0x55d)](_(c[cV(0x226)] || ''));
    });
    if (!sNoNumbersKeys) addBtn2menu(optionsArr, selectProvaider, '9');
    addBtn2menu(optionsArr, selectProvaider, strTools), selIndex = 0x0;
    if (typeof a !== cU(0x250)) {
        for (var b = 0x0; b < optionsArr[cU(0x1ed)]; b++)
            if (optionsArr[b][cU(0x3f6)] == a) selIndex = b;
    }
    getListItem = function(c, d) {
        var cW = cU;
        return cW(0x2a7) + c;
    }, detailListAction = function() {
        var cX = cU;
        listDetail['innerHTML'] = _(optionsArr[selIndex]['desc'] || optionsArr[selIndex]['name'] || '');
        if (optionsArr[selIndex][cX(0x3f6)] == noSelProv) nselprov = 0x0;
    }, listKeyHandler = function(c) {
        var cY = cU;
        switch (c) {
            case keys['RETURN']:
                popupList(optionsList);
                return !![];
            case keys[cY(0x3e9)]:
                if (optionsArr[selIndex]['action']) optionsArr[selIndex][cY(0x3f6)]();
                return !![];
            case keys['TOOLS']:
            case keys['N9']:
                if (optIndexOf(selectProvaider) > -0x1) selectProvaider();
                return !![];
        }
        return ![];
    }, listCaption[cU(0x282)] = _('Settings'), listPodval['innerHTML'] = btnDiv(keys['RETURN'], strRETURN, cU(0x26c)), $(cU(0x527))[cU(0x393)](), showPage();
};
var infoArr = [{
    'action': buttonsInfo,
    'name': 'Description\x20of\x20remote\x20control\x20buttons'
}, {
    'action': donate,
    'name': plw(0x5c4),
    'desc': plw(0x2cb)
}, {
    'action': nofun
}, {
    'action': pluginInfo,
    'name': plw(0x3e5),
    'desc': plw(0x33a)
}];

function infoList(a) {
    var cZ = plw;
    listArray = [], infoArr[cZ(0x5ce)](function(c) {
        var d0 = cZ;
        listArray[d0(0x55d)](_(c[d0(0x226)] || ''));
    });
    if (!sNoNumbersKeys) addBtn2menu(infoArr, pluginInfo, '2');
    addBtn2menu(infoArr, pluginInfo, strInfo), selIndex = 0x0;
    if (typeof a !== cZ(0x250)) {
        for (var b = 0x0; b < infoArr['length']; b++)
            if (infoArr[b]['action'] == a) selIndex = b;
    }
    getListItem = function(c, d) {
        return '&nbsp;&nbsp;' + c;
    }, detailListAction = function() {
        var d1 = cZ;
        listDetail[d1(0x282)] = _(infoArr[selIndex][d1(0x382)] || infoArr[selIndex][d1(0x226)] || '');
    }, listKeyHandler = function(c) {
        var d2 = cZ;
        switch (c) {
            case keys['RETURN']:
                popupList(infoList);
                return !![];
            case keys['ENTER']:
                if (infoArr[selIndex][d2(0x3f6)]) infoArr[selIndex][d2(0x3f6)]();
                return !![];
            case keys['N2']:
            case keys[d2(0x3f8)]:
                pluginInfo();
                return !![];
        }
        return ![];
    }, listCaption[cZ(0x282)] = _('Information'), listPodval[cZ(0x282)] = btnDiv(keys[cZ(0x3d6)], strRETURN, cZ(0x26c)), $('#listPopUp')['hide'](), showPage();
};

function popBuckets() {
    bucketsList(catIndex);
};

function popEpg() {
    epgList(catIndex, primaryIndex, ![]);
};

function popRecords() {
    recordsList(catIndex, primaryIndex, ![]);
}

function popMedia() {
    if (typeof getMediaArray == 'function') mediaList(null);
}

function popPrevProg() {
    closeList(), prevProg();
};

function popShift() {
    closeList(), shiftArchiveSelect(0x0);
};

function popPause() {
    closeList(), _doKey(keys['N0']);
}

function popStop() {
    var d3 = plw;
    closeList(), _doKey(keys[d3(0x34d)]);
}

function popTogglePip() {
    closeList(), togglePip();
};

function popStopPip() {
    pipIndex = null, stbStopPip(), closeList();
}

function restart() {
    var d4 = plw;
    stbStop(), window[d4(0x51e)][d4(0x3f7)] = window['location'][d4(0x3f7)], window[d4(0x51e)]['reload'](!![]);
}

function donate() {
    var d5 = plw,
        a = stbGetItem('ottplaylang') || '';
    if (a == d5(0x2a1)) a = '';
    $('#listAbout')[d5(0x3d9)]('')[d5(0x592)]()[d5(0x22f)](host + '/stbPlayer/donate' + a + d5(0x1eb), function(b, c, d) {
        var d6 = d5;
        if (c == 'error') $(d6(0x2fb))['load'](host + d6(0x4d3));
    }), aboutKeyHandler = function(b) {
        return ![];
    };
};

function nofun() {}

function noSelProv() {
    var d7 = plw;
    if (++nselprov < 0x7) return;
    if (sPSprovs && parentPIN != '*' && !parentAccess) {
        enterPinAndSetAccess(noSelProv);
        return;
    }
    var a = parseInt(stbGetItem('noSelProv')) || 0x0;
    confirmBox(a ? 'Show\x20providers?' : d7(0x2f0), function() {
        var d8 = d7;
        stbSetItem(d8(0x5a2), a ? 0x0 : 0x1), restart();
    }), nselprov = 0x0;
}

function noProvParam() {
    var d9 = plw;
    if (++nprovparams < 0x7) return;
    if (sPSoptions && parentPIN != '*' && !parentAccess) {
        enterPinAndSetAccess(noProvParam);
        return;
    }
    var a = parseInt(stbGetItem('noProvParam')) || 0x0;
    confirmBox(a ? 'Show\x20provider\x20settings?' : d9(0x2b0), function() {
        var da = d9;
        stbSetItem(da(0x2e7), a ? 0x0 : 0x1), restart();
    }), nprovparams = 0x0;
}

function clearAllsettings() {
    if (++_clearAll < 0x7) return;
    confirmBox('Clear\x20all\x20settings?', function() {
        try {
            stbClearAllItems();
        } catch (a) {};
        restart();
    }), _clearAll = 0x0;
}

function delPopup(a) {
    var db = plw,
        b = popupActions[db(0x548)](a);
    if (b === -0x1) return;
    popupArray['splice'](b, 0x1), popupDetail[db(0x1f9)](b, 0x1), popupActions[db(0x1f9)](b, 0x1);
}

function stbAudioTracksExists() {
    return !![];
}

function stbSubtitleExists() {
    return !![];
}
var popupArray = [plw(0x4e1), plw(0x52f), plw(0x4c9), plw(0x462), plw(0x596), plw(0x5b8), plw(0x587), 'Rewind', plw(0x558), plw(0x5c2), plw(0x3ad), 'Show\x20EPG\x20and\x20archive\x20for\x20channel', plw(0x396), 'Show\x20Media\x20Library', '', '', 'Settings', 'Restart\x20player', 'Exit\x20player', 'Information'],
    popupDetail = ['', '', '', '', '', '', '', 'Show\x20rewind\x20window', '', '', '', '', plw(0x4c6), '', '', '', '', '', '', ''],
    popupActions = [toggleAspectRatio, toggleZoom, toggleAudioTrack, toggleSubtitle, popPrevProg, popPause, popStop, popShift, popTogglePip, popStopPip, popBuckets, popEpg, popRecords, popMedia, noProvParam, nofun, optionsList, restart, exitPortal, infoList];

function popupList(a) {
    var dd = plw,
        b = 0x0,
        c = 0x0;

    function d(h, i) {
        var dc = plb;
        try {
            h = h['split']('/')[i ? 0x1 : 0x0][dc(0x5c0)]();
        } catch (j) {}
        return h;
    }
    if (typeof a === dd(0x250)) a = 0x0;
    selIndex = 0x0, listArray = [];
    var f = ![],
        g = -0x1;
    try {
        f = curList[primaryIndex];
    } catch (h) {}
    popupActions[dd(0x5ce)](function(j, k) {
        var de = dd;
        if (sHideMenus[de(0x548)](popupActions[k][de(0x226)]) != -0x1) return;
        var l = _(popupArray[k]);
        try {
            switch (j) {
                case toggleAudioTrack:
                    if (!f || !stbAudioTracksExists()) return;
                    else break;
                case toggleSubtitle:
                    if (!f || !stbSubtitleExists()) return;
                    else break;
                case popPause:
                    l = d(l, !stbIsPlaying());
                case popShift:
                case popRecords:
                    if (playType < 0x0 || !f || chanels[f][de(0x399)]) break;
                    else return;
                case popTogglePip:
                    if (sPipSize > 0x2) return;
                    l = d(l, pipIndex != null);
                    break;
                case popStopPip:
                    if (sPipSize > 0x2) return;
                    if (pipIndex == null) return;
                    else break;
                case popStop:
                    l = d(l, playType);
                    break;
                case popMedia:
                    if (typeof getMediaArray != de(0x34b)) return;
                    else break;
            }
        } catch (p) {}
        var m = _(popupDetail[k]) || l;
        g++;
        if (a == k || a == j) selIndex = g;
        if (!sNoNumbersKeys) {
            var o = '';
            switch (j) {
                case toggleAudioTrack:
                    o = '1';
                    break;
                case infoList:
                    o = '2';
                    break;
                case popPrevProg:
                    o = '3';
                    break;
                case popShift:
                    o = '4';
                    break;
                case popTogglePip:
                    o = '5';
                    break;
                case popStopPip:
                    o = '6';
                    break;
                case restart:
                    o = '8';
                    break;
                case optionsList:
                    o = '9';
                    break;
                case exitPortal:
                    o = '0';
                    break;
            }
            if (o) l = de(0x56e) + o + de(0x36b) + l;
        }
        if (!sNoColorKeys) {
            var o = '';
            switch (j) {
                case popBuckets:
                    o = 'blue';
                    break;
                case popEpg:
                    o = de(0x44b);
                    break;
                case popRecords:
                    o = 'green';
                    break;
                case popMedia:
                    o = de(0x296);
                    break;
            }
            if (o) l = '<div\x20class=\x22btn\x20' + o + de(0x4a5) + l;
        }
        var o = '';
        switch (j) {
            case infoList:
                o = strInfo;
                break;
            case popPrevProg:
                o = strPRECH;
                break;
            case popTogglePip:
                o = strPip;
                break;
            case toggleAudioTrack:
                o = strAudio;
                break;
            case toggleSubtitle:
                o = strSubt;
                break;
            case toggleZoom:
                o = strZoom;
                break;
            case toggleAspectRatio:
                o = strAspect;
                break;
            case optionsList:
                o = strTools;
                break;
            case popPause:
                o = strPlayPause;
                break;
            case popStop:
                o = strSTOP;
                break;
        }
        if (o) l = de(0x56e) + o + de(0x36b) + l;
        listArray[de(0x55d)]({
            'name': l,
            'desc': m,
            'action': j
        });
        if (j == noProvParam) b = listArray[de(0x1ed)] - 0x1;
        if (j == optionsList) c = listArray['length'];
    }), getListItem = function(j, k) {
        var df = dd;
        return df(0x2a7) + j['name'];
    }, detailListAction = function() {
        var dg = dd;
        listDetail[dg(0x282)] = listArray[selIndex][dg(0x382)];
        if (listArray[selIndex][dg(0x3f6)] == noProvParam) nprovparams = 0x0;
    }, listKeyHandler = function(i) {
        var dh = dd;
        switch (i) {
            case keys[dh(0x3d6)]:
                closeList();
                return !![];
            case keys[dh(0x3e9)]:
                if (sPSoptions && b && c && selIndex > b && selIndex < c && parentPIN != '*' && !parentAccess) return enterPinAndSetAccess(listArray[selIndex][dh(0x3f6)]), !![];
                listArray[selIndex][dh(0x3f6)]();
                return !![];
            case keys['ZOOM']:
                toggleZoom();
                return !![];
            case keys[dh(0x219)]:
                toggleAspectRatio();
                return !![];
            case keys['N1']:
            case keys[dh(0x5d1)]:
                toggleAudioTrack();
                return !![];
            case keys[dh(0x5c9)]:
                toggleSubtitle();
                return !![];
            case keys['N9']:
            case keys[dh(0x5bb)]:
                optionsList();
                return !![];
            case keys[dh(0x560)]:
            case keys['RED']:
                epgList(catIndex, primaryIndex, ![]);
                return !![];
            case keys[dh(0x442)]:
                recordsList(catIndex, primaryIndex, ![]);
                return !![];
            case keys[dh(0x565)]:
                bucketsList(catIndex);
                return !![];
            case keys['YELLOW']:
                if (typeof getMediaArray == dh(0x34b)) mediaList(null);
                return !![];
            case keys['N3']:
            case keys[dh(0x291)]:
                popPrevProg();
                return !![];
            case keys['N4']:
                popShift();
                return !![];
            case keys[dh(0x29f)]:
            case keys[dh(0x21c)]:
                popPause();
                return !![];
            case keys[dh(0x34d)]:
                popStop();
                return !![];
            case keys['N5']:
            case keys[dh(0x460)]:
                popTogglePip();
                return !![];
            case keys['N6']:
                popStopPip();
                return !![];
            case keys['N2']:
            case keys['INFO']:
                infoList();
                return !![];
            case keys['N8']:
                restart();
                return !![];
            case keys['N0']:
                exitPortal();
                return !![];
        }
        return ![];
    }, listCaption[dd(0x282)] = _(dd(0x255)), listPodval[dd(0x282)] = btnDiv(keys[dd(0x3d6)], strRETURN, dd(0x26c)), $(dd(0x527))[dd(0x393)](), showPage();
}
var sNoSmall = 0x0,
    sStopPlay = 0x0,
    sPipSize = 0x0,
    sPipPos = 0x0,
    sPageSize = 0x19,
    sFontShift = 0x4,
    sFont = 0x1,
    sArrowFun = 0x0,
    sRewFun = 0x0,
    sPNFun = 0x0,
    sRfun = 0xa,
    sGfun = 0x0,
    sYfun = 0x1,
    sBfun = 0x9,
    sALfun = 0x0,
    sARfun = 0x0,
    sAUfun = 0x0,
    sADfun = 0x0,
    sRWfun = 0x0,
    sFFfun = 0x0,
    sPREVfun = 0x0,
    sNEXTfun = 0x0,
    sEfun = 0x0,
    sOkfun = 0x0,
    s13dur = 0x0,
    s46dur = 0x0,
    s79dur = 0x0,
    sNoColorKeys = 0x0,
    sNoNumbersKeys = 0x0,
    sTimezone = 0x0,
    sSleepTimeout = 0x0,
    sVolumeStep = 0x5,
    sInfoTimeout = 0x5,
    sInfoSlide = 0x1,
    sInfoSwitch = 0x1,
    sInfoChange = 0x1,
    sInfoRew = 0x1,
    sThumbnail = 0x1,
    sOsdOpacity = 0x7,
    sListPos = 0x0,
    sSHLcolSel = '240,25',
    eSHLcolSel = '',
    sSHLcolor = plw(0x535),
    eSHLcolor = '',
    sSHLcolorB = plw(0x2b5),
    eSHLcolorB = '',
    sEditor = 0x0,
    sGrapI = 0x0,
    sShowNum = 0x1,
    sShowPikon = 0x1,
    sShowName = 0x1,
    sShowProgress = 0x1,
    sShowArchive = 0x1,
    sShowScroll = 0x1,
    sShowDescr = 0x1,
    sShowProgram = 0x1,
    sPreview = 0x0,
    sNextCount = 0x0,
    sNextCountL = 0x1,
    sFavorites = 0x0,
    sPermanentTime = 0x0,
    s10resum = 0x1,
    sPrevCount = 0x2,
    sMedCount = 0x2,
    sPrevProgram = 0x1,
    sPSchannels = 0x1,
    sPSoptions = 0x0,
    sPSprovs = 0x0,
    sHDMIsupport = 0x0,
    sAutorun = 0x0,
    sPlayers = 0x0,
    sBufSize = 0x0,
    sTMDb = 0x1;

function setPipPosBuf() {
    var di = plw;
    if (typeof setPipPos !== di(0x34b) || sPipSize > 0x2) return;
    var a = Math[di(0x463)](getWidthK(), getHeightK()),
        b = [{
            'x': 0x100,
            'y': 0x90
        }, {
            'x': 0x180,
            'y': 0xd8
        }, {
            'x': 0x200,
            'y': 0x120
        }],
        c = {
            'width': b[sPipSize]['x'] * a,
            'height': b[sPipSize]['y'] * a,
            'right': sPipPos < 0x2 ? 0x14 * a : di(0x50b),
            'left': sPipPos > 0x1 ? 0x14 * a : di(0x50b),
            'top': sPipPos == 0x0 || sPipPos == 0x3 ? 0x14 * a : di(0x50b),
            'bottom': sPipPos == 0x1 || sPipPos == 0x2 ? 0x14 * a : di(0x50b)
        };
    $(di(0x5ac))[di(0x364)](c), setPipPos(c);
}

function saveIfChanged(a, b, c) {
    var dj = plw;
    if (c === undefined) c = ![];
    if (window[b] == listArray[a][dj(0x3db)]) return;
    window[b] = listArray[a][dj(0x3db)];
    if (c) stbSetItem(b, window[b]);
    else providerSetItem(b, window[b]);
}

function settingsInterface() {
    var dl = plw;

    function a() {
        var dk = plb,
            d = 0x0;
        saveIfChanged(d++, dk(0x450), !![]);
        typeof stbPlayPip === dk(0x34b) && (saveIfChanged(d++, 'sPipSize', !![]), saveIfChanged(d++, dk(0x43c), !![]));
        saveIfChanged(d++, dk(0x526), !![]), saveIfChanged(d++, dk(0x2e9), !![]), saveIfChanged(d++, dk(0x327), !![]);
        if (typeof stbSetOsdOpacity === dk(0x34b)) saveIfChanged(d++, dk(0x45d), !![]);
        if (typeof stbGetVolume === 'function') sVolumeStep != listArray[d++][dk(0x3db)] + 0x3 && (sVolumeStep = listArray[d - 0x1][dk(0x3db)] + 0x3, stbSetItem(dk(0x519), sVolumeStep));
        d++;
        sSHLcolor != eSHLcolor && (sSHLcolor = eSHLcolor, stbSetItem(dk(0x4bb), sSHLcolor));
        d++;
        sSHLcolSel != eSHLcolSel && (sSHLcolSel = eSHLcolSel, stbSetItem(dk(0x57f), sSHLcolSel));
        d++;
        sSHLcolorB != eSHLcolorB && (sSHLcolorB = eSHLcolorB, stbSetItem(dk(0x346), sSHLcolorB));
        saveIfChanged(d++, dk(0x2de), !![]), saveIfChanged(d++, 'sGrapI', !![]), saveIfChanged(d++, dk(0x4e8), !![]), saveIfChanged(d++, 'sPrevCount', !![]), saveIfChanged(d++, dk(0x4fe), !![]);
        if (typeof getMediaArray == dk(0x34b)) saveIfChanged(d++, dk(0x4c1), !![]);
        saveIfChanged(d++, dk(0x4c7), !![]);
        if (typeof showEditKey2 === dk(0x34b)) saveIfChanged(d++, dk(0x3c7), !![]);
        if (typeof stbPlayers !== 'undefined' && Array[dk(0x4fd)](stbPlayers)) saveIfChanged(d++, dk(0x56a));
        if (typeof stbSetBuffer === 'function') saveIfChanged(d++, dk(0x4bd), !![]);
        setTimezone(), setFontSize(), setListPos(), setColor(), setEditor(), setPipPosBuf();
        if (typeof setPlayer === dk(0x34b)) setPlayer();
        if (typeof setAutorun === dk(0x34b)) setAutorun();
        if (typeof stbSetBuffer === dk(0x34b)) stbSetBuffer();
        showShift(_(dk(0x513))), closeList(), optionsList(settingsInterface);
    }
    var b = [_('no'), _(dl(0x4b1))],
        c = arrTimezone[dl(0x336)]();
    c[0x0] = _(c[0x0]), listArray = [{
        'name': _('Black\x20screen\x20while\x20switching\x20the\x20channel'),
        'val': sStopPlay,
        'values': b
    }, {
        'name': _(dl(0x3d5)),
        'val': sPipSize,
        'values': [_(dl(0x43b)), _('medium'), _(dl(0x5cd)), _(dl(0x365))]
    }, {
        'name': _(dl(0x540)),
        'val': sPipPos,
        'values': [_(dl(0x537)), _(dl(0x3d1)), _('left-bottom'), _(dl(0x284))]
    }, {
        'name': _(dl(0x59b)),
        'val': sFont,
        'values': ['<span\x20style=\x22font-family:Helvetica,\x20Arial,\x20sans-serif;\x22>' + _(dl(0x2f6)) + dl(0x4e3), dl(0x5bd), dl(0x30d), dl(0x357), dl(0x43d), dl(0x584), dl(0x479)]
    }, {
        'name': _(dl(0x53c)),
        'val': sTimezone,
        'values': c
    }, {
        'name': _(dl(0x26a)),
        'val': sSleepTimeout,
        'values': [_(dl(0x365)), _(dl(0x344)), _(dl(0x481)), _('2\x20hours'), _(dl(0x523))]
    }, {
        'name': _(dl(0x2ad)),
        'val': sOsdOpacity,
        'values': [dl(0x213), '90%', '80%', dl(0x30a), dl(0x2ae), dl(0x277), '40%', dl(0x3b9), '20%', dl(0x5b5), '0%']
    }, {
        'name': _(dl(0x503)),
        'val': sVolumeStep - 0x3,
        'values': [0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa]
    }, {
        'name': _(dl(0x218)),
        'val': sSHLcolor,
        'values': colorDialog,
        'cur': _(dl(0x28b))
    }, {
        'name': _(dl(0x486)),
        'val': sSHLcolSel,
        'values': selColorDialog,
        'cur': _(dl(0x28b))
    }, {
        'name': _(dl(0x574)),
        'val': sSHLcolorB,
        'values': backColorDialog,
        'cur': _(dl(0x28b))
    }, {
        'name': _(dl(0x4ea)),
        'val': sPermanentTime,
        'values': [_('no'), _('yes'), _(dl(0x5b9))]
    }, {
        'name': _('Graphical\x20indication'),
        'val': sGrapI,
        'values': b
    }, {
        'name': _(dl(0x232)),
        'val': s10resum,
        'values': b
    }, {
        'name': _('Remember\x20previous\x20channels'),
        'val': sPrevCount,
        'values': [0x1, 0x5, 0xa, 0xf, 0x14]
    }, {
        'name': _(dl(0x32c)),
        'val': sPrevProgram,
        'values': b
    }, {
        'name': _(dl(0x2e1)),
        'val': sMedCount,
        'values': [_('no'), 0xa, 0x14, 0x1e, 0x28, 0x32]
    }, {
        'name': _('TMDb') + strNew,
        'val': sTMDb,
        'values': b
    }, {
        'name': _(dl(0x5ae)),
        'val': sEditor,
        'values': [_(dl(0x49a)), _(dl(0x3a2))]
    }, {
        'name': _('Type\x20of\x20player\x20for\x20streaming'),
        'val': sPlayers
    }, {
        'name': _('Buffer\x20Size,\x20s'),
        'val': sBufSize
    }, {
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }, {
        'name': dl(0x56e) + _(dl(0x2b4)) + '</div>',
        'val': 0x0,
        'values': a,
        'cur': ''
    }];
    if (typeof stbSetBuffer !== dl(0x34b)) listArray['splice'](0x14, 0x1);
    else listArray[0x14][dl(0x41c)] = stbBufferSizes;
    if (typeof stbPlayers !== dl(0x250) && Array[dl(0x4fd)](stbPlayers)) listArray[0x13][dl(0x41c)] = stbPlayers;
    else listArray[dl(0x1f9)](0x13, 0x1);
    if (typeof showEditKey2 !== dl(0x34b)) listArray[dl(0x1f9)](0x12, 0x1);
    if (typeof getMediaArray !== 'function') listArray[dl(0x1f9)](0x10, 0x1);
    if (typeof stbGetVolume !== dl(0x34b)) listArray[dl(0x1f9)](0x7, 0x1);
    if (typeof stbSetOsdOpacity !== dl(0x34b)) listArray[dl(0x1f9)](0x6, 0x1);
    if (typeof stbPlayPip !== dl(0x34b)) listArray['splice'](0x1, 0x2);
    eSHLcolor = sSHLcolor, eSHLcolorB = sSHLcolorB, eSHLcolSel = sSHLcolSel, listCaption[dl(0x282)] = _(dl(0x4be)), _setSetup(a, function() {
        optionsList(settingsInterface);
    });
}

function settingsInfobar() {
    var dn = plw;

    function a() {
        var dm = plb,
            c = 0x0;
        sInfoTimeout != listArray[c++][dm(0x3db)] + 0x3 && (sInfoTimeout = listArray[c - 0x1][dm(0x3db)] + 0x3, stbSetItem(dm(0x580), sInfoTimeout)), saveIfChanged(c++, dm(0x3fb), !![]), saveIfChanged(c++, dm(0x53a), !![]), saveIfChanged(c++, 'sInfoChange', !![]), saveIfChanged(c++, dm(0x5a4), !![]), saveIfChanged(c++, dm(0x4d7), !![]), showShift(_(dm(0x513))), closeList(), optionsList(settingsInfobar);
    }
    var b = [_('no'), _('yes')];
    listArray = [{
        'name': _('Infobar\x20display\x20timeout,\x20s'),
        'val': sInfoTimeout - 0x3,
        'values': [0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa]
    }, {
        'name': _('\x22Sliding\x22\x20infobar'),
        'val': sInfoSlide,
        'values': b
    }, {
        'name': _(dn(0x3fc)),
        'val': sInfoSwitch,
        'values': b
    }, {
        'name': _(dn(0x297)),
        'val': sInfoChange,
        'values': b
    }, {
        'name': _(dn(0x2eb)),
        'val': sInfoRew,
        'values': b
    }, {
        'name': _(dn(0x3a3)),
        'val': sThumbnail,
        'values': b
    }, {
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }, {
        'name': dn(0x56e) + _(dn(0x2b4)) + dn(0x234),
        'val': 0x0,
        'values': a,
        'cur': ''
    }], listCaption[dn(0x282)] = _(dn(0x380)), _setSetup(a, function() {
        optionsList(settingsInfobar);
    });
}

function settingsLists() {
    var dq = plw;

    function a() {
        var dp = plb,
            c = 0x0;
        saveIfChanged(c++, dp(0x4ab), !![]), sPageSize != listArray[c++][dp(0x3db)] + 0xa && (sPageSize = listArray[c - 0x1][dp(0x3db)] + 0xa, stbSetItem(dp(0x278), sPageSize)), saveIfChanged(c++, dp(0x3ab), !![]), saveIfChanged(c++, dp(0x262), !![]), saveIfChanged(c++, dp(0x288), !![]), setFontSize(), setListPos(), setColor(), showShift(_(dp(0x513))), closeList(), optionsList(settingsLists);
    }
    var b = [_('no'), _(dq(0x4b1))];
    listArray = [{
        'name': _('Not\x20reduce\x20video\x20when\x20showing\x20the\x20list\x20(bugfix)'),
        'val': sNoSmall,
        'values': b
    }, {
        'name': _(dq(0x391)),
        'val': sPageSize - 0xa,
        'values': [0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e]
    }, {
        'name': _(dq(0x59d)),
        'val': sFontShift,
        'values': ['0', 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e]
    }, {
        'name': _(dq(0x2e8)),
        'val': sListPos,
        'values': [_(dq(0x51c)), _(dq(0x47a))]
    }, {
        'name': _(dq(0x266)),
        'val': sShowScroll,
        'values': b
    }, {
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }, {
        'name': '<div\x20class=\x22btn\x22>' + _('Save\x20Settings') + dq(0x234),
        'val': 0x0,
        'values': a,
        'cur': ''
    }], listCaption['innerHTML'] = _(dq(0x206)), _setSetup(a, function() {
        optionsList(settingsLists);
    });
}

function settingsChannels() {
    var ds = plw;

    function a() {
        var dr = plb,
            c = 0x0;
        saveIfChanged(c++, dr(0x54c)), saveIfChanged(c++, 'sShowPikon'), saveIfChanged(c++, dr(0x2c4)), saveIfChanged(c++, dr(0x510)), saveIfChanged(c++, dr(0x24c)), saveIfChanged(c++, dr(0x4a2)), saveIfChanged(c++, dr(0x2d4)), saveIfChanged(c++, 'sPreview'), sNextCountL != listArray[c++][dr(0x3db)] && (sNextCountL = listArray[c - 0x1]['val'], sNextCount = sNextCountL ? sNextCountL - 0x1 : 0x0, providerSetItem(dr(0x23a), sNextCountL - 0x1)), saveIfChanged(c++, 'sFavorites', !![]), showShift(_('Settings\x20saved')), closeList(), optionsList(settingsChannels);
    }
    var b = [_('no'), _(ds(0x4b1))];
    listArray = [{
        'name': _(ds(0x57a)),
        'val': sShowNum,
        'values': b
    }, {
        'name': _('Show\x20picons\x20in\x20channel\x20list'),
        'val': sShowPikon,
        'values': [_('no'), ds(0x4f2), ds(0x2ed)]
    }, {
        'name': _(ds(0x466)),
        'val': sShowName,
        'values': b
    }, {
        'name': _(ds(0x495)),
        'val': sShowProgram,
        'values': b
    }, {
        'name': _(ds(0x2be)),
        'val': sShowProgress,
        'values': b
    }, {
        'name': _(ds(0x27e)),
        'val': sShowArchive,
        'values': b
    }, {
        'name': _(ds(0x261)),
        'val': sShowDescr,
        'values': b
    }, {
        'name': _(ds(0x553)),
        'val': sPreview,
        'values': [_('no'), _(ds(0x48d)), _(ds(0x482)) + strENTER]
    }, {
        'name': _(ds(0x45a)),
        'val': sNextCountL,
        'values': [_('no'), 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa]
    }, {
        'name': _('Channel\x20list\x20editing\x20style'),
        'val': sFavorites != -0x1 ? sFavorites : nofun,
        'values': sFavorites != -0x1 ? [_(ds(0x563)), _('\x22Favorites\x22')] : ds(0x33f) + _('\x22Favorites\x22') + '</span>'
    }, {
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }, {
        'name': '<div\x20class=\x22btn\x22>' + _('Save\x20Settings') + ds(0x234),
        'val': 0x0,
        'values': a,
        'cur': ''
    }], listCaption[ds(0x282)] = _(ds(0x3b8)), _setSetup(a, function() {
        optionsList(settingsChannels);
    });
}

function settingsButtons() {
    var du = plw;

    function a() {
        var dt = plb,
            q = 0x0;
        saveIfChanged(q++, 'sArrowFun', !![]);
        if (keys['RW']) saveIfChanged(q++, dt(0x22c), !![]);
        if (keys['PREV']) saveIfChanged(q++, 'sPNFun', !![]);
        saveIfChanged(q++, dt(0x5c3), !![]), saveIfChanged(q++, 'sARfun', !![]), saveIfChanged(q++, dt(0x47b), !![]), saveIfChanged(q++, dt(0x432), !![]);
        if (keys['RW']) saveIfChanged(q++, dt(0x4eb), !![]);
        if (keys['RW']) saveIfChanged(q++, dt(0x388), !![]);
        if (keys[dt(0x2f3)]) saveIfChanged(q++, dt(0x2f2), !![]);
        if (keys[dt(0x2f3)]) saveIfChanged(q++, 'sNEXTfun', !![]);
        !sNoColorKeys && (saveIfChanged(q++, dt(0x301), !![]), saveIfChanged(q++, dt(0x376), !![]), saveIfChanged(q++, dt(0x411), !![]), saveIfChanged(q++, dt(0x385), !![])), saveIfChanged(q++, dt(0x4ff), !![]), saveIfChanged(q++, dt(0x4f5), !![]), !sNoNumbersKeys && (listArray[q][dt(0x3db)] = l[listArray[q][dt(0x3db)]], saveIfChanged(q++, dt(0x268), !![]), listArray[q]['val'] = l[listArray[q][dt(0x3db)]], saveIfChanged(q++, dt(0x569), !![]), listArray[q]['val'] = l[listArray[q][dt(0x3db)]], saveIfChanged(q++, 's79dur', !![])), saveIfChanged(q++, dt(0x5c1), !![]), saveIfChanged(q++, dt(0x3bc), !![]), showShift(_(dt(0x513))), closeList(), optionsList(settingsButtons);
    }
    var b = [_('no'), _(du(0x4b1))],
        c = 'Behavior\x20of\x20%1/%2\x20buttons\x20in\x20lists',
        d = du(0x56c),
        e = du(0x2a0),
        f = du(0x53e),
        g = f + '\x22>',
        h = du(0x234),
        i = '\x22>&nbsp;' + h,
        j = [_(du(0x444)), _(du(0x2d9)), du(0x34e), 'neutrino'],
        k = [_('Records'), _(du(0x255)), _(du(0x51b)), _('Rewind'), _('Info'), _(du(0x5db)), _(du(0x204)), du(0x33d), _('Close\x20PiP'), _(du(0x512)), _('EPG'), _(du(0x52d)), _('Joystick'), 'V+', 'V-', 'P+', 'P-', _(du(0x484)), du(0x324) + _(du(0x483))['trim'](), du(0x2a9) + _(du(0x483))['trim'](), _(du(0x5a8)), _(du(0x292))],
        l = [0x5, 0xa, 0xf, 0x14, 0x1e, 0x3c, 0x78, 0xb4, 0xf0, 0x12c, 0x258, 0x384, 0x4b0, 0x708, 0xe10],
        m = [],
        n = l[du(0x548)](s13dur),
        o = l[du(0x548)](s46dur),
        p = l[du(0x548)](s79dur);
    if (typeof stbToggleAspectRatio !== du(0x34b)) k[0x5] = du(0x3ec);
    if (typeof stbToggleAudioTrack !== 'function') k[0x6] = '@@@';
    typeof stbPlayPip !== du(0x34b) && (k[0x7] = du(0x3ec), k[0x8] = du(0x3ec));
    typeof stbGetVolume !== 'function' && (k[0xd] = '@@@', k[0xe] = du(0x3ec), j[0x1] = du(0x3ec));
    if (typeof stbToggleSubtitle !== du(0x34b)) k[0x11] = du(0x3ec);
    l[du(0x5ce)](function(q) {
        var dv = du;
        m[dv(0x55d)](step2text(q)[dv(0x295)](0x2)[dv(0x5c0)]());
    }), listArray = [{
        'name': _(c, g + strLEFT + h, g + strRIGHT + h),
        'val': sArrowFun,
        'values': j
    }, {
        'name': _(c, g + strRW + h, g + strFF + h),
        'val': sRewFun,
        'values': [_('paging'), du(0x34e), du(0x20f)]
    }, {
        'name': _(c, g + strPREV + h, g + strNEXT + h),
        'val': sPNFun,
        'values': [_('paging'), du(0x34e), 'neutrino', _(du(0x586))]
    }, {
        'name': _(d, g + strLEFT + h),
        'val': sALfun,
        'values': k
    }, {
        'name': _(d, g + strRIGHT + h),
        'val': sARfun,
        'values': k
    }, {
        'name': _(d, g + strUP + h),
        'val': sAUfun,
        'values': k
    }, {
        'name': _(d, g + strDOWN + h),
        'val': sADfun,
        'values': k
    }, {
        'name': _(d, g + strRW + h),
        'val': sRWfun,
        'values': k
    }, {
        'name': _(d, g + strFF + h),
        'val': sFFfun,
        'values': k
    }, {
        'name': _(d, g + strPREV + h),
        'val': sPREVfun,
        'values': k
    }, {
        'name': _(d, g + strNEXT + h),
        'val': sNEXTfun,
        'values': k
    }, {
        'name': _(d, f + du(0x1f5) + i),
        'val': sRfun,
        'values': k
    }, {
        'name': _(d, f + du(0x405) + i),
        'val': sGfun,
        'values': k
    }, {
        'name': _(d, f + du(0x3be) + i),
        'val': sYfun,
        'values': k
    }, {
        'name': _(d, f + du(0x5ad) + i),
        'val': sBfun,
        'values': k
    }, {
        'name': _(d, g + strRETURN + h),
        'val': sEfun,
        'values': [_(du(0x467)), _(du(0x3b6)), _('Joystick'), _('Menu'), _(du(0x51b))]
    }, {
        'name': _(du(0x39e), g + strENTER + h),
        'val': sOkfun,
        'values': [_(du(0x560)), _(du(0x5af))]
    }, {
        'name': _(e, g + 0x1 + h, g + 0x3 + h),
        'val': n,
        'values': m
    }, {
        'name': _(e, g + 0x4 + h, g + 0x6 + h),
        'val': o,
        'values': m
    }, {
        'name': _(e, g + 0x7 + h, g + 0x9 + h),
        'val': p,
        'values': m
    }, {
        'name': _('Remote\x20(color\x20buttons\x20N/A)'),
        'val': sNoColorKeys,
        'values': b
    }, {
        'name': _(du(0x4b8)),
        'val': sNoNumbersKeys,
        'values': b
    }, {
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }, {
        'name': g + _('Save\x20Settings') + h,
        'val': 0x0,
        'values': a,
        'cur': ''
    }];
    if (sNoNumbersKeys) listArray['splice'](0x11, 0x3);
    if (sNoColorKeys) listArray[du(0x1f9)](0xb, 0x4);
    if (!keys['PREV']) listArray[du(0x1f9)](0x9, 0x2);
    if (!keys['RW']) listArray[du(0x1f9)](0x7, 0x2);
    if (!keys[du(0x2f3)]) listArray[du(0x1f9)](0x2, 0x1);
    if (!keys['RW']) listArray[du(0x1f9)](0x1, 0x1);
    listCaption[du(0x282)] = _(du(0x370)), _setSetup(a, function() {
        optionsList(settingsButtons);
    });
}
var sHideMenus = [];

function settingsMenu() {
    var dx = plw;

    function a() {
        var dw = plb;
        sHideMenus = [];
        for (var d = 0x0; d < popupActions[dw(0x548)](noProvParam); d++) {
            if (listArray[d][dw(0x3db)]) sHideMenus[dw(0x55d)](popupActions[d][dw(0x226)]);
        }
        stbSetItem(dw(0x5cf), sHideMenus[dw(0x20c)](',')), showShift(_('Settings\x20saved')), optionsList(settingsMenu);
    }
    var b = [_('yes'), _('no')];
    listArray = [];
    for (var c = 0x0; c < popupActions[dx(0x548)](noProvParam); c++) {
        listArray[dx(0x55d)]({
            'name': _(popupArray[c]),
            'val': sHideMenus[dx(0x548)](popupActions[c][dx(0x226)]) == -0x1 ? 0x0 : 0x1,
            'values': b
        });
    }
    listArray['push']({
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }), listArray[dx(0x55d)]({
        'name': '<div\x20class=\x22btn\x22>' + _(dx(0x2b4)) + '</div>',
        'val': 0x0,
        'values': a,
        'cur': ''
    }), listCaption[dx(0x282)] = _(dx(0x3aa)), _setSetup(a, function() {
        optionsList(settingsMenu);
    });
}

function settingsManage() {
    var dy = plw;

    function a() {
        confirmBox('Clear\x20all\x20settings?', function() {
            try {
                stbClearAllItems();
            } catch (b) {};
            restart();
        });
    }
    listArray = [{
        'action': sendSettings,
        'name': _('Save\x20settings')
    }, {
        'action': loadSettings,
        'name': _('Load\x20settings')
    }, {
        'action': nofun,
        'name': ''
    }, {
        'action': a,
        'name': _(dy(0x4cc))
    }, {
        'action': nofun,
        'name': ''
    }, {
        'action': edit_dealer,
        'name': _('Enter\x20Provider\x20Code')
    }, {
        'action': edit_dealer_remote,
        'name': _(dy(0x50e))
    }];
    if (typeof stbClearAllItems !== 'function') listArray[dy(0x1f9)](0x2, 0x2);
    if (typeof stbGetAllItems !== dy(0x34b)) listArray[dy(0x1f9)](0x0, 0x1);
    if (typeof loadOpt === dy(0x34b)) listArray[dy(0x1f9)](0x0, 0x0, {
        'action': loadOpt,
        'name': _(dy(0x271))
    });
    if (typeof saveOpt === dy(0x34b)) listArray[dy(0x1f9)](0x0, 0x0, {
        'action': saveOpt,
        'name': _(dy(0x350))
    });
    selIndex = 0x0, getListItem = function(b, c) {
        var dz = dy;
        return dz(0x2a7) + b[dz(0x226)];
    }, detailListAction = function() {
        var dA = dy;
        listDetail[dA(0x282)] = _(listArray[selIndex][dA(0x382)] || listArray[selIndex][dA(0x226)] || '');
    }, listKeyHandler = function(b) {
        var dB = dy;
        switch (b) {
            case keys[dB(0x3d6)]:
                optionsList(settingsManage);
                return !![];
            case keys[dB(0x3e9)]:
                if (listArray[selIndex][dB(0x3f6)]) listArray[selIndex][dB(0x3f6)]();
                return !![];
        }
        return ![];
    }, listCaption[dy(0x282)] = _('Manage\x20settings'), listPodval[dy(0x282)] = btnDiv(keys['RETURN'], strRETURN, dy(0x26c)), $(dy(0x527))[dy(0x393)](), showPage();
}
var swopUrl = plw(0x58f);

function sendSettings() {
    var dD = plw;

    function a() {
        var dC = plb;
        clearTimeout(b), $('#listAbout')[dC(0x393)]();
    }
    var b = setTimeout(a, 0x927c0);
    $('#listAbout')[dD(0x38e)](dD(0x378) + _(dD(0x4ef)) + dD(0x5bc))['show'](), aboutKeyHandler = function(e) {
        var dE = dD;
        if (e == keys[dE(0x3d6)] || e == keys['EXIT']) a();
        return !![];
    };
    var c = '<?xml\x20version=\x221.0\x22\x20encoding=\x22UTF-8\x22?>\x0a<!DOCTYPE\x20properties\x20SYSTEM\x20\x22http://java.sun.com/dtd/properties.dtd\x22>\x0a<properties>\x0a<comment>OTT-Play\x20Preferences</comment>',
        d = stbGetAllItems();
    for (prop in d) {
        if (hasOwnProperty['call'](d, prop)) c += dD(0x437) + prop + '\x22>' + d[prop] + dD(0x469);
    }
    c += dD(0x554), $[dD(0x30e)]({
        'url': dD(0x273) + swopUrl + dD(0x38f),
        'data': {
            'c': dD(0x582),
            'd': c
        },
        'type': dD(0x32d),
        'timeout': 0x2710,
        'cache': ![],
        'success': function(e) {
            var dF = dD;
            $('#listAbout')[dF(0x38e)](dF(0x420) + _(dF(0x2c5)) + '<br/><br/>' + _(dF(0x49f)) + '<br/><span\x20style=\x22font-size:larger;color:' + curColor + '\x22>' + swopUrl + dF(0x248) + _(dF(0x417)) + dF(0x20d) + curColor + '\x22>' + e[dF(0x311)] + dF(0x46c) + _(dF(0x3e1)) + dF(0x511) + dF(0x488) + swopUrl + '/?' + e[dF(0x311)] + dF(0x2c2) + dF(0x234));
        },
        'error': function(e) {
            var dG = dD;
            $(dG(0x2fb))[dG(0x38e)](dG(0x2dc) + e[dG(0x279)] + dG(0x234));
        }
    });
}

function loadSettings() {
    var dL = plw,
        a = ![],
        b;

    function c() {
        var dH = plb;
        clearTimeout(d), a = !![], $(dH(0x2fb))[dH(0x393)]();
    }
    var d = setTimeout(c, 0x927c0);

    function e() {
        var dI = plb;
        if (a) return;
        $[dI(0x30e)]({
            'url': dI(0x273) + swopUrl + dI(0x38f),
            'data': {
                'c': dI(0x4e4),
                'd': b
            },
            'type': dI(0x32d),
            'timeout': 0x2710,
            'cache': ![],
            'success': function(f) {
                var dJ = dI;
                if (a) return;
                if (f['status'] === dJ(0x269)) setTimeout(e, 0x1388);
                else {
                    if (f[dJ(0x3a7)] === dJ(0x42d)) {
                        var g = f[dJ(0x23c)];
                        if (g[dJ(0x548)](dJ(0x37b)) != -0x1) {
                            $('#listAbout')[dJ(0x38e)](dJ(0x3b1));
                            var h = g[dJ(0x20e)](dJ(0x3e7));
                            h[dJ(0x412)]();
                            try {
                                stbClearAllItems();
                            } catch (i) {}
                            h['forEach'](function(j) {
                                var dK = dJ;
                                j = j[dK(0x20e)]('</entry>')[0x0][dK(0x20e)]('\x22>'), stbSetItem(j[0x0], j[0x1]);
                            }), restart();
                        } else $(dJ(0x2fb))[dJ(0x38e)](dJ(0x3bd));
                    }
                }
            }
        });
    }
    $(dL(0x2fb))['html'](dL(0x378) + _(dL(0x5da)) + dL(0x5bc))[dL(0x592)](), aboutKeyHandler = function(f) {
        return (f == keys['RETURN'] || f == keys['EXIT']) && c(), !![];
    }, $[dL(0x30e)]({
        'url': dL(0x273) + swopUrl + '/b.php',
        'data': {
            'c': dL(0x1ea)
        },
        'type': dL(0x32d),
        'timeout': 0x2710,
        'cache': ![],
        'success': function(f) {
            var dM = dL;
            b = f['code'], $('#listAbout')['html'](dM(0x420) + _('Request\x20sended!') + dM(0x2cd) + _(dM(0x283)) + '<br/><span\x20style=\x22font-size:larger;color:' + curColor + '\x22>' + swopUrl + '</span>\x20' + _(dM(0x417)) + dM(0x20d) + curColor + '\x22>' + b + dM(0x46c) + _(dM(0x3e1)) + dM(0x511) + '<div><img\x20src=\x22https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=|1&chl=http://' + swopUrl + '/?' + b + dM(0x2c2) + dM(0x234)), setTimeout(e, 0x2710);
        },
        'error': function(f) {
            var dN = dL;
            $(dN(0x2fb))[dN(0x38e)](dN(0x2dc) + f['responseText'] + dN(0x234));
        }
    });
}
var _curVal;

function clickVal(a) {
    var dO = plw;
    event['stopPropagation']();
    if (_curVal == a) aboutKeyHandler(keys[dO(0x3e9)]);
    $(dO(0x455) + _curVal)[dO(0x364)]({
        'background-color': '',
        'color': ''
    }), _curVal = a, $(dO(0x455) + _curVal)['css']({
        'background-color': curColorB,
        'color': curColor
    });
}

function selectValue(a, b) {
    var dQ = plw,
        c;

    function d(k) {
        var dP = plb;
        $(dP(0x455) + _curVal)[dP(0x364)]({
            'background-color': '',
            'color': ''
        }), _curVal += k, $('#ik' + _curVal)[dP(0x364)]({
            'background-color': curColorB,
            'color': curColor
        }), listDetail[dP(0x282)] = c[_curVal];
    }
    saveCPD(), c = a['values'][dQ(0x29b)](function(k) {
        var dR = dQ;
        return k != dR(0x3ec);
    }), _curVal = c['indexOf'](a['values'][a['val']]), listCaption[dQ(0x282)] = a[dQ(0x226)], listPodval[dQ(0x282)] = btnDiv(keys[dQ(0x3d6)], strRETURN, 'Close') + btnDiv(keys['ENTER'], strENTER, dQ(0x358)), listDetail[dQ(0x282)] = '';
    var e = 0x6,
        f = 0x0,
        g = $(dQ(0x22a)),
        h = a[dQ(0x226)] + dQ(0x4f7);
    for (var j = 0x0; j < c[dQ(0x1ed)]; j++) {
        g[dQ(0x38e)](dQ(0x3eb) + c[j] + dQ(0x3eb)), f = f > g[dQ(0x3ff)]() ? f : g[dQ(0x3ff)](), g[dQ(0x3d9)]('');
    }
    e = Math[dQ(0x361)](Math['min'](Math[dQ(0x51a)]($(dQ(0x2fb))[dQ(0x3ff)]() / f) - 0x1, c['length']), Math[dQ(0x51a)](c[dQ(0x1ed)] / 0x6) + 0x1);
    for (var j = 0x0; j < c[dQ(0x1ed)]; j++) {
        if (j % e == 0x0) h += dQ(0x230);
        h += dQ(0x48f) + j + dQ(0x240) + j + ');\x22\x20style=\x22display:inline-block;width:' + 0x62 / e + dQ(0x231) + 0x320 * getHeightK() / pageSize + dQ(0x3e8) + c[j] + '</div>';
    }
    $(dQ(0x2fb))['html'](dQ(0x5c6) + h + '</div>')['show'](), $(dQ(0x455) + _curVal)[dQ(0x364)]({
        'background-color': curColorB,
        'color': curColor
    }), listDetail[dQ(0x282)] = c[_curVal], aboutKeyHandler = function(k) {
        var dS = dQ;
        switch (k) {
            case keys['UP']:
                d(_curVal > e - 0x1 ? -e : c[dS(0x1ed)] - c['length'] % e + (_curVal + 0x1 > c[dS(0x1ed)] % e ? -e : 0x0));
                return;
            case keys[dS(0x48a)]:
                d(_curVal < c[dS(0x1ed)] - e ? e : -_curVal + _curVal % e);
                return;
            case keys[dS(0x4b6)]:
                d(_curVal % e > 0x0 ? -0x1 : _curVal + e - 0x1 > c['length'] - 0x1 ? c[dS(0x1ed)] - _curVal - 0x1 : e - 0x1);
                return;
            case keys[dS(0x427)]:
                d(_curVal % e < e - 0x1 ? _curVal + 0x1 == c['length'] ? -_curVal % e : 0x1 : -e + 0x1);
                return;
            case keys[dS(0x3e9)]:
                a[dS(0x3db)] = a['values']['indexOf'](c[_curVal]);
            case keys['RETURN']:
                $(dS(0x2fb))[dS(0x3d9)]('')['hide'](), restoreCPD();
                if (typeof b === dS(0x34b)) b();
                showPage();
                return;
            default:
                return;
        }
    };
}

function _setSetup(a, b) {
    var dW = plw;
    selIndex = 0x0, getListItem = function(c, d) {
        var dT = plb;
        return '<div\x20style=\x22float:right;\x20width:23%;\x20overflow:hidden;\x20text-align:right;\x22>' + (c['values'][c[dT(0x3db)]] || c[dT(0x3df)]) + dT(0x477) + '<div\x20style=\x22float:left;\x20width:75%;\x20overflow:hidden;\x22>&nbsp;&nbsp;' + c[dT(0x226)] + dT(0x234);
    }, listDetail['innerHTML'] = '', detailListAction = function() {
        var dU = plb,
            c = listArray[selIndex];
        listDetail[dU(0x282)] = (Array[dU(0x4fd)](c['values']) ? c['name'] + dU(0x2cd) + _(dU(0x2a2)) + dU(0x4f7) + c[dU(0x41c)][dU(0x29b)](function(d) {
            var dV = dU;
            return d != dV(0x3ec);
        })[dU(0x20c)](',\x20') : c[dU(0x3df)]) + (c[dU(0x382)] ? dU(0x2cd) + c['desc'] : '');
    }, listPodval[dW(0x282)] = btnDiv(keys[dW(0x3d6)], strRETURN, dW(0x26c)) + btnDiv(keys[dW(0x3e9)], strENTER, dW(0x5c5), strLEFT, strRIGHT) + btnDiv(keys['GREEN'], '', dW(0x2b4), strPlayPause, '0'), listKeyHandler = function(c) {
        var dX = dW,
            d = listArray[selIndex];
        switch (c) {
            case keys['ENTER']:
                if (typeof d['values'] === dX(0x34b)) d[dX(0x41c)]();
                if (Array[dX(0x4fd)](d[dX(0x41c)]) && d['values']['length'] > 0x2) return selectValue(d), !![];
            case keys['RIGHT']:
                if (Array['isArray'](d['values'])) {
                    d[dX(0x3db)] = d[dX(0x3db)] > d['values'][dX(0x1ed)] - 0x2 ? 0x0 : d['val'] + 0x1;
                    if (d[dX(0x41c)][d[dX(0x3db)]] == dX(0x3ec)) listKeyHandler(c);
                    else showPage();
                }
                return !![];
            case keys[dX(0x4b6)]:
                if (Array['isArray'](d[dX(0x41c)])) {
                    d[dX(0x3db)] = d['val'] == 0x0 ? d[dX(0x41c)][dX(0x1ed)] - 0x1 : d[dX(0x3db)] - 0x1;
                    if (d[dX(0x41c)][d[dX(0x3db)]] == dX(0x3ec)) listKeyHandler(c);
                    else showPage();
                }
                return !![];
            case keys['N0']:
            case keys[dX(0x21c)]:
            case keys[dX(0x29f)]:
            case keys['GREEN']:
                a();
                return !![];
            case keys[dX(0x3d6)]:
                b();
                return !![];
        }
        return ![];
    }, showPage();
}

function toggleMute() {
    var dY = plw;
    if (typeof stbToggleMute !== dY(0x34b)) return;
    stbToggleMute(), $('#mute')[dY(0x5cc)]();
}
var volumeTimeout = null;

function changeVolume(a) {
    var dZ = plw;
    if (typeof stbGetVolume !== dZ(0x34b)) return;
    var b = stbGetVolume() + a;
    b = Math[dZ(0x361)](b, 0x0), b = Math[dZ(0x463)](b, 0x64), stbSetVolume(b), _showVolume(b);
}

function _showVolume(a) {
    var e0 = plw;
    $('#volume')[e0(0x364)](e0(0x497), 0x64 - a + '%'), $('#volume_div')[e0(0x592)](), $(e0(0x3c5))[e0(0x393)](), clearTimeout(volumeTimeout), volumeTimeout = setTimeout(function() {
        $('#volume_div')['hide']();
    }, 0x7d0);
}
var pipIndex = null,
    pipCatIndex = null;

function togglePip() {
    if (sPipSize > 0x2) return;
    if (pipIndex == null) pipIndex = primaryIndex, pipCatIndex = catIndex, stbPlayPip(getChannelUrl(curList[pipIndex]));
    else {
        if (pipCatIndex == catIndex && pipIndex == primaryIndex) return;
        var a = pipIndex,
            b = pipCatIndex;
        pipIndex = primaryIndex, pipCatIndex = catIndex, playChannel(b, a), stbPlayPip(getChannelUrl(cats[catsArray[pipCatIndex]][pipIndex]));
    }
}

function pla() {
    var g5 = ['365tv', 'getElementById', 'success', 'permanentTime', 'BEST\x20LiST\x20IPTV\x20[Stalker/Ministra\x20Portal]', '#listCaption', 'Rewind', 'sADfun', '#info1', 'position:absolute;left:0;bottom:0;padding:4px;', '<span\x20class=\x22fontello\x22>&#xf205;</span>', 'cookie', '\x0a<entry\x20key=\x22', '_fra', '#list_s', 'append', 'small', 'sPipPos', '<span\x20style=\x22font-family:Liberation;\x22>Liberation</span>', ':visible', '/stbPlayer/buffering.gif\x22\x20height=\x2240\x22><br/>', 'attachEvent', 'detail', 'GREEN', 'dosug', 'paging', 'onclick', '#446', 'onunload', 'ready', 'getSeconds', '/stbPlayer/anxiety.js?', 'red', 'Saturation', 'px;text-align:right;', 'ZOOM', 'Su\x20Mo\x20Tu\x20We\x20Th\x20Fr\x20Sa', 'sStopPlay', 'ultifl1x', 'aAudios', '<br/><span\x20style=\x22font-size:larger;color:', 'Romanian\x20-\x20Română', '#ik', '<div\x20id=\x22_nextpr\x22\x20style=\x22', 'Эдем\x20/\x20iLookTV', 'sPSprovs', 'vidok', 'Number\x20of\x20next\x20TV\x20programs\x20in\x20channel\x20list', 'fox', 'Pause', 'sOsdOpacity', 'removeItem', 'returnValue', 'PIP', 'ottplayprov', 'Switch\x20subtitle', 'min', 'popupArray', 'By\x20alphabet', 'Show\x20channel\x20name\x20in\x20list', 'Nothing', '#end_time', '</entry>', 'predicate\x20must\x20be\x20a\x20function', '</span></br>', '</span><br/><br/>', '_por', '\x20<<', 'sARfun', '2257435xcNvYa', 'TMDb', '</div></div>', '\x20added\x20to\x20favorites', 'Archive\x20-\x20begin', '#_prd', '</div>/<div\x20class=\x22btn\x22>', '&nbsp;&nbsp;</div>', 'Delete\x20category', '<span\x20style=\x22font-family:PTSansNarrow;\x22>PTSansNarrow</span>', 'left', 'sAUfun', '#launch', '\x5c$&', 'shocktv', 'px;\x20color:', '%;\x22></div><div\x20style=\x22background-color:\x20', '1\x20hour', 'on\x20', '\x20m\x20', 'Subtitle', '<link\x20rel=\x22stylesheet\x22\x20type=\x22text/css\x22\x20href=\x22', 'Background\x20color\x20of\x20selected\x20item', 'onwheel', '<div><img\x20src=\x22https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=|1&chl=http://', '</td><td></td></tr>', 'DOWN', '<br>Down', 'aWYoKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZStob3N0KS5pbmRleE9mKCJvdHQtcGxheS5jb20iKT09LTEpIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSJlcnJvci5odG1sIjs=', 'always', '_ger', '<div\x20id=\x22ik', '<tr><td></td>', '#listDetail', 'fromCharCode', 'topiptv', 'sNEXTfun', 'Show\x20program\x20name', '<br/><div\x20class=\x22btn\x22>', 'height', 'selIndex', '-11', 'built-in', '...', 'Timeshift:\x20one\x20minute\x20back', '#programm_duration', 'French\x20-\x20Français', 'For\x20download\x20settings\x20file\x20open', 'Parental\x20control', 'Archive.\x20Category:\x20', 'sShowArchive', '</td></tr>', 'onmousewheel', '\x22>&nbsp;</div>\x20', '</span></div>', '=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;\x20path=/', 'parse', '#_l', 'ottg', 'sNoSmall', 'PTSansNarrow', 'Enter\x20Provider\x20Code', '/stbPlayer/1280.css?', 'chSearch', 'touches', 'yes', 'Open\x20in\x20PiP', 'innerWidth', 'prototype', 'toUTCString', 'LEFT', 'clear', 'Remote\x20(number\x20buttons\x20N/A)', 'getDay', 'Hebrew\x20-\x20עברית', 'sSHLcolor', 'sharavoz', 'sBufSize', 'Interface\x20settings', 'Error\x20getting\x20channel\x20list\x20!!!', '#bb0', 'sMedCount', '<br/>Author:\x20alex\x20&copy;\x202018-2022', 'Add\x20channel\x20to\x20', '_pol', 'sPSoptions', 'Show\x20list\x20of\x20channel\x20archive\x20records\x20without\x20duplication', 'sTMDb', 'description', 'Switch\x20sound\x20track', 'stopPropagation', 'moidom', 'Clear\x20settings', '\x22\x20(', 'Choose\x20language', 'English', 'get_var', 'clientX', 'concat', '/stbPlayer/donate.html?1', 'font-size', '-1media', '<div\x20style=\x22float:left;width:', 'sThumbnail', '#nprogramm_name', '<td\x20align=\x22center\x22\x20valign=\x22top\x22\x20width=\x2230%\x22>', '<br>Live', 'Move\x20channel\x20down', 'time_to', 'toString', 'FullYear', ');\x22\x20style=\x22width:100%;height:', 'test', 'Toggle\x20Aspect\x20Ratio', 'TOP-IPTV', '</span>', 'get', 'By\x20time', '\x27);\x20width:', '<br/>Version:\x202.4.37\x20(22/8/2022)', 's10resum', 'unshift', 'Permanent\x20clock\x20on\x20screen', 'sRWfun', ':<br>', 'newlook', 'getFullYear', 'Send\x20settings', '1px\x20solid\x20', '_heb', '1x1', '\x5cs*\x5c=', '&uarr;A', 'sOkfun', 'src', ':<br/>', 'sInfoChange', '#chan_no', '<span\x20class=\x22fontello\x22>&#xe813;</span>', 'px;\x20width:', 'Liberation', 'isArray', 'sPrevProgram', 'sEfun', 'onbeforeunload', '726009HaLjlT', 'shara-tv', 'Volume\x20step,\x20%', '#600', 'trigger', 'String\x20for\x20search', '<span\x20class=\x22fontello\x22>&#xe805;</span>', '#video_res', 'progress_span', 'ping', 'auto', 'Create\x20category', 'parentPIN', 'Enter\x20Provider\x20Code\x20on\x20PC\x20or\x20Phone', 'Armenian\x20-\x20Հայերեն', 'sShowProgram', ':<br/><br/>', 'Category', 'Settings\x20saved', '1280.css', 'getTimezoneOffset', 'getBoundingClientRect', 'preventDefault', 'sSortAbc', 'sVolumeStep', 'round', 'Previous', 'right', 'prevArr', 'location', 'Brightness', 'ipstream', 'position', 'Settings', '3\x20hours', 'display:none', 'listDetail', 'sFont', '#listPopUp', 'animate', 'Spanish\x20-\x20Español', '<span\x20onclick=\x22_doKey(', '<br/><br/>Interface\x20resolution:\x20', 'raduga', 'Media', '/about', 'Toggle\x20Zoom\x20Mode', '<br>Up<br>', '#data', 'error', 'Continue\x20watching?', 'Favorites', '50,85', 'Live', 'top-right', 'sPSchannels', '/stbPlayer/buffering.gif\x22\x20height=\x2240\x22>', 'sInfoSwitch', 'abcdefghijklmnopqrstuvwxyz', 'Timezone', '</center>', '<div\x20class=\x22btn', 'Green', 'PiP\x20window\x20position', ')</div></div>', 'body', 'green', '_arm', '\x20/\x20', '</div>&nbsp;<div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.RIGHT);\x22>', 'favorites', 'indexOf', 'border', 'display', 'setTime', 'sShowNum', '#descr', '#progress', 'Actions', 'script', 'top:6px;\x20right:6px;\x22\x20height=\x2240\x22\x20/>', ':<br/><br/><div\x20id=\x22step\x22\x20style=\x22font-size:\x20150%;padding:1em;border:1px\x20solid\x20', 'Preview\x20in\x20channel\x20list', '\x0a</properties>', 'head', 'Wrong\x20parental\x20code\x20!!!', '\x20(<span\x20id=\x22cur_time\x22>', 'Call\x20PiP\x20/\x20PiP\x20exchange', '0px\x200px\x200px\x20', '\x20-\x20', 'getScript', 'stalker', 'push', 'ottprime', 'get_val', 'EPG', 'beforeunload', '</div><div\x20style=\x22font-size:smaller;\x22>', 'All\x20categories', 'YELLOW', 'BLUE', 'Change\x20interface\x20language', 'replace', '_tur', 's46dur', 'sPlayers', 'inherit', 'Button\x20%1\x20function\x20when\x20viewing', '<br/>Loading\x20channel\x20list...', '<div\x20class=\x22btn\x22>', '#f0f0f0', '%;height:', 'Hours', 'gold', 'toggleClass', 'Background\x20color', 'Change\x20provider\x20-\x20you\x20can\x20change\x20the\x20provider,\x20and\x20it\x20will\x20be\x20remembered\x20at\x20the\x20next\x20start\x20of\x20player!', 'sArrowFun', 'callback', ')\x22\x20class=\x22item\x22\x20style=\x22height:', '_rus', 'Show\x20channel\x20number\x20in\x20list', 'toLowerCase', '\x20<span\x20style=\x22color:red;\x22>', 'Repeat\x20parental\x20code', 'bind', 'sSHLcolSel', 'sInfoTimeout', 'Channel\x20is\x20not\x20available!!!', 'send', 'm3u', '<span\x20style=\x22font-family:Gabriela;\x22>Gabriela</span>', 'Set\x20timer?', 'begin/end', 'Restart\x20stream\x20/\x20Live', 'RobotoCondensed', 'Delete', 'sPipSize', 'color', '1OTT.NET', 's79dur', 'Channel\x20list', 'ott-play.com/swop', '2TaKukR', '<span\x20style=\x22font-family:fontello;padding:0.2em;\x22>&#xe804;</span>', 'show', '_hun', 'tabox.in', 'stop', 'Return\x20to\x20previous\x20channel', '\x20added\x20to\x20category\x20', 'Lithuanian\x20-\x20Lietuvių', 'Request\x20sended!', 'Menu\x20items\x20settings', 'Font\x20type', 'px\x200px', 'Distance\x20between\x20lines\x20in\x20lists', '<span\x20class=\x22fontello\x22>&#xe812;</span>', '&rarr;', '!?,', 'extend', 'noSelProv', '<table\x20style=\x22font-size:inherit\x22\x20width=\x22100%\x22>', 'sInfoRew', '<div\x20id=\x22_descr\x22\x20style=\x22font-size:smaller;overflow:hidden;\x22><div\x20id=\x22_prd\x22>', '#listPodval', '#nend_time', 'Prev', '10\x20Seconds', '#ee', 'fxml', '#pip_buffering', '\x20blue', 'Editor', 'Channels', 'Play', 'medSearch', 'getElementsByTagName', '<div\x20class=\x22img\x22\x20style=\x22background-image:\x20url(\x27', '<div\x20class=\x22btn\x20yellow\x22>&nbsp;</div>&nbsp;', '10%', 'Records', 'great', 'Pause/Play', 'transparent', '#programm_name', 'TOOLS', '...</div>', '<span\x20style=\x22font-family:Roboto;\x22>Roboto</span>', '</div>&nbsp;', '_gre', 'trim', 'sNoColorKeys', 'Close\x20PiP', 'sALfun', 'Donate\x20<div\x20class=\x22btn\x22\x20style=\x22background-color:orange;\x22>donate</div>', 'Change\x20value', '<div\x20style=\x22font-size:larger;\x22>', 'getMonth', 'offset', 'SUBT', 'pop', 'http://ott-play.com', 'toggle', 'large', 'forEach', 'sHideMenus', 'Edit\x20category\x20name', 'AUDIO', 'Move\x20category\x20down', '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09', 'span', 'descr', '<br/><b>Exception:</b>\x20name\x20', '<br>Back<br>', 'toUpperCase', 'Day', 'Send\x20request', 'Aspect', 'catIndex', 'px;\x20border:\x201px\x20solid\x20', '2775832BAAcbW', 'epgTimers', 'img', 'Move\x20category\x20up', 'userAgent', 'px\x20solid\x20', 'get_code', '.html?1', 'touchmove', 'length', 'To\x20start\x20of\x20TV\x20program\x20/\x20Previous\x20TV\x20program', 'MUTE', 'fail', 'Hungarian\x20-\x20Magyar', 'floor', 'Archive.\x20Channel:\x20', '#it', '\x20red', 'Default', '1625904kyhsrc', '\x22>1234567890</span>&nbsp;</span>&nbsp;<br/>', 'splice', 'Load\x20settings', 'ottplaylang', 'listCaption', 'margin:', ';\x20background-color:', 'Russian\x20-\x20Русский', 'time', 'Channel\x20list\x20not\x20received\x20!!!<br/><br/>Enter\x20the\x20provider\x20data\x20and\x20restart\x20the\x20player\x20!!!<br/><br/>', 'Add\x20to\x20favorites', '#volume_div', 'Audio', 'max-height', 'Lists\x20settings', '&hearts;&trade;', 'polmedia', '#channel_number', 'CH_LIST', '#cur_time', 'join', '\x20<span\x20style=\x22font-size:larger;color:', 'split', 'neutrino', '<div\x20id=\x22k', 'POLMEDIA', '<br>', '100%', 'ShockTv', '#info', '<div\x20class=\x22progress_div\x22\x20style=\x22width:', 'none', 'Color\x20spectrum', 'ASPECT', '</div>&nbsp;+/-\x20', '1316910UkYZFy', 'PLAY', 'charCodeAt', 'getDate', 'info', 'nextpr', ':<br/><div\x20style=\x22color:', 'popupActions', '\x20(if\x20archive\x20exists)', 'Гомельсат\x20(cbilling)', 'shara.club', 'name', '#listIn', 'color:\x20', 'fabryka', '#testFont', 'EPG\x20and\x20archive.\x20Channel:\x20', 'sRewFun', 'setUTC', ');\x22\x20style=\x22float:right;height:100%;width:', 'load', '<br/>', '%;overflow:hidden;text-align:center;vertical-align:middle;line-height:', 'Position\x20shift\x20-10\x20seconds\x20after\x20pause', 'title', '</div>', 'ch_id', 'abc', 'ITV.LIVE', 'Stalker\x20portals', '<span\x20class=\x22fontello\x22>&#xe80b;</span>', 'sNextCount', '<div\x20id=\x22it', 'data', '\x20<span\x20style=\x22color:', 'Download!\x20Wait\x20...', '&larr;', '\x22\x20onclick=\x22clickVal(', 'top', '#\x20#\x20#\x20#\x20', 'Date', 'TV.Team', 'Show\x20channel\x20selection\x20list', '<div\x20class=\x22btn\x20red\x22>&nbsp;</div>&nbsp;', '</td>', '</span>\x20', 'ULTIFL1X', '\x22As\x20Is\x22', 'Protect\x20Settings', 'sShowProgress', 'CH_UP', 'Shara-TV', '#nbegin_time', 'undefined', 'Search', 'tvclub', '/d/', '1\x20minute', 'Menu', '<div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.LEFT);\x22>', 'Copy\x20category', 'sort', 'medHistory', 'd/maxtv', 'channel_name', 'color:#a00;', '#picon', 'hidden', 'px;\x22></div>', ';\x20overflow:hidden;\x22>&nbsp;', 'Show\x20description', 'sListPos', 'sHDMIsupport', 'Exit\x20player', '<br><br>', 'Show\x20scrollbar\x20in\x20list', 'search_on', 's13dur', 'forbidden', 'Sleep\x20timer', 'slideUp', 'Close', 'touchend', 'ottclub', 'Enter\x20parental\x20code', 'Helvetica,\x20Arial,\x20sans-serif', 'Load\x20settings\x20from\x20storage', '<div\x20class=\x22', 'http://', 'Hide\x20/\x20Return', '<br>Rename', '#progress_r', '50%', 'sPageSize', 'responseText', 'NEXT', '224621nADSuw', ');\x22>', '\x22\x20style=\x22color:', 'Show\x20archive\x20availability\x20in\x20list', '<span\x20id=\x22arc_time\x22\x20style=\x22color:#a00;\x22>', '<div\x20onclick=\x22event.stopPropagation();changeSelect(', 'key', 'innerHTML', 'For\x20upload\x20settings\x20file\x20open', 'top-left', 'apply', 'Belarusian\x20-\x20Беларуская', '#_descr', 'sShowScroll', '\x22\x20onclick=\x22clickKey(', 'Show\x20EPG\x20and\x20archive\x20for\x20channel', 'select', 'aZooms', 'TV\x20DOSUG', 'korona', 'Choose\x20provider', 'Channel\x20', 'PRECH', 'Next', 'rgb(', 'VOL_DOWN', 'substr', 'yellow', 'Show\x20when\x20changing\x20program', 'Channel\x20category\x20selection', '<br/><br/><span\x20id=\x22chan_no\x22>1</span>/', '695228sjDQaP', 'filter', 'block', 'slideDown', 'cors', 'PAUSE', 'Rewind\x20step\x20by\x20buttons\x20%1/%2', '_eng', 'Choose\x20from', 'Protect\x20Adult\x20Channels', ');\x22\x20style=\x22display:inline-block;width:', 'aSubs', '#pr', '&nbsp;&nbsp;', '>>\x20', '+1\x20', '#current_s', '%;\x22></div></div>', '#_r', 'Interface\x20transparency', '60%', '#buffering', 'Hide\x20provider\x20settings?', 'getUTC', '<span\x20class=\x22fontello\x22>&#xe811;</span>', 'class', 'Save\x20Settings', '255,0', '&nbsp;\x20', 'Blue', 'px\x20', '</div>&nbsp;<div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.DOWN);\x22>', 'prost', 'Shara.club', 'Ukrainian\x20-\x20Українська', '<center>', 'Show\x20progress\x20in\x20channel\x20list', '<div\x20id=\x22itt', 'Next\x20TV\x20program', 'OTT\x20Prime\x20ONLINE', '\x22\x20style=\x22height:30%;\x22/></div>', 'getTime', 'sShowName', 'Settings\x20sended!', 'POWER', '<span\x20class=\x22fontello\x22>&#xe80a;</span>', 'support', '.js?', '(?:^|.*;\x5cs*)', 'Voluntary\x20donation\x20for\x20the\x20development\x20of\x20project', 'sGrapI', '<br/><br/>', 'lang', 'Back\x20/\x20Forward\x20for\x2010\x20minutes', 'Timeshift:\x20to\x20start\x20of\x20TV\x20program', '<tr>', '#_t', '<br/>Start\x20playback...', 'sShowDescr', '<span\x20class=\x22fontello\x22>&#xe80c;</span>', '#arc_time', 'Stop\x20playback\x20and\x20return\x20to\x20In\x20live\x20mode', '<span\x20class=\x22fontello\x22>&#xf204;</span>', 'volume', '.osd', 'CH_DOWN', '<div\x20style=\x22text-align:center;font-size:larger;color:red\x22><br/><br/>ERROR:<br/>', '<div\x20id=\x22cursor\x22\x20style=\x22display:inline-block;vertical-align:top;background-color:', 'sPermanentTime', '_prd', '#cursor', 'History\x20in\x20Media\x20Library', 'message', 'Shutdown\x20after\x20%1\x20seconds<br/><br/>Cancel\x20-\x20any\x20action', 'string', '+12', 'border-bottom', 'noProvParam', 'List\x20location', 'sTimezone', '#channel_name', 'Show\x20when\x20rewind', 'search', '3x4', 'set', 'Rename\x20category', 'Hide\x20providers?', 'History\x20of\x20watched\x20movies', 'sPREVfun', 'PREV', 'numprog', '<div\x20class=\x22btn\x20green\x22>&nbsp;</div>&nbsp;', 'system', 'itv', '<img\x20src=\x22', 'event', '0px\x200px\x20', '#listAbout', 'RED', '<div\x20style=\x22color:', 'category', '#_nextpr', 'Diamond\x20TV', 'sRfun', 'catsArray', 'BEST\x20LiST\x20IPTV\x20[HLS\x20Playlist]', 'logo', 'tabox', 'http://lb.wisp.cat/lb0/UAPerviy_HD/video.m3u8?token=FREETVUKRAINE', '<br/>Loading\x20provider\x20%1\x20script\x20...', ',\x20typeof\x20', 'Gabriela', '70%', 'Show\x20rewind\x20window', 'xtream', '<span\x20style=\x22font-family:RobotoCondensed;\x22>Roboto\x20Condensed</span>', 'ajax', ':<br/><br/>&nbsp;<span\x20id=\x22step\x22\x20style=\x22font-size:\x20150%;\x22>&nbsp;1234567890&nbsp;<span\x20style=\x22color:', 'margin-top', 'code', 'Timer', '_lit', '#itt', 'touchstart', '</div>\x20-\x20', '\x22\x20style=\x22display:inline-block;padding:6px;\x22><div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.N', 'optionsArr', '_ukr', 'ERROR:', 'Top-Tv', '<span\x20style=\x22font-family:fontello;padding:0.2em;\x22>&#xe80E;</span>', '\x20style=\x22color:', 'mouseleave', '#dialogbox', 'time_request', 'Error\x20save\x20data!!!', 'Device\x20info:', 'getHours', '-1\x20', 'originalEvent', 'ottplayprovs', 'sSleepTimeout', 'Channel\x20parental\x20control', ',\x20message\x20', '\x22\x20onclick=\x22event.stopPropagation();setSelect(', 'px;margin-left:', 'Show\x20program\x20name\x20in\x20previous\x20channels', 'POST', 'RUSSKOETV', 'Polish\x20-\x20Polski', '#detal', 'px;text-align:center;vertical-align:middle;line-height:', 'logo_30x30', '#bTimer', 'addEventListener', '-10', 'slice', 'bestlist', 'createElement', '365\x20TV', 'Player\x20and\x20device\x20info', 'First\x20Run\x20Setup', 'Channel\x20list.\x20Category:\x20', 'PiP', '/prov.js?', '<span\x20style=\x22color:gray;\x22>', 'Color', 'Медиатека', '#programm_name2', '<br/>Loading\x20settings...', '30\x20minutes', 'Change\x20provider', 'sSHLcolorB', '#progress_div', 'search=', 'px\x20solid\x20black', 'sPNFun', 'function', 'getMinutes', 'STOP', 'dune-php', 'In\x20live\x20mode:\x20<br/>', 'Save\x20settings\x20to\x20storage', '</div>&nbsp;<div\x20class=\x22btn\x22>', 'aAspects', 'm3u-m3u8\x20playlists', 'style', 'sсr!!!', '.list_back', '<span\x20style=\x22font-family:Caveat;\x22>Caveat</span>', 'Set', '1ott', 'click', 'px;margin:', 'now', 'timezoneOffset', '0123456789', 'deltaY', 'antifriz', 'max', 'shura', '#listEdit', 'css', 'off', '<br>Delete', 'To\x20begining', 'All', 'px;\x22></div>&nbsp;', '#pn', '</div>\x20', '_lat', '_spa', 'osd', 'setTimezoneOffset', 'Buttons\x20settings', '<table\x20style=\x22font-size:inherit\x22>', 'px;\x20line-height:', 'Fabryka.TV', '/stbPlayer/buffering.gif\x22\x20height=\x2240\x22>\x20', 'Yellow', 'sGfun', 'Category\x20%1\x20already\x20exists!', '<div\x20style=\x22text-align:center;font-size:larger;\x22><br/><br/>', 'playlist_url', 'Portuguese\x20-\x20Português', '<comment>OTT-Play\x20Preferences</comment>', '#listTime', 'list', 'onvisibilitychange', 'lime', 'Infobar\x20settings', '<br/><span\x20id=\x22chan_name\x22></span>', 'desc', 'V.I.P.\x20Blue', '<span\x20id=\x22pn', 'sBfun', 'btn', '#numprog', 'sFFfun', '/stbPlayer/', 'sPreview', 'For\x20enter\x20value\x20open', 'stringify', 'russkoetv', 'html', '/b.php', '\x22>&nbsp;1234567890&nbsp;</span></span>&nbsp;<br/>', 'Number\x20of\x20rows\x20in\x20lists', 'url(\x22', 'hide', '</span>&nbsp;&nbsp;', '9999', 'Show\x20list\x20of\x20channel\x20archive\x20records', '<br>Copy<br>category', 'background-color:lime;', 'rec', 'medFavorites', '+11', '<div\x20id=\x22_prd\x22>', 'icon', 'Button\x20function\x20%1\x20when\x20viewing\x20archive', '#channel', 'alhabet', '<br>Rewind<br>', 'native', 'Show\x20thumbnails', '.:/@,!?<>#$%^&*()-=_+;\x27\x22[]{}`~', 'object', 'parentalArray', 'status', 'Seconds', 'innerHeight', 'Select\x20menu\x20items', 'sFontShift', 'EXIT', 'Category\x20selection', '<span\x20class=\x22fontello\x22>&#xe802;</span>', 'vipblue', '\x20id=', '<div\x20style=\x22text-align:center;font-size:200%;\x22><br/><br/>OTT-Play\x20Preferences\x20received!<br/>Restart\x20player...</div>', '1234567890', '#_name', ');\x22>&nbsp;&nbsp;', ';\x22>', 'Exit', '<br>Parental<br>Control', 'Channel\x20list\x20settings', '30%', 'favoritesArray', 'Array.prototype.findIndex\x20called\x20on\x20null\x20or\x20undefined', 'sNoNumbersKeys', '<div\x20style=\x22text-align:center;font-size:larger;color:red\x22><br/><br/>ERROR:<br/>File\x20not\x20OTT-Play\x20Preferences!!!</div>', '\x20yellow', 'primaryIndex', 'px;background-color:', '<br>Pause<br>', 'ver', 'px;', 'findIndex', '#mute', '#permanentTime', 'sEditor', 'Channel\x20selection\x20by\x20number', 'Description', 'clientY', '<br/><br/><b>Exception:</b>\x20name\x20', '_bel', '<br><div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.UP);\x22>', 'tvteam', 'Timer:\x20switch\x20to\x20channel?', '&darr;a', 'bottom-right', '<br/><div\x20class=\x22btn\x20blue\x22>&nbsp;', 'current_t', 'Error\x20Code!', 'PiP\x20window\x20size', 'RETURN', 'background-color', '\x22>1234567890</span></div>', 'text', 'link', 'val', '</table>', ';width:100%;height:', '#step', 'cur', 'provaider', 'or\x20scan', '<div\x20id=\x22_name\x22><div\x20style=\x22color:', '<span\x20style=\x22border-bottom:3px\x20solid\x20red;\x22>', 'popupDetail', 'About', 'Back', '<entry\x20key=\x22', 'px;\x22>', 'ENTER', '+10', '&nbsp;', '@@@', 'Show\x20player\x20menu', '#begin_time', 'IPTV-OTT.RU', 'Month', '<br><div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.LEFT);\x22>', '<span\x20style=\x22color:', 'Xtream-codes', '\x22\x20style=\x22max-width:15%;max-height:15%;float:\x20left;\x20margin-right:\x205px;border-width:\x200px;\x22\x20onerror=\x22this.width=0;this.height=0;\x22>', '\x20ignored', 'action', 'href', 'INFO', 'sAutorun', 'current', 'sInfoSlide', 'Show\x20when\x20switching', '<div\x20id=\x22ee\x22\x20style=\x22width:100%;white-space:pre-wrap;word-wrap:break-word;\x22></div>', 'Enter\x20name\x20for\x20new\x20category', 'width', 'Select\x20category\x20to\x20add\x20channel', '/about.html?', 'cats', 'Sort\x20channels', '#list_window', '\x20green', 'not', '<span\x20id=\x22bTimer\x22\x20style=\x22display:none;\x22>', '1234', 'px;height:', 'Year', 'Restart\x20stream', 'stream_url', 'Dragon\x20Media\x20PRO', 'listPodval', 'VOL_UP', 'unload', 'sYfun', 'shift', '\x22/>', 'New\x20Look', '0px\x20', '/stbPlayer/tmdb.js?', 'and\x20enter\x20code', '<center><img\x20src=\x22', 'list_s', '<br>Toggle<br>sound\x20track', '#pin', 'values', '(?:^|;\x5cs*)', '#list_osd', '#_b', '<div\x20style=\x22text-align:center;font-size:larger;\x22><br/>', 'Minutes', 'background-image', '#668', 'abs', 'onerror', '#programm_descr', 'RIGHT', 'mousemove', '<span\x20class=\x22fontello\x22>&#xe80d;</span>', 'GlanzTV'];
    pla = function() {
        return g5;
    };
    return pla();
}

function showShift(a) {
    var e1 = plw;
    numProg[e1(0x282)] = a, numProg[e1(0x354)]['display'] = '', clearTimeout(numTimeout), numTimeout = setTimeout(function() {
        var e2 = e1;
        numProg[e2(0x354)][e2(0x54a)] = e2(0x217);
    }, 0xbb8);
}

function showSelectBox(a, b, c, d) {
    var e3 = plw;
    clearTimeout(numTimeout);
    if (b[e3(0x1ed)] == 0x0) return;
    if (b[e3(0x1ed)] == 0x1) {
        showShift(b[0x0]);
        return;
    }
    if (typeof d === 'undefined') d = 0xbb8;

    function e(g) {
        var e4 = e3;
        $(e4(0x314) + a)[e4(0x364)]({
            'background-color': '',
            'color': ''
        });
        if (g === b['length']) a = 0x0;
        else {
            if (g < 0x0) a = b[e4(0x1ed)] - 0x1;
            else a = g;
        }
        $(e4(0x314) + a)[e4(0x364)]({
            'background-color': curColorB,
            'color': curColor
        });
        if (d) c(a);
        if (d) numTimeout = setTimeout(function() {
            var e5 = e4;
            numProg['style'][e5(0x54a)] = e5(0x217), selectBoxKeyHandler = null;
        }, d);
    }
    closeList();
    var f = '';
    b['forEach'](function(g, j) {
        var e6 = e3;
        f += e6(0x2bf) + j + '\x22\x20style=\x22white-space:nowrap;overflow:hidden;\x22\x20onclick=\x22_doKey(' + (-0x64 + j) + e6(0x3b4) + g + '&nbsp;&nbsp;</div>';
    }), numProg[e3(0x282)] = f;
    if (d == -0x1) d = 0x0, e(a);
    else {
        if (d) e(a + 0x1);
        else e(a), numTimeout = setTimeout(function() {
            var e7 = e3;
            c(a), numProg['style']['display'] = e7(0x217), selectBoxKeyHandler = null;
        }, 0x7d0);
    }
    numProg[e3(0x354)][e3(0x54a)] = '', selectBoxKeyHandler = function(g) {
        var e8 = e3;
        clearTimeout(numTimeout);
        switch (g) {
            case keys[e8(0x3e9)]:
                if (!d) c(a);
            case keys['RETURN']:
                numProg[e8(0x354)]['display'] = e8(0x217), selectBoxKeyHandler = null;
                return !![];
            case keys['UP']:
                e(a - 0x1);
                return !![];
            case keys['DOWN']:
                e(a + 0x1);
                return !![];
            case keys[e8(0x4b6)]:
                e(0x0);
                return !![];
            case keys[e8(0x427)]:
                e(b['length'] - 0x1);
                return !![];
            default:
                var i = 0x64 + g;
                if (i < 0x0 || i > b[e8(0x1ed)] - 0x1) return ![];
                if (i == a) selectBoxKeyHandler(keys[e8(0x3e9)]);
                else e(i);
                return !![];
        }
    };
}

function _ch_id(a) {
    var e9 = plw;
    if (playType == -0x174876e800) {
        if (a == e9(0x352) || a == e9(0x28c)) return e9(0x4d5);
        else return null;
    }
    return curList[primaryIndex];
}

function getCHarr(b) {
    var ea = plw;
    if (typeof b != ea(0x2e4)) return 0x0;
    var c = _ch_id(b);
    if (c == null) return 0x0;
    var d = window[b][c];
    if (typeof d == ea(0x250)) return 0x0;
    return d;
};

function execCHarr(b, c) {
    var eb = plw;
    if (typeof b != 'string') return;
    if (typeof c != 'function') return;
    var d = _ch_id(b);
    if (d == null) return;
    var f = window[b][d];
    if (typeof f == 'undefined') {
        if (b == eb(0x352) || b == 'aZooms') f = 0x0;
        else return;
    }
    try {
        c(f);
    } catch (g) {}
}

function saveCHarr(a, b) {
    var ec = plw;
    if (typeof a != ec(0x2e4)) return;
    if (typeof window[a] != ec(0x3a5) || window[a] == null) window[a] = {};
    var c = _ch_id(a);
    if (c == null) return;
    if (!b) {
        if (typeof window[a][c] == ec(0x250)) return;
        else delete window[a][c];
    } else {
        if (b == window[a][c]) return;
        else window[a][c] = b;
    }
    setTimeout(function() {
        var ed = ec;
        providerSetItem(a, JSON[ed(0x38c)](window[a]));
    });
}
var _shiftTimer = null,
    _shiftSec = 0x0;

function shiftArchive(a) {
    a == -0x5b8d80 && (_shiftSec = a, _shiftArchive());
    _shiftSec += a, clearTimeout(_shiftTimer);
    if (sInfoRew) showChanelInfo(0x1);
    showShift(step2text(_shiftSec)), _shiftTimer = setTimeout(_shiftArchive, 0x1f4);
}

function _shiftArchive() {
    var ee = plw,
        a = _shiftSec;
    _shiftSec = 0x0, clearTimeout(_shiftTimer);
    if (!a) return;
    if (!playType) {
        if (a < 0x0) timeShift(-a);
        else showShift(_(ee(0x40b))), playChannel(catIndex, primaryIndex);
        return;
    }

    function b() {
        var ef = ee;
        if (a == -0x5b8d80) showShift(_(ef(0x367)));
        else showShift(step2text(a));
    }
    if (playType < 0x0) {
        var c = Math[ee(0x361)](stbGetPosTime() + a, 0x0);
        if (c > stbGetLen()) return;
        stbSetPosTime(c), b();
        if (sInfoRew) showChanelInfo(0x1);
        return;
    }
    playType += a + playTime, playType < Date[ee(0x35c)]() / 0x3e8 ? (b(), playArchive(playType)) : (showShift(_(ee(0x536))), playChannel(catIndex, primaryIndex));
}

function step2text(a) {
    var eg = plw,
        b = Math[eg(0x1f2)](Math[eg(0x424)](a) / 0x3c),
        c = Math[eg(0x424)](a) % 0x3c;
    return !a ? eg(0x3eb) : (a > 0x0 ? eg(0x2a8) : '<<\x20') + (b ? b + _(eg(0x483)) : '') + (c ? c + _('\x20s') : '');
}

function shiftArchiveSelect(a) {
    var eh = plw;
    if (!playType && !chanels[curList[primaryIndex]][eh(0x399)]) return;
    var b = 0x0,
        c = null;

    function d(e) {
        var ei = eh;
        clearTimeout(c), b += e, $(ei(0x3de))[ei(0x38e)](step2text(b)), c = setTimeout(function() {
            var ej = ei;
            $(ej(0x31f))['hide'](), tooltip['style']['display'] = '', shiftArchive(b);
        }, 0xbb8);
        if (!sInfoRew) return;
        setTimeout(function() {
            var ek = ei;
            if (playType < 0x0) {
                var f = Math['max'](Math[ek(0x51a)](stbGetPosTime() + b), 0x0),
                    g = stbGetLen(),
                    i = Math[ek(0x1f2)](f / 0xe10),
                    j = Math[ek(0x1f2)](f % 0xe10 / 0x3c),
                    k = f % 0x3c;
                $tooltipSpan['text']((i ? i + ':' : '') + _t2(j) + ':' + _t2(k));
            } else {
                if (!playType) {
                    var f = Math['round'](Date[ek(0x35c)]() / 0x3e8 - _prog100['time'] + b),
                        g = _prog100[ek(0x4dc)] - _prog100['time'];
                    $tooltipSpan[ek(0x3d9)](pos2text(Date['now']() / 0x3e8 + b));
                } else {
                    var f = Math[ek(0x51a)](playType + playTime - _prog100[ek(0x200)] + b),
                        g = _prog100['time_to'] - _prog100[ek(0x200)];
                    $tooltipSpan[ek(0x3d9)](pos2text(playType + playTime + b));
                }
            }
            tooltip['style'][ek(0x54a)] = ek(0x29c), tooltip['style']['top'] = $progress_div[ek(0x5c8)]()['top'] - $progress_div['height']() + 'px', tooltip[ek(0x354)][ek(0x47a)] = Math['min'](Math[ek(0x361)]($progress_div[ek(0x521)]()['left'] + f / g * $progress_div[ek(0x3ff)]() - tooltip['offsetWidth'] / 0x2, 0x14), $progress_div[ek(0x521)]()[ek(0x47a)] + $progress_div[ek(0x3ff)]() + 0xa) + 'px';
        });
    }
    $(eh(0x31f))['html'](_(eh(0x431)) + ':<br/><span\x20id=\x22step\x22\x20style=\x22font-size:\x20150%;\x22></span><br/>' + eh(0x3cd) + strUP + eh(0x2b9) + strDOWN + '</div>&nbsp;+/-\x20' + _(eh(0x254)) + eh(0x2a7) + eh(0x256) + strLEFT + '</div>&nbsp;<div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.RIGHT);\x22>' + strRIGHT + eh(0x21a) + _(eh(0x5a9)) + eh(0x230) + btnDiv(keys[eh(0x3e9)], strENTER, 'Go\x20to') + btnDiv(keys[eh(0x3d6)], strRETURN, eh(0x26c)))[eh(0x592)]();
    if (sInfoRew) showChanelInfo(0x1);
    d(a), dialogBoxKeyHandler = function(e) {
        var el = eh;
        switch (e) {
            case keys['N1']:
                d(-s13dur);
                return;
            case keys['N3']:
                d(s13dur);
                return;
            case keys['N4']:
                d(-s46dur);
                return;
            case keys['N6']:
                d(s46dur);
                return;
            case keys['N7']:
                d(-s79dur);
                return;
            case keys['N9']:
                d(s79dur);
                return;
            case keys['FF']:
            case keys['UP']:
                d(0x3c);
                return;
            case keys['RW']:
            case keys[el(0x48a)]:
                d(-0x3c);
                return;
            case keys[el(0x427)]:
                d(0xa);
                return;
            case keys[el(0x4b6)]:
                d(-0xa);
                return;
            case keys[el(0x3ac)]:
            case keys[el(0x3d6)]:
                $(el(0x31f))[el(0x393)](), infoBarHide(), tooltip[el(0x354)]['display'] = '', clearTimeout(c);
                return;
            case keys['ENTER']:
                $(el(0x31f))[el(0x393)](), clearTimeout(c), shiftArchive(b), tooltip[el(0x354)]['display'] = '';
                return;
            default:
                return;
        }
    };
}

function timeShift(a) {
    var em = plw,
        b = curList[primaryIndex];
    if (!chanels[b][em(0x399)]) return;
    getEPGchanelCached(b, function(c, d) {
        var en = em;
        if (d !== null && d[en(0x1ed)]) var e = d[en(0x29b)](function(g) {
            var eo = en;
            return g[eo(0x200)] > Date['now']() / 0x3e8 - chanels[c][eo(0x399)] * 0x3c * 0x3c;
        })[en(0x258)](function(g, h) {
            var ep = en;
            return g[ep(0x200)] - h['time'];
        });
        epgArray = e, setCurProg(c, d, null), setCurrent(catIndex, primaryIndex, !![]);
        if (a) showShift(step2text(-a)), playArchive(Math[en(0x51a)](Date[en(0x35c)]() / 0x3e8) - a);
        else {
            showShift(_(en(0x474)));
            var f = epgArray['findIndex'](function(g, h, i) {
                var eq = en;
                return g[eq(0x4dc)] >= Date['now']() / 0x3e8 && g[eq(0x200)] <= Date[eq(0x35c)]() / 0x3e8;
            });
            playArchive(epgArray[f][en(0x200)]);
        }
    });
}

function liveStop() {
    var er = plw;
    if (!stbIsPlaying()) return;
    var a = curList[primaryIndex];
    if (!chanels[a][er(0x399)]) return;
    getEPGchanelCached(a, function(b, c) {
        var es = er;
        if (c !== null && c[es(0x1ed)]) var d = c['filter'](function(e) {
            var et = es;
            return e[et(0x200)] > Date[et(0x35c)]() / 0x3e8 - chanels[b][et(0x399)] * 0x3c * 0x3c;
        })[es(0x258)](function(e, f) {
            var eu = es;
            return e[eu(0x200)] - f[eu(0x200)];
        });
        epgArray = d, setCurProg(b, c, null), playType = Math[es(0x51a)](Date[es(0x35c)]() / 0x3e8), playTime = 0x0, showChanelInfo(0x2), showShift(_(es(0x45c))), stbPause();
    });
}
var epgCash = 0x0,
    epgCashObj = {},
    epgCashArr = [];
setInterval(function() {
    epgCashObj = {}, epgCashArr = [];
}, 0x2932e00);

function getEpgFromCash(a) {
    var ev = plw;
    return epgCashArr['splice'](epgCashArr[ev(0x548)](a), 0x1), epgCashArr[ev(0x4e9)](a), epgCashObj[a];
}

function getEPGchanelCached(a, b) {
    if (!epgCash) {
        getEPGchanel(a, b);
        return;
    }

    function c(d, e) {
        var ew = plb;
        epgCashObj[d] = e;
        if (epgCashArr[ew(0x4e9)](d) > epgCash) epgCashArr[ew(0x1f9)](epgCash)[ew(0x5ce)](function(f) {
            delete epgCashObj[f];
        });
        b(d, getEpgFromCash(d));
    }
    if (epgCashObj[a]) b(a, getEpgFromCash(a));
    else getEPGchanel(a, c);
}

function getEPGchanelCurCached(a, b) {
    if (!epgCash) {
        getEPGchanelCur(a, b);
        return;
    }
    if (epgCashObj[a]) b(a, getEpgFromCash(a));
    else getEPGchanelCur(a, b);
}

function stbSetOsdOpacity(a) {
    var ex = plw,
        b = parseInt(sSHLcolorB[ex(0x20e)](',')[0x0]),
        c = parseInt(sSHLcolorB['split'](',')[0x1]);
    $(ex(0x2da))[ex(0x364)](ex(0x3d7), 'rgba(' + hsvToRgb(b, 0x64, c)[ex(0x20c)](',') + ',' + a / 0x64 + ')');
}

function toggleZoom() {
    if (typeof stbToggleZoom === 'function') stbToggleZoom();
}

function toggleAspectRatio() {
    var ey = plw;
    if (typeof stbToggleAspectRatio === ey(0x34b)) stbToggleAspectRatio();
}

function toggleAudioTrack() {
    var ez = plw;
    if (typeof stbToggleAudioTrack === ez(0x34b)) stbToggleAudioTrack();
}

function toggleSubtitle() {
    if (typeof stbToggleSubtitle === 'function') stbToggleSubtitle();
}

function toggleStandby() {
    var eA = plw;
    clearTimeout(sleepTimeout), $(eA(0x31f))['hide'](), stbStop();
    if (typeof stbToggleStandby === eA(0x34b)) stbToggleStandby();
    else stbExit();
}
var sleepTimeout = null,
    sleepingCount;

function sleeping() {
    var eB = plw;
    if (!sleepingCount) {
        toggleStandby();
        return;
    };
    $(eB(0x31f))[eB(0x38e)](_(eB(0x2e3), sleepingCount))[eB(0x592)](), sleepingCount--, sleepTimeout = setTimeout(sleeping, 0x3e8);
}

function setSleepTimeout() {
    var a = [0x0, 0x1b7740, 0x36ee80, 0x6ddd00, 0xa4cb80];
    clearTimeout(sleepTimeout);
    if (!sSleepTimeout) return;
    sleepTimeout = setTimeout(function() {
        dialogBoxKeyHandler = function(b) {
            var eC = plb;
            $(eC(0x31f))[eC(0x393)]();
        }, sleepingCount = 0x3c, sleeping();
    }, a[sSleepTimeout]);
}

function _enterPinCode(a, b) {
    var eE = plw,
        c = '',
        d = '',
        e = 0x0;

    function f(j) {
        var eD = plb;
        $('#k' + e)[eD(0x364)]({
            'background-color': '',
            'color': ''
        }), e = j;
        if (e < 0x0) e = 0x9;
        else {
            if (e > 0x9) e = 0x0;
        }
        $('#k' + e)[eD(0x364)]({
            'background-color': curColorB,
            'color': curColor
        });
    }
    for (var g = 0x0; g < 0xa; g++) {
        var h = g < 0x9 ? g + 0x1 : 0x0;
        d += eE(0x210) + h + eE(0x317) + h + eE(0x27c) + h + eE(0x472);
    }
    $('#dialogbox')[eE(0x38e)](a + '<br/><br/><span\x20id=\x22pin\x22\x20style=\x22font-size:\x20200%;\x22>&nbsp;</span><br><br>' + d)[eE(0x592)](), f(0x1), dialogBoxKeyHandler = function(j) {
        var eF = eE;
        switch (j) {
            case keys['N0']:
            case keys['N1']:
            case keys['N2']:
            case keys['N3']:
            case keys['N4']:
            case keys['N5']:
            case keys['N6']:
            case keys['N7']:
            case keys['N8']:
            case keys['N9']:
                c += (j - 0x30)['toString'](), $(eF(0x41b))[eF(0x38e)](eF(0x242)[eF(0x295)](0x0, c[eF(0x1ed)] * 0x2));
                c['length'] === 0x4 && ($(eF(0x31f))['hide'](), b(c));
                return;
            case keys[eF(0x3d6)]:
                $(eF(0x31f))[eF(0x393)](), b('');
                return;
            case keys[eF(0x4b6)]:
                f(e - 0x1);
                return;
            case keys[eF(0x427)]:
                f(e + 0x1);
                return;
            case keys['UP']:
                f(0x1);
                return;
            case keys['DOWN']:
                f(0x0);
                return;
            case keys[eF(0x3e9)]:
                _doKey(keys['N0'] + e);
                return;
        }
    };
}

function enterPinCode(a, b) {
    _enterPinCode(a, b);
}

function exitPortal() {
    confirmBox('Do\x20you\x20want\x20to\x20exit\x20player?', function() {
        setCurrent(catIndex, primaryIndex), playType = 0x0, stbExit();
    });
}

function hsvToRgb(a, c, d) {
    var eG = plw,
        e, j, k, l, m, n, o, u;
    a = Math[eG(0x361)](0x0, Math['min'](0x168, a)), c = Math['max'](0x0, Math[eG(0x463)](0x64, c)), d = Math['max'](0x0, Math[eG(0x463)](0x64, d)), c /= 0x64, d /= 0x64;
    if (c == 0x0) return e = j = k = d, [Math[eG(0x51a)](e * 0xff), Math['round'](j * 0xff), Math[eG(0x51a)](k * 0xff)];
    a /= 0x3c, l = Math[eG(0x1f2)](a), m = a - l, n = d * (0x1 - c), o = d * (0x1 - c * m), u = d * (0x1 - c * (0x1 - m));
    switch (l) {
        case 0x0:
            e = d, j = u, k = n;
            break;
        case 0x1:
            e = o, j = d, k = n;
            break;
        case 0x2:
            e = n, j = d, k = u;
            break;
        case 0x3:
            e = n, j = o, k = d;
            break;
        case 0x4:
            e = u, j = n, k = d;
            break;
        default:
            e = d, j = n, k = o;
    }
    return [Math[eG(0x51a)](e * 0xff), Math[eG(0x51a)](j * 0xff), Math['round'](k * 0xff)];
}

function colorDialog() {
    var eH = plw,
        a = 0x32,
        b = 0x55;
    a = parseInt(eSHLcolor[eH(0x20e)](',')[0x0]), b = parseInt(eSHLcolor[eH(0x20e)](',')[0x1]);

    function c(d, e) {
        var eI = eH;
        a += d;
        if (a > 0x168) a = 0x0;
        else {
            if (a < 0x0) a = 0x168;
        }
        b = Math[eI(0x463)](Math['max'](b + e, 0x0), 0x64);
        var f = hsvToRgb(a, b, 0x64);
        $(eI(0x3de))['css'](eI(0x58b), eI(0x293) + f[0x0] + ',' + f[0x1] + ',' + f[0x2] + ')');
    }
    saveCPD(), listCaption['innerHTML'] = _(eH(0x218)), listPodval[eH(0x282)] = btnDiv(keys[eH(0x3d6)], strRETURN, eH(0x26c)) + btnDiv(keys['ENTER'], strENTER, 'Set'), listDetail[eH(0x282)] = '', $(eH(0x2fb))[eH(0x38e)](eH(0x5c6) + _('Color') + ':<br/><br/>&nbsp;<span\x20id=\x22step\x22\x20style=\x22font-size:\x20150%;\x22>&nbsp;1234567890&nbsp;<span\x20style=\x22background-color:' + curColorB + eH(0x390) + eH(0x3f1) + strLEFT + eH(0x546) + strRIGHT + eH(0x5be) + _(eH(0x340)) + eH(0x3cd) + strUP + eH(0x2b9) + strDOWN + eH(0x5be) + _(eH(0x44c)) + '<br>' + btnDiv(keys[eH(0x564)], '', eH(0x375)) + eH(0x212) + btnDiv(keys[eH(0x442)], '', eH(0x53f)) + eH(0x212) + btnDiv(keys[eH(0x565)], '', eH(0x2b7)) + '</div>')[eH(0x592)](), c(0x0, 0x0), aboutKeyHandler = function(d) {
        var eJ = eH;
        switch (d) {
            case keys['UP']:
                c(0x0, 0x5);
                return;
            case keys[eJ(0x48a)]:
                c(0x0, -0x5);
                return;
            case keys[eJ(0x427)]:
                c(0xa, 0x0);
                return;
            case keys[eJ(0x4b6)]:
                c(-0xa, 0x0);
                return;
            case keys['YELLOW']:
                a = 0x32, b = 0x55, c(0x0, 0x0);
                return;
            case keys['GREEN']:
                a = 0x5a, b = 0x55, c(0x0, 0x0);
                return;
            case keys[eJ(0x565)]:
                a = 0xb4, b = 0x55, c(0x0, 0x0);
                return;
            case keys[eJ(0x3e9)]:
                eSHLcolor = a + ',' + b;
            case keys[eJ(0x3d6)]:
                $('#listAbout')[eJ(0x3d9)]('')['hide'](), restoreCPD();
                return;
            default:
                return;
        }
    };
}

function plb(a, b) {
    var c = pla();
    return plb = function(d, e) {
        d = d - 0x1e9;
        var f = c[d];
        return f;
    }, plb(a, b);
}

function selColorDialog() {
    var eK = plw,
        a = parseInt(eSHLcolSel[eK(0x20e)](',')[0x0]),
        b = parseInt(eSHLcolSel[eK(0x20e)](',')[0x1]);

    function c(d, e) {
        var eL = eK;
        a += d;
        if (a > 0x168) a = 0x0;
        else {
            if (a < 0x0) a = 0x168;
        }
        b = Math['min'](Math[eL(0x361)](b + e, 0x0), 0x64);
        var f = hsvToRgb(a, b, 0x32);
        $(eL(0x3de))['css'](eL(0x3d7), eL(0x293) + f[0x0] + ',' + f[0x1] + ',' + f[0x2] + ')');
    }
    saveCPD(), listCaption['innerHTML'] = _('Background\x20color\x20of\x20selected\x20item'), listPodval[eK(0x282)] = btnDiv(keys[eK(0x3d6)], strRETURN, eK(0x26c)) + btnDiv(keys[eK(0x3e9)], strENTER, 'Set'), listDetail[eK(0x282)] = '', $(eK(0x2fb))[eK(0x38e)](eK(0x5c6) + _(eK(0x486)) + eK(0x30f) + curColor + eK(0x1f8) + eK(0x3f1) + strLEFT + '</div>&nbsp;<div\x20class=\x22btn\x22\x20onclick=\x22_doKey(keys.RIGHT);\x22>' + strRIGHT + eK(0x5be) + _(eK(0x340)) + eK(0x3cd) + strUP + eK(0x2b9) + strDOWN + eK(0x5be) + _(eK(0x44c)) + eK(0x212) + btnDiv(keys['RED'], '', eK(0x1f6), '0') + eK(0x234))[eK(0x592)](), c(0x0, 0x0), aboutKeyHandler = function(d) {
        var eM = eK;
        switch (d) {
            case keys['UP']:
                c(0x0, 0x5);
                return;
            case keys['DOWN']:
                c(0x0, -0x5);
                return;
            case keys[eM(0x427)]:
                c(0xa, 0x0);
                return;
            case keys[eM(0x4b6)]:
                c(-0xa, 0x0);
                return;
            case keys['N0']:
            case keys[eM(0x2fc)]:
                a = 0xf0, b = 0x19, c(0x0, 0x0);
                return;
            case keys[eM(0x3e9)]:
                eSHLcolSel = a + ',' + b;
            case keys[eM(0x3d6)]:
                $(eM(0x2fb))[eM(0x3d9)]('')[eM(0x393)](), restoreCPD();
                return;
            default:
                return;
        }
    };
}

function backColorDialog() {
    var eN = plw,
        a = parseInt(eSHLcolorB[eN(0x20e)](',')[0x0]),
        b = parseInt(eSHLcolorB[eN(0x20e)](',')[0x1]);

    function c(d, e) {
        var eO = eN;
        a += d;
        if (a > 0x168) a = 0x0;
        else {
            if (a < 0x0) a = 0x168;
        }
        b = Math[eO(0x463)](Math['max'](b + e, 0x0), 0x32);
        var f = hsvToRgb(a, 0x64, b);
        $(eO(0x3de))[eO(0x364)](eO(0x3d7), 'rgb(' + f[0x0] + ',' + f[0x1] + ',' + f[0x2] + ')');
    }
    saveCPD(), listCaption[eN(0x282)] = _(eN(0x574)), listPodval[eN(0x282)] = btnDiv(keys[eN(0x3d6)], strRETURN, eN(0x26c)) + btnDiv(keys[eN(0x3e9)], strENTER, eN(0x358)), listDetail['innerHTML'] = '', $(eN(0x2fb))[eN(0x38e)](eN(0x5c6) + _(eN(0x574)) + eN(0x552) + curColor + '\x22>1234567890<span\x20style=\x22color:' + curColor + eN(0x3d8) + eN(0x3f1) + strLEFT + eN(0x546) + strRIGHT + eN(0x5be) + _(eN(0x340)) + eN(0x3cd) + strUP + eN(0x2b9) + strDOWN + eN(0x5be) + _(eN(0x51f)) + eN(0x234))[eN(0x592)](), c(0x0, 0x0), aboutKeyHandler = function(d) {
        var eP = eN;
        switch (d) {
            case keys['UP']:
                c(0x0, 0x5);
                return;
            case keys['DOWN']:
                c(0x0, -0x5);
                return;
            case keys[eP(0x427)]:
                c(0xa, 0x0);
                return;
            case keys['LEFT']:
                c(-0xa, 0x0);
                return;
            case keys[eP(0x3e9)]:
                eSHLcolorB = a + ',' + b;
            case keys[eP(0x3d6)]:
                $(eP(0x2fb))[eP(0x3d9)]('')[eP(0x393)](), restoreCPD();
                return;
            default:
                return;
        }
    };
}

function joyMenu() {
    var eQ = plw,
        a = eQ(0x4d9);
    $(eQ(0x31f))[eQ(0x38e)](eQ(0x371) + eQ(0x490) + a + btnDiv(keys['UP'], strUP, eQ(0x3a1)) + eQ(0x489) + eQ(0x2d1) + a + btnDiv(keys[eQ(0x4b6)], strLEFT, '<br>Menu') + eQ(0x247) + a + btnDiv(keys[eQ(0x3e9)], strENTER, eQ(0x3c1)) + eQ(0x247) + a + btnDiv(keys['RIGHT'], strRIGHT, eQ(0x41a)) + eQ(0x4a3) + eQ(0x490) + a + btnDiv(keys[eQ(0x48a)], strDOWN, playType ? eQ(0x4da) : '<br>Previous<br>channel') + eQ(0x489) + '</table>' + btnDiv(keys[eQ(0x3d6)], strRETURN, eQ(0x26c)))[eQ(0x592)](), dialogBoxKeyHandler = function(b) {
        var eR = eQ;
        $(eR(0x31f))[eR(0x393)]();
        switch (b) {
            case keys[eR(0x3e9)]:
                _doKey(keys[eR(0x21c)]);
                return;
            case keys['UP']:
                shiftArchiveSelect(0x0);
                return;
            case keys[eR(0x48a)]:
                playType ? _doKey(keys[eR(0x34d)]) : prevProg();
                return;
            case keys[eR(0x427)]:
                toggleAudioTrack();
                return;
            case keys[eR(0x4b6)]:
                popupList();
                return;
            case keys[eR(0x3d6)]:
                return;
        }
    };
}
var dialogBoxKeyHandler = null,
    selectBoxKeyHandler = null;

function keyHandler(a) {
    var eS = plw;
    try {
        setSleepTimeout();
        var b = stbEventToKeyCode(a);
        if (!b) return;
        if (typeof selectBoxKeyHandler == 'function' && $(eS(0x387))['is'](eS(0x43e))) {
            if (selectBoxKeyHandler(b)) return;
            selectBoxKeyHandler = null, numProg[eS(0x354)][eS(0x54a)] = eS(0x217);
        }
        if ($(eS(0x31f))['is'](eS(0x43e))) {
            dialogBoxKeyHandler(b);
            return;
        }
        switch (b) {
            case keys[eS(0x1ef)]:
                toggleMute();
                return;
            case keys[eS(0x294)]:
                changeVolume(-sVolumeStep);
                return;
            case keys[eS(0x40f)]:
                changeVolume(sVolumeStep);
                return;
            case keys[eS(0x2c6)]:
                toggleStandby();
                return;
        }
        if ($(eS(0x363))['is'](eS(0x43e))) {
            editKey(b);
            return;
        }
        if ($('#listAbout')['is'](eS(0x43e))) {
            if (aboutKeyHandler(b)) {
                a[eS(0x517)]();
                return;
            }
            switch (b) {
                case keys['ENTER']:
                case keys[eS(0x3ac)]:
                case keys[eS(0x3d6)]:
                    $(eS(0x2fb))[eS(0x393)]();
                    return;
            }
            return;
        }
        if (list[eS(0x354)][eS(0x54a)] != 'none') {
            a[eS(0x517)]();
            if (sArrowFun == 0x1) switch (b) {
                case keys['LEFT']:
                    changeVolume(-sVolumeStep);
                    return;
                case keys['RIGHT']:
                    changeVolume(sVolumeStep);
                    return;
            }
            if (listKeyHandler(b)) return;
            switch (b) {
                case keys[eS(0x3ac)]:
                    closeList();
                    return;
                case keys['UP']:
                    changeSelect(-0x1);
                    return;
                case keys[eS(0x48a)]:
                    changeSelect(0x1);
                    return;
                case keys[eS(0x4b6)]:
                case keys['RW']:
                case keys[eS(0x24d)]:
                    changeSelect(-pageSize);
                    return;
                case keys['RIGHT']:
                case keys['FF']:
                case keys[eS(0x2db)]:
                    changeSelect(pageSize);
                    return;
                case keys[eS(0x2f3)]:
                    if (sPNFun == 0x3) changeSelect(-selIndex);
                    else changeSelect(-pageSize);
                    return;
                case keys[eS(0x27a)]:
                    if (sPNFun == 0x3) changeSelect(listArray['length'] - selIndex - 0x1);
                    else changeSelect(pageSize);
                    return;
            }
            return;
        }
        if (playType) switch (b) {
            case keys['N1']:
                shiftArchive(-s13dur);
                return;
            case keys['N3']:
                shiftArchive(s13dur);
                return;
            case keys['N4']:
                shiftArchive(-s46dur);
                return;
            case keys['N6']:
                shiftArchive(s46dur);
                return;
            case keys['N7']:
                shiftArchive(-s79dur);
                return;
            case keys['N9']:
                shiftArchive(s79dur);
                return;
            case keys['N2']:
                keyFun(0x14);
                return;
            case keys['N5']:
                keyFun(0x15);
                return;
            case keys[eS(0x3e9)]:
                if (forcePlay) break;
            case keys['N0']:
            case keys[eS(0x29f)]:
            case keys[eS(0x21c)]:
                if (stbIsPlaying()) forcePlay = ![], showShift(_(eS(0x45c))), showChanelInfo(0x2), stbPause();
                else {
                    forcePlay = !![], showShift(_(eS(0x5b0))), $i1[eS(0x393)]();
                    if (playType < 0x0 || fileArchive) stbContinue();
                    else playArchive(playType + playTime - (s10resum ? 0xa : 0x0));
                }
                return;
            case keys['N8']:
                b = keys['STOP'];
                break;
        } else switch (b) {
            case keys['N0']:
                if (nProg == '') {
                    liveStop();
                    return;
                };
            case keys['N1']:
            case keys['N2']:
            case keys['N3']:
            case keys['N4']:
            case keys['N5']:
            case keys['N6']:
            case keys['N7']:
            case keys['N8']:
            case keys['N9']:
                numberProg(b - 0x30);
                return;
            case keys[eS(0x29f)]:
            case keys[eS(0x21c)]:
                liveStop();
                return;
        }
        switch (b) {
            case keys[eS(0x34d)]:
                showShift(_(playType ? eS(0x536) : 'Restart\x20stream')), playChannel(catIndex, primaryIndex);
                return;
            case keys['RW']:
                keyFun(sRWfun);
                return;
            case keys['FF']:
                keyFun(sFFfun);
                return;
            case keys[eS(0x2f3)]:
                keyFun(sPREVfun);
                return;
            case keys[eS(0x27a)]:
                keyFun(sNEXTfun);
                return;
            case keys['CH_UP']:
                plusProg();
                return;
            case keys['CH_DOWN']:
                minusProg();
                return;
            case keys[eS(0x291)]:
                prevProg();
                return;
            case keys['ENTER']:
                if (playType == -0x174876e800) {
                    mediaList(null);
                    return;
                };
                if (playType > 0x0 && !sOkfun) {
                    epgList(catIndex, primaryIndex, ![]);
                    return;
                };
            case keys[eS(0x20a)]:
                channelsList(catIndex, primaryIndex);
                return;
            case keys[eS(0x460)]:
                togglePip();
                return;
            case keys['RETURN']:
                if ($i1['is'](eS(0x43e))) {
                    infoBarHide();
                    return;
                }
                switch (sEfun) {
                    case 0x0:
                        return;
                    case 0x1:
                        exitPortal();
                        return;
                    case 0x2:
                        joyMenu();
                        return;
                    case 0x3:
                        popupList();
                        return;
                    case 0x4:
                        prevProg();
                        return;
                }
                return;
            case keys[eS(0x560)]:
                if (playType > -0x1) epgList(catIndex, primaryIndex, ![]);
                return;
            case keys[eS(0x3f8)]:
                showChanelInfo();
                return;
            case keys[eS(0x4b6)]:
                keyFun(sALfun);
                return;
            case keys[eS(0x427)]:
                keyFun(sARfun);
                return;
            case keys['UP']:
                keyFun(sAUfun);
                return;
            case keys[eS(0x48a)]:
                keyFun(sADfun);
                return;
            case keys[eS(0x2fc)]:
                keyFun(sRfun);
                return;
            case keys['GREEN']:
                keyFun(sGfun);
                return;
            case keys[eS(0x564)]:
                keyFun(sYfun);
                return;
            case keys[eS(0x565)]:
                keyFun(sBfun);
                return;
            case keys['TOOLS']:
                popupList();
                return;
            case keys['SETUP']:
                optionsList();
                return;
            case keys[eS(0x44e)]:
                toggleZoom();
                return;
            case keys[eS(0x219)]:
                toggleAspectRatio();
                return;
            case keys['AUDIO']:
                toggleAudioTrack();
                return;
            case keys[eS(0x5c9)]:
                toggleSubtitle();
                return;
            case keys[eS(0x3ac)]:
                exitPortal();
                return;
            default:
                log(eS(0x21f), '<b>Warning:</b>\x20key\x20' + b + eS(0x3f5));
                break;
        }
    } catch (c) {}
}

function keyFun(a) {
    var eT = plw;
    switch (a) {
        case 0x0:
            if (playType > -0x1) recordsList(catIndex, primaryIndex, ![]);
            return;
        case 0x1:
            popupList();
            return;
        case 0x2:
            prevProg();
            return;
        case 0x3:
            shiftArchiveSelect(0x0);
            return;
        case 0x4:
            showChanelInfo();
            return;
        case 0x5:
            toggleAspectRatio();
            return;
        case 0x6:
            toggleAudioTrack();
            return;
        case 0x7:
            togglePip();
            return;
        case 0x8:
            pipIndex = null, stbStopPip();
            return;
        case 0x9:
            bucketsList(catIndex);
            return;
        case 0xa:
            if (playType > -0x1) epgList(catIndex, primaryIndex, ![]);
            return;
        case 0xb:
            popMedia();
            return;
        case 0xc:
            joyMenu();
            return;
        case 0xd:
            changeVolume(sVolumeStep);
            return;
        case 0xe:
            changeVolume(-sVolumeStep);
            return;
        case 0xf:
            if (playType) shiftArchiveSelect(0x3c);
            else plusProg();
            return;
        case 0x10:
            if (playType) shiftArchiveSelect(0x0);
            else minusProg();
            return;
        case 0x11:
            toggleSubtitle();
            return;
        case 0x12:
            shiftArchive(-0x3c);
            return;
        case 0x13:
            if (playType) shiftArchive(0x3c);
            else shiftArchiveSelect(-0x3c);
            return;
        case 0x14:
            if (playType < 0x0) {
                shiftArchive(-0x5b8d80);
                return;
            }
            if (!playType) {
                timeShift(0x0);
                return;
            }
            if (playType + playTime - epgArray[curProg][eT(0x200)] > 0x1e) playArchive(epgArray[curProg][eT(0x200)]);
            else playArchive(epgArray[curProg - 0x1][eT(0x200)]);
            return;
        case 0x15:
            if (playType < 0x0) return;
            if (!playType) {
                shiftArchiveSelect(-0x3c);
                return;
            }
            if (epgArray[curProg + 0x1][eT(0x200)] < Date['now']() / 0x3e8) playArchive(epgArray[curProg + 0x1]['time']);
            else showShift(_(eT(0x536))), playChannel(catIndex, primaryIndex);
            return;
    }
}

function body_onClick(a) {
    var eU = plw;
    if (!a[eU(0x3ca)]) return;
    if ($(eU(0x31f))['is'](eU(0x43e)) || $('#numprog')['is'](':visible')) {
        _doKey(keys[eU(0x3d6)]);
        return;
    }
    if (list[eU(0x354)][eU(0x54a)] != eU(0x217)) return;
    var b = document[eU(0x542)]['getBoundingClientRect']()[eU(0x497)] || window[eU(0x3a9)];
    if (a[eU(0x3ca)] < b * 0.2) popupList();
    else {
        if (a[eU(0x3ca)] > b * 0.8) showChanelInfo();
        else _doKey(keys[eU(0x3e9)]);
    }
}
document[plw(0x542)][plw(0x445)] = body_onClick;

function list_OnClick() {
    var eV = plw;
    _doKey(keys[eV(0x3d6)]);
}
list[plw(0x445)] = list_OnClick, $i1['click'](function(a) {
    var eW = plw;
    a[eW(0x4ca)](), showChanelInfo();
});
var $progress_div = $(plw(0x347));

function pos2text(a) {
    var eX = plw,
        b = new Date(a * 0x3e8);
    return _t2(b['getHours']()) + ':' + _t2(b[eX(0x34c)]()) + ':' + _t2(b[eX(0x449)]());
}
$progress_div[plw(0x35a)](function() {
    var eY = plw;
    if (!playType && !chanels[curList[primaryIndex]]['rec']) return;
    event[eY(0x4ca)]();
    var a = (event[eY(0x4d1)] - $progress_div[eY(0x521)]()[eY(0x47a)]) / $progress_div[eY(0x3ff)]();
    if (playType < 0x0) {
        var b = Math[eY(0x361)](Math[eY(0x51a)](a * stbGetLen()), 0x0),
            c = Math[eY(0x1f2)](b / 0xe10),
            d = Math['floor'](b % 0xe10 / 0x3c),
            e = b % 0x3c;
        showShift(eY(0x2a8) + (c ? c + ':' : '') + _t2(d) + ':' + _t2(e) + '\x20<<'), stbSetPosTime(b);
        return;
    }
    var b = Math['round'](a * (_prog100[eY(0x4dc)] - _prog100['time']) + _prog100[eY(0x200)]);
    if (b < Date[eY(0x35c)]() / 0x3e8) {
        if (!playType) {
            timeShift(Math[eY(0x51a)](Date[eY(0x35c)]() / 0x3e8 - b));
            return;
        }
        showShift(eY(0x2a8) + pos2text(b) + eY(0x46e)), playArchive(b);
    } else showShift(_(playType ? eY(0x536) : eY(0x40b))), playChannel(catIndex, primaryIndex);
});
var tooltip = document[plw(0x42c)](plw(0x509)),
    $tooltipSpan = $(plw(0x5d4), tooltip);
$progress_div[plw(0x428)](function(a) {
    var eZ = plw;
    if (!playType && !chanels[curList[primaryIndex]][eZ(0x399)]) return;
    var b = a[eZ(0x4d1)];
    tooltip[eZ(0x354)][eZ(0x54a)] = eZ(0x29c), tooltip[eZ(0x354)][eZ(0x241)] = $progress_div[eZ(0x5c8)]()[eZ(0x241)] - $progress_div['height']() + 'px', tooltip[eZ(0x354)]['left'] = b - tooltip['offsetWidth'] / 0x2 + 'px';
    var c = (b - $progress_div['position']()[eZ(0x47a)]) / $progress_div[eZ(0x3ff)]();
    if (playType < 0x0) {
        var d = Math['max'](Math[eZ(0x51a)](c * stbGetLen()), 0x0),
            f = Math[eZ(0x1f2)](d / 0xe10),
            g = Math[eZ(0x1f2)](d % 0xe10 / 0x3c),
            i = d % 0x3c;
        $tooltipSpan[eZ(0x3d9)]((f ? f + ':' : '') + _t2(g) + ':' + _t2(i));
    } else {
        var d = Math[eZ(0x51a)](c * (_prog100[eZ(0x4dc)] - _prog100['time']) + _prog100['time']);
        $tooltipSpan['text'](pos2text(d));
    }
    clearTimeout(infoTimeout), infoTimeout = setTimeout(infoBarHideT, sInfoTimeout * 0x3e8);
}), $progress_div[plw(0x31e)](function() {
    var f0 = plw;
    tooltip[f0(0x354)][f0(0x54a)] = '';
});

function browserName() {
    return 'dune';
}

function saveChannelsCats() {
    var f1 = plw;
    if (!sFavorites) {
        providerSetItem(f1(0x302), JSON[f1(0x38c)](catsArray[f1(0x336)](0x1)));
        var a = {};
        jQuery[f1(0x5a1)](a, cats), delete a[_(f1(0x368))], providerSetItem('cats', JSON[f1(0x38c)](a));
    } else favoritesArray = cats[_(f1(0x534))], providerSetItem(f1(0x3ba), JSON['stringify'](favoritesArray));
}

function infoBox(a) {
    var f2 = plw;
    $(f2(0x31f))['html'](f2(0x2bd) + a + f2(0x53d))['show'](), dialogBoxKeyHandler = function(b) {
        var f3 = f2;
        $(f3(0x31f))['hide']();
    };
}

function confirmBox(a, b, c) {
    var f4 = plw;
    $(f4(0x31f))[f4(0x38e)](f4(0x2bd) + _(a) + f4(0x2cd) + btnDiv(keys[f4(0x3e9)], strENTER, 'Yes') + f4(0x53d))[f4(0x592)](), dialogBoxKeyHandler = function(d) {
        var f5 = f4;
        $('#dialogbox')['hide']();
        if (d == keys[f5(0x3e9)]) b();
        else {
            if (typeof c == f5(0x34b)) c();
        }
    };
}
var catsArray = [],
    cats = {},
    parental = /null/,
    parentalArray = [],
    favoritesArray = [];

function onChanelsLoaded() {
    var f6 = plw;
    try {
        if (cList[f6(0x1ed)]) {
            $(launch_id)[f6(0x43a)](_('<br/>Processing\x20the\x20channel\x20list...'));
            if (!sFavorites) {
                var a = providerGetItem(f6(0x302)) || ![];
                if (a) try {
                    catsArray = JSON['parse'](a), cats = JSON[f6(0x4a8)](providerGetItem(f6(0x402)));
                } catch (d) {
                    catsArray = [], cats = {};
                }
            } else {
                a = providerGetItem(f6(0x3ba)) || ![];
                if (a) try {
                    favoritesArray = JSON['parse'](a);
                } catch (f) {
                    favoritesArray = [];
                }
            }!catsArray[f6(0x1ed)] && cList['forEach'](function(g, h, i) {
                var f7 = f6,
                    j = chanels[g];
                j[f7(0x2fe)][f7(0x2b3)] && (!cats[j[f7(0x2fe)][f7(0x226)]] && (catsArray[f7(0x55d)](j[f7(0x2fe)]['name']), cats[j[f7(0x2fe)][f7(0x226)]] = []), cats[j[f7(0x2fe)]['name']][f7(0x55d)](g));
            });
            a = providerGetItem(f6(0x3a6)) || ![];
            if (a) try {
                parentalArray = JSON['parse'](a);
            } catch (g) {
                parentalArray = [];
            }!parentalArray[f6(0x1ed)] && cList[f6(0x5ce)](function(h, i, j) {
                var f8 = f6,
                    k = chanels[h];
                if (k[f8(0x2fe)][f8(0x2b3)]) {
                    if (parental[f8(0x4e0)](k[f8(0x2fe)]['name'])) parentalArray[f8(0x55d)](h);
                }
            });
            catsArray[f6(0x4e9)](_(f6(0x368))), cats[_('All')] = cList['slice']();
            sFavorites && (catsArray[f6(0x4e9)](_('Favorites')), cats[_(f6(0x534))] = favoritesArray);
            sSortAbc = parseInt(providerGetItem(f6(0x518))) || 0x0;
            if (sSortAbc) sortChannels();
            $(launch_id)[f6(0x43a)](_(f6(0x2d3)));
            var b = cats[catsArray[catIndex]] || [];
            (!b || !b[primaryIndex]) && (primaryIndex = 0x0, catIndex = sFavorites ? 0x1 : 0x0);
            try {
                playChannel(catIndex, primaryIndex);
            } catch (h) {
                primaryIndex = 0x0, catIndex = sFavorites ? 0x1 : 0x0;
                try {
                    playChannel(catIndex, primaryIndex);
                } catch (i) {}
            }
            try {
                loadEpgTimers();
            } catch (j) {}
        } else playType = 0x0, setCurrent(sFavorites ? 0x1 : 0x0, 0x0), $(launch_id)[f6(0x43a)](_('<br/>Channel\x20list\x20not\x20received\x20!!!')), popupList(popupActions[f6(0x548)](noProvParam) + 0x1), infoBox(_(f6(0x201))), launch_id = f6(0x47c);
    } catch (k) {
        $(launch_id)[f6(0x43a)](f6(0x5d6) + k[f6(0x226)] + ',\x20message\x20' + k[f6(0x2e2)] + f6(0x308) + typeof k), popupList(popupActions[f6(0x548)](noProvParam) + 0x1), infoBox(_(f6(0x4bf)) + '<br/><br/><b>Exception:</b>\x20name\x20' + k[f6(0x226)] + f6(0x329) + k['message'] + f6(0x308) + typeof k), launch_id = f6(0x47c);
    }
    $(launch_id)[f6(0x393)]();
}
var arrTimezone = [plw(0x2f6), '0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', plw(0x3ea), plw(0x39b), plw(0x2e5), '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', plw(0x335), plw(0x499), '-12'];

function setTimezone() {
    var f9 = plw;
    if (arrTimezone[sTimezone] == undefined) sTimezone = 0x0;
    if (sTimezone) Date[f9(0x36f)](-0x3c * arrTimezone[sTimezone]);
}

function setFontSize() {
    var fa = plw;
    pageSize = sPageSize;
    var a = getHeightK(),
        b = getWidthK(),
        c = (window[fa(0x3a9)] - 0x5a * a) / pageSize - sFontShift * a;
    c = Math[fa(0x361)](c, 0x10 * a), c = Math[fa(0x463)](c, 0x28 * a), $('#list')[fa(0x364)]('font-size', c + 'px'), $('#testFont')['css'](fa(0x4d4), c + 'px'), $(fa(0x3c6))[fa(0x364)](fa(0x4d4), c + 'px'), c = Math['max'](c, 0x16 * a), $i1[fa(0x364)](fa(0x4d4), c + 'px'), $('#numprog')['css'](fa(0x4d4), c + 'px'), $('#dialogbox')['css']('font-size', c + 'px'), c = Math[fa(0x463)](c, 0x19 * a), $(fa(0x430))[fa(0x364)](fa(0x4d4), c + 'px'), $(fa(0x5a6))['css'](fa(0x4d4), c + 'px'), $(fa(0x3c6))[fa(0x5cc)](sPermanentTime != 0x0)[fa(0x573)](fa(0x36e), sPermanentTime != 0x2)[fa(0x364)](fa(0x3d7), ''), $(fa(0x542))[fa(0x364)]('font-family', [fa(0x270), 'Roboto', fa(0x588), 'Caveat', fa(0x4fc), fa(0x309), fa(0x4ac)][sFont]), $('#info')['css']('padding', 0x14 * a + 'px'), $('#numprog')[fa(0x364)]({
        'left': 0x14 * a + 'px',
        'top': 0x14 * a + 'px',
        'padding': 0xa * a + 'px'
    }), $(fa(0x3c6))[fa(0x364)]({
        'right': 0x14 * a + 'px',
        'top': 0x14 * b + 'px',
        'padding': 0xa * a + fa(0x2b8) + 0xa * b + 'px'
    }), $(fa(0x47c))[fa(0x364)]({
        'font-size': 0x10 * a + 'px',
        'padding': 0x64 * a + 'px'
    }), $(fa(0x304))['css']({
        'margin': 0x64 * a + 'px'
    }), $('#list')[fa(0x364)]({
        'margin': 0xa * a + fa(0x2b8) + 0xa * b + 'px'
    }), $(fa(0x430))['css']({
        'height': 0x1e * a + 'px'
    }), $(fa(0x37c))[fa(0x364)]({
        'width': 0x50 * b + 'px',
        'font-size': 0x16 * a + 'px'
    }), $(fa(0x439))[fa(0x364)]({
        'font-size': 0x10 * a + 'px'
    }), $(fa(0x5a6))[fa(0x364)]({
        'height': 0x1e * a + 'px'
    }), $(fa(0x491))[fa(0x364)]({
        'width': 0x202 * b + 0x1 + 'px',
        'top': 0x14a * a + 'px',
        'bottom': 0x1e * a + 0x1 + 'px',
        'padding': 0x4 * a + fa(0x2b8) + 0x4 * b + 'px'
    }), $(fa(0x527))[fa(0x364)]({
        'bottom': 0x1e * a + 0x1 + 'px',
        'padding': 0xa * a + 'px',
        'margin': 0xa * a + 'px'
    }), $(fa(0x227))[fa(0x364)]({
        'left': 0x20a * b + 'px',
        'top': 0x1e * a + 0x1 + 'px',
        'bottom': 0x1e * a + 0x1 + 'px',
        'padding': 0x4 * a + fa(0x59c)
    }), $('#listAbout')[fa(0x364)]({
        'left': 0x20a * b + 'px',
        'top': 0x1e * a + 0x1 + 'px',
        'bottom': 0x1e * a + 0x1 + 'px',
        'padding': 0xa * a + 'px\x20' + 0xa * b + 'px'
    }), $(fa(0x363))[fa(0x364)]({
        'left': 0x20a * b + 'px',
        'top': 0x1e * a + 0x1 + 'px',
        'bottom': 0x1e * a + 0x1 + 'px',
        'padding': 0xa * a + 'px\x20' + 0xa * b + 'px'
    }), $(fa(0x433))[fa(0x364)]({
        'padding': 0x14 * a + fa(0x2b8) + 0x14 * b + 'px'
    }), $('#picon')['css']({
        'width': 0x50 * b + 'px',
        'height': 0x50 * a + 'px'
    }), $(fa(0x39f))['css']({
        'width': 0x410 * b + 'px',
        'padding': fa(0x559) + 0x14 * b + 'px'
    }), $(fa(0x209))[fa(0x364)]({
        'width': 0x46 * b + 'px'
    }), $(fa(0x347))[fa(0x364)]({
        'margin': 0x2 * a + fa(0x59c)
    }), $(fa(0x54e))[fa(0x364)]({
        'height': 0x6 * a + 'px'
    }), $(fa(0x276))['css']({
        'height': 0x6 * a + 'px'
    }), $(fa(0x3ee))['css']({
        'width': 0x46 * b + 'px',
        'font-size': 0x16 * a + 'px'
    }), $(fa(0x468))[fa(0x364)]({
        'width': 0x46 * b + 'px',
        'font-size': 0x16 * a + 'px'
    }), $(fa(0x5ba))[fa(0x364)]({
        'width': 0x384 * b + 'px'
    }), $(fa(0x24f))[fa(0x364)]({
        'width': 0x46 * b + 'px',
        'font-size': 0x16 * a + 'px'
    }), $('#nend_time')[fa(0x364)]({
        'width': 0x46 * b + 'px',
        'font-size': 0x16 * a + 'px'
    }), $(fa(0x4d8))[fa(0x364)]({
        'width': 0x384 * b + 'px'
    }), $(fa(0x531))[fa(0x364)]({
        'width': 0x50 * b + 'px',
        'font-size': 0x16 * a + 'px'
    }), $(fa(0x2aa))[fa(0x364)]({
        'font-size': 0x10 * a + 'px'
    }), $(fa(0x508))[fa(0x364)]({
        'font-size': 0x10 * a + 'px'
    }), $(fa(0x54d))[fa(0x364)]({
        'padding': fa(0x415) + 0x64 * b + 'px',
        'margin': fa(0x2fa) + 0x14 * a + fa(0x59c)
    }), $('#buffering')['css']({
        'left': 0xa * a + 'px',
        'top': 0xa * a + 'px',
        'width': 0x1e * a + 'px',
        'height': 0x1e * a + 'px',
        'background-size': 0x1e * a + 'px'
    }), $(fa(0x5ac))[fa(0x364)]({
        'right': 0xa * a + 'px',
        'top': 0xa * a + 'px',
        'width': 0x1e * a + 'px',
        'height': 0x1e * a + 'px',
        'background-size': 0x1e * a + 'px'
    }), $(fa(0x3c5))['css']({
        'width': 0x28 * a + 'px',
        'height': 0x28 * a + 'px',
        'background-size': 0x14 * a + 'px'
    }), $(fa(0x203))[fa(0x364)]({
        'left': 0xa * b + 'px',
        'width': 0xf * b + 'px',
        'border': 0x5 * a + fa(0x349)
    }), $(fa(0x31f))[fa(0x364)]({
        'padding': 0xa * a + 'px',
        'margin': 0xa * a + 'px'
    }), $(fa(0x386))[fa(0x364)]({
        'border-radius': 0x6 * a + 'px',
        'padding': fa(0x415) + 0x6 * b + 'px'
    });
    try {
        tooltip[fa(0x354)]['width'] = 0xc * a + 'px', tooltip[fa(0x354)][fa(0x497)] = 0xc * a + 'px', tooltip['style']['border'] = 0x3 * a + 'px\x20solid\x20' + curColor;
    } catch (j) {}
    try {
        var d = $(fa(0x22a)),
            f = d[fa(0x364)](fa(0x4d4));
        d[fa(0x364)]('font-size', 0x16 * a)[fa(0x3d9)]('9');
        var g = d['width']();
        d[fa(0x3d9)]('')[fa(0x364)](fa(0x4d4), f);
        var h = g * 0x7;
        $(fa(0x25d))[fa(0x364)]({
            'width': h + 'px'
        }), $(fa(0x531))[fa(0x364)]({
            'width': h + 'px'
        }), $(fa(0x37c))[fa(0x364)]({
            'width': h + 'px'
        }), $(fa(0x39f))['css']({
            'width': 0x4b0 * b - h * 0x2 + 'px'
        }), $(fa(0x54d))['css']({
            'padding': fa(0x415) + (h + 0x14 * b) + 'px'
        });
    } catch (k) {}
    try {
        var d = $('#testFont'),
            f = d[fa(0x364)](fa(0x4d4)),
            i = $i1[fa(0x364)](fa(0x4d4));
        d[fa(0x364)](fa(0x4d4), i)[fa(0x3d9)]('9');
        var g = d[fa(0x3ff)]();
        d[fa(0x3d9)]('')['css'](fa(0x4d4), f), $(fa(0x209))['css']({
            'width': g * 0x6 + 'px'
        }), $(fa(0x3ee))[fa(0x364)]({
            'width': g * 0x6 + 'px',
            'font-size': 'inherit'
        }), $(fa(0x468))[fa(0x364)]({
            'width': g * 0x6 + 'px',
            'font-size': fa(0x56b)
        }), $(fa(0x5ba))['css']({
            'width': $(fa(0x39f))[fa(0x3ff)]() - g * 0xc + 'px'
        }), $(fa(0x24f))['css']({
            'width': g * 0x6 + 'px',
            'font-size': fa(0x56b)
        }), $('#nend_time')['css']({
            'width': g * 0x6 + 'px',
            'font-size': fa(0x56b)
        }), $(fa(0x4d8))[fa(0x364)]({
            'width': $(fa(0x39f))[fa(0x3ff)]() - g * 0xc + 'px'
        });
    } catch (m) {}
    if (typeof stbCSS === fa(0x34b)) stbCSS();
    $('#descr')[fa(0x364)](fa(0x205), (0x294 - $(fa(0x39f))['height']()) * a + 'px');
}

function setListPos() {
    var fb = plw,
        a = getWidthK(),
        b = getHeightK(),
        c = sListPos ? 0x0 : 0x20a * a,
        d = sListPos ? 0x20a * a : 0x0,
        e = sListPos ? 0x2e2 * a : 0x0;
    $(fb(0x227))[fb(0x364)]({
        'left': c + 'px',
        'right': d + 'px'
    }), $(fb(0x2fb))['css']({
        'left': c + 'px',
        'right': d + 'px'
    }), $(fb(0x363))[fb(0x364)]({
        'left': c + 'px',
        'right': d + 'px'
    }), $(fb(0x491))[fb(0x364)]({
        'left': e + 'px'
    }), $(fb(0x527))['css']({
        'left': e + 'px'
    }), e = sNoSmall ? 0x1e * b + 0x1 : 0x14a * b, $(fb(0x491))[fb(0x364)]({
        'top': e + 'px'
    });
}
var bodyColor = plw(0x56f),
    curColor = plw(0x572),
    curColorB = plw(0x423);

function setColor() {
    var fc = plw;
    $(fc(0x542))['css'](fc(0x58b), bodyColor);
    var a = parseInt(sSHLcolSel[fc(0x20e)](',')[0x0]),
        b = parseInt(sSHLcolSel[fc(0x20e)](',')[0x1]);
    curColorB = fc(0x293) + hsvToRgb(a, b, 0x32)[fc(0x20c)](',') + ')';
    var a = parseInt(sSHLcolor[fc(0x20e)](',')[0x0]),
        b = parseInt(sSHLcolor[fc(0x20e)](',')[0x1]);
    curColor = fc(0x293) + hsvToRgb(a, b, 0x64)[fc(0x20c)](',') + ')', $(fc(0x430))[fc(0x364)](fc(0x2e6), fc(0x4f0) + curColor), $(fc(0x5a6))['css']('border-top', fc(0x4f0) + curColor), $('#listPopUp')[fc(0x364)](fc(0x549), '1px\x20solid\x20' + curColor), $(fc(0x54e))[fc(0x364)]('background-color', curColor), $tooltipSpan[fc(0x364)]({
        'background-color': curColorB,
        'color': curColor
    }), $(fc(0x342))[fc(0x364)](fc(0x58b), curColor), $(fc(0x31f))[fc(0x364)]('border', fc(0x4f0) + curColor);
    try {
        tooltip[fc(0x354)][fc(0x549)] = 0x3 * getHeightK() + fc(0x1e9) + curColor;
    } catch (f) {}
    typeof stbSetOsdOpacity === 'function' && stbSetOsdOpacity(sOsdOpacity * 0xa);
    $(fc(0x2d2))['css'](fc(0x497), 0x32 * getHeightK()), $(fc(0x41f))[fc(0x364)](fc(0x241), (0x32 + 0x120) * getHeightK());
    var c = sListPos ? 0x2f6 : 0xa;
    $(fc(0x4a9))[fc(0x364)]('width', c * getWidthK()), $(fc(0x2ac))[fc(0x364)]('left', (c + 0x200) * getWidthK());
    var a = parseInt(sSHLcolorB[fc(0x20e)](',')[0x0]),
        d = parseInt(sSHLcolorB['split'](',')[0x1]);
    $(fc(0x356))[fc(0x364)](fc(0x3d7), fc(0x293) + hsvToRgb(a, 0x64, d)['join'](',') + ')'), $(fc(0x527))['css'](fc(0x3d7), fc(0x293) + hsvToRgb(a, 0x64, d)[fc(0x20c)](',') + ')');
}

function setEditor() {
    var fd = plw;
    sEditor && typeof showEditKey2 === fd(0x34b) ? (editKey = editKey2, showEditKey = showEditKey2) : (editKey = editKey1, showEditKey = showEditKey1);
}
window['localStorage'] ? (stbGetItem = function(a) {
    return localStorage['getItem'](a);
}, stbSetItem = function(a, b) {
    var fe = plw;
    try {
        localStorage['setItem'](a, b);
    } catch (c) {
        alert(fe(0x321));
    }
}, stbDelItem = function(a) {
    var ff = plw;
    localStorage[ff(0x45e)](a);
}, stbClearAllItems = function() {
    var fg = plw;
    localStorage[fg(0x4b7)]();
}, stbGetAllItems = function() {
    var fh = plw,
        b = {};
    for (var c = 0x0; c < localStorage[fh(0x1ed)]; c++) {
        b[localStorage[fh(0x281)](c)] = localStorage[localStorage[fh(0x281)](c)];
    }
    return b;
}) : (stbGetItem = function(a) {
    var fi = plw;
    if (!new RegExp(fi(0x41d) + decodeURIComponent(a)['replace'](/[\-\.\+\*]/g, fi(0x47d)) + fi(0x4f3))[fi(0x4e0)](document[fi(0x436)])) return '';
    return decodeURIComponent(document[fi(0x436)][fi(0x567)](new RegExp(fi(0x2ca) + decodeURIComponent(a)[fi(0x567)](/[\-\.\+\*]/g, '\x5c$&') + '\x5cs*\x5c=\x5cs*((?:[^;](?!;))*[^;]?).*'), '$1'));
}, stbSetItem = function(a, b) {
    var fj = plw;
    if (a) document[fj(0x436)] = encodeURIComponent(a) + '=' + encodeURIComponent(b) + ';\x20expires=Tue,\x2019\x20Jan\x202038\x2003:14:07\x20GMT;\x20path=/';
}, stbDelItem = function(a) {
    var fk = plw;
    if (a) document[fk(0x436)] = encodeURIComponent(a) + fk(0x4a7);
}, stbClearAllItems = function() {
    var fl = plw,
        a = document[fl(0x436)][fl(0x20e)](';');
    for (var b = 0x0; b < a[fl(0x1ed)]; b++) {
        var c = a[b],
            d = c[fl(0x548)]('='),
            e = d > -0x1 ? c[fl(0x295)](0x0, d) : c;
        document[fl(0x436)] = e + '=;expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=/';
    }
}, stbGetAllItems = function() {
    var fm = plw,
        b = {},
        c = document[fm(0x436)][fm(0x20e)](';');
    for (var d = 0x0; d < c[fm(0x1ed)]; d++) {
        var e = c[d],
            f = e[fm(0x548)]('='),
            g = f > -0x1 ? e[fm(0x295)](0x0, f) : e;
        b[g] = stbGetItem(g);
    }
    return b;
}, sFavorites = -0x1);

function saveCPD() {
    var fn = plw;
    lc = listCaption[fn(0x282)], lp = listPodval[fn(0x282)], ld = listDetail[fn(0x282)], listCaption['innerHTML'] = '', listPodval[fn(0x282)] = '', listDetail[fn(0x282)] = '';
}

function restoreCPD() {
    var fo = plw;
    listCaption[fo(0x282)] = lc, listPodval['innerHTML'] = lp, listDetail['innerHTML'] = ld;
}

function edit_dealer() {
    var fp = plw;

    function a(b) {
        alert(_(b)), setTimeout(function() {
            showEditKey([0x0, 0x1, 0x2]);
        });
    }
    editCaption = _(fp(0x4ad)), editvar = '', setEdit = function() {
        var fq = fp;
        if (!editvar) a(fq(0x3d4));
        else $[fq(0x55b)](host + fq(0x253) + editvar[fq(0x20e)](':')[0x0] + fq(0x2c9) + __cv, function() {
            var fr = fq;
            try {
                doDealer(editvar);
            } catch (b) {
                a(fr(0x3d4));
            }
        })[fq(0x1f0)](function() {
            var fs = fq;
            a(fs(0x3d4));
        });
    }, showEditKey([0x0, 0x1, 0x2]);
}

function edit_dealer_remote() {
    var fy = plw;

    function a(g) {
        alert(_(g)), setTimeout(function() {
            d();
        });
    }
    var b = ![],
        c;

    function d() {
        var ft = plb;
        clearTimeout(e), b = !![], $(ft(0x363))['hide']();
    }
    var e = setTimeout(d, 0x927c0);

    function f() {
        var fu = plb;
        if (b) return;
        $[fu(0x30e)]({
            'url': fu(0x273) + swopUrl + fu(0x38f),
            'data': {
                'c': fu(0x55f),
                'd': c
            },
            'type': fu(0x32d),
            'timeout': 0x2710,
            'cache': ![],
            'success': function(g) {
                var fv = fu;
                if (b) return;
                if (g['status'] === fv(0x269)) setTimeout(f, 0x1388);
                else {
                    if (g[fv(0x3a7)] === 'success') {
                        if (!g[fv(0x23c)]) a(fv(0x3d4));
                        else $[fv(0x55b)](host + fv(0x253) + g[fv(0x23c)][fv(0x20e)](':')[0x0] + fv(0x2c9) + __cv, function() {
                            var fw = fv;
                            try {
                                doDealer(g[fw(0x23c)]), $(fw(0x363))[fw(0x393)]();
                            } catch (h) {
                                a(fw(0x3d4));
                            }
                        })[fv(0x1f0)](function() {
                            a('Error\x20Code!');
                        });
                    }
                }
            },
            'error': function(g) {
                var fx = fu;
                $(fx(0x363))[fx(0x38e)](fx(0x2dc) + g[fx(0x279)] + '</div>');
            }
        });
    }
    listPodval[fy(0x282)] = btnDiv(keys[fy(0x3d6)], strRETURN, 'Close'), $('#listEdit')[fy(0x38e)](fy(0x378) + _('Send\x20request') + fy(0x5bc))['show'](), editKey = function(g) {
        var fz = fy;
        return (g == keys[fz(0x3d6)] || g == keys[fz(0x3ac)]) && d(), !![];
    }, $[fy(0x30e)]({
        'url': 'http://' + swopUrl + fy(0x38f),
        'data': {
            'c': 'get_var',
            'n': _(fy(0x4ad)),
            'v': ''
        },
        'type': fy(0x32d),
        'timeout': 0x2710,
        'cache': ![],
        'success': function(g) {
            var fA = fy;
            c = g['code'], $('#listEdit')['html'](fA(0x420) + _('Request\x20sended!') + '<br/><br/>' + _(fA(0x38b)) + fA(0x453) + curColor + '\x22>' + swopUrl + fA(0x248) + _(fA(0x417)) + fA(0x20d) + curColor + '\x22>' + c + '</span><br/><br/>' + _(fA(0x3e1)) + fA(0x511) + '<div><img\x20src=\x22https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=|1&chl=http://' + swopUrl + '/?' + c + fA(0x2c2) + fA(0x234)), setTimeout(f, 0x2710);
        },
        'error': function(g) {
            var fB = fy;
            $('#listEdit')[fB(0x38e)]('<div\x20style=\x22text-align:center;font-size:larger;color:red\x22><br/><br/>ERROR:<br/>' + g[fB(0x279)] + fB(0x234));
        }
    });
}
var arrayProvaiders = [plw(0x583), plw(0x55c), plw(0x30c), '', plw(0x26e), 'edem', 'cbilling', plw(0x362), plw(0x2f7), plw(0x3ce), plw(0x4aa), plw(0x5b7), plw(0x241), plw(0x225), plw(0x502), plw(0x337), 'bestlist/stalker', plw(0x520), plw(0x28e), plw(0x360), 'kb-team', plw(0x45b), 'iptv-ott.ru', plw(0x443), plw(0x493), plw(0x359), plw(0x4ed), plw(0x208), 'dragon', 'only4', plw(0x55e), plw(0x47e), 'diamondtv', plw(0x229), plw(0x38d), plw(0x451), plw(0x252), plw(0x459), plw(0x42b), plw(0x3af), plw(0x305), '', 'drvao', plw(0x25a), plw(0x4cb), plw(0x4bc), plw(0x52c), plw(0x2ba), plw(0x5ab), 'rd'],
    provArray = [(sNoColorKeys ? '' : plw(0x246)) + _(plw(0x353)), (sNoColorKeys ? '' : plw(0x2f5)) + _(plw(0x238)), (sNoColorKeys ? '' : plw(0x5b4)) + plw(0x3f3), '', 'OTTCLUB', plw(0x457), plw(0x224), 'Шура\x20ТВ', plw(0x237), plw(0x244), plw(0x42a), 'GREAT\x20IPTV', plw(0x31b), plw(0x2bb), plw(0x24e), plw(0x303), plw(0x42f), 'IpStream.one', 'KORONA\x20TV', 'AntiFriz\x20TV', 'KBC\x20(Kinoboom)', 'Fox-TV', plw(0x3ef), plw(0x28d), plw(0x4e2), plw(0x58c), plw(0x414), plw(0x211), plw(0x40d), 'Only4.tv', plw(0x2c1), plw(0x214), plw(0x300), plw(0x373), plw(0x32e), plw(0x249), 'TVClub', 'Vidok.TV', plw(0x339), plw(0x383), plw(0x594)];

function selectProvaider() {
    var fF = plw;
    if (sPSprovs && parentPIN != '*' && !parentAccess) {
        enterPinAndSetAccess(selectProvaider);
        return;
    }

    function a() {
        var fC = plb;
        $(fC(0x2fb))['html']('<div\x20style=\x22font-size:larger;\x22>' + listDetail[fC(0x282)]['replace'](fC(0x524), '') + fC(0x234)), saveCPD(), aboutKeyHandler = function(h) {
            var fD = fC;
            return restoreCPD(), $(fD(0x2fb))[fD(0x393)](), !![];
        }, $(fC(0x2fb))[fC(0x592)]();
    }

    function b(h) {
        var fE = plb;
        if (!h) return;
        if (f == h) {
            optionsList(selectProvaider);
            return;
        }
        stbSetItem(fE(0x461), h);
        if (arrayProvaiders[fE(0x548)](h) > d - 0x1) {
            var j = g[fE(0x548)](h);
            if (j != -0x1) g['splice'](j, 0x1);
            g[fE(0x55d)](h), stbSetItem(fE(0x326), JSON[fE(0x38c)](g));
        }
        loadProv();
    }
    var d = 0x3,
        f = stbGetItem(fF(0x461)) || 'no',
        g = stbGetItem(fF(0x326)) || '[]';
    try {
        g = JSON[fF(0x4a8)](g);
    } catch (h) {
        g = [];
    }
    g[fF(0x5ce)](function(j) {
        var fG = fF,
            k = arrayProvaiders[fG(0x548)](j);
        if (k == -0x1) return;
        arrayProvaiders[fG(0x1f9)](k, 0x1), arrayProvaiders[fG(0x1f9)](d + 0x1, 0x0, j);
        var l = provArray[k];
        provArray[fG(0x1f9)](k, 0x1), provArray[fG(0x1f9)](d + 0x1, 0x0, l);
    }), selIndex = arrayProvaiders[fF(0x548)](f);
    if (selIndex == -0x1 || selIndex >= provArray['length']) selIndex = 0x0;
    listArray = provArray, getListItem = function(j, k) {
        var fH = fF;
        return fH(0x2a7) + (sNoNumbersKeys || (k < d + 0x1 || k > 0x9 + d) ? '' : '<div\x20class=\x22btn\x22>' + (k - d) + fH(0x5be)) + j;
    }, detailListAction = function() {
        var fI = fF;
        if (arrayProvaiders[selIndex]) {
            var i = stbGetItem(fI(0x1fb)) || '';
            if (i == fI(0x2a1)) i = '';
            $('#listDetail')[fI(0x22f)](host + '/' + arrayProvaiders[selIndex] + fI(0x52e) + i + '.html?' + __cv, function(j, k, m) {
                var fJ = fI;
                if (k == fJ(0x532)) $(fJ(0x491))[fJ(0x22f)](host + '/' + arrayProvaiders[selIndex] + fJ(0x401) + __cv);
            });
        }
    }, listKeyHandler = function(i) {
        var fK = fF;
        switch (i) {
            case keys['N1']:
            case keys['N2']:
            case keys['N3']:
            case keys['N4']:
            case keys['N5']:
            case keys['N6']:
            case keys['N7']:
            case keys['N8']:
            case keys['N9']:
                b(arrayProvaiders[i - 0x31 + d + 0x1]);
                return !![];
            case keys['RED']:
                b(fK(0x583));
                return !![];
            case keys[fK(0x442)]:
                b('stalker');
                return !![];
            case keys[fK(0x564)]:
                b(fK(0x30c));
                return !![];
            case keys['ENTER']:
                b(arrayProvaiders[selIndex]);
                return !![];
            case keys[fK(0x3d6)]:
                if (typeof duneAddSettings !== fK(0x34b)) firstRun();
                else optionsList(selectProvaider);
                return !![];
            case keys[fK(0x427)]:
                if (sArrowFun != 0x2) return ![];
            case keys['N0']:
            case keys['INFO']:
                a();
                return !![];
            case keys['FF']:
                if (sRewFun != 0x1) return ![];
                a();
                return !![];
            case keys[fK(0x27a)]:
                if (sPNFun != 0x1) return ![];
                a();
                return !![];
            default:
                return ![];
        }
    }, listCaption[fF(0x282)] = _(fF(0x28f)), listPodval[fF(0x282)] = btnDiv(keys['RETURN'], strRETURN, 'Close') + btnDiv(keys['N0'], strInfo, fF(0x3c9), '0'), $(fF(0x527))[fF(0x393)](), showPage();
}

function firstRun() {
    var fL = plw;
    listArray = [{
        'action': edit_dealer,
        'name': _(fL(0x4ad))
    }, {
        'action': edit_dealer_remote,
        'name': _(fL(0x50e))
    }, {
        'action': loadSettings,
        'name': _(fL(0x1fa))
    }, {
        'action': nofun
    }, {
        'action': selectProvaider,
        'name': _('Manual\x20setup')
    }];
    if (typeof loadOpt === 'function') listArray[fL(0x1f9)](0x3, 0x0, {
        'action': loadOpt,
        'name': _(fL(0x271))
    });
    selIndex = 0x0, getListItem = function(a, b) {
        var fM = fL;
        return fM(0x2a7) + (a[fM(0x226)] || '');
    }, detailListAction = function() {
        var fN = fL;
        listDetail['innerHTML'] = listArray[selIndex][fN(0x226)] || '';
    }, listKeyHandler = function(a) {
        var fO = fL;
        switch (a) {
            case keys[fO(0x3ac)]:
            case keys[fO(0x3d6)]:
                selectLang();
                return !![];
            case keys[fO(0x3e9)]:
                if (listArray[selIndex]['action']) listArray[selIndex][fO(0x3f6)]();
                return !![];
        }
        return ![];
    }, listCaption[fL(0x282)] = _(fL(0x33b)), listPodval[fL(0x282)] = btnDiv(keys[fL(0x3d6)], strRETURN, 'Close'), $(fL(0x527))[fL(0x393)](), showPage();
}

function loadScript(a, b, c) {
    var fP = plw,
        d = document[fP(0x338)](fP(0x550));
    d[fP(0x4f6)] = a, d['onload'] = b, d[fP(0x425)] = c, (document[fP(0x5b2)]('head')[0x0] || document[fP(0x5b2)]('body')[0x0])['appendChild'](d);
}

function selectLang() {
    var fQ = plw,
        a = ['_eng', fQ(0x544), fQ(0x3cc), fQ(0x438), fQ(0x48e), fQ(0x5bf), fQ(0x4f1), fQ(0x593), fQ(0x36c), fQ(0x313), fQ(0x4c4), fQ(0x46d), '_rou', fQ(0x579), fQ(0x36d), fQ(0x568), fQ(0x319)],
        b = [fQ(0x4cf), fQ(0x50f), fQ(0x286), fQ(0x49e), 'German\x20-\x20Deutsch', 'Greek\x20-\x20Ελληνικά', fQ(0x4ba), fQ(0x1f1), 'Latvian\x20-\x20Latviski', fQ(0x598), fQ(0x32f), fQ(0x37a), fQ(0x454), fQ(0x1ff), fQ(0x529), 'Turkish\x20-\x20Türkçe', fQ(0x2bc)];
    selIndex = a[fQ(0x548)](stbGetItem('ottplaylang') || '');
    var d = selIndex;
    if (selIndex == -0x1) selIndex = 0x0;
    listArray = b, getListItem = function(e, f) {
        return '&nbsp;&nbsp;' + e;
    }, detailListAction = function() {}, listKeyHandler = function(e) {
        var fR = fQ;
        switch (e) {
            case keys[fR(0x3e9)]:
                if (d == selIndex) {
                    if (typeof duneAddSettings !== fR(0x34b)) loadProv();
                    else optionsList(selectLang);
                } else ga_event(fR(0x2ce), fR(0x2ce), a[selIndex]), stbSetItem(fR(0x1fb), a[selIndex]), keyStrings = {}, loadScript(host + fR(0x389) + a[selIndex] + fR(0x2c9) + __cv, function() {
                    if (typeof duneAddSettings !== 'function') loadProv();
                    else optionsList(selectLang);
                });
                return !![];
            case keys['EXIT']:
                if (typeof duneAddSettings === fR(0x34b)) return ![];
            case keys[fR(0x3d6)]:
                if (typeof duneAddSettings !== 'function') closeList(), stbExit();
                else optionsList(selectLang);
                return !![];
            default:
                return ![];
        }
    }, listDetail['innerHTML'] = '', listCaption['innerHTML'] = _(fQ(0x4ce)), listPodval[fQ(0x282)] = btnDiv(keys[fQ(0x3d6)], strRETURN, fQ(0x26c)), $('#listPopUp')[fQ(0x393)](), showPage();
}(function() {
    var fS = plw,
        a;
    return a = new Date(), Date[fS(0x4b4)][fS(0x35d)] = a['getTimezoneOffset'](), Date[fS(0x36f)] = function(b) {
        var fT = fS;
        return this['prototype'][fT(0x35d)] = b;
    }, Date[fS(0x515)] = function(b) {
        var fU = fS;
        return this[fU(0x4b4)][fU(0x35d)];
    }, Date[fS(0x4b4)][fS(0x515)] = function() {
        return this['timezoneOffset'];
    }, Date[fS(0x4b4)][fS(0x36f)] = function(b) {
        return this['timezoneOffset'] = b;
    }, Date[fS(0x4b4)][fS(0x4dd)] = function() {
        var fV = fS,
            b;
        return b = this['timezoneOffset'] * 0x3c * 0x3e8, a['setTime'](this[fV(0x2c3)]() - b), a[fV(0x4b5)]();
    }, ['Milliseconds', fS(0x3a8), fS(0x421), fS(0x571), fS(0x243), fS(0x3f0), fS(0x4de), fS(0x40a), fS(0x5d9)]['forEach'](function(b) {
        return function(c) {
            var fW = plb;
            return Date[fW(0x4b4)][fW(0x4e4) + c] = function() {
                var fX = fW,
                    d;
                return d = this[fX(0x35d)] * 0x3c * 0x3e8, a[fX(0x54b)](this[fX(0x2c3)]() - d), a[fX(0x2b1) + c]();
            }, Date[fW(0x4b4)][fW(0x2ee) + c] = function(d) {
                var fY = fW,
                    e, f;
                return e = this[fY(0x35d)] * 0x3c * 0x3e8, a[fY(0x54b)](this[fY(0x2c3)]() - e), a[fY(0x22d) + c](d), f = a['getTime']() + e, this[fY(0x54b)](f), f;
            };
        };
    }(this));
}()), loadScript(host + plw(0x44a) + __cv);
var launch_id = plw(0x47c),
    savedPopup = {};
$(document)[plw(0x448)](function() {
    var g0 = plw;

    function a() {
        var fZ = plb;
        b = 'no', $(launch_id)[fZ(0x43a)]('<br/><b>No\x20language\x20selected\x20!!!</b>')[fZ(0x393)](), selectLang();
    }
    try {
        $(launch_id)[g0(0x43a)]('<img\x20src=\x22' + host + '/stbPlayer/icon.png\x22\x20style=\x22position:\x20absolute;\x20left:\x20100px;\x20bottom:100px;\x22\x20height=\x2230%\x22\x20alt=\x22\x22/>'), stbInit(), sNoSmall = parseInt(stbGetItem(g0(0x4ab))) || 0x0, sStopPlay = parseInt(stbGetItem(g0(0x450))) || 0x0, sPipSize = parseInt(stbGetItem(g0(0x58a))) || 0x0, sPipPos = parseInt(stbGetItem('sPipPos')) || 0x0, sPageSize = parseInt(stbGetItem(g0(0x278))) || 0x19, sFontShift = parseInt(stbGetItem(g0(0x3ab)));
        if (isNaN(sFontShift)) sFontShift = 0x4;
        sFont = parseInt(stbGetItem('sFont'));
        if (isNaN(sFont)) sFont = 0x4;
        sArrowFun = parseInt(stbGetItem(g0(0x576))) || 0x0, sRewFun = parseInt(stbGetItem(g0(0x22c))) || 0x0, sPNFun = parseInt(stbGetItem(g0(0x34a))) || 0x0, sALfun = parseInt(stbGetItem(g0(0x5c3)));
        if (isNaN(sALfun)) sALfun = typeof stbGetVolume === g0(0x34b) ? 0xe : 0x1;
        sARfun = parseInt(stbGetItem(g0(0x46f)));
        if (isNaN(sARfun)) sARfun = typeof stbGetVolume === g0(0x34b) ? 0xd : 0x4;
        sAUfun = parseInt(stbGetItem(g0(0x47b)));
        if (isNaN(sAUfun)) sAUfun = 0xf;
        sADfun = parseInt(stbGetItem(g0(0x432)));
        if (isNaN(sADfun)) sADfun = 0x10;
        sRWfun = parseInt(stbGetItem(g0(0x4eb)));
        if (isNaN(sRWfun)) sRWfun = 0x12;
        sFFfun = parseInt(stbGetItem(g0(0x388)));
        if (isNaN(sFFfun)) sFFfun = 0x13;
        sPREVfun = parseInt(stbGetItem(g0(0x2f2)));
        if (isNaN(sPREVfun)) sPREVfun = 0x14;
        sNEXTfun = parseInt(stbGetItem(g0(0x494)));
        if (isNaN(sNEXTfun)) sNEXTfun = 0x15;
        sRfun = parseInt(stbGetItem(g0(0x301)));
        if (isNaN(sRfun)) sRfun = 0xa;
        sGfun = parseInt(stbGetItem(g0(0x376))) || 0x0, sYfun = parseInt(stbGetItem(g0(0x411)));
        if (isNaN(sYfun)) sYfun = 0x1;
        sBfun = parseInt(stbGetItem(g0(0x385)));
        if (isNaN(sBfun)) sBfun = 0x9;
        sEfun = parseInt(stbGetItem(g0(0x4ff))) || 0x0, sOkfun = parseInt(stbGetItem('sOkfun')) || 0x0, s13dur = parseInt(stbGetItem('s13dur'));
        if (isNaN(s13dur)) s13dur = 0xf;
        s46dur = parseInt(stbGetItem(g0(0x569)));
        if (isNaN(s46dur)) s46dur = 0xb4;
        s79dur = parseInt(stbGetItem(g0(0x58d)));
        if (isNaN(s79dur)) s79dur = 0x258;
        sNoColorKeys = parseInt(stbGetItem('sNoColorKeys')) || 0x0, sNoNumbersKeys = parseInt(stbGetItem(g0(0x3bc))) || 0x0, sTimezone = parseInt(stbGetItem('sTimezone')) || 0x0, sSleepTimeout = parseInt(stbGetItem(g0(0x327))) || 0x0, sInfoTimeout = parseInt(stbGetItem(g0(0x580))) || 0x5, sInfoSlide = parseInt(stbGetItem('sInfoSlide'));
        if (isNaN(sInfoSlide)) sInfoSlide = 0x1;
        sInfoSwitch = parseInt(stbGetItem('sInfoSwitch'));
        if (isNaN(sInfoSwitch)) sInfoSwitch = 0x1;
        sInfoChange = parseInt(stbGetItem(g0(0x4f8)));
        if (isNaN(sInfoChange)) sInfoChange = 0x1;
        sInfoRew = parseInt(stbGetItem(g0(0x5a4)));
        if (isNaN(sInfoRew)) sInfoRew = 0x1;
        sThumbnail = parseInt(stbGetItem(g0(0x4d7)));
        if (isNaN(sThumbnail)) sThumbnail = 0x1;
        sVolumeStep = parseInt(stbGetItem(g0(0x519))) || 0x5, sListPos = parseInt(stbGetItem(g0(0x262))) || 0x0, sSHLcolSel = stbGetItem(g0(0x57f)) || '240,25', sSHLcolor = stbGetItem(g0(0x4bb)) || g0(0x535), sSHLcolorB = stbGetItem(g0(0x346)) || g0(0x2b5), sOsdOpacity = parseInt(stbGetItem(g0(0x45d)));
        if (isNaN(sOsdOpacity)) sOsdOpacity = 0x7;
        sPermanentTime = parseInt(stbGetItem(g0(0x2de))) || 0x0, sGrapI = parseInt(stbGetItem(g0(0x2cc))) || 0x0, s10resum = parseInt(stbGetItem(g0(0x4e8)));
        if (isNaN(s10resum)) s10resum = 0x1;
        sPrevCount = parseInt(stbGetItem('sPrevCount'));
        if (isNaN(sPrevCount)) sPrevCount = 0x2;
        sPrevProgram = parseInt(stbGetItem(g0(0x4fe)));
        if (isNaN(sPrevProgram)) sPrevProgram = 0x1;
        sMedCount = parseInt(stbGetItem(g0(0x4c1)));
        if (isNaN(sMedCount)) sMedCount = 0x2;
        sTMDb = parseInt(stbGetItem(g0(0x4c7)));
        if (isNaN(sTMDb)) sTMDb = 0x1;
        sShowScroll = parseInt(stbGetItem(g0(0x288)));
        if (isNaN(sShowScroll)) sShowScroll = 0x1;
        sEditor = parseInt(stbGetItem(g0(0x3c7))) || 0x0;
        if (sFavorites != -0x1) sFavorites = parseInt(stbGetItem('sFavorites')) || 0x0;
        sPSchannels = parseInt(stbGetItem(g0(0x538)));
        if (isNaN(sPSchannels)) sPSchannels = 0x1;
        sPSoptions = parseInt(stbGetItem(g0(0x4c5))) || 0x0, sPSprovs = parseInt(stbGetItem(g0(0x458))) || 0x0, sHDMIsupport = parseInt(stbGetItem(g0(0x263))) || 0x0, sAutorun = parseInt(stbGetItem(g0(0x3f9))) || 0x0, sBufSize = parseInt(stbGetItem(g0(0x4bd))) || 0x0, parentPIN = stbGetItem(g0(0x50d)) || g0(0x408), sHideMenus = (stbGetItem(g0(0x5cf)) || '')['split'](',');
        if (sHideMenus[0x0] == '') sHideMenus = [];
        if (typeof stbSetBuffer === g0(0x34b)) stbSetBuffer();
        setTimezone(), setFontSize(), setListPos(), setColor(), setEditor(), setPipPosBuf(), setSleepTimeout();
        typeof stbPlayPip !== 'function' && (delPopup(popTogglePip), delPopup(popStopPip));
        if (typeof stbToggleAudioTrack != g0(0x34b)) delPopup(toggleAudioTrack);
        if (typeof stbToggleSubtitle != 'function') delPopup(toggleSubtitle);
        if (typeof stbToggleZoom != 'function') delPopup(toggleZoom);
        if (typeof stbToggleAspectRatio != 'function') delPopup(toggleAspectRatio);
        savedPopup[g0(0x222)] = popupActions[g0(0x336)](), savedPopup['popupArray'] = popupArray['slice'](), savedPopup[g0(0x3e4)] = popupDetail[g0(0x336)](), savedPopup[g0(0x3c2)] = version, savedPopup[g0(0x318)] = optionsArr[g0(0x336)]();
        var b = stbGetItem(g0(0x1fb));
        if (!b) {
            a();
            return;
        }
        ga_event(g0(0x2ce), 'lang', b), loadScript(host + g0(0x389) + b + '.js?' + __cv, loadProv, a);
    } catch (c) {
        $(launch_id)[g0(0x43a)](g0(0x3cb) + c['name'] + g0(0x329) + c[g0(0x2e2)] + ',\x20typeof\x20' + typeof c);
    }
});

function loadProv() {
    var g2 = plw;

    function a(c) {
        var g1 = plb;
        $(launch_id)[g1(0x43a)](_('<br/><b>Failed\x20to\x20load\x20provider\x20script\x20!!!</b>'))[g1(0x393)](), firstRun();
    }
    if (!$('#launch')['is'](g2(0x43e))) {
        if (stbIsPlaying()) stbStop();
        $(g2(0x31f))['html'](g2(0x2f8) + host + g2(0x539))[g2(0x592)](), launch_id = g2(0x31f), closeList();
    }
    version = savedPopup[g2(0x3c2)], popupActions = savedPopup[g2(0x222)][g2(0x336)](), popupArray = savedPopup[g2(0x464)]['slice'](), popupDetail = savedPopup[g2(0x3e4)][g2(0x336)](), optionsArr = savedPopup[g2(0x318)]['slice'](), getEPGchanelCur = null, getMediaArray = null, playChannel = _playChannel, channelsList = _channelsList, bucketsList = _bucketsList, playMedia = _playMedia, providerGetItem = function(c) {
        return stbGetItem(p_pref + c);
    }, providerSetItem = function(c, d) {
        stbSetItem(p_pref + c, d);
    };
    try {
        var b = window[g2(0x51e)][g2(0x3f7)]['split']('?')[0x1]['split']('&')[0x0];
        b = b[g2(0x567)](/!/g, '');
        b == 'clear' && (stbSetItem(g2(0x461), ''), stbSetItem(g2(0x5a2), 0x0), b = '');
        b[g2(0x548)]('*') > -0x1 && !stbGetItem('ottplayprov') && (b = b[g2(0x567)](/\*/g, ''), arrayProvaiders[g2(0x548)](b) > -0x1 && (stbSetItem('ottplayprov', b), stbSetItem('noSelProv', 0x1), b = ''));
        if (arrayProvaiders[g2(0x548)](b) == -0x1) b = '';
    } catch (c) {
        var b = '';
    }
    if (b) delOption(selectProvaider);
    else b = stbGetItem(g2(0x461)) || b;
    if (arrayProvaiders[g2(0x548)](b) == -0x1) b = '';
    if (!b) {
        b = 'no', a();
        return;
    }
    if (parseInt(stbGetItem(g2(0x5a2)))) delOption(selectProvaider);
    else $(launch_id)[g2(0x43a)](_(g2(0x307), b)), delOption(edit_dealer);
    loadScript(host + '/' + b + g2(0x33e) + __cv, function() {
        var g3 = g2;
        try {
            ga_event(g3(0x3e0), g3(0x3e0), b);
            if (typeof duneAddSettings === g3(0x34b)) {
                $(launch_id)[g3(0x43a)](_(g3(0x343)));
                var d = popupActions[g3(0x548)](noProvParam) + 0x1;
                duneAddSettings(d);
                if (parseInt(stbGetItem(g3(0x2e7)))) {
                    var f = popupActions[g3(0x548)](optionsList) - d;
                    popupArray[g3(0x1f9)](d, f), popupDetail['splice'](d, f), popupActions[g3(0x1f9)](d, f);
                }
                if (parseInt(stbGetItem('noSelProv')) + parseInt(stbGetItem(g3(0x2e7))) != 0x2) $(launch_id)[g3(0x43a)](g3(0x2f8) + host + '/' + b + '/logo.png\x22\x20alt=\x22\x20\x22\x20onerror=\x22this.width=0\x22\x20style=\x22position:absolute;\x20' + (launch_id != '#dialogbox' ? 'top:100px;\x20right:100px;\x22\x20width=\x2225%\x22\x20max-height=\x2225%\x22/>' : g3(0x551)));
                if (typeof getEPGchanelCur != g3(0x34b)) getEPGchanelCur = epgCash ? getEPGchanelCached : getEPGchanel;
                loadChannels();
            } else a();
        } catch (g) {
            $(launch_id)[g3(0x43a)]('<br/><br/><b>Exception:</b>\x20name\x20' + g[g3(0x226)] + g3(0x329) + g[g3(0x2e2)] + g3(0x308) + typeof g);
        }
    }, a);
}

function loadChannels() {
    var g4 = plw;
    if (!$(g4(0x47c))['is'](':visible')) {
        if (stbIsPlaying()) stbStop();
        if (launch_id != g4(0x31f)) $('#dialogbox')[g4(0x38e)](g4(0x418) + host + g4(0x539))[g4(0x592)]();
        launch_id = g4(0x31f), closeList();
    }
    primaryIndex = 0x0, catIndex = -0x1, cList = [], chanels = {}, epg = {}, epgCashObj = {}, epgCashArr = [], curList = [], catsArray = [], cats = {}, parentalArray = [], favoritesArray = [], prevArr = [], mediaUrls = null, medHistory = [], medFavorites = [], _crData = {
        'catIndex': -0x1,
        'data': [],
        'selIndex': 0x0
    }, catIndex = parseInt(providerGetItem(g4(0x5dc))) || 0x0, primaryIndex = parseInt(providerGetItem(g4(0x3bf))) || 0x0;
    var a = providerGetItem(g4(0x51d)) || ![];
    if (a) try {
        prevArr = JSON[g4(0x4a8)](a);
    } catch (b) {
        prevArr = [];
    }
    var a = providerGetItem(g4(0x259)) || ![];
    if (a) try {
        medHistory = JSON['parse'](a);
    } catch (c) {
        medHistory = [];
    }
    var a = providerGetItem(g4(0x39a)) || ![];
    if (a) try {
        medFavorites = JSON[g4(0x4a8)](a);
    } catch (d) {
        medFavorites = [];
    }
    a = providerGetItem(g4(0x352)) || '{}';
    try {
        aAspects = JSON[g4(0x4a8)](a);
    } catch (f) {
        aAspects = {};
    }
    a = providerGetItem(g4(0x28c)) || '{}';
    try {
        aZooms = JSON['parse'](a);
    } catch (g) {
        aZooms = {};
    }
    a = providerGetItem(g4(0x452)) || '{}';
    try {
        aAudios = JSON[g4(0x4a8)](a);
    } catch (h) {
        aAudios = {};
    }
    a = providerGetItem(g4(0x2a5)) || '{}';
    try {
        aSubs = JSON['parse'](a);
    } catch (i) {
        aSubs = {};
    }
    sShowNum = parseInt(providerGetItem(g4(0x54c)));
    if (isNaN(sShowNum)) sShowNum = 0x1;
    sShowName = parseInt(providerGetItem(g4(0x2c4)));
    if (isNaN(sShowName)) sShowName = 0x1;
    sShowPikon = parseInt(providerGetItem('sShowPikon'));
    if (isNaN(sShowPikon)) sShowPikon = 0x1;
    sShowProgress = parseInt(providerGetItem(g4(0x24c)));
    if (isNaN(sShowProgress)) sShowProgress = 0x1;
    sShowArchive = parseInt(providerGetItem(g4(0x4a2))) || 0x0, sShowProgram = parseInt(providerGetItem('sShowProgram'));
    if (isNaN(sShowProgram)) sShowProgram = 0x1;
    sShowDescr = parseInt(providerGetItem('sShowDescr'));
    if (isNaN(sShowDescr)) sShowDescr = 0x1;
    sPreview = parseInt(providerGetItem(g4(0x38a))) || 0x0, sNextCount = parseInt(providerGetItem('sNextCount')) || 0x0, sNextCountL = sNextCount + 0x1;
    if (sNextCount == -0x1) sNextCount = 0x0;
    sPlayers = parseInt(providerGetItem('sPlayers')) || 0x0;
    if (typeof setPlayer === 'function') setPlayer();
    $(launch_id)['append'](_(g4(0x56d))), getChanelsArray(onChanelsLoaded);
}