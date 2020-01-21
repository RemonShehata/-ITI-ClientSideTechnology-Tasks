var visable;

document.querySelector('#btn-1').addEventListener('click', toggleTextOne)
document.querySelector('#btn-2').addEventListener('click', toggleTextTwo)
document.querySelector('#btn-3').addEventListener('click', toggleTextThree)

function toggleTextOne() {
    if (visable == 2) {
        document.querySelector('#text2').classList.toggle('toggleVisability')
    }
    if (visable == 3) {
        document.querySelector('#text3').classList.toggle('toggleVisability')
    }
    document.querySelector('#text1').classList.toggle('toggleVisability')
    visable = 1
}



function toggleTextTwo() {
    if (visable == 1) {
        document.querySelector('#text1').classList.toggle('toggleVisability')
    }

    if (visable == 3) {
        document.querySelector('#text3').classList.toggle('toggleVisability')
    }
    document.querySelector('#text2').classList.toggle('toggleVisability')
    visable = 2
}



function toggleTextThree() {
    if (visable == 1) {
        document.querySelector('#text1').classList.toggle('toggleVisability')
    }

    if (visable == 2) {
        document.querySelector('#text2').classList.toggle('toggleVisability')
    }
    document.querySelector('#text3').classList.toggle('toggleVisability')
    visable = 3
}