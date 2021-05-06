import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import VerticalNav from './VerticalNav';

const setUp = (props={}) => {
    const component = shallow(<VerticalNav {...props}/>);
    return component;
}


describe('VerticalNav Component',() =>{
    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    //basic tests
    //first div class
    it('Should render without errors',()=>{
        const verticalNav = findByTestAttr(component, 'verticalNav');
        expect(verticalNav.length).toBe(1);
    });
    it('Should render menu without errors',()=>{
        const menu = findByTestAttr(component, 'menu');
        expect(menu.length).toBe(1);
    });


    //test no props
    describe('Have NO props', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });
        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'verticalNav');
            expect(component.length).toBe(0);
        });
    });
});