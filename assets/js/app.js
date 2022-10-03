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
    let currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
}, 100);
