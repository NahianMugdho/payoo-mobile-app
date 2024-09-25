document.getElementById('bt-2').addEventListener('click',function(){

document.getElementById('cash-out').classList.remove('hidden')

document.getElementById('cash-in').classList.add('hidden')

})

document.getElementById('bt-1').addEventListener('click',function(){

    document.getElementById('cash-in').classList.remove('hidden')
    
    document.getElementById('cash-out').classList.add('hidden')
    
    })
    document.getElementById('bt-4').addEventListener('click',function(){

        document.getElementById('cash-in').classList.add('hidden')
        
        document.getElementById('cash-out').classList.add('hidden')
        document.getElementById('tnx-history').classList.remove('hidden')
//         const div = document.createElement('div');
//         div.innerHTML = `
// <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
// <dialog id="my_modal_1" class="modal">
//   <div class="modal-box">
//     <h3 class="text-lg font-bold">Hello!</h3>
//     <p class="py-4">Press ESC key or click the button below to close</p>
//     <div class="modal-action">
//       <form method="dialog">
//         <!-- if there is a button in form, it will close the modal -->
//         <button class="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>`
// document.getElementById('history').appendChild(div)
        
        })