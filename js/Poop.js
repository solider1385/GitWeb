let X1 = document.getElementById('X1');
let X2 = document.getElementById('X2');
let X3 = document.getElementById('X3');
let X4 = document.getElementById('X4');
let Zarib4 = document.getElementById('Zarib4');
let Zarib3 = document.getElementById('Zarib3');
let Zarib2 = document.getElementById('Zarib2');
let Zarib1 = document.getElementById('Zarib1');
let CoinStartBtn = document.getElementById('CoinStart');
let AMStart = document.getElementById('AMStart');
let popdivscon1 = document.getElementById('popdivcon1');
let xdivs1 = document.getElementById('xdivs1');

let popdivscon2 = document.getElementById('popdivscon2');
let xdivs2 = document.getElementById('xdivs3');

let popdivscon3 = document.getElementById('popdivscon3');
let xdivs3 = document.getElementById('xdivs2');

let popdivscon4 = document.getElementById('popdivscon4');
let xdivs4 = document.getElementById('xdivs4');

const playalert = document.getElementById('playing');

const p1As = document.getElementById('p1As');
const PopLose = document.getElementById('PopLose');

CoinStartBtn.value = 'Start (-5)';
AMStart.value = 'Start (show ad)';

X2.className = 'Xinput';
X3.className = 'Xinput';
X4.className = 'Xinput';

X1.addEventListener('click', () => {
    X1.className = 'ClickedZ';
    X2.className = 'Xinput';
    X3.className = 'Xinput';
    X4.className = 'Xinput';

    CoinStartBtn.value = 'Start (-5)';
    AMStart.style.pointerEvents = 'All';
    AMStart.value = 'Start (show ad)';
    AMStart.className = 'AMStartBTN';
    Zarib4.textContent = 'x1';
    Zarib3.textContent = 'x1';
    Zarib2.textContent = 'x1';
    Zarib1.textContent = 'x1';

    console.log('X1');
})
X2.addEventListener('click', () => {
    X2.className = 'ClickedZ';
    X1.className = 'Xinput';
    X3.className = 'Xinput';
    X4.className = 'Xinput';

    CoinStartBtn.value = 'Start (-10)';
    AMStart.style.pointerEvents = 'All';
    AMStart.value = 'Start (show ad)';
    AMStart.className = 'AMStartBTN';
    Zarib4.textContent = 'x2';
    Zarib3.textContent = 'x2';
    Zarib2.textContent = 'x2';
    Zarib1.textContent = 'x2';
    console.log('X2');
})
X3.addEventListener('click', () => {
    X3.className = 'ClickedZ';
    X2.className = 'Xinput';
    X1.className = 'Xinput';
    X4.className = 'Xinput';

    CoinStartBtn.value = 'Start (-20)';
    AMStart.style.pointerEvents = 'none';
    AMStart.value = 'Only for (x1 & x2)';
    AMStart.className = 'AMStartBTNCant';
    Zarib4.textContent = 'x4';
    Zarib3.textContent = 'x4';
    Zarib2.textContent = 'x4';
    Zarib1.textContent = 'x4';
    console.log('X3');

})
X4.addEventListener('click', () => {
    X4.className = 'ClickedZ';
    X2.className = 'Xinput';
    X3.className = 'Xinput';
    X1.className = 'Xinput';

    CoinStartBtn.value = 'Start (-50)';
    AMStart.style.pointerEvents = 'none';
    AMStart.value = 'Only for (x1 & x2)';
    AMStart.className = 'AMStartBTNCant';
    Zarib4.textContent = 'x16';
    Zarib3.textContent = 'x16';
    Zarib2.textContent = 'x16';
    Zarib1.textContent = 'x16';
    console.log('X4');
})

// .............p1...................
const p11 = document.getElementById('Poop11');
const p12 = document.getElementById('Poop12');
const p13 = document.getElementById('Poop13');
const p14 = document.getElementById('Poop14');
// ................p2..................
const p21 = document.getElementById('Poop21');
const p22 = document.getElementById('Poop22');
const p23 = document.getElementById('Poop23');
const p24 = document.getElementById('Poop24');
// ...............p13.ATTRIBUTE_NODE..........
const p31 = document.getElementById('Poop31');
const p32 = document.getElementById('Poop32');
const p33 = document.getElementById('Poop33');
const p34 = document.getElementById('Poop34');


