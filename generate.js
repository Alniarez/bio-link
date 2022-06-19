var counter = 1;

function addRow(){
    console.log('Adding row')

    let name  = document.createElement('input')
    name.setAttribute('name', `name-${counter}`)
    name.setAttribute('required', '');

    let link  = document.createElement('input')
    link.setAttribute('link', `link-${counter}`)
    name.setAttribute('required', '');

    let button  = document.createElement('button')
    button.setAttribute('type', `button`)

    button.innerHTML = 'X'
    button.addEventListener("click", deleteRow)
    // button.setAttribute('deletes', counter)

    let entry = document.createElement('div')
    entry.classList.add('entry')
    entry.setAttribute('id', `entry-${counter}`)

    entry.appendChild(name)
    entry.appendChild(link)
    entry.appendChild(button)

    document.getElementById('entries').appendChild(entry)

    counter++
}

function deleteRow(event){
    let button = event.originalTarget || event.explicitOriginalTarget || event.srcElement

    button?.parentNode?.parentNode?.removeChild(button?.parentNode)

    /*
    let deletes = !!button.getAttribute('deletes')

    if(deletes){
        let entry = document.getElementById(`entry-${deletes}`) 
        console.dir(entry)
        document.removeChild(entry)
    }
    */
}

function generate(form){
    console.log('Generating')

    console.dir(form)
}

console.log('I am ready')