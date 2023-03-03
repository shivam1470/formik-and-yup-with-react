import { useState } from "react";
import "antd/dist/reset.css";
import { Form, Row, Input, Card, Col, Typography, Button, Space } from "antd";
import { string, object } from "yup";
import { useFormik } from "formik";
const { TextArea } = Input;

interface IAddress {
  state: string;
  city: string;
  country: string;
  zipCode: string;
  street: string;
}

interface IInitialValue {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  address: IAddress;
  description: string;
}

// Initial value provided to formik
const initialValue: IInitialValue = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  description: "",
  address: {
    state: "",
    street: "",
    zipCode: "",
    city: "",
    country: "",
  },
};

const addressSchema = object().shape({
  state: string().required("Required"),
  street: string().required("Required"),
  zipCode: string().required("Required"),
  city: string().required("Required"),
});

// Validation with the help of yup library
const validationSchema = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  mobile: string().min(10).max(10).required("Required"),
  email: string().email().required("Required"),
  address: addressSchema,
  description: string(),
});

function App() {
  // Getting value, error, change handler and submit handler
  const { values, errors, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    validateOnBlur: false,
    onSubmit: async (value) => {
      alert(JSON.stringify(value));
    },
  });

  const handleAddressChange = (type: string, value: string) => {
    setValues((prevState) => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          [type]: value,
        },
      };
    });
  };

  console.log(values, "VAL");
  console.log(errors, "Error");
  return (
    <>
      <Card>
        <Typography style={{ fontSize: "20px" }}>
          Please fill your form to continue
        </Typography>
      </Card>
      <Card style={{ backgroundColor: "#8ca893", margin: "40px" }}>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item label={"First Name"}>
                <Input
                  status={errors.firstName && "error"}
                  value={values.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.firstName}
                </Typography>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={"Last Name"}>
                <Input
                  status={errors.lastName && "error"}
                  value={values.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.lastName}
                </Typography>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item label={"Mobile"}>
                <Input
                  status={errors.mobile && "error"}
                  value={values.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.mobile}
                </Typography>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={"Email"}>
                <Input
                  status={errors.email && "error"}
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.email}
                </Typography>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label={"Street"}>
                <Input
                  status={errors.address && "error"}
                  value={values.address.street}
                  onChange={(e) => {
                    handleAddressChange("street", e.target.value);
                  }}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.address?.street}
                </Typography>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={"City"}>
                <Input
                  status={errors.address && "error"}
                  value={values.address.city}
                  onChange={(e) => {
                    handleAddressChange("city", e.target.value);
                  }}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.address?.city}
                </Typography>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label={"State"}>
                <Input
                  status={errors.address && "error"}
                  value={values.address.state}
                  onChange={(e) => {
                    handleAddressChange("state", e.target.value);
                  }}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.address?.state}
                </Typography>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={"Zip Code"}>
                <Input
                  status={errors.address && "error"}
                  value={values.address.zipCode}
                  name="address"
                  onChange={(e) => {
                    handleAddressChange("zipCode", e.target.value);
                  }}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#d67f6f",
                  }}
                >
                  {errors.address?.zipCode}
                </Typography>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label={"Description"}>
            <TextArea
              value={values.description}
              name="description"
              onChange={handleChange}
              showCount
              maxLength={100}
            />
          </Form.Item>
          <Space style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button htmlType="submit">Submit</Button>
          </Space>
        </Form>
      </Card>
    </>
  );
}

export default App;
