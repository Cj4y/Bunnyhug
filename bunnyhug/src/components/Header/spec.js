import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import Header from './Header';

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}


describe('Header Component',() =>{
    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    //basic tests
    //first div class
    it('Should render without errors',()=>{
        const header = findByTestAttr(component, '.header');
        expect(header.length).toBe(1);
    });

    //logo
    it('Should a logo',()=>{
        const logo = findByTestAttr(component, '.logo');
        expect(logo.length).toBe(1);
    });

    //test props
    describe('Have props', () => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp();
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, '');
            expect(component.length).toBe(1);
        });

    });

    //test no props
    describe('Have NO props', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });
        it('Should not render', () => {
            const component = findByTestAttr(wrapper, '');
            expect(component.length).toBe(0);
        });
    });
});