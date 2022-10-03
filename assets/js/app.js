function getDateTime() {
    const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = monthName[now.getMonth()+1]; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    var dateTime = day+' '+month+' '+year+' '+hour+':'+minute;   
    return dateTime;
}
setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
}, 100);

// $("#new-meeting").click(() => {
//      var code = makeid(10);
//      window.location.href = `/${code}`;

// })

$("#join-meeting").click(() => {
     var code = $("#meeting-code").val();
     if (code) {
          window.location.href = `/${code}`;
     }else{
          alert('Please enter meeting code')
     }
})

function makeid(length) {
     var result           = '';
     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     var charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
}

