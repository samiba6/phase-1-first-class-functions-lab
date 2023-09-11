// Code your solution in this file!
const returnFirstTwoDrivers =(array)=>{return array.slice(0,2) }
const returnLastTwoDrivers= (array)=> array.slice(array.length-2)

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(int){
    return (fare)=>int*fare;
}

const fareDoubler=(fare)=>createFareMultiplier(2)(fare)
const fareTripler=(fare)=>createFareMultiplier(3)(fare)
function selectDifferentDrivers(array,arg){
    return arg(array)
}