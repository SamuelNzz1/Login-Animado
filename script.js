var btnWindowsToLeft = document.querySelector('.btn-transition-windows-to-left');

var btnWindowsToRight = document.querySelector('.btn-transition-windows-to-right');

var divWelcome = document.querySelector('.welcome-back');
var divSignIn = document.querySelector('.sign-in');
var divCreateCount = document.querySelector('.create-a-count');
var divHelloFriend = document.querySelector('.hello-friend');

var itensRight = document.querySelector('.transition');
var itensLeft = document.querySelector('.transition2');

var label = document.querySelector(".label-inputs");

btnWindowsToRight.addEventListener('click', function(){
    divWelcome.classList.add('welcome-back-animation');
    

    divCreateCount.classList.add('create-a-count-move');

    divHelloFriend.classList.add('hello-friend-move');
    
    

    divSignIn.classList.add('sign-in-move');

    setTimeout(  function(){
        divSignIn.classList.remove('display-none');
        divHelloFriend.classList.remove('display-none');
        divWelcome.classList.add('display-none');
        divCreateCount.classList.add('display-none');   
    }
    ,450)
    setTimeout(  function(){
       
        divHelloFriend.classList.remove('hello-friend-move');
        divWelcome.classList.remove('welcome-back-animation');
       
        divCreateCount.classList.remove('create-a-count-move');
        divSignIn.classList.remove('sign-in-move');
        
    }
    ,1200)
    
    
});
btnWindowsToLeft.addEventListener('click', function(){
        divHelloFriend.classList.add('hello-friend-move2');
        divSignIn.classList.add('sign-in-move2');
        divWelcome.classList.add('welcome-back-animation2');
        divCreateCount.classList.add('create-a-count-move2');
        setTimeout(  function(){
            divSignIn.classList.add('display-none');
            divHelloFriend.classList.add('display-none');
            divWelcome.classList.remove('display-none');
            divCreateCount.classList.remove('display-none');   
        }
        ,450)
        setTimeout(  function(){
           
            divHelloFriend.classList.remove('hello-friend-move2');
            divSignIn.classList.remove('sign-in-move2');
            divWelcome.classList.remove('welcome-move2');
            divCreateCount.classList.remove('create-a-count-move2');
        }
        ,1200)



});
