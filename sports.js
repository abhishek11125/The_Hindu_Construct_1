let sports=[
    {
        image:"https://www.thehindu.com/incoming/gqk1te/article65528123.ece/alternates/SQUARE_115/IMG_TH26CHOPRA_2_1_P69RO3AQ.jpg",
        head:"SPORT",
        news:"Neeraj betters National mark, takes silver"

    },
    {
        image:"https://www.thehindu.com/incoming/r67lov/article65529091.ece/alternates/SQUARE_115/Sri_Lanka_Australia_Cricket_12528.jpg-cf6d1.jpg",
        head:"CRICKET",
        news:"Maxwell leads Austraila to victory over Sri Lanka in 1st ODI"
    },
    {
        image:"https://www.thehindu.com/news/national/other-states/8vypgv/article65528294.ece/alternates/SQUARE_115/Costa%20Rica.jpg",
        head:"FOOTBALL",
        news:"Costa Rica book place at FIFA World Cup 2022 finals after playoff win"
    },
    {
        image:"https://www.thehindu.com/incoming/izyrg7/article65528013.ece/alternates/SQUARE_115/043.jpg",
        head:"CRICKET",
        news:"Ind vs SA, 3rd T20 | Clinical India Keeps series slive with 48-runs over south Africa"
    },
    {
        image:"https://www.thehindu.com/incoming/sywovw/article65528155.ece/alternates/SQUARE_115/England_Hungary_Nations_League_Soccer_23751.jpg-35ffc.jpg",
        head:"FOOTBALL",
        news:"UEFA Nations League | Ruthless Hungary hand dismal England a historic 4-0 home defeat"
    },
    {
        image:"https://www.thehindu.com/incoming/bs4uzq/article65527932.ece/alternates/SQUARE_115/2022-06-14T163301Z_812715375_UP1EI6E19YYYA_RTRMADP_3_CRICKET-TEST-ENG-NZL.JPG",
        head:"CRICKET",
        news:"NZ vs Eng second Test | Jonny Bairstow blasts England to victory over New Zealand"
    }
]



sports.forEach(function(elem) {
    let box=document.createElement("div")
    let pic = document.createElement("img")
    let box2=document.createElement("div")
    pic.setAttribute("src",elem.image);
    let heading = document.createElement("p")
    heading.innerText=elem.head;
    let news = document.createElement("p")
    news.innerText=elem.news;
    box2.append(heading,news)
    box.append(pic,box2);
    document.querySelector("#newstag").append(box);
    
});

let section_div=[
    {
        pic:"https://www.thehindu.com/incoming/x65kex/article65527950.ece/alternates/LANDSCAPE_215/PTI03_26_2022_000146A.jpg",
        heading:"COLUMNS",
        para:"Six billion reasons to belive that the future of cricket is already here",
        editor:"SURESH MENON",
        subpara:"The change is dramatic, disruptive and distinct, and likely to take game into its next phase faster that was imagined at one time"
    },
    {
        pic:"https://www.thehindu.com/sport/cricket/w3juwe/article34649907.ece/alternates/LANDSCAPE_215/Virat-Kohli-and-his-deputy-Rohit-Sharma",
        heading:"SPORTS",
        para:"The nightmare that was Indian fielding, and how Pataudi changed it",
        editor:"SURESH MENON",
        subpara:"Watching Ravindra Jadeja, Rohit Sharma, Ajinkya Rahane, Virat Kohli chase everything and catch everything today, it might be difficult to believe that"
    },
    {
        pic:"https://www.thehindu.com/incoming/kivpip/article65490545.ece/alternates/LANDSCAPE_215/BeFunky-collage.jpg",
        heading:"COMMENT",
        para:"The nightmare that was Indian fielding, and how Pataudi changed it",
        editor:"N. SUDARSHAN",
        subpara:"After the French Open, there are two more Grand Slams to go this year — and the debate rages. But will we ever know, even as the question allows us"
    }
    
]

section_div.forEach(function(elem){
    let cont = document.createElement("div");
    let photo = document.createElement("img");
    photo.setAttribute("src",elem.pic);
    let head = document.createElement("p");
    head.innerText=elem.heading;
    let p = document.createElement("p")
    p.innerText=elem.para
    let writer=document.createElement("p")
    writer.innerText=elem.editor;
    let subp = document.createElement("p")
    subp.innerText=elem.subpara;

    cont.append(photo,head,p,writer,subp);
    document.querySelector(".sectiondiv").append(cont);

    
});