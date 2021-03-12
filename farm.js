const getYieldForPlant = (input, envo) => input.yield * input.factors.sun[envo.sun]

const getYieldForCrop = (input, envo) => {

    const res = input.crop.yield *
        input.numCrops *
        input.factors.sun[envo.sun] *
        input.factors.wind[envo.wind]
    return res

}

const getTotalYield = (input) => {

    console.log(input)

    let output = 0
    input.crops.forEach(item => {

        item.envo != 0 ? output += ((item.crop.yield * item.numCrops) * item.envo) : output += item.crop.yield * item.numCrops
    })
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