import React, {Component} from 'react';
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
import { FaBars, FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';

import {SketchPicker} from 'react-color';
import {useTable} from 'react-table';
import Switch from 'react-switch';
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

const ActionStyles = styled.div`
  width : 70px;
  svg{
    margin-right : 8px
  }
`

const ButtonStyles = styled.div`
  float:right;
  margin-bottom:1rem;
  flex:auto;
  display:flex;
  justify-content:flex-end;
  margin-right:19px
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

class SectionPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked : true
    }
  }

  AddSectionComponent = () => {
    return (
      <ButtonStyles>
        <Button onClick={() => this.handleAddSection()}>
            Add Section
        </Button> 
      </ButtonStyles>
    )
  }
  
  handleAddSection = (e) => {
    this.props.history.push('sections/add')
  }

  handleChange = () => {
    const prevValue = this.state.checked;
    this.setState({
      checked : !prevValue
    })
  }
  

  componentDidMount = () => {

  }

  render(){
    const columns = [
      {
        Header: 'Drag',
        accessor: 'move',
        Cell: (props) => (
            <span>
                <DragStyles>
                    <FaBars />
                    {/* <UncontrolledTooltip
                        placement="top"
                        target={props.value}
                        >
                        View Details
                    </UncontrolledTooltip> */}
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
        Cell : ({row}) => {
          return (
            <span>
              <ActionStyles>
                <FaEye className="cp" id={'ActionTooltip_View_' + row.original._id}/>
                <UncontrolledTooltip
                  placement="bottom"
                  target={'ActionTooltip_View_' + row.original._id}
                  >
                  View Section
                </UncontrolledTooltip>
                <MdEdit className="cp" id={'ActionTooltip_Edit_' + row.original._id}/>
                <UncontrolledTooltip
                  placement="bottom"
                  target={'ActionTooltip_Edit_' + row.original._id}
                  >
                  Edit Section
                </UncontrolledTooltip>
                <MdDelete className="cp" id={'ActionTooltip_Delete_' + row.original._id}/>
                <UncontrolledTooltip
                  placement="bottom"
                  target={'ActionTooltip_Delete_' + row.original._id}
                  >
                  Delete Section
                </UncontrolledTooltip>
              </ActionStyles>
            </span>
          )
        }
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell : ({row}) => (
          <Switch checked={this.state.checked}
            onChange={() => this.handleChange()}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={15}
            width={40}
            className="react-switch"
            id="material-switch" />
        )
      }
    ]

    let data = []

    for(let i = 0; i<10; i++){
      let obj = {
          _id : faker.random.uuid(),
          name : faker.name.title(),
          createdAt : faker.date.past(),
          updatedAt : new Date(),
          actions : 'actions',
          status : 'Inactive'
      }

      data.push(obj);
    }
  
    return (
        <Page title="Section" breadcrumbs={[{ name: 'section', active: true }]} buttonComp={this.AddSectionComponent}>
            <TableStyles>
                <Table columns={columns} data={data} defaultPageSize={10} />
            </TableStyles>
        </Page>
    )
  }
}

export default SectionPage;