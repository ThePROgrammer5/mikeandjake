async function createVid(json) {
    const jsonData = await response.json();
    const container = document.getElementById('vids');

    jsonData.forEach(item => {

        div = document.createElement('div')
        div.classList.add('vid')

        const a = document.createElement('a')
        a.style.cursor = 'pointer'
        a.style.textDecoration = 'none'
        a.href = item.href
        div.appendChild()

        const img = document.createElement('img')
        img.src = item.img
        a.appendChild(img)

        const h4 = document.createElement('h4')
        desc.classList.add('title')
        h4.textContent = item.title
        a.appendChild(h4)

        const desc = document.createElement('img')
        desc.classList.add('description')
        desc.textContent = item.img
        a.appendChild(desc)

        container.appendChild(div)
    });
}

createVid(vids.json)