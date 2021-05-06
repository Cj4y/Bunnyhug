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
        const productCard = findByTestAttr(component, 'productCard');
        expect(productCard.length).toBe(1);
    });
    it('Should render a hero',()=>{
        const hero = findByTestAttr(component, 'hero');
        expect(hero.length).toBe(1);
    });
    it('Should render product details',()=>{
        const productDetails = findByTestAttr(component, 'productDetails');
        expect(productDetails.length).toBe(1);
    });
    it('Should render a add to cart button',()=>{
        const hero = findByTestAttr(component, 'addToCart');
        expect(hero.length).toBe(1);
    });
    it('Should render a description',()=>{
        const hero = findByTestAttr(component, 'desc');
        expect(hero.length).toBe(1);
    });

});