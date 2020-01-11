let expect = require('chai').expect;
let SoftUniFy = require("../Softunify.js").SoftUniFy;

describe('SoftUniFy tests', function () {
    const NOT_FOUND_SONG = "You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!";
    const FOUND_SONG = "Eminem:\nVenom - Knock, Knock let the devil in...\n";
    const EMPTY_SONGLIST = 'Your song list is empty';
    const SONGLIST = "Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar..";
    const ARTIST_NOT_FOUND = 'The Eminem is not on your artist list.';

    describe('constructor test', function () {
        it('should have property allSongs with value object at initialization', function () {
            let player = new SoftUniFy();
            expect(player).to.haveOwnProperty('allSongs');
            expect(typeof player.allSongs).to.be.equal('object');
        });
    });
    
    describe('downloadSong(artist, song, lyrics) test', function () {
        it('should create artist if the artist is not present', function () {
            let player = new SoftUniFy();
            player.downloadSong('artist', 'song', 'lyrics');
            let artist = player.allSongs['artist'];
            expect(typeof artist).to.be.equal('object');
            expect(artist).to.haveOwnProperty('rate', 0);
            expect(artist).to.haveOwnProperty('votes', 0);
            expect(artist).to.haveOwnProperty('songs');
            expect(artist['songs'][0]).to.have.deep.equal('song - lyrics');
            expect(artist['songs'].length).to.be.equal(1);
        });
        it('should return object', function () {
            let player = new SoftUniFy();
            let test = player.downloadSong('artist', 'song', 'lyrics');
            expect(typeof test).to.be.equal('object');
        });
    });
    describe('playSong(song) test', function () {
        it('should return msg if the song is not found', function () {
            let player = new SoftUniFy();
            player.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let msg = player.playSong('song');
            expect(msg).to.be.equal(NOT_FOUND_SONG);
        });
        it('should return proper msg if the song exists', function () {
            let player = new SoftUniFy();
            player.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let msg = player.playSong('Venom');
            expect(msg).to.be.equal(FOUND_SONG);
        });
    });
    describe('songsList() test', function () {
        it('should return the songs in the songlist', function () {
            let sofunify = new SoftUniFy();
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar..');
            let msg = sofunify.songsList;
            expect(msg).to.be.equal(SONGLIST);
        });
        it('should return msg if there are no songs', function () {
            let player = new SoftUniFy();
            let msg = player.songsList;
            expect(msg).to.be.equal(EMPTY_SONGLIST);
        });
    });
    describe('rateArtist() tests', function () {
        it('should return msg if the artist is not in the list', function () {
            let player = new SoftUniFy();
            player.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar..');
            let msg = player.rateArtist('Eminem');
            let msgg = player.rateArtist('Eminem', 50);
            expect(msg).to.be.equal(ARTIST_NOT_FOUND);
            expect(msgg).to.be.equal(ARTIST_NOT_FOUND);
        });
        it('should return msg if the artist is in the list', function () {
            let player = new SoftUniFy();
            player.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            player.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            let msg = player.rateArtist('Eminem');
            let msgg = player.rateArtist('Eminem', 50);
            expect(msg).to.be.equal(0);
            expect(msgg).to.be.equal(50);
        });
    });
});


