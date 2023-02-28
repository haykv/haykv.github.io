var ssq = ssb;
(function(a, b) {
    var p = ssb,
        c = a();
    while (!![]) {
        try {
            var d = parseInt(p(0x1c5)) / 0x1 + parseInt(p(0x185)) / 0x2 * (parseInt(p(0x142)) / 0x3) + -parseInt(p(0x1ce)) / 0x4 * (parseInt(p(0x11d)) / 0x5) + parseInt(p(0x189)) / 0x6 * (parseInt(p(0x1a9)) / 0x7) + parseInt(p(0x1e9)) / 0x8 + -parseInt(p(0x16e)) / 0x9 * (-parseInt(p(0x1f3)) / 0xa) + -parseInt(p(0xf8)) / 0xb;
            if (d === b) break;
            else c['push'](c['shift']());
        } catch (e) {
            c['push'](c['shift']());
        }
    }
}(ssa, 0x65833));
var video = null,
    keys = {
        'RIGHT': 0x27,
        'LEFT': 0x25,
        'DOWN': 0x28,
        'UP': 0x26,
        'RETURN': 0x2719,
        'EXIT': 0x27c6,
        'TOOLS': 0x2797,
        'FF': 0x1a1,
        'RW': 0x19c,
        'NEXT': 0x27f9,
        'PREV': 0x27f8,
        'ENTER': 0xd,
        'RED': 0x193,
        'GREEN': 0x194,
        'YELLOW': 0x195,
        'BLUE': 0x196,
        'CH_LIST': 0x2759,
        'CH_UP': 0x1ab,
        'CH_DOWN': 0x1ac,
        'N0': 0x30,
        'N1': 0x31,
        'N2': 0x32,
        'N3': 0x33,
        'N4': 0x34,
        'N5': 0x35,
        'N6': 0x36,
        'N7': 0x37,
        'N8': 0x38,
        'N9': 0x39,
        'PRECH': 0x27ce,
        'POWER': 0x0,
        'PLAY': 0x19f,
        'STOP': 0x19d,
        'PAUSE': 0x13,
        'SUBT': 0x27d8,
        'INFO': 0x1c9,
        'REC': 0x0,
        'MUTE': 0x1c1,
        'VOL_UP': 0x1bf,
        'VOL_DOWN': 0x1c0,
        'EPG': 0x1ca,
        'ZOOM': 0x0,
        'ASPECT': 0x279c,
        'AUDIO': 0x27ed,
        'SETUP': 0x0,
        'PIP': 0x0
    },
    strEXIT = ssq(0x1d9),
    strENTER = ssq(0x1ad),
    strTools = 'TOOLS',
    strPip = '',
    strAspect = ssq(0x112),
    strZoom = '',
    strAudio = ssq(0x174),
    strPRECH = 'PRE-CH',
    strRETURN = 'RETURN',
    strSETUP = '',
    strLANG = 'TTX/MIX',
    strAltPower = '';

function strStbButtons() {
    var r = ssq;
    return r(0x1b4) + _(r(0x110));
}

function stbEventToKeyCode(a) {
    var s = ssq;
    if (a[s(0x1d8)] == 0x280c) return keys['PLAY'];
    if (a[s(0x1d8)] == 0x27a2 || a[s(0x1d8)] == 0x2795) return keys[s(0x1e6)];
    return a[s(0x1d8)];
}

function stbExit() {
    var t = ssq;
    try {
        tizen[t(0xf6)][t(0x11e)]()[t(0x133)]();
    } catch (a) {
        window['close']();
    }
}

function ssb(a, b) {
    var c = ssa();
    return ssb = function(d, e) {
        d = d - 0xf5;
        var f = c[d];
        return f;
    }, ssb(a, b);
}

