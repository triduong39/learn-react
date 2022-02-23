import { Space, Typography } from "antd";
import AppButton from "./component/AppButton/AppButton";
import AppSwitch from "./component/AppSwitch/AppSwitch";

const { Text, Title } = Typography;

export default function ScssPage() {
  const handleClick = (text: string) => {
    alert(`You clicked the button ${text} at Scss page`);
  };
  const handleSwitch = () => {
    console.log("you switched the switch!");
  };
  return (
    <Space direction="vertical" className="main" size={"middle"}>
      <Title level={3}>
        Sử dụng <Text code>npm i node-sass</Text> để có thể sử dụng file .scss
        thay vì .css
      </Title>
      <Space>
        <AppButton onClick={() => handleClick("blue")}>Click here</AppButton>
        <AppButton color="red" onClick={() => handleClick("red")}>
          Click here
        </AppButton>
      </Space>
      <Space>
        <AppSwitch checked readOnly onChange={handleSwitch} />
        <AppSwitch variant="round" checked readOnly onChange={handleSwitch} />
        <AppSwitch onChange={handleSwitch} />
        <AppSwitch variant="round" onChange={handleSwitch} />
        <AppSwitch color="red" onChange={handleSwitch} />
        <AppSwitch variant="round" color="red" onChange={handleSwitch} />
        <AppSwitch color="purple" onChange={handleSwitch} />
        <AppSwitch variant="round" color="purple" onChange={handleSwitch} />
      </Space>
    </Space>
  );
}
