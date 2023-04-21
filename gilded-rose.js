export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export class Basic extends Item { //add export
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        this.sellIn = this.sellIn - 1;
        if (sellIn < 0) {
            this.quality = this.quality - 2;
        } else {
            this.quality = this.quality - 1;
        }
    }
    get sellIn() {
        return this.sellIn;
    }
    get quality() {
        return this.quality;
    }
}

export class Brie extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        super.updateQuality();
        if (this.quality < 50) {
            this.quality = this.quality + 2; //to offset Basic -1
        } else if (sellIn < 0) {
            this.quality = this.quality + 3; //to offset Basic -2
        } else {
            this.quality = 50;
        }
    }
}

export class Legendary extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        super.updateQuality();
        if (this.quality < 50) {
            this.quality = this.quality - 2; //to offset Basic -1
        } else if (sellIn < 0) {
            this.quality = this.quality - 3; //to offset Basic -2
        } else {
            this.quality = 80; //Set to 80
        }
    }
}

export class Ticket extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        super.updateQuality();
        if (this.sellIn < 10) {
            this.quality = this.quality + 3 //to offset Basic -1
        } else if (this.sellIn < 5) {
            this.quality = this.quality + 3 //to offset Basic -1
        } else if (this.sellIn === 0 || sellIn < 0) {
            this.quality = 0;
        }
    }
}

export class Conjured extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        super.updateQuality();
        super.updateQuality();
    }
}

// export const updateQuality = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };
