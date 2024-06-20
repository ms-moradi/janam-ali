// #############################slider###################################

var currentImg = 0 ;
var imgsSlider = document.querySelectorAll('.slider img');
var interval = 2000;


var timer = setInterval(changeSlide, interval);

function changeSlide(n){
    for(var i=0 ; i < imgsSlider.length ; i++){
        imgsSlider[i].style.opacity = 0;
    }

    currentImg = (currentImg + 1) % imgsSlider.length;

    if(n != undefined) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }

    imgsSlider[currentImg].style.opacity = 1;
}

// ############################## function copy text #############################

let massageCopy = document.querySelector('.massage-copy');
let textToCopy = document.querySelector('.text').innerHTML;

function CopyText(){

    const mainText = textToCopy.replace(/<br>|_/g,'');
    navigator.clipboard.writeText(mainText);
    massageCopy.style.display = 'flex';
    setTimeout(function(){
        massageCopy.style.display = 'none'
    },500)

}

// ################################ shear in network functions ###############################

let shearOption = document.querySelector('.shear-options');
let contentClip = document.querySelector('.content-clip');

function shearOptionFunc(){
    shearOption.style.display = 'flex';
}

function hiddenOptionFunc(){
    shearOption.style.display = 'none';
}

// ################################## mission details function ##########################
let missionDetails = document.querySelector('.mission-details');
let elementSection = document.querySelector(".section-mission-text");
let elementP = document.createElement('p');

let contentText = [
    {
        id:1, 
        description:'در این ماموریت وظیفه بزرگی بر عهده شما گذاشته می‌شه و شما به عنوان مامور ویژه غدیر باید همه تلاشتون رو به کار بگیرید! باید با کاغذ رنگی و ریسه خونه‌تون رو خوشگل کنید و برای این عید بزرگ آماده بشید؛<br/> یادتون باشه برای استفاده از وسایلی مثل قیچی حتما از بزرگ‌ترها که نیروهای متخصص هستن کمک بگیرید...'
    },
    {
        id:2, 
        description:'در این ماموریت شما مامورهای کاربلد باید با کمک بزرگ‌ترها کیک و شیرینی یا هرچیز خوشمزه درست کنید : )<br/> یا حتی خوراکی‌هایی مثل شله‌ زرد و آش رشته؛ بعد اون‌ها رو بین دوستان و همسایه‌ها پخش کنین و در کنار هم خاطره خوب بسازید...'
    },
    {
        id:3, 
        description:'در این ماموریت ویژه و هیجان‌انگیز، شما باید به کسایی که دوستشون دارید هدیه بدید! مثل خواهر و برادر، بچه‌های فامیل، دوستاتون و...؛<br/> حتی می‌تونید به کمک مامان و بابا هدیه‌هایی تهیه کنید و به بچه‌های نیازمند بدید؛ بزرگ‌ترها خوب می‌دونن این کار چطور باید انجام بشه و در این بخش می‌تونن حسابی کمک‌تون کنن...'
    },
    {
        id:4, 
        description:'در این ماموریت وظیفه ی شما اینه که تلفن رو بردارید و به مامانجون و باباجون، عمه و عمو، دایی و خاله زنگ بزنید و عید رو تبریگ بگید، اونی برنده ست که زودتر زنگ بزنه!<br/>یک کار مهم دیگه هم مونده! اون هم تشکر از پدر و مادرمونه که محبت امیر المومنین (ع) رو نو دلامون گذاشتن، میدونین که بهترین راه تشکر هم، بوسیدن دست شونه، پس تا دیر نشده اقدام کنین...'

    },
    {
        id:5, 
        description:'مامور های پر انگیزه ی غدیر! تبریک می گیم که همه ماموریت ها رو به خوبی پشت سر گذاشتین، تواین ماموریت باید شعر و سرود بالا رو تمرین کنیدو با خوندنش شور و نشاط جشن بزرگ غدیر رو به خونه تون وارد کنید...'
    },
]

function missionDetailFunc(event){

    console.log(event.target.id)
    for (let i = 1 ; i < 6 ; i++){
        if(event.target.id == i){
            missionDetails.style.display = 'flex';
            elementP.innerHTML = contentText[i-1].description;
            elementSection.append(elementP);
        }
    }
}

function closeMissionDetailFunc(){
    missionDetails.style.display = 'none';
}


// ################################## upload Video ################################

let newClip = document.createElement('div');
let btnUpload = document.querySelector('.btn-upload-clip');

btnUpload.addEventListener('click', function(){
    console.log("ok")
    newClip.classList.add("clip")
    contentClip.append(newClip)
})

