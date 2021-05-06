import React from 'React';
import {shallow } from 'enzyme';
import { findByTestAttr} from '../../../Utils';
import Signup from './Signup';

const setUp = (props={}) => {
    const component = shallow(<Signup{...props}/>);
    return component;
}


describe('Signup Component',() =>{

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
    it('Should render displayName',()=>{
        const displayName = findByTestAttr(component, 'displayName');
        expect(displayName.length).toBe(1);
    });
    it('Should render email',()=>{
        const email = findByTestAttr(component, 'email');
        expect(email.length).toBe(1);
    });
    it('Should render password',()=>{
        const password = findByTestAttr(component, 'password');
        expect(password.length).toBe(1);
    });
    it('Should render confirmPassword',()=>{
        const confirmPassword = findByTestAttr(component, 'confirmPassword');
        expect(confirmPassword.length).toBe(1);
    });

});