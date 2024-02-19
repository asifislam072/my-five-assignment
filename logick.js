function bayTicket() {
  const scrollIntoView = document.getElementById("see-all-offer");
  if (scrollIntoView) {
    scrollIntoView.scrollIntoView({ behavior: "smooth" });
  }
}

const allBtnClick = document.getElementsByClassName("seat");

let seatInfoNumber = 0;
let setcontNagative = 40;
// const hindensetNumber = document.getElementById('seat-info-number').style.display="none";
for (let btn of allBtnClick) {
  btn.addEventListener("click", function (e) {
    e.target.disabled = true;
    if (setcontNagative > "36") {
      
      setcontNagative = setcontNagative - 1;
      seatInfoNumber = seatInfoNumber + 1;

      const seatName = this.textContent;
      

      const showSeatNumber = document.getElementById('show-ticket-number');

      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText =seatName;
      
      
      
      const p2 = document.createElement('p');
      p2.innerText = 'Economy'
      
      // ticket price
      const priceTiketct = {
        price: '550'
      }
      const convetObjectNumber = Number(priceTiketct.price)
      const p3 = document.createElement('p');
      p3.innerText =convetObjectNumber

      li.appendChild(p)
      li.appendChild(p2)
      li.appendChild(p3)
      showSeatNumber.appendChild(li)

      // total count
      const totalCost = document.getElementById('total-sell-ticket').innerText
      const totalCostNumber = parseInt(totalCost)
      document.getElementById('total-sell-ticket').innerText = totalCostNumber + parseInt(p3.innerText)


      document.getElementById("setcountnagative").innerText = setcontNagative;
      document.getElementById('seat-info-number').innerText = seatInfoNumber;
      btn.classList.add("bg-[#1dd100]");
      
    }
    else{
        alert('You Cannot Buy More Then Four Tickets')
    }
    
  });
}

// document.addEventListener('click',function(){
//   if('new15'==='new15'){

//   }
// })

function apply(){
  const discountOffer = document.getElementById('discount-offer');
  document.getElementById('total-sell-ticket').innerText =discountOffer;
  if('new15'==='new15'){
    const p =document.createElement('p');
    p.innerText = "You get cupon offer"
    const cuponOffer=document.getElementById('cupon-offer');
    cuponOffer.appendChild(p)
    p.style.backgroundColor='none'
  }
  else{
    console.log('not get offer')
  }
}