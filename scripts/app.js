

const sounds = [
    './sounds/after.wav',
    './sounds/better.wav',
    './sounds/do_it.wav',
    './sounds/ever.wav',
    './sounds/faster.wav',
    './sounds/harder.wav',
    './sounds/hour.wav',
    './sounds/make_it.wav',
    './sounds/makes_us.wav',
    './sounds/more_than.wav',
    './sounds/never.wav',
    './sounds/our.wav',
    './sounds/over.wav',
    './sounds/stronger.wav',
    './sounds/work_is.wav',
    './sounds/work_it.wav'


];

const playSound = (soundPath) => {
    const audio = new Audio(soundPath);
    audio.volume = 0.3
    audio.play()
};




document.querySelectorAll('.sound-button').forEach((button, index) => {
    button.addEventListener('click', () => {
      playSound(sounds[index]);
    });
  });



//document.querySelectorAll('.sound-button').forEach((button, index) => {
   // button.addEventListener('click, () => {
       // playSound(sounds[index]);

//});























/*const audio = document.querySelector('audio')
const audio2 = document.querySelector('audio2')
//const buttons = document.querySelector('.buttons')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2');


const playAudio = (evt) =>{
    audio.src = './sounds/after.wav'
    audio2.src ='./sounds/better.wav'

    audio.play()
}

//const audio2 = new Audio('./sounds/better.wav')



button1.addEventListener('click', playAudio)
button2.addEventListener('click', () =>{
   audio2.play() 
});

*/











 

