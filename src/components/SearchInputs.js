import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { 
    Center,
    InputGroup, 
    Input, 
    InputRightElement, 
    Button, 
    Flex, 
    FormControl, 
    Select,
    FormHelperText,
    useColorMode,
} from '@chakra-ui/react';
// import dotenv configuration file
import '../config';

const app_id = process.env.REACT_APP_ID;
const app_key = process.env.REACT_APP_KEY;

const SearchInput = ({ handleChange }) => {

    // To manage color mode chakra exposes the useColorMode
    const { colorMode } = useColorMode();

    const { control, handleSubmit, watch, errors } = useForm({
		mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            input: '',
            to: 4,
            diet: 'balanced',
            health: 'tree-nut-free',
        }
    });

    const { input, to, diet, health }  = watch();

    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            const uri = `https://api.edamam.com/search?q=${input}&app_id=${app_id}&app_key=${app_key}&from=0&to=${to}&diet=${diet}&health=${health}`;
            const response = await fetch(uri, {
                method: 'GET',
                headers: {
                    'Content-Encoding': 'gzip',
                    'Cache-Control': 'no-cache'
                }
            });
            const data = await response.json();
            if (typeof data !== 'string'){
                handleChange(data);
            }
            console.log(data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <Center h="20vh" color={colorMode === 'light' ? 'black' : 'white'} minW='300px' maxW='500px' m='auto'>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
                <InputGroup size='md'>
                    <Controller
                        name="input"
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
                    <InputRightElement width='4.5rem'>
                        <Button 
                            h='1.75rem' 
                            size='sm'
                            variant='solid'
                            colorScheme='blue'
                            isDisabled={input.length < 2 ? true : false}
                            onClick={onSubmit}
                        >
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign='center' fontStyle='oblique' mb='0.5rem'>
                    Select the number of recipies, the diet and the type of meal
                </FormHelperText>
                <Flex justify='space-around' align='center'>
                    <Controller
                        name="to"
                        control={control}
                        defaultValue={4}
                        render={({ onChange, value }) => 
                            <Select 
                                id='to'
                                onChange={onChange} 
                                value={value} 
                                name='to'
                                size='xs' 
                                w='200px'
                                focusBorderColor='blue.500'
                            >
                                <option label={2} value={2} />
                                <option label={3} value={3} />
                                <option label={4} value={4} />
                                <option label={5} value={5} />
                                <option label={6} value={6} />
                            </Select>
                        }
                    />
                    <Controller
                        name="diet"
                        control={control}
                        defaultValue='balanced'
                        render={({ onChange, value }) => 
                        <Select 
                            id='diet'
                            onChange={onChange} 
                            value={value} 
                            name='diet'
                            size='xs' 
                            w='200px'
                            focusBorderColor='blue.500'
                        >
                            <option label='balanced' value='balanced' />
                            <option label='high-protein' value='high-protein' />
                            <option label='high-fiber' value='high-fiber' />
                            <option label='low-fat' value='low-fat' />
                            <option label='low-carb' value='low-carb' />
                        </Select>
                        }
                    />
                    <Controller
                        name="health"
                        control={control}
                        defaultValue='tree-nut-free'
                        render={({ onChange, value }) => 
                        <Select 
                            id='health'
                            onChange={onChange} 
                            value={value} 
                            name='health'
                            size='xs' 
                            w='200px'
                            focusBorderColor='blue.500'
                        >
                            <option label='tree-nut-free' value='tree-nut-free' />
                            <option label='peanut-free' value='peanut-free' />
                            <option label='vegetarian' value='vegetarian' />
                        </Select>
                        }
                    />
                </Flex>
            </FormControl>
        </Center>
    );
};

SearchInput.propTypes = {
    handleChange: PropTypes.func,
};

export default SearchInput;
