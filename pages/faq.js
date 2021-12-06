import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../shared/components/Layout/layout";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#17191B",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "blue",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "red",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 10,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 20,
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Faq() {

  useEffect(() => {
    // TODO - Move this API call out of UI layer
    axios.get("/api/faq").then((res) => setFaqs(res.data));
  }, []);
  
  const [faqJson, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Layout>
      <Typography
        style={{ fontWeight: 400, color: "#A2A3A3", marginTop: 30 }}
        variant="h2"
      >
        FAQ PAGE
      </Typography>
      <Typography style={{ fontWeight: 400, color: "#A2A3A3", marginTop: 50 }}>
        Note: This is in early stages - If proven useful it will be improved
      </Typography>
      <Container>
        {
          faqJson.map((faq, index) => (
              <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} >
                <AccordionSummary aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                  <Typography color="secondary">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
          ))
        }
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  width: 750px;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
`;
