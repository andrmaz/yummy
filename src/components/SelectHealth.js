import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Flex, FormLabel, Select} from '@chakra-ui/react';

const SelectHealth = ({ control }) => {
    return (
        <Controller
            name="health"
            data-testid='d'
            control={control}
            defaultValue='tree-nut-free'
            render={({ onChange, value }) => 
            <Flex direction='column'>
                <FormLabel textAlign='center' pt='5px' >Health</FormLabel>
                <Select 
                    id='health'
                    onChange={onChange} 
                    value={value} 
                    name='health'
                    size='xs' 
                    w='200px'
                    m='5px'
                    variant="filled"
                    focusBorderColor='blue.500'
                >
                    <option label='tree-nut-free' value='tree-nut-free' />
                    <option label='peanut-free' value='peanut-free' />
                    <option label='vegetarian' value='vegetarian' />
                </Select>
            </Flex>
            }
        />
    );
};

SelectHealth.propTypes = {
    control: PropTypes.object,
};

export default SelectHealth;
