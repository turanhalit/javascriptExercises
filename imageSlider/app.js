(function() {
    const images =[
        "1",
        "2",
        "3",
        "4",
    ];

    const buttons =document.querySelectorAll(".btn")
    const imgDiv = document.querySelector(".img-container")

    let count=0

    buttons.forEach(function (button) {
        button.addEventListener("click", function(e){
            if(button.classList.contains('btn-left')){
                count--
                if(count< 0)
                {
                    count=images.length-1
                }
                imgDiv.style.background = `url('img/${images[count]}.png')`
            }

            if(button.classList.contains('btn-right')){
                count++
                if(count> images.length -1)
                {
                    count=0
                }
                imgDiv.style.background = `url('img/${images[count]}.png')`
            }
        })
    })
        
}) ();