// .............p4...................
const p41 = document.getElementById('Poop41');
const p42 = document.getElementById('Poop42');
const p43 = document.getElementById('Poop43');
const p44 = document.getElementById('Poop44');

// .............p1...................


// ......................p2.........



// .............p4...................
p41.addEventListener('click', () => {
    const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
    function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
    }
    function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p41.style.backgroundImage = 'none';

        if (p1chose == "💩") {
            p41.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

            PopLose.style.pointerEvents = 'none';

            console.log("you lose");
            alert("you lose");
            playalert.innerText = 'Ooh you lose';
            p3As.style.pointerEvents = 'none';


        };
    } LogRandomElementP1();
    console.log("p41");
})
p42.addEventListener('click', () => {
    const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
    function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
    }
    function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p42.style.backgroundImage = 'none';

        if (p1chose == "💩") {
            p42.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

            PopLose.style.pointerEvents = 'none';

            console.log("you lose");
            alert("you lose");
            playalert.innerText = 'Ooh you lose';
            p3As.style.pointerEvents = 'none';


        };
    } LogRandomElementP1();
    console.log("p42");
})
p43.addEventListener('click', () => {
    const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
    function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
    }
    function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p43.style.backgroundImage = 'none';

        if (p1chose == "💩") {
            p43.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

            PopLose.style.pointerEvents = 'none';

            console.log("you lose");
            alert("you lose");
            playalert.innerText = 'Ooh you lose';
            p3As.style.pointerEvents = 'none';


        };
    } LogRandomElementP1();
    console.log("p43");
})
p44.addEventListener('click', () => {
    const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
    function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
    }
    function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p44.style.backgroundImage = 'none';

        if (p1chose == "💩") {
            p44.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

            PopLose.style.pointerEvents = 'none';

            console.log("you lose");
            alert("you lose");
            playalert.innerText = 'Ooh you lose';
            p3As.style.pointerEvents = 'none';


        };
    } LogRandomElementP1();
    console.log("p44");
})
function StartTimer() {
    let counter = 12;
    const timerElement = document.getElementById('TimerId');
    const totalWidth = timerElement.offsetWidth; // عرض اولیه برای محاسبه نسبت

    const interval = setInterval(() => {
        counter--;
        const widthPercent = (counter / 12) * 100;
        timerElement.style.width = `${widthPercent}%`;
        timerElement.textContent = counter > 0 ? counter : '0';

        if (counter <= 0) {
            clearInterval(interval);
            timerElement.style.width = '0%';
            console.log('ok');
            playalert.style.pointerEvents = 'all';
            PopLose.style.pointerEvents = 'none';
            playalert.innerText = 'Play Again';
            p11.style.pointerEvents = 'none';
            p12.style.pointerEvents = 'none';
            p13.style.pointerEvents = 'none';
            p14.style.pointerEvents = 'none';
            p21.style.pointerEvents = 'none';
            p22.style.pointerEvents = 'none';
            p23.style.pointerEvents = 'none';
            p24.style.pointerEvents = 'none';
            p31.style.pointerEvents = 'none';
            p32.style.pointerEvents = 'none';
            p33.style.pointerEvents = 'none';
            p34.style.pointerEvents = 'none';
            p41.style.pointerEvents = 'none';
            p42.style.pointerEvents = 'none';
            p43.style.pointerEvents = 'none';
            p44.style.pointerEvents = 'none';
        }
    }, 1000);
};




