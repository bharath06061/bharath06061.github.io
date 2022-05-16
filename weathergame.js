let count1 = 0;
let count2 = 0;
let tot1 = 0;
let tot2 = 0;
let countimage1 = 0;
let countimage2 = 0;
//game selector code
function displayRadioValue() {
    var ele = document.getElementsByName('temperature');
    if (ele[0].checked) {

        document.getElementById("result").innerHTML
            = ele[0].value;
    } else if (ele[1].checked) {
        document.getElementById("result").innerHTML
            = ele[1].value;
    } else {
        alert("please select one option.");
    }



    let weather = {
        apiKey: "2aefa851173a1447ae3081d0bd177a33",
        fetchWeather: function (city) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
                .then((response) => {
                    if (!response.ok) {
                        alert("No weather found.");
                        throw new Error("No weather found.");
                    }
                    return response.json();
                })
                .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
            //getting data 
            const { name } = data;
            console.log(data)
            const { temp, humidity } = data.main;
            console.log(temp);
            if (!(document.querySelector("#city1").value === '')) {
                this.citylister1(temp);
            } else {
                this.citylister2(temp);
            }
        },
        search: function () {
            this.fetchWeather(document.querySelector("#city1").value);
        },
        search1: function () {
            this.fetchWeather(document.querySelector("#city2").value);
        },
        citylister1: function (temperature) {
            let list = document.querySelector("#list");
            let li = document.createElement("li");
            if (count1 < 3) {
                li.innerText = document.querySelector("#city1").value + ": " + temperature + "°C";
                list.appendChild(li);
                this.sum1(temperature)
                document.querySelector("#city1").value = ''
                if (count1 === 3) {

                    document.querySelector(".total1").innerText = "TOTAL IS: " + tot1
                }
            } else {
                alert("chances are over");
                document.querySelector("#city1").value = ''
            }

        },
        citylister2: function (temperature) {
            let list2 = document.querySelector("#list2");
            let li = document.createElement("li");
            if (count2 < 3) {
                li.innerText = document.querySelector("#city2").value + ": " + temperature + "°C";
                list2.appendChild(li);
                this.sum2(temperature)
                document.querySelector("#city2").value = ''
                if (count2 === 3) {

                    document.querySelector(".total2").innerText = "TOTAL IS: " + tot2
                    this.winnercalculator(tot1, tot2);
                }
            } else {
                console.log("your chance is over")
                console.log(`${tot1}${tot2}`)

            }

        },
        sum1: function (x) {
            count1++
            console.log(parseInt(x))
            tot1 = tot1 + parseInt(x);
            console.log(tot1)
        },
        sum2: function (x) {
            console.log(count2++)
            console.log(parseInt(x))
            tot2 = tot2 + parseInt(x);
            console.log(tot2)

        },
        winnercalculator: function (x, y) {
            let radio = document.querySelector("#result").innerText
            console.log(radio)
            let winner = document.querySelector("#winner")
            if (radio === "HIGH TEMPEARATURE GAME") {

                if (x > y) {
                    winner.innerText = "winner player 1"
                    let img1 = document.querySelector("#imagediv3")
                    let img3 = document.createElement("img")
                    img3.src = "https://pngimg.com/uploads/minions/small/minions_PNG57.png"
                    img3.id = "winnerimage2"
                    imagediv3.appendChild(img3)
                    
                } else if (x === y) {
                    winner.innerText = "draw"

                    let img1 = document.querySelector("#imagediv3")
                    let img3 = document.createElement("img")
                    img3.src = "https://pngimg.com/uploads/minions/minions_PNG41.png"
                    img3.id = "winnerimage2"
                    imagediv3.appendChild(img3)
                } else {
                    winner.innerText = "winner player 2"
                    let img1 = document.querySelector("#imagediv3")
                    let img3 = document.createElement("img")
                    img3.src = "https://pngimg.com/uploads/minions/small/minions_PNG68.png"
                    img3.id = "winnerimage2"
                    imagediv3.appendChild(img3)
                }
            } else {
                if (x > y) {
                    winner.innerText = "winner player 2"
                    let img1 = document.querySelector("#imagediv3")
                    let img3 = document.createElement("img")
                    img3.src = "https://pngimg.com/uploads/minions/small/minions_PNG68.png"
                    img3.id = "winnerimage2"
                    imagediv3.appendChild(img3)
                } else if (x === y) {
                    winner.innerText = "draw"
                    let img1 = document.querySelector("#imagediv3")
                    let img3 = document.createElement("img")
                    img3.src = "https://pngimg.com/uploads/minions/minions_PNG41.png"
                    img3.id = "winnerimage2"
                    imagediv3.appendChild(img3)
                } else {
                    winner.innerText = "winner player 1"
                    let img1 = document.querySelector("#imagediv3")
                    let img3 = document.createElement("img")
                    img3.src = "https://pngimg.com/uploads/minions/small/minions_PNG57.png"
                    img3.id = "winnerimage2"
                    imagediv3.appendChild(img3)
                }
            }


        }
    };

    document.querySelector("#city1")
        .addEventListener("keyup", function (event) {
            if (event.key == "Enter") {
                weather.search();
            }
        });
    document.querySelector("#city2")
        .addEventListener("keyup", function (event) {
            if (event.key == "Enter") {
                weather.search1();
            }
        });

}
let x = document.querySelector("#addminone")
x.addEventListener("click", () => {
    countimage1++
    let imageno = [86, 77, 75, 70, 61, 60, 53, 52, 50, 44, 40, 34, 30, 32, 25, 3];
    let randomnum = Math.floor(Math.random() * (16 - 1 + 1) + 1);
    let imagediv1 = document.querySelector("#imagediv1")
    let img1 = document.createElement("img")
    if (countimage1 === 1) {
        img1.src = `https://pngimg.com/uploads/minions/small/minions_PNG${imageno[randomnum]}.png`
        img1.id = "winnerimage1"
        imagediv1.appendChild(img1)
    } else {
        let img1 = document.querySelector("#winnerimage1")
        img1.src = `https://pngimg.com/uploads/minions/small/minions_PNG${imageno[randomnum]}.png`
        img1.id = "winnerimage1"
        imagediv1.appendChild(img1)
    }
}
)
let y = document.querySelector("#addmintwo")
y.addEventListener("click", () => {
    countimage2++
    let imageno = [84, 67, 63, 73, 58,46, 43, 39, 28, 13, 4, 2];
    let randomnum = Math.floor(Math.random() * (12 - 1 + 1) + 1);

    let imagediv2 = document.querySelector("#imagediv2")
    let img2 = document.createElement("img")

    if (countimage2 === 1) {
        img2.src = `https://pngimg.com/uploads/minions/small/minions_PNG${imageno[randomnum]}.png`
        img2.id = "winnerimage2"
        imagediv2.appendChild(img2)
    } else {
        let img2 = document.querySelector("#winnerimage2")
        console.log(img2.src)
        img2.src = `https://pngimg.com/uploads/minions/small/minions_PNG${imageno[randomnum]}.png`
        img2.id = "winnerimage2"
        imagediv2.appendChild(img2)
    }
}
)

