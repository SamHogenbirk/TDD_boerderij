let log = console.log

const getYieldForPlant = (input) => input.yield

const getYieldForCrop = (input) => input.crop.yield * input.numCrops

const getTotalYield = (input) => {

    let output = 0
    input.crops.forEach(element => output += (element.crop.yield * element.numCrops))
    return output

};

const getCostsForCrop = (input) => {

    let output = 0
    input.crops.forEach(element => output = (element.crop.price * element.numCrops))
    return output

}



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop
}