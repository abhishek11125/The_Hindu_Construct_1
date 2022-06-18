//  #container con7 & con8 addEventListener(1,2)
document.querySelector("#con7>div").addEventListener("click",remove_ad1)
function remove_ad1(){
    document.querySelector("#con7").innerHTML=""
}

document.querySelector("#con8>div").addEventListener("click",remove_ad2)
function remove_ad2(){
    document.querySelector("#con8").innerHTML=""
}


//    Box-2
document.querySelector("#b21").addEventListener("click",b21)
function b21(){
    window.location.href="https://www.youtube.com/watch?v=GoHoqCplo2Q"
}

document.querySelector("#b22").addEventListener("click",b22)
function b22(){
    window.location.href="https://www.youtube.com/watch?v=-_UFIGDS2n0"
}

document.querySelector("#b23").addEventListener("click",b23)
function b23(){
    window.location.href="https://www.youtube.com/watch?v=yeCY4VSfHa4"
}

document.querySelector("#b24").addEventListener("click",b24)
function b24(){
    window.location.href="https://www.youtube.com/watch?v=ZaqZ_xK-UgU"
}

// Horizonral Add 1

document.querySelector("#ad3>div").addEventListener("click",remove_ad3)
function remove_ad3(){
    document.querySelector("#ad3").innerHTML=""
}


//    Box-4   (National & International)  Ad-4

document.querySelector("#box43>div").addEventListener("click",remove_ad4)
function remove_ad4(){
    document.querySelector("#box43").innerHTML=""
}


//        Sliding Part

let arr=[{url:"https://www.thehindu.com/incoming/pzjvi/article65338242.ece/alternates/LANDSCAPE_320/WikiLeaks_32414.jpg-063d2.jpg",
para:"U.K. goverment approves extradition of Julian Assange to U.S, Wikileaks says he will appeal"},
{url:"https://www.thehindu.com/incoming/4eeus1/article65512036.ece/alternates/LANDSCAPE_100/AFP_32C78Q2.jpg",
para:"U.S says it 'condemns remarks on prophet made by BJP officials'"},
{url:"https://www.thehindu.com/incoming/mob4i/article65532467.ece/alternates/LANDSCAPE_100/APTOPIX_Ukraine_Russia_War_99649.jpg-935c4.jpg",
para:"Ukraine crisis: Leaders of France, Germany and Italy head for Kyivas U.S. pledges more military aid"},
{url:"https://www.thehindu.com/incoming/xtue23/article65536509.ece/alternates/LANDSCAPE_320/2022-06-17T045048Z_1364658127_RC2FTU9ITNH0_RTRMADP_3_TRADE-WTO.JPG",
para:"Intellectual property rights waiver falls short of expectation at WTO meeting"},
{url:"https://www.thehindu.com/news/national/hgxi0q/article65536488.ece/alternates/LANDSCAPE_100/IMG_TH16_KRA_SHEKAWAT_2_1_6K864S6N.jpg",
para:"BJP appoints 14-member panel to oversee Presidential polls, 'guide' MPs on voting"},
{url:"https://www.thehindu.com/incoming/x38emt/article65529950.ece/alternates/LANDSCAPE_100/PTI06_15_2022_000163A.jpg",
para:" Presidential polls | People may ask how Opposition will give capable PM if it can't field strong candidate ..."},
]

    //   Moving - 1

let image=document.querySelector("#moving>img");
let content=document.querySelector("#moving>p");
let button=document.querySelectorAll("#moving>button");

button[0].addEventListener("click",display_left)
let num=0;

function display_left(){
    if(num==0){
        num=arr.length-1;
    }
    else{
        num--;
    }
    image.src=arr[num].url;
    content.innerText=arr[num].para;
}

button[1].addEventListener("click",function(){
    if(num==arr.length-1){
        num=0;
    }
    else{
        num++;
    }
    image.src=arr[num].url;
    content.innerText=arr[num].para;
});

    //   Moving - 2

let image2=document.querySelector("#moving2>img");
let content2=document.querySelector("#moving2>p");
let button2=document.querySelectorAll("#moving2>button");

button2[0].addEventListener("click",display_left2)
let num2=arr.length-1;

function display_left2(){
    if(num2==0){
        num2=arr.length-1;
    }
    else{
        num2--;
    }
    image2.src=arr[num2].url;
    content2.innerText=arr[num2].para;
}

button2[1].addEventListener("click",function(){
    if(num2==arr.length-1){
        num2=0;
    }
    else{
        num2++;
    }
    image2.src=arr[num2].url;
    content2.innerText=arr[num2].para;
});