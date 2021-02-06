import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Badge, List, ListItem, useColorMode } from '@chakra-ui/react';

// Check on props change
export function areEqual(prevProps, nextProps){
    if (prevProps === nextProps) {
        return true;
    } else {
        return false;
    }
};

const CardItem = ({ recipe }) => {

    // To manage color mode chakra exposes the useColorMode
    const { colorMode } = useColorMode();

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor={colorMode === 'light' ? 'royalblue' : 'unset'}>
            <Image src={recipe.image} alt='Recipe' m='auto' />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                    {recipe.dietLabels[0]}
                </Badge>
                <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                >
                    {recipe.totalTime} minutes &bull; {recipe.calories.toFixed(0)} cal
                </Box>
                </Box>

                <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                >
                {recipe.label}
                </Box>

                <List>
                    {
                        recipe.ingredientLines.map((ingredient, index) => (
                            <ListItem key={index}>
                                {ingredient}
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Box>
    );
};

CardItem.propTypes = {
    recipe: PropTypes.object
};

export default memo(CardItem, areEqual);