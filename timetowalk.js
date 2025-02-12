    function timeToUniversity(steps, footprintLength, speedKmH) {
        let distanceMeters = steps * footprintLength; // Total distance in meters
        let speedMetersPerSec = (speedKmH * 1000) / 3600; // Convert speed from km/h to m/s
        let timeSeconds = distanceMeters / speedMetersPerSec; // Travel time in seconds
    
        // Calculate rest time: 1-minute break for every 500 meters
        let restMinutes = Math.floor(distanceMeters / 500);
    
        // Total time in seconds (including rest time)
        let totalSeconds = timeSeconds + restMinutes * 60;
    
        // Convert total time into hours, minutes, seconds
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = Math.round(totalSeconds % 60); // Round to avoid floating-point issues
    
        // Print the result in the required format
        console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }
