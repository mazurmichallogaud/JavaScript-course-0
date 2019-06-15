

var myCar2 = {maxSpeed: 0, driver: "Net Ninja", drive: function (speed, time): {
    console.log(speed * time);
    );
    }
    test: function(){
        console.log(myCar2);
    },
    logDriver: function(){
        console.log("griver name is" + this.driver);
    }

/*
    var myCar3 = {maxSpeed: 0, driver: "Michal", drive: function (speed, time): {
        console.log(speed * time);
        );
        }
        test: function(){
            console.log(myCar3);
        }
*/

myCar2.logDriver();
myCar2.test();
//myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
