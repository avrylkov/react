import React from 'react';
import {DataProvider} from './dataProvider.jsx';

class SortButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickSort = this.handleClickSort.bind(this);
    }

    handleClickSort(e) {
        this.props.onClickSort(this.props.colName);
    }

    render() {
        let name = "__";
        if (this.props.sort == "Asc") {
            name = "^";
        } else if (this.props.sort == "Desc") {
            name = "V";
        }
        return(
            <div>
                <button onClick={this.handleClickSort}>{name}</button>
            </div>
        );
    }
}

class SortTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sortCols = [];
        const onClick = this.props.onClickSort;
        this.props.sortCols.forEach(function (item, index) {
            sortCols.push(
              <th key={index}>{item.colName}
                <SortButton colName={item.colName} sort={item.sort} onClickSort={onClick}/>
              </th>
            );
        });

        const sortRows = [];
        this.props.rows.forEach(function (item) {
            sortRows.push(<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
            </tr>);
        });

        return (
            <table cellSpacing="5" cellPadding={5} adding="10" border="1">
                <thead>
                <tr>
                   {sortCols}
                </tr>
                </thead>
                <tbody>
                   {sortRows}
                </tbody>
            </table>
        );
    }
}

const SortInfo = {
    columns: [
        {
           colName:"id",
           sort:"Asc",
           funcSort: function(arr) {
             if (this.sort == "Asc") {
                 arr.sort(function(a, b){return a.id - b.id});
             } else {
                 arr.sort(function(a, b){return b.id - a.id});
             }
           }
        },
        {
            colName:"name",
            sort:"",
            funcSort: function(arr) {
              if (this.sort == "Asc") {
                  arr.sort(function(a, b) {return a.name.localeCompare(b.name)})
              } else {
                  arr.sort(function(a, b) {return -a.name.localeCompare(b.name)})
              }
            }
        }
    ]
}

export default class ExSortTable extends React.Component {
    constructor(props) {
        super(props);
        this.onClickSort = this.onClickSort.bind(this);
        this.state = {sortCols: [], rows: []};
    }

    componentDidMount() {
        this.setState({
            sortCols: SortInfo.columns,
            rows: DataProvider.all()
        })
    }

    getSortColByName(cols, name) {
        for (var i=0; i <  cols.length; i++) {
            if (cols[i].colName == name) {
                return cols[i];

            }
        };
        return null;
    }

    resetSort(cols, name) {
        for (var i=0; i <  cols.length; i++) {
            if (cols[i].colName != name) {
                cols[i].sort = "";
            }
        };
    }

    onClickSort(colName) {
      let cols =  this.state.sortCols;
      let col = this.getSortColByName(cols, colName);
      console.log(col);
      if (col.sort !== "") {
         if (col.sort == "Asc") {
           col.sort = "Desc";
         } else {
           col.sort = "Asc";
         }
      } else {
          col.sort = "Asc";
          this.resetSort(cols, colName);
      }

      let rows = this.state.rows;
      col.funcSort(rows);
      this.setState({sortCols: cols, rows: rows});
    }

    render() {
        return (
            <div>
                <h3>Сортировка в Table</h3>
                <div><a target="_blank" href="https://github.com/avrylkov/react/blob/master/app/components/exSortTable.jsx">GitHub</a></div>
                <div>
                    <SortTable sortCols={this.state.sortCols}
                               rows={this.state.rows}
                               onClickSort={this.onClickSort}/>
                </div>
            </div>
        );
    }
}
