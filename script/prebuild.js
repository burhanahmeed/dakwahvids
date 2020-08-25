require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const OUT_FILE = path.resolve(__dirname, '../datas/channelCollections.json');

// Fetch google api key
const GoogleAPI = process.env.GOOGLEAPI;

// fetch channel list
const Channels = require('../datas/channels.json');

(async () => {    
    let channelsData = [];
    for (const channel of Channels) {
        let {data: { items }} = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
                part: 'snippet,statistics',
                id: channel.id,
                key: GoogleAPI
            }
        })
        console.log(items)
        channelsData.push({
            id: channel.id,
            lang: channel.lang,
            snippet: {...items[0].snippet},
            statistics: {...items[0].statistics}
        })
    }
    fs.writeFileSync(OUT_FILE, JSON.stringify(channelsData));
})

();