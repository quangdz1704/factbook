import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Hidden, Paper } from "@material-ui/core";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { lightPrimary } from "../../assets/Colors";
import Style from "../home/Style";

const SearchResult = () => {
    const { result } = useSelector(state => state.searchPost);
    return (
        <div>
            <section>
                <p>Mọi người</p>
                <ul>
                    {result?.user?.map((e, key) => {
                        return <li key={key}>
                            <Link to={`#`} style={{ whiteSpace: "break-spaces" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Avatar src={`${process.env.REACT_APP_SERVER}${e.avatar}`} /> &nbsp;&nbsp;
                                    <div>{e.surName + " " + e.firstName}</div>
                                </div>
                            </Link>
                        </li>
                    })
                    }
                </ul>
            </section>
            <section>
                <p>Bài viết</p>
                <ul>
                    {result?.post?.map((item, key) => {
                        return <li key={key}>
                            <Link to={`#`} style={{ whiteSpace: "break-spaces" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Avatar src={`${process.env.REACT_APP_SERVER}${item.creator.avatar}`} /> &nbsp;&nbsp;
                                    <div>{item.creator.surName + " " + item.creator.firstName}</div>
                                </div>
                                <p>{item.content}</p>
                            </Link>
                        </li>
                    })
                    }
                </ul>
            </section>
        </div>
    )
}

const Search = () => {
    const classes = Style();
    return (
        <ThemeProvider>
            <Paper
                elevation={0}
                className={classes.root}
                style={{ backgroundColor: lightPrimary }}
            >

                <Grid className={classes.app}>
                    <Grid item container className={classes.app__header} >
                        {/* ----Header---- */}
                        <Header />
                    </Grid>
                    <Grid item container className={classes.app__body} >
                        {/* ----Body---- */}
                        <Hidden smDown>
                            <Grid item container className={classes.body__left} md={3}>
                                <Sidebar />
                            </Grid>
                        </Hidden>

                        <Hidden smDown>
                            <Grid item container className={classes.body__feed} md={9}>
                                <SearchResult />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>

            </Paper>
        </ThemeProvider>
    );
};

export default Search;