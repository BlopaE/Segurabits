(function(){
    const sliders = [...document.querySelectorAll('.partners__body')];
    const buttonNext=document.querySelector('#next');
    const buttonBefore=document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentPartner = document.querySelector('.partners__body--show').dataset.id;
        value = Number(currentPartner);
        value+=add;

        sliders[Number(currentPartner)-1].classList.remove('partners__body--show');
        if (value === sliders.length+1 || value === 0){
            value = value === 0? sliders.length : 1;
        }

        sliders[value-1].classList.add('partners__body--show');

       
    }

})();