import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
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

var usdFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

var percentFormat = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 5,
});

function App() {
  // TODO - Use some kind of reducer / state management
  const [nmsPrice, setNmsPrice] = useState(0);
  const [apy, setApy] = useState(0);

  const [amount, setAmount] = useState(0);
  const [customYield, setCustomYield] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [days, setDays] = useState(1);

  useEffect(() => {
    // TODO - Move this API call out of UI layer
    axios.get("/api/calculator").then((res) => {
      setNmsPrice(res.data.priceUSD);
    });
  }, []);

  useEffect(() => {
      console.log("YIELD: ",(((1666661428 / 100)-1)**(1/(3*365))-1) * 100)
      const yieldRate = (((1666661428 / 100)-1)**(1/(3*365))-1) * 100;
      const numberOfToken = 1 * (1+(yieldRate / 100))**(3 * 30);
      console.log("NUMBER OF TOKEN: ", numberOfToken)
      const totalValue = numberOfToken * 622.69;
      console.log("TOTL:", totalValue)
      
  }, [apy])
  // useEffect(() => {
  //   console.log("PRUCHASE: ", purchasePrice);
  //   console.log("AMOUNT: ", amount);
  //   console.log("YIELD: ", customYield);
  //   console.log("DAYS: ", days);
  //   const amountInNms = amount * (1 + customYield) ** (3 * days);
  //   const nmsParsed = parseFloat(amountInNms.toString().slice(0, 6));
  //   const priceParsed = parseFloat(purchasePrice);

  //   console.log("NMS: ", nmsParsed);
  //   console.log("AMOUNT IN USD: ", priceParsed);
  // }, [amount, customYield, purchasePrice, days]);

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
                  style={{ fontWeight: 400, color: "#A2A3A3" }}
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
                >
                  {usdFormat.format(nmsPrice)}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{ fontWeight: 400, color: "#A2A3A3" }}
                  variant="h5"
                >
                  Current APY
                </Typography>
                <Typography
                  style={{
                    textAlign: "center",
                    width: "100%",
                    color: "white",
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                >
                  {percentFormat.format(apy / 100)}
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
                  {customYield
                    ? percentFormat.format(customYield / 100)
                    : "N / A"}
                </Typography>
              </div>
            </TopRow>
            <div
              style={{
                padding: 20,

                marginTop: 35,
              }}
            >
              <Slider
                size="small"
                defaultValue={days}
                valueLabelDisplay="on"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                valueLabelFormat={(value) => <div>{value} Days</div>}
                color="secondary"
              />
            </div>
            <ContentRow>
              <FormContainer>
                <TextField
                  label="Current APY (%)"
                  placeholder="Enter APY"
                  variant="outlined"
                  color="secondary"
                  focused
                  inputProps={fontColor}
                  onChange={(e) => setApy(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <div style={{ color: "#A2A3A3" }}>%</div>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  style={{ marginTop: 20, marginBottom: 20 }}
                  label="Reward Yield (%)"
                  placeholder="Enter reward yield"
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
                  style={{ marginTop: 20 }}
                  label="NMS Purchase Price ($)"
                  placeholder="Enter purchase price"
                  variant="outlined"
                  color="secondary"
                  focused
                  value={purchasePrice}
                  inputProps={fontColor}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
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
                    Your Initial Investment
                  </Typography>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {usdFormat.format(amount * purchasePrice)}
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
                    NMS Rewards Estimate
                  </Typography>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {percentFormat.format(0 / 100)}
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
                    USD Value Estimate
                  </Typography>
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {usdFormat.format(0)}
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
  justify-content: space-between;

  flex-direction: row;
`;

const CardContainer = styled(Card)`
  border: 2px solid #;

  border-radius: 10px;
  background-color: #17191b;
  padding: 20px;
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

export default App;
