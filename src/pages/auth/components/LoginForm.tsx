import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, type FormProps } from "antd";
import { useLogin } from "../../../api/auth/authMutations";
import { useNavigate } from "react-router";

type FieldType = {
  username: string;
  password: string;
  expiresInMins?: number;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useLogin();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (!isPending)
      login(
        { ...values, expiresInMins: 30 },
        {
          onSuccess: () => navigate("/"),
        },
      );
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      size="large"
    >
      <Form.Item<FieldType>
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>
      <Form.Item label={null} className="!mb-0">
        <Button
          color="primary"
          variant="solid"
          htmlType="submit"
          className="w-full"
          loading={isPending}
        >
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
