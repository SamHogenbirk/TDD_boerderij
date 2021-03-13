const log = console.log

const getYieldForPlant = (input, envo) => input.yield * input.factors.sun[envo.sun]

const getYieldForCrop = (input, envo) => {

    const res = input.crop.yield *
        input.numCrops *
        input.factors.sun[envo.sun] *
        input.factors.wind[envo.wind]

    return res

};

const getTotalYield = (input) => {

    let output = 0
    input.crops.forEach(item => {

        item.envo != 0 ? output += ((item.crop.yield * item.numCrops) * item.envo) : output += item.crop.yield * item.numCrops
    })

    return output
};

const getCostsForCrop = (input) => {

    output = 0
    input.crops.forEach((item) => {

        output += item.crop.price * item.numCrops

    });

    return output
};

const getRevenueForCrop = (input) => {

    let output = 0
    input.crops.forEach((item) => {

        output += item.crop.sale * item.crop.yield

        item.envo.forEach((item) => {
        
            output = item * output
        })
    });

    return output

}

const getProfitForCrop = (input) => getRevenueForCrop(input) - getCostsForCrop(input)

const getTotalProfit = (input) => getProfitForCrop(input);

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
}