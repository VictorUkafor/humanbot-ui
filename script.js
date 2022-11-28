const allDivBtns = document.querySelectorAll('.custom-box-div-button');


function switchbtn(e){

    allDivBtns.forEach(each => {
        each.style.backgroundColor = "#EDEDED";
        each.style.color = '#1c1c1c';    
    });

    e.style.backgroundColor = "#46CE6C";
    e.style.color = '#fff';
}


const allAns = document.querySelectorAll('.add-icon');

function openAns(e){

    const doc = document.getElementById('ans-text-'+e);
    
    if(doc.style.display == 'block'){
        doc.style.display = 'none';
    } else {
        doc.style.display = 'block';
    }

}


