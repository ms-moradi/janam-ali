
let massageCopy = document.querySelector('.massage-copy');
let textToCopy = document.querySelector('.text').innerHTML;


let shearOption = document.querySelector('.shear-options');

let contentClip = document.querySelector('.content-clip');
let newClip = document.createElement('div');

let btnUpload = document.querySelector('.btn-upload-clip');

let missionDetails = document.querySelector('.mission-details');
/////////

function CopyText(){

    const mainText = textToCopy.replace(/<br>|_/g,'');
    navigator.clipboard.writeText(mainText);
    massageCopy.style.display = 'flex';
    setTimeout(function(){
        massageCopy.style.display = 'none'
    },500)

}

/////////

function shearOptionFunc(){
    shearOption.style.display = 'flex';
}

function hiddenOptionFunc(){
    shearOption.style.display = 'none';
}

/////////

btnUpload.addEventListener('click', function(){
    console.log("ok")
    newClip.classList.add("clip")
    contentClip.append(newClip)
})

function missionDetailFunc(){

    
    missionDetails.style.display = 'flex';

}

function closeMissionDetailFunc(){
    missionDetails.style.display = 'none';
}