import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import ProductTile from './ProductTile';

const setUp = (props={}) => {
    const component = shallow(<ProductTile {...props}/>);
    return component;
}


describe('ProductTile Component',() =>{
    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    //basic tests
    //first div class
    it('Should render without errors',()=>{
        const tileOverlay = findByTestAttr(component, 'tileOverlay');
        expect(tileOverlay.length).toBe(1);
    });


    it('Should be product tile',()=>{
        const tile = findByTestAttr(component, 'tile');
        expect(tile.length).toBe(1);
    });

    //test props
    describe('Have props', () => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                hideTile: null,
                toggleTile: true,
                childern: 'test children size etc',
            }
            wrapper = setUp();
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'tileOverlay');
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
            const component = findByTestAttr(wrapper, 'tileOverlay');
            expect(component.length).toBe(0);
        });
    });
});