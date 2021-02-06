import React, { Component } from 'react';
import { Container} from '@chakra-ui/react';
import Header from './components/Header';
import FormFields from './components/FormFields';
import ListItems from './components/ListItems';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = { results : null };
  }

  onSearch(data) {
    this.setState({ results: data });
  };

  render(){
    const { results } = this.state;
    return (
      <Container h='100vh' maxW='1200px' mb='10vh'>
        <Header />
        <FormFields
          onSearch={this.onSearch}
        />
        <ListItems 
          results={results}
        />
      </Container>
    );
  };
};

export default App;
