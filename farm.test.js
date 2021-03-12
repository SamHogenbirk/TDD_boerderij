//npm run testwatch

const { getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit }
    = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: 0.5,
                medium: 0,
                high: 1.5,
            }
        }
    };

    const environmentFactors = {
        sun: "low",

    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});


describe("getYieldForCrop", () => {
    test("Get yield for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            factors: {

                sun: {
                    low: 0.5,
                    medium: 0,
                    high: 1.5,
                },

                wind: {
                    low: 1.2,
                    none: 0,
                    high: 0.8
                },
            }
        };

        const environmentFactors = {
            sun: "high",
            wind: "high"
        };

        expect(getYieldForCrop(input, environmentFactors)).toBe(36);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: 0.5,
                    medium: 0,
                    high: 1.5,
                }
            }
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                soil: {
                    bad: 0.5,
                    normal: 0,
                    good: 1.5,
                }
            }
        };

        const environmentFactors = {
            sun: "medium",
            soil: "normal"
        };
        const crops = [
            { crop: corn, numCrops: 5, envo: corn.factors.sun[environmentFactors.sun] },
            { crop: pumpkin, numCrops: 2, envo: pumpkin.factors.soil[environmentFactors.soil] },
        ];


        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe('getCostsForCrop', () => {

    const corn = {
        name: "corn",
        yield: 3,
        price: 1
    };
    const crops = { crop: corn, numCrops: 230 };

    test("Calculate total cost per crop", () => {
        expect(getCostsForCrop({ crops })).toBe(230);
    });
});

describe('getRevenueForCrop', () => {
    const apple = {
        name: "apple",
        yield: 150,
        price: 1,
        sale: 2
    };
    const crops = { crop: apple };

    test("calculate revenue per crop", () => {
        expect(getRevenueForCrop({ crops })).toBe(300);
    });
});

describe('getProfitForCrop', () => {
    const potato = {
        name: "potato",
        yield: 300,
        price: 1,
        sale: 3
    };
    const crops = { crop: potato, numCrops: 200 };

    test("calculate profit per crop", () => {
        expect(getProfitForCrop({ crops })).toBe(700);
    });
});

describe('getTotalProfit', () => {
    const potato = {
        name: "potato",
        yield: 700,
        price: 0.20,
        sale: 1.20
    };
    const apple = {
        name: "apple",
        yield: 200,
        price: 1,
        sale: 1.75
    };
    const pumpkin = {
        name: "pumpkin",
        yield: 50,
        price: 1.20,
        sale: 1
    };
    const corn = {
        name: "corn",
        yield: 800,
        price: 0.85,
        sale: 0.85
    };
    const obj = [
        { crop: potato, numCrops: 100 },
        { crop: apple, numCrops: 50 },
        { crop: pumpkin, numCrops: 30 },
        { crop: corn, numCrops: 100 },
    ];

    test("calculate total profit for multiple crops", () => {
        expect(getTotalProfit({ obj })).toBe(1729);
    });
});