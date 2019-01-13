import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';



describe('<App/>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        const title = wrapper.find('h1');
        console.log(title.debug());
        expect(title.text()).toContain('Edit');
    });
})
