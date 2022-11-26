const allDivBtns = document.querySelectorAll('.custom-box-div-button');


function switchbtn(e){

    allDivBtns.forEach(each => {
        each.style.backgroundColor = "#EDEDED";
        each.style.color = '#1c1c1c';    
    });

    e.style.backgroundColor = "#46CE6C";
    e.style.color = '#fff';
}

