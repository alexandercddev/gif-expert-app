/**
 * @author: alexandercd
 * @date: 24/septiembre/2021
 * @description: 
**/
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test <GifGrid />', () => {
    const category = 'back to the future'; 
    
    test('should show <GifGrid /> success', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });   
        const wrapper = shallow( <GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot();
    }); 

    test('should show items when load images useFetchGif', () => {
        const data = [
            {
                id: '12324',
                title: category,
                url: 'https://localhost/image.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            data,
            loading: false
        }); 
        const wrapper = shallow( <GifGrid category={category} />);
        //expect( wrapper ).toMatchSnapshot();
        
        expect( wrapper.find('span').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( data.length );
    });
    
    
});
