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
    Select,
    UncontrolledTooltip,
    CardFooter
  } from 'reactstrap';

import * as _ from 'lodash';
import styled from 'styled-components';
import {SketchPicker} from 'react-color';

import Page from 'components/Page';

const SubmitButtonStyles = styled.div`
  margin-top : 30px
`

const AddSection = () => {
    return(
        <Page className="add-section" breadcrumbs={[{ name: 'section', active: false }, { name: 'add', active: true }]}>
            <Card>
                <CardHeader className="card-header">Add Section</CardHeader>
                <CardBody>
                    <Row>
                        <Col xl={4} lg={12} md={12}>
                            <Form>
                                <FormGroup>
                                    <Label for="title">Name</Label>
                                    <Input
                                        placeholder="Enter Name"
                                        id="title"
                                    />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xl={4} lg={12} md={12}>
                            <Form>
                                <FormGroup>
                                    <Label for="font-size">Font Size</Label>
                                    <Input
                                        placeholder="Enter Font Size"
                                        id="font-size"
                                        type="select"
                                    >
                                        {_.range(2, 40, 2).map((key, idx) => {
                                            return (
                                                <option key={idx}>{key}</option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xl={4} lg={12} md={12}>
                            <Form>
                                <FormGroup>
                                    <Label for="font-color">Font Color</Label>
                                    <Input
                                        placeholder="Select Font Color"
                                        id="font-color"
                                        type="color"
                                    />
                                    {/* <SketchPicker /> */}
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} lg={12} md={12}>
                            <Form>
                                <FormGroup>
                                    <Label for="bg-color">Background Color</Label>
                                    <Input
                                        placeholder="Select Background Color"
                                        id="bg-color"
                                        type="color"
                                    />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xl={4} lg={12} md={12}>
                            <SubmitButtonStyles>
                                <Button>Submit</Button>
                            </SubmitButtonStyles>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Page>
    )
}

export default AddSection