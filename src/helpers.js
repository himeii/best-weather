const PERFECT_TEMP = 21;
const PERFECT_HUMIDITY = 50;

export const getDifference = (perfect, value) => Math.abs(perfect - value);

const normalize = (value, by) => value/by;

export const getTopTen = (json = [], temperature=PERFECT_TEMP) => {
    const ranking = json.map(city => {
        const {main: {temp, humidity}, name, coord} = city;
        const tempRank = normalize(getDifference(temperature, temp), temperature);
        const humidityRank = normalize(getDifference(PERFECT_HUMIDITY, humidity), PERFECT_HUMIDITY);
        return {name, coord, temp, humidity, rank: tempRank + humidityRank}
    });
    return ranking.sort((cityA, cityB) => cityA.rank - cityB.rank).slice(0,10);
};

