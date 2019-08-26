import React from 'react';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status,
  };
  
  activateEditMode = () => {
    this.setState(
      {
        editMode: true,
      }
    )
  };
  
  deactivateEditMode = () => {
    this.setState(
      {
        editMode: false,
      }
    );
    this.props.updateStatus(this.state.status);
  };
  
  render() {
    return (
      <>
        {!this.state.editMode &&
        <div className={styles.wrapper}>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || "No Status"}</span>
        </div>}
        {this.state.editMode &&
        <div>
          <input
            onChange={this.onStatusChange}
            onBlur={this.deactivateEditMode}
            autoFocus={true}
            value={this.state.status}/>
        </div>}
      </>
    )
  }
  
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }
}

export default ProfileStatus;