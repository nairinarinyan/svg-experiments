const layersCount = 4;
const itemsPerLayer = 4;
const targetSVGGroups = [];

fetch('/svgs/yay.svg')
    .then(r => r.text())
    .then(source => {
        buildStructure(source);
        initButton();
    });


function initButton() {
    const button = document.getElementById('button');
    let drawing = false;

    button.addEventListener('click', () => {
        !drawing ? animator.draw(targetSVGGroups) : animator.stop();
        drawing = !drawing;
    });
}

function buildStructure(source) {
    let layers = layersCount;
    let items = itemsPerLayer;

    while(layers--) {
        const wrapper = createWrapper();
        while(items--) {
            const svgEl = createSVG(source, wrapper);
            targetSVGGroups.push(svgEl.childNodes[0]);
        }
        items = itemsPerLayer;
    }
}

function createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('svg-wrapper');
    document.body.appendChild(wrapper);
    return wrapper;
}

function createSVG(source, wrapper) {
    const el = document.createElement('div');
    el.innerHTML = source;
    wrapper.appendChild(el);
    return el.childNodes[0];
}
