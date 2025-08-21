/*
    Async/Await = 
        Async = makes a function return a promise.
        Await = makes an async function wait for a promise.
            Allows you write asynchronous code in a synchronous manner
            Async doesn't have resolve or reject set up as parameters
            Everything after Await is placed in an event queue
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked){
                resolve("You Walk The Dog 🐕");
            }else{
                reject("You Didn't Walk The Dog 🐕");
            }
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned){
                resolve("You Clean The Kitchen 🫧");
            }else{
                reject("You Didn't Clean The Kitchen 🫧");
            }
        }, 2500)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakeOut = false;
            if (trashTakeOut){
                resolve("You Take Out The Trash 🗑️");
            }else{
                reject("You Didn't Take Out The Trash 🗑️");
            }
        }, 500)
    })
}

//CallBack Hell
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("You Finisheed all the chores!");
        })
    });
});

//Promises Chain Method
walkDog().then((value) => {console.log(value); return cleanKitchen();})
        .then((value) => {console.log(value); return takeOutTrash();})
        .then((value) => {console.log(value); return "You Finished all the Chores!"})
        .catch(erro => console.error(erro));

// Async/Await

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You Finished all the Chores!");
    }
    catch(erro) {
        console.error(erro);
    }

}

doChores()