import { logout, addParticipant, getWorkshops } from '../fetch-utils.js';

const homeButton = document.getElementById('home');
const logoutButton = document.getElementById('logout');
const form = document.getElementById('form');
const select = document.getElementById('select');

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

logoutButton.addEventListener('click', async () => {
    await logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    await addParticipant({ name: data.get('name'), contact_info: data.get('contact'), workshop_id: data.get('select') });
    form.reset();
    window.location.href = '/';
});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = workshop.name;
        select.append(option);
    }
});