import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

const styles = {
    imgContainer: {
        maxHeight: 200,
        overflow:  'hidden',
    },
    img: {
        maxWidth: 400,
        overflow: 'hidden',
        display:  'block',
        width:    '100%',
        height:   'auto',
    },
};

class ImagesCarousel extends React.Component {
  state = {
      activeStep: 0,
  };

  handleNext = () => {
      this.setState((prevState) => ({
          activeStep: prevState.activeStep + 1,
      }));
  };

  handleBack = () => {
      this.setState((prevState) => ({
          activeStep: prevState.activeStep - 1,
      }));
  };

  render () {
      const { classes, images } = this.props;
      const { activeStep } = this.state;
      const maxSteps = images.length;

      return (
          <div>
              <div className = { classes.imgContainer }>
                  <img
                      alt = { images[activeStep] }
                      className = { classes.img }
                      src = { images[activeStep] }
                  />
              </div>
              <MobileStepper
                  activeStep = { activeStep }
                  backButton = {
                      <Button
                          disabled = { activeStep === 0 }
                          size = 'small'
                          onClick = { this.handleBack }>
                &lsaquo; Back
                      </Button>
                  }
                  className = { classes.mobileStepper }
                  nextButton = {
                      <Button
                          disabled = { activeStep === maxSteps - 1 }
                          size = 'small'
                          onClick = { this.handleNext }>
                Next &rsaquo;
                      </Button>
                  }
                  position = 'static'
                  steps = { maxSteps }
              />
          </div>
      );
  }
}

ImagesCarousel.propTypes = {
    classes: PropTypes.object.isRequired,
    images:  PropTypes.array.isRequired,
};

export default withStyles(styles)(ImagesCarousel);
