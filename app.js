const inputt = document.querySelectorAll(".label-div input")

function handel() {
    console.log(this.dataset)
    const suff = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suff)
}


inputt.forEach(inputt=> inputt.addEventListener("change", handel));
inputt.forEach(inputt=> inputt.addEventListener("mousemove", handel));