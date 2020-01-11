function Usernames(args) {
    let names = new Set(args);
    let usernames = Array.from(names).sort(function(a, b) {
        let comp = a.length - b.length;
        if (comp === 0) {
            comp = a.localeCompare(b);
        }
        return comp;
    });

    console.log(usernames.join("\n"));
}

Usernames(['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston']);
Usernames(['Denise', 'Ignatius', 'Iris', 'Isacc', 'Indie', 'Dean', 'Donatello', 'Enfuego',
    'Benjamin', 'Biser', 'Bounty', 'Renard', 'Rot']);