const copyBtn = document.querySelector(".copy-btn");
const  textarea = document.querySelector("textarea");


copyBtn.addEventListener("click", () => {
    textarea.select();
    document.execCommand("copy");
    copyBtn.innerHTML = "<i class='fa-solid fa-check'></i>" ;
    copyBtn.style.background = "#FF8551";
    copyBtn.style.color = "white";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtn.innerHTML = "<i class='fa-solid fa-copy'></i>" ;
        copyBtn.style.background = "";
        copyBtn.style.color = "";
    },2000)
});