let form = document.querySelector('.user-form');
let final = document.querySelector('.final');
let warnText = document.querySelector('.form-text');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let listening = document.querySelector('.listening').value;
    let reading = document.querySelector('.reading').value;
    let writing = document.querySelector('.writing').value;
    let speaking = document.querySelector('.speaking').value;
    let total = (parseFloat(listening) + parseFloat(reading) + parseFloat(writing) + parseFloat(speaking));
    console.log(total);
    let overall = (Math.round(total/2))/2;

    if(listening <=9 && reading <= 9 && writing <= 9 && speaking <=9){
        if(listening >=0 && reading >= 0 && writing >= 0 && speaking >=0){
            final.textContent = overall; 
        }
        else{
            warnText.textContent = 'IELTS scores are between 0 and 9 ';
        } 
    }
    else{
      
       warnText.textContent = 'IELTS scores are between 0 and 9 ';
        
    }
   

})