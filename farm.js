let log = console.log

const getYieldForPlant = (input) => input.yield

const getYieldForCrop = (input) => input.crop.yield * input.numCrops

const getTotalYield = (input) => {

    let output = 0
    input.crops.forEach(element => output += (element.crop.yield * element.numCrops))
    return output

};

const getCostsForCrop = (input) => input.crops.crop.price * input.crops.numCrops

const getRevenueForCrop = (input) => input.crops.crop.sale * input.crops.crop.yield

const getProfitGorCrop = (input) => getRevenueForCrop(input) - getCostsForCrop(input)

const getTotalProfit = (input) => log(input)


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitGorCrop,
    getTotalProfit
}