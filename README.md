# discord-rpc-constructor
This package is meant to be used with discord-rpc

### Installation
```
npm i -S discord-rpc discord-rpc-constructor
```

### Usage
```js
const { Client } = require('discord-rpc');
const Activity = require('discord-rpc-constructor');
const client = new Client({ transport: 'ipc' });

client.on('ready', () => {
  const activity = new Activity()
    .setDetails('🐍')
    .setState('slithering')
    .setTimestamps(new Date(), Math.floor(Date.now() / 1000) + 60)
    .setLargeImage('snek_large', 'supa snek')
    .setSmallImage('snek_small', 'smol snek')
    .setParty('snek_party', 1, 5)
    .setMatchSecret('slithers')
    .setJoinSecret('boop')
    .setSpectateSecret('sniff')
    .setInstance(true);
  client.setActivity(activity);
});

client.login('180984871685062656');
```