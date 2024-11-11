// console.log(par)


var cardObj = [
    {
        img: "./cloth.webp",
         desc: 'YRY FV Foundation Waterproof Tube CSK Forever',
         price: "RS.500",
        offPrice : '-80%' ,
        rating : "./star_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png",     
    },

    {
        img: "./watch.webp",
         desc: 'Fashionable 3 Chrono Watch For Women',
         price: "RS.1299",
         offPrice : '-40%',    
         rating : "./star_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png",
    },

    {
        img: "./headphone.webp",
         desc: 'P9 Wireless Bluetooth Headphones  Sound Earphones',
         price: "RS.799",
         offPrice : '-73%',    
         rating : "./star_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png",
    },

    {
        img: "./handfree.webp",
         desc: 'Fashionable 3 Chrono Watch For Women',
         price: "RS.849",
         offPrice : '-72%',    
         rating : "./star_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png",
    },

    {
        img: "./airbuds.webp",
         desc: 'AirPods Pro Wireless Earbuds Bluetooth 5.0,',
         price: "RS.1,149",
         offPrice : '-77%',    
         rating : "./star_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png",
    },


]




var par = document.getElementById("parent")

function Card (){


    for(var i = 0 ; i<cardObj.length ; i++){

var divFirst = document.createElement("div")
divFirst.classList.add('divFirst')
    var imgCard = document.createElement("img")
imgCard.setAttribute('src',cardObj[i].img)
imgCard.classList.add('imgSet')

divFirst.appendChild(imgCard)


// var divSec = document.createElement('div')
var para = document.createElement('p')
var paraText = document.createTextNode(cardObj[i].desc)
para.classList.add('desc')
para.appendChild(paraText)
divFirst.appendChild(para)

var pricePara = document.createElement('p')
var textPr = document.createTextNode(cardObj[i].price)
var offPrice = document.createElement('span')
var offText = document.createTextNode(cardObj[i].offPrice)
offPrice.classList.add('offPrice')
offPrice.appendChild(offText)

pricePara.classList.add('priceColo')
pricePara.appendChild(textPr)

divFirst.appendChild(pricePara)
divFirst.appendChild(offPrice)


var divRat = document.createElement('div')
divRat.classList.add('divStar')


var rating = document.createElement("img")
rating.setAttribute('src',cardObj[i].rating)
rating.classList.add('ratImg')
divRat.appendChild(rating)
divFirst.appendChild(divRat)

var rating = document.createElement("img")
rating.setAttribute('src',cardObj[i].rating)
rating.classList.add('ratImg')
divRat.appendChild(rating)
divFirst.appendChild(divRat)

var rating = document.createElement("img")
rating.setAttribute('src',cardObj[i].rating)
rating.classList.add('ratImg')
divRat.appendChild(rating)
divFirst.appendChild(divRat)

var rating = document.createElement("img")
rating.setAttribute('src',cardObj[i].rating)
rating.classList.add('ratImg')
divRat.appendChild(rating)
divFirst.appendChild(divRat)


par.appendChild(divFirst)
console.log(par)





    }

}
Card ();