'use strict'

const square = document.querySelector('.square-body');
const btnReset = document.querySelector('.btn-reset');

let blocks;
let indexCurrentBlock;
let textCurrentBlock;
let indexNextBlock;
let textNextBlock;

const getIndexElement = (elems, item) => {
    let result;

    elems.forEach((elem, index) => {
        if (elem === item) {
            result = index
        }
    });

    return result
}

square.addEventListener('click', (e) => {
    blocks = square.querySelectorAll('.block')

    if (e.target.closest('.left')) {
        indexCurrentBlock = getIndexElement(blocks, e.target.closest('.block'));
        indexNextBlock = indexCurrentBlock - 1;

        if (indexNextBlock < 0) {
            return
        }

        textCurrentBlock = blocks[indexCurrentBlock].children[0].textContent;
        textNextBlock = blocks[indexNextBlock].children[0].textContent;

        blocks[indexCurrentBlock].children[0].textContent = textNextBlock;
        blocks[indexNextBlock].children[0].textContent = textCurrentBlock;
    };

    if (e.target.closest('.right')) {
        indexCurrentBlock = getIndexElement(blocks, e.target.closest('.block'));
        indexNextBlock = indexCurrentBlock + 1;

        if (indexNextBlock >= blocks.length) {
            return
        }

        textCurrentBlock = blocks[indexCurrentBlock].children[0].textContent;
        textNextBlock = blocks[indexNextBlock].children[0].textContent;

        blocks[indexCurrentBlock].children[0].textContent = textNextBlock;
        blocks[indexNextBlock].children[0].textContent = textCurrentBlock;
    }

    if (e.target.closest('.top')) {
        indexCurrentBlock = getIndexElement(blocks, e.target.closest('.block'));
        indexNextBlock = indexCurrentBlock - 5;

        if (indexNextBlock < 0) {
            return
        }

        textCurrentBlock = blocks[indexCurrentBlock].children[0].textContent;
        textNextBlock = blocks[indexNextBlock].children[0].textContent;

        blocks[indexCurrentBlock].children[0].textContent = textNextBlock;
        blocks[indexNextBlock].children[0].textContent = textCurrentBlock;
    }

    if (e.target.closest('.bottom')) {
        indexCurrentBlock = getIndexElement(blocks, e.target.closest('.block'));
        indexNextBlock = indexCurrentBlock + 5;

        if (indexNextBlock >= blocks.length) {
            return
        }

        textCurrentBlock = blocks[indexCurrentBlock].children[0].textContent;
        textNextBlock = blocks[indexNextBlock].children[0].textContent;

        blocks[indexCurrentBlock].children[0].textContent = textNextBlock;
        blocks[indexNextBlock].children[0].textContent = textCurrentBlock;
    }
});

btnReset.addEventListener('click', () => {
    const arrBlocks = []

    square.childNodes.forEach((elem) => {
        if (elem.nodeName === "DIV") {
            arrBlocks.push(elem)
        }
    })

    arrBlocks.forEach((elem, index) => {
        elem.children[0].textContent = index + 1
    })
})