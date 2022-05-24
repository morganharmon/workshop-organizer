import { deleteParticipant } from './fetch-utils.js';
import { displayWorkshops } from './workshops/workshops.js';

export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.textContent = workshop.name;
    for (let participant of workshop.participants) {
        const p = document.createElement('p');
        p.textContent = participant.name;
        p.addEventListener('click', async () => {
            await deleteParticipant(participant.id);
            await displayWorkshops();
        });
        div.append(p);
    }
    return div;
}
