import React from 'react'
import {connect} from 'react-redux'
import {createButtonsStructure} from "../helpers/createButtonsStructure";
import {addButtons, clickOnButton, selectItem, toggleDisable} from "../actions";
import GenericButton from "./presentational/buttons/GenericButton";
import {MAX_SELECTED_BUTTONS} from "../constants/otherConstants";
import FormFields from "./FormFields";
import {getComments} from "../api/getComments";
import Comments from "./presentational/Comments";
import Timer from "./Timer";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentId: 1
    };

    //this cuts my eternal loop on componentDidUpdate rerender
    this.triggerUpdate = true;

    this.requestNewComments = this.requestNewComments.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(addButtons(createButtonsStructure(80)));
    this.requestNewComments()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.triggerUpdate) {
      if (this.props.totalSelected.length + 1 <= MAX_SELECTED_BUTTONS) {
        this.props.dispatch(toggleDisable(false));
      } else {
        this.props.dispatch(toggleDisable(true));
      }
      this.triggerUpdate = false;
    }
  }

  submitActions (item) {
    this.props.dispatch(clickOnButton(item.id));
    this.props.dispatch(selectItem(item.id));
    this.triggerUpdate = true;
  };

  requestNewComments () {
    this.props.dispatch(getComments(this.state.commentId));
    this.setState({commentId: this.state.commentId < 100 ? this.state.commentId + 1 : 1})
  }

  render() {
    return (
      <div className="dashboard">
        {
          this.props.buttonsList && this.props.buttonsList.map((item) => {
            return (
              <GenericButton
                key={item.id}
                isDisabled={item.disabled}
                selected={item.selected}
                buttonText={item.id + 1}
                clickHandler={() => this.submitActions(item)}
              />
            )
          })
        }
        <FormFields selectedLines={this.props.totalSelected.length} />
        <Timer requestNewComments={this.requestNewComments} />
        {
          this.props.comments.map((item,index) => {
            return (
            <Comments
              name={item.name}
              key={item.id}
              id={index + 1}
              activeButtonsCount={this.props.totalSelected.length}
            />
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  buttonsList: state.dashBoard.buttonsList,
  totalSelected: state.dashBoard.totalSelected,
  comments: state.dashBoard.comments
});


export default connect(mapStateToProps)(Dashboard);
