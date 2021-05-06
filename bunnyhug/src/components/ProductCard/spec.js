import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import ProductCard from './ProductCard';

const setUp = (props={}) => {
    const component = shallow(<ProductCard {...props}/>);
    return component;
}


describe('ProductCard Component',() =>{

    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });


    it('Should render without errors',()=>{
        const header = findByTestAttr(component, '.header');
        expect(header.length).toBe(1);
    });
    it('Should a logo',()=>{
        const logo = findByTestAttr(component, '.logo');
        expect(logo.length).toBe(1);
    });

});