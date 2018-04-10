import React, {Component} from 'react';

import Loader from 'react-loader-spinner';
import {request as getSongs, fetchMore, searchSongs} from "../reducers/songs.reducer";
import {connect} from "react-redux";
import SearchBar from "../components/SearchBar";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import Panel from "react-bootstrap/es/Panel";
import InfiniteScroll from 'react-infinite-scroll-component';


const mapStateToProps = (state) => ({
    songs: state.songs.data,
    nextUrl: (state.songs.data ? state.songs.data.next : null),
});
const mapDistpathToProps = (dispatch) => ({
    loadSongs: () => (dispatch(getSongs())),
    searchSongs: (title) => (dispatch(searchSongs({title}))),
    fetchMore: (url) => (dispatch(fetchMore({url}))),
})

class Dashbord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.coverFormater = this.coverFormater.bind(this);
    }


    componentWillMount() {

        this.props.loadSongs();
    }
    coverFormater(cell, row) {
        return ` <img src="${row.album.cover_small}" />`;
    }

    handleSearch(values) {
        if (values['title'] !== '') {
            this.props.searchSongs(values['title']);
        } else {
            this.props.loadSongs();
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <SearchBar handleSearch={this.handleSearch}/>
                <div className="col-md-12">
                    <div className="row">

                        <Panel>
                            <Panel.Body>

                                {this.props.songs && this.props.songs.data ? (

                                        <InfiniteScroll
                                            pullDownToRefresh
                                            dataLength={this.props.songs.data.length} //This is important field to render the next data
                                            pullDownToRefreshContent={
                                                <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                                            }
                                            releaseToRefreshContent={
                                                <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                                            }
                                            refreshFunction={() => {
                                            }}
                                            next={() => {
                                                this.props.fetchMore(this.props.nextUrl)
                                            }}
                                            hasMore={this.props.nextUrl ? true : false}
                                            loader={<Loader type="Audio" color="#somecolor" height={80} width={80}/>}
                                            endMessage={
                                                <p style={{textAlign: 'center'}}>
                                                    <b>Yay! You have seen it all</b>
                                                </p>
                                            }>
                                            <BootstrapTable data={this.props.songs.data} striped hover>
                                                <TableHeaderColumn hidden width='10' isKey dataField='id'
                                                                   dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn width='10' dataField='link' dataFormat={ this.coverFormater }>Cover</TableHeaderColumn>
                                                <TableHeaderColumn width='100' dataField='title'
                                                                   dataSort={true}>title</TableHeaderColumn>
                                                <TableHeaderColumn width='100' dataField='duration' filter={ { type: 'TextFilter', delay: 1000, condition: 'eq' } } dataSort={true}>Duration(Secondes)</TableHeaderColumn>
                                                <TableHeaderColumn width='100' dataField='link' filter={ { type: 'TextFilter', delay: 1000, condition: 'eq' } }
                                                                   dataSort={true}>link</TableHeaderColumn>
                                            </BootstrapTable> </InfiniteScroll>) :
                                    <Loader type="Audio" color="#somecolor" height={80} width={80}/>}

                            </Panel.Body>
                        </Panel>


                    </div>
                    {this.props.songs && this.props.songs.data.length === 0 ? (<h4>no songs found</h4>) : ''}

                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDistpathToProps)(Dashbord);
