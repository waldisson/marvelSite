import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api";
import { CardDiv, Container, CardView } from "./styles";

// import card from "../../assets/img/clean.jpg";

const Home = () => {
  const history = useHistory();

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchHero();
  }, []);

  async function fetchHero() {
    try {
      const response = await api.getHero();
      setDataList(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  const handleClick = () => {
    history.push("/descricao");
  };

  const CardHero = ({ data }) => {
    return (
      <CardDiv onClick={handleClick}>
        <div>
          <img
            src={`${data.thumbnail.path + "." + data.thumbnail.extension}`}
            alt="Hero"
          />
        </div>

        <div>
          <h3>{data.title}</h3>
          <p>{`${data.creators.items[0].name}`}</p>
        </div>
      </CardDiv>
    );
  };

  return (
    <Container>
      {dataList.length > 0 && (
        <CardView>
          {dataList.map((item, index) => (
            <CardHero key={index} data={item} onClick={handleClick} />
          ))}
        </CardView>
      )}
    </Container>
  );
};

export default Home;
