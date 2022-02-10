const { generateSlug } = require("random-word-slugs");
const { PeerServer } = require("peer");

const peerServer = PeerServer({
    port: 8080,
    path: '/realbadcoin-peerjs',
    generateClientId: () => generateSlug(2)
});
