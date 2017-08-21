function counting()
  {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth()+1;
     
     switch (month)
     {
     case 1: month = "January"
      break;
     case 2: month = "February"
      break;
     case 3: month = "March"
      break; 
     case 4: month = "April"
      break; 
     case 5: month = "May"
      break; 
     case 6: month = "June"
      break;
     case 7: month = "July"
      break;  
     case 8: month = "August"
      break;
     case 9: month = "September"
      break; 
     case 10: month = "October"
      break;
     case 11: month = "November"
      break;
     case 12: month = "December"
      break;   
     }
     
    var year = today.getFullYear();

    var hour = today.getHours();
    if(hour<10) hour = "0"+hour;
    
    var minute = today.getMinutes();
    if(minute<10) minute = "0"+minute;
    
    var seconds = today.getSeconds();
    if(seconds<10) seconds = "0"+seconds;
        
    document.getElementById("clock").innerHTML = 
     day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+seconds+":";
     
    setTimeout("counting()",1000);
  }  