function stbPlay(a, b) {
    var u = ssq;
    if (sPlayers) {
        if (b) a += '#t=' + b;
        video[u(0x1a3)] = a, video[u(0x1ac)]();
        return;
    }

    function c(j) {
        var v = u,
            k = JSON[v(0x122)](j[v(0x1ed)]);
        if (k[v(0x1c1)]) $(v(0x1e8))[v(0x19f)](v(0x111) + k[v(0x1c1)] + 'x' + k[v(0x1de)] + (k[v(0x1e4)] == 0x0 || k[v(0x1e4)] == '99999999' ? '' : v(0x111) + Math[v(0x191)](k[v(0x1e4)] / 0x400 / 0x400 * 0x64) / 0x64 + v(0x116)));
    }
    var d = null,
        f = ![];

    function g() {
        var w = u;
        clearTimeout(d), $(w(0x17a))[w(0x117)]('');
    }
    var h = {
        'onbufferingstart': function() {
            var x = u;
            $(x(0x128))[x(0x188)](), $('#video_res')[x(0x19f)](x(0x1b1));
        },
        'onbufferingprogress': function(j) {
            var y = u;
            $(y(0x1e8))['html'](y(0x111) + j + '%');
        },
        'onbufferingcomplete': function() {
            var z = u;
            if (playType < 0x0) updateMediaInfo();
            $('#buffering')['hide'](), $(z(0x1e8))[z(0x117)](''), g(), f = ![], execCHarr(z(0x125), _setAspect), setTimeout(function() {
                var A = z;
                execCHarr(A(0x115), _setSubtitleTrack), execCHarr(A(0x196), _setAudioTrack);
            }, 0xc8);
        },
        'oncurrentplaytime': function(j) {
            var B = u;
            if (f) return;
            f = !![], execCHarr(B(0x115), _setSubtitleTrack), execCHarr(B(0x196), _setAudioTrack);
            var k = webapis[B(0x11c)][B(0x179)](),
                l = 0x0;
            for (var m in k) {
                k[m][B(0x1eb)] == B(0x195) && (l = k[m][B(0x127)], c(k[m]));
            }
            try {
                k = webapis[B(0x11c)][B(0x1f1)]();
                for (var m in k) {
                    if (k[m]['type'] == B(0x195) && k[m][B(0x127)] == l) {
                        c(k[m]);
                        return;
                    }
                }
            } catch (n) {}
        },
        'onsubtitlechange': function(j, k, l, m) {
            var C = u;
            if (!_subsOn) return;
            g(), $(C(0x17a))[C(0x19f)](C(0x1b9) + k + C(0x14e)), d = setTimeout(g, j);
        }
    };

    function i(j) {
        var D = u;
        stbStop(), _subsOn = ![], g(), execCHarr(D(0x125), _setAspect), $(D(0x1e8))['html'](D(0x1a5)), webapis[D(0x11c)][D(0x160)](a);
        try {
            webapis['avplay'][D(0x18a)](sBufSize * 0x3e8);
        } catch (k) {}
        try {
            webapis[D(0x11c)]['setBufferingParam']('PLAYER_BUFFER_FOR_PLAY', D(0x155), sBufSize);
        } catch (l) {}
        try {
            webapis[D(0x11c)]['setBufferingParam'](D(0x132), 'PLAYER_BUFFER_SIZE_IN_SECOND', sBufSize * 0x3);
        } catch (m) {}
        webapis[D(0x11c)][D(0x120)](h);
        if (!sNoSmall && list['style']['display'] != D(0x15f)) stbSetWindow();
        else stbToFullScreen();
        curTrack = 0x0, webapis['avplay'][D(0x14a)](function() {
            var E = D;
            if (b) stbSetPosTime(b);
            webapis[E(0x11c)][E(0x1ac)]();
        }, function n(o) {
            var F = D;
            showShift(j + ':\x20' + o['message']);
            if (j < 0x5) i(j + 0x1);
            else $('#buffering')[F(0x197)]();
        });
    }
    try {
        i(0x1), $('#buffering')[u(0x188)]();
    } catch (j) {}
}

function stbStop() {
    var G = ssq;
    $(G(0x1e8))['text']('');
    if (sPlayers) video['pause'](), video[G(0x152)]('src');
    else try {
        webapis['avplay'][G(0x17f)](), webapis[G(0x11c)]['close']();
    } catch (a) {}
}

function stbPause() {
    var H = ssq;
    if (sPlayers) video[H(0x1bb)]();
    else webapis[H(0x11c)][H(0x1bb)]();
}

function stbContinue() {
    var I = ssq;
    if (sPlayers) video['paused'] ? video[I(0x1ac)]() : video['pause']();
    else webapis['avplay'][I(0x1ac)]();
}

function stbIsPlaying() {
    var J = ssq;
    if (sPlayers) return !video[J(0xf7)];
    else return webapis[J(0x11c)][J(0x1ba)]() === J(0x114);
}

function stbGetPosTime() {
    var K = ssq;
    if (sPlayers) return video[K(0x19d)];
    else return webapis['avplay'][K(0x1dc)]() / 0x3e8;
}

function stbSetPosTime(a) {
    var L = ssq;
    if (sPlayers) {
        video[L(0x19d)] = a;
        if (playType < 0x0) updateMediaInfo();
    } else webapis['avplay'][L(0x1be)](a * 0x3e8);
}

function stbGetLen() {
    var M = ssq;
    if (sPlayers) return video[M(0x102)];
    else return webapis[M(0x11c)]['getDuration']() / 0x3e8;
}

function stbToggleMute() {
    var N = ssq;
    tizen[N(0x14f)][N(0x15c)](!tizen['tvaudiocontrol'][N(0x19e)]());
}

