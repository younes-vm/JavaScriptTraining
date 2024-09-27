let count = 0;
let sheepCount = document.getElementById("sheep-count");
let alert = document.getElementById("alert");

function increment() {
    if (alert.style.transform == "scaleY(1)") {
        alert.style.transform = "scaleY(0)";
    }
    count++;
    sheepCount.innerHTML = count;
}

function reset() {
    if (alert.style.transform == "scaleY(1)") {
        alert.style.transform = "scaleY(0)";
    }
    count = 0;
    sheepCount.innerHTML = count;
}

function decrement() {
    if (count <= 0) {
        alert.style.transform = "scaleY(1)";
        return;
    }
    count--;
    sheepCount.innerHTML = count;
}
