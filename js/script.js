
/*start animated jobs*/
const change = document.getElementById('job');

let txt = ()=>{
    setTimeout(function(){
        change.textContent = 'Developper';
    }, 0);
    setTimeout(function(){
        change.textContent = 'UI/UX designer';
    }, 4000);
    setTimeout(function(){
        change.textContent = 'Youtuber';
    }, 8000);
    setTimeout(function(){
        txt();
    }, 12000);
};
txt();
/*end animated jobs*/

/*================================
NavBar async By Lyes: 19/01/2026
=================================*/
document.addEventListener('DOMContentLoaded', () => {
    loadNavBar();
});