function ssa() {
    var ar = ['sPlayers', 'PLAYER_BUFFER_FOR_RESUME', 'exit', 'RED', 'TEXT', 'insertBefore', 'network', 'info', 'Save\x20Settings', 'Tools', 'getFirmware', 'getElementById', 'checkProtocolTask', 'E-Manual', 'ind', '<object\x20type=\x22application/avplayer\x22\x20id=\x22avplayer\x22\x20style=\x22position:\x20absolute;\x20left:0px;\x20top:0px;\x20width:', 'code', '89898FovPaH', 'PictureSize', 'showing', '#editvar', 'append', '<br/>error\x20', '<small><small>ch</small></small>', 'fourCC', 'prepareAsync', '<br/>ActiveConnectionType:\x20', 'userAgent', '<br/>Ip:\x20', '</span>', 'tvaudiocontrol', 'getElementsByTagName', 'join', 'removeAttribute', 'NETWORK', 'setSelectTrack', 'PLAYER_BUFFER_SIZE_IN_SECOND', 'error', 'PLAY', '<br/>ModelCode:\x20', 'px;\x20height:', 'set', 'pageview', 'setMute', 'GoogleAnalyticsObject', 'Settings\x20saved', 'none', 'open', '<small><small>\x20Kbps</small></small>', 'built-in', 'href', 'PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO', 'innerWidth', 'appcommon', 'videoHeight', '4x3', 'ColorF3Blue', 'val', 'length', 'getDuid', 'selectionEnd', '4402197Inahsl', 'DISPLAY', 'MediaFastForward', 'AUDIO', 'tizen', 'track_lang', 'AD/SUBT.', 'canplay', 'restore', 'Type\x20of\x20player\x20for\x20streaming', '<br/>Hardware:\x20Samsung\x20Tizen', 'getCurrentStreamInfo', '#divsubtitles', 'close', '<br/>RealModel:\x20', 'ChannelDown', '<br/>Firmware:\x20', 'stop', 'mode', 'hidden', 'Info', 'MediaRewind', 'PAUSE', '54imfmZQ', 'productinfo', '<br/>buffering...', 'show', '35334WrnWJl', 'setTimeoutForBuffering', 'selectionStart', 'Menu', 'body', 'language', 'push', 'getSmartTVServerVersion', 'round', '100%', 'ColorF2Yellow', '#video', 'VIDEO', 'aAudios', 'hide', 'Buffer\x20Size,\x20s', 'sTypeAspect', 'label', 'event', 'enabled', 'currentTime', 'isMute', 'html', 'Full\x20screen', 'aWYoaG9zdC5pbmRleE9mKCJvdHQtcGxheS5jb20iKT09LTEpIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSJlcnJvci5odG1sIjs=', 'getMacAddress', 'src', 'resolutionWidth', '<br/>Connect...', 'Guide', 'getRealModel', 'VolumeDown', '203seAxmt', '<br/>Load\x20STB\x20\x22tizen\x22...', 'WIFI', 'play', 'ENTER', 'RETURN', 'ChannelList', 'MediaPlayPause', '<br/>Loading...', 'sEditor', '<br/>connect...', '<br/><div\x20class=\x22btn\x22>E-MANUAL</div>/<div\x20class=\x22btn\x22>MENU</div>/<div\x20class=\x22btn\x22>SETTINGS</div>\x20-\x20', 'PreviousChannel', '4x3->16x9', 'MediaStop', '$WEBAPIS/webapis/webapis.js', '<span\x20style=\x22background-color:rgba(0,0,0,0.8);\x22>', 'getState', 'pause', 'waiting', 'getMac', 'seekTo', '<br/>LocalSet:\x20', 'html5', 'Width', 'message', 'ColorF0Red', 'createElement', '495040XXjPbC', '21x9->16x9', '</div>', 'sUseBS', 'samsung/tizen', 'setVolumeChangeListener', 'addEventListener', 'async', '#launch', '4FfHjKm', 'PLAYER_DISPLAY_MODE_FULL_SCREEN', 'registerKey', 'videoWidth', '<div\x20id=\x22divsubtitles\x22\x20style=\x22position:\x20absolute;\x20left:0px;\x20right:\x200px;\x20bottom:\x200px;\x20padding:\x202em;\x20overflow:hidden;\x20text-align:\x20center;\x20font-size:\x20250%;\x22></div>', 'setDisplayRect', 'getModel', 'samsung/tizen/', 'onkeydown', 'systeminfo', 'keyCode', 'EXIT', '<br/>Model:\x20', 'innerHeight', 'getCurrentTime', 'Aspect', 'Height', 'getIp', 'css', '\x20-\x20', 'script', 'mac', 'Bit_rate', 'ZXZhbA==', 'TOOLS', 'title', '#video_res', '5219824hunFRu', 'MediaPlay', 'type', 'sBufSize', 'extra_info', 'setVolumeDown', 'DISCONNECTED', '\x20tizen-0122*', 'getTotalTrackInfo', 'tvinputdevice', '10BxtMks', 'yes', 'application', 'paused', '19318552QBZfxK', 'location', 'textTracks', 'ETHERNET', 'page', 'STOP', '21x9', 'channels', 'unregisterKey', 'bit_rate', 'duration', 'DECODE', '<div\x20id=\x22vdiv\x22\x20style=\x22position:\x20absolute;\x20left:0;\x20top:0;\x20bottom:0;\x20right:\x200;\x20overflow:hidden;\x20background-color:\x20black;\x22><video\x20id=\x22video\x22\x20style=\x22position:\x20absolute;\x20object-fit:\x20fill;\x22></video>', 'setDisplayMethod', 'UA-112401085-1', 'Editor', 'MediaTrackNext', 'editvar', 'Not\x20found', 'VolumeUp', 'getActiveConnectionType', 'remove', 'resize', 'Off', 'Show\x20player\x20menu', '<br/>', 'PIC\x20SIZE', 'disabled', 'PLAYING', 'aSubs', '<small><small>\x20Mbps</small></small>', 'text', 'getLocalSet', '<br/>SmartTVServerVersion:\x20', 'resolutionHeight', 'ChannelUp', 'avplay', '2222435OivrcA', 'getCurrentApplication', '<br/><br/>userAgent:\x20', 'setListener', 'splice', 'parse', 'unshift', 'Settings\x20STB', 'aAspects', 'native', 'index', '#buffering', 'Exit', '#vdiv', '#avplayer', '#listEdit', 'audioTracks', 'prepend', 'getModelCode', 'create'];
    ssa = function() {
        return ar;
    };
    return ssa();
}
var _vl = 0x0,
    samsDisplay = null;

