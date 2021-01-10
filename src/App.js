import React from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.components'
import reactLogo from './logo.svg'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({characters: users}))
  }

  onSearchChange = e => {
    this.setState({searchField: e.target.value})
  }

  render () {
    const { characters, searchField } = this.state
    const filteredCharacters = characters.filter(character => 
      character.username.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Searching Cats!</h1>
        <SearchBox 
          placeholder="Find Your Cat Here 🐈"
          onSearchChange={this.onSearchChange}
        />
        <CardList characters={filteredCharacters} />
        <footer className="footer">
          <p>Made with <img alt="reactjs.org" src={reactLogo} width="34px" height="34px" /> React</p>
          <p>Copyright &copy; 2021 &nbsp;<a href="mailto:polyana.pimenta@gmail.com">Polyana Pimenta</a></p>
        </footer>
      </div>
    )
  }
}

export default App