CoinStartBtn.addEventListener('click', () => {
    playalert.style.pointerEvents = 'none';
    console.log('CoinBtn');
    X1.style.pointerEvents = 'none';
    X2.style.pointerEvents = 'none';
    X3.style.pointerEvents = 'none';
    X4.style.pointerEvents = 'none';

    if (X1.className == "ClickedZ") {
        // .............x1 on X1 .............
        let points = '15';
        console.log(`your point = ${points}`);
        if (points >= 5) {
            StartTimer();
            console.log('poin 55');
            CoinStartBtn.value = 'Ready!!';
            CoinStartBtn.style.pointerEvents = 'none';
            AMStart.style.pointerEvents = 'none';
            AMStart.className = 'AMStartBTNCant';

            playalert.style.display = 'flex';
            CoinStartBtn.style.display = 'none';
            AMStart.style.display = 'none';

            popdivscon1.className = 'PoopDivCon1Off';
            xdivs1.className = 'XDivOff';
            popdivscon2.className = 'PoopDivConOff';
            xdivs2.className = 'XDivOff';
            popdivscon3.className = 'PoopDivConOff';
            xdivs3.className = 'XDivOff';
            popdivscon4.style.pointerEvents = 'all';
            xdivs3.style.pointerEvents = 'all';

            // start round one
            p11.addEventListener('click', () => {
                // console.log("p11");
                // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                playalert.style.pointerEvents = 'all';


                const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p11.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p11.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim (${p1chose})`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();

            });
            // ......................P12
            p12.addEventListener('click', () => {
                const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p12.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p12.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p12");
            });
            // ...........................p13
            p13.addEventListener('click', () => {
                const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p13.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p13.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p13");
            })
            // ..............................p14
            p14.addEventListener('click', () => {
                const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p14.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p14.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p14");
            });



            // ...................................P21 Start
            // ...................p2.........
            p21.addEventListener('click', () => {
                const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p21.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p21.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p21");

            })
            p22.addEventListener('click', () => {
                const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p22.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p22.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p22");
            })
            p23.addEventListener('click', () => {
                const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p23.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p23.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p23");
            })
            p24.addEventListener('click', () => {
                const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p24.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p24.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p24");
            })


            // .......................p3..........
            p31.addEventListener('click', () => {
                const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p31.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p31.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p31");
            })
            p32.addEventListener('click', () => {
                const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p32.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p32.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p32");
            })
            p33.addEventListener('click', () => {
                const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p33.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p33.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p33");
            })
            p34.addEventListener('click', () => {
                const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p34.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p34.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p34");
            })



        }
        console.log("x1");

    } else if (X2.className == "ClickedZ") {
        // .............x1 on X1 .............
        let points = '15';
        console.log(`your point = ${points}`);
        if (points >= 10) {
            StartTimer();
            CoinStartBtn.value = 'Ready!!';
            CoinStartBtn.style.pointerEvents = 'none';
            AMStart.style.pointerEvents = 'none';
            AMStart.className = 'AMStartBTNCant';

            playalert.style.display = 'flex';
            CoinStartBtn.style.display = 'none';
            AMStart.style.display = 'none';

            popdivscon1.className = 'PoopDivCon1Off';
            xdivs1.className = 'XDivOff';
            popdivscon2.className = 'PoopDivConOff';
            xdivs2.className = 'XDivOff';
            popdivscon3.className = 'PoopDivConOff';
            xdivs3.className = 'XDivOff';
            popdivscon4.style.pointerEvents = 'all';
            xdivs3.style.pointerEvents = 'all';

            // start round ZX2
            p11.addEventListener('click', () => {
                // console.log("p11");
                // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                playalert.style.pointerEvents = 'all';


                const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p11.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p11.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim (${p1chose})`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();

            });
            // ......................P2
            p12.addEventListener('click', () => {
                const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p12.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p12.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p12");
            });
            // ...........................p13
            p13.addEventListener('click', () => {
                const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p13.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p13.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p13");
            })
            // ..............................p14
            p14.addEventListener('click', () => {
                const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p14.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p14.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p14");
            });

            // .................................p2.......
            p21.addEventListener('click', () => {
                const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p21.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p21.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p21");

            })
            p22.addEventListener('click', () => {
                const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p22.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p22.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p22");
            })
            p23.addEventListener('click', () => {
                const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p23.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p23.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p23");
            })
            p24.addEventListener('click', () => {
                const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p24.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p24.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p24");
            })

            // .......................p3..........
            p31.addEventListener('click', () => {
                const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p31.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p31.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p31");
            })
            p32.addEventListener('click', () => {
                const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p32.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p32.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p32");
            })
            p33.addEventListener('click', () => {
                const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p33.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p33.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p33");
            })
            p34.addEventListener('click', () => {
                const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p34.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p34.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p34");
            })

        }
        console.log("x1");

        console.log('X2');
    } else if (X3.className == "ClickedZ") {
        let points = '20';
        if (points >= 20) {
            StartTimer();
            CoinStartBtn.value = 'Ready!!';
            CoinStartBtn.style.pointerEvents = 'none';
            AMStart.style.pointerEvents = 'none';
            AMStart.className = 'AMStartBTNCant';

            playalert.style.display = 'flex';
            CoinStartBtn.style.display = 'none';
            AMStart.style.display = 'none';

            popdivscon1.className = 'PoopDivCon1Off';
            xdivs1.className = 'XDivOff';
            popdivscon2.className = 'PoopDivConOff';
            xdivs2.className = 'XDivOff';
            popdivscon3.className = 'PoopDivConOff';
            xdivs3.className = 'XDivOff';
            popdivscon4.style.pointerEvents = 'all';
            xdivs3.style.pointerEvents = 'all';

            StartTimer();
            CoinStartBtn.value = 'Ready!!';
            CoinStartBtn.style.pointerEvents = 'none';
            AMStart.style.pointerEvents = 'none';
            AMStart.className = 'AMStartBTNCant';

            playalert.style.display = 'flex';
            CoinStartBtn.style.display = 'none';
            AMStart.style.display = 'none';

            popdivscon1.className = 'PoopDivCon1Off';
            xdivs1.className = 'XDivOff';
            popdivscon2.className = 'PoopDivConOff';
            xdivs2.className = 'XDivOff';
            popdivscon3.className = 'PoopDivConOff';
            xdivs3.className = 'XDivOff';
            popdivscon4.style.pointerEvents = 'all';
            xdivs3.style.pointerEvents = 'all';
            // start round ZX4
            p11.addEventListener('click', () => {
                // console.log("p11");
                // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                playalert.style.pointerEvents = 'all';


                const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p11.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p11.innerHTML = `<span
            style="color: Black; font-weight:bold;">${p1chose}</span>
          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
              class="bi bii bi-coin" viewBox="0 0 16 16">
              <path
                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
            </svg></i>`;
                        playalert.innerText = `Claim (${p1chose})`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }

                } LogRandomElementP1();


            });
            // ......................P2
            p12.addEventListener('click', () => {
                const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p12.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p12.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p12");
            });
            // ...........................p13
            p13.addEventListener('click', () => {
                const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p13.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p13.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p13");
            })
            // ..............................p14
            p14.addEventListener('click', () => {
                const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p14.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p14.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
            });

            // .................................p2.......
            p21.addEventListener('click', () => {
                const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p21.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p21.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p21");

            })
            p22.addEventListener('click', () => {
                const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p22.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p22.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p22");
            })
            p23.addEventListener('click', () => {
                const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p23.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p23.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p23");
            })
            p24.addEventListener('click', () => {
                const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p24.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p24.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p24");
            })


            // .......................p3..........
            p31.addEventListener('click', () => {
                const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p31.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p31.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p31");
            })
            p32.addEventListener('click', () => {
                const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p32.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p32.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p32");
            })
            p33.addEventListener('click', () => {
                const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p33.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p33.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p33");
            })
            p34.addEventListener('click', () => {
                const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p34.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p34.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p34");
            })
        }

        console.log('X4');
    } else if (X4.className == "ClickedZ") {
        let points = '50';
        console.log(`your point = ${points}`);
        if (points >= 50) {
            StartTimer();
            CoinStartBtn.value = 'Ready!!';
            CoinStartBtn.style.pointerEvents = 'none';
            AMStart.style.pointerEvents = 'none';
            AMStart.className = 'AMStartBTNCant';

            playalert.style.display = 'flex';
            CoinStartBtn.style.display = 'none';
            AMStart.style.display = 'none';

            popdivscon1.className = 'PoopDivCon1Off';
            xdivs1.className = 'XDivOff';
            popdivscon2.className = 'PoopDivConOff';
            xdivs2.className = 'XDivOff';
            popdivscon3.className = 'PoopDivConOff';
            xdivs3.className = 'XDivOff';
            popdivscon4.style.pointerEvents = 'all';
            xdivs3.style.pointerEvents = 'all';

            // start round ZX2
            p11.addEventListener('click', () => {
                // console.log("p11");
                // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                playalert.style.pointerEvents = 'all';


                const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p11.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p11.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim (${p1chose})`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();

            });
            // ......................P2
            p12.addEventListener('click', () => {
                const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p12.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p12.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p12");
            });
            // ...........................p13
            p13.addEventListener('click', () => {
                const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p13.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p13.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p13");
            })
            // ..............................p14
            p14.addEventListener('click', () => {
                const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p14.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p14.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDivOff';
                        // popdivscon3.className = 'PoopDivCon';
                        xdivs2.className = 'XDiv';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p1As.style.pointerEvents = 'none';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon4').style.zIndex = '5';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p14");
            });

            // .................................p2.......
            p21.addEventListener('click', () => {
                const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p21.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p21.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p21");

            })
            p22.addEventListener('click', () => {
                const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p22.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p22.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p22");
            })
            p23.addEventListener('click', () => {
                const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p23.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p23.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p23");
            })
            p24.addEventListener('click', () => {
                const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
                function createArrayForP2() {
                    return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                    const arr2 = createArrayForP2();
                    let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                    p24.style.backgroundImage = 'none';

                    if (p2chose == "💩") {
                        p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p1As.style.pointerEvents = 'none';


                    } else {
                        p24.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p2chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs3.className = 'XDiv';
                        xdivs2.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivCon';
                        popdivscon3.className = 'PoopDivConOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p2As.style.pointerEvents = 'none';
                        p3As.style.pointerEvents = 'all';
                        popdivscon3.style.pointerEvents = 'all';
                        document.getElementById('popdivscon3').style.zIndex = '6';





                        console.log("you win");
                    }
                } LogRandomElementP2();
                console.log("p24");
            })


            // .......................p3..........
            p31.addEventListener('click', () => {
                const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p31.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p31.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p31");
            })
            p32.addEventListener('click', () => {
                const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p32.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p32.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p32");
            })
            p33.addEventListener('click', () => {
                const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p33.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p33.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p33");
            })
            p34.addEventListener('click', () => {
                const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
                function createArrayForP1() {
                    return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                    const arr1 = createArrayForP1();
                    let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                    p34.style.backgroundImage = 'none';

                    if (p1chose == "💩") {
                        p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                        PopLose.style.pointerEvents = 'none';

                        console.log("you lose");
                        alert("you lose");
                        playalert.innerText = 'Ooh you lose';
                        p3As.style.pointerEvents = 'none';


                    } else {
                        p34.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                        playalert.innerText = `Claim`;
                        document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                        popdivscon1.className = 'PoopDivCon1Off';
                        xdivs1.className = 'XDivOff';
                        popdivscon3.className = 'PoopDivConOff';
                        xdivs1.className = 'XDivOff';
                        xdivs3.className = 'XDivOff';
                        popdivscon2.className = 'PoopDivConOff';
                        xdivs2.className = 'XDivOff';
                        popdivscon4.className = 'PoopDivConOff';
                        xdivs4.className = 'XDivOff';
                        p3As.style.pointerEvents = 'none';
                        popdivscon1.className = 'PoopDivCon1';
                        xdivs1.className = 'XDiv';
                        popdivscon1.style.pointerEvents = 'all';
                        document.getElementById('popdivscon2').style.zIndex = '7';




                        console.log("you win");







                    }
                } LogRandomElementP1();
                console.log("p34");
            })

        }

        console.log('X16');
    }



})




AMStart.addEventListener('click', () => {
    console.log('AmBtn');

})


playalert.addEventListener('click', () => {
    window.location.reload();
})