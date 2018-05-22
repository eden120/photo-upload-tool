import React, {Component} from 'react';
import { Table, Avatar } from 'antd';
import {firestore as db, unwrapSnapshot} from '../../../firebase';

const columns = [{
  title: 'Image',
  dataIndex: 'image',
  key: 'image',
  render: img => <Avatar src={img}/>,
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}];

class ListImage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = ({
      images: [],
    });
  }

  componentWillMount() {
    const {uid} = this.props;
    db.collection("images").where("creatorId", "==", uid)
      .onSnapshot((querySnapshot) => {
        let images = [];
        querySnapshot.forEach(function (doc) {
          images.push(unwrapSnapshot(doc));
        });
        this.setState({
          images,
        })
      });
  }

  render() {

    return (
      <Table rowKey="id" columns={columns} dataSource={this.state.images} />
    );
  }
}

ListImage.propTypes = {};

export default ListImage;
