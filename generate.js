var counter = 0;

function addRow(){
    console.log('Adding row')

    let name  = document.createElement('input')
    name.setAttribute('name', `name-${counter}`)
    name.setAttribute('required', '');

    let link  = document.createElement('input')
    link.setAttribute('name', `link-${counter}`)
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

function validate(){
    return true;
}

function generate(){
    console.log('Generating')
    let title;
    let description;
    let imageUrl;
    let links = [];
    let names = [];

    const formData = new FormData(document.querySelector('form'))
    for (var pair of formData.entries()) {
        let key = pair[0];
        let value = pair[1];
        if(key === 'title')
            title = value

        if(key === 'description')
            description = value

        if(key === 'url')
            imageUrl = value

        if(key.startsWith("name-")){
            let index = key.substring(5)
            names[parseInt(index)] = value
        }

        if(key.startsWith("link-")){
            let index = key.substring(5)
            links[parseInt(index)] = value
        }
        
        renderhtml({
            title: title,
            description: description,
            imageUrl: imageUrl,
            links: links,
            names: names
        })
    }
}

function renderhtml(parameters) {
    console.dir(parameters)
}

console.log('I am ready')