function stbToFullScreen() {
    var O = ssq;
    _full = !![];
    if (sPlayers) $('#video')[O(0x1e0)]({
        'left': 0x0,
        'top': 0x0,
        'width': O(0x192),
        'height': O(0x192)
    }), $(O(0x12a))[O(0x1e0)]({
        'left': 0x0,
        'top': 0x0,
        'width': O(0x192),
        'height': O(0x192)
    });
    else {
        if (!samsDisplay || !samsDisplay[O(0x1a4)]) samsDisplay = {
            'resolutionWidth': 0x780,
            'resolutionHeight': 0x438
        };
    }
    _aspect();
}

function stbSetWindow() {
    var P = ssq;
    _full = ![];
    if (sPlayers) {
        var a = getHeightK(),
            b = getWidthK();
        $(P(0x194))[P(0x1e0)]({
            'left': 0x0,
            'top': 0x0,
            'width': P(0x192),
            'height': P(0x192)
        }), $(P(0x12a))['css']({
            'left': sListPos ? 0x2f6 * b : 0xa * b,
            'top': 0x32 * a,
            'width': 0x200 * b,
            'height': 0x120 * a
        });
    } else {
        var c = samsDisplay[P(0x1a4)] / 0x500;
        webapis['avplay'][P(0x105)](P(0x1cf)), webapis[P(0x11c)][P(0x1d3)](sListPos ? 0x2f6 * c : 0xa * c, 0x32 * c, 0x200 * c, 0x120 * c);
    }
}

function stbInfo() {
    var Q = ssq;
    $('#listAbout')['append'](Q(0x178) + Q(0x17e) + webapis[Q(0x186)][Q(0x13b)]() + '<br/>Duid:\x20' + webapis[Q(0x186)][Q(0x16c)]() + Q(0x158) + webapis[Q(0x186)][Q(0x12f)]() + Q(0x1da) + webapis['productinfo'][Q(0x1d4)]() + Q(0x119) + webapis['productinfo'][Q(0x190)]() + Q(0x17c) + webapis[Q(0x186)][Q(0x1a7)]() + Q(0x1bf) + webapis[Q(0x186)][Q(0x118)]() + '<br/>Mac:\x20' + stb[Q(0x1a2)]() + Q(0x14d) + webapis[Q(0x137)][Q(0x1df)]() + Q(0x14b) + [Q(0x1ef), Q(0x1ab), 'CELLULAR', Q(0xfb)][webapis['network'][Q(0x10c)]()] + Q(0x11f) + navigator[Q(0x14c)]);
}
var _full = !![],
    aspect = 0x0,
    sTypeAspect = 0x0;

