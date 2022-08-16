// console.log('This is a new Javascript journey')

// changing h2 color 
const headings2 = document.querySelectorAll('h2');
for (const h2 of headings2) {
    h2.style.color = 'lightblue';
}

// changing backpack id's background color 
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

// changing card class border radius to 30px 
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
document.getElementById('buy-now').addEventListener('click', function () {
    console.log('This is a Buy Now Button');
})

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

const buttons = document.getElementsByClassName('custom');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // console.log(event.target.parentNode);
        event.target.parentNode.removeChild(event.target)
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const submitButton = document.getElementById('submit-button');
    if (text === 'email') {
        submitButton.removeAttribute('disabled')
    }
    else {
        submitButton.setAttribute('disabled', true)
    }

})

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 


// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'lightcoral';
})