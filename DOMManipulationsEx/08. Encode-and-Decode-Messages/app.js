function encodeAndDecodeMessages() {
    const body = document.getElementById('main');
    const div = Array.from(body.getElementsByTagName('div'));

    div[0].querySelector('button').addEventListener('click', encodeMsg);
    div[1].querySelector('button').addEventListener('click', decodeMsg);

    function encodeMsg() {
        let text = div[0].querySelector('textarea');
        let encodeStr = "";

        for (let i = 0; i < text.value.length; i++) {
            let symbol = String.fromCharCode((text.value.charCodeAt(i) + 1));
            encodeStr += symbol;
        }

        div[1].querySelector('textarea').value = encodeStr;
        text.value = "";
    }

    function decodeMsg() {
        let text = div[1].querySelector('textarea');
        let decodeStr = "";

        for (let i = 0; i < text.value.length; i++) {
            let symbol = String.fromCharCode((text.value.charCodeAt(i) - 1));
            decodeStr += symbol;
        }
        text.value = decodeStr;
    }
}