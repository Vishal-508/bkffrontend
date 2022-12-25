import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MensHome from "./MensHome";
import WomenHome from "./WomenHome";
const HomeElements = () => {
  return (
    <Box  bg="#FFFFFF">
      <Tabs align="center">
        <TabList border="none">
          <Tab
            style={{ padding: "21px 24px" }}
            _selected={{
              borderBottom: "4px solid  #FDD835",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            MEN
          </Tab>
          <Tab
            style={{ padding: "21px 24px" }}
            _selected={{
              borderBottom: "4px solid  #FDD835",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            WOMEN
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MensHome/>
          </TabPanel>
          <TabPanel>
            <WomenHome/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HomeElements;
