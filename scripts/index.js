// console.log("object");
let catContainer = document.getElementById("category");

async function showCategory() {
    try {
        let res = await fetch("https://amazon24.p.rapidapi.com/api/category");
        let data = await res.json();
        // let aData = data.data;
        // appendCat(aData);
        // console.log('aData :>> ', aData);
        console.log('data :>> ', data);
    }
    catch (err) {
        console.log('err :>> ', err);
    }

}


// const options = {
//     method: 'GET',
//     url: 'https://amazon24.p.rapidapi.com/api/category',
//     params: {country: 'US'},
//     headers: {
//       'X-RapidAPI-Key': '84c3ee4e3cmsh3566769aef6392bp1cc312jsn9125c1dd6e9f',
//       'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

showCategory();

// function appendCat(data) {

//     data.forEach(element => {
        
//         let boxCat=document.createElement("div");
//         boxCat.innerText=element.name;

//         catContainer.append(boxCat);
//     });

// }