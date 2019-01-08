 var ticBox = document.querySelectorAll('.tic-box');
        var ticBoxArray = Array.prototype.slice.call(ticBox, 0);
        var h1ScoreX = document.getElementById('h11');
        var h1ScoreO = document.getElementById('h12');
        var winsX = 0;
        var winsO = 0;
        console.log(ticBoxArray);
        ticBox.forEach(function(tic){
           tic.addEventListener('click', circleOrIkes);
        });
        console.log(ticBox);
        var currentXoC = 0;
        //The game itself
        function circleOrIkes(){
             if(currentXoC == 0){
                this.innerHTML = 'x';
                currentXoC= 1;
                this.removeEventListener('click', circleOrIkes);
               ticBoxArray[this.dataset.num].innerHTML = 'x';
                console.log(this.dataset.num);
                checkForWin(ticBoxArray);
             }else{
                 this.innerHTML = "o";
                 currentXoC = 0;
                this.removeEventListener('click', circleOrIkes);
               ticBoxArray[this.dataset.num].innerHTML = 'o';
                 console.log(this.dataset.num);
                 checkForWin2(ticBoxArray);
             }
         
        }
        //Check if X win usign if else if and else
        function checkForWin(ticBoxArray){
            var draw = false;
            console.log(ticBoxArray);
            //When a win happens changing the DOM and removing all the click functions using forEach.
            if(ticBoxArray[0].innerHTML == 'x' && ticBoxArray[1].innerHTML == 'x' && ticBoxArray[2].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                     resetGame();
                        
            }else if(ticBoxArray[3].innerHTML == 'x' && ticBoxArray[4].innerHTML == 'x' && ticBoxArray[5].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                  h1ScoreX .innerHTML =  `X : ${winsX}`;
                resetGame();
            }else if(ticBoxArray[6].innerHTML == 'x' && ticBoxArray[7].innerHTML == 'x' && ticBoxArray[8].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                
                resetGame();
               
            }else if(ticBoxArray[0].innerHTML == 'x' && ticBoxArray[3].innerHTML == 'x' && ticBoxArray[6].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                resetGame();
            }else if(ticBoxArray[1].innerHTML == 'x' && ticBoxArray[4].innerHTML == 'x' && ticBoxArray[7].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                resetGame();
            }else if(ticBoxArray[2].innerHTML == 'x' && ticBoxArray[5].innerHTML == 'x' && ticBoxArray[8].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                resetGame();
            }else if(ticBoxArray[0].innerHTML == 'x' && ticBoxArray[4].innerHTML == 'x' && ticBoxArray[8].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                resetGame();
            }else if(ticBoxArray[2].innerHTML == 'x' && ticBoxArray[4].innerHTML == 'x' && ticBoxArray[6].innerHTML == 'x'){
                console.log('good job x is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX++;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                resetGame();
            }else {
                  //looping throw to bored to see if all the bored full and saying a draw if the bored full
                for(var i =0; i<ticBoxArray.length;i++){
               console.log(ticBoxArray[i].innerHTML);
               if(ticBoxArray[i].innerHTML == 'x' || ticBoxArray[i].innerHTML == 'o'){
                   draw = true;
                   console.log(draw)
               }else {
                   draw = false;
                   console.log(draw)
                   break;
               }
           }
            if(draw == true){
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                winsX = winsX;
                h1ScoreX .innerHTML =  `X : ${winsX}`;
                resetGame();
            }
        }       
    }
        function checkForWin2(ticBoxArray){
            var draw = false;
            console.log(ticBoxArray);
            if(ticBoxArray[0].innerHTML == 'o' && ticBoxArray[1].innerHTML == 'o' && ticBoxArray[2].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }else if(ticBoxArray[3].innerHTML == 'o' && ticBoxArray[4].innerHTML == 'o' && ticBoxArray[5].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }else if(ticBoxArray[6].innerHTML == 'o' && ticBoxArray[7].innerHTML == 'o' && ticBoxArray[8].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }else if(ticBoxArray[0].innerHTML == 'o' && ticBoxArray[3].innerHTML == 'o' && ticBoxArray[6].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }else if(ticBoxArray[1].innerHTML == 'o' && ticBoxArray[4].innerHTML == 'o' && ticBoxArray[7].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }else if(ticBoxArray[2].innerHTML == 'o' && ticBoxArray[5].innerHTML == 'o' && ticBoxArray[8].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }else if(ticBoxArray[0].innerHTML == 'o' && ticBoxArray[4].innerHTML == 'o' && ticBoxArray[8].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }else if(ticBoxArray[2].innerHTML == 'o' && ticBoxArray[4].innerHTML == 'o' && ticBoxArray[6].innerHTML == 'o'){
                console.log('good job o is the winner');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
               winsO++;
               h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
              
            }else {
                //looping throw to bored to see if all the bored full and saying a draw if the bored full
                for(var i =0; i<ticBoxArray.length;i++){
               console.log(ticBoxArray[i].innerHTML);
               if(ticBoxArray[i].innerHTML == 'x' || ticBoxArray[i].innerHTML == 'o'){
                   draw = true;
                   console.log(draw)
               }else {
                   draw = false;
                   console.log(draw)
                   break;
               }
           }
            if(draw == true){
                console.log('draw');
                ticBoxArray.forEach(function(tic){
                        tic.removeEventListener('click', circleOrIkes);
                });
                 winsO = winsO;
                 h1ScoreO.innerHTML = `O : ${winsO}`;
                resetGame();
            }
            }
         
        }
        function resetGame(){
         //After 1.5 seconds deleting user input and adding back the click function
         setTimeout(function(){
                ticBox.forEach(function(tic){ 
                   tic.addEventListener('click', circleOrIkes);
                   tic.innerHTML = '   ';
          });      
         },1500)
        }
      
      
