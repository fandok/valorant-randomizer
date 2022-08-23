import { useState } from "react";
import { Button, Layout, Typography } from "antd";

import { AGENTS } from "../constants/agents";
import styles from "../styles/Random.module.css";
import Image from "next/image";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const RandomPage = () => {
  const [randomValue, setRandomValue] = useState(null);

  const handleRandom = () => {
    const value = AGENTS[Math.floor(Math.random() * AGENTS.length)];
    setRandomValue({ ...value });
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div style={{ color: "white" }}>VALORANT RANDOMIZER</div>
      </Header>
      <Content>
        {/* <Carousel autoplay>
          {AGENTS.map(({ id, name }) => (
            <div key={id}>
              <h3 className={styles.contentStyle}>{name}</h3>
            </div>
          ))}
        </Carousel> */}
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Button onClick={handleRandom} type="primary">
            Random Agent
          </Button>
        </div>
        {randomValue && (
          <div style={{ textAlign: "center" }}>
            <Title>{randomValue.name}</Title>
            <Title level={5}>{randomValue.role}</Title>
            {randomValue.image && (
              <Image
                layout="fixed"
                src={randomValue.image}
                alt={randomValue.name}
              />
            )}
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default RandomPage;
