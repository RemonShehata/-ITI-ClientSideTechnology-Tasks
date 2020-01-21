var img = 1;
document.querySelector('.prev').addEventListener('click', prevPic)

function prevPic() {
    if (img > 1) {
        img--
    } else {
        img = 3
    }

    document.querySelector('img').src = 'pic-' + img + '.jpg'
    console.log(img)
}

document.querySelector('.next').addEventListener('click', nextPic)

function nextPic() {
    if (img < 3) {
        img++
    } else {
        img = 1
    }

    document.querySelector('img').src = 'pic-' + img + '.jpg'
    console.log(img)
}