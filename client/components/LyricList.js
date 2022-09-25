import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricList extends Component {
  onLyricLike(id) {
    console.log(id);
    this.props.mutate({ variables: { id } });
  }
  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <div>
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              <i
                className="like material-icons"
                onClick={() => this.onLyricLike(id)}
              >
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        </div>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;
export default graphql(mutation)(LyricList);
