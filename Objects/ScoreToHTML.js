function ScoreToHTML(args) {
    String.prototype.escapeHTML = function () {
        return this
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };

    let str = "<table>\n  <tr><th>name</th><th>score</th></tr>\n";
    let records = JSON.parse(args);

    for (let record of records) {
        str += `   <tr><td>${record.name.escapeHTML()}</td><td>${record.score}</td></tr>\n`;
    }

    str += "</table>";
    console.log(str);
}

ScoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
