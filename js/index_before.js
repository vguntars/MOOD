//
var headBackgrounds = [{
  image: "grafika/REDbg-01.png",
  toneRGB: "211, 53, 35"
}, {
  image: "grafika/GREENBg.png",
  toneRGB: "87, 170, 104"
}, {
  image: "grafika/BLUEbg.png",
  toneRGB: "46, 45, 107"
}];

const WORK_ITEMS_DEMO_COUNT = 8;
var workItems = [{
    catid: 2,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-02.png"
}, {
    catid: 3,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-03.png"
}, {
    catid: 4,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-04.png"
}, {
    catid: 5,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-05.png"
}, {
    catid: 6,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-06.png"
}, {
    catid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-01.png"
}, {
    catid: 7,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-07.png"
}, {
    catid: 8,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "foto/photo-08.png"
}
,{
    catid: 9,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/300/200"
}, {
    catid: 10,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/301/200"
}, {
    catid: 11,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/302/200"
}, {
    catid: 12,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/303/200"
}, {
    catid: 13,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/304/200"
}, {
    catid: 14,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/305/200"
}, {
    catid: 15,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/306/200"
}, {
    catid: 16,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/307/200"
}, {
    catid: 17,
    title: "Proin gravida nibh vel velit",
    slug: "fotogalerija",
    image: "http://placekitten.com/308/200"
}
]

const TEAM_ITEMS_DEMO_COUNT = 4;
var teamItems = [{
    catid: 1,
    name: "Jānis Pirmais",
    office: "Izpilddirektors",
    image: "foto/01.png"
}, {
  catid: 2,
  name: "Annija Otrā",
  office: "Grafiskā dizainere",
  image: "foto/02.png"
}, {
  catid: 3,
  name: "Kristaps Trešais",
  office: "Front-end izstrādātājs",
  image: "foto/03.png"
}, {
  catid: 4,
  name: "Ketija Ceturtā",
  office: "UI/UX dizainere",
  image: "foto/04.png"
}, {
  catid: 5,
  name: "Sveta Piektā",
  office: "Reklāmas aģente",
  image: "foto/bik-1.jpg"
}, {
  catid: 6,
  name: "Marina Sestā",
  office: "Reklāmas aģente",
  image: "foto/bik-2.jpg"
}, {
  catid: 7,
  name: "Irina Septītā",
  office: "Reklāmas aģente",
  image: "foto/bik-3.jpg"
}, {
  catid: 8,
  name: "Nataša Astotā",
  office: "Reklāmas aģente",
  image: "foto/bik-4.jpg"
}, {
  catid: 9,
  name: "Saša Grej",
  office: "XXX aktrise",
  image: "foto/xxx-1.jpg"
}]


function createBtnCategories() {
    var btnCategories = ["Identitāte", "Web dizains", "Aplikāciju dizains", "Fotogrāfija"];
    for (var i = 0; i < btnCategories.length; i++) {
        document.write('<div class="box-menu-horizontal">\
<button class="btn-menu-horizontal" type="button" data-catid="' + i + '">' + btnCategories[i] + '</button>\
</div>');
    }
}


function createBtnRing(btnCount) {
      for (var i = 1; i <= +btnCount; i++) {
        document.write('<button type="button" class="btn-ring' + (i == 1 ? ' btn-ring-active' : '') + '"></button>')
    }
}
