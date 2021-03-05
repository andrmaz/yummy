import React, { lazy, memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import { SimpleGrid, Alert, AlertIcon, Spinner } from '@chakra-ui/react';

const CardItem = lazy(() => import('./CardItem'));

// Check on props change
export function areEqual(prevProps, nextProps){
    if (prevProps === nextProps) {
        return true;
    } else {
        return false;
    }
};

const ListItems = ({ results }) => (
    <Suspense  
        fallback={
        <Spinner
            label='Loading'
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            pos='absolute'
            top='50%'
            left='50%'
        />
        }
    >
        <SimpleGrid minChildWidth="300px" spacing="5px">
            {
                !results ?
                <Alert status="info">
                    <AlertIcon />
                    Welcome to Yummy. Let&apos;s start searching!
                </Alert> :
                (
                    results?.count > 0 ?
                    results.hits.map(({recipe}) => (
                        <CardItem key={recipe.label} recipe={recipe} />
                    )) : 
                    <Alert status="warning">
                        <AlertIcon />
                        No items were found matching your search request .. Please retry
                    </Alert>
                )
            }
        </SimpleGrid>
    </Suspense>
);

ListItems.propTypes = {
    results: PropTypes.object
};

export default memo(ListItems, areEqual);
