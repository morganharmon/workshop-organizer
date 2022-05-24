import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

const workshopsDiv = document.getElementById('workshops');

checkAuth();

const logoutButton = document.getElementById('logout');
const addParticipantButton = document.getElementById('add-participant');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const render = renderWorkshop(workshop);
        workshopsDiv.append(render);
    }
});

addParticipantButton.addEventListener('click', () => {
    window.location.href = '../addparticipant/index.html';
});