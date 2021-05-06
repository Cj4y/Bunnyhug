import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import RecoverEmail from './RecoverEmail';

const setUp = (props={}) => {
    const component = shallow(<RecoverEmail {...props}/>);
    return component;
}


describe('RecoverEmail Component',() =>{

    //set up tests
    let component;
    beforeEach(()=>{
        component = setUp();
    });


    it('Should render without errors',()=>{
        const formWrapper = findByTestAttr(component, 'formWrapper');
        expect(formWrapper.length).toBe(1);
    });
    it('Should render links',()=>{
        const links = findByTestAttr(component, 'links');
        expect(links.length).toBe(1);
    });
    it('Should render email',()=>{
        const email = findByTestAttr(component, 'email');
        expect(email.length).toBe(1);
    });

});