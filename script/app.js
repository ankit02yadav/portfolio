const observer = new IntersectionObserver((entr) =>{
    entr.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenelement = document.querySelectorAll(`.hidden`);
hiddenelement.forEach((element) => observer.observe(element));