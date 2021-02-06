import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { apiCall } from '../api/apiCall';
import SelectRecipes from './SelectRecipes';
import SelectDiet from './SelectDiet';
import SelectHealth from './SelectHealth';
import { 
    Center,
    InputGroup, 
    InputRightElement, 
    Button, 
    Flex, 
    FormControl, 
    useColorMode,
} from '@chakra-ui/react';
// import dotenv configuration file
import '../config';
import SearchInput from './SearchInput';


const app_id = process.env.REACT_APP_ID;
const app_key = process.env.REACT_APP_KEY;


const FormFields = ({ onSearch }) => {

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

    // Check on props change
    const { input, to, diet, health }  = watch();

    
    const onSubmit = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Encoding': 'gzip',
                    'Cache-Control': 'no-cache'
                }
            };
            const uri = `https://api.edamam.com/search?q=${input}&app_id=${app_id}&app_key=${app_key}&from=0&to=${to}&diet=${diet}&health=${health}`;
            const data = await apiCall(uri, options);
            // if no data match the search request, return an object with count 0
            onSearch(data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <Center h="20vh" color={colorMode === 'light' ? 'black' : 'white'} minW='300px' maxW='500px' m='auto'>
            <FormControl onSubmit={handleSubmit(onSubmit)} isRequired='true' >
                <InputGroup size='md'>
                    <SearchInput control={control} errors={errors} />
                    <InputRightElement width='4.5rem'>
                        <Button 
                            id='button'
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
                <Flex justify='space-around'>
                    <SelectRecipes control={control} />
                    <SelectDiet control={control} />
                    <SelectHealth control={control} />
                </Flex>
            </FormControl>
        </Center>
    );
};

FormFields.propTypes = {
    onSearch: PropTypes.func,
};

export default FormFields;
