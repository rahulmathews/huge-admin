import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
    UncontrolledTooltip
  } from 'reactstrap';
  import { FaBars } from 'react-icons/fa';

import {SketchPicker} from 'react-color';
import {useTable} from 'react-table';
import styled from 'styled-components';
import faker from 'faker';

import Page from 'components/Page';

const TableStyles = styled.div`
  padding: 1rem;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    };
      
    tr:nth-child(even) {
        background-color: #dddddd;
    }
  }
`

const DragStyles = styled.div`
  cursor: pointer;
  text-align: center 
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
    )
}

const MenuPage = () => {
    const columns = [{
        Header: 'Drag',
        accessor: 'move',
        Cell: (props) => (
            <span>
                <DragStyles>
                    <FaBars id={props.value}/>
                    <UncontrolledTooltip
                        placement="top"
                        target={props.value}
                        >
                        View Details
                    </UncontrolledTooltip>
                </DragStyles>
            </span>
        )
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
      },
      {
        Header: 'Updated At',
        accessor: 'updatedAt',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
      },
      {
        Header: 'Status',
        accessor: 'status',
      }
    ]

    let data = []

    for(let i = 0; i<10; i++){
        let obj = {
            name : faker.name.title(),
            createdAt : faker.date.past(),
            updatedAt : new Date(),
            actions : 'actions',
            status : 'Inactive'
        }

        data.push(obj);
    }
    data.push()
    return (
        <Page title="Menu" breadcrumbs={[{ name: 'menu', active: true }]}>
            <TableStyles>
                <Table columns={columns} data={data} />
            </TableStyles>
        </Page>
    )
}

export default MenuPage;