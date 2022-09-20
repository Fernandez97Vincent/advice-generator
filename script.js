const advice = document.getElementById('advice-id');
const random = document.getElementById('randomize');
const adviceNumber = document.getElementById('advice-number');

// fist make button click populate the advice id
function buttonClick() {
    // make sure button works
    console.log('clicked');
    fetch('https://api.adviceslip.com/advice')
        .then (response => response.json())
        .then (jsonData => {
            console.log(jsonData);
            adviceNumber.innerHTML = 'A D V I C E #' + jsonData['slip']['id'];
            advice.innerHTML = '"' + jsonData['slip']['advice'] + '"';
        });

}

random.addEventListener('click', buttonClick);