import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import OrderDetails from './OrderDetails';

const setUp = (props={}) => {
    const component = shallow(<OrderDetails {...props}/>);
    return component;
}


describe('Order Details Component',() =>{
    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    //basic tests
    //first div class
    it('Should render without errors',()=>{
        const orderDetails = findByTestAttr(component, '.orderDetails');
        expect(orderDetails.length).toBe(1);
    });

    //cart
    it('Should have a row',()=>{
        const row = findByTestAttr(component, '.row');
        expect(row.length).toBe(1);
    });


});