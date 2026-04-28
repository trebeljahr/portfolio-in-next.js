import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Coding from "@material-ui/icons/Code";
import Home from "@material-ui/icons/Home";
import Photography from "@material-ui/icons/PhotoCamera";
import Contact from "@material-ui/icons/Send";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {["Home", "Photography", "Coding", "Contact"].map((text, _index) => {
            return (
              <Link key={text} href={"/" + (text === "Home" ? "" : text.toLowerCase())}>
                <ListItem button>
                  <ListItemIcon>
                    {text === "Photography" ? (
                      <Photography color="primary" />
                    ) : text === "Coding" ? (
                      <Coding color="primary" />
                    ) : text === "Home" ? (
                      <Home color="primary" />
                    ) : (
                      <Contact color="primary" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    );

    return (
      <div>
        <div className="absolute">
          <Button onClick={this.toggleDrawer("right", true)}>
            <i className="fas fa-bars" />
          </Button>
          <style jsx>{`
            i {
              background: white;
              padding: 10px;
              border-radius: 50%;
            }
            .absolute {
              position: absolute;
              color: black;
              z-index: 200;
              top: 20px;
              right: 5vw;
              margin: 0;
            }
          `}</style>
        </div>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer("right", false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
