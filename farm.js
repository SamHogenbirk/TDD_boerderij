const getYieldForPlant = (input) => input.yield

const getYieldForCrop = (input) => input.crop.yield * input.numCrops

const getTotalYield = (input) => {

    let output = 0
    input.crops.forEach(item => output += (item.crop.yield * item.numCrops))
    return output
};

const getCostsForCrop = (input) => input.crops.crop.price * input.crops.numCrops

const getRevenueForCrop = (input) => input.crops.crop.sale * input.crops.crop.yield

const getProfitForCrop = (input) => getRevenueForCrop(input) - getCostsForCrop(input)

const getTotalProfit = (input) => {

    let output = 0
    input.obj.forEach((crops) => output += getProfitForCrop({ crops }))
    return output
};


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
}