import React from "react";
import { Container, CardDetails, CardDetailsInfo } from "./styles";

const Description = () => {
  return (
    <Container>
      <CardDetails>
        <img
          alt="Captain Marvel"
          title="Captain Marvel"
          src="https://i.annihil.us/u/prod/marvel/i/mg/3/00/6030363a9bf17/clean.jpg"
          width="300"
          height="445"
        />

        <CardDetailsInfo>
          <div>
            <h1>Capitã Marvel</h1>
            <strong>Published:</strong>

            <div>Março 05, 2021</div>

            <div>
              <strong>Writer:</strong>
            </div>
            <div>Mark Waid</div>

            <div>
              <strong>Penciler:</strong>
            </div>
            <div>Claire Roe , Colleen Doran</div>
          </div>

          <div>
            <p>
              A team of heroes fights a stirring battle for the safety of the
              planet. A young woman struggles with desperation and despair,
              trying to cope in the modern world. But that’s only the beginning.
              Superstar creators MARK WAID (Kingdom Come, FANTASTIC FOUR) and
              COLLEEN DORAN (SPIDER-MAN, A Distant Soil) tell a tale of
              inspiration within inspiration, as we see how the world’s marvels
              have inspired others – and how they’ve been inspired themselves.
              Featuring Captain Marvel, Ms. Marvel and a few surprises.
            </p>
            <p>
              A team of heroes fights a stirring battle for the safety of the
              planet. A young woman struggles with desperation and despair,
              trying to cope in the modern world. But that’s only the beginning.
              Superstar creators MARK WAID (Kingdom Come, FANTASTIC FOUR) and
              COLLEEN DORAN (SPIDER-MAN, A Distant Soil) tell a tale of
              inspiration within inspiration, as we see how the world’s marvels
              have inspired others – and how they’ve been inspired themselves.
              Featuring Captain Marvel, Ms. Marvel and a few surprises.
            </p>
          </div>
        </CardDetailsInfo>
      </CardDetails>
    </Container>
  );
};

export default Description;
