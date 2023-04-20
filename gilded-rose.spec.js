import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
    it("Reduces quality and sellIn of 'basic' items by 1", () => {
        const testItem = new Item("basic", 5, 3);
        items.push(testItem);

        updateQuality();

        expect(testItem.sellIn).toBe(4);
        expect(testItem.quality).toBe(2);
    });
});

describe("updateQuality", () => {
    it("Once sellIn is less than 0 the quality degrades twice as fast", () => {
        const testItem = new Item("basic", 0, 10);
        items.push(testItem);

        updateQuality();

        expect(testItem.sellIn).toBe(-1);
        expect(testItem.quality).toBe(8);
    });
});

describe("updateQuality", () => {
    it("Quality is never negative", () => {
        const testItem = new Item("basic", 5, 0);
        items.push(testItem);

        updateQuality();

        expect(testItem.sellIn).toBe(4);
        expect(testItem.quality).toBe(0);
    });
});

describe("updateQuality", () => {
    it("'Aged Brie' quility increases the older it gets", () => {
        const testItem = new Item("Aged Brie", 2, 0);
        items.push(testItem);

        updateQuality();

        expect(testItem.sellIn).toBe(1);
        expect(testItem.quality).toBe(1);
    });
});

describe("updateQuality", () => {
    it("Quality and sellIn of 'Sulfras' does not change", () => {
        const testItem = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
        items.push(testItem);
    
        updateQuality();
    
        expect(testItem.sellIn).toBe(0);
        expect(testItem.quality).toBe(80);
    });
});

describe("updateQuality", () => {
    it("'Backstage passes' quality increase as sellIn decrease", () => {
        const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
        items.push(testItem);
    
        updateQuality();
    
        expect(testItem.sellIn).toBe(14);
        expect(testItem.quality).toBe(21);
    });
});

describe("updateQuality", () => {
    it("'Backstage passes' quality increase by 2 when sellIn is less than 10", () => {
        const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20);
        items.push(testItem);
    
        updateQuality();
    
        expect(testItem.sellIn).toBe(8);
        expect(testItem.quality).toBe(22);
    });
});

describe("updateQuality", () => {
    it("'Backstage passes' quality increase by 3 when sellIn is less than 5", () => {
        const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 20);
        items.push(testItem);
    
        updateQuality();
    
        expect(testItem.sellIn).toBe(3);
        expect(testItem.quality).toBe(23);
    });
});

describe("updateQuality", () => {
    it("'Backstage passes' quality drops to 0 when sellIn reaches 0", () => {
        const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
        items.push(testItem);
    
        updateQuality();
    
        expect(testItem.sellIn).toBe(-1);
        expect(testItem.quality).toBe(0);
    });
});
