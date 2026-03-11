const parent = document.getElementById("parentCheckBox");
const children = document.querySelectorAll(".child-check")

// const c1 = document.getElementById("c1");
// const c2 = document.getElementById("c2");

function updateParent() {
    const checkedCount = [...children].filter(c => c.checked).length;

    if (checkedCount === 0) {
        parent.checked = false;
        parent.indeterminate = true;
    } else if (checkedCount === children.length) {
        parent.checked = true;
        parent.indeterminate = false;
    } else {
        parent.checked = false;
        parent.indeterminate = true;
    }
}

children.forEach(c => c.addEventListener("change", updateParent));

parent.addEventListener("change", () => {
    children.forEach( c => {
        c.checked = this.checked
    })
    parent.indeterminate = true;
})