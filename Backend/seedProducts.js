// seedProducts.js
// Run this once to populate your MongoDB "Ekart" database with sample electronics products.
//
// HOW TO RUN:
// 1. Copy this file into your Backend/ folder (same level as server.js)
// 2. Make sure your Backend/.env already has MONGO_URI set (it does)
// 3. From the Backend/ folder run:  node seedProducts.js
// 4. It connects, removes any previously-seeded sample products, inserts 25 fresh ones, then exits.
//
// NOTE ON IMAGES: these use picsum.photos/seed/... which are real, stable,
// hotlink-safe stock photos (not literal product photos, since this script
// does not go through Cloudinary/multer). Once you're ready to use real
// product photography, replace the productImg.url values with your own
// Cloudinary URLs (and matching public_id) via the existing admin "Add
// Product" flow, or by editing this array directly before re-running.

import mongoose from "mongoose";
import "dotenv/config";
import { Product } from "./models/productModel.js";

const products = [
  {
    "productName": "Apple iPhone 15 Pro Max",
    "productDesc": "6.7-inch Super Retina XDR display, A17 Pro chip, 48MP triple camera system, titanium design, USB-C connectivity.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/iphone15promax/800/800",
        "public_id": "seed_iphone15promax"
      }
    ],
    "productPrice": 4999,
    "category": "Smartphones",
    "brand": "Apple"
  },
  {
    "productName": "Samsung Galaxy S24 Ultra",
    "productDesc": "6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 3, 200MP camera, built-in S Pen, 5000mAh battery.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/galaxys24ultra/800/800",
        "public_id": "seed_galaxys24ultra"
      }
    ],
    "productPrice": 4799,
    "category": "Smartphones",
    "brand": "Samsung"
  },
  {
    "productName": "Google Pixel 8 Pro",
    "productDesc": "6.7-inch LTPO OLED display, Google Tensor G3 chip, AI-powered camera with Magic Eraser, 7 years of OS updates.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/pixel8pro/800/800",
        "public_id": "seed_pixel8pro"
      }
    ],
    "productPrice": 3899,
    "category": "Smartphones",
    "brand": "Google"
  },
  {
    "productName": "OnePlus 12",
    "productDesc": "6.82-inch ProXDR display, Snapdragon 8 Gen 3, 100W SuperVOOC fast charging, Hasselblad camera system.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/oneplus12/800/800",
        "public_id": "seed_oneplus12"
      }
    ],
    "productPrice": 3299,
    "category": "Smartphones",
    "brand": "OnePlus"
  },
  {
    "productName": "Xiaomi Redmi Note 13 Pro",
    "productDesc": "6.67-inch AMOLED display, 200MP camera, 120W HyperCharge, budget flagship performance.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/redminote13pro/800/800",
        "public_id": "seed_redminote13pro"
      }
    ],
    "productPrice": 1499,
    "category": "Smartphones",
    "brand": "Xiaomi"
  },
  {
    "productName": "Apple MacBook Pro 14-inch M3",
    "productDesc": "M3 Pro chip, Liquid Retina XDR display, up to 18 hours battery life, 16GB unified memory, 512GB SSD.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/macbookpro14/800/800",
        "public_id": "seed_macbookpro14"
      }
    ],
    "productPrice": 4999,
    "category": "Laptops",
    "brand": "Apple"
  },
  {
    "productName": "Dell XPS 15",
    "productDesc": "Intel Core i7 13th Gen, 15.6-inch 4K OLED InfinityEdge display, NVIDIA RTX 4050, 16GB RAM, 1TB SSD.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/dellxps15/800/800",
        "public_id": "seed_dellxps15"
      }
    ],
    "productPrice": 4599,
    "category": "Laptops",
    "brand": "Dell"
  },
  {
    "productName": "HP Spectre x360",
    "productDesc": "13.5-inch 3K2K OLED touchscreen, Intel Core i7, 2-in-1 convertible design, Intel Evo certified.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/hpspectrex360/800/800",
        "public_id": "seed_hpspectrex360"
      }
    ],
    "productPrice": 3999,
    "category": "Laptops",
    "brand": "HP"
  },
  {
    "productName": "Lenovo Legion Pro 7",
    "productDesc": "AMD Ryzen 9, NVIDIA RTX 4080, 16-inch QHD 240Hz display, advanced cooling for serious gamers.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/legionpro7/800/800",
        "public_id": "seed_legionpro7"
      }
    ],
    "productPrice": 4999,
    "category": "Laptops",
    "brand": "Lenovo"
  },
  {
    "productName": "ASUS ROG Zephyrus G14",
    "productDesc": "AMD Ryzen 9 8945HS, NVIDIA RTX 4060, 14-inch QHD+ 165Hz display, ultra-portable gaming laptop.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/rogzephyrusg14/800/800",
        "public_id": "seed_rogzephyrusg14"
      }
    ],
    "productPrice": 4299,
    "category": "Laptops",
    "brand": "ASUS"
  },
  {
    "productName": "Sony WH-1000XM5",
    "productDesc": "Industry-leading noise cancellation, 30-hour battery life, crystal clear hands-free calling, multipoint connection.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/sonywh1000xm5/800/800",
        "public_id": "seed_sonywh1000xm5"
      }
    ],
    "productPrice": 899,
    "category": "Headphones",
    "brand": "Sony"
  },
  {
    "productName": "Apple AirPods Pro (2nd Gen)",
    "productDesc": "Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio, MagSafe charging case.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/airpodspro2/800/800",
        "public_id": "seed_airpodspro2"
      }
    ],
    "productPrice": 699,
    "category": "Headphones",
    "brand": "Apple"
  },
  {
    "productName": "Bose QuietComfort Ultra",
    "productDesc": "World-class noise cancellation, Immersive Audio spatial sound, plush comfort for all-day wear.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/boseqcultra/800/800",
        "public_id": "seed_boseqcultra"
      }
    ],
    "productPrice": 999,
    "category": "Headphones",
    "brand": "Bose"
  },
  {
    "productName": "JBL Tune 770NC",
    "productDesc": "Adaptive Noise Cancelling, 70-hour battery life, JBL Pure Bass sound, foldable lightweight design.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/jbltune770nc/800/800",
        "public_id": "seed_jbltune770nc"
      }
    ],
    "productPrice": 299,
    "category": "Headphones",
    "brand": "JBL"
  },
  {
    "productName": "Apple Watch Series 9",
    "productDesc": "Always-On Retina display, S9 SiP chip, Double Tap gesture, advanced health and fitness tracking.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/applewatchs9/800/800",
        "public_id": "seed_applewatchs9"
      }
    ],
    "productPrice": 999,
    "category": "Smartwatches",
    "brand": "Apple"
  },
  {
    "productName": "Samsung Galaxy Watch 6",
    "productDesc": "Sapphire crystal display, advanced sleep coaching, body composition analysis, rotating bezel.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/galaxywatch6/800/800",
        "public_id": "seed_galaxywatch6"
      }
    ],
    "productPrice": 799,
    "category": "Smartwatches",
    "brand": "Samsung"
  },
  {
    "productName": "Garmin Fenix 7",
    "productDesc": "Rugged multisport GPS watch, solar charging, built-in maps, up to 18 days battery life.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/garminfenix7/800/800",
        "public_id": "seed_garminfenix7"
      }
    ],
    "productPrice": 1299,
    "category": "Smartwatches",
    "brand": "Garmin"
  },
  {
    "productName": "Canon EOS R6 Mark II",
    "productDesc": "24.2MP full-frame sensor, 40fps continuous shooting, 4K60 video, in-body image stabilization.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/canoneosr6markii/800/800",
        "public_id": "seed_canoneosr6markii"
      }
    ],
    "productPrice": 4999,
    "category": "Cameras",
    "brand": "Canon"
  },
  {
    "productName": "Sony Alpha A7 IV",
    "productDesc": "33MP full-frame sensor, real-time Eye AF, 4K 60p video recording, 5-axis in-body stabilization.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/sonyalphaa7iv/800/800",
        "public_id": "seed_sonyalphaa7iv"
      }
    ],
    "productPrice": 4799,
    "category": "Cameras",
    "brand": "Sony"
  },
  {
    "productName": "GoPro HERO12 Black",
    "productDesc": "5.3K60 video, HyperSmooth 6.0 stabilization, waterproof to 10m, rugged action camera.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/goprohero12/800/800",
        "public_id": "seed_goprohero12"
      }
    ],
    "productPrice": 499,
    "category": "Cameras",
    "brand": "GoPro"
  },
  {
    "productName": "Apple iPad Pro 12.9-inch (M2)",
    "productDesc": "Liquid Retina XDR display, M2 chip, ProMotion technology, Apple Pencil hover support.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/ipadpro129/800/800",
        "public_id": "seed_ipadpro129"
      }
    ],
    "productPrice": 3499,
    "category": "Tablets",
    "brand": "Apple"
  },
  {
    "productName": "Samsung Galaxy Tab S9",
    "productDesc": "11-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 2, S Pen included, IP68 water resistance.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/galaxytabs9/800/800",
        "public_id": "seed_galaxytabs9"
      }
    ],
    "productPrice": 2799,
    "category": "Tablets",
    "brand": "Samsung"
  },
  {
    "productName": "Logitech MX Master 3S",
    "productDesc": "8K DPI tracking, quiet clicks, ultra-fast scrolling, ergonomic design, multi-device support.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/mxmaster3s/800/800",
        "public_id": "seed_mxmaster3s"
      }
    ],
    "productPrice": 349,
    "category": "Accessories",
    "brand": "Logitech"
  },
  {
    "productName": "Anker 737 Power Bank",
    "productDesc": "24,000mAh capacity, 140W max output, smart digital display, fast-charges laptops and phones alike.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/anker737/800/800",
        "public_id": "seed_anker737"
      }
    ],
    "productPrice": 399,
    "category": "Accessories",
    "brand": "Anker"
  },
  {
    "productName": "Samsung T7 Shield 1TB SSD",
    "productDesc": "Rugged portable SSD, IP65 water and dust resistance, up to 1050MB/s read speed, USB-C.",
    "productImg": [
      {
        "url": "https://picsum.photos/seed/samsungt7shield/800/800",
        "public_id": "seed_samsungt7shield"
      }
    ],
    "productPrice": 449,
    "category": "Accessories",
    "brand": "Samsung"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/Ekart`);
    console.log("MongoDB connected successfully");

    // Only removes products this script previously inserted (public_id starts with "seed_")
    // so it never touches real products you add later through the app.
    await Product.deleteMany({ "productImg.public_id": { $regex: "^seed_" } });

    const inserted = await Product.insertMany(products);
    console.log(`Inserted ${inserted.length} sample products successfully`);

    await mongoose.disconnect();
    console.log("MongoDB disconnected. Done.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
