import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatuse from './ProfileStatus';

test('callback shoud be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatuse status="it-sergio.com" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1); // у mockCallback вызывает спец свойства mock.calls
    //которые говорят сколько раз они были вызваны
})

// test('input after clicking will jump to span', () => {
//     const component = create(<ProfileStatuse status="it-sergio.com" />);
//     const root = component.root;
//     let span = root.findByType('span'); //нашли спан
//     span.props.onClick(); //кликнули по нем
//     let input = root.findByType('input') // спан исчез и появился инпут
//     expect(input.props.value).toBe("it-sergio.com"); // и в этом инпуте "it-sergio.com"
// })

// test('after creation <input> should not be displayed', () => {
//     const component = create(<ProfileStatuse status="it-sergio.com" />);
//     const root = component.root;
//     expect ( () => {
//         let input = root.findByType('input');
//     }).toThrow();
// })

// test('after creation <span> should be displayed', () => {
//     const component = create(<ProfileStatuse status="it-sergio.com" />);
//     const root = component.root;
//     let span = root.findByType('span');
//     expect(span.children[0]).toBe("it-sergio.com");
// })

// describe("ProfileStatusComponent", () => {
//   test("status from props should be in the state", () => {
//     const component = create(<ProfileStatuse status="it-sergio.com" />);
//     const instance = component.getInstance();
//     expect(instance.state.status).toBe("it-sergio.com");
//   });
// });
