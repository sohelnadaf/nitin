function updateCounter() {
    fetch('https://api.countapi.xyz/update/nitinassociate/turingtech/?amount=1')
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

updateCounter()



counterElement = document.getElementsByClassName('mycounter')[0];