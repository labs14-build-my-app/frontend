import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";

import { Pill, Button, PageTitle } from "../../custom-styles";
import { fetchDevelopers } from "../../store/actions";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EmailDrawer from "../EmailDrawer";

const Developers = ({ history, user }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: 20,
      marginBottom: 20,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 0,
      "@media (max-width: 450px)": {
        width: "100%",
        display: "block",
        margin: "20px auto"
      }
    },
    divContainer: {
      display: "flex",
      flexWrap: "wrap"
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      width: "45%",
      margin: "0% 2.5%",
      flexWrap: "wrap",
      "@media (max-width: 550px)": {
        width: "100%"
      }
    },
    grid: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 10px"
    },
    avatar: {
      margin: 0
    },
    purpleAvatar: {
      margin: 0,
      color: "#fff",
      backgroundColor: deepPurple[500]
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#4E72B7",
      border: "1px solid #4E72B7",
      color: "white",
      fontSize: "0.7rem",
      padding: "8px 13px",
      fontWeight: "bold",
      borderRadius: "15px",
      cursor: "pointer",
      outline: "none",
      "&:hover": {
        color: "#4E72B7",
        backgroundColor: "white"
      }
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  }));
  const classes = useStyles();

  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState("");

  const filters = ["All", "Web", "iOS", "Android"];

  useEffect(() => {
    setFilter(filters[value]);
    fetchDevelopers(setDevelopers, setPageCount, 1, filters[value]);
  }, [value]);

  function handleChange(event, newValue) {
    console.log(newValue);
    setValue(newValue);
  }

  const [developers, setDevelopers] = useState([]);
  const [pageCount, setPageCount] = useState({ page: 1 });
  // useEffect(() => {
  //   if (developers.length === 0) {
  //     fetchDevelopers(setDevelopers, setPageCount, pageCount.page);
  //   }
  // }, [developers, pageCount]);

  const connectWithDeveloper = e => {
    e.stopPropagation();
  };

  if (developers.length === 0) {
    // console.log(developers);
    return <h1>Loading...</h1>;
  } else {
    // console.log("render 3rd time");
    // console.log(developers);
    return (
      <>
        <PageTitle style={{ width: "100%", textAlign: "center" }}>
          Available Developers
        </PageTitle>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="All" />
            <Tab label="Web" />
            <Tab label="iOS" />
            <Tab label="Android" />
          </Tabs>
        </AppBar>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "space-evenly",
            width: "25%"
          }}
        >
          <Button
            style={pageCount.page > 1 ? null : { visibility: "hidden" }}
            medium
            onClick={() => {
              if (pageCount.page >= 0)
                fetchDevelopers(
                  setDevelopers,
                  setPageCount,
                  Number(pageCount.page) - 1,
                  filter
                );
            }}
          >
            Prev
          </Button>
          <Button
            style={
              pageCount.page < pageCount.total_pages
                ? null
                : { visibility: "hidden" }
            }
            medium
            onClick={() => {
              if (pageCount.page <= pageCount.total_pages)
                fetchDevelopers(
                  setDevelopers,
                  setPageCount,
                  Number(pageCount.page) + 1,
                  filter
                );
            }}
          >
            Next
          </Button>
        </div>

        <div className={classes.divContainer} style={{ width: "100%" }}>
          {developers.map(dev =>
            dev.devType === filter || filter === "All" ? (
              <div className={classes.cardContainer} key={dev.id}>
                <Card
                  className={classes.root}
                  onClick={() => history.push(`/profile/${dev.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <Grid className={classes.grid}>
                    {dev.profile_picture_url ? (
                      <Avatar
                        alt={dev.firstName}
                        className={classes.purpleAvatar}
                        src={dev.profile_picture_url}
                      />
                    ) : (
                      <Avatar
                        alt={dev.firstName}
                        className={classes.purpleAvatar}
                      >
                        {dev.firstName.charAt(0) + dev.lastName.charAt(0)}
                      </Avatar>
                    )}
                    <CardHeader
                      subheader={`${dev.firstName} ${dev.lastName}`}
                    />
                    <Pill devType={dev.devType}>{dev.devType}</Pill>
                  </Grid>
                  <Divider variant="middle" />
                  <p>Skills: {dev.skills}</p>
                  <EmailDrawer
                    center
                    buttonText={`Message ${dev.firstName} `}
                    emailAddress={dev.email}
                    firstName={user.firstName}
                  />
                </Card>
              </div>
            ) : null
          )}
        </div>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "space-evenly",
            width: "25%"
          }}
        >
          <Button
            medium
            style={pageCount.page > 1 ? null : { visibility: "hidden" }}
            onClick={() => {
              if (pageCount.page >= 0)
                fetchDevelopers(
                  setDevelopers,
                  setPageCount,
                  Number(pageCount.page) - 1,
                  filter
                );
              window.scrollTo(0, 0);
            }}
          >
            Prev
          </Button>
          <Button
            style={
              pageCount.page < pageCount.total_pages
                ? null
                : { visibility: "hidden" }
            }
            medium
            onClick={() => {
              if (pageCount.page <= pageCount.total_pages)
                fetchDevelopers(
                  setDevelopers,
                  setPageCount,
                  Number(pageCount.page) + 1,
                  filter
                );
              window.scrollTo(0, 0);
            }}
          >
            Next
          </Button>
        </div>
      </>
    );
  }
};

export default Developers;
