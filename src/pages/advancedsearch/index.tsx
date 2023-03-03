import { Box, Grid, Paper, styled } from "@mui/material";
import {
  useSupabaseClient,
  useUser,
  Session,
} from "@supabase/auth-helpers-react";
import Area from "components/Advancedsearch/Filters/Area";
import Bath from "components/Advancedsearch/Filters/Bath";
import Bedroom from "components/Advancedsearch/Filters/bedroom";
import Budget from "components/Advancedsearch/Filters/Budget";
import Facilities from "components/Advancedsearch/Filters/Facilities";
import Filters from "components/Advancedsearch/Filters/Filters";
import Keywords from "components/Advancedsearch/Filters/Keywords";
import Mapsearch from "components/Advancedsearch/Filters/Mapsearch";
import Place from "components/Advancedsearch/Filters/Place";
import Save_and_search from "components/Advancedsearch/Filters/save_and_search";
import List from "components/Advancedsearch/List/List";
import Result from "components/Advancedsearch/Result";
import Appbar from "components/Appbar";
import React, { useEffect, useState } from "react";
import { Database } from "utils/database.types";
// type Apartment = Database["public"]["Tables"]["apartment"]["Row"];
type Apartment = Database["public"]["Tables"]["apartment"]["Row"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = {
  container: {
    display: "grid",
    padding: "10px",
    gridTemplateColumns: "25% 1fr",
  },
  columnLeft: {
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#333131",
  },
  columnRight: {
    borderRadius: "8px",
  },
};

const AdvancedSearch = ({ session }: { session: Session }) => {
  const supabase = useSupabaseClient<Database>();

  // const user = useUser();
  const [checkedBedroom, setCheckedBedroom] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });

  const handleBedroomChange = (event: any) => {
    setCheckedBedroom({
      ...checkedBedroom,
      [event.target.name]: event.target.checked,
    });
  };

  const [checkedBath, setCheckedBath] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const handleBathChange = (event: any) => {
    setCheckedBath({
      ...checkedBath,
      [event.target.name]: event.target.checked,
    });
  };



  let getAllAppartments = async () => {
    try {
      let addresses = await supabase.from("address").select();
      let apartments = await supabase
        .from("apartment")
        .select(`aprt_id, price, addr_id`);

      if (addresses.error && addresses.status !== 406) {
        console.log(addresses.error);
      }

      if (addresses.data) {
        console.log(addresses.data);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  };
  useEffect(() => {
    getAllAppartments();
    // console.log(data);
  }, [session]);

  return (
    <>
      {/* <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div> */}
      <Appbar />
      <div style={styles.container}>
        <div style={styles.columnLeft}>
          <Place />
          <Save_and_search />
          {/* <Mapsearch /> */}
          <Bedroom
            options={checkedBedroom}
            handleChange={handleBedroomChange}
          />
          <Bath
            options={checkedBath}
            handleChange={handleBathChange}
           />
          <Budget />
          <Area />
          <Facilities />
          {
            <Keywords />
            /* <Filters />
                  <List /> */
          }
        </div>
        <div style={styles.columnRight}>
          <Result />
        </div>
      </div>
    </>
  );
};

export default AdvancedSearch;
