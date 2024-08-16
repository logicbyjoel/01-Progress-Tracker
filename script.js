// bring in all panels into new array of panels
const panels = document.querySelectorAll('.panel');
// output panel object
console.log(panels);
// traverse each panel

panels.forEach((panel) => {
    // add event listener at each panel
    panel.addEventListener('click', () => {
        removeAllActive();
        // take action , add class of 'active'
        panel.classList.add('active');
    })

})


// remove class of 'active' from all panels
function removeAllActive() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
