export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

export class Basic extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = this.quality - 2;
        } else if (this.quality > 0 && this.quality <= 50) {
            this.quality = this.quality - 1;
        } 
    }
}

export class Brie extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        this.sellIn = this.sellIn - 1;
        if (this.quality >= 0 && this.quality < 50) {
            this.quality = this.quality + 1;
        } 
    }
}

export class Legendary extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        // Do nothing.
    }
}

export class Ticket extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        this.sellIn = this.sellIn - 1;
        if (this.sellIn >= 10) {
            this.quality = this.quality + 1
        } else if (this.sellIn >= 5 && this.sellIn < 10) {
            this.quality = this.quality + 2
        } else if (this.sellIn < 5) {
            this.quality = this.quality + 3
        }
        if (this.sellIn === 0 || this.sellIn < 0) {
            this.quality = 0;
        }
        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}

export class Conjured extends Basic {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        super.updateQuality();
        this.quality = this.quality - 1;
    }
}

items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Brie("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

// ORIGINAL LOGIC
//
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
