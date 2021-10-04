import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import classes from './UserTable.module.css';
import { tableData } from "../../helpers/data";
import Table from '../UI/Table';

import { useState, useRef } from "react";

const UserTable = () => {
    const searchRef = useRef();
    const [data, setData] = useState(tableData);

    const searchTable = ( ) => {
        let searchText = searchRef.current.value.toLowerCase();
        if(searchText !== ''){
            let filteredArray = tableData.filter( item => {
                return (
                    (item[1].toLowerCase().search(searchText) > -1 ) ||
                    (item[2].toLowerCase().search(searchText) > -1 ) ||
                    (item[3].toLowerCase().search(searchText) > -1 ) ||
                    (item[4].toLowerCase().search(searchText) > -1 )
                )
            })
            setData(filteredArray);
            // console.log(filteredArray)
        }else{
            setData(tableData);
        }
    }

    return(
        <Fragment>
            <Row className={classes.heading}>
                <Col lg="3" id="sm-center" className="text-start"><h2>User Records</h2></Col>
                <Col lg="9" className="text-end">
                    <span className={`${classes.searchBar} me-3 text-start`}>
                        <input type="text" placeholder="Search in table..." ref={searchRef} onChange={searchTable} />
                        <i className="fa fa-search"></i>
                    </span>

                    <button className={classes.filterBtn}><i className="fa fa-filter"></i> Filter</button>
                    <button className={`ms-3 ${classes.addBtn}`}><i className="fa fa-plus"></i> Add</button>
                </Col>
            </Row>

            <Row className="overflow-scroll">
                <Table data={data} />
            </Row>
        </Fragment>
    )
}

export default UserTable;