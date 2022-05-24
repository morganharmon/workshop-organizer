import './example.test.js';
import { renderWorkshop } from '../render-utils.js';

const test = QUnit.test;

test('renderWorkshop should return a div with a workshop and its participants', (expect) => {
    const expected = '<div>painting<p>james</p></div>';
    const actual = renderWorkshop({ name: 'painting', participants: [{ name: 'james' }] });
    expect.equal(actual.outerHTML, expected);
});