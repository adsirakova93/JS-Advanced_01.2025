    function checkSpeed(speed, area) {
        const speedLimits = {
            motorway: 130,
            interstate: 90,
            city: 50,
            residential: 20
        };
    
        let speedLimit = speedLimits[area];
    
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            let difference = speed - speedLimit;
            let status = '';
    
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
    
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
    
    // Example usage:
    checkSpeed(40, 'city');        // Driving 40 km/h in a 50 zone
    checkSpeed(120, 'interstate'); // The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
    checkSpeed(150, 'motorway');   // The speed is 20 km/h faster than the allowed speed of 130 - speeding
    checkSpeed(50, 'residential'); // The speed is 30 km/h faster than the allowed speed of 20 - excessive speeding
    
