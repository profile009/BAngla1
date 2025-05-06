// Data for different pages
const appData = {
    sworoborno: {
        title: "স্বরবর্ণ",
        items: [
            { letter: "অ", word: "অজগর", image: "images/ojogor1.webp" },
            { letter: "আ", word: "আম", image: "images/mango.webp" },
            { letter: "ই", word: "ইঁদুর", image: "images/idur.webp" },
            { letter: "ঈ", word: "ঈগল", image: "images/igol.webp" },
            { letter: "উ", word: "উট", image: "images/ut.webp" },
            { letter: "ঊ", word: "ঊষা", image: "images/usa.webp" },
            { letter: "ঋ", word: "ঋষি", image: "images/risi.webp" },
            { letter: "এ", word: "একতারা", image: "images/ektara.webp" },
            { letter: "ঐ", word: "ঐরাবত (হাতি)", image: "images/oita.webp" },
            { letter: "ও", word: "ওলকপি", image: "images/ol.webp" },
            { letter: "ঔ", word: "ঔষধ", image: "images/ousod.webp" }
            
            
        ]
    },
    benjonborno: {
        title: "ব্যঞ্জনবর্ণ",
        items: [
            { letter: "ক", word: "কলম", image: "images/pen1.webp" },
            { letter: "খ", word: "খাতা", image: "images/kata.webp" },
            { letter: "গ", word: "গাড়ি", image: "images/gari.webp" },
            { letter: "ঘ", word: "ঘোড়া", image: "images/gura.webp" },
            { letter: "ঙ", word: "ব্যাঙ", image: "images/bang.webp" },
            { letter: "চ", word: "চাঁদ", image: "images/cad.webp" },
            { letter: "ছ", word: "ছাতা", image: "images/cata.webp" },
            { letter: "জ", word: "জবা", image: "images/joba.webp" },
            { letter: "ঝ", word: "ঝর্না", image: "images/jorna.webp" },
            { letter: "ঞ", word: "বিড়াল", image: "images/miyaw.webp" },
            { letter: "ট", word: "টিয়া", image: "images/tiya.webp" },
            { letter: "ঠ", word: "ঠাকুর", image: "images/takur.webp" },
            { letter: "ড", word: "ডালিম", image: "images/dalim.webp" },
            { letter: "ঢ", word: "ঢাক", image: "images/dhak.webp" },
            { letter: "ণ", word: "হরিণ", image: "images/horin.webp" },
            { letter: "ত", word: "তরমুজ", image: "images/tormuj.webp" },
            { letter: "থ", word: "থালা", image: "images/thala.webp" },
            { letter: "দ", word: "দুধ", image: "images/dud.webp" },
            { letter: "ধ", word: "ধান", image: "images/dhan.webp" },
            { letter: "ন", word: "নৌকা", image: "images/nouka.webp" },
            { letter: "প", word: "পেঁপে", image: "images/pepe.webp" },
            { letter: "ফ", word: "ফুল", image: "images/gulap.webp" },
            { letter: "ব", word: "বই", image: "images/boi.webp" },
            { letter: "ভ", word: "ভালুক", image: "images/valuk.webp" },
            { letter: "ম", word: "ময়না", image: "images/moyna.webp" },
            { letter: "য", word: "যব", image: "images/zob.webp" },
            { letter: "র", word: "রাজা", image: "images/raja.webp" },
            { letter: "ল", word: "লিচু", image: "images/licu.webp" },
            { letter: "শ", word: "শাপলা", image: "images/sapla.webp" },
            { letter: "ষ", word: "ষাঁড়", image: "images/goru.webp" }, 
            { letter: "স", word: "সিংহ", image: "images/lion.webp" },
            { letter: "হ", word: "হাতি", image: "images/oita.webp" },
            { letter: "ড়", word: "ঘুড়ি", image: "images/guri.webp" },
            { letter: "ঢ়", word: "আষাঢ়", image: "images/asar.webp" },
            { letter: "য়", word: "আয়না", image: "images/ayna.webp" },
            { letter: "ৎ", word: "সৎ", image: "images/sot.webp" },
            { letter: "ং", word: "রংধনু", image: "images/rongdhonu.webp" },
            { letter: "ঃ", word: "দুঃখ্য", image: "images/dukko.webp"},
            { letter: "ঁ", word: "চাঁদ", image: "images/cad.webp"}
           
           
        ]
    },
    akar: {
        title: "আকার-ইকার",
        items: [
            { word: "আ-কার = আম", highlight: "া", image: "images/mango.webp" },
            { word: "ই-কার = ইলিশ", highlight: "ি", image: "images/ilis.webp" },
            { word: "ঈ-কার =সূর্যমুখী", highlight: "ী", image: "images/sunm.webp" },
            { word: "উ-কার = দুধ", highlight: "ু", image: "images/dud.webp" },
            { word: "ঊ-কার = সূর্য", highlight: "ূ", image: "images/sun.webp" },
            { word: "ঋ-কার = দৃঢ়", highlight: "ৃ", image: "images/sot.webp" },
            { word: "এ-কার = পেঁপে", highlight: "ে", image: "images/pepe.webp" },
            { word: "ঐ-কার = কৈ-মাছ", highlight: "ৈ", image: "images/mrigel.webp" },
            { word: "ও-কার = গোলাপ", highlight: "ো", image: "images/gulap.webp" },
            { word: "ঔ-কার = নৌকা", highlight: "ৌ", image: "images/nouka.webp" }
        ]
    }, 
    "bangla-number": {
        title: "বাংলা সংখ্যা",
        items: [
            { number: "১", word: "এক" },
            { number: "২", word: "দুই" },
            { number: "৩", word: "তিন" },
            { number: "৪", word: "চার" },
            { number: "৫", word: "পাঁচ" },
            { number: "৬", word: "ছয়" },
            { number: "৭", word: "সাত" },
            { number: "৮", word: "আট" },
            { number: "৯", word: "নয়" },
            { number: "১০", word: "দশ" },
            { number: "১১", word: "এক" },
            { number: "১২", word: "দুই" },
            { number: "১৩", word: "তিন" },
            { number: "১৪", word: "চার" },
            { number: "১৫", word: "পাঁচ" },
            { number: "১৬", word: "ছয়" },
            { number: "১৭", word: "সাত" },
            { number: "১৮", word: "আট" },
            { number: "১৯", word: "নয়" },
            { number: "২০", word: "দশ" },
            { number: "২১", word: "এক" },
            { number: "২২", word: "দুই" },
            { number: "২৩", word: "তিন" },
            { number: "২৪", word: "চার" },
            { number: "২৫", word: "পাঁচ" },
            { number: "২৬", word: "ছয়" },
            { number: "২৭", word: "সাত" },
            { number: "২৮", word: "আট" },
            { number: "২৯", word: "নয়" },
            { number: "৩০", word: "দশ" },
            { number: "৩১", word: "এক" },
            { number: "৩২", word: "দুই" },
            { number: "৩৩", word: "তিন" },
            { number: "৩৪", word: "চার" },
            { number: "৩৫", word: "পাঁচ" },
            { number: "৩৬", word: "ছয়" },
            { number: "৩৭", word: "সাত" },
            { number: "৩৮", word: "আট" },
            { number: "৩৯", word: "নয়" },
            { number: "৪০", word: "দশ" },
            { number: "৪১", word: "এক" },
            { number: "৪২", word: "দুই" },
            { number: "৪৩", word: "তিন" },
            { number: "৪৪", word: "চার" },
            { number: "৪৫", word: "পাঁচ" },
            { number: "৪৬", word: "ছয়" },
            { number: "৪৭", word: "সাত" },
            { number: "৪৮", word: "আট" },
            { number: "৪৯", word: "নয়" },
            { number: "৫০", word: "দশ" },
            { number: "৫১", word: "এক" },
            { number: "৫২", word: "দুই" },
            { number: "৫৩", word: "তিন" },
            { number: "৫৪", word: "চার" },
            { number: "৫৫", word: "পাঁচ" },
            { number: "৫৬", word: "ছয়" },
            { number: "৫৭", word: "সাত" },
            { number: "৫৮", word: "আট" },
            { number: "৫৯", word: "নয়" },
            { number: "৬০", word: "দশ" },
            { number: "৬১", word: "এক" },
            { number: "৬২", word: "দুই" },
            { number: "৬৩", word: "তিন" },
            { number: "৬৪", word: "চার" },
            { number: "৬৫", word: "পাঁচ" },
            { number: "৬৬", word: "ছয়" },
            { number: "৬৭", word: "সাত" },
            { number: "৬৮", word: "আট" },
            { number: "৬৯", word: "নয়" },
            { number: "৭০", word: "দশ" },
            { number: "৭১", word: "এক" },
            { number: "৭২", word: "দুই" },
            { number: "৭৩", word: "তিন" },
            { number: "৭৪", word: "চার" },
            { number: "৭৫", word: "পাঁচ" },
            { number: "৭৬", word: "ছয়" },
            { number: "৭৭", word: "সাত" },
            { number: "৭৮", word: "আট" },
            { number: "৭৯", word: "নয়" },
            { number: "৮০", word: "দশ" },
            { number: "৮১", word: "এক" },
            { number: "৮২", word: "দুই" },
            { number: "৮৩", word: "তিন" },
            { number: "৮৪", word: "চার" },
            { number: "৮৫", word: "পাঁচ" },
            { number: "৮৬", word: "ছয়" },
            { number: "৮৭", word: "সাত" },
            { number: "৮৮", word: "আট" },
            { number: "৮৯", word: "নয়" },
            { number: "৯০", word: "দশ" },
            { number: "৯১", word: "এক" },
            { number: "৯২", word: "দুই" },
            { number: "৯৩", word: "তিন" },
            { number: "৯৪", word: "চার" },
            { number: "৯৫", word: "পাঁচ" },
            { number: "৯৬", word: "ছয়" },
            { number: "৯৭", word: "সাত" },
            { number: "৯৮", word: "আট" },
            { number: "৯৯", word: "নয়" },
            { number: "১০০", word: "দশ" }
        ]
    },
    "english-number": {
        title: "ইংরেজি সংখ্যা",
        items: [
            { number: "1", word: "One" },
            { number: "2", word: "Two" },
            { number: "3", word: "Three" },
            { number: "4", word: "Four" },
            { number: "5", word: "Five" },
            { number: "6", word: "Six" },
            { number: "7", word: "Seven" },
            { number: "8", word: "Eight" },
            { number: "9", word: "Nine" },
            { number: "10", word: "Ten" },
            { number: "11", word: "One" },
            { number: "12", word: "Two" },
            { number: "13", word: "Three" },
            { number: "14", word: "Four" },
            { number: "15", word: "Five" },
            { number: "16", word: "Six" },
            { number: "17", word: "Seven" },
            { number: "18", word: "Eight" },
            { number: "19", word: "Nine" },
            { number: "20", word: "Ten" },
            { number: "21", word: "One" },
            { number: "22", word: "Two" },
            { number: "23", word: "Three" },
            { number: "24", word: "Four" },
            { number: "25", word: "Five" },
            { number: "26", word: "Six" },
            { number: "27", word: "Seven" },
            { number: "28", word: "Eight" },
            { number: "29", word: "Nine" },
            { number: "30", word: "Ten" },
            { number: "31", word: "One" },
            { number: "32", word: "Two" },
            { number: "33", word: "Three" },
            { number: "34", word: "Four" },
            { number: "35", word: "Five" },
            { number: "36", word: "Six" },
            { number: "37", word: "Seven" },
            { number: "38", word: "Eight" },
            { number: "39", word: "Nine" },
            { number: "40", word: "Ten" },
            { number: "41", word: "One" },
            { number: "42", word: "Two" },
            { number: "43", word: "Three" },
            { number: "44", word: "Four" },
            { number: "45", word: "Five" },
            { number: "46", word: "Six" },
            { number: "47", word: "Seven" },
            { number: "48", word: "Eight" },
            { number: "49", word: "Nine" },
            { number: "50", word: "Ten" },
            { number: "51", word: "One" },
            { number: "52", word: "Two" },
            { number: "53", word: "Three" },
            { number: "54", word: "Four" },
            { number: "55", word: "Five" },
            { number: "56", word: "Six" },
            { number: "57", word: "Seven" },
            { number: "58", word: "Eight" },
            { number: "59", word: "Nine" },
            { number: "60", word: "Ten" },
            { number: "61", word: "One" },
            { number: "62", word: "Two" },
            { number: "63", word: "Three" },
            { number: "64", word: "Four" },
            { number: "65", word: "Five" },
            { number: "66", word: "Six" },
            { number: "67", word: "Seven" },
            { number: "68", word: "Eight" },
            { number: "69", word: "Nine" },
            { number: "70", word: "Ten" },
            { number: "71", word: "One" },
            { number: "72", word: "Two" },
            { number: "73", word: "Three" },
            { number: "74", word: "Four" },
            { number: "75", word: "Five" },
            { number: "76", word: "Six" },
            { number: "77", word: "Seven" },
            { number: "78", word: "Eight" },
            { number: "79", word: "Nine" },
            { number: "80", word: "Ten" },
            { number: "81", word: "One" },
            { number: "82", word: "Two" },
            { number: "83", word: "Three" },
            { number: "84", word: "Four" },
            { number: "85", word: "Five" },
            { number: "86", word: "Six" },
            { number: "87", word: "Seven" },
            { number: "88", word: "Eight" },
            { number: "89", word: "Nine" },
            { number: "90", word: "Ten" },
            { number: "91", word: "One" },
            { number: "92", word: "Two" },
            { number: "93", word: "Three" },
            { number: "94", word: "Four" },
            { number: "95", word: "Five" },
            { number: "96", word: "Six" },
            { number: "97", word: "Seven" },
            { number: "98", word: "Eight" },
            { number: "99", word: "Nine" },
            { number: "100", word: "Ten" },

        ]
    },
    poem: {
        title: "কবিতা ও ছড়া",
        items: [
            { title: "আমাদের ছোট নদী", content: "আমাদের ছোট নদী চলে বাঁকে বাঁকে,\nবৈশাখ মাসে তার হাঁটুজল থাকে।\nপার হয়ে যায় গরু, পার হয় গাড়ি,\nদুই ধার উঁচু তার ঢালু তার পাড়ি।" },
            { title: "খাঁচার ভিতর অচিন পাখি", content: "খাঁচার ভিতর অচিন পাখি,\nকেমনে আসে যায়!\nধরতে পারলে মনো বাঁধি,\nপিঞ্জর দিতাম গায়।" },
            { title: "প্রথম শিক্ষা", content: "আদর করে মা আমায় দিলেন দোয়া,\nপড়লে বই হবে জ্ঞানী গুণী হওয়া।\nমিথ্যা কওনা, চুরি কওনা,\nলাজে রহিও সদা,\nমনে রেখো ভগবানের নাম,\nসত্য পথে চলা।" }
        ]
    },
    names: {
        title: "ফুল, ফল, পশু, পাখি ও মাছ",
        categories: [
            {
                name: "ফুল",
                items: [
                    { bangla: "শাপলা", english: "Water Lily", image: "images/sapla.webp" },
                    { bangla: "জবা", english: "Hibiscus", image: "images/joba.webp" },
                    { bangla: "বেলি", english: "Jasmine", image: "images/beli.webp" },
                    { bangla: "সূর্যমুখী", english: "Sunflower", image: "images/sunm.webp" },
                    { bangla: "গোলাপ", english: "Rose", image: "images/gulap.webp" }
                ]
            },
            {
                name: "ফল",
                items: [
                    { bangla: "কাঠাল", english: "Jackfruit", image: "images/katal.webp" },
                    { bangla: "কলা", english: "Banana", image: "images/kola.webp" },
                    { bangla: "পেঁপে", english: "Papaya", image: "images/pepe.webp" },
                    { bangla: "লিচু", english: "Litchi", image: "images/licu.webp" },
                    { bangla: "আম", english: "Mango", image: "images/mango.webp" }
                ]
            },
            {
                name: "পশু",
                items: [
                    { bangla: "বাঘ", english: "Tiger", image: "images/tiger.webp" },
                    { bangla: "হরিণ", english: "Deer", image: "images/horin.webp" },
                    { bangla: "হাতি", english: "Elephant", image: "images/oita.webp" },
                    { bangla: "সিংহ", english: "Lion", image: "images/lion.webp" },
                    { bangla: "জেব্রা", english: "Zebra", image: "images/zebra.webp" }
                ]
            },
            {
                name: "পাখি",
                items: [
                    { bangla: "দোয়েল", english: "Magpie", image: "images/doyel.webp" },
                    { bangla: "পায়রা", english: "Pigeon", image: "images/kobutor.webp" },
                    { bangla: "ময়না", english: "Myna", image: "images/moyna.webp" },
                    { bangla: "টিয়া", english: "Parrot", image: "images/tiya.webp" },
                    { bangla: "ঘুঘু", english: "Dove", image: "images/gugu.webp" }
                ]
            },
            {
                name: "মাছ",
                items: [
                    { bangla: "ইলিশ", english: "Hilsa", image: "images/ilis.webp" },
                    { bangla: "রুই", english: "Rohu", image: "images/rui.webp" },
                    { bangla: "কাতলা", english: "Catla", image: "images/katla.webp" },
                    { bangla: "চিংড়ি", english: "Shrimp", image: "images/cinri.webp" },
                    { bangla: "মৃগেল", english: "Mrigel", image: "images/mrigel.webp" }
                ]
            }
        ]
    },
    "national-symbols": {
        title: "জাতীয় পশু-পাখি",
        items: [
            { 
                name: "জাতীয় পশু", 
                bangla: "রয়েল বেঙ্গল টাইগার", 
                english: "Royal Bengal Tiger",
                image: "images/tiger.webp",
                description: "বাংলাদেশের জাতীয় পশু রয়েল বেঙ্গল টাইগার। সুন্দরবনে এদের প্রধান বসতি।"
            },
            { 
                name: "জাতীয় পাখি", 
                bangla: "দোয়েল", 
                english: "Oriental Magpie Robin",
                image: "images/doyel.webp",
                description: "বাংলাদেশের জাতীয় পাখি দোয়েল। ছোট আকৃতির এই পাখি শহর-গ্রামে সর্বত্র দেখা যায়।"
            },
            { 
                name: "জাতীয় মাছ", 
                bangla: "ইলিশ", 
                english: "Hilsa",
                image: "images/ilis.webp",
                description: "বাংলাদেশের জাতীয় মাছ ইলিশ। পদ্মা-মেঘনা নদীর ইলিশ বিশ্ববিখ্যাত।"
            },
            { 
                name: "জাতীয় ফুল", 
                bangla: "শাপলা", 
                english: "Water Lily",
                image: "images/sapla.webp",
                description: "বাংলাদেশের জাতীয় ফুল শাপলা। জলজ এই ফুল বাংলাদেশের প্রায় সব জলাশয়ে জন্মে।"
            },
            { 
                name: "জাতীয় ফল", 
                bangla: "কাঠাল", 
                english: "Jackfruit",
                image: "images/katal.webp",
                description: "বাংলাদেশের জাতীয় ফল কাঠাল। এটি পৃথিবীর সবচেয়ে বড় আকৃতির ফল।"
            }
        ]
    },
    namta: {
        title: "নামতা",
        items: [
            { table: "১ এর নামতা", content: "১ × ১ = ১\n১ × ২ = ২\n১ × ৩ = ৩\n১ × ৪ = ৪\n১ × ৫ = ৫\n১ × ৬ = ৬\n১ × ৭ = ৭\n১ × ৮ = ৮\n১ × ৯ = ৯\n১ × ১০ = ১০" },
            { table: "২ এর নামতা", content: "২ × ১ = ২\n২ × ২ = ৪\n২ × ৩ = ৬\n২ × ৪ = ৮\n২ × ৫ = ১০\n২ × ৬ = ১২\n২ × ৭ = ১৪\n২ × ৮ = ১৬\n২ × ৯ = ১৮\n২ × ১০ = ২০" }
        ]
    },
    math: {
        title: "সহজ অংক",
        items: [
            { problem: "২ + ৩ = ?", solution: "৫" },
            { problem: "৫ - ২ = ?", solution: "৩" },
            { problem: "৪ × ৩ = ?", solution: "১২" },
            { problem: "১০ ÷ ২ = ?", solution: "৫" },
            { problem: "৭ + ৮ = ?", solution: "১৫" },
            { problem: "১২ - ৫ = ?", solution: "৭" },
            { problem: "৬ × ৪ = ?", solution: "২৪" },
            { problem: "২০ ÷ ৫ = ?", solution: "৪" }
        ]
    },
    abcd: {
        title: "এবিসিডি",
        items: [
            { letter: "A", word: "Apple (আপেল) ", image: "images/apel.webp" },
            { letter: "B", word: "Book (বই) ", image: "images/boi.webp" },
            { letter: "C", word: "Cat (বিড়াল) ", image: "images/miyaw.webp" },
            { letter: "D", word: "Doll (পুতুল) ", image: "images/putul.webp" },
            { letter: "E", word: "Elephant (হাতি)", image: "images/dim.webp" },
            { letter: "F", word: "Fish (মাছ)", image: "images/ilis.webp" },
            { letter: "G", word: "Goat (ছাগল)", image: "images/cagol.webp" },
            { letter: "H", word: "Hen (মুরগি)", image: "images/murgi.webp" },
            { letter: "I", word: "Ink (কালি) ", image: "images/kali.webp" },
            { letter: "J", word: "Jug (জগ)", image: "images/jog.webp" },
            { letter: "K", word: "Kite (ঘুড়ি)", image: "images/guri.webp" },
            { letter: "L", word: "Lichi (লিচু)", image: "images/licu.webp" },
            { letter: "M", word: "Mango (আম)", image: "images/mango.webp" },
            { letter: "N", word: "Nurse (সেবিকা)", image: "images/sebika.webp" },
            { letter: "O", word: "Ox (ষাড়)", image: "images/goru.webp" },
            { letter: "P", word: "Pen (কলম)", image: "images/pen1.webp" },
            { letter: "Q", word: "Question (প্রশ্ন)", image: "images/prosno.webp" },
            { letter: "R", word: "Rose (গোলাপ)", image: "images/gulap.webp" },
            { letter: "S", word: "Sun (সূর্য)", image: "images/sunm.webp" },
            { letter: "T", word: "Train (রেলগাড়ি)", image: "images/rel.webp" },
            { letter: "U", word: "Umbrella (ছাতা)", image: "images/cata.webp" },
            { letter: "V", word: "Vegetable (সবজি)", image: "images/sobji.webp" },
            { letter: "W", word: "Water (পানি)", image: "images/jol.webp" },
            { letter: "X", word: "Ox (ষাড়)", image: "images/goru.webp" },
            { letter: "Y", word: "Year (বছর)", image: "images/bocor.webp" },
            { letter: "Z", word: "Zebra (জেব্রা)", image: "images/zebra.webp" }

        ]
    },
    days: {
        title: "সপ্তাহের দিন",
        items: [
            { bangla: "রবিবার", english: "Sunday" },
            { bangla: "সোমবার", english: "Monday" },
            { bangla: "মঙ্গলবার", english: "Tuesday" },
            { bangla: "বুধবার", english: "Wednesday" },
            { bangla: "বৃহস্পতিবার", english: "Thursday" },
            { bangla: "শুক্রবার", english: "Friday" },
            { bangla: "শনিবার", english: "Saturday" }
        ]
    },
    months: {
        title: "বারো মাস",
        items: [
            { bangla: "বৈশাখ", english: "Boishakh (April-May)" },
            { bangla: "জ্যৈষ্ঠ", english: "Joishtho (May-June)" },
            { bangla: "আষাঢ়", english: "Asharh (June-July)" },
            { bangla: "শ্রাবণ", english: "Srabon (July-August)" },
            { bangla: "ভাদ্র", english: "Bhadro (August-September)" },
            { bangla: "আশ্বিন", english: "Ashwin (September-October)" },
            { bangla: "কার্তিক", english: "Kartik (October-November)" },
            { bangla: "অগ্রহায়ণ", english: "Ogrohayon (November-December)" },
            { bangla: "পৌষ", english: "Poush (December-January)" },
            { bangla: "মাঘ", english: "Magh (January-February)" },
            { bangla: "ফাল্গুন", english: "Falgun (February-March)" },
            { bangla: "চৈত্র", english: "Choitro (March-April)" }
        ]
    }
};

