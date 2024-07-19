let fileS 
function myFunction(){
    let aux = fileS.length;
    document.getElementById("pueba").innerHTML = aux;
}

function checkButtonToTop(){
    if(window.scrollY > 0){
        document.getElementById('toTheTop').hidden = false;
    }else{
        document.getElementById('toTheTop').hidden = true;
    }
}

var el = document.getElementById('toTheTop');
el.addEventListener('scroll', function(event) {
    if (event.target.scrollTop === 0) {
        // Top of the page detected
        // You can perform your desired action here
    }
});