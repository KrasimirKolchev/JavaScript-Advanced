function requestValidator(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriMatch = /^[A-Za-z0-9.]+$/g;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const charMatch = /[<>\\&'"]+/g;

    if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!obj.hasOwnProperty('uri') || !obj.uri.match(uriMatch)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!obj.hasOwnProperty('message') || charMatch.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

requestValidator({
        method: 'GET',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: 'asl"pls'
    });

requestValidator({
        method: 'GET',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }
);

requestValidator({
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    });