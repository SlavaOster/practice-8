let array = [
    { label: 'Один' },
    { label: "Два" },
    { label: "Три" },
    { label: "Четыре" }
]

function createSelectEl(arr, str) {
    const select = document.body.appendChild(document.createElement('select'));

    arr.forEach(function(el) {
        const option = document.createElement('option');
        option.innerText = Object.values(el);
        select.appendChild(option)
        if (option.value === str) {
            option.setAttribute('selected', true);
        }
    });

    return select
}


createSelectEl(array, 'Три')