function _aspect() {
    var R = ssq;
    if (!_full) return;
    if (sPlayers) {
        var a = getHeightK(),
            b = getWidthK();
        switch (aspect) {
            case 0x0:
                $(R(0x194))[R(0x1e0)]({
                    'left': 0x0,
                    'top': 0x0,
                    'width': 0x500 * b,
                    'height': 0x2d0 * a
                });
                break;
            case 0x1:
                $('#video')[R(0x1e0)]({
                    'left': 0xa0 * b,
                    'top': 0x0,
                    'width': 0x3c0 * b,
                    'height': 0x2d0 * a
                });
                break;
            case 0x2:
                $('#video')['css']({
                    'left': 0x0,
                    'top': -0x78 * a,
                    'width': 0x500 * b,
                    'height': 0x3c0 * a
                });
                break;
            case 0x3:
                $(R(0x194))[R(0x1e0)]({
                    'left': 0x0,
                    'top': 0x55 * a,
                    'width': 0x500 * b,
                    'height': 0x226 * a
                });
                break;
            case 0x4:
                $(R(0x194))[R(0x1e0)]({
                    'left': -0xc8 * b,
                    'top': 0x0,
                    'width': 0x690 * b,
                    'height': 0x2d0 * a
                });
                break;
        }
    } else {
        if (sTypeAspect) webapis[R(0x11c)]['setDisplayRect'](0x0, 0x0, samsDisplay[R(0x1a4)], samsDisplay[R(0x11a)]), webapis[R(0x11c)][R(0x105)]([R(0x1cf), 'PLAYER_DISPLAY_MODE_LETTER_BOX', R(0x164)][aspect]);
        else {
            var c = samsDisplay[R(0x1a4)] / 0x500;
            webapis[R(0x11c)][R(0x105)](R(0x1cf));
            switch (aspect) {
                case 0x0:
                    webapis['avplay'][R(0x1d3)](0x0, 0x0, 0x500 * c, 0x2d0 * c);
                    break;
                case 0x1:
                    webapis[R(0x11c)][R(0x1d3)](0xa0 * c, 0x0, 0x3c0 * c, 0x2d0 * c);
                    break;
                case 0x2:
                    webapis[R(0x11c)][R(0x1d3)](0x0, -0x78 * c, 0x500 * c, 0x3c0 * c);
                    break;
                case 0x3:
                    webapis[R(0x11c)][R(0x1d3)](0x0, 0x55 * c, 0x500 * c, 0x226 * c);
                    break;
                case 0x4:
                    webapis[R(0x11c)][R(0x1d3)](-0xc8 * c, 0x0, 0x690 * c, 0x2d0 * c);
                    break;
            }
        }
    }
}

function _setAspect(a) {
    aspect = a, _aspect();
}

function stbToggleAspectRatio() {
    var S = ssq;
    if (sPlayers || !sTypeAspect) showSelectBox(aspect, ['16x9', S(0x168), S(0x1b6), S(0xfe), S(0x1c6)], function(a) {
        _setAspect(a), saveCHarr('aAspects', a);
    });
    else showSelectBox(aspect, [S(0x1a0), 'Letter\x20box', 'Auto'], function(a) {
        var T = S;
        _setAspect(a), saveCHarr(T(0x125), a);
    });
}

function _getCurrentIndex(a) {
    var U = ssq,
        b = webapis[U(0x11c)][U(0x179)](),
        c = 0x0;
    for (var d in b) {
        if (b[d][U(0x1eb)] == a) return b[d]['index'];
    }
    return 0x0;
}

function _forEachTrack(b, c) {
    var V = ssq;
    try {
        var d = webapis[V(0x11c)][V(0x1f1)]();
    } catch (g) {
        return;
    }
    if (!d) return;
    for (var f in d) {
        if (d[f][V(0x1eb)] == b) c(d[f]);
    }
}

function _tracks2names(b) {
    var W = ssq,
        c = [];
    for (var d = 0x0; d < b['length']; d++) {
        c[W(0x18f)](d + 0x1 + '/' + b[W(0x16b)] + (b[d]['info'] ? '\x20(' + b[d][W(0x138)] + ')' : ''));
    }
    return c;
}

function _setAudioTrack(a) {
    var X = ssq;
    if (sPlayers)
        for (var b = 0x0; b < video[X(0x12d)]['length']; b++) {
            video[X(0x12d)][b][X(0x19c)] = b == a;
        } else webapis[X(0x11c)][X(0x154)](X(0x171), a);
}

function stbToggleAudioTrack() {
    var Y = ssq;
    if (sPlayers) {
        var a = 0x0,
            b = video[Y(0x12d)],
            c = [];
        for (var d = 0x0; d < b[Y(0x16b)]; d++) {
            if (b[d][Y(0x19c)]) a = d;
            c[Y(0x18f)](d + 0x1 + '/' + b[Y(0x16b)] + '\x20(' + (b[d][Y(0x19a)] || '') + '/' + (b[d][Y(0x18e)] || '') + ')');
        }
        showSelectBox(a, c, function(g) {
            var Z = Y;
            if (g == a) return;
            _setAudioTrack(g), saveCHarr(Z(0x196), g);
        }, -0x1);
        return;
    }
    var e = [],
        a = 0x0,
        f = _getCurrentIndex(Y(0x171));
    _forEachTrack(Y(0x171), function(g) {
        var a0 = Y,
            h = JSON[a0(0x122)](g[a0(0x1ed)]),
            j = [];
        if (h[a0(0x18e)]) j['push'](h['language']);
        if (h[a0(0x149)]) j[a0(0x18f)](h[a0(0x149)]);
        if (h[a0(0xff)]) j[a0(0x18f)](h[a0(0xff)] + a0(0x148));
        if (h[a0(0x101)]) j[a0(0x18f)](Math[a0(0x191)](h['bit_rate'] / 0x400 * 0x64) / 0x64 + a0(0x161));
        if (g[a0(0x127)] == f) a = e[a0(0x16b)];
        e[a0(0x18f)]({
            'ind': g[a0(0x127)],
            'info': j['join'](a0(0x1e1))
        });
    });
    if (!e[Y(0x16b)]) return;
    var c = _tracks2names(e);
    showSelectBox(a, c, function(g) {
        var a1 = Y;
        if (g == a) return;
        _setAudioTrack(e[g][a1(0x13f)]), saveCHarr(a1(0x196), e[g]['ind']);
    }, -0x1);
}
var _subsOn = ![];

