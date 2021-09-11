let form = document.querySelector('.user-form');
let final = document.querySelector('.final')
form.addEventListener('submit', function(event){
    event.preventDefault();
    let listening = document.querySelector('.listening').value;
    let reading = document.querySelector('.reading').value;
    let writing = document.querySelector('.writing').value;
    let speaking = document.querySelector('.speaking').value;
    let total = (parseFloat(listening) + parseFloat(reading) + parseFloat(writing) + parseFloat(speaking));
    console.log(total);
    let overall = (Math.round(total/2))/2;
    final.textContent = overall;

})