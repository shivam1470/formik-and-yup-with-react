import { useState } from "react";
import "antd/dist/reset.css";
import { Form, Row, Input, Card, Col, Typography, Button, Space } from "antd";
import { string, object } from "yup";
import { useFormik } from "formik";
const { TextArea } = Input;

const initialValue = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  address: "",
  description: "",
};

const validationSchema = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  mobile: string().min(10).max(10).required("Required"),
  email: string().email().required("Required"),
  address: string().required("Required"),
  description: string(),
});

function App() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    validateOnBlur: false,
    onSubmit: async (value) => {},
  });

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
          <Form.Item label={"Address"}>
            <Input
              status={errors.address && "error"}
              value={values.address}
              name="address"
              onChange={handleChange}
            />
            <Typography
              style={{
                fontSize: "16px",
                color: "#d67f6f",
              }}
            >
              {errors.address}
            </Typography>
          </Form.Item>
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
