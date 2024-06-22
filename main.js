let selectedElement = null;
const createdElements = [];

function addComponent(type) {
    let element;
    switch (type) {
        case 'button':
            element = document.createElement('button');
            element.innerText = 'Button';
            element.className = 'btn btn-primary';
            break;
        case 'input':
            element = document.createElement('input');
            element.className = 'form-control';
            break;
        case 'div':
            element = document.createElement('div');
            element.innerText = 'Div Container';
            element.className = 'div-container';
            break;
        case 'card':
            element = document.createElement('div');
            element.className = 'card';
            element.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Card Title</h5>
                    <p class="card-text">Card content goes here.</p>
                </div>`;
            break;
        case 'navbar':
            element = document.createElement('nav');
            element.className = 'navbar navbar-expand-lg navbar-light bg-light';
            element.innerHTML = `
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>`;
            break;
        case 'ul':
            element = document.createElement('ul');
            element.className = 'list-group';
            element.innerHTML = `
                <li class="list-group-item">Item 1</li>
                <li class="list-group-item">Item 2</li>
                <li class="list-group-item">Item 3</li>`;
            break;
        case 'ol':
            element = document.createElement('ol');
            element.className = 'list-group';
            element.innerHTML = `
                <li class="list-group-item">Item 1</li>
                <li class="list-group-item">Item 2</li>
                <li class="list-group-item">Item 3</li>`;
            break;
        case 'li':
            element = document.createElement('li');
            element.className = 'list-group-item';
            element.innerText = 'List Item';
            break;
        case 'p':
            element = document.createElement('p');
            element.innerText = 'Paragraph Text';
            element.className = 'paragraph-text';
            break;
        case 'h1':
            element = document.createElement('h1');
            element.innerText = 'Heading 1';
            element.className = 'custom-heading';
            break;
        case 'h2':
            element = document.createElement('h2');
            element.innerText = 'Heading Level 2';
            element.className = 'custom-heading';
            break;
        case 'h3':
            element = document.createElement('h3');
            element.innerText = 'Heading Level 3';
            element.className = 'custom-heading';
            break;
        case 'h4':
            element = document.createElement('h4');
            element.innerText = 'Heading Level 4';
            element.className = 'custom-heading';
            break;
        case 'h5':
            element = document.createElement('h5');
            element.innerText = 'Heading Level 5';
            element.className = 'custom-heading';
            break;
        case 'h6':
            element = document.createElement('h6');
            element.innerText = 'Heading Level 6';
            element.className = 'custom-heading';
            break;
        case 'span':
            element = document.createElement('span');
            element.innerText = 'Highlighted Text';
            element.className = 'highlighted-text';
            break;
        case 'a':
            element = document.createElement('a');
            element.href = 'https://example.com';
            element.innerText = 'Visit Example';
            break;
        case 'img':
            element = document.createElement('img');
            element.src = 'image.jpg';
            element.alt = 'Description of the image';
            break;
        case 'table':
            element = document.createElement('table');
            element.innerHTML = `
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                </tr>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                </tr>`;
            break;
    }
    element.onclick = () => selectElement(element);
    document.getElementById('preview').appendChild(element);
    createdElements.push(element);
    selectElement(element);
    updateCode();
}

function selectElement(element) {
    if (selectedElement) {
        selectedElement.style.border = '';
    }
    selectedElement = element;
    selectedElement.style.border = '2px solid blue';
    updateCode();
}

function deleteSelectedElement() {
    if (selectedElement) {
        selectedElement.remove();
        const index = createdElements.indexOf(selectedElement);
        if (index !== -1) {
            createdElements.splice(index, 1);
        }
        selectedElement = null;
        updateCode();
    }
}

function changeStyle(property, value) {
    if (selectedElement) {
        selectedElement.style[property] = value;
        updateCode();
    }
}

function changeBootstrapClass(prefix, value) {
    if (selectedElement) {
        const classesToRemove = [];
        selectedElement.classList.forEach(cls => {
            if (cls.startsWith(prefix)) {
                classesToRemove.push(cls);
            }
        });
        classesToRemove.forEach(cls => {
            selectedElement.classList.remove(cls);
        });
        if (value) {
            selectedElement.classList.add(`${prefix}-${value}`);
        }
        updateCode();
    }
}

function changeTransform(transformType, value) {
    if (selectedElement) {
        const currentTransform = selectedElement.style.transform || '';
        const newTransform = currentTransform.replace(new RegExp(`${transformType}\\([^)]+\\)`, 'g'), '').trim();
        selectedElement.style.transform = `${newTransform} ${transformType}(${value})`.trim();
        updateCode();
    }
}

function changePlaceholder(value) {
    if (selectedElement && selectedElement.tagName === 'INPUT') {
        selectedElement.placeholder = value;
        updateCode();
    }
}

function copyCode() {
    const codeElement = document.getElementById('code');
    codeElement.value = document.getElementById('preview').innerHTML;
    codeElement.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
}

function updateCode() {
    const codeElement = document.getElementById('code');
    codeElement.value = document.getElementById('preview').innerHTML;
}

function updatePreview() {
    document.getElementById('preview').innerHTML = document.getElementById('code').value;
}
