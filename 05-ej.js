const $body = document.querySelector('body');
const $selectocolor = document.querySelector('#colors');

$selectocolor.addEventListener('change,', (e) =>{
    if (e. target.value === 'red'){
        $body.classname = '';
    }
}); 