console.log("Welcome to Spotify");
//initial variable
let songIndex=0;
let audioElement=new Audio('song/song1.mp3');
let masterPlay=document.getElementById('masterPlay')
let masterSongName=document.getElementById('masterSongName')
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName:"Dil Pardeshi ho gaya",filePath:"song/song1.mp3",coverPath:"Banner/img1.jpeg"},
    {songName:"Nazm_Nazm",filePath:"song/song2.mp3" ,coverPath:"Banner/img2.jpeg"},
    {songName:"Aisa deewana hua hai ye dil",filePath:"song/song3.mp3" ,coverPath:"Banner/img3.jpeg"},
    {songName:"Humsafar",filePath:"song/song4.mp3" ,coverPath:"Banner/img4.jpeg"},
    {songName:"Hulara",filePath:"song/song5.mp3" ,coverPath:"Banner/img5.jpeg"},
    {songName:"Arabic_Kuthu",filePath:"song/song6.mp3" ,coverPath:"Banner/img6.jpeg"},
    {songName:"Lehanga",filePath:"song/song7.mp3" ,coverPath:"Banner/img7.jpeg"},
    {songName:"Kesariya",filePath:"song/song8.mp3" ,coverPath:"Banner/img8.jpeg"},
    {songName:"Chori_Chori_Dil_Tera_Churayenge",filePath:"song/song9.mp3" ,coverPath:"Banner/img9.jpeg"},
    {songName:"Kehndi_Hundi_Si",filePath:"song/song10.mp3" ,coverPath:"Banner/img10.jpeg"},
]
songItems.forEach((element ,i)=> {
    //console.log(element ,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
})
//handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[songIndex].songName
        audioElement.src=`song/song${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`song/song${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`song/song${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})