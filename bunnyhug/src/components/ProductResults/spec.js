import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import ProductResults from './ProductResults';

const setUp = (props={}) => {
    const component = shallow(<ProductResults {...props}/>);
    return component;
}


describe('ProductResults Component',() =>{

    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });


    it('Should render without errors',()=>{
        const products = findByTestAttr(component, 'products');
        expect(products.length).toBe(1);
    });
    it('Should render one + productResults',()=>{
        const productResults = findByTestAttr(component, 'productResults');
        expect(productResults.length).toBe(1);
    });
    it('Should render a add to loadBtn',()=>{
        const hero = findByTestAttr(component, 'loadBtn');
        expect(hero.length).toBe(1);
    });

});