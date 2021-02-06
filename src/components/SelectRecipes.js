import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Flex, FormLabel, Select} from '@chakra-ui/react';

const SelectRecipes = ({ control }) => {
    return (
        <Controller
            name="to"
            data-testid='b'
            control={control}
            defaultValue={4}
            render={({ onChange, value }) =>
                <Flex direction='column'> 
                    <FormLabel textAlign='center' pt='5px' >Recipes</FormLabel>
                    <Select 
                        id='to'
                        onChange={onChange} 
                        value={value} 
                        name='to'
                        size='xs' 
                        w='200px'
                        m='5px'
                        variant="filled"
                        focusBorderColor='blue.500'
                    >
                        <option label={2} value={2} />
                        <option label={3} value={3} />
                        <option label={4} value={4} />
                        <option label={5} value={5} />
                        <option label={6} value={6} />
                    </Select>
                </Flex>
            }
        />
    );
};

SelectRecipes.propTypes = {
    control: PropTypes.object,
};

export default SelectRecipes;
