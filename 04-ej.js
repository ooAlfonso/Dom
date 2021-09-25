const $btn = document.querySelector('#btn');

$btn.addEventListener('mouseover', () =>{

    console.log('me presionaste');
});

// const $inptext = document.querySelector('#text');
//     $inptext.addEventListener('keydown', () =>{
//     console.log('escribiste algo');
    
// });

const $inptext = document.querySelector('#texto');
$inptext.addEventListener('keydown', (e) =>{ 
    console.log(e.target.value);
    
});


