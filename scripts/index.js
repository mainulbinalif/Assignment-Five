let totalSeatCount = 40
let selectedSeatCount = 0


const availableSeats = document.getElementById("available-seats")
availableSeats.innerText = totalSeatCount

const selectedSeats = document.getElementById("selected-seats")
selectedSeats.innerText = selectedSeatCount



const seats = document.getElementsByClassName("seat");
const totalSeatsPrice = document.getElementById("total-seats-price")
const grandTotalSeatsPrice = document.getElementById("grand-total-seats-price")

for(let seat of seats){
    seat.addEventListener("click",seatOperations)
    function seatOperations(){
        seat.classList.toggle("bg-green-500")
        let hasClass = seat.classList.contains('bg-green-500')
        if(hasClass){
            totalSeatCount--
            selectedSeatCount++
            purchaseSeats(seat.innerText)
        }else{
            totalSeatCount++
            selectedSeatCount--
            document.getElementById(`seatId_${seat.innerText}`).remove()
        }

        availableSeats.innerText = totalSeatCount
        selectedSeats.innerText = selectedSeatCount
        let totalPrice = selectedSeatCount * 550
        totalSeatsPrice.innerHTML = totalPrice
        grandTotalSeatsPrice.innerHTML = totalPrice
    }
}


const seatPurchaseList = document.getElementById("purchased-seat-list")

function purchaseSeats(seatName){
    const li =  `<li id="seatId_${seatName}" class="flex justify-between text-sm pb-4 text-gray-400">
                            <p>${seatName}</p>
                            <p class="ml-12" >Economy</p>
                            <p>550</p>
                        </li>`
    seatPurchaseList.innerHTML += li
}
// Coupon Section -------------------------------------------
const couponField = document.getElementById("coupon-field")
const couponApplyBtn = document.getElementById("coupon-apply-btn")
couponApplyBtn.addEventListener("click",couponFunc)

function couponFunc(){
    console.log(selectedSeats.innerText);
    if(selectedSeats.innerText >= 4){
    const coupons = ["NEW15","Couple20"]
    const userInputedCoupon = couponField.value
    if(coupons[0] == userInputedCoupon){
        grandTotalSeatsPrice.innerHTML = parseInt(Number(totalSeatsPrice.innerHTML) - (Number(totalSeatsPrice.innerHTML / 100) * 15))
    }else if(coupons[1] == userInputedCoupon){
        grandTotalSeatsPrice.innerHTML = parseInt(Number(totalSeatsPrice.innerHTML) - (Number(totalSeatsPrice.innerHTML / 100) * 20))
    }
}else{
    return confirm("You are purchased  " + selectedSeats.innerText + " seats. To use coupon minimum purchase 4 tickets.")
}
}


// passenger form section -------------------------

const passengerName = document.getElementById("passenger-name")
const passengerPhn = document.getElementById("passenger-phn")
const passengerEmail = document.getElementById("passenger-email")
const passengerInfoSubmitBtn = document.getElementById("passenger-info-submit-btn")

    passengerInfoSubmitBtn.addEventListener("click",() => {
        if(!(passengerName.value == "") && !(passengerPhn.value == "") && !(passengerEmail.value == "")){
            this.my_modal.showModal()
        }else{
            document.getElementById("emptyFieldError").innerText ="Please fill all the input fields to go next !"
            document.getElementById("emptyFieldError").style.fontSize = "14px"

        }
    }
    )