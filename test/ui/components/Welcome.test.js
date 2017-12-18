const root = '../../src';

import React from 'react';
import {shallow} from 'enzyme';

import {Welcome} from '../../../src/components/Welcome';

describe('Welcome Component Test', () => {
    it('should render 1 <div> with give name', () => {
        const oWelcomeComp = shallow(<Welcome name='Siva'/>);
        expect(oWelcomeComp.find('div').length).toBe(1);
        expect(oWelcomeComp.text()).toBe('Hello Siva! Welcome to my website');
    });
});