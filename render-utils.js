export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.textContent = workshop.name;
    for (let participant of workshop.participants) {
        const p = document.createElement('p');
        p.textContent = participant.name;
        div.append(p);
    }
    return div;
}