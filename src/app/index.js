import React from 'react'
import actionCreators from '../redux/actions'

import connect from 'react-redux/lib/components/connect'
import {Header, Body, Sidebar, Main} from 'app/layout'

import 'antd/dist/antd.less'
import 'themes/global'
import {message} from 'antd'

class Comp extends React.Component {
  componentDidMount() {
    this.refs.sidebar.openKey = this.props.location.pathname
  }

  componentWillReceiveProps(nextProps) {
    this.refs.sidebar.openKey = nextProps.location.pathname
  }

  render() {
    const props = {
      name: 'userfile',
      multiple: false,
      listType: 'picture',
      action: 'http://www.cms.com/api/files',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };


    return <div>
      <Header />
      <Body>
      <Sidebar ref="sidebar" />
      <Main>
        {this.props.children}
      </Main>
      </Body>
    </div>
  }
}

module.exports = Comp
