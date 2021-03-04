const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitGorCrop } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});


describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
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
    test("Calculate total cost per crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            price: 1
        };
        const crops = { crop: corn, numCrops: 230 };
        expect(getCostsForCrop({ crops })).toBe(230);
    });
});

describe('getRevenueForCrop', () => {
    test("calculate revenue per crop", () => {
        const apple = {
            name: "apple",
            yield: 150,
            price: 1,
            sale: 2
        };
        const crops = { crop: apple };
        expect(getRevenueForCrop({ crops })).toBe(300);
    });
});

describe('getProfitGorCrop', () => {
    test("calculate profit per crop", () => {
        const potato = {
            name: "potato",
            yield: 300,
            price: 1,
            sale: 3
        };
        const crops = { crop: potato, numCrops: 200 };
        expect(getProfitGorCrop({ crops })).toBe(300);
    });
});