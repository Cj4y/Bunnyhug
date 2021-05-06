import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import Checkout from './Checkout';

const setUp = (props={}) => {
    const component = shallow(<Checkout {...props}/>);
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
        const header = findByTestAttr(component, '.checkout');
        expect(header.length).toBe(1);
    });

    //cart
    it('Should have a cart',()=>{
        const cart = findByTestAttr(component, '.cart');
        expect(cart.length).toBe(1);
    });

    //checkoutHeader
    it('Should have a header',()=>{
        const checkoutHeader = findByTestAttr(component, '.checkoutHeader');
        expect(checkoutHeader.length).toBe(1);
    });

    it('Should have a continue to shop button',()=>{
        const continueShop = findByTestAttr(component, 'continueShop');
        expect(continueShop.length).toBe(1);
    });

    it('Should have a checkout button',()=>{
        const checkoutbtn = findByTestAttr(component, 'checkoutbtn');
        expect(checkoutbtn.length).toBe(1);
    });


    //test props
    describe('Have props', () => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                total: '$$Test total'
            }
            wrapper = setUp();
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'total');
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
            const component = findByTestAttr(wrapper, 'err');
            expect(component.length).toBe(0);
        });
    });
});