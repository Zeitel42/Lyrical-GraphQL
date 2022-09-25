import React, { Component } from "react";

class LyricList extends Component {
  onLyricLike(id) {
    console.log(id);
    // this.props
    //   .mutate({ variables: { id } })
    //   .then(() => this.props.data.refetch());
  }
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <div>
          <li key={id} className="collection-item">
            {content}
            <i
              className="like material-icons"
              onClick={() => this.onLyricLike(id)}
            >
              thumb_up
            </i>
          </li>
        </div>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
