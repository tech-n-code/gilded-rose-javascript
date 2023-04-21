import { expect, describe, it } from "vitest";
// import { Item, items, updateQuality } from "./gilded-rose.js";

import { Item, items, Basic, Brie, Legendary, Ticket, Conjured } from "./gilded-rose.js";

console.log(items);

describe("updateQuality", () => {
    it("Basic items' quality and sellIn decrese by 1.", () => {
        // const testItem = new Item("basic", 5, 3);
        const testItem = new Basic("basic", 5, 3);
        items.push(testItem);

        // updateQuality();
        testItem.updateQuality();

        expect(testItem.sellIn).toBe(4);
        expect(testItem.quality).toBe(2);
    });

    it("Once sellIn is less than 0 the quality degrades twice as fast.", () => {
        const testItem = new Basic("basic", 0, 10);
        items.push(testItem);

        testItem.updateQuality();

        expect(testItem.sellIn).toBe(-1);
        expect(testItem.quality).toBe(8);
    });

    it("Brie quility increases the older it gets.", () => {
        const testItem = new Brie("Aged Brie", 2, 0);
        items.push(testItem);

        testItem.updateQuality();

        expect(testItem.sellIn).toBe(1);
        expect(testItem.quality).toBe(1);
    });

    it("Quality is never negative.", () => {
        const testItem = new Basic("basic", 5, 0);
        items.push(testItem);

        testItem.updateQuality();

        expect(testItem.sellIn).toBe(4);
        expect(testItem.quality).toBe(0);
    });

    it("Quality is never more than 50 (test w/ Tickets).", () => {
        const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 50);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(14);
        expect(testItem.quality).toBe(50);
    });

    it("Quality is never more than 50 (test w/ Brie).", () => {
        const testItem = new Brie("Aged Brie", 2, 50);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(1);
        expect(testItem.quality).toBe(50);
    });

    it("Legendary items' quality and sellIn does not change.", () => {
        const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(0);
        expect(testItem.quality).toBe(80);
    });

    it("Tickets quality increase as sellIn decrease.", () => {
        const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(14);
        expect(testItem.quality).toBe(21);
    });

    it("Tickets quality increase by 2 when sellIn is less than 10.", () => {
        const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 9, 20);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(8);
        expect(testItem.quality).toBe(22);
    });

    it("Tickets quality increase by 3 when sellIn is less than 5.", () => {
        const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 4, 20);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(3);
        expect(testItem.quality).toBe(23);
    });

    it("Tickets quality drops to 0 when sellIn reaches 0.", () => {
        const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 0, 20);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(-1);
        expect(testItem.quality).toBe(0);
    });

    it("Conjured item quality degrade twice as fast.", () => {
        const testItem = new Conjured("Conjured Mana Cake", 3, 6);
        items.push(testItem);
    
        testItem.updateQuality();
    
        expect(testItem.sellIn).toBe(2);
        expect(testItem.quality).toBe(4);
    });

});
