const _0xc9dd59 = _0x19f8;
(function (_0x2bab51, _0x38a5b3) {
    const _0x30facf = _0x19f8,
        _0x2948c6 = _0x2bab51();
    while (!![]) {
        try {
            const _0x303ced = parseInt(_0x30facf(0x185)) / 0x1 * (-parseInt(_0x30facf(0x17a)) / 0x2) + parseInt(_0x30facf(0x183)) / 0x3 + -parseInt(_0x30facf(0x177)) / 0x4 * (parseInt(_0x30facf(0x173)) / 0x5) + parseInt(_0x30facf(0x18b)) / 0x6 * (-parseInt(_0x30facf(0x179)) / 0x7) + -parseInt(_0x30facf(0x181)) / 0x8 + -parseInt(_0x30facf(0x17f)) / 0x9 * (-parseInt(_0x30facf(0x18c)) / 0xa) + parseInt(_0x30facf(0x176)) / 0xb;
            if (_0x303ced === _0x38a5b3) break;
            else _0x2948c6['push'](_0x2948c6['shift']());
        } catch (_0x552af0) {
            _0x2948c6['push'](_0x2948c6['shift']());
        }
    }
}(_0x6d19, 0xd58b7));
const {
    WAConnection,
    MessageType
} = require('@adiwajshing/baileys')[_0xc9dd59(0x194)], makeWASocket = require('@adiwajshing/baileys')[_0xc9dd59(0x194)], {
    exec,
    spawn,
    execSync
} = require('child_process'), pino = require(_0xc9dd59(0x17d)), fs = require('fs'), fetch = require(_0xc9dd59(0x174)), {
    delay,
    useSingleFileAuthState
} = require(_0xc9dd59(0x184)), {
    state,
    saveState
} = useSingleFileAuthState(_0xc9dd59(0x187));
exec(_0xc9dd59(0x17b));

function XeonBotInc() {
    const _0x52617a = _0xc9dd59;
    let _0x180872 = [0x3, 0xca2, 0x9];
    const _0x37e6f4 = makeWASocket({
        'logger': pino({
            'level': _0x52617a(0x172)
        }),
        'printQRInTerminal': !![],
        'browser': [_0x52617a(0x17e), _0x52617a(0x191), _0x52617a(0x18f)],
        'auth': state,
        'version': _0x180872
    });
    _0x37e6f4['ev']['on'](_0x52617a(0x18a), async _0x3e98bf => {
        const _0x2503b3 = _0x52617a,
            {
                connection: _0x361c11,
                lastDisconnect: _0x27bace
            } = _0x3e98bf;
        if (_0x361c11 == _0x2503b3(0x186)) {
            await delay(0x3e8 * 0xa);
            const _0x5df854 = fs['readFileSync']('./session.json');
            let _0xa853d4 = await (await fetch('https://i.ibb.co/MsKHrS9/melissa-v1-0-1.jpg'))['buffer']();
            await _0x37e6f4['sendMessage'](_0x37e6f4[_0x2503b3(0x18e)]['id'], {
                'document': _0x5df854,
                'mimetype': _0x2503b3(0x178),
                'fileName': _0x2503b3(0x193)
            }), await _0x37e6f4[_0x2503b3(0x17c)](_0x37e6f4[_0x2503b3(0x18e)]['id'], {
                'text': ' *🔴 Dont Share The Code With Anybody* CHAMI-OFFICIAL-WA-BOT WA BOT QR COAD',
                'contextInfo': {
                    'externalAdReply': {
                        'title': _0x2503b3(0x195),
                        'body': _0x2503b3(0x175),
                        'previewType': _0x2503b3(0x192),
                        'thumbnailUrl': '',
                        'thumbnail': _0xa853d4,
                        'sourceUrl': 'https://github.com/CHAMIOFICIAL/CHAMI-OFFICIAL-WA-BOT'
                    }
                }
            }), console[_0x2503b3(0x189)](_0x37e6f4), process[_0x2503b3(0x188)](0x0);
        }
        _0x361c11 === 'close' && _0x27bace && _0x27bace[_0x2503b3(0x18d)] && _0x27bace['error']['output'][_0x2503b3(0x180)] != 0x191 && XeonBotInc();
    }), _0x37e6f4['ev']['on'](_0x52617a(0x190), saveState), _0x37e6f4['ev']['on'](_0x52617a(0x182), () => {});
}

function _0x19f8(_0x28719c, _0x3c7afd) {
    const _0x6d1970 = _0x6d19();
    return _0x19f8 = function (_0x19f825, _0x30bb2e) {
        _0x19f825 = _0x19f825 - 0x172;
        let _0x25b7d9 = _0x6d1970[_0x19f825];
        return _0x25b7d9;
    }, _0x19f8(_0x28719c, _0x3c7afd);
}

function _0x6d19() {
    const _0x1cca66 = ['default', 'Subscribe CHAMI OFICIAL', 'silent', '5syuYel', 'node-fetch', 'KING CHAMI V1 WA BOT', '48381003rHXlIS', '5152244LYeTwr', 'application/json', '12211507qAdVTI', '554MkPcxB', 'rm -rf session.json', 'sendMessage', 'pino', 'KING CHAMI V1 WA BOT', '1888299sldnoW', 'statusCode', '8407400vVdiGK', 'messages.upsert', '3374553eKNfkn', '@adiwajshing/baileys', '2797HOoTpz', 'open', './session.json', 'exit', 'log', 'connection.update', '6kiMeSE', '10ZopOJR', 'error', 'user', '1.0.0', 'creds.update', 'Safari', 'preview', 'session.json'];
    _0x6d19 = function () {
        return _0x1cca66;
    };
    return _0x6d19();
}
XeonBotInc();