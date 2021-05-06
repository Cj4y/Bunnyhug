import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import PaymentDetails from './PaymentDetails';

const setUp = (props={}) => {
    const component = shallow(<PaymentDetails {...props}/>);
    return component;
}


describe('PaymentDetails Component',() =>{
    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    //basic tests
    //first div class
    it('Should render without errors',()=>{
        const paymentDetails = findByTestAttr(component, 'paymentDetails');
        expect(paymentDetails.length).toBe(1);
    });


    it('Should be form group',()=>{
        const group = findByTestAttr(component, 'group');
        expect(group.length).toBe(1);
    });

    //test props
    describe('Have props', () => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                line1: 'test line1',
                line2: 'test line2',
                city: 'test line3',
                state: 'test state',
                postal_code: 'test postal code',
                country: 'test country',
                total: 'test total',
                itemCount: 'test item count',
                cartItems:'test cart items'
            }
            wrapper = setUp();
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'paymentDetails');
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
            const component = findByTestAttr(wrapper, 'configCardElement');
            expect(component.length).toBe(0);
        });
    });
});