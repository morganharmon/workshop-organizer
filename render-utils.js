import { deleteParticipant } from './fetch-utils.js';
import { displayWorkshops } from './workshops/workshops.js';

export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.classList.add('workshop');
    div.textContent = workshop.name;
    for (let participant of workshop.participants) {
        const p = document.createElement('p');
        p.textContent = participant.name + ' - ' + participant.contact_info;
        p.classList.add('render');
        p.addEventListener('click', async () => {
            await deleteParticipant(participant.id);
            await displayWorkshops();
        });
        div.append(p);
    }
    return div;
}
