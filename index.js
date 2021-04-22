// Code your solution in this file!
const returnFirstTwoDrivers = function(array){ return array.slice(0 ,2)}
const returnLastTwoDrivers = function(array){ return array.slice(-2)}
var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
    return function(fare) {
        return fare * a
    }
}

function fareDoubler(fare) {
    return (createFareMultiplier(2)(fare))
}

function fareTripler(fare) {
    return (createFareMultiplier(3)(fare))
}

function selectDifferentDrivers(array, method){
    if (method === selectingDrivers[0]){
        return returnFirstTwoDrivers(array)
    }
    else if (method === selectingDrivers[1]){
        return returnLastTwoDrivers(array)
    }
}