// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks > 42) {
        let eq = blocks - 42
        return eq
    } else if (blocks < 42) {
        let eq = 42 - blocks
        return eq
    }
}

function distanceFromHqInFeet(result){
    let distance = distanceFromHqInBlocks(result)
    let feet = distance * 264
    return feet
}

function distanceTravelledInFeet(strt, dstn){
    if (strt > dstn) {
        let feet = (strt - dstn)* 264
        console.log(feet)
        return feet
    } else if (strt < dstn) {
        let feet = (dstn - strt)* 264
        console.log(feet)
        return feet 
        
    }
}

function calculatesFarePrice(strt, dstn){
   let feet = distanceTravelledInFeet(strt, dstn)
//    console.log(feet)
   if (feet < 400) {
        return 0
   } else if (feet < 2000) {
        let cost = (feet - 400) * 0.02
        return cost 
   } else if (2000 < feet, feet < 2500){
        return 25
   } else if (2500 < feet){
        return 'cannot travel that far'
   }
}
