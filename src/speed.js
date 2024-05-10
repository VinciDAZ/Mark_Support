function speedy (time, increment) {
    
    var min = 4.5;  //min speed of run
    var max = 7;    //max speed of run
    
    var speedOverTime = [4.5]; //a list

    var minutes = speedOverTime.length; //number of items in array
    
    while (minutes <= time) {           //when the list increases the minutes increase and will stop once its = to time
        while(minutes % increment !== 0) {      //when the modular of minutes by increments dont = 0 add min in list if not the add max
            
            speedOverTime.push(min);
        }
        speedOverTime.push(max);

    }
    console.log(speedOverTime);
}

speedy (60, 5);