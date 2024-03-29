
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
                low: -50,
                medium: 0,
                high: 50,
            }
        }
    };
    const envoFactors = {
        sun: "medium",
    };
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, envoFactors)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop", () => {
        const corn = {
            crop: "corn",
            yield: 3,
            numCrops: 10,
            factors: {
                sun: {
                    low: 0.5,
                    medium: 1,
                    high: 1.5,
                },
                wind: {
                    low: 0.9,
                    none: 1,
                    high: 0.5
                },
            }
        }
        const envoFactors = {
            sun: "medium",
            wind: "none"
        }
        expect(getYieldForCrop(corn, envoFactors)).toBe(30);
    })
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: 0.5,
                    medium: 1,
                    high: 1.5,
                }
            }
        }
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                soil: {
                    bad: 0.5,
                    normal: 1,
                    good: 1.5,
                }
            }
        }
        const environmentFactors = {
            sun: "medium",
            soil: "normal"
        }
        const crops = [
            { crop: corn, numCrops: 5, envo: corn.factors.sun[environmentFactors.sun] },
            { crop: pumpkin, numCrops: 2, envo: pumpkin.factors.soil[environmentFactors.soil] },
        ]
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
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
        const environmentFactors = {
            sun: "high",
        };
        const crops = [{ crop: corn, numCrops: 0, envo: corn.factors.sun[environmentFactors.sun] }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe('getCostsForCrop', () => {
    const corn = {
        name: "corn",
        yield: 3,
        price: 1
    }
    const crops = [{ crop: corn, numCrops: 230 }]

    test("Calculate total cost per crop", () => {
        expect(getCostsForCrop({ crops })).toBe(230);
    })
});

describe('getRevenueForCrop', () => {
    const apple = {
        name: "apple",
        yield: 150,
        price: 1,
        sale: 2,
        factors: {
            sun: {
                low: 0.6,
                normal: 1,
                high: 1.5,
            },
            soil: {
                bad: 0.4,
                normal: 1,
                good: 1.5,
            },
            worms: {
                none: 1,
                some: 0.7,
                many: 0.3,
            }
        }
    }
    const envoFactors = {
        sun: "normal",
        soil: "normal",
        worms: "none"
    }
    const crops = [
        { crop: apple, envo: [apple.factors.sun[envoFactors.sun], apple.factors.worms[envoFactors.worms], apple.factors.soil[envoFactors.soil]] }
    ]
    test("calculate revenue per crop", () => {
        expect(getRevenueForCrop({ crops })).toBe(300);
    })
});

describe('getProfitForCrop', () => {
    const potato = {
        name: "potato",
        yield: 300,
        price: 1,
        sale: 3,
        factors: {
            sun: {
                low: 0.5,
                normal: 1,
                high: 1.5,
            },
            soil: {
                bad: 0.8,
                normal: 1,
                good: 1.6
            }
        }
    }
    const environmentFactors = {
        sun: "normal",
        soil: "normal"
    }
    const crops = [{
        crop: potato, numCrops: 200, envo: [potato.factors.sun[environmentFactors.sun], potato.factors.soil[environmentFactors.soil]]
    }]
    test("calculate profit per crop", () => {
        expect(getProfitForCrop({ crops })).toBe(700);
    })
});

describe('getTotalProfit', () => {
    const potato = {
        name: "potato",
        yield: 700,
        price: 0.20,
        sale: 1.20,
        factors: {
            sun: {
                low: 0.5,
                normal: 1,
                high: 1.5,
            },
            soil: {
                bad: 0.8,
                normal: 1,
                good: 1.6
            }
        }
    }
    const apple = {
        name: "apple",
        yield: 200,
        price: 1,
        sale: 1.75,
        factors: {
            sun: {
                low: 0.5,
                normal: 1,
                high: 1.5,
            },
            worms: {
                none: 1,
                some: 0.7,
                many: 0.3,
            },
            wind: {
                low: 1.2,
                none: 1,
                high: 0.8
            }
        }
    }
    const pumpkin = {
        name: "pumpkin",
        yield: 50,
        price: 1.20,
        sale: 1,
        factors: {
            soil: {
                bad: 0.5,
                normal: 1,
                good: 1.5,
            }
        }
    }
    const corn = {
        name: "corn",
        yield: 800,
        price: 0.85,
        sale: 0.85,
        factors: {
            sun: {
                low: 0.5,
                normal: 1,
                high: 1.5,
            },
            wind: {
                low: 0.9,
                none: 1,
                high: 0.8
            }
        }
    }
    const envoFactors = {
        sun: "normal",
        worms: "none",
        soil: "normal",
        wind: "none"
    }
    const crops = [
        { crop: potato, numCrops: 100, envo: [potato.factors.sun[envoFactors.sun], potato.factors.soil[envoFactors.soil]] },
        { crop: apple, numCrops: 50, envo: [apple.factors.sun[envoFactors.sun], apple.factors.worms[envoFactors.worms], apple.factors.wind[envoFactors.wind]] },
        { crop: pumpkin, numCrops: 30, envo: [pumpkin.factors.soil[envoFactors.soil]] },
        { crop: corn, numCrops: 100, envo: [corn.factors.sun[envoFactors.sun], corn.factors.wind[envoFactors.wind]] },
    ]
    test("calculate total profit for multiple crops", () => {
        expect(getTotalProfit({ crops })).toBe(1729);
    })
});