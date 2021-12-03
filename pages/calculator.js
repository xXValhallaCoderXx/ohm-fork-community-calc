import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Layout from "../shared/components/Layout/layout";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Slider from "@mui/material/Slider";
const fontColor = {
  style: { color: "#A2A3A3" },
};

function App() {
  const [nmsPrice, setNmsPrice] = useState(0);
  const [yieldAPY, setYieldAPY] = useState(0);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [customYield, setCustomYield] = useState("454,104,057,531.1%");
  const [customPrice, setCustomPrice] = useState("$4,342.34");
  const [days, setDays] = useState(1);

  return (
    <Layout>
      <Container>
        <Typography
          color="secondary"
          style={{
            marginBottom: 50,
            fontSize: 50,
            fontWeight: 500,
          }}
        >
          Nemesis Calculator
        </Typography>
        <CardContainer sx={{ minWidth: 850 }}>
          <CardContent>
            <TopRow>
              <div>
                <Typography
                  color="cheese"
                  style={{ fontWeight: 400 }}
                  variant="h5"
                >
                  Current Nemesis Price
                </Typography>
                <Typography
                  style={{
                    textAlign: "center",
                    width: "100%",
                    color: "white",
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                  endAdornment={
                    <InputAdornment position="end">NMS</InputAdornment>
                  }
                >
                  {customPrice}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{ fontWeight: 400, color: "#A2A3A3" }}
                  variant="h5"
                >
                  Current Yield Reward
                </Typography>
                <Typography
                  color="text.secondary"
                  gutterBottom
                  style={{
                    textAlign: "center",
                    width: "100%",
                    color: "white",
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                >
                  {customYield}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{ fontWeight: 400, color: "#A2A3A3" }}
                  variant="h5"
                >
                  Your Balance
                </Typography>
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    width: "100%",
                    color: "white",
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                >
                  3.435353 NMS
                </Typography>
              </div>
            </TopRow>
            <div
              style={{
                padding: 20,
                paddingLeft: 35,
                paddingRight: 35,
                marginTop: 35,
              }}
            >
              <Slider
                size="small"
                defaultValue={days}
                valueLabelDisplay="on"
                valueLabelFormat={(value) => <div>{value} Days</div>}
                color="secondary"
              />
            </div>
            <ContentRow>
              <FormContainer>
                <TextField
                  id="outlined-basic"
                  label="NMS Quantity"
                  variant="outlined"
                  color="secondary"
                  focused
                  inputProps={fontColor}
                  placeholder="Enter NMS Quantity"
                  onChange={(e) => setAmount(e.target.value)}
                />
                <TextField
                style={{marginTop: 20, marginBottom: 20}}
                  label="Reward Yield (%)"
                  placeholder="Enter reward yield"
                  label="NMS Quantity"
                  variant="outlined"
                  color="secondary"
                  focused
                  inputProps={fontColor}
                  onChange={(e) => setCustomYield(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                
                        <div style={{ color: "#A2A3A3" }}>%</div>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="NMS Purchase Price ($)"
                  placeholder="Enter purchase price"
                  label="NMS Quantity"
                  variant="outlined"
                  color="secondary"
                  focused
                  inputProps={fontColor}
                  onChange={(e) => setCustomYield(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <div style={{ color: "#A2A3A3" }}>$</div>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormContainer>
              <div style={{ width: 380, paddingRight: 40 }}>
                <InfoRow>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      fontWeight: 500,
                      letterSpacing: 1,
                      color: "#A2A3A3",
                    }}
                  >
                    Your initial Investment
                  </Typography>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    $2400.43
                  </Typography>
                </InfoRow>
                <InfoRow>
                  <Typography
                    style={{
                      textAlign: "center",
                      fontWeight: 500,
                      letterSpacing: 1,
                      color: "#A2A3A3",
                    }}
                  >
                    Current Value
                  </Typography>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    $3897.45
                  </Typography>
                </InfoRow>
                <InfoRow>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      fontWeight: 500,
                      letterSpacing: 1,
                      color: "#A2A3A3",
                    }}
                  >
                    NMS rewards estimate
                  </Typography>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    0.003234
                  </Typography>
                </InfoRow>
              </div>
            </ContentRow>
          </CardContent>
        </CardContainer>
        <Typography
          style={{ fontWeight: 400, color: "#A2A3A3", marginTop: 50 }}
          variant="h6"
        >
          Note: This is in early stages - More features can be added and
          suggestions welcome
        </Typography>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #1e232b;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-around;

  flex-direction: row;
`;

const CardContainer = styled(Card)`
  border: 2px solid #;

  border-radius: 10px;
  background-color: #17191b;
  padding: 15px;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  pading: 10px;
  width: 350px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

export default App;
