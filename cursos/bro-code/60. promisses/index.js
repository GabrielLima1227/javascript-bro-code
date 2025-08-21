/*
    Promise = An Object that manages asynchronous operations.
            Wrap a Promise Object around {asynchronous code}
            "I promise to return a value"
            PENDING -> RESOLVED or REJECTED         
            new Promise((resolve, reject) => {asynchronous code})

    DO THESE CHORES IN ORDER:
        1. WALK THE DOG
        2. CLEAN THE KITCHEN
        3. TAKE OUT THE TRASH
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

//Promises 
walkDog().then((value) => {console.log(value); return cleanKitchen();})
        .then((value) => {console.log(value); return takeOutTrash();})
        .then((value) => {console.log(value); return "You Finished all the Chores!"})
        .catch(erro => console.error(erro));