import { deleteParticipant } from './fetch-utils.js';
import { displayWorkshops } from './workshops/workshops.js';
import { moveParticipant } from './fetch-utils.js';

export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.classList.add('workshop');
    div.textContent = workshop.name;
    div.id = workshop.id;
    div.addEventListener('drop', async (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const dropParticipant = document.getElementById(id);
        e.target.append(dropParticipant);
        dropParticipant.classList.remove('hide');
        const dropped = { workshop_id: div.id, id: id };
        await moveParticipant(dropped);
    });
    div.addEventListener('dragenter', (e) => {
        e.preventDefault();
    });
    div.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    for (let participant of workshop.participants) {
        const p = document.createElement('p');
        p.textContent = participant.name + ' - ' + participant.contact_info;
        p.classList.add('render');
        p.draggable = true;
        p.id = participant.id;
        p.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            setTimeout(() => {
                e.target.classList.add('hide');
            }, 0);
        });
        p.addEventListener('click', async () => {
            await deleteParticipant(participant.id);
            await displayWorkshops();
        });
        div.append(p);
    }
    return div;
}
