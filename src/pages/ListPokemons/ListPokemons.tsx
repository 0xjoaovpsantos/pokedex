import { Layout, Typography, Input, Row, Col } from 'antd';

import './listPokemons.css';

export const ListPokemons = () => {
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;
  const { Search } = Input;

  return (
    <Layout>
      <Header style={{ backgroundColor: '#fff' }}>
        <Title level={1}>Pokdex</Title>
      </Header>
      <Content>
        <Search placeholder="Digite o nome do pokemon" />

        <Row gutter={[0, 20]} justify="space-around">
          <Col className="pokemon-card">
            <Text>Nome</Text>
            <img src="" alt="" />
          </Col>
          <Col className="pokemon-card">
            <Text>Nome</Text>
            <img src="" alt="" />
          </Col>
          <Col className="pokemon-card">
            <Text>Nome</Text>
            <img src="" alt="" />
          </Col>
          <Col className="pokemon-card">
            <Text>Nome</Text>
            <img src="" alt="" />
          </Col>
          <Col className="pokemon-card">
            <Text>Nome</Text>
            <img src="" alt="" />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
