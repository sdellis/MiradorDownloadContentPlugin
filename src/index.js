import Mirador from 'mirador';
import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrashOutlined'

/**
 *
 */
export class WindowDownloadContentPlugin extends Component {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * Take action when the component mounts for the first time
   */
  componentDidMount() {
    if (this.selectedRef) {
      // MUI uses ReactDOM.findDOMNode and refs for handling focus
      ReactDOM.findDOMNode(this.selectedRef).focus(); // eslint-disable-line react/no-find-dom-node
    }
  }
  /**
   * @private
   */
  handleSelectedRef(ref) {
    if (this.selectedRef) return;

    this.selectedRef = ref;
  }
  /**
   * @private
   */
  handleChange(value) {
    // const { windowId, setWindowViewType } = this.props;
    //
    // setWindowViewType(windowId, value);
    alert('Download this stuff');
  }

    /**
   * render
   *
   * @return {type}  description
   */
  render() {
    const {
      classes, t,
    } = this.props;

    return (
      <>
        <button
          type="button"
          className: 'download'
          onClick={() => { this.handleChange('image');}}
        >Click Me!
        </button>
        // <ListSubheader role="presentation" tabIndex="-1">{t('download')}</ListSubheader>
        //
        // <MenuItem
        //   className={classes.MenuItem}
        //   ref={ref => this.handleSelectedRef(ref)}
        //   onClick={() => { this.handleChange('image'); handleClose(); }}
        // >
        //   <FormControlLabel
        //     value="single"
        //     classes={{ label: 'image' }}
        //     control={<RestoreFromTrashIcon />}
        //     label={t('image')}
        //     labelPlacement="bottom"
        //   />
        // </MenuItem>
      </>
    );
  }
}

// const mapStateToProps = state  => ({
//   deletedTodos: state.deletedTodos
// });
//
// const mapDispatchToProps = {
//   addTodoItem: Mirador.actions.addTodoItem
// }

const plugin = {
  target: 'WindowTopBarButtons',
  modus: 'replace',
  component: WindowDownloadContentPlugin,
  // mapStateToProps: mapStateToProps,
  // mapDispatchToProps: mapDispatchToProps,
  // reducers: {
  //   deletedTodos: deletedTodosReducer,
  // }
};

export default plugin;
