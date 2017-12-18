import React from 'react';
import renderer from 'react-test-renderer';
import {Welcome} from '../../../src/components/Welcome';

describe('Welcome Component Snapshot test', () => {
    it('should render 1 <div> with given name property', () => {
        const oWelcomeComp = renderer.create(
            <Welcome name='Siva'/>
        );

        let tree = oWelcomeComp.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

