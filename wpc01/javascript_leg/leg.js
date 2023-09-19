//parentes ses ved parantes
function ladida () {
console.log ('Hejsa')
return 'Tak for denne gang'
}

//modtager værdig
function receiver (value) {
    console.log('Tak for den nye værdig some var:'+value)
}

const ladidaValue = ladida();

console.log(ladidaValue);

receiver(ladidaValue);
receiver(ladida());
receiver({ age: 'ung'});