import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Input } from '@chakra-ui/react';

const SearchInput = ({ control, errors }) => {
    return (
        <Controller
            name="input"
            data-testid="a"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ onChange, value }) => 
                <Input 
                    id='input'
                    onChange={onChange} 
                    value={value} 
                    name='input'
                    pr='4.5rem'
                    type='text'
                    variant='outline'
                    placeholder='Enter an ingredient'
                    isRequired={true}
                    errorBorderColor ='red.500'
                    isInvalid={errors.input ? true : false}
                />
            }
        />
    );
};

SearchInput.propTypes = {
    control: PropTypes.object,
    errors: PropTypes.object,
};

export default SearchInput;
