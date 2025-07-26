let contacts = [
    {
        addressed: "Davis",
        firstName: "Jolene",
        lastName: "Teagan",
        email: "",
        phone: "123-456-7890",
        street: "Eden 57684 Zena",
        postal: "",
        city: "",
        country: "India",
        labels: "Friends"
    }
];

function renderContacts() {
    const tbody = document.getElementById('contactsBody');
    tbody.innerHTML = "";
    contacts.forEach((c, idx) => {
        let address = `<span class="address-main">${c.addressed}</span>`;
        let secondary = `${c.street}${c.city?", "+c.city:""}${c.postal?" "+c.postal:""}${c.country?", "+c.country:""}`;
        if (secondary.trim()) {
            address += `<span class="address-secondary">${secondary}</span>`;
        }
        tbody.innerHTML += `<tr>
            <td>${idx+1}</td>
            <td>${address}</td>
            <td><span class="label-chip">${c.labels}</span></td>
            <td class="by-name">${c.firstName} ${c.lastName}</td>
            <td>${c.phone || ""}</td>
        </tr>`;
    });
}

const modal = document.getElementById('modal');
const addBtn = document.getElementById('addBtn');
const closeModal = document.getElementById('closeModal');
const addressForm = document.getElementById('addressForm');

addBtn.onclick = () => { modal.style.display = 'flex'; };
closeModal.onclick = () => { modal.style.display = 'none'; };
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

addressForm.onsubmit = function(e) {
    e.preventDefault();
    const fd = new FormData(addressForm);
    let obj = {};
    fd.forEach((val, key) => obj[key] = val);
    contacts.push(obj);
    renderContacts();
    modal.style.display = "none";
    addressForm.reset();
    addressForm.country.value = "India";
    addressForm.labels.value = "Family";
}

renderContacts();