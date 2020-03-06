import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class CircularImageCard extends React.Component {
  render() {
    return (
      <Grid item sm={4} >
        <Card style={{ height: "100%" }}>
            <CardContent>
              <img src={require("../../Assets/imgs/" + this.props.imgThumb)}></img>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center" }}
              >
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {this.props.detail}
              </Typography>
            </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default CircularImageCard;