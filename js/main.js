let srcc = "https://picsum.photos/150/150/?random=1";

let rander = [{
        num: 1,
        counter: 0
    },
    {
        num: 2,
        counter: 0
    },
    {
        num: 3,
        counter: 0
    },
    {
        num: 4,
        counter: 0
    },
    {
        num: 'bomb',
        counter: 1
    }
]

let obj = [];

for (let j = 0; j < 9; j++) {
    let count = parseInt(Math.random() * (rander.length))
    console.log(rander.length);
    obj.push({
        id: j,
        front: `https://via.placeholder.com/150?text=${rander[count].num}`,
        istoggle: false,
        num: rander[count].num
    })
    rander[count].counter = rander[count].counter + 1
    if (rander[count].counter == 2) rander.splice(count, 1)
}
console.log(obj);

// let obj = [{
//         id: 0,
//         front: "https://via.placeholder.com/150?text=2",
//         istoggle: false,
//         num: 2
//     },
//     {
//         id: 1,
//         front: "https://via.placeholder.com/150?text=3",
//         istoggle: false,
//         num: 3
//     },
//     {
//         id: 2,
//         front: "https://via.placeholder.com/150?text=1",
//         istoggle: false,
//         num: 1
//     },
//     {
//         id: 3,
//         front: "https://via.placeholder.com/150?text=2",
//         istoggle: false,
//         num: 2
//     },
//     {
//         id: 4,
//         front: "https://via.placeholder.com/150?text=3",
//         istoggle: false,
//         num: 3
//     }, {
//         id: 5,
//         front: "https://via.placeholder.com/150?text=1",
//         istoggle: false,
//         num: 1,
//     }, {
//         id: 6,
//         front: "https://via.placeholder.com/150?text=4",
//         istoggle: false,
//         num: 4
//     }, {
//         id: 7,
//         front: "https://via.placeholder.com/150?text=bomb",
//         istoggle: false,
//         num: "bomb"
//     }, {
//         id: 8,
//         front: "https://via.placeholder.com/150?text=4",
//         istoggle: false,
//         num: 4
//     },
// ]



let i = 0;
let cardsimg = document.querySelectorAll(".img-fluid");
cardsimg.forEach(e => {
    e.dataset.id = i++;
})
let two = [];
let time_pack = true;

root.addEventListener("click", (evt) => {
    if (time_pack) {
        let id = event.target.dataset.id;

        if (id) {
            if (obj[id].num == "bomb") {
                setTimeout(() => {
                    window.location.reload();
                }, 1000)

            }
            if (two[0] != id) {
                two.push(id);
                console.log(two);
            }
            if (!obj[id].istoggle) obj[id].istoggle = !obj[id].istoggle;

            if (obj[id].istoggle) {
                console.log(event.target.src = obj[id].front)
            } else {
                event.target.src = srcc;
            }
        }
        if (two.length == 2) {
            time_pack = false
            setTimeout(() => {
                if (obj[two[0]].num == obj[two[1]].num) {
                    cardsimg[two[0]].remove()
                    cardsimg[two[1]].remove()
                    two = [];
                } else {
                    cardsimg[two[0]].src = srcc;
                    cardsimg[two[1]].src = srcc;
                    two = [];
                }
                time_pack = true
            }, 1000)
        }
    }
})