const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });
const playersData = require('./data');

function updateRanks() {
    playersData.sort((a, b) => b.tries - a.tries);
    playersData.forEach((player, index) => {
        player.rank = index + 1;
    });
}

function updateScores() {
    // Simulate random score updates for some players
    playersData.forEach(player => {
        if (Math.random() < 0.5) {
            player.tries += Math.floor(Math.random() * 3);
        }
    });

    updateRanks();

    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(playersData));
        }
    });
}

setInterval(updateScores, 2000);

wss.on('connection', function connection(ws) {
    console.log('Client connected successfully');
    ws.send(JSON.stringify(playersData));
});
