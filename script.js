replaceText(document.body);

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    }
    else if (element.nodeType === Text.TEXT_NODE){
        element.textContent = element.textContent.replace(/corona/gi, 'BLACKLISTED WORD')
        element.textContent = element.textContent.replace(/covid/gi, 'BLACKLISTED WORD')
        element.textContent = element.textContent.replace(/virus/gi, 'BLACKLISTED WORD')
        element.textContent = element.textContent.replace(/pandemic/gi, 'BLACKLISTED WORD')
    }
}