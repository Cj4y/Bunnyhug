import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import OrderHistory from './OrderHistory';

const setUp = (props={}) => {
    const component = shallow(<History {...props}/>);
    return component;
}


describe('Order History Component',() =>{
    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    //basic tests
    //first div class
    it('Should render without errors',()=>{
        const orderHist = findByTestAttr(component, 'orderHist');
        expect(orderHist.length).toBe(1);
    });

    //cart
    it('Should have a row',()=>{
        const row = findByTestAttr(component, 'row');
        expect(row.length).toBe(1);
    });

});