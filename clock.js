function rotateClock() {
    
        let now=new Date();
        let hour= now.getHours() %12;
        let minute=now.getMinutes();
        let second=now.getSeconds();
    
    
        let hourHand=document.getElementById("hour");
        let minuteHand=document.getElementById("minute");
        let secondHand=document.getElementById("second");
    
    
        let hourRotates=(hour * 30) + (minute / 2);
        let minuteRotates=(minute * 6) + (second / 10);
        let secondRotates=(second * 6);
    
    {
        hourHand.style.transform="rotate("+hourRotates+"deg)";
        minuteHand.style.transform="rotate("+minuteRotates+"deg)";
        secondHand.style.transform="rotate("+secondRotates+"deg)";
    }

}
setInterval(rotateClock,1000);