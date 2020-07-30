import React from "react";
import "./featured-playlists.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faMinus, faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import noImage from "../resources/no-image.jpg";
import logo from "../resources/spotify-logo.png";
import Select from 'react-select';

const FeaturedPlaylists = (props) => {
    const currentPlaylists = props.filteredPlaylists.items || [];
    const filters = Array.from(props.filters) || [];

    const onSelect = (field, object) => {
        window.selects[field] = object;
        props.getPlaylistsFromAPI(window.selects);
    }
    const executeSearch = (event) => {
        props.onSearchPlaylist(event);
    }

    const englishLocaleNames = {
        "en_AU": "English (Australia)",
        "de_DE": "German",
        "pt_BR": "Portuguese (Brazil)",
        "fr_FR": "French",
        "en_US": "English (United States)",
        "es_AR": "Spanish (Argentina)"
    }

    const englishCountryNames = {
        "AU": "Australia",
        "DE": "Germany",
        "BR": "Brazil",
        "PT": "Portugal",
        "en_US": "United States",
        "RU": "Russia"
    }

    const customSelectStyle = {
        option: (provided, state) => ({
            ...provided,
            color: 'black',
            backgroundColor: state.isFocused ? 'rgb(63, 255, 36)' : 'rgb(28, 112, 17)'
        }),
        container: (provided) => ({
            ...provided,
            marginRight: '2rem',
        }),
        control: (provided) => ({
            ...provided,
            width: '100%',
            minWidth: '200px',
            border: '1px solid rgb(28, 112, 17)',
            backgroundColor: 'rgb(28, 112, 17)',
            boxShadow: 'none',
            borderColor: 'rgb(28, 112, 17)',
            '&:hover': {
                borderColor: 'rgb(28, 112, 17)'
            },
        }),
        valueContainer: (provided) => ({
            ...provided,
            width: '100%',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'black',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'black',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: 'black',
        }),
        indicatorContainer: (provided) => ({
            ...provided,
            color: 'black',
        }),
        Svg: (provided) => ({
            ...provided,
            fill: 'black',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'rgb(28, 112, 17)'
        })
    }

    let countryOptions = [];
    if (filters.filter((option) => option.id === "country").length > 0) {
        countryOptions.push({ value: "", label: "All" })
        filters.find((option) => option.id === "country").values.forEach((country) => countryOptions.push({
            value: country.value,
            label: englishCountryNames[country.value] || country.name
        }))
    }

    let localeOptions = [];
    if (filters.filter((option) => option.id === "locale").length > 0) {
        filters.find((option) => option.id === "locale").values.forEach((locale) => localeOptions.push({
            value: locale.value,
            label: englishLocaleNames[locale.value] || locale.name
        }))
    }

    let limitOptions = [
        { value: "1", label: "1" },
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "15", label: "15" },
        { value: "20", label: "20" },
        { value: "25", label: "25" },
        { value: "30", label: "30" },
        { value: "35", label: "35" },
        { value: "40", label: "40" },
        { value: "45", label: "45" },
        { value: "50", label: "50" },
    ];

    return (
        <div>
            <div className="search">
                <div>
                    <FontAwesomeIcon className="search-icon" icon={faSearch} name="search icon" />
                </div>
                <div>
                    <input
                        className="search-name"
                        type="text"
                        value={props.inputValue}
                        onChange={executeSearch}
                        placeholder="Search playlist by name"
                        name="search playlist by name"
                    />
                </div>
            </div>
            <div className="search filters-api">
                <button type="button" title="Show more filter options" className="btn more-btn" onClick={props.toggleSearchClass}>
                    <span className={`${props.filterHidden ? "show-el-inline" : "hide-el"}`}>
                        <FontAwesomeIcon className="plus-icon" icon={faPlus} /><span className="more">Click for more filter options</span>
                    </span>
                    <span className={`${props.filterHidden ? "hide-el" : "show-el-inline"}`}>
                        <FontAwesomeIcon className="minus-icon" icon={faMinus} />
                    </span>
                </button>
                <div className={`${props.filterHidden ? "hide-el" : "show-el-flex"}`}>
                    {filters.filter((option) => option.id === "country").length > 0 &&
                        <div name="select country">
                            <span>Country:</span>
                            <Select options={countryOptions} styles={customSelectStyle} onChange={onSelect.bind(this, "country")} defaultValue={{ value: "", label: "All" }} />
                        </div>
                    }
                    {filters.filter((option) => option.id === "locale").length > 0 &&
                        <div name="select language">
                            <span>Language:</span>
                            <Select options={localeOptions} styles={customSelectStyle} onChange={onSelect.bind(this, "locale")} defaultValue={{ value: "en_US", label: "English (Unites States)" }} />
                        </div>
                    }

                    <div name="select limit results">
                        <span>Limit results to: </span>
                        <Select options={limitOptions} styles={customSelectStyle} onChange={onSelect.bind(this, "limit")} defaultValue={{ value: "20", label: "20" }} />
                    </div>
                </div>
            </div>

            {currentPlaylists.length === 0 &&
                <div className="no-results">{props.filteredPlaylists.errorMessage}</div>
            }
            <div className="grid" data-testid="grid">
                {currentPlaylists.map((playlist, i) => (
                    <div className="grid-item" key={`playlist-${i}`}>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href={playlist.external_urls.spotify}>
                                <img key="{i}" alt={playlist.name} src={playlist.images.length > 0 ? playlist.images[0].url : noImage} className="img-center image" title={playlist.name} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={playlist.external_urls.spotify} className="title">
                                {playlist.name}
                            </a>
                            <div className="owner">by {playlist.owner.display_name}</div>
                            {/* Some descriptions were coming with HTML tags*/}
                            <div className="description">{playlist.description.replace(/<[^>]*>/g, '')}</div>
                        </div>

                        <div className="bottom">
                            {playlist.external_urls && playlist.external_urls.spotify ?
                                <a target="_blank" rel="noopener noreferrer" href={playlist.external_urls.spotify}>
                                    <img alt="open playlist on spotify web" src={logo} width="20" height="20" title="Open playlist on Spotify Web"></img>
                                </a>
                                : "No URL Available"}
                        </div>
                    </div>
                ))}
            </div>

            {(props.filteredPlaylists.next != null || props.filteredPlaylists.previous != null) &&
                <table>
                    <tbody>
                        <tr className="pagination">
                            {props.filteredPlaylists.previous != null &&
                                <td>
                                    <button onClick={onSelect.bind(this, "offset", { value: props.filteredPlaylists.offset - props.filteredPlaylists.limit })}>
                                        Previous <FontAwesomeIcon className="page-icon" icon={faChevronCircleLeft} />
                                    </button>
                                </td>
                            }
                            {props.filteredPlaylists.next != null &&
                                <td>
                                    <button onClick={onSelect.bind(this, "offset", { value: props.filteredPlaylists.offset + currentPlaylists.length })}>
                                        <FontAwesomeIcon className="page-icon" icon={faChevronCircleRight} /> Next
                                    </button>
                                </td>
                            }
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
};

export default FeaturedPlaylists;