// Function to open a page
function openPage(pageId) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    const pageData = appData[pageId];
    
    // Create page header with back button
    const pageHeader = document.createElement('div');
    pageHeader.className = 'page-header';
    pageHeader.innerHTML = `
        <h2>${pageData.title}</h2>
        <button class="back-btn" onclick="goBack()">← Back</button>
    `;
    container.appendChild(pageHeader);
    
    // Create content grid
    const contentGrid = document.createElement('div');
    contentGrid.className = 'content-grid';
    
    // Special handling for names page
    if (pageId === 'names') {
        pageData.categories.forEach(category => {
            const categoryHeader = document.createElement('h3');
            categoryHeader.textContent = category.name;
            categoryHeader.style.gridColumn = '1 / -1';
            categoryHeader.style.marginTop = '20px';
            contentGrid.appendChild(categoryHeader);
            
            category.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.bangla}">
                    <div>${item.bangla}</div>
                    <div>${item.english}</div>
                `;
                contentGrid.appendChild(card);
            });
        });
    } 
    // Special handling for national symbols page
    else if (pageId === 'national-symbols') {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.gridColumn = 'span 2';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <img src="${item.image}" alt="${item.bangla}" style="height: 150px; object-fit: cover;">
                <div><strong>বাংলা:</strong> ${item.bangla}</div>
                <div><strong>English:</strong> ${item.english}</div>
                <p>${item.description}</p>
            `;
            contentGrid.appendChild(card);
        });
    }
    // Special handling for poem page
    else if (pageId === 'poem') {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card poem-card';
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content.replace(/\n/g, '<br>')}</p>
            `;
            contentGrid.appendChild(card);
        });
    }
    // Special handling for namta page
    else if (pageId === 'namta') {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.table}</h3>
                <p>${item.content.replace(/\n/g, '<br>')}</p>
            `;
            contentGrid.appendChild(card);
        });
    }
    // Special handling for math page
    else if (pageId === 'math') {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="math-problem">${item.problem}</div>
                <div class="math-solution">${item.solution}</div>
            `;
            contentGrid.appendChild(card);
        });
    }
    // Special handling for days page
    else if (pageId === 'days') {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div>${item.bangla}</div>
                <div>${item.english}</div>
            `;
            contentGrid.appendChild(card);
        });
    }
    // Special handling for months page
    else if (pageId === 'months') {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div>${item.bangla}</div>
                <div>${item.english}</div>
            `;
            contentGrid.appendChild(card);
        });
    }
    // Special handling for number pages (without images)
    else if (pageId === 'bangla-number' || pageId === 'english-number') {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 10px;">${item.number}</div>
                <div>${item.word}</div>
            `;
            contentGrid.appendChild(card);
        });
    }
    // Default handling for other pages
    else {
        pageData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            
            if (pageId === 'akar') {
                // Highlight specific characters for akar page
                const wordParts = item.word.split(item.highlight);
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.word}">
                    <div>
                        ${wordParts[0]}<span class="highlight">${item.highlight}</span>${wordParts[1]}
                    </div>
                `;
            } else if (item.image) {
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.letter || item.number || item.word}">
                    <div>${item.letter || item.number || ''}</div>
                    <div>${item.word || ''}</div>
                `;
            } else {
                card.innerHTML = `
                    <div>${item.bangla}</div>
                    <div>${item.english}</div>
                `;
            }
            
            contentGrid.appendChild(card);
        });
    }
    
    container.appendChild(contentGrid);
}

// Function to go back to home page
function goBack() {
    location.reload();
}