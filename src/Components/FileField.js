import React, { Component } from "react";
import PreviewPicture from './PreviewPicture'

class FileField extends Component {
  constructor(state) {
    super(state);
    this.state = {
      picture: null,
      pictureUrl: null
    };
  }
  render() {
    const { label, required, input } = this.props;
    delete input.value;
    return (
      <div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            {`${label} ${required ? "*" : ""}`}{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="file"
              className="form-control"
              {...input}
              onChange={(event) => {
                this.displayPicture(event);
              }}
            />
          </div>
        </div>
            <PreviewPicture pictureUrl={this.state.pictureUrl} />
      </div>
    );
  }
  displayPicture(event) {
      console.log('event',event)
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
        this.setState({
            picture: file,
            pictureUrl: reader.result
        })
    }
    reader.readAsDataURL(file)
  }
}

export default FileField;
