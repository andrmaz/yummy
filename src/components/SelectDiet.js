import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Flex, FormLabel, Select} from '@chakra-ui/react';

const SelectDiet = ({ control }) => {
    return (
        <Controller
            name="diet"
            data-testid='c'
            control={control}
            defaultValue='balanced'
            render={({ onChange, value }) => 
            <Flex direction='column'>
                <FormLabel textAlign='center' pt='5px' >Diet</FormLabel>
                <Select 
                    id='diet'
                    onChange={onChange} 
                    value={value} 
                    name='diet'
                    size='xs' 
                    w='200px'
                    m='5px'
                    variant="filled"
                    focusBorderColor='blue.500'
                >
                    <option label='balanced' value='balanced' />
                    <option label='high-protein' value='high-protein' />
                    <option label='high-fiber' value='high-fiber' />
                    <option label='low-fat' value='low-fat' />
                    <option label='low-carb' value='low-carb' />
                </Select>
            </Flex>
            }
        />
    );
};

SelectDiet.propTypes = {
    control: PropTypes.object,
};

export default SelectDiet;
