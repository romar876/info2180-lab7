window.load;
// alert info about country
$(document).ready(function(){
let lookUp = document.getElementById('lookup');

lookUp.addEventListener('click', function(){
  
        var checkbox = document.getElementById('check');
        var country = document.getElementById('country').value;
        if(checkbox.checked ==false){
              var request = new XMLHttpRequest();
            request.open('GET', `world.php?country=${country}`, true)
             request.send();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4){
            if (request.status === 200)
            {
                     
            var response = request.responseText;
        
            
            let result = document.getElementById('result');
            result.innerHTML = response;
            
            
            }else{
                alert('Request Error')
    
            
        }
        }
     }
            
        } else if(checkbox.checked == true){
   var request = new XMLHttpRequest();
    request.open('GET', `world.php?all=true`, true)
    request.send();
        }
    request.onreadystatechange = function()
    {
        if (request.readyState == 4){
            if (request.status === 200)
            {
                     
            var response = request.responseText;
        
            
            let result = document.getElementById('result');
            result.innerHTML = response;
            
            
            }else{
                alert('Request Error')
    
            
        }
        }
     }
})



})