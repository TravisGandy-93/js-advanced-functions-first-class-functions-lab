// Code your solution in this file!
const returnFirstTwoDrivers = function(array){ return array.slice(0 ,2)}
const returnLastTwoDrivers = function(array){ return array.slice(-2)}
const fareDoubler = function(num){ return num * 2 }
const fareTripler = function(num){ return num * 3 }
var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a, b){
    let result
    if (b === '2'){
       result = fareDoubler(b)
    }
    else if (b === '3'){
        result = fareTripler(b)
    }
    else {
        result =  a * b
        
    }    
        return result
}

function selectDifferentDrivers(array, method){
    if (method === selectingDrivers[0]){
        return returnFirstTwoDrivers(array)
    }
    else if (method === selectingDrivers[1]){
        return returnLastTwoDrivers(array)
    }
}