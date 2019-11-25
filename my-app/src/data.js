class Year {
    constructor(year_date) {
        this.year_date = year_date;
        this.events = []
    }
    addEvent(event){
        this.events.push(event);
    }
}

class Event {
    constructor(name, start_date, end_date, photo_link, header_image) {
        this.name = name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.google_photo_link = photo_link;
        this.header_image = header_image;
    }
}

let year_2018 = new Year(2018);
year_2018.addEvent(new Event('Costa Rica',
    new Date('December 12, 2018'),
    new Date('December 29, 2018'),
    "https://photos.google.com/u/4/share/AF1QipOPKbjcYdNJG8a6mxiJ_MUdl3YntLqzmGy5KO7vw95essTrUcWZXwBARHuXJT79BA?key=NjZWZGQtckFMbDROZy1EMm13U1lYUlVZT2hGMndB",
    "CostaRica.jpg"
));
let year_2019 = new Year(2019);
year_2019.addEvent(new Event("Marina's Wedding",
    new Date('August 17, 2019'),
    new Date('August 18, 2019'),
    "https://photos.app.goo.gl/G845FRjJFW9xkRhGA",
    "MarinaWedding.jpeg"
));

const years = {2018: year_2018, 2019: year_2019};

module.exports = years;