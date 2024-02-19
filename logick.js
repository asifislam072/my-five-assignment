function bayTicket() {
  const scrollIntoView = document.getElementById("see-all-offer");
  if (scrollIntoView) {
    scrollIntoView.scrollIntoView({ behavior: "smooth" });
  }
}

const allBtnClick = document.getElementsByClassName("seat");

let seatInfoNumber = 0;
let setcontNagative = 40;
let ticketPrice = 550;
// const hindensetNumber = document.getElementById('seat-info-number').style.display="none";
for (let btn of allBtnClick) {
  btn.addEventListener("click", function (e) {
    if (setcontNagative > "36") {
      
      setcontNagative = setcontNagative - 1;
      seatInfoNumber = seatInfoNumber + 1;

      const seatName = this.textContent;
      

      const showSeatNumber = document.getElementById('show-ticket-number');

      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText =seatName;
      
      
      
      const p2 = document.createElement('p');
      p2.innerText = 'Clasick'
      
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
      const totalTicketId = document.getElementById('total-sell-ticket');
      // const totalSellTicket = parseInt(totalTicketId);
      // console.log(typeof totalSellTicket);
      ticketPrice = totalTicketId + p3.innerText

      document.getElementById("setcountnagative").innerText = setcontNagative;
      document.getElementById('seat-info-number').innerText = seatInfoNumber;
      btn.classList.add("bg-[#1dd100]");
      
    }
    else{
        alert('You Not select 4 tar besi')
    }
    
  });
}

// var button = document.querySelector('seat'); 
// var originalText = button.textContent; 

// button.addEventListener('click', function() {
//     console.log(originalText); 
// });
