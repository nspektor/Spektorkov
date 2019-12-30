class Year {
    constructor(year_date, random_photos_link,random_header_image) {
        this.year_date = year_date;
        this.random_photos_link = random_photos_link;
        this.random_header_image = random_header_image;
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

let year_2018 = new Year(2018, "https://photos.google.com/share/AF1QipNtJmQGz-Twncj0ts8IHC8BqBi3e0Rzen379vQw9ZTUxImZupi6fae8-YOfR6c-KA?key=NUtac2JiYVM1LTE3RXYyOVlKVG52UVROS2pJOVVn", "Random2018.jpg");
year_2018.addEvent(new Event('Greece',
    new Date('June 23, 2018'),
    new Date('July 6, 2018'),
    "https://photos.google.com/share/AF1QipMrNoLzkNm5SvxZTtK-NPYdEHpcT79R5m96WsKP6H6UaJN4mhNF2cdxhf6wGbzznA/photo/AF1QipOhl2xsL2aUEq3bN8rdJj8xx9cK_uk9vzSOIpYG?key=dXVvOGl1WXBudUV0RUV3WDdnU0tyaTVPMEV3RXNR",
    "Greece2018.jpg"
));
year_2018.addEvent(new Event('Two Birthdays & an Anniversary',
    new Date('August 17, 2018'),
    new Date('August 18, 2018'),
    "https://photos.google.com/share/AF1QipNL6Hwnyw8TNWfb-zi4NdmcRyKXTAHg8oezPzyhYaOuQJpuYc2etqaotZ-8vWbkrQ?key=b1V3VHJlTGJuZFdNRlA1ejlZRHc5Rl9LLVY0NGRB",
    "TwoBirthdaysAndAnniversary2018.jpg"
));
year_2018.addEvent(new Event('Costa Rica',
    new Date('December 12, 2018'),
    new Date('December 29, 2018'),
    "https://photos.google.com/u/4/share/AF1QipOPKbjcYdNJG8a6mxiJ_MUdl3YntLqzmGy5KO7vw95essTrUcWZXwBARHuXJT79BA?key=NjZWZGQtckFMbDROZy1EMm13U1lYUlVZT2hGMndB",
    "CostaRica2018.jpg"
));
year_2018.addEvent(new Event('New Years',
    new Date('December 31, 2018'),
    new Date('January 1, 2019'),
    "https://photos.google.com/share/AF1QipNXGTezg2oznoiLvjlAcXJqqn3EuJOZwZK6xQqR2FXjrwcbi1anotqLJL-DAOiklw?key=SzdFVE9TQmZtdXI1SENfNnU3ck1xTGkxYktFb3V3",
    "NewYears2018-2019.jpg"
));


let year_2019 = new Year(2019, "https://photos.google.com/share/AF1QipMxJO6KWs_Pld478D4vgoDJEm9hH09r6ELv1jjrKwC78tPiH5D008GqXZJqyVZh1A?key=bm90bHZaSm5YUC04dm1LTWQ4ZHJoY1pXU0NSbWRB", "Random2019.jpg");
year_2019.addEvent(new Event("Marina's Wedding",
    new Date('August 17, 2019'),
    new Date('August 18, 2019'),
    "https://photos.app.goo.gl/G845FRjJFW9xkRhGA",
    "MarinaWedding2019.jpg"
));
year_2019.addEvent(new Event("Scandinavia",
    new Date('August 18, 2019'),
    new Date('August 31, 2019'),
    "https://photos.google.com/share/AF1QipPZnDJdHSXSZdCrWBlOZ1Rw2QNamyoBHrDXtR2OfNvN1hZikYB8RkxDoMS_pVQiuA?key=Xy1IYnAxQWFEaFRaOTRRSEVKRzlWVGU1WVNMclNR",
    "Scandinavia2019.jpg"
));
year_2019.addEvent(new Event("Sam's 16th Birthday",
    new Date('October 5, 2019'),
    new Date('October 12, 2019'),
    "https://photos.google.com/share/AF1QipMfW99fNiHpUlFwb3GOv1VIdilzF5oOMSLJETBTyzQQ2Ppn36ZytZhK1wBID8TV3A?key=N0ZJWVlCSzZtVk53dnpkWVNydmdDRFcxSFZDbmtB",
    "Sam16Birthday2019.jpg"
));
year_2019.addEvent(new Event("Halloween",
    new Date('October 31, 2019'),
    new Date('October 31, 2019'),
    "https://photos.google.com/share/AF1QipMRultt1sebwZvcD1DjWOdG_ZZ6GWVRYALkce8agkYvIfs1DiIiauRcGzQ2hvMgAg?key=dkNyUC02TjlWUHFTTTE0NHBmR055RndVVUxEWTln",
    "Halloween2019.jpg"
));
year_2019.addEvent(new Event("Nellie's 21st Birthday",
    new Date('November 27, 2019'),
    new Date('November 27, 2019'),
    "https://photos.google.com/share/AF1QipMviUyp5JKnAWpq-s_nD-OHQ-8jseYkHOInyCfe4mj1s-kbUFjEGdqKmv1-1lYYwg?key=azJ5QWNkQ0h4QjJ6Q1BiaEdYcnZoU3ZJU3VwN0N3",
    "Nellie21Birthday2019.jpg"
));



let years = [];
years[0]= year_2019;
years[1] = year_2018;

module.exports = years;