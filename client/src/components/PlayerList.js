import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import SearchForm from './SearchForm';
import Chart from './Chart';

class PlayerList extends React.Component {
    //because of testing included _isMounted = false because of async problem from app.testing
    _isMounted = false;

    constructor(props){
        super(props);
        this.state = {
            players: []
        }
    }
    componentDidMount() {
        axios
            .get("http://localhost:5000/api/players")
            .then(result => {
                this.setState({
                    players: result.data
                })
            
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    handleSubmit = event => {
        const value = event.target.searchInput.value;
        this.props.setSearch(value);
        event.preventDefault()
       
    }
    render(){
        return(
          <div className="players">
          <SearchForm handleSubmit={this.handleSubmit} search={this.props.search} setSearch={this.props.setSearch} />
          <Chart data={this.state.players} />
            {this.state.players.filter(player => {
                return player.name.toLowerCase().includes(this.props.search.toLowerCase()) || player.id.toString().includes(this.props.search);
            }).map(player =>
                <PlayerCard key={player.index} player={player} />
            )}
          </div>  
        )
  }
    
}
export default PlayerList;