function _setSubtitleTrack(a) {
    var a2 = ssq;
    if (sPlayers)
        for (var b = 0x0; b < video[a2(0xfa)][a2(0x16b)]; b++) {
            video[a2(0xfa)][b][a2(0x180)] = b == a - 0x1 ? a2(0x144) : a2(0x113);
        } else {
            _subsOn = a > 0x0;
            if (_subsOn) webapis[a2(0x11c)][a2(0x154)](a2(0x135), a);
        }
}

function stbToggleSubtitle() {
    var a3 = ssq;
    if (sPlayers) {
        var a = 0x0,
            b = video['textTracks'],
            c = [b[a3(0x16b)] ? _('Off') : _(a3(0x10a))];
        for (var d = 0x0; d < b[a3(0x16b)]; d++) {
            if (b[d][a3(0x180)] == a3(0x144)) a = d + 0x1;
            c['push'](d + 0x1 + '/' + b['length'] + '\x20(' + (b[d]['label'] || '') + '/' + (b[d]['language'] || '') + ')');
        }
        showSelectBox(a, c, function(g) {
            var a4 = a3;
            if (g == a) return;
            _setSubtitleTrack(g), saveCHarr(a4(0x115), g);
        }, -0x1);
        return;
    }
    var e = [],
        a = 0x0,
        f = _getCurrentIndex(a3(0x135));
    _forEachTrack(a3(0x135), function(g) {
        var a5 = a3,
            h = JSON[a5(0x122)](g[a5(0x1ed)]),
            j = [];
        if (h['track_lang']) j[a5(0x18f)](h[a5(0x173)]);
        if (h[a5(0x149)]) j[a5(0x18f)](h[a5(0x149)]);
        if (_subsOn && g[a5(0x127)] == f) a = e[a5(0x16b)] + 0x1;
        e['push']({
            'ind': g[a5(0x127)],
            'info': j[a5(0x151)](a5(0x1e1))
        });
    });
    var c = _tracks2names(e);
    c[a3(0x123)](c[a3(0x16b)] ? _(a3(0x10f)) : _('Not\x20found')), showSelectBox(a, c, function(g) {
        var a6 = a3;
        if (g == a) return;
        var h = !g ? 0x0 : e[g - 0x1][a6(0x13f)];
        _setSubtitleTrack(h), saveCHarr('aSubs', h);
    }, -0x1);
}

function editKeyT(a) {
    var a7 = ssq;
    switch (a) {
        case keys[a7(0x157)]:
        case keys[a7(0x184)]:
        case keys['GREEN']:
            editvar = $(a7(0x145))[a7(0x16a)](), setEdit();
        case keys[a7(0xfd)]:
        case keys['EXIT']:
        case keys[a7(0x1ae)]:
        case keys[a7(0x134)]:
            $(a7(0x12c))[a7(0x197)](), restoreCPD();
    }
}

function showEditKeyT() {
    var a8 = ssq;
    saveCPD(), $(a8(0x12c))[a8(0x19f)](editCaption + ':<br/><br/>' + '<br/><input\x20type=\x22text\x22\x20id=\x22editvar\x22\x20value=\x22' + editvar + '\x22\x20style=\x22background-color:\x20black;\x20color:' + curColor + ';\x20font-size:150%;\x20width:\x2095%;\x22\x20autofocus><br/><br/>' + a8(0x111) + btnDiv(keys['RED'], '', '-\x20return\x20without\x20save', strEXIT, strSTOP) + a8(0x111) + btnDiv(keys['GREEN'], '', '-\x20save', strPlayPause) + a8(0x111) + btnDiv(keys[a8(0x1ad)], strENTER, '-\x20keyboard'))[a8(0x188)]();
    var a = document[a8(0x13c)](a8(0x109));
    a['focus'](), setTimeout(function() {
        var a9 = a8;
        a[a9(0x18b)] = a[a9(0x16d)] = 0x2710;
    });
}
stb = {}, stb['getMacAddress'] = function() {
    var aa = ssq;
    try {
        var a = webapis['network'][aa(0x1bd)]();
        if (a != stbGetItem(aa(0x1e3))) stbSetItem(aa(0x1e3), a);
        return a;
    } catch (b) {
        return stbGetItem(aa(0x1e3)) || '';
    }
};

function stbOptions() {
    var ac = ssq;

    function a() {
        var ab = ssb,
            c = sPlayers;
        i = -0x1;
        sEditor != listArray[++i][ab(0x16a)] && (sEditor = listArray[i][ab(0x16a)], stbSetItem(ab(0x1b2), sEditor), setEditor());
        sPlayers != listArray[++i][ab(0x16a)] && (sPlayers = listArray[i][ab(0x16a)], providerSetItem(ab(0x131), sPlayers), setPlayer());
        !c && (sBufSize != listArray[++i][ab(0x16a)] && (sBufSize = listArray[i][ab(0x16a)], stbSetItem('sBufSize', sBufSize)), sTypeAspect != listArray[++i][ab(0x16a)] && (sTypeAspect = listArray[i]['val'], stbSetItem('sTypeAspect', sTypeAspect)));
        if (sUseBS != listArray[++i][ab(0x16a)]) {
            sUseBS = listArray[i][ab(0x16a)], stbSetItem(ab(0x1c8), sUseBS);
            try {
                tizen[ab(0x1f2)][sUseBS ? 'registerKey' : ab(0x100)](ab(0x18c));
            } catch (d) {}
        }
        showShift(_(ab(0x15e))), closeList(), optionsList(stbOptions);
    }
    var b = [_('no'), _(ac(0xf5))];
    listArray = [{
        'name': _(ac(0x107)),
        'val': sEditor,
        'values': [_(ac(0x162)), _(ac(0x126))]
    }, {
        'name': _(ac(0x177)),
        'val': sPlayers,
        'values': ['tizen', ac(0x1c0)]
    }, {
        'name': _(ac(0x198)),
        'val': sBufSize,
        'values': ['0', 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa]
    }, {
        'name': _(ac(0x1dd)),
        'val': sTypeAspect,
        'values': [_('built-in'), _('native')]
    }, {
        'name': '<div\x20class=\x22btn\x22>MENU</div>/<div\x20class=\x22btn\x22>SETTINGS</div>\x20->\x20' + _('Show\x20player\x20menu'),
        'val': sUseBS,
        'values': b
    }, {
        'name': '',
        'val': 0x0,
        'values': nofun,
        'cur': ''
    }, {
        'name': '<div\x20class=\x22btn\x22>' + _(ac(0x139)) + ac(0x1c7),
        'val': 0x0,
        'values': a,
        'cur': ''
    }];
    if (sPlayers) listArray['splice'](0x2, 0x2);
    _setSetup(a, function() {
        optionsList(stbOptions);
    });
}
var selectedPlayer = null;

function setPlayer() {
    var ad = ssq;
    if (selectedPlayer == sPlayers) return;
    selectedPlayer = sPlayers;
    if (!sPlayers) $(ad(0x12a))[ad(0x10d)](), $(ad(0x18d))[ad(0x12e)](ad(0x1d2)), $(ad(0x18d))[ad(0x12e)](ad(0x140) + window[ad(0x165)] + ad(0x159) + window[ad(0x1db)] + 'px;\x22></object>');
    else {
        try {
            webapis[ad(0x11c)][ad(0x17f)](), webapis[ad(0x11c)][ad(0x17b)]();
        } catch (a) {}
        $('#divsubtitles')[ad(0x10d)](), $(ad(0x12b))[ad(0x10d)](), $(ad(0x18d))[ad(0x12e)](ad(0x104)), video = document['getElementById']('video'), video[ad(0x1cb)](ad(0x1bc), function() {
            var ae = ad;
            $(ae(0x128))[ae(0x188)](), $(ae(0x1e8))[ae(0x19f)](ae(0x1b3));
        }), video['addEventListener']('loadstart', function() {
            var af = ad;
            $(af(0x128))[af(0x188)](), $(af(0x1e8))[af(0x19f)](af(0x187));
        }), video['addEventListener']('durationchange', function() {
            if (playType < 0x0) updateMediaInfo();
        }), video[ad(0x1cb)](ad(0x175), function() {
            var ag = ad;
            $(ag(0x128))[ag(0x197)](), $(ag(0x1e8))[ag(0x117)]('');
            if (playType < 0x0) updateMediaInfo();
            if (video[ag(0x1d1)]) $(ag(0x1e8))[ag(0x19f)](ag(0x111) + video['videoWidth'] + 'x' + video[ag(0x167)]);
            execCHarr('aAspects', _setAspect), execCHarr(ag(0x115), _setSubtitleTrack), execCHarr('aAudios', _setAudioTrack);
        }), video['addEventListener']('playing', function() {
            var ah = ad;
            $(ah(0x128))[ah(0x197)]();
        }), video[ad(0x1cb)](ad(0x156), function() {
            var ai = ad,
                b = ['', 'ABORTED', ai(0x153), ai(0x103), 'SRC_NOT_SUPPORTED'];
            $(ai(0x128))[ai(0x197)](), $(ai(0x1e8))[ai(0x19f)](ai(0x147) + video['error'][ai(0x141)]), showShift('Error:\x20' + b[video['error'][ai(0x141)]] || video[ai(0x156)][ai(0x141)] + (video[ai(0x156)][ai(0x1c2)] ? '\x20(' + video[ai(0x156)][ai(0x1c2)] + ')' : ''));
        }), video['addEventListener'](ad(0x10e), function() {
            var aj = ad;
            if (video[aj(0x1d1)]) $(aj(0x1e8))[aj(0x19f)](aj(0x111) + video[aj(0x1d1)] + 'x' + video['videoHeight']);
        }), stbToFullScreen();
    }
}

function stbInit() {
    var ak = ssq;
    version += ak(0x1f0), strEPG = 'GUIDE', strSubt = 'TTX/MIX';
    try {
        if (window[ak(0x172)] === undefined) window[ak(0xf9)]['href'] = host + '/samsung/tizen/error.html';
        (function(d, f, h, j, k, l, n) {
            var al = ak;
            d[al(0x15d)] = k, (d[k] = d[k] || function() {
                (d[k]['q'] = d[k]['q'] || [])['push'](arguments);
            }, d[k]['l'] = 0x1 * new Date()), (l = f[al(0x1c4)](h), n = f[al(0x150)](h)[0x0]), l[al(0x1cc)] = 0x1, l[al(0x1a3)] = j, n['parentNode'][al(0x136)](l, n);
        }(window, document, ak(0x1e2), 'https://www.google-analytics.com/analytics.js', 'ga'), send_event = function(d, f, g) {
            var am = ak;
            try {
                ga('send', am(0x19b), f, d, g);
            } catch (h) {}
        }, ga(ak(0x130), ak(0x106), {
            'storage': ak(0x15f)
        }), ga('set', ak(0x13d), null), ga(ak(0x15a), ak(0xfc), ak(0x1d5)), ga(ak(0x15a), ak(0x1e7), ak(0x1c9)), ga('send', ak(0x15b)), $(ak(0x1cd))[ak(0x146)](ak(0x1aa)), window[atob(ak(0x1e5))](atob(ak(0x1a1))), $['getScript'](ak(0x1b8)), tizen[ak(0x1d7)]['getPropertyValue'](ak(0x16f), function(d) {
            samsDisplay = d;
        }, function(d) {}));
        var a = {
            'unregister': [ak(0x1a8), ak(0x10b), 'VolumeMute'],
            'register': [ak(0x11b), ak(0x17d), ak(0x1af), ak(0x1b5), ak(0x1c3), 'ColorF1Green', ak(0x193), ak(0x169), '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ak(0x1ea), ak(0x1b7), 'MediaPause', ak(0x1b0), ak(0x183), ak(0x170), 'MediaTrackPrevious', ak(0x108), ak(0x182), ak(0x13a), ak(0x1a6), ak(0x143), ak(0x129), 'Caption', 'Teletext', ak(0x13e)]
        };
        for (var b in a) {
            for (var c in a[b]) {
                try {
                    if (a[b][c]) tizen[ak(0x1f2)][b + 'Key'](a[b][c]);
                } catch (d) {}
            }
        }
        try {
            webapis[ak(0x166)]['setScreenSaver'](0x0);
        } catch (f) {}
        try {
            tizen[ak(0x14f)][ak(0x1ca)](function(g) {
                _vl = g;
            }), changeVolume = function(g) {
                var an = ak;
                if (g > 0x0) tizen[an(0x14f)]['setVolumeUp']();
                else tizen[an(0x14f)][an(0x1ee)]();
                _showVolume(_vl);
            };
        } catch (g) {}
        $(ak(0x1cd))[ak(0x146)]('<br/>Setup\x20STB...');
        if (isNaN(parseInt(stbGetItem(ak(0x1b2))))) stbSetItem(ak(0x1b2), 0x1);
        if (isNaN(parseInt(stbGetItem(ak(0x1ec))))) stbSetItem(ak(0x1ec), 0x3);
        sTypeAspect = parseInt(stbGetItem(ak(0x199))) || 0x0, sUseBS = parseInt(stbGetItem(ak(0x1c8))) || 0x0;
        if (sUseBS) try {
            tizen[ak(0x1f2)][ak(0x1d0)](ak(0x18c));
        } catch (h) {}
        optionsArr[ak(0x121)](optIndexOf(parentControlSetup), 0x0, {
            'action': stbOptions,
            'name': ak(0x124)
        }), setEditor = function() {
            sEditor ? (editKey = editKeyT, showEditKey = showEditKeyT) : (editKey = editKey1, showEditKey = showEditKey1);
        }, stbAudioTracksExists = function() {
            var ao = ak;
            if (sPlayers) return video[ao(0x12d)][ao(0x16b)] > 0x1;
            else {
                var i = 0x0;
                try {
                    _forEachTrack('AUDIO', function() {
                        i++;
                    });
                } catch (j) {}
                return i > 0x1;
            }
        }, stbSubtitleExists = function() {
            var ap = ak;
            if (sPlayers) return video[ap(0xfa)][ap(0x16b)];
            else {
                var i = 0x0;
                try {
                    _forEachTrack(ap(0x135), function() {
                        i++;
                    });
                } catch (j) {}
                return i;
            }
        }, document['addEventListener']('visibilitychange', function() {
            var aq = ak;
            if (!sPlayers) document[aq(0x181)] ? webapis[aq(0x11c)]['suspend']() : webapis[aq(0x11c)][aq(0x176)]();
        });
    } catch (i) {
        window['location'][ak(0x163)] = host + '/samsung/tizen/error.html';
    }
    window[ak(0x1d6)] = keyHandler;
}