const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputSize)

function onInputSize() {
    const spanSize = Number(refs.input.value);
    console.log(spanSize);
    refs.span.style.fontSize = `${spanSize}px`;
    return refs.span.style.fontSize;
}
