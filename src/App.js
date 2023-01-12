
import { Button, Form, Input, InputNumber } from "antd";
import { useState, useEffect } from "react";
import "./App.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const App = () => {

  const [data, setData] = useState(null)
  const onFinish = (values) => {
    console.log(values);
    setData(()=> [values])
  };

  console.log(data)

  useEffect(() => {
    
  
   
  }, [])
  
  
  return (
    <><Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    validateMessages={validateMessages}
  >
    <h1>CRUD</h1>
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={["user", "orignal-price"]}
      label="Orignal Price"
      rules={[
        {
          type: "number",
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item
      name={["user", "sale-price"]}
      label="Sale Price"
      rules={[
        {
          type: "number",
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item
      name={["user", "product-type"]}
      label="Product Type"
      rules={[
        {
          type: "number",
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

    <Form.Item name={["user", "discription"]} label="discription">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

  
  
  </>
    
  
    
  );
};
export default App;
