const faceElement = document.querySelector('#face');

const shownClass = ['eKOqdA'];
const showingClass = ['YwNBVw', 'eKOqdA']
const hidingClass = ['XDqkJA', 'bArFXw']

function modify(
    element: HTMLElement,
    tempClasses: string[],
    finalClasses: string[],
    cb: () => void = () => {}
) {
    tempClasses.forEach(cls => {
        element.classList.add(cls);
    })
    finalClasses.forEach(cls => {
        element.classList.remove(cls);
    })
    setTimeout(() => {
        tempClasses.forEach(cls => {
            element.classList.remove(cls);
        })
        finalClasses.forEach(cls => {
            element.classList.add(cls);
        })
        cb();
    }, 1000);

}

window.addEventListener('keypress', (event) => {
    console.log(event);
    if (event.key === 'q') {
        const btn = faceElement.querySelector('button');

        // showing ( is hidden )
        if (faceElement.classList.contains('hidden')) {
            modify(btn, showingClass, shownClass);
            faceElement.classList.remove('hidden')
            // hiding ( is shown )
        } else {
            modify(btn, hidingClass, shownClass, () => {
                faceElement.classList.add('hidden')
            })
        }

    }
})