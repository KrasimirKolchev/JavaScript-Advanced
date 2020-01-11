function JSONsTable(args) {
    String.prototype.escapeHTML = function () {
        return this
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };

    let str = "";

    for (let entry of args) {
        let obj = JSON.parse(entry);
        str += `\n\t<tr>\n\t\t<td>${obj.name.escapeHTML()}</td>\n\t\t<td>${obj.position.escapeHTML()}</td>\n\t\t<td>${obj.salary}</td>\n\t</tr>`;
    }

    let output = `<table>${str}\n</table>`;
    console.log(output);
}

JSONsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);