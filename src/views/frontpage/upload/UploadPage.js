import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import message from 'antd/lib/message';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import uuid from 'uuid/v1';

import {upload, addDocument} from "../../../firebase";

import {makeSelectAuth} from "../../../modules/auth";

class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    const {auth: {user}} = this.props;
    const id = uuid();
    upload(`images/${id}-${files[0].name}`, files[0])
      .then(downloadURL => {
        addDocument('images', {creatorId: user.uid, image: downloadURL, name: files[0].name})
          .then(response => {
            message.success('Upload successfully');
          }).catch(error => console.log(error));
      })
      .catch(e => console.log(e));
  }

  render() {
    const {auth: {user}} = this.props;
    return (
      <div>
        <div style={{textAlign: 'center', padding: '200px'}}>
          <Dropzone
            accept="image/*"
            onDrop={this.onDrop}
            multiple={false}
          >
            Drop file here or click to upload.
          </Dropzone>
        </div>
      </div>
    );
  }
}

UploadPage.propTypes = {};

const mapStateToProps = (state) => {
  const auth = makeSelectAuth(state);
  return {
    auth
  };
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);
