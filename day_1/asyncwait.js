// const fecthUSer =  () => {
//     return new Promise((resolve, reject) => {
//         console.log("Searching ");

//         setTimeout(() => {
//             resolve({id:1, name:'saurav'});
//         }, 2000);
//     });
// };

// fecthUSer()
//     .then((user) => {
//         console.log("userfoung" + user.name);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// const checkWeather = () => {
//     return new Promise((resolve, reject) => {
//         console.log("checking weather");

//         setTimeout(() => {
//             reject("sunny");
            
//         }, 5000);
//     });
// };

// checkWeather()
//     .then((data) => {
//         console.log("weather check:" + data);
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// console.log("i am waiting");

// const showWeather = async () => {
//     console.log("look");

//     try {
//         const result = await checkWeather();
//         console.log(result);
//     } catch (error) {
//         console.log("sry"+error);

//     }
// };

// showWeather();


