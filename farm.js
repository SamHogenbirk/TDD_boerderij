/*DEMO MODEL: using the provided integers to calculate te percentage, checking for "0" also. 
In the rest of the jest I made a little change to the input (same structure diffrent values); Making the code a bit shorter and simpeler. (in my opninion) */
const getYieldForPlant = (input, envo) => input.factors.sun[envo.sun] != 0 ? (input.yield - input.yield * ((-input.factors.sun[envo.sun] / 100))) : input.yield

const getYieldForCrop = (input, envo) => input.yield * input.numCrops * input.factors.sun[envo.sun] * input.factors.wind[envo.wind]

const getTotalYield = (input) => {

    let output = 0
    input.crops.forEach(item => {

        output += ((item.crop.yield * item.numCrops) * item.envo)
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

        // Temporarely store the crop for loop sake, reset after each iteration
        let tempResult = 0
        tempResult += item.crop.sale * item.crop.yield

        item.envo.forEach((item) => {

            tempResult = item * tempResult
            output += tempResult
            tempResult = 0
        })
    })
    return output
};

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