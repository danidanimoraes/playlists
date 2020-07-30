import React, { Component } from "react";
import "./App.scss";
import FeaturedPlaylists from "./components/featured-playlists";
import spotifyLogo from "./resources/spotify-logo.png";
import ifoodLogo from "./resources/ifood-logo.PNG";

class App extends Component {
  state = {
    playlists: [],
    filteredPlaylists: [],
    filters: {},
    inputValue: "",
    filterHidden: true,
  };

  componentDidMount() {
    this.getPlaylistsFromAPI();

    fetch("http://www.mocky.io/v2/5a25fade2e0000213aa90776")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          filters: json.filters
        })
      });

    window.selects = {
      country: {},
      locale: {},
      limit: 20,
      offset: 0
    }

    // Refresh every 30 seconds
    setInterval(this.getPlaylistsFromAPI.bind(this, window.selects), 30000)
  }

  render() {
    return (
      <div className="app">
        <header>
          <img src={spotifyLogo} alt="spotify logo" width="100" />
          <span className="app-name"> SPOT<span className="orange">IF</span><span className="red">OOD</span></span>
          <img src={ifoodLogo} alt="ifood logo" width="100" className="ifood-logo" />
        </header>
        <div className="app-body">
          <FeaturedPlaylists
            playlists={this.state.playlists}
            filteredPlaylists={this.state.filteredPlaylists}
            filters={this.state.filters}
            inputValue={this.state.inputValue}
            onSearchPlaylist={this.onSearchPlaylist}
            getPlaylistsFromAPI={this.getPlaylistsFromAPI}
            filterHidden={this.state.filterHidden}
            toggleSearchClass={this.toggleSearchClass}
          />
        </div>
        <footer className="footer">
          Data provided by Spotify.
        </footer>
      </div>
    );
  }

  getPlaylistsFromAPI = (parameters) => {
    let default_url = "https://api.spotify.com/v1/browse/featured-playlists";
    let new_url = default_url;
    let hasParam = false;

    if (parameters) {
      for (let parameter in parameters) {
        if (parameter !== "" && parameters[parameter].value && parameters[parameter].value !== "") {
          if (!hasParam) {
            new_url = new_url + "?";
          }
          hasParam = true;
          new_url = `${new_url}&${parameter}=${parameters[parameter].value}`
        }
      }
    }

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(process.env.REACT_APP_PUBLIC_KEY + ':' + process.env.REACT_APP_PRIVATE_KEY).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: ["grant_type=client_credentials"]
    })
      .then((response) => response.json())
      .then((json) => {
        fetch(new_url, {
          method: "GET",
          headers: {
            "Authorization": json.token_type + " " + json.access_token
          }
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json()
            }
            let errorMessage = "Error while processing the request.";
            switch (response.status) {
              case 400:
                errorMessage = errorMessage.concat(" Try choosing different options for your search.");
                break;
              case 404:
                errorMessage = "No results found.";
                break;
              default:
                break;
            }
            return { playlists: { items: [], errorMessage: errorMessage } }
          })
          .then((results) => this.setState({
            playlists: results.playlists,
            filteredPlaylists: results.playlists,
          }))
      })
      .catch(console.log);
  }

  onSearchPlaylist = (event) => {
    let searchKey = event.target.value;
    this.setState({ inputValue: searchKey });

    if (searchKey.length === 0) {
      this.setState({ filteredPlaylists: this.state.playlists });
    } else {
      const foundPlaylists = this.state.playlists.items.filter((playlist) =>
        playlist.name.toLowerCase().includes(searchKey.toLowerCase()));

      if (foundPlaylists.length > 0) {
        this.setState({
          filteredPlaylists: {
            items: foundPlaylists
          },
        });
      }
      else {
        this.setState({
          filteredPlaylists: {
            items: [],
            errorMessage: "No results found."
          },
        });
      }

    }
  };

  toggleSearchClass = () => {
    this.setState({ filterHidden: !this.state.filterHidden });
  };
}
export default App;
