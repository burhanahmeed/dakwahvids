const Channels = require('../datas/channelCollections.json')

const useFetch = () => {
    // return Channels.slice(0, 9);
    return Channels;
}

module.exports = { useFetch }