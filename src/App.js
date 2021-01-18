import React, { Component } from 'react';
import { Container} from '@chakra-ui/react';
import Header from './components/Header';
import SearchInput from './components/SearchInputs';
import ListItems from './components/ListItems';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      results : null,
    };
  }

  handleChange(data) {
    this.setState({ results: data });
  };

  render(){
    return (
      <Container h='100vh' maxW='1200px' mb='10vh'>
        <Header />
        <SearchInput 
          handleChange={this.handleChange}
        />
        <ListItems 
          results={this.state.results}
        />
      </Container>
    );
  };
};

export default App;
