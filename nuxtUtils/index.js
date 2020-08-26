const Channels = require('../datas/channelCollections.json')

const useFetch = () => {
    // return Channels.slice(0, 9);
    return Channels;
}

const useSearch = (id) => {
    let obj = Channels.find(el => el.id == id);
    if (obj) {
        return obj;
    }
    return {};
}

module.exports = { useFetch, useSearch }