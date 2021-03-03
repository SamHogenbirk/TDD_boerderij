let log = console.log

const getYieldForPlant = (corn) => corn.yield

const getYieldForCrop = (input) => input.numCrops * 3

const getTotalYield = (input) => {

    let a = input.crops[0]
    let b = a.numCrops * a.crop.yield

    let c = input.crops[1]
    let d = c.numCrops * c.crop.yield

    const res = b + d

    return res
};

const getTotalYield = (input) => {

    
}



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
}