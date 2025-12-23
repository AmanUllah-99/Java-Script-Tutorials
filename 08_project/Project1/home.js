
 const button = document.querySelectorAll('.btn');
 const body = document.querySelector('body');
console.log(button);

button.forEach(function (btn) {
    btn.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
        
        
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id;
        // }
         if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
         if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }

    

    })
      
    
});
switch (button) {
            case gray:
                body.style.backgroundColor = "gray";
                
                break;
        
            default:
                break;
        }
