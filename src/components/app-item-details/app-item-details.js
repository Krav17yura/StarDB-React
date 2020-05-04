import React, { Component } from 'react';
import './app-item-details.css';
import GotServices from '../../services/got-services'
import Spinner from '../spinner'
import AppError from '../app-error'
import AppErrorButton from '../app-error-button'

const Record = ({ itemInfo, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemInfo[field]}</span>
    </li>
  )
}
export { Record };



export default class AppItemDetails extends Component {

  state = {
    itemInfo: null,
    loading: true,
    error: false,
    imageUrl: null
  }
  GotServices = new GotServices();


  componentDidMount() {
    this.onItemDetailsUpdate();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.onItemDetailsUpdate()
      this.setState({ loading: true });
    }
  }

  onItemDetailsUpdate() {
    const { getData, selectedItem } = this.props
    getData(selectedItem)
      .then(this.onItemDetailsLoading)
      .catch()
  }

  onItemDetailsLoading = (itemInfo) => {
    this.setState({ itemInfo, loading: false, imageUrl: this.props.getImg(itemInfo) })
  }

  render() {
    if (!this.state.itemInfo) {
      return <span>Select a Item from a list</span>
    }

    const { itemInfo, loading, error, imageUrl } = this.state
    const spinner = (loading) ? <Spinner /> : null;
    const errorMessage = (error) ? <AppError /> : null;
    const content = !(loading || error) ? <Content itemInfo={itemInfo} imageUrl={imageUrl} propss={this.props.children}/> : null;

    return (
      <div className="item-details card">
        {spinner}
        {errorMessage}
        {content}
      </div>
    )
  }
}


const Content = ({ itemInfo, imageUrl, propss }) => {
 const {name} = itemInfo 
  return (
    <React.Fragment>
      <img className="item-image"
        src={imageUrl} alt="" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
           {
             React.Children.map(propss, (children) => {
             return React.cloneElement(children, {itemInfo}) 
             })
           }
        </ul>
        <AppErrorButton />
      </div>
    </React.Fragment>
  )